console.log(123);
// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

// let arr = ["a", "b", "c", "d", "e"];
// let num = 2;
// let arr = ([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// let num = 2;

function chunkArrayInGroups(arr, size) {
    let resArr = [];
    let arrLen = Math.ceil(arr.length / size);
    console.log(arrLen);
    for (let i = 0; i < arrLen; ++i) {
        resArr.push(arr.slice(0, size));
        arr.splice(0, size);
    }
    console.log(resArr);
    return resArr;
    // console.log(arr);
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

// // let arr2 = arr.slice(0, num);
// resArr.push( arr.slice(0, num));
// arr.splice(0, num);

// // let arr3 = arr.slice(0, num);
// resArr.push( arr.slice(0, num))
// arr.splice(0, num);

// resArr.push(arr);



