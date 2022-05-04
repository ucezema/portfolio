let coll = document.querySelector("#bdy");

let blue = document.querySelector("#blue");
blue.addEventListener("click", function(){
    coll.style.background = "rgb(17, 88, 136)";
})

let green = document.querySelector("#green");
green.addEventListener("click", function(){
    coll.style.background = "rgb(8, 114, 114)";
})

let orange = document.querySelector("#orange");
orange.addEventListener("click", function(){
    coll.style.background = "rgb(136, 90, 4)";
})

let black = document.querySelector("#black");
black.addEventListener("click", function(){
    coll.style.background = "rgb(89, 89, 89)";
})

let red = document.querySelector("#red");
red.addEventListener("click", function(){
    coll.style.background = "rgb(176, 9, 9)";
})

let reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
    coll.style.background = "#fff";
})