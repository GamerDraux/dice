let d6button=document.getElementById("d6button");
let d8button=document.getElementById("d8button");


function singleRoll(sides){
    let result = Math.ceil(Math.random()*sides);
    return result;
}

d6button.addEventListener('click', function(event){
    document.getElementById("d6result").innerHTML=(singleRoll(6));
});

d8button.addEventListener('click', function(event) {
    document.getElementById("d8result").innerHTML=(singleRoll(8));
});