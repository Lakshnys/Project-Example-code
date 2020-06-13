console.log(123);

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// method: array shorting; for loop to compare "num" value with array and return the index.

var numbers = [1, 2, 3, 4];
var num = 1.5;
console.log(numbers);

function getIndexToIns(arr, numG) {
    arr.sort(function (a, b) {
        return a - b;
    })

    var lessThanArr = [];
    var graterThanArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (numG > arr[i]) {
            lessThanArr.push(arr[i]);
        } else {
            graterThanArr.push(arr[i]);
        }
    }
    let lIndex = lessThanArr[lessThanArr.length - 1];
    let gIndex = graterThanArr[0];

    let lowNum = arr.indexOf(lIndex);
    let high = arr.indexOf(gIndex);

    if (high < 0) {
        high = lowNum + 1;
    }
    if (lowNum < 0) {
        lowNum = 0;
    }
    // console.log(lowNum);
    console.log(high);
    return high;
}


console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([3, 10, 5], 3)); // 0
// console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
// console.log(getIndexToIns([2, 20, 10], 19)); // 2
// console.log(getIndexToIns([2, 5, 10], 15)); // 3
// console.log(getIndexToIns([], 1)); // 0


