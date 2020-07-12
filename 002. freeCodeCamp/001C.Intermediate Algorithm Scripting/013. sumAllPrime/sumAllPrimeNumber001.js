console.log(456);
function sumPrimes(num) {
    let numArr = [];
    let primArr = [];
    let pArr = [];
    let p = [];
    let pFinal = [];
    // if(num >= 10 && num < 11){
    //     primArr = [2,3,5,7];
    // } else
    // if (num >= 11) {
    //     primArr = [2, 3, 5, 7, 11, 13, 17, 19];
    // }
    console.log(num);
    console.log(primArr);
    for (let k = 1; k <= num; k++) {
        numArr.push(k);
    }
    console.log(numArr);
    // // console.log(p.length);
    // for (let i = 0; i < numArr.length; ++i) {
    //     for (let j = 0; j <= primArr.length; ++j) {
    //         if (
    //             numArr[i] % primArr[j] === 0 &&
    //             numArr[i] > 1 &&
    //             numArr[i] === primArr[j]
    //         ) {
    //             pArr.push(numArr[i]);
    //         }
    //     }
    // }
 numArr.forEach(el => {
     if(el % 2 != 0 && el != 2){
     p.push(el);
 }
 })

p.forEach(el =>{
    if(el % 3 === 0 && el != 3){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 5 === 0 && el != 5){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 7 === 0 && el != 7){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 11 === 0 && el != 11){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 13 === 0 && el != 13){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 17 === 0 && el != 17){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 19 === 0 && el != 19){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 23 === 0 && el != 23){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 29 === 0 && el != 29){
    //    console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

p.forEach(el =>{
    if(el % 31 === 0 && el != 31){
       console.log(p.indexOf(el));
       p.splice(p.indexOf(el),1);
    }
})

    console.log(p);
    pFinal = p.slice(0, p.length);
    // console.log(pFinal);
    pFinal.splice(0,1,2);
    console.log(pFinal);

    //  console.log(primArr);
    let reduce = (a, b) => a + b;
    let primAdd = pFinal.reduce(reduce);
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
sumPrimes(977);
// should return 73156.

// console.log(8 % 2)
