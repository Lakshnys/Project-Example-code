console.log(567);
// callback Example //
let add = function (num1, num2) {
    return num1 + num2;
}

let multiply = function (num1, num2) {
    return num1 * num2;
}

let calc = function (a, b, callback) { // callback calls different function as per the parameter.
    return callback(a, b);
};

// let calc1 = n1, n2, function(t,s) {

// }

console.log(calc(2, 5, add));

console.log(calc(2, 5, multiply));
