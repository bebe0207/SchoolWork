var weight = 60; var height = 160; 
var readline = require("readline-sync");
var weight = readline.question("your weight?(kg)1-200:");
var height = readline.question("your height(cm)1-250:");
if (weight <= 0 || height <= 0) { 
    console.log("Please enter a valid weight and height."); 
}
else{
    var bmi = weight / ((height / 100) ** 2); 
    console.log("Your BMI:" + bmi);  
}
if (weight > 200 && height > 250) ;{
    console.log("Please enter a valid weight and height.");
}
else{
    var bmi = weight / ((height / 100) ** 2); 
    console.log("Your BMI:" + bmi);  
}

//function test(weight=70){     
//    var weight=50;     
//    console.log("weight="+weight)     
//    return weight; }  
//var result=test(90);  
//console.log("weight="+weight)