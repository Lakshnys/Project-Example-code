console.log(123);

function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(-5, -2);

    // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
console.log(inputCities);
/**************************************************************** */
// function nonMutatingConcat(original, attach) {
//     attach.forEach((element) => {
//     return original.push(element);

//     });
// }
// FIXME:
// var first = [1, 2, 3];
// var second = [4, 5];
// console.log(nonMutatingConcat(first, second));
// console.log(first);
// console.log(second);
/******************************************************************** */

TODO: function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);

    // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second));
console.log(first);
console.log(second);
