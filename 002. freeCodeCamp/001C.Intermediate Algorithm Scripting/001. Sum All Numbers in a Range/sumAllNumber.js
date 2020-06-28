console.log(123);

function sumAll(arr) {
    // return 1;
arr.sort((a, b) => a - b);

console.log(arr);
let newArray = [];
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
//  console.log( sumAll([5,1]));
// console.log(sumAll([9, 5]));
console.log(sumAll([5, 10]));

 
 