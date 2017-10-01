const express = require('express');
const secrets = require('./secrets');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const comments = require('./models/comments');
const path = require('path');

//Initializing an express server instance
const app = express();

//Setting up connection to the database
mongoose.connect(`mongodb://${secrets.username}:${secrets.password}@ds157444.mlab.com:57444/bluecrest-petition`, {
    useMongoClient : true
});

//Watching for DB events
const db = mongoose.connection;

db.on('open', () => {
    console.log('Database connection opened successfully');
});

db.on('error', () => {
    console.log('Error while opening the database connection');
});

//Watching for DB events end

//Setting the directory for the server to load static files from
app.use(express.static(path.join(__dirname, 'client/build')));

//Setting up body-parser to handle JSON requests
app.use(bodyParser.json());

//API endpoints
app.post('/signPetition', (req, res) => {
    let name = req.body.name;
    let text = req.body.text;

    const comment = new comments({
        name : name,
        text : text
    });

    comment.save(err => {
        if(err){
            console.log('There was an error while saving the comment to the database', err);
            res.send(false);
        }else{
            console.log('Comment successfully saved');
            res.send(true);
        }
    })
});

app.get('/getSignatures', (req, res) => {
    comments.find().exec((err, results) => {
        if(err){
            console.log('Error encountered while trying to fetch signatures', err);
            res.send(false);
        }else{
           console.log('Signatures fetched successfully');
           res.send(results)
        }
    })
});

// Starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server started on port ', port)
});