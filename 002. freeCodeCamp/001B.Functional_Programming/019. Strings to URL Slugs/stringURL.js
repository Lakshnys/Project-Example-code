// console.log("object");
// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
console.log(title);
let x = title.toLowerCase();
let y = x.split(" ");
// console.log(typeof y[3]);
let arr = [];
y.forEach(element => {
    // console.log(element);
    if (element != ""){
        // console.log (element);
        arr.push(element);
    } else{
        // console.log(2);
    }
});
// console.log(arr);
// console.log("arr : " + arr);

  let z = arr.join("-");
  return z;
}
// Only change code above this line 

console.log(urlSlug(globalTitle));
console.log(urlSlug("A        Mind Needs    Books Like A Sword     Needs A Whetstone"));
console.log(urlSlug("    Hold The    Door    "));