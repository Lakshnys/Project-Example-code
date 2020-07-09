console.log(123);
function pairElement(str) {

        let arrLen = str.length;
        console.log(arrLen);
        console.log(str);

        let strSplit = str.split("");
        console.log(strSplit);
        let b = [];
        strSplit.forEach(el => {
          let a = [];

         if(el === "G"){
            a.push(el, "C");
          } else if( el === "C"){
            a.push(el, "G");
          } else if( el === "A"){
            a.push(el, "T");
          } else if( el === "T"){
            a.push(el, "A")
          };
          console.log(a);
          b.push(a);
        });
        console.log(b);
    return b;
  }
  
//  console.log( pairElement("GCG"));


// pairElement("ATCGA") 
// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") 
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") 
//should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].