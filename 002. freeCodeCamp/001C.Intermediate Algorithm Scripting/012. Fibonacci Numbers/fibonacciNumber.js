// console.log(123);
function sumFibs(num) {
    console.log(num);
    let intArr = [1,1];
    let fibArr = [];
    for(let k = 0; k < num; k++){
        if((intArr[k] + intArr[Number(k)+1]) <= num){
        intArr.push((intArr[k] + intArr[Number(k)+1]))};
    }
    // console.log(intArr);
    for(let k in intArr){
      //  console.log( intArr[k] % 2 > 0);
       if( intArr[k] % 2 > 0){
         fibArr.push(intArr[k]);
       }
      //  console.log(fibArr);
       }
       let d = (a, b) => a + b;
       let sumNum = fibArr.reduce(d);
       console.log(sumNum);
    return sumNum;
  }
  // sumFibs(4);

sumFibs(1) 
// should return a number.
// sumFibs(1000) 
// should return 1785.
// sumFibs(4000000) 
// should return 4613732.
// sumFibs(4) 
// should return 5.
// sumFibs(75024) 
// should return 60696.
// sumFibs(75025) 
// should return 135721.