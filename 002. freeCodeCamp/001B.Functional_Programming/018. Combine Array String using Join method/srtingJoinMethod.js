console.log(123);
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"

function sentensify(str) {
    // Only change code below this line
  let x = str.split(/\W/);
//   console.log(x);
  let y = x.join(" ");
//   console.log(y);
  return y;
  
    // Only change code above this line
  }
  console.log(sentensify("May-the-force-be-with-you"));
  console.log(sentensify("The.force.is.strong.with.this.one"));
  console.log(sentensify("There,has,been,an,awakening"));
  