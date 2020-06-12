// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

console.log(123);

function booWho(bool) {
    if (typeof bool === "boolean"){
        bool = true;
    }else{
        bool = false;
    }
    return bool;
  }
 
  console.log(typeof "true")
 console.log(booWho(null));
 console.log(booWho(true));
 console.log(booWho(123));
 console.log(booWho("false"));

