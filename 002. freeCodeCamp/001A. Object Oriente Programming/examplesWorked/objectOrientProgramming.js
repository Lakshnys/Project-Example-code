/* ***********   Object Orient Programming   ************** */
// console.log(123);
function Bird12() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created //
}

let blueBird = new Bird12();
console.log(blueBird.name);
console.log(blueBird.color);
console.log(blueBird.numLegs);

blueBird.name = "Elvira";
console.log(blueBird.name);
blueBird.color = "Green";
console.log(blueBird.color);

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line //
let myHouse = new House(6);

console.log(myHouse instanceof House); // true
/******************************************************************************** */
// Object Oriented Programming: Understand Own Properties //

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
console.log(canary); // Bird {name: "Tweety", numLegs: 2}

var ownProp = [];
for (let i in canary) {
  if (canary.hasOwnProperty(i)) {
    ownProp.push(i);
  }
  console.log(ownProp); // (2) ["name", "numLegs"]
}
console.log(ownProp); // (2) ["name", "numLegs"]

/******************************************************************************** */

// Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code //

function Dog4(name) {
  this.name = name
}

// Only change code above this line //
let beagle = new Dog4("Snoopy");
let Doberman = new Dog4("Rockey");
Dog4.prototype.numLeg = 2;

console.log(beagle.name); // Snoopy
console.log(beagle.numLeg); // 2
console.log(Doberman.name); // Rockey
console.log(Doberman.numLeg); // 2

let ownProperty = [];
for (let property in Doberman) {
  if (Doberman.hasOwnProperty(property)) {
    ownProperty.push(property);
  }
}
console.log(ownProperty); //["name"]
/******************************************************************************** */
// Object Oriented Programming: Iterate Over All Properties //
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle1 = new Dog("Snoopy");

let ownProperty1 = [];
let prototypeProp = [];

// Only change code below this line //

for (let property in beagle1) {
  if (beagle1.hasOwnProperty(property)) {
    ownProperty.push(property);
  } else {
    prototypeProp.push(property);
  }
}
console.log(ownProperty); // ["name"]
console.log(prototypeProp); // ["numLegs"]
/******************************************************************************** */
// // Object Oriented Programming: Understand the Constructor Property //
function Dog5(name) {
  this.name = name;
}
// // Only change code below this line
Dog5.prototype = {
  // constructor: Dog5,
  numLegs: 4,
  eat: function () {
    console.log("nom1 nom1 nom1");
  },
  describe: function () {
    console.log("My name is " + this.name);
  }
};
let Doberman1 = new Dog5('Puppy5');
console.log(Doberman1.name); //Puppy5
console.log(Doberman1.numLegs); //4
Doberman1.eat(); // nom1 nom1 nom1
Doberman1.describe(); // My name is Puppy5
console.log(Doberman1.constructor === Dog5); // true
console.log(Doberman1.constructor); // true

function Bird5(name) {  // object
  this.name = name;
  this.numLegs5 = 2;
}

console.log(typeof Bird5.prototype); // 'object'

let duck = new Bird5("Donald");
console.log(typeof duck); // 'object'

console.log(duck.hasOwnProperty("name")); // true
console.log(duck.hasOwnProperty("numLegs5")); // true
console.log(Bird5.prototype.isPrototypeOf(duck)); // true

function Dog5(name) {
  this.name = name;
}

let beagle2 = new Dog5("Snoopy");

console.log(Dog5.prototype.isPrototypeOf(beagle2));  // true

// Fix the code below so that it evaluates to true //
console.log(Object.prototype.isPrototypeOf(Dog5.prototype)); // true
/******************************************************************************** */
function Animal1() { };

Animal1.prototype.eat = function () {
  console.log("1nom 1nom 1nom");
};

let animal = new Animal1();
// animal.eat();

let animal001 = Object.create(Animal1.prototype);
animal001.eat(); // 1nom 1nom 1nom

//******************************************************************************* */
function Animal2() { }

Animal2.prototype = {
  constructor: Animal2,
  eat: function () {
    console.log("2nom 2nom 2nom"); // 2nom 2nom 2nom
  }
};

// Only change code below this line //

let duck7 = Object.create(Animal2.prototype); // Change this line
let beagle7 = Object.create(Animal2.prototype); // Change this line

duck7.eat(); // nom nom nom
beagle7.eat(); // nom nom nom
/******************************************************************************** */
/* 
!! important!!

Remember that the prototype is like the "recipe" ( Recipe --> a set of instructions for preparing a particular dish (Object), including a list of the ingredients required) for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
*/

function Animal3() { }

Animal3.prototype = {

  constructor: Animal3, // !! important check !!** Putting all the instance with Animal under Animal Constructor. If --- constructor:Animal3 ---- is not used, created prototype  will fall under global Object. !! //

  eat: function () {
    console.log("meo, meo, meoo");
  }
};

function Bird9(name, location) {
  this.name = name,
    this.location = location
};
Bird9.prototype = Object.create(Animal3.prototype);

// Bird.prototype.constructor = Bird; // !! Important ** putting Duck under Bird Constructor otherwise since Bird.prototype is created by Animal.prototype Duck will comes under Animal, but it is actually created in Bird so Bird.prototype.constructor = Bird !! //

let duck8 = new Bird9("Donald");
duck8.location = "Vagas";
duck8.eat();

console.log(duck8.name); // Donald
console.log(duck8.location); // Vagas
console.log(duck8.constructor); // Animal3() { }

/******************************************************************************** */

function Animal4() { }
Animal4.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// // Only change code below this line
Dog.prototype = Object.create(Animal4.prototype); // including Animal eat() prototype to Dog //
Dog.prototype.constructor = Dog; // include eat() from Animal() shold be the condtructure of Gog. Otherwise when we call eat() it will e from Animal prototype //

Dog.prototype.bark = function () {
  console.log("Woof!");
};

// // Only change code above this line

let beagle8 = new Dog();
beagle8.eat(); // "nom nom nom" //
beagle8.bark(); // "Woof!" //

/******************************************************************************** */
// Object Oriented Programming: Override Inherited Methods //
/*In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:
*/

function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

/* !! Important how Javascript execute instance...

If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

1. duck => Is eat() defined here? No.
2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4. Object => JavaScript stopped searching before reaching this level.

*/

// // Only change code above this line

let penguin = new Penguin();
let bird = new Bird();
console.log(penguin.fly()); // "Alas, this is a flightless bird."
console.log(bird.fly()); // "I am flying! "
/******************************************************************************** */

/*
Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Boat. They can both glide, but a Bird is not a type of Boat and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions
*/

let bird5 = {
  name: "Donald", // console.log(bird5.name); // Donald
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function (obj) { // glideMixin function will take one "obj" paramenter and 
  obj.glide = function () { // and gives it the glide mentod...
    console.log(" I can Glide through...");
  }
};

glideMixin(bird); // calling glideMixin function with bird Argument...
glideMixin(boat); // calling glideMixin function with boat Argument....
console.log(bird.name); // undefine
console.log(bird5.name); // Donald

bird.glide(); //  I can Glide through...
boat.glide(); //  I can Glide through...

/******************************************************************************** */

/* Use Closure to Protect Properties Within an Object from Being Modified Externally */

function BirdExe() {
  this.hatchedEggs = 10;
};
let Duck = new BirdExe();
console.log(Duck); // Bird [getWeight]
console.log(BirdExe.hatchedEggs = 20); // 20
console.log(BirdExe.hatchedEggs); // 20
console.log(Duck.hatchedEggs);

/* Above example hatchedEggs can be accessed and modified by anybody, it is not good if the hatchedEggs will be and password paramerter or user id to overcom the problem following systme is used...*/

function BirdWeight() {
  let weight = 15; // new variable is created
  this.getWeight = function () {  // function is created to access the variable.
    return weight; // since waight is the local variable for the Bird it can be accessed n sidde the function and can't accessed otsied the function. so it is safe
  }
};
let Duck5 = new BirdWeight();
console.log(Duck5.getWeight()); // 15
console.log(Duck5.weight); // undefine // local variable 
console.log(BirdWeight.weight); // undefine

/******************************************************************************** */
/* Understand the Immediately Invoked Function Expression (IIFE) */

/* A common pattern in JavaScript is to execute a function as soon as it is declared: */

(function () {
  console.log("Chirp, chirp!"); // Chirp Chirp!
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
(function () {
  console.log("A cozy nest is ready"); // A cozy nest is ready
})();
/******************************************************************************** */
/* Use an IIFE to Create a Module */
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.cute = function () {
        console.log("I am cute..!!");
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("I can sing..");
      };
    }
  }
})();

funModule.isCuteMixin;
funModule.singMixin;
 /******************************************************************************* */
