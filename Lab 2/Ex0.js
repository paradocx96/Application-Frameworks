//SetTimeout function
//SetTimeout is one time execution
setTimeout(function (){
        console.log("");
    }
)

function value() {
    let val = 0;
    setTimeout();
}

// greater than or equal to 1 (1000ms) second then execute
// SetTimeout is Asynchronous manner
setTimeout(function () {
    console.log("Value")
}, 1000);

//============================================
// Function without callback
function value() {
    let val = 0;
    setTimeout(function () {
        val = 10;
    }, 1000);
    return val;
}

console.log(value());

//============================================

// Promise implementation
// Resolve is for success
// Reject is for error
let promise = new Promise(function (resolve, reject) {
    resolve();
    reject();
});

//============================================