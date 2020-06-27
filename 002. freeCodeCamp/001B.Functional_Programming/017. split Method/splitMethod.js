console.log(123);

function splitify(str) {
    // Only change code below this line
  var bySpc = str.split(/\W/)
 return bySpc;
    // Only change code above this line
  }
  console.log(splitify("Hello World,I-am code"));
  console.log(splitify("Earth-is-our home"));
  console.log(splitify("This.is.a-sentence"));