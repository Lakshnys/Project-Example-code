// console.log(123);
/********** identify identical element in the array************** */
// function idealArray(arr1, arr2) {
//     var newArr = [];
//     let a, b;
//     for (key in arr1) {
//         a = arr1[key];
//         for (key1 in arr2) {
//             b = arr2[key1];
//             if (a === b) {
//                 newArr.push(b);
//                 console.log(a, b);
//             }
//         }
//     }
//     // console.log(arr2);
//     // console.log(newArr);
//     return newArr;
// }
// console.log(idealArray([1,2,3,5], [ 3,4,5,6,1,2]));
// console.log(idealArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArray([1,2,3,5], [ 3,4,5,6,1,2]));
// console.log(idealArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

/************removing identical element in the Array************* */
let diffArr1 = [];
let diffArr2 = [];
let newArr = [];
function diffArray(arr1, arr2) {
  // console.log(arr1.length);
  // console.log(arr2.length);
  let newArr1 = [];
  let newArr2 = [];
  if( arr1.length >= arr2.length){
      newArr1 = arr2;
      newArr2 = arr1;
  } else {
    newArr1 = arr1;
    newArr2 = arr2;
  }
    for (key in newArr1) {
        a = newArr1[key];
        if (newArr2.indexOf(a) < 0) {
            diffArr1.push(a);
        }
    }
    for (key in newArr2) {
        b = newArr2[key];
        if (newArr1.indexOf(b) < 0) {
            diffArr2.push(b);
        }
    }
    // if (diffArr1.length > diffArr2.length) {
        for (key in diffArr2) {
            diffArr1.push(diffArr2[key]);
        // }
    }
    for(key in diffArr1){
      if(newArr.indexOf(diffArr1[key])  < 0 ){
          newArr.push(diffArr1[key]);
      }
          }
    // console.log(diffArr1.indexOf(9));
    console.log(newArr);
    // console.log(diffArr1);
    // console.log(diffArr2);
    // console.log(x)
    return newArr;
}
// diffArray([7, 2, 3, 1,1,1,1,1,8,8,8,8,7, 6], [2, 3,3,2, 4, 5, 9]);
// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // ["pink wool"]

// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // ["diorite", "pink wool"]

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // ["diorite", "pink wool"]

// diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); // []

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]

// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); //  [4, "piglet"]

// diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);

// console.logdiffArrayl([1, "calf", 3, "piglet"], [7, "filly"])); // [1, "calf", 3, "piglet", 7, "filly"]

// diffArray([7, 2, 3, 1,1,1,1,1,8,8,8,8,7, 6], [2, 3,3,2, 4, 5, 9]);
// diffArray([7, 2, 3, 1,1,1,1,1,8,8,8,8,7, 6], [2, 3,3,2, 4, 5, 9]);