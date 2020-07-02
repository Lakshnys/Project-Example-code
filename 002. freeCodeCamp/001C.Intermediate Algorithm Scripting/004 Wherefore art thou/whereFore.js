// console.log(123);
function whatIsInAName(collection, source) {
//     var arr = [];
//     // console.log(typeof(collection));
//     // console.log(typeof(source));
//     console.log(Object.values(collection));
//     console.log(Object.entries(collection));
//     console.log(source);
    let a = Object.entries(source);
    console.log(a[0][1]);
    let b = a[0][1];
    console.log(Object.entries(source));

// let a = JSON.stringify(Object.values(collection));
// let b = JSON.stringify(Object.keys(source));
// var c = JSON.stringify(Object.values(source));

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(typeof(c));
//     let x = Object.entries(
//         Object.entries(collection).map(([key, value]) => [lastname = value.last])
//     )
// console.log(x);
// let y = Object.entries(
//     Object.entries(collection).filter(([key, value]) => [value.last = "Capulet"])
// )
// console.log(y);
// let car = cars.find(car => car.color === "red");
// console.log(c);
let d = source.last;
console.log(d);
let lastName = collection.find(ls => ls.last === b);
console.log(lastName);

//     // Only change code below this line
// console.log(Object.keys(source));
// console.log(Object.values(source));
// let result  = collection.filter(k => k == source);
// console.log(result);
// let ls = [];

    // Only change code above this line
    // return arr;
}

whatIsInAName(
    [
        {
            first: "Romeo",
            last: "Montague",
        },
        {
            first: "Mercutio",
            last: null,
        },
        {
            first: "Tybalt",
            last: "Capulet",
        },
    ],
    {
        last: "Capulet",
    }
);
