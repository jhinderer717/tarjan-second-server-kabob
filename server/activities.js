const activities = require('./data.js');
const express = require('express');

// create a router for activities
const router = express.Router();

// Endpoint (aka "route")
// GET /activities
// Respond with a list of activities
router.get('/activities', function(req, res) {
    // Send back the array of activities
    res.send(activities);
});

// Endpoint
// POST /activities
// Create a new activity
// and add it to our activities array
router.post('/activities', function(req, res){
    console.log('I got a new request!', req.body);
    let newActivity = req.body;

    /*if(newActivity === undefined){
        res.sendStatus(404);
        return false
    }*/

    // Add the new activity to our list of activities
    activities.push(newActivity);
    res.send(newActivity);
});

// export our router
// so our server can use it
module.exports = router;