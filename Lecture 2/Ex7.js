// Starting with hashTag #variable this is private variable

// 'use strict' is strict notation.
// for developers It will minimise error nus or potentially error nus in JS
// for community It will introduce newer features varieties of JS

'use strict';

//Wrapper keywords class, extends, super, get, set
class Vehicle {
    static INSTANCES = 0;

    constructor(type) {
        Vehicle.INSTANCES++;
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class Car extends Vehicle {
    constructor(name) {
        super('Car');
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const car = new Car('Toyota');
console.log(car.getType());
console.log(car.getName());
console.log(Vehicle.INSTANCES);