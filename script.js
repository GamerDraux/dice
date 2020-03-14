let d4button="";
let d6button="";
let d8button="";
let d10button="";
let d12button="";
let d20button="";

function initalize (){
    console.log ("document loaded")    
    d4button=document.getElementById("d4button");
    console.log (d4button);
    d6button=document.getElementById("d6button");
    console.log (d6button);
    d8button=document.getElementById("d8button");
    console.log (d8button);
    d10button=document.getElementById("d10button");
    console.log (d10button);
    d12button=document.getElementById("d12button");
    console.log (d12button);
    d20button=document.getElementById("d20button");
    console.log (d20button);
    d4button.addEventListener('click', function(event) {
        document.getElementById("d4result").innerHTML=(singleRoll(4));
    });
    d6button.addEventListener('click', function(event){
        document.getElementById("d6result").innerHTML=(singleRoll(6));
    });
    d8button.addEventListener('click', function(event) {
        document.getElementById("d8result").innerHTML=(singleRoll(8));
    });
    d10button.addEventListener('click', function(event) {
        document.getElementById("d10result").innerHTML=(singleRoll(10));
    });
    d12button.addEventListener('click', function(event) {
        document.getElementById("d12result").innerHTML=(singleRoll(12));
    });
    d20button.addEventListener('click', function(event) {
        document.getElementById("d20result").innerHTML=(singleRoll(20));
    });
}
 


    function singleRoll(sides){
        let result = Math.ceil(Math.random()*sides);
        return result;
        }