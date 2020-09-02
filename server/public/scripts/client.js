console.log('client.js');

$(document).ready(onReady);

function onReady(){
    console.log('I am ready');


    /* Activity data looks like
    
    {
        activity: "Typing practice",
        isScreentime: true,
        type: "Mind Exercises"
    },
    */
    //let activities = ???;

    // AJAX!!!!!!!!
    $.ajax({
        url: '/activities'
    }).then(function(activities){
        console.log("We got a response!", activities);

        // Render activities
        for (let activity of activities) {
            $('tbody').append(`
            <tr>
                <td>${activity.activity}</td>
                <td>${activity.isScreenTime}</td>
                <td>${activity.type}</td>
            </tr>
            `);
        } // end of for loop
    }); // end of AJAX .then()
} // end onReady