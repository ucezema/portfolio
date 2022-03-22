
var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;
var heightSquare = Math.pow(height,2);
var hSquare = Math.round(heightSquare);
var myBMI = document.querySelector("#bmi");
var btn = document.querySelector("#btn1");
var bmi = calcBMI(weight, heightSquare);
var bmi2 = Math.round(bmi);
let bmiResult;

// document.querySelector("#weight").value;
// document.querySelector("#height").value;

function calcBMI(a, b) {
    return a/b;
}

if (bmi < 18.5) {
    bmiResult = "BMI is: " + bmi2 + " meaning, you're underweight.";
}   else if (bmi < 25) {
    bmiResult = "BMI is: " + bmi2 + " meaning, you're healthy.";
}   else if (bmi < 30) {
    bmiResult = "BMI is: " + bmi2 + " meaning, you're overweight.";
}   else if (bmi > 30) {
    bmiResult = "BMI is: " + bmi2 + " meaning, you're obese.";
}   else {
    bmiResult = "BMI is: " + bmi2 + " meaning, your result is invalid.";
}

function displayResult() {
    document.querySelector("#dem").innerHTML = "Height square is: " + hSquare;
    myBMI.innerHTML = bmiResult;
}
    
// document.getElementById("bmi").innerHTML = calcBMI(x, z);




// document.getElementById("serv").innerHTML = "Available services";
// document.querySelector(".service").style.color="#24A19C";

