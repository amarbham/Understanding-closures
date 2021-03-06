'use strict';

var buttons = Array.from(document.getElementsByTagName('button'));

function createHandler(name) {
  var count = 0;
  return function () {
    /* The closure */
    count += 1;
    console.log(name + ' clicked ' + count + ' times');
  };
}

buttons.forEach(function (button) {
  button.addEventListener('click', createHandler(button.innerHTML));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlSGFuZGxlciIsIm5hbWUiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxNQUFNQyxJQUFOLENBQVdDLFNBQVNDLG9CQUFULENBQThCLFFBQTlCLENBQVgsQ0FBaEI7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDM0IsTUFBSUMsUUFBUSxDQUFaO0FBQ0EsU0FBTyxZQUFNO0FBQUc7QUFDZEEsYUFBUyxDQUFUO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBZUgsSUFBZixpQkFBK0JDLEtBQS9CO0FBQ0QsR0FIRDtBQUlEOztBQUVEUCxRQUFRVSxPQUFSLENBQWdCLFVBQUNDLE1BQUQsRUFBWTtBQUMxQkEsU0FBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNQLGNBQWNNLE9BQU9FLFNBQXJCLENBQWpDO0FBQ0QsQ0FGRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpKTtcblxuZnVuY3Rpb24gY3JlYXRlSGFuZGxlcihuYW1lKSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIHJldHVybiAoKSA9PiB7ICAvKiBUaGUgY2xvc3VyZSAqL1xuICAgIGNvdW50ICs9IDE7XG4gICAgY29uc29sZS5sb2coYCR7bmFtZX0gY2xpY2tlZCAke2NvdW50fSB0aW1lc2ApO1xuICB9O1xufVxuXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVIYW5kbGVyKGJ1dHRvbi5pbm5lckhUTUwpKTtcbn0pO1xuIl19