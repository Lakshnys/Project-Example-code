console.log(123);
function spinalCase(str) {

    // str = str.toLowerCase();
    return str.split(/\s|_|(?=[A-Z])/).join('-').replace(/--/g, '-').toLowerCase();
    // const regex = /[^a-z]/gm;
    // var newArr = [];
    // let x = str.split("");
    // console.log(x[4]);
    // // The substituted value will be contained in the result variable
    // const strIndex = str.match(regex);
    // // const result = str.replace(regex, subst);
    // console.log(x);
    // console.log(strIndex);
    // for(let key in x){
    //     // console.log(str[key]);
    //     console.log(x);
    //      for(let k in strIndex){
    //        if(x[key] === strIndex[k]){
    //         //    x.splice(str.indexOf(str[key]),0,"-");
    //            newArr.push(x.indexOf(x[key]));
    //            console.log(newArr);
    //         //    console.log(x);
    //        }
    //     }
    // }
    // let newArr1 = [];
    // for(let l in newArr){
    //     console.log(newArr[l]+Number(l));
    //     newArr1.push(newArr[l]+Number(l));
    // }
    // console.log(newArr1);
    // // console.log('Substitution result: ', result);
    // // for (let k in x){
    //     for(let j in newArr1){
    //         x.splice(newArr1[j],0,"-");
    //     }
        
    // // }
    // let n = x.join("");
    // console.log(x);
    // console.log(n.toLowerCase());
    // return str;
}

//   spinalCase('This Is Spinal Tap');

// spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSSpinalTap")); // should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")); // should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") // should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") // should return "all-the-small-things".
