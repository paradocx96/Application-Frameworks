//Ex1

// Callback Pattern
// you can use callback or next for as argument in callback function.
// callback can be any word (callback or next or etc)
// callback always should a function
// callback easily violate "Single responsibility"
function getValue(callback) {
    let value = 0;
    setTimeout(function () {
        value = 10;
        callback(value);
    }, 2000);
    return value;
}

getValue(function (val) {
    console.log("Callback function " + val);
});

//============================================

function getVal(callback) {
    let value = 0;
    setTimeout(function () {
        value = 10;
        callback(value);
    }, 2000);
}

getVal(function (res) {
    console.log("Callback function " + res);
});

//============================================