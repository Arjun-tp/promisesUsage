/**
 * Created by arjun on 28/11/17.
 */


var salaryGot = true;

var canGiveRoomRent = new Promise(function (resolve,reject) {
   if(salaryGot){
       var query = {
           messBill : 4000,
           accomodation : 3000
       };
       resolve(query);
   }else {
       var reason = 'Did not get Salary';
       reject(reason);
   }
});
var askDebtFromFriend = function (phone) {
    return new Promise(function (resolve,reject) {
        var message = "Hey, I need some Money";
        resolve(message);
    })
};


var askForAdvanceSalary = function () {
    canGiveRoomRent
        .then(function (fullfilled) {
            console.log("Room Rent can be given",fullfilled);
        })
        .then(askDebtFromFriend)
        .catch(function (error) {
            console.log(error.message);
        })
};

askForAdvanceSalary();