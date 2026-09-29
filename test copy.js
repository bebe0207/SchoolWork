var readline = require("readline-sync");

var weight;
var height;

while (true) {
    weight = Number(readline.question("Your weight (10~200 kg)? "));

    if (!Number.isFinite(weight) || weight < 10 || weight > 200) {
        console.log("Please enter a number from 10 to 200 kg.");
        continue;
    } else {
        break;
    }
}

while (true) {
    height = Number(readline.question("Your height (80~220 cm)? "));

    if (!Number.isFinite(height) || height < 80 || height > 220) {
        console.log("Please enter a number from 80 to 220 cm.");
        continue;
    } else {
        break;
    }
}

var bmi = weight / ((height / 100) ** 2);
console.log("Your BMI: " + bmi.toFixed(2));
