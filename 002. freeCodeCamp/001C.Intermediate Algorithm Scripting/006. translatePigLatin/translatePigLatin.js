function translatePigLatin(str) {
    let aArr = ["a", "y"];
    let wArr = ["w", "a", "y"];
    let x = str.split("");
    console.log(x);
    let y = ["a", "e", "i", "o", "u"];
    let z = [];
    let c = [];
    for (let k in x) {
        z.push(x.indexOf(y[k]));
        // console.log(x.indexOf(y[k]));
    }
    z.sort((a, b) => a - b);
    console.log(z);
    let s = z.find((a) => a >= 0);
    console.log(s);
    let newSlice = x.slice(0, s);
    let newX = x.slice(s);
    if (s >= 0) {
        console.log(newX);
        for (let k in newSlice) {
            newX.push(newSlice[k]);
        }
        if (s > 0) {
            for (let k in aArr) {
                newX.push(aArr[k]);
            }
        } else if (s == 0) {
            for (let p in wArr) {
                newX.push(wArr[p]);
            }
        }
        console.log(newSlice);
        console.log(newX);
    } else {
        for (let m in aArr) {
            newX.push(aArr[m]);
        }
        console.log(newX);
    }
    let newY = newX.join("");
    return newY;
}

//   translatePigLatin("consonant");

// translatePigLatin("california")
// should return "aliforniacay".
// translatePigLatin("paragraphs")
// should return "aragraphspay".
// translatePigLatin("glove")
// should return "oveglay".
// translatePigLatin("algorithm")
// should return "algorithmway".
// translatePigLatin("eight");
// should return "eightway".
// Should handle words where the first vowel comes in the middle of the word
// translatePigLatin("schwartz")
// should return "artzschway".
// Should handle words without vowels.
console.log(translatePigLatin("rhythm"));
// translatePigLatin("aaaaa");
// should return "rhythmay".
