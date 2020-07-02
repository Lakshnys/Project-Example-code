function whatIsInAName(collection, source) {
    var arr = [];
    console.log(collection.hasOwnProperty(source));
    let v= Object.keys(source);
    console.log(v.length);
    let s = Object.entries(source);
    console.log(s.length);
    // console.log(s[0][0]);
    for(let k in s){
        let sv = s[k];
        console.log(sv[0]);
    }
    let sourceValue1 = s[0][0];
    // let sourceValue2 = s[1][0];
    console.log(sourceValue1);
    console.log(sourceValue2);
    
        collection.findIndex(function(value,index){
        console.log(value[sourceValue1]);
        console.log(index);
        console.log(value[sourceValue1] === source[sourceValue1])
        console.log(value[sourceValue2] === source[sourceValue2])
        if ((value[sourceValue1] === source[sourceValue1]) && (value[sourceValue2] === source[sourceValue2])  === true){
            // console.log(value);
            arr.push(value);
        }
    })
    // Only change code above this line
    // console.log(arr);
    return arr;
  }

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

//   console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"}));

//   console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })); 
  
  //[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

 console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); 
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].