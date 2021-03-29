// Class creation
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

// Class creation
function Employee(name,occupation) {
    Person.call(this, name);
    this.occupation = occupation;
}

// Crating copy of Person prototype and pointing to that as the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Make sure Employee prototype for Employee
Employee.prototype.constructor = Employee;

// Adding getOccupation method to prototype
Employee.prototype.getOccupation = function() {
    return this.occupation;
}

var john = new Employee('john','Engineer');
var jane = new Employee('jane','Doctor');

console.log(john.getName());
console.log(john.getOccupation());
console.log(john);

console.log(jane.getName());
console.log(jane.getOccupation());
console.log(jane);

console.log(Person.prototype === Employee.prototype); // false
console.log(Person.__proto__ === Employee.__proto__); // true

