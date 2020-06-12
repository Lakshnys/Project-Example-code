console.log(123);
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0); // copy array with out chnanging
  for (let i = arr1.length - 1; i >= 0; --i) {
    arr3.splice(n, 0, arr1[i]);
  }
  console.log(arr2);
  return arr3;
  console.log(123);
}

// console.log(arr2);
//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//   console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
