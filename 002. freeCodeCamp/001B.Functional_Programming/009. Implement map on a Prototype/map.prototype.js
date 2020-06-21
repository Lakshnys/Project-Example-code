console.log(123);
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; ++i) {
        newArray[i] = callback(this[i]); // callback  - multiply this[i] each items with * 2;
    }
    // Only change code above this line
    return newArray;
};
var new_s = s.myMap(function (item) { 
    return item * 2;
});

console.log(s); // [23, 65, 98, 5]

console.log(new_s); // [46, 130, 196, 10]
