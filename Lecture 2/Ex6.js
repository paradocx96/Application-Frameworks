
function Vehicle(type) {
    Vehicle.INSTANCES++;
    this.type = type;
}

// Class level variable
Vehicle.INSTANCES = 0;

Vehicle.prototype.INSTANCES = 0;

Vehicle.prototype.getType = function(){
    return this.type;
}

const car = new Vehicle('Car');
console.log(car.getType());
console.log(Vehicle.INSTANCES);

// Static - class level property
