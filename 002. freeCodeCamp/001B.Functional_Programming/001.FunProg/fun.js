console.log(123);
/* 001 Functional programming Free Code Camp */

// Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// const prepareTea1 =  function(){ // above is Arro function.
//     return "greenTea1";
// }
// console.log(prepareTea());   |
// console.log(prepareTea1());  | both function are same checked
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
// const getTea1 = (numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;

// };

// // Only change code below this line
// const tea4TeamFCC = getTea1(40);
// // console.log(getTea(40));
// // tea4TeamFCC = teaCups;;
// console.log(tea4TeamFCC);
// // Only change code above this line
/********************* end of 001 *************************************/2
/* ***************************002**************************************/
// // The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.
 // Function that returns a string representing a cup of green tea
 const prepareGreenTea = () => 'greenTea';
 // Function that returns a string representing a cup of black tea
 const prepareBlackTea = () => 'blackTea';
 /*
 Given a function (representing the tea type) and number of cups needed, the
 following function returns an array of strings (each representing a cup of
 a specific type of tea).
 */
 const getTea = (prepareTea, numOfCups) => {
   const teaCups = [];
 
   for(let cups = 1; cups <= numOfCups; cups += 1) {
     const teaCup = prepareTea();
     teaCups.push(teaCup);
   }
   return teaCups;
 };
 
 // Only change code below this line
 const tea4GreenTeamFCC = 10;
 const tea4BlackTeamFCC = 30;
 // Only change code above this line
 
 console.log(
   tea4GreenTeamFCC,
   tea4BlackTeamFCC
 );
 