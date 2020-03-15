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
    resetButton=document.getElementById("reset");
    console.log (resetButton);

    resetButton.addEventListener('click', function(){
        let elements=document.getElementsByClassName("results");
        for (i=0; i<elements.length; i++){
            elements[i].style.backgroundColor="grey";
            elements[i].innerHTML=""
        }
    })
    d4button.addEventListener('click', function(event) {
        document.getElementById("d4result").innerHTML=(singleRoll(4));
        document.getElementById("d4result").style.backgroundColor='black';
        document.getElementById("d4result").style.color="silver";
    });
    d6button.addEventListener('click', function(event){
        document.getElementById("d6result").innerHTML=(singleRoll(6));
        document.getElementById('d6result').style.backgroundColor='black';
        document.getElementById('d6result').style.color='silver';
    });
    d8button.addEventListener('click', function(event) {
        document.getElementById("d8result").innerHTML=(singleRoll(8));
        document.getElementById('d8result').style.backgroundColor='black';
        document.getElementById('d8result').style.color='silver';
    });
    d10button.addEventListener('click', function(event) {
        document.getElementById("d10result").innerHTML=(singleRoll(10));
        document.getElementById("d10result").style.backgroundColor='black';
        document.getElementById("d10result").style.color='silver';
    });
    d12button.addEventListener('click', function(event) {
        document.getElementById("d12result").innerHTML=(singleRoll(12));
        document.getElementById("d12result").style.backgroundColor='black';
        document.getElementById("d12result").style.color='silver';    
    });
    d20button.addEventListener('click', function(event) {
        document.getElementById("d20result").innerHTML=(singleRoll(20));
        document.getElementById("d20result").style.backgroundColor='black';
        document.getElementById("d20result").style.color='silver';
    });
}
 


    function singleRoll(sides){
        let result = Math.ceil(Math.random()*sides);
        return result;
        }