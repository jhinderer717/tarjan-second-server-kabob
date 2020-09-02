const express = require('express');

console.log('Look I am a server!');

// Create an express app
const app = express();


// listen for requests
const port = 3000;
app.listen(port, function() {
    console.log("This is Dr. Mantis Toboggan");
});