// console.log(123);
// Return true if the string in The first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// split words to letter and check wheather it is available in 1sr array..

function mutation(arr) {
    let arr1 = [];
    let arr2 = [];
    for (j = 0; j < arr[0].length; j++) {
        arr1[j] = arr[0][j];
    }
    for (k = 0; k < arr[1].length; k++) {
        arr2[k] = arr[1][k];
    }
    console.log(arr1); //  arr.0
    console.log(arr2); // arr.1
    for (let i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i]) < 0) {return false;
            var result = "false";
            // console.log(arr1.indexOf(arr2[0]));
            // console.log(arr1.indexOf(arr2[1]));
            // console.log(arr1.indexOf(arr2[2]));
            // console.log(arr2[i]);
        } else {
        
            return true;
            // console.log(arr1.indexOf(arr2[0]));
            // console.log(arr1.indexOf(arr2[1]));
            // console.log(arr1.indexOf(arr2[2]));
            // console.log(true);
        
        // console.log(result);
        // return result;
    }
    // return result;
}
}
console.log(mutation(["hello", "hLef"])); //true
// mutation(["hello", "rerr"]); //flase
// mutation(["Mary", "rMny"]); // true
// mutation(["floor", "orlfo"]); // true
// mutation(["hello", "neo"]); //false

// var a = "Noel";
// var b = "Ole";
// var a1 = [];
// for (j = 0; j < a.length; j++){
//     a1[j] = a[j];
// }
// console.log(a1);
// var b1 = [];
// for (k = 0; k < b.length; k++){
//     b1[k] = b[k];
// }
// console.log(b1);
// a1; 
// b1; 
// for(let i = 0; i < b.length; i++){
// if(a1.indexOf(b1[i]) > -1){
//     // console.log("true");
//     var result = "true";
// }else {
//     // console.log("false"); 
//     var result = "false"
// }
// // console.log(a.indexOf(b[i]));
// }
// console.log(result);

// var numArray = new Array(1,4,66,123,240,444,555);
// var i = 0;

// while (numArray[i] < 500) {
//      alert(numArray[i++]);
// }