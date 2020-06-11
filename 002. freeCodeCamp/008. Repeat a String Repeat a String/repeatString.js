var a = "A";
var b = 0;
// console.log(a+a+a+a);
let c = a;
for (let i = 0; i<b; i++){
    console.log(c);
    c= c+a;
}


// var str = "abc";
// var num = 3;

function repeatStringNumTimes(str, num) {
    if(num > 0){
        var d = str;
    for (let i = 1; i < num; i++){
        d = d + str;
    // return str;
    } return d;
} else {return "";
}
  }
  
  console.log(repeatStringNumTimes("abc", 3));
 console.log(repeatStringNumTimes("*", 8));
 console.log(repeatStringNumTimes("&", 2));
  