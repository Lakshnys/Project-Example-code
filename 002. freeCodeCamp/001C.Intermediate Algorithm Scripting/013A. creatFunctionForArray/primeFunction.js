let sumPrimes = function(arr){

    let num = arr;
    let numArr = [];
    let primAdd;
    for(let j = 1; j <= num; ++j){
        numArr.push(j);
    }
    // console.log(numArr);
    for(let i = 1; i < numArr.length; ++i){
        for(let k = 0; k < numArr.length; ++k){
            if(numArr[k] % numArr[i] === 0 && numArr[k] > numArr[i]){
                // console.log(arr.indexOf(arr[k]));
                numArr.splice(numArr.indexOf(numArr[k]),1)
            }
        }
    }
    numArr.splice(0,1);
    // console.log(numArr);
    let reduce = (a, b) => a + b;
         primAdd = numArr.reduce(reduce);
         console.log(primAdd);
         return primAdd;
} 

sumPrimes(10);