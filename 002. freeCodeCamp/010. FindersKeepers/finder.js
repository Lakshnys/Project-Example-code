// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

// function findElement(arr, num) {
// for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] % num === 0) {
//    (num => num % 2 === 0) 
//         return arr[i];
//     }
// }
// }
// num = a[i]

function findElement(arr, func) {
    for (let i = 0; i < arr.length; ++i) {
       if(func(arr[i])){
           return arr[i];
       }      
    }
}

console.log(findElement([1, 3, 9, 8, 6, 7], num => num % 2 === 0)); // 8
console.log(findElement([1, 9, 8, 6, 7], num => num % 3 === 0)); // 9
