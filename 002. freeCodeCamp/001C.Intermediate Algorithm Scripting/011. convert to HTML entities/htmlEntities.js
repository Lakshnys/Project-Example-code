console.log(123);
function convertHTML(str) {
    let arr = str.split("")
    console.log(str);
    console.log(arr);
    let arr1 = arr.slice(0,arr.lenght);
    console.log(arr1);
    // if()
    let c = [];
    let d = [];
    let pattern = RegExp(/["<'>&]/, "g");
     c = str.match(pattern, "&amp;");
     if (c !== null){
     console.log(c);
        arr.forEach(el => {
            c.forEach(element => {
                // console.log(el);
                // console.log(element);
                //    console.log(el === element);
                   if(element === el){
                       console.log(arr.indexOf(el));
                       d.push(arr.indexOf(el));
                       arr.splice(arr.indexOf(el),1,1);
                    //    d.push(arr.indexOf(el));
                   };
               })
            
        });
    console.log(d);
        for(let i in d){
            console.log(arr1[d[i]]);
           if(arr1[d[i]] === "&"){
               arr1.splice(d[i],1,"&amp;")
           } else if(arr1[d[i]] === "<"){
            arr1.splice(d[i],1,"&lt;");
         } else if(arr1[d[i]] === ">"){
            arr1.splice(d[i],1,"&gt;");
        } else if (arr1[d[i]] === "'"){
            arr1.splice(d[i],1,"&apos;")
        }  else if(arr1[d[i]] === '"'){
            arr1.splice(d[i],1,"&quot;")
        }
    }
    console.log(arr1.join(""));
    let str1 = arr1.join("");
    return str1;
} else if (c === null){
    console.log(str);
    return str
}
  }
  
// convertHTML("Dolce & < > '  Gabbana");
// should return "Dolce &amp; Gabbana".
// convertHTML("Hamburgers < Pizza < Tacos");
// convertHTML("sa < P < T");
// //should return "Hamburgers &lt; Pizza &lt; Tacos".
// convertHTML("Sixty > twelve");
// // should return "Sixty &gt; twelve".
console.log(convertHTML('Stuff in "quotation marks"'));
// // should return "Stuff in &quot;quotation marks&quot;".
// convertHTML("Schindler's List");
// // should return "Schindler&apos;s List".

convertHTML("abc")// should return "abc".