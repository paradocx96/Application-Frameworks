// ============================================================
// Create Class

function Vehicle(name) {
    this.name = name;

    //Don't Do this
    // this.getName = function () {
    //     return this.name;
    // }
}

// Do as this
Vehicle.prototype.getName = function () {
    return this.name;
}

var honda = new Vehicle('honda');
var toyota = new Vehicle('toyota');

console.log(honda.getName());
console.log(honda);

console.log(toyota.__proto__ === honda.__proto__); //true
console.log(toyota.getName() === honda.getName()); //false

// ============================================================