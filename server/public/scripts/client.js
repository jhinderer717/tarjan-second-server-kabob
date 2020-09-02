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
        url: '/activities',
        method: 'GET'
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
    }).catch(function(errorInfo){
        console.log('Something bad happened!', errorInfo);
        alert("Server is down, try again later");
    }); // end of AJAX .then()





    // Handle new activity form
    $(document).on('click', '#submitBtn', onSubmit);


} // end onReady


function onSubmit() {
    let newActivity = {
        activity: $('#activityInput').val(),
        type: $('#typeInput').val(),
        isScreentime: $('#isScreenTime').is(':checked')
    };
    console.log('new activity', newActivity);
}