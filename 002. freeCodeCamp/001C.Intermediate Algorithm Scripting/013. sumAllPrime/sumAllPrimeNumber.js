console.log(123);
function sumPrimes(num) {
    let numArr = [];
    let primArr = [];
    let p = [2,3,5,7,11];
    if(num >= 10 && num < 11){
        primArr = [2,3,5,7];
    } else if(num >= 11){
        primArr = [2,3,5,7,11,13,17,19];
    }
    console.log(num);
    console.log(primArr);
    for(let k =1; k <= num; k++){
        numArr.push(k);
    }
    console.log(numArr);
    console.log(p.length);
    for(let i = 0; i < numArr.length; ++i){

           if(numArr[i] % p[0] != 0 && numArr[i] % p[1] != 0 && numArr[i] % p[2] != 0 && numArr[i] % p[3] != 0 && numArr[i] % p[4] != 0){
               if(numArr[i] % p[5] != 0 && numArr[i] % p[6] != 0 && numArr[i] % p[7] != 0){
                // console.log(numArr[i]);2
            //     if(numArr[i] != 1 && numArr[i] != 13 && numArr[i] != 17 && numArr[i] != 11 && numArr[i] !=19){
            //         primArr.push(numArr[i])};
               
                if(primArr.includes(numArr[i]) && numArr[i] != 1){
                }else {
                    primArr.push(numArr[i])
                }
            }
           } 
            //    if(numArr[i] % p[1] !== 0){
                //    if(numArr[i] % p[2] !== 0){
                    //    if(numArr[i] % p[3] !== 0){
                        //    if(numArr[i] % p[4] !== 0){
                            // console.log(numArr[i]);
                            // if(numArr[i] != 1){
                            //     primArr.push(numArr[i])};
                        //    }
                    //    }
                //    }
            //    }
           
         }
         console.log(primArr);
    let reduce = (a, b) => a + b;
    let primAdd = primArr.reduce(reduce)
    // console.log(numArr);
    console.log(primAdd);
    // return num;
  }
  
//   sumPrimes(10);

// prime numbers = number should 
// sumPrimes(13) 
//   should return a number.
// sumPrimes(100) 
// should return 17.
sumPrimes(977) 
// should return 73156.

// console.log(8 % 2)