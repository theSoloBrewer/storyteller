/* import mongoose from "mongoose";
import Character from './models/character.js';
import { Event } from "./models/utils.js"; */

/* import fs from 'fs';
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



console.log(importedModules) */


/* mongoose.connect("mongodb://127.0.0.1:27017/storyteller");

const bday = new Event({
    datetime: "2000-01-01"
});

const npc = new Character({
    given_name: "random",
    birth: bday,

})


console.log(npc.given_name);

await npc.save()
await bday.save()

const person = await Character.findOne({ given_name: "random" }).populate('birth').exec();
console.log(person.given_name + 's birthday is ' + person.birth.datetime); */