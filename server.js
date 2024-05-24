import express from 'express';
import mongoose from 'mongoose';

import api from './api.js';
export const app = express();

// handling CORS 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route for handling api requests 
app.use('/api', api);

// Database connection
mongoose.connect('mongodb://localhost:27017/storyteller');

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
