const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");
let num1 = document.querySelector("#num");


let num = 1;

plus.addEventListener("click", function(){
    let existingNum = num1.value;
    num = existingNum;
    num++;
    num1.value = num;
})

minus.addEventListener("click", function(){
    let existingNum = num1.value;
    num = existingNum;
    num--;
    num1.value = num;
})

reset.addEventListener("click", function(){
    num = 0
    num1.value = num;
});