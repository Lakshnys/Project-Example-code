// console.log(123);
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".


//   truncateString("A-tisket a-tasket A green and yellow basket", 8);

// function truncateString(str, num) {
//     if(slice(str.length > num)){

//     }
//     return str;
//   }
// var num = 7;
// var str = "abcdef";
function truncateString(str, num) {
    if (str.length <= num) {
        return str = str.slice(0, num);
    } else {
        return str = str.slice(0, num) + "...";
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-", 1));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));