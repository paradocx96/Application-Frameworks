// ==================================================
// Callback with setTimeout example

function getValue(next) {
    let value = 0;
    setTimeout(function () {
        value = 10;
        next(value);
    }, 2000);
}

const execute = function (value) {
    console.log(value);
}

getValue(execute);

// ==================================================
// Callback simple example
function getVal(next) {
    value = 100;
    next(value);
}

getVal(function (value) {
    console.log(value);
});