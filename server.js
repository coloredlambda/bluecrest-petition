const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Initializing an express server instance
const app = express();

//Setting the directory for the server to load static files from
app.use(express.static(path.join(__dirname, 'client/build')));

//Setting up body-parser to handle JSON requests
app.use(bodyParser.json());

// Starting the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started on port ', port)
});