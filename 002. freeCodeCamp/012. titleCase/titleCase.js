console.log(123);

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
//******************************************************** */
// function titleCase(str) {
//     str = str.toLowerCase();
//     // console.log(str);
//     var strSplit = str.split(" ");
//     for (let i = 0; i < strSplit.length; ++i) {
//         strSplit[i] = strSplit[i].replace(strSplit[i][0], strSplit[i][0].toUpperCase());
//         var s = strSplit.join(" ");

//         // console.log(s);
//     }
//     // return strSplit;
//     return s;
// }
//************************************************************** */
function titleCase(str) {
    str = str.toLowerCase();
    var strSplit = str.split(" ");
    for (let i = 0; i < strSplit.length; ++i) {
        strSplit[i] = strSplit[i].replace(strSplit[i][0], strSplit[i][0].toUpperCase());
        var s = strSplit.join(" ");
    }
    return s;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(titleCase("sHoRt AnD sToUt"));

//  function titleCase(str) {
//     var strSplit = str.split(" ");
//     for (let i = 0; i < strSplit.length; ++i) {
//         // console.log(strSplit[i]);
//         var titleUpperCase = strSplit[i].replace(strSplit[i][0], strSplit[i][0].toUpperCase());
//     }
//     return titleUpperCase;
// }
