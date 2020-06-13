console.log(123);

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// method: array shorting; for loop to compare "num" value with array and return the index.

// Array shorting: 
// var numbers = [4, 2, 3, 1, 9, 6];
// var num = 5;
// var numbers = [40,60];
// var num = 50;
var numbers = [20,3,5];
var num = 19;
console.log(numbers);

numbers.sort(function (a, b) {
    return a - b;
});

console.log(numbers); // sorted number return from .sort function //
var bNum = [];
var cNum = [];
for (let i = 0; i < numbers.length; ++i) {
    if (num > numbers[i]) {
        bNum.push(numbers[i]);
        // console.log(numbers[i]);  
    } else {
        cNum.push(numbers[i]);
    }
}
// console.log(bNum[bNum.length-1]);
let lowIndex = bNum[bNum.length - 1];
let highIndex = cNum[0];
let a = numbers.indexOf(lowIndex);
let b = numbers.indexOf(highIndex)
console.log(a);
console.log(b);

// console.log(lowIndex);
// console.log(highIndex);

// console.log(cNum);


// function getIndexToIns(arr, num) {
//     return num;
//   }
// function getIndexToIns(arr, num) {
//     return num;
//   }

//   getIndexToIns([40, 60], 50);