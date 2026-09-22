var weight = 60; var height = 160; 
var bmi = weight / (height / 100 ** 2); 
console.log("Your BMI:" + bmi);  
function test(weight=70){     
    var weight=50;     
    console.log("weight="+weight)     
    return weight; }  
var result=test(90);  
console.log("weight="+weight)