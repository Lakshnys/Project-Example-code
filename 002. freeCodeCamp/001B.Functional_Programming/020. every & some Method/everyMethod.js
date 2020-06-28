console.log(123);
function checkPositive(arr) {
    // Only change code below this line
 return arr.every(el => el > 0);
  
    // Only change code above this line
  }

  console.log(checkPositive([1, 2, 3, -4, 5]));
  console.log(checkPositive([1, -2, 3, -4, 5]));
  console.log(checkPositive([1, 2, 3, 4, 5]));

  var numbers = [1, 5, 8, 0, 10, 11,10];

console.log(numbers.every(function(currentValue) {
  return currentValue < 12;
}));
// Returns false
  