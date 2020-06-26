// console.log(123);
const squareList = (arr) => {
    // Only change code below this line
    let z = arr
        .filter((x) => {
            // let z vaiable id declared to store the result since filter and map will create new array on return.
            return (x = Math.round(x) === x && x > 0);
        })
        .map((y) => {
            return (y = y * y);
        });
    return z;
    // Only change code above this line
};
//   console.log(squareList);
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);

console.log(squaredIntegers);

//   var array = [-3, 4.8, 5, 3, -3.2];
// var array = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
var array = [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3];
/************************************************** */
// example with map, filter
//   let mapArray = array.map(z => {
//       return z = z * 2;
//   });
//   let filterArray = array.filter(x => {
//       return x = Math.round(x) === x && x > 0;
//   });
//   let sqrFilArray = filterArray.map(x => {
//       return x = x*x;
//   });
// console.log(mapArray);
// console.log(filterArray);
// console.log(sqrFilArray);
/***************************************************** */
// combining map and filter in single line with .operator
// var sInt = array.filter( x => {
//     return x = Math.round(x) === x && x > 0;
// }).map( y => {
//     return y = y * y;
// });
// console.log(sInt);
/***************************************************** */
// creating function
