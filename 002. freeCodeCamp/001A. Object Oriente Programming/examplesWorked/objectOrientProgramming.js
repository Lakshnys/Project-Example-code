// console.log(123);
// function Bird() {
//     this.name = "Albert";
//     this.color  = "blue";
//     this.numLegs = 2;
//     // "this" inside the constructor always refers to the object being created
//   }

//   let blueBird = new Bird();
//   console.log(blueBird.name);
//   console.log(blueBird.color);
//   console.log(blueBird.numLegs);

// blueBird.name = "Elvira";
// console.log(blueBird.name);
// blueBird.color = "Green";
// console.log(blueBird.color);

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
//   }

//   // Only change code below this line
//   let myHouse = new House(6);

//   console.log(myHouse instanceof House); // true

// Object Oriented Programming: Understand Own Properties //

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }

//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   console.log(canary);

//   var ownProp = [];
//   for (let ijk in canary){
//       if (canary.hasOwnProperty(ijk)){
//           ownProp.push(ijk);
//       } 
//     console.log(ownProp);
//   }
//   console.log(ownProp);
// }

// Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code //

// function Dog(name) {
//     this.name = name;
//   }

//   // Only change code above this line
//   let beagle = new Dog("Snoopy");
//   let Doberman = new Dog("Rockey");
//   Dog.prototype.numLeg = 2;

//   console.log(beagle.name);
//   console.log(beagle.numLeg);
//   console.log(Doberman.name);
//   console.log(Doberman.numLeg);

//   let ownProperty = [];
//   for (let property in Doberman){
//     if(Doberman.hasOwnProperty(property)){
//     ownProperty.push(property);
//     }
// }
//   console.log(ownProperty);
/*************************************************************** */
// Object Oriented Programming: Iterate Over All Properties //

// function Dog(name){
//     this.name = name;
// }
//  Dog.prototype.numLegs = 4;

//  let beagle = new Dog("Snoopy");

//  let ownProperty = [];
//  let prototypeProp = [];

//  // Only change code below this line

//  for(let property in beagle){
//      if(beagle.hasOwnProperty(property)){
//          ownProperty.push(property);
//      }else {
//          prototypeProp.push(property);
//      }
//  }
// console.log(ownProperty);
// console.log(prototypeProp);
/********************************************************* */
// Object Oriented Programming: Understand the Constructor Property //
// function Dog(name) {
//     this.name = name;
//   }

// Only change code below this line
//   Dog.prototype = {
//     constructor: Dog,
//     numLegs: 4,
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };
// let Doberman = new Dog('Puppy');
//   console.log(Doberman.name);
//   console.log(Doberman.numLegs);
//   Doberman.eat();
//   Doberman.describe();
// console.log(Doberman.constructor === Dog);

// function Bird(name) {  // object
//     this.name = name;
//   }

//   console.log(typeof Bird.prototype); // yields 'object'

//   let duck = new Bird("Donald");

//   console.log(duck.hasOwnProperty("name")); // yields true

//   function Dog(name) {
//     this.name = name;
//   }

//   let beagle = new Dog("Snoopy");

//   Dog.prototype.isPrototypeOf(beagle);  // yields true

//   // Fix the code below so that it evaluates to true //
//  console.log(Object.prototype.isPrototypeOf(Dog.prototype)); // true
/****************************************************** */
// function Animal() { };

// Animal.prototype.eat = function () {
//     console.log("nom nom nom");
// };

// let animal = new Animal();
// // animal.eat();

// let animal001 = Object.create(Animal.prototype);
// animal001.eat();
// animal001.eat();
// animal001.eat();
//************************************************** */
// function Animal() { }

// Animal.prototype = {
//     constructor: Animal,
//     eat: function () {
//         console.log("nom nom nom");
//     }
// };

// // Only change code below this line

// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line

// duck.eat();
// beagle.eat();
/***************************************************************** */
/* 
!! important!!

Remember that the prototype is like the "recipe" ( Recipe --> a set of instructions for preparing a particular dish (Object), including a list of the ingredients required) for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
*/

// function Animal() { }

// Animal.prototype = {

//     constructor: Animal, // !! important check !!** Putting all the instance with Animal under Animal COnstructor. If constructor:Animal is not used, it will fall under global Object. !! //

