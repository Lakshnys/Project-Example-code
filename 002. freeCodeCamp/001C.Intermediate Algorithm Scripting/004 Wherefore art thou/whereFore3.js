function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line  
  
    arr = collection.filter(function(value, index, array) { // value = callback         -         value,  index, array //
      //     console.log(value);
      //     console.log(index);
      //     console.log(array);
      var srcKeys = Object.keys(source); 
      var test = 0;
      for (var i = 0; i < srcKeys.length; i++) {
        if (value.hasOwnProperty(srcKeys[i]) && value[srcKeys[i]] === source[srcKeys[i]]
        ) {
          test += 1;
          // console.log(value.hasOwnProperty(srcKeys[i]));
          // console.log(value[srcKeys[i]]);
          // console.log(source[srcKeys[i]]);
          console.log(test);
        } else {
          test += -1;
          console.log(test);
        }
      }
      console.log(test);
      return test === srcKeys.length;
    });
    // Only change code above this line
    return arr;
  }

  // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

//   console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"}));

//   console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })); 
  
  //[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

 console.log(whatIsInAName(
   [
     { "apple": 1, "dog": 5, "bat": 9,   }, 
     { "dog": 5,   "bat": 9, "apple": 1 }, 
     { "apple": 1, "bat": 9, "cookie": 2, "dog": 5 }
    ], 
    { "apple": 1, "bat": 9, "cookie": 2 }
    )); 
 // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
