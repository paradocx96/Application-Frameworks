//Ex1
//============================================

function display() {
    console.log("Hello World!");
}

display();

//============================================

var res = function () {
    console.log("This is 1 Function");
}

function printer(fun) {
    fun();
}

printer(res);

//============================================

var res2 = function () {
    return function () {
        console.log("This is 2 Function");
    }
}

function printer2(fun) {
    var execute = fun();
    execute();
}

printer2(res2);

//============================================