// Const 
const express = require('express');
const bodyParser = require('body-parser');
const activitiesRouter = require('./routers/activities');

console.log('Look I am a server!');

// Create an express app
const app = express();

// Serve static files from server/public folder
app.use(express.static('server/public'));

// Setup body parser to read request JSON body
app.use(bodyParser.urlencoded({ extended: true }));

// Use our activitiies router from ./activities.js
app.use('/activities', activitiesRouter);

// Listen for requests
const port = 3000;
app.listen(port, function() {
    console.log("This is Dr. Mantis Toboggan", port);
});