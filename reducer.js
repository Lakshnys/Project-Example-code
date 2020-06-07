
let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0) // 6

  console.log(sum);

  let mult = [1, 2, 3, 4, 5, 6].reduce(function (accumulator, currentValue) {
    return accumulator * currentValue
  })

  console.log(mult); // 720

  let nMax = [1, 2, 3, 4, 5, 6,99,8,75,3,1000].reduce(function (accumulator, currentValue) {
    return Math.max(accumulator, currentValue)
  })

  console.log(nMax); 1000