"use strict";

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

    return function (name) {
        console.log(whattosay + " " + name);
    };
}

// greet("hi")           returns
// function (name) {
//     console.log(whattosay + " " + name)
// } whattosay variable (name) still has the value stored in computer memory after it is executed


// sayHi = function (name) {
//     console.log("hi" + " " + name)
// }

sayHi = greet("hi");

sayHi("Amar");

function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }

    return arr;
}

fs = buildFunctions();
fs[0]();

function buildFunctions2() {

    var arr = [];

    var _loop = function _loop() {
        var j = i;
        arr.push(function () {
            console.log(j);
        });
    };

    for (var i = 0; i < 3; i++) {
        _loop();
    }

    return arr;
}

fs2 = buildFunctions2();
fs2[0]();
fs2[1]();

function buildFunctions3() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(function (j) {
            return function () {
                console.log(j);
            };
        }(i));
    }
    return arr;
}
fs3 = buildFunctions3();
fs3[0]();
fs3[1]();

function greet(greeting) {
    return function (name) {
        console.log(greeting + " " + name);
    };
}

var en = greet("Hello!");

en("Amar created a closure!!!");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImdyZWV0Iiwid2hhdHRvc2F5IiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzYXlIaSIsImJ1aWxkRnVuY3Rpb25zIiwiYXJyIiwiaSIsInB1c2giLCJmcyIsImJ1aWxkRnVuY3Rpb25zMiIsImoiLCJmczIiLCJidWlsZEZ1bmN0aW9uczMiLCJmczMiLCJncmVldGluZyIsImVuIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsU0FBZixFQUEwQjs7QUFFdEIsV0FBTyxVQUFTQyxJQUFULEVBQWU7QUFDbEJDLGdCQUFRQyxHQUFSLENBQVlILFlBQVksR0FBWixHQUFrQkMsSUFBOUI7QUFDSCxLQUZEO0FBSUg7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQUcsUUFBUUwsTUFBTSxJQUFOLENBQVI7O0FBRUFLLE1BQU0sTUFBTjs7QUFHQSxTQUFTQyxjQUFULEdBQTBCOztBQUV0QixRQUFJQyxNQUFNLEVBQVY7O0FBRUEsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksQ0FBcEIsRUFBdUJBLEdBQXZCLEVBQTRCO0FBQ3hCRCxZQUFJRSxJQUFKLENBQVMsWUFBVztBQUNoQk4sb0JBQVFDLEdBQVIsQ0FBWUksQ0FBWjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxXQUFPRCxHQUFQO0FBQ0g7O0FBRURHLEtBQUtKLGdCQUFMO0FBQ0FJLEdBQUcsQ0FBSDs7QUFJQSxTQUFTQyxlQUFULEdBQTJCOztBQUV2QixRQUFJSixNQUFNLEVBQVY7O0FBRnVCO0FBS25CLFlBQUlLLElBQUlKLENBQVI7QUFDQUQsWUFBSUUsSUFBSixDQUFTLFlBQVc7QUFDaEJOLG9CQUFRQyxHQUFSLENBQVlRLENBQVo7QUFDSCxTQUZEO0FBTm1COztBQUl2QixTQUFLLElBQUlKLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFBQTtBQUszQjs7QUFFRCxXQUFPRCxHQUFQO0FBQ0g7O0FBRURNLE1BQU1GLGlCQUFOO0FBQ0FFLElBQUksQ0FBSjtBQUNBQSxJQUFJLENBQUo7O0FBR0EsU0FBU0MsZUFBVCxHQUEyQjs7QUFFdkIsUUFBSVAsTUFBTSxFQUFWOztBQUVBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUN4QkQsWUFBSUUsSUFBSixDQUNLLFVBQVNHLENBQVQsRUFBWTtBQUNULG1CQUFPLFlBQVc7QUFDZFQsd0JBQVFDLEdBQVIsQ0FBWVEsQ0FBWjtBQUNILGFBRkQ7QUFHSCxTQUpBLENBSUNKLENBSkQsQ0FETDtBQVFIO0FBQ0QsV0FBT0QsR0FBUDtBQUNIO0FBQ0RRLE1BQU1ELGlCQUFOO0FBQ0FDLElBQUksQ0FBSjtBQUNBQSxJQUFJLENBQUo7O0FBSUEsU0FBU2YsS0FBVCxDQUFlZ0IsUUFBZixFQUF3QjtBQUNwQixXQUFPLFVBQVNkLElBQVQsRUFBYztBQUNqQkMsZ0JBQVFDLEdBQVIsQ0FBWVksV0FBVyxHQUFYLEdBQWlCZCxJQUE3QjtBQUNILEtBRkQ7QUFHSDs7QUFFRCxJQUFJZSxLQUFLakIsTUFBTSxRQUFOLENBQVQ7O0FBRUFpQixHQUFHLDJCQUFIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBtYWtlQWRkZXIoeCkge1xyXG5cclxuLy8gICByZXR1cm4gZnVuY3Rpb24oeSkge1xyXG5cclxuLy8gICAgIHJldHVybiB4ICsgeTtcclxuLy8gICB9O1xyXG5cclxuLy8gfVxyXG5cclxuLy8gdmFyIGFkZDUgPSBtYWtlQWRkZXIoNSk7XHJcbi8vIHZhciBhZGQxMCA9IG1ha2VBZGRlcigxMCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhhZGQ1KDIpKTtcclxuLy8gY29uc29sZS5sb2coYWRkMTAoMikpOyBcclxuXHJcbmZ1bmN0aW9uIGdyZWV0KHdoYXR0b3NheSkge1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cod2hhdHRvc2F5ICsgXCIgXCIgKyBuYW1lKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBncmVldChcImhpXCIpICAgICAgICAgICByZXR1cm5zXHJcbi8vIGZ1bmN0aW9uIChuYW1lKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyh3aGF0dG9zYXkgKyBcIiBcIiArIG5hbWUpXHJcbi8vIH0gd2hhdHRvc2F5IHZhcmlhYmxlIChuYW1lKSBzdGlsbCBoYXMgdGhlIHZhbHVlIHN0b3JlZCBpbiBjb21wdXRlciBtZW1vcnkgYWZ0ZXIgaXQgaXMgZXhlY3V0ZWRcclxuXHJcblxyXG4vLyBzYXlIaSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcImhpXCIgKyBcIiBcIiArIG5hbWUpXHJcbi8vIH1cclxuXHJcbnNheUhpID0gZ3JlZXQoXCJoaVwiKVxyXG5cclxuc2F5SGkoXCJBbWFyXCIpXHJcblxyXG5cclxuZnVuY3Rpb24gYnVpbGRGdW5jdGlvbnMoKSB7XHJcblxyXG4gICAgdmFyIGFyciA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgYXJyLnB1c2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFyclxyXG59XHJcblxyXG5mcyA9IGJ1aWxkRnVuY3Rpb25zKCk7XHJcbmZzWzBdKClcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYnVpbGRGdW5jdGlvbnMyKCkge1xyXG5cclxuICAgIHZhciBhcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGxldCBqID0gaTtcclxuICAgICAgICBhcnIucHVzaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coailcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyXHJcbn1cclxuXHJcbmZzMiA9IGJ1aWxkRnVuY3Rpb25zMigpO1xyXG5mczJbMF0oKVxyXG5mczJbMV0oKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkRnVuY3Rpb25zMygpIHtcclxuXHJcbiAgICB2YXIgYXJyID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBhcnIucHVzaChcclxuICAgICAgICAgICAgKGZ1bmN0aW9uKGopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhqKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KGkpKVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbn1cclxuZnMzID0gYnVpbGRGdW5jdGlvbnMzKCk7XHJcbmZzM1swXSgpXHJcbmZzM1sxXSgpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyZWV0KGdyZWV0aW5nKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihuYW1lKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhncmVldGluZyArIFwiIFwiICsgbmFtZSlcclxuICAgIH1cclxufVxyXG5cclxudmFyIGVuID0gZ3JlZXQoXCJIZWxsbyFcIik7XHJcblxyXG5lbihcIkFtYXIgY3JlYXRlZCBhIGNsb3N1cmUhISFcIikiXX0=