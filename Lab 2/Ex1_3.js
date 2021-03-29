//Ex1 Continue

// Promise implementation
// Resolve is for success
// Reject is for error
// Promise object that accept function
// Inside the promised should do asynchronous operation
// promise has then, catch, .. etc functions

function getValue() {
    let value = 0;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            value = 10;
            resolve(value);
        }, 1000);
    });
}

getValue().then(function (value) {
    console.log(value);
});
// in this function it's call resolve function inside the getValue() function