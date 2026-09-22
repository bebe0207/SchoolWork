function calculateSum() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    height =height / 100;
    let bmi = weight / (height * height);

    document.getElementById("result").innerHTML = "Your BMI: " + bmi.toFixed(2);
    
}