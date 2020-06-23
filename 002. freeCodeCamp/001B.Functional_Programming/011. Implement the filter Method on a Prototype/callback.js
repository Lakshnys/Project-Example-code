// console.log(567);

function greeting(name) {
    alert("Hello " + name);
}
//   greeting("venba");Venb

function hello1(a) {
    console.log(a);
}

function hello2(b) {
    console.log("Hello2222 " + b);
}
function processUserInput(callback) {
    // callback is the function name
    var name = prompt("Please enter your name.");
    callback(name); // callback function action....
}

// processUserInput(greeting); // greeting  - callback function as an argument..
// processUserInput(hello1); // hello1 - callback function
// processUserInput(hello2); // hello2 - callback function
