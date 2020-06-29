console.log(123);
const newArray = []; // newArray declared in global scope
function sumAll(arr) {
    // return 1;
arr.sort((a, b) => a - b);

console.log(arr);

for(let i = 0; i <= arr[1] - arr[0]; i++){
  let y = arr[0];
  y = y+i;
  newArray.push(y);
//   console.log(y);
}
console.log(newArray);
let y = (acc,cv) => acc + cv;
let z = newArray.reduce(y);
return z;
  }
  console.log(newArray);

//  console.log( sumAll([5,1]));
// console.log(sumAll([9, 5]));
console.log(sumAll([5, 10]));

 console.log("****below with for loop array adding*****");
 
//  let arr = [1,2,3,4,5];
//  let newArray = [5, 6, 7, 8, 9, 10];
let len = newArray.length;
console.log(newArray);
let a;
let b = 0 ;
 for (let i = 0; i < len; ++i ){
     a = b + newArray[i];
     b = a;
    //  a = b+a;
    //  console.log(arr[i]);
    //  console.log("a = " + a);
     console.log("b = " + b);
 }
 console.log("Total: " + b);