/**
 * Created by arjun on 24/11/17.
 */

var flag = false;

var promiseVariable = new Promise(function (resolve,reject) {
    if(flag){
        var query = {
            name : 'XYZ',
            age : 12
        };
    }else {
        var reason = new Error('Not Possible');
        reject(reason);
    }
});


var mainFunc = function () {
    promiseVariable
        .then(function (fullfilled) {
            console.log("Done!!!!!");
        })
        .catch(function (error) {
            console.log(error.message);
        })
};



mainFunc();