
let weight = 85; //parseInt(document.getElementById("weight").value);
let height = 175; //parseInt(document.getElementById("height").value);
let bmi;
let bmiResult;

let btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener('click', calcBMI);

function calcBMI() {

    bmi = weight/((height/100) * (height/100));
    bmiResult = document.querySelector("#bmi").innerHTML;

    if (bmi < 18.5) {
        bmiResult = "BMI is: " + bmi + " meaning, you're underweight."
    }   else if (bmi < 25) {
        bmiResult = "BMI is: " + bmi + " meaning, you're healthy."
    }   else if (bmi < 30) {
        bmiResult = "BMI is: " + bmi + " meaning, you're overweight."
    }   else if (bmi > 30) {
        bmiResult = "BMI is: " + bmi + " meaning, you're obese."
    }   else {
        bmiResult = "BMI is: " + bmi + " meaning, your result is invalid."
    }
}

