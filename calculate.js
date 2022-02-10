function calculate() {
    var kgChild = document.getElementById("kg");
    var heightChild = document.getElementById("height");

    var kg = parseFloat(kgChild);
    var height = parseFloat(heightChild);

    let textResult = document.getElementById("textResult");
    let result = parseFloat(kg / (height * height));



    if (result < 18.5) {
        textResult.innerHTML = Math.floor(result) + " you are so weak"
    } else if (result > 18.5 && result < 24.9) {
        textResult.innerHTML = Math.floor(result) + " your weight is normal"
    } else if (result > 25 && result < 29.9) {
        textResult.innerHTML = Math.floor(result) + " you are overweight"
    } else if (result > 30 && result < 39.9) {
        textResult.innerHTML = resultMath.floor(result) + "you are obese";
    } else if (result > 40) {
        textResult.innerHTML = Math.floor(result) + " severely obese (morbidly obese)";
    } else {
        textResult.innerHTML = Math.floor(result) + " please enter a valid value";
    }

}
calculate()
let btnChild = document.getElementById("childCalc")
btnChild.addEventListener("click", calculate)