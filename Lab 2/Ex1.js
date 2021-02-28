//Ex1
//============================================

// setTimeout(function (){
//         console.log("");
//     }
// )

// function value() {
//     let val = 0;
//     setTimeout();
// }

// setTimeout(function () {
//     console.log("Value")
// }, 1000);

// function getValue(callback) {
//     let value = 0;
//     setTimeout(function () {
//             value = 10;
//             callback(value);
//         },2000);
//     return value;
// }

// console.log(getValue(function (val){
//     console.log("Callback function " + val);
// }));

//============================================

function value() {
    let val = 0;
    setTimeout(function () {
        val = 10;
    }, 1000);
    return val;
}

console.log(value());

//============================================
// you can use callback or next for as argument in callback function.

// function getValue(callback) {
//     let value = 0;
//     setTimeout(function () {
//         value = 10;
//         callback(value);
//     }, 2000);
// }

// getValue(function (res) {
//     console.log("Callback function " + res);
// });

//============================================

function getValue(callback) {
    let value = 0;
    setTimeout(function () {
        value = 10;
        // This is the anonymous function defined in line 77
        callback(value);
    }, 1000);
}

function getNewValue(value, callback) {
    setTimeout(function (){
        // This is the anonymous function defined in line 79
        callback(value*100);
    }, 1000);
}

// Calling the function defined at line number 60
getValue(function (value) {
    // Calling the function defined at line number 69
    getNewValue(value, function (newValue){
        console.log(newValue);
    })
});

//============================================

let promise = new Promise(function (resolve, reject){
    resolve();
    reject();
})

