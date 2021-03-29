// ============================================================
// Create object

var john = {
    name: 'John',
    job: 'Engineer',
    getName: function () {
        return this.name;
    }
};

var jane = Object.create(john);

jane.name = 'Jane';
jane.job = 'Doctor';

console.log(john.getName());
console.log(jane.getName());
console.log(john);
console.log(jane);

console.log(john.getName() === jane.getName()); // false

// ============================================================

// == means whatever have both side check whether is equals
// === means check whether type and value

// ============================================================