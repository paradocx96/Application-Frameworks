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

// async function are supposed to return promises
async function print(){
    let value = await getValue();

    try {
        value = await getNewValue(value);
    } catch (e) {}

    value = setValue(value);
    return value;
}

print().then(function (value){
    console.log(value);
});