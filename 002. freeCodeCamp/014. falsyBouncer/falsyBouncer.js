// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
function bouncer(arr) {
    var x = [];
    var y = [];
    for (let i = 0; i < arr.length; ++i) {
        if (Boolean(arr[i]) == true) {
            x.push(arr[i]);
        }
    }
    // console.log(arr);
    console.log(x);
    return x;
}

bouncer([7, "ate", "", false, 9, "", 5]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);