console.log(123);
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    // Only change code below this line
    let newArr = [];
    newArr = arr.slice(0, arr.length);
    return newArr.sort(function (a, b) {
        return a - b;
    });
    // Only change code above this line
}
console.log(globalArray);
console.log(nonMutatingSort(globalArray));
