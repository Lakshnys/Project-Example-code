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

let myClassName = document.querySelectorAll(".nav-link");
    console.log(myClassName);

for (let i=0; i < myClassName.length; ++i){
    myClassName[i].onclick = function(){
        for(let j = 0; j < myClassName.length; ++j){
            myClassName[j].classList.remove("active");
        }
    myClassName[i].classList.add("active");
    console.log(myClassName[i].innerHTML);
};
}