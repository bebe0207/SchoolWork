//var weight = 60; var height = 160; 
var readline = require("readline-sync");
var weight = readline.question("請輸入體重(kg):");
var height = readline.question("請輸入身高(cm):");
var bmi = weight / (height / 100 ** 2); 
console.log("Your BMI:" + bmi);  
//function test(weight=70){     
//    var weight=50;     
//    console.log("weight="+weight)     
//    return weight; }  
//var result=test(90);  
//console.log("weight="+weight)