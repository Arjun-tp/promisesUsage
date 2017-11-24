/**
 * Created by arjun on 24/11/17.
 */

var isLeaveConfirmed = false; //This is the variable which describes the behavior of promise function

var canGoForTrip = new Promise(function (resolve,reject) {
    if(isLeaveConfirmed){
        var tripTo = {
            place : 'Goa',
            days : 5
        };
        resolve(tripTo);
    }else {
        var reason = new Error('Tasks not yet completed');
        reject(reason);
    }
});


var askForLeave = function () {
    canGoForTrip
        .then(function (fulfilled) {
            console.log("Leaves are confirmed",fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);//error.message returns only the message
        })
};



askForLeave();