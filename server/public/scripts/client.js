console.log('client.js');

$(document).ready(onReady);

function onReady(){
    console.log('I am ready');

    refreshActivities();

    // Handle new activity form
    $(document).on('click', '#submitBtn', onSubmit);

} // end onReady


function refreshActivities() {
    // AJAX!!!!!!!!
    $.ajax({
        url: '/activities',
        method: 'GET'
    }).then(function(activities){
        console.log("We got a response!", activities);

        // Render activities
        $('tbody').empty();
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
}


function onSubmit() {
    let newActivity = {
        activity: $('#activityInput').val(),
        type: $('#activityType').val(),
        isScreenTime: $('#isScreenTimeInput').is(':checked')
    };
    console.log('new activity', newActivity);

    // Post /activities
    // with our newActivity object
    $.ajax({
        url: '/activities',
        method: 'POST',
        data: newActivity
    }).then(function(response){
        console.log('Created an activity', response);

        console.log('time to refresh');
        refreshActivities();
    }).catch(function(errorInfo){
        console.log('ruh-roh', errorInfo);
    });
}