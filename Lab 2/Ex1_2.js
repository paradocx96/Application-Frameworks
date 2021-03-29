//Ex1 Continue

function getValue(callback) {
    let value = 0;
    setTimeout(function () {
        value = 10;
        // This is the anonymous function defined in line 20
        callback(value);
    }, 1000);
}

function getNewValue(value, callback) {
    setTimeout(function (){
        // This is the anonymous function defined in line 22
        callback(value*100);
    }, 1000);
}

// Calling the function defined at line number 3
getValue(function (value) {
    // Calling the function defined at line number 12
    getNewValue(value, function (newValue){
        console.log(newValue);
    });
});

// Callback Hell Example

// getValue(function (value) {
//     getNewValue(value, function (newValue){
//         console.log(newValue);
//         getNewValue(value, function (newValue){
//             console.log(newValue);
//             getNewValue(value, function (newValue){
//                 console.log(newValue);
//                 getNewValue(value, function (newValue){
//                     console.log(newValue);
//                     getNewValue(value, function (newValue){
//                         console.log(newValue);
//                         getNewValue(value, function (newValue){
//                             console.log(newValue);
//                             getNewValue(value, function (newValue){
//                                 console.log(newValue);
//                                 getNewValue(value, function (newValue){
//                                     console.log(newValue);
//                                     getNewValue(value, function (newValue){
//                                         console.log(newValue);
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
