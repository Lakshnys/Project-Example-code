console.log(123);
// The global variable
var s = [23, 65, 98, 5, 8, 95];
TODO: 

Array.prototype.myFilter = function (callback) {

    var newArray = [];
    
    this.forEach((element) => {
        if (callback(element)) {
            // callback function called here for execution since the called function accepted arrugument so "element"
            newArray.push(element);
        }
    });
    return newArray;
};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
    // return item > 50;
});

console.log(new_s);



//   for (let i = 0; i < this.length; ++i){
//      if(this[i] % 2 === 1){
//          newArray.push(this[i]);
//      }
//   }
//   console.log(newArray);
// Only change code above this lelement

// function likes(name){
// 	console.log(this);
// 	this.forEach((name) => {
// 	console.log(name + " likes this");
// 	});
// }

// function likes(num1, num2){
// 	console.log(num1);
// };

// must be "Peter likes this"
// // likes(1,2)

// console.log(Object.values(likes)); // must be "Peter likes this");


