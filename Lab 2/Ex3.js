// Ex3

function getValue() {
    let value = 0;
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            value = 10;
            resolve(value);
        }, 1000);
    });
}

function getNewValue(value) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            resolve(value * 100);
        }, 1000);
    });
}

function setValue(value) {
    return value + 1999;
}

// asynchronous function
// async function are supposed to return promises
// Synchronous behaviour
async function print() {
    // await use to promise
    let value = await getValue();
    value = await getNewValue(value);
    return value;
}

print().then( (value) => setValue(value))
    .then(value => console.log(value));



const persons = {
    organization: 'Science',
    people: ['Jhon','Jane'],
    print: function () {
        this.forEach( value => {
            console.log(value, this.organization);
        });
    }
};

persons.print();

// Arrow function refers to where it going to declare
// Normal function refers to where it getting to execute