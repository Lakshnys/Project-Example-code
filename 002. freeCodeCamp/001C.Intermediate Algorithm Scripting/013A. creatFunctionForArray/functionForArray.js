let num = 977;
let numArr = [];
let primAdd;
for(let j = 1; j <= num; ++j){
    numArr.push(j);
}
console.log(numArr);

let sumPrimes = function(arr){
    // console.log(arr);
    for(let i = 1; i < arr.length; ++i){
        // console.log(el);
        // let x = arr.splice(1,1);
        // console.log(x)
        for(let k = 0; k < arr.length; ++k){
            if(arr[k] % arr[i] === 0 && arr[k] > arr[i]){
                // console.log(arr.indexOf(arr[k]));
                arr.splice(arr.indexOf(arr[k]),1)
            }
        }
    }
    arr.splice(0,1);
    console.log(arr);
    let reduce = (a, b) => a + b;
         primAdd = arr.reduce(reduce);
         console.log(primAdd);
         return primAdd;
} 

sumPrimes(numArr);