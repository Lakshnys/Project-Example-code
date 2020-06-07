/**
 * js for nav tab...
 * 
 * create a function - onclick to change the ID className from "nav-link" to "nav-link-active"
 * and change other ID className from "nav-link-active" to "nav-link";
 * 
 * ie., class active to be activated on onclick event, and same event active class to be deactivated.
 * 
 */
let i = 1;
let j = 2;
let k = 3;

// let tab1;
// let tab2;
// let tab3;

document.getElementById("tab1").onclick = function(){a()};
document.getElementById("tab2").onclick = function(){b()};
document.getElementById("tab3").onclick = function(){c()};

function a(){
    document.getElementById("tab1").className = "nav-link active";
    document.getElementById("tab2").className = "nav-link";
    document.getElementById("tab3").className = "nav-link";
    console.log("Active Tab is Active");
}
function b(){
    document.getElementById("tab2").className = "nav-link active";
    document.getElementById("tab3").className = "nav-link";
    document.getElementById("tab1").className = "nav-link";
    console.log("Link-1 Active");
}
function c(){
    document.getElementById("tab3").className = "nav-link active";
    document.getElementById("tab1").className = "nav-link";
    document.getElementById("tab2").className = "nav-link";
    console.log("Link-2 Active");
}
