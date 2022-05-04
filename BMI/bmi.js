
// var weight = parseInt(document.getElementById("weight").value);
// var height = parseInt(document.getElementById("height").value);
var weight = 85;
var height = 2;

var heightSquare = Math.pow(height,2);
var myBMI = document.querySelector("#bmi");
var bmi = calcBMI(weight, heightSquare);
var bmi2 = Math.round(bmi);
var bmiResult;
var btn = document.querySelector("#btn1");

function calcBMI(a, b) {
    return a / b;
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

btn.addEventListener('click', function() {
    document.getElementById("dem").innerHTML = "Height square is: " + heightSquare;
    myBMI.innerHTML = bmiResult;
});

// btn.addEventListener('click', displayResult());
// document.getElementById("bmi").innerHTML = calcBMI(x, z);




// document.getElementById("serv").innerHTML = "Available services";
// document.querySelector(".service").style.color="#24A19C";

