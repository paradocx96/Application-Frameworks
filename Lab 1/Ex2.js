//Ex2
//============================================

var car = {
    car_brand: "Toyota",
    car_price: 10000,

    car_dis: function () {
        console.log("car function inside car object");
        console.log(this.car_brand);
        console.log(this.car_price);
    }
};

car.car_dis();

//============================================
