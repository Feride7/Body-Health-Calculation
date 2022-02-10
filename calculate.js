let btnChild = document.getElementById("childCalc");

btnChild.addEventListener("click", function(e) {
    var kg = document.getElementById("kg").value;
    var height = document.getElementById("height").value;
    let textResult = document.getElementById("textResult");

    let result = kg / (height * height);

    if (result < 18.5) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}. You are underweight`
    } else if (result > 18.5 && result < 24.9) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}. It is normal.`
    } else if (result > 25 && result < 29.9) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}. You are overweight!`
    } else if (result > 30 && result < 39.9) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}. You are obese!`
    } else if (result > 40) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}.  Morbidly obese`
    } else {
        textResult.innerHTML = Math.floor(result) + " please enter a valid value";
    }

    e.preventDefault()

})