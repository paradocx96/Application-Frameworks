// ============================================================
// Create Class
// Class start with Upper case

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

var john = new Person('john');

console.log(john.getName());
console.log(john);

console.log(Person.prototype === john.__proto__); // true

// ============================================================