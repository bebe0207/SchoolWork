var readline = require("readline-sync");

var weight = Number(readline.question("your weight?(kg)1-200:"));
var height = Number(readline.question("your height(cm)1-250:"));

if (
    !Number.isFinite(weight) ||
    !Number.isFinite(height) ||
    weight < 1 || weight > 200 ||
    height < 1 || height > 250
) {
    console.log("Please enter a valid weight and height.");
} else {
    var bmi = weight / ((height / 100) ** 2);
    console.log("Your BMI: " + bmi.toFixed(2));
}

//function test(weight=70){
//    var weight=50;
//    console.log("weight="+weight)
//    return weight; }
//var result=test(90);
//console.log("weight="+weight)
