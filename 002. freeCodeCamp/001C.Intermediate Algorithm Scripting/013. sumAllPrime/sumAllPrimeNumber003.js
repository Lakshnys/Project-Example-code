console.log(789);
function sumPrimes(num) {
    let numSq = Math.round(Math.sqrt(num));
    console.log(numSq);
    let numSqArr = [];
    for (let k = 1; k <= numSq; ++k) {
        numSqArr.push(k);
    }
    console.log(numSq);
    let intPrim = Math.floor(Math.sqrt(numSq));
    console.log(intPrim);

    for (let k = 0; k < numSqArr.length; ++k) {
        // console.log(numsqArr[k]);
        if (numSqArr[k] % 2 === 0 && numSqArr[k] > 2) {
            //    console.log(numsqArr.indexOf(numsqArr[k]));
            numSqArr.splice(numSqArr.indexOf(numSqArr[k]), 1);
        }
    }
    console.log(numSqArr);

    for (let k = 0; k < numSqArr.length; ++k) {
        // console.log(numsqArr[k]);
        if (numSqArr[k] % 3 === 0 && numSqArr[k] > 3) {
            //    console.log(numsqArr.indexOf(numsqArr[k]));
            numSqArr.splice(numSqArr.indexOf(numSqArr[k]), 1);
        }
    }
    console.log(numSqArr);

    for (let k = 0; k < numSqArr.length; ++k) {
        // console.log(numsqArr[k]);
        if (numSqArr[k] % 5 === 0 && numSqArr[k] > 5) {
            //    console.log(numsqArr.indexOf(numsqArr[k]));
            numSqArr.splice(numSqArr.indexOf(numSqArr[k]), 1);
        }
    }
    console.log("numSqArr: " + numSqArr);

    let numArr = [];
    let primArr = [];
    let pArr = [];
    let p = [];
    let pFinal = [];

    for (let k = 1; k <= num; k++) {
        numArr.push(k);
    }

    numArr.forEach((el) => {
        if (el % 2 != 0 && el != 2) {
            p.push(el);
        }
    });

    p.forEach((el) => {
        if (el % 3 === 0 && el != 3) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 5 === 0 && el != 5) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 7 === 0 && el != 7) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 11 === 0 && el != 11) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 13 === 0 && el != 13) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 17 === 0 && el != 17) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 19 === 0 && el != 19) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 23 === 0 && el != 23) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 29 === 0 && el != 29) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 31 === 0 && el != 31) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 35 === 0 && el != 35) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 37 === 0 && el != 37) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 41 === 0 && el != 41) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    p.forEach((el) => {
        if (el % 43 === 0 && el != 43) {
            //    console.log(p.indexOf(el));
            p.splice(p.indexOf(el), 1);
        }
    });

    // console.log(p);
    pFinal = p.slice(0, p.length);
    // console.log(pFinal);
    pFinal.splice(0, 1, 2);
    console.log(pFinal);

    //  console.log(primArr);
    let reduce = (a, b) => a + b;
    let primAdd = pFinal.reduce(reduce);
    // console.log(numArr);
    console.log(primAdd);
    return primAdd;
}

//   sumPrimes(10);

// prime numbers = number should
// sumPrimes(13)
//   should return a number.
// sumPrimes(10)
// should return 17.
console.log(sumPrimes(977));
// should return 73156.
// console.log(sumPrimes(2000));

// console.log(8 % 2)
