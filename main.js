// function makeAdder(x) {

//   return function(y) {

//     return x + y;
//   };

// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2)); 

function greet(whattosay) {

    return function(name) {
        console.log(whattosay + " " + name)
    }

}



// greet("hi")           returns
// function (name) {
//     console.log(whattosay + " " + name)
// } whattosay variable (name) still has the value stored in computer memory after it is executed


// sayHi = function (name) {
//     console.log("hi" + " " + name)
// }

sayHi = greet("hi")

sayHi("Amar")


function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i)
        });
    }

    return arr
}

fs = buildFunctions();
fs[0]()



function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        let j = i;
        arr.push(function() {
            console.log(j)
        });
    }

    return arr
}

fs2 = buildFunctions2();
fs2[0]()
fs2[1]()


function buildFunctions3() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j)
                }
            }(i))
        )

    }
    return arr
}
fs3 = buildFunctions3();
fs3[0]()
fs3[1]()



function greet(greeting){
    return function(name){
        console.log(greeting + " " + name)
    }
}

var en = greet("Hello!");

en("Amar created a closure!!!")