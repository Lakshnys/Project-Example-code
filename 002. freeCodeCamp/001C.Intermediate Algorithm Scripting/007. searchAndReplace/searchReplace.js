// console.log(123);
function myReplace(str, before, after) {
    console.log(str);
    let beforeSplit = before.split("");
    let afterSplit = after.split("");
    let x;
    // console.log(beforeSplit[0]);
    // console.log(afterSplit[0]);
    // console.log(/[A-Z]/.test(afterSplit[0]));
    if (/[A-Z]/.test(beforeSplit[0]) === /[A-Z]/.test(afterSplit[0])) {
        x = afterSplit.join("");
    } else if (/[A-Z]/.test(afterSplit[0]) === true) {
        let afterShift = afterSplit.shift();
        afterSplit.unshift(afterShift.toLowerCase());
        x = afterSplit.join("");
    } else {
        let afterShift = afterSplit.shift();
        afterSplit.unshift(afterShift.toUpperCase());
        x = afterSplit.join("");
    }
    const regex = new RegExp(before, "g");
    // console.log(regex);
    const result = str.replace(regex, x);
    console.log(result);
    console.log("**********----------************");
    return result;
}

console.log(
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

// myReplace("Let us go to the store", "store", "mall");
//   should return "Let us go to the mall".
// myReplace("He is sleeping on the couch", "sleeping", "Qitting");
// should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling");
// should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john");
// should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms");
// should return "Let us get back to more Algorithms".
