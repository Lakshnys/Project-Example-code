function mutation(arr) {
    var newArr = [];
    var temp= 0;
    for (var i = 0; i < arr.length; ++i) {
      newArr[i] = arr[i].toLowerCase();
    }
    
    for (var j = 0; j < newArr[1].length; ++j) {
      if (newArr[0].indexOf(newArr[1][j]) < 0)
        return false;
    }
   return true;
  }

console.log(mutation(["hello", "rerr"])); //flase
console.log(mutation(["Mary", "Myr"])); // true
console.log(mutation(["floor", "orlfo"])); // true
console.log(mutation(["hello", "hneo"])); //false