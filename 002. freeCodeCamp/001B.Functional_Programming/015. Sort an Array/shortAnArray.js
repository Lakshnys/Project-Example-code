function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  console.log(ascendingOrder([1, 5, 2, 3, 4]));
  // Returns [1, 2, 3, 4, 5]
  
  function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
    //   return a === b ? 0 : a < b ? 1 : -1;
      if (a === b){ return 0; 
    }else if (a < b){ 
        return 1; } else { 
            return -1;
        }
    });
  }
console.log(  reverseAlpha(['l', 'h', 'z', 'b', 's'])
);  // Returns ['z', 's', 'l', 'h', 'b']

// a and b;
// if a < (lessThan) b  = returns -1 and "a"will come before "b" ; example a = 1 and b = 2 return -1    ===> a,b;
// if a > (graterThan) b = return 1 and "b" will come brfore "a" ; example a = 2 and b = 1 return 1     ===> b,a;
// if a == b = return 0 "a" and "b" will remain unchanged;         example a = 2 and b = 2 return 0     ===> a,b; 

function alphabeticalOrder(arr) {
    // Only change code below this line
  return arr.sort(function(a,b){
      return (a === b) ? 0: a > b ? 1 : -1;
  })
  
    // Only change code above this line
  }
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// console.log(alphabeticalOrder([1, 5,2,6,3,5,4,78,24,55,11]));
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));