//Ex3
//============================================

var vehicleName = "Honda";

function printVehicleName() {
    console.log(this.vehicleName);
}

printVehicleName();

//============================================

var CarName = "Toyota";

function displayVehicleName() {
    console.log(this.CarName);
}

var car = {
    CarName: "Nissan",
    getCarName : displayVehicleName
}

displayVehicleName();
car.getCarName();

//============================================

var vName = "BMW";

function displayVName() {
    console.log(this.vName);
}

var vcar = {
    vName: "Axio",
    getVName : function () {
        return function () {
            console.log(this.vName);
        }
    }
}

displayVName();

var result = vcar.getVName();
result = result.bind(vcar); //without this it shows 2 BMWs
result();

//============================================