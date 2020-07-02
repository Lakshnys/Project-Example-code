function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    
    arr = Array.prototype.slice.call(arguments);
    // Only change code below this line
    
    var key = Object.keys(source); // select key in the source
    var returncollection =[];
   
    for (i=0; i<collection.length; i++) // looping through collection array object
      {     
     for (j=0; j<key.length; j++) // looping through source key
      {
    //    if (collection[i].length<key.length){
    //     console.log(collection[i]);
    //     console.log(key.length);
    //       break; 
    //      } 
    //     console.log(collection[i]);
    //      console.log(key.length);
       if (collection[i][key[j]]!==source[key[j]])
         {
          break; 
         }
        console.log(collection[i][key[j]]);
         console.log(source[key[j]]);
        if (j==key.length-1)
         {
          returncollection = returncollection.concat(collection[i]);
         }
       }      
      }
      //collection2 = collection2.concat(collection[i]);     
    
    // Only change code above this line Object.keys(collection[i])[j]
    return returncollection;
  }

   // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

//   console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"}));

//   console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })); 
  
  //[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

 console.log(whatIsInAName(
    [
      { "apple": 1, "dog": 5, "bat": 9,   }, 
      { "dog": 5,   "bat": 9, "apple": 1 }, 
      {"dog": 5, "apple": 1, "bat": 9, "cookie": 2 },
      {"dog": 9}
     ], 
     { "apple": 1, "bat": 9, "dog": 5}
     )); 
  // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
 