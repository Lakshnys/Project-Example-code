var numbers = [5,6,7,4];
let a = [3,5,6,8,4];
var number = [];
console.log(numbers.length);
function addOneToEach (numbers) {
  for (let i = 0; i < numbers.length; ++i) {
    let number = numbers[i];
        numbers[i] = number + 1;
        // console.log(numbers);
  }
  return numbers;
}

// let addOn = function addOneToEach(numbers){
//   var newNumbers = [];
//   for(let i = 0; i < numbers.length; ++i){

//     let number = numbers[i];
//         newNumbers.push(number + 1);
//         console.log(newNumbers);
//   }
//   return newNumbers; 
// } 

// addOn(numbers);
// console.log(addOn(a));






