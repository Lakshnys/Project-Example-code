function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
//   let s = Object.entries(source);
//   console.log(s);
//   let d = source;
//   console.log(d);
let a = Object.entries(source);
console.log(a[0][0]);
  var j;
  var t;

for(key in source){
   j =  source[key]
   t = key;
}
console.log("t: "+ t);
 console.log("j: " +  j);
let g = JSON.stringify(j);
let h = JSON.stringify(t);
console.log(g);
console.log(h);
//   let k = s[0][0].toString();
//   let sL = s[0][1];
//   console.log(typeof(k));
//   console.log(k);
//   console.log(sL);
  let m = collection.find(ls => ls.last === source.last);
  console.log(m);
    // Only change code above this line
    // return arr;
    console.log(collection[2].last);
    console.log(source.last);
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });