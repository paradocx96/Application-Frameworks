//Ex1 Continue

function getValue() {
    let value = 0;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            value = 10;
            resolve(value);
        }, 1000);
    });
}

function getNewValue(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(value * 100);
        }, 1000);
    });
}

// Promise chain impl
getValue().then(function (value) {
    return getNewValue(value);
}).then(function (value){
    console.log(value);
});