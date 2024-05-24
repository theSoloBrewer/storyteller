import express from 'express';
import mongoose from 'mongoose';






import fs from 'fs';
import path from 'path';

const importedModules = [];

// Function to recursively import files in a directory
const importFilesRecursively = async (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            // If it's a directory, recursively call importFilesRecursively
            await importFilesRecursively(filePath);
        } else if (file.endsWith('.js')) {
            // If it's a JavaScript file, dynamically import it
            const moduleUrl = `file://${filePath}`;
            var m = await import(moduleUrl);
            const moduleNames = Object.keys(m);
            importedModules.push(...moduleNames);
            //console.log(`Imported module from ${filePath}`);
        }
    }
};

// Get the directory where your modules are located
const currentModuleDir = path.dirname(import.meta.url.replace(/^file:\/\/\//, ''));

// Directory where your modules are located
const modulesDir = path.join(currentModuleDir, 'models');

// Call importFilesRecursively with the modules directory
await importFilesRecursively(modulesDir)
    .then(() => {
        console.log('All modules imported');

    })
    .catch(err => console.error('Error importing modules:', err));




var router = express.Router();

importedModules.forEach(module => {

    // Dynamically import corresponding model
    const Model = mongoose.model(module.charAt(0).toUpperCase() + module.slice(1));
    // Route to get all
    router.get(`/${module}`, async (req, res) => {
        try {
            console.log(module)
            const elems = await Model.find();
            res.json(elems);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    // Route to create 
    router.post(`/${module}`, async (req, res) => {
        const elem = new Model(req.body);
        try {
            const newModel = await elem.save();
            res.status(201).json(newModel);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    // Route to get one 
    router.get(`/${module}/:id`, getModel, (req, res) => {
        res.json(res.elem);
    });

    // Middleware function to get an element by ID
    async function getModel(req, res, next) {
        let elem;
        try {
            //item = await Item.findById(req.params.id).populate('owner', 'given_name', Character).exec();
            elem = await Model.findById(req.params.id);
            if (elem == null) {
                return res.status(404).json({ message: `{Model.collection.collectionName} not found` });
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        res.elem = elem;
        next();
    }

    // Route to update 
    router.patch(`/${module}/:id`, getModel, async (req, res) => {
        // Iterate over all the fields in req.body
        Object.keys(req.body).forEach(key => {
            const value = req.body[key];
            // Now you can use the key and value for further processing
            res.elem[key] = req.body[key];
            console.log(`Field: ${key}, Value: ${value}`);
        });
        try {
            const updatedModel = await res.elem.save();
            res.json(updatedModel);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    // Route to delete
    router.delete(`/${module}/:id`, getModel, async (req, res) => {
        try {
            await res.elem.deleteOne();
            res.json({ message: `{Model.collection.collectionName} deleted` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

});

export default router