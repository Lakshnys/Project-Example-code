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

let myClassName = document.getElementsByClassName("nav-item");
console.log(myClassName);

// retrieving child id throung for loop
var childId = [];
for (let i = 0; i < myClassName.length - 1; ++i) {
    childId[i] = (myClassName[i].children[0].id);
    //console.log(childId) ;
}
console.log(childId);
//onclick event adding
var thisId;
for (let i = 0; i < childId.length; ++i) {
    document.getElementById(childId[i]).onclick = function () { abc(this.id) };
}
function abc(aaa) {
    for (let i = 0; i < childId.length; ++i) {
        let classCheck = document.getElementById(childId[i]).className = "nav-link";
    }
    document.getElementById(aaa).className = "nav-link active";
    //alert("id: " + aaa);
    console.log(document.getElementById(aaa).text)
}