//     eat: function (){
//     console.log("meo, meo, meooooooooooooo");
//     }
// };

// function Bird(name, location){
//     this.name = name,
//     this.location = location
// };
// Bird.prototype = Object.create(Animal.prototype);

// Bird.prototype.constructor = Bird; // !! Important ** putting Duck under Bird Constructor otherwise since Bird.prototype is created by Animal.prototype Duck will comes under Animal, but it is actually created in Bird so Bird.prototype.constructor = Bird !! //

// let duck = new Bird("Donald");
// duck.location = "Vagas";
// duck.eat();

// console.log(duck.name);
// console.log(duck.location);

// console.log(duck.constructor);
// console.log(duck.constructor);
/**************************************************** */

// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() { }

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype); // including Animal eat() prototype to Dog //
// Dog.prototype.constructor = Dog; // include eat() from Animal() shold be the condtructure of Gog. Otherwise when we call eat() it will e from Animal prototype //

// Dog.prototype.bark = function(){
//   console.log("Woof!");
// };

// // Only change code above this line

// let beagle = new Dog();
// beagle.eat(); // "nom nom nom" //
// beagle.bark(); // "Woof!" //
/************************************************************** */
// Object Oriented Programming: Override Inherited Methods //
/*In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:
*/

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line
// Penguin.prototype.fly = function(){
//   return "Alas, this is a flightless bird.";
// };

/* !! Important how Javascript execute instance...

If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

1. duck => Is eat() defined here? No.
2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4. Object => JavaScript stopped searching before reaching this level.

*/

// Only change code above this line

// let penguin = new Penguin();
// let bird = new Bird();
// console.log(penguin.fly()); // "Alas, this is a flightless bird."
// console.log(bird.fly()); // "I am flying! "
/************************************************************ */
/*
Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Boat. They can both glide, but a Bird is not a type of Boat and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions
*/
// let bird = {
//     name: "Donald",
//     numLegs: 2
//   };

//   let boat = {
//     name: "Warrior",
//     type: "race-boat"
//   };

//   // Only change code below this line
//   let glideMixin = function(obj){ // glideMixin function will take one "obj" paramenter and 
//     obj.glide = function(){ // and gives it the glide mentod...
//       console.log(" I can Glide through...");
//     }
//   };

//   glideMixin(bird); // calling glideMixin function with bird Argument...
//   glideMixin(boat); // calling glideMixin function with boat Argument....

//   bird.glide(); //  I can Glide through...
//   boat.glide(); //  I can Glide through...
/******************************************************************************************************* */
/* Use Closure to Protect Properties Within an Object from Being Modified Externally */

// function Bird() {
//     this.hatchedEggs = 10;
// };
// let Duck = new Bird();
// console.log(Duck);
// console.log(Bird.hatchedEggs = 20);
// console.log(Duck.hatchedEggs);
// console.log(Duck.hatchedEggs = 100);

/* Above example hatchedEggs can be accessed and modified by anybody, it is not good if the hatchedEggs will be and password paramerter or user id to overcom the problem following systme is used...*/

// function Bird() {
//     let weight = 15; // new variable is created
//     this.getWeight = function(){  // function is created to access the variable.
//         return weight; // since waight is the local variable for the Bird it can be accessed n sidde the function and can't accessed otsied the function. so it is safe
//     }
//   };
// let Duck = new Bird();
// console.log(Duck.getWeight());
/****************************************************************** */
/* Understand the Immediately Invoked Function Expression (IIFE) */

/* A common pattern in JavaScript is to execute a function as soon as it is declared: */

// (function () {
//     console.log("Chirp, chirp!");
//   })(); // this is an anonymous function expression that executes right away
//   // Outputs "Chirp, chirp!" immediately
//  (function(){
//      console.log("A cozy nest is ready");
//  })();
/************************************************************************* */
/* Use an IIFE to Create a Module */
// let funModule = (function(){
//     return{
//       isCuteMixin: function(obj){
//         obj.cute = function(){
//           console.log("I am cute..!!");
//         };
//       },
//       singMixin: function(obj){
//         obj.sing = function(){
//           console.log("I can sing..");
//         };
//       }
//     }
//   })();

//   funModule.isCuteMixin;
//   funModule.singMixin;
 /*************************************************************** */
 
   
