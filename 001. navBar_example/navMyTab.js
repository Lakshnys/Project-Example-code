/**
 * Find all menu element by selector ".nav-link or by className "nav-link".
 * Use "for" loop to iterate through all menu itemsinside of the loop and add "onclick" event to each menu item.
 * In the "onclick" event handler:
 * 1. Remove first "active" class from all menu element
 * 2. Add "active" class to the clicked menu elment
 * 3. Log to the console message with the name of the clicked menu item.
 */

// Find all the emement by selector
//****** myTab is selected as a parent*********//
var myTabId = document.getElementById("myTab");
console.log(myTabId);

let myTabChild = myTabId.children;
// console.log(myTabChild.children);
console.log(myTabChild[0].children);
myTabChildChild0 = myTabChild[0].children;
console.log(myTabChildChild0[0].id);
myTabChId0 = myTabChildChild0[0].id;

console.log(myTabChild[1].children);
myTabChildChild1 = myTabChild[1].children;
console.log(myTabChildChild1[0].id);
myTabChId1 = myTabChildChild1[0].id;

console.log(myTabChild[2].children);
myTabChildChild2 = myTabChild[2].children;
console.log(myTabChildChild2[0].id);
myTabChId2 = myTabChildChild2[0].id;

document.getElementById(myTabChId0).className = "nav-link active";
document.getElementById(myTabChId1).className = "nav-link";
document.getElementById(myTabChId2).className = "nav-link";