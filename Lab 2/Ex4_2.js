//Ex4 Continue

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

function setValue(value){
    return value + 1999;
}

// asynchronous function
// async function are supposed to return promises
// Synchronous behaviour
async function print(){
    // await use to promise
    let value = await getValue();
    value = await getNewValue(value);
    value = setValue(value);
    return value;
}

print().then(function (value){
    console.log(value);
});