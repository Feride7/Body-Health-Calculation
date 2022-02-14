//Menu button
var btnAdult = document.getElementById("btnAdult");
var formAdult = document.getElementById("formAdult");
var formWaist = document.getElementById("formWaist");
var btnWaist = document.getElementById("btnWaist");
var btnChildNav = document.getElementById("btnChildNav");
var formChild = document.getElementById("formChild");

btnChilNav.onclick = function childNav(e) {
    if (formChild.style.visibility = "visible") {
        formAdult.style.visibility = "hidden";
        formWaist.style.visibility = "hidden"
    }
    e.preventDefault()
};
btnAdult.onclick = function adultNav(e) {
    if (formAdult.style.visibility = "visible") {
        formChild.style.visibility = "hidden"
        formWaist.style.visibility = "hidden"
    }
    e.preventDefault()
};
btnWaist.onclick = function waistNav(e) {
    formWaist.style.visibility = "visible"
    formChild.style.visibility = "hidden"
    formAdult.style.visibility = "hidden";
    e.preventDefault()
}
window.onclick = function(e) {

    e.preventDefault()
};
//Children BMI calculator
var btnChild = document.getElementById("childCalc");
btnChild.addEventListener("click", function(e) {
    var kgChild = document.getElementById("kg").value;
    var heightChild = document.getElementById("height").value;
    let textResult = document.getElementById("childResult");
    let kg = parseFloat(kgChild);
    let height = parseFloat(heightChild);
    let result = parseFloat(kg / (height * height));
    console.log(result)

    if (result < 18.5) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}. You are underweight`
    } else if (result > 18.5 && result < 24.9) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}. It is normal.`
    } else if (result > 25 && result < 29.9) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}. You are overweight!`
    } else if (result > 30 && result < 39.9) {
        textResult.innerHTML = Math.floor(result) + "you are obese";
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}. You are obese!`
    } else if (result > 40) {
        textResult.innerHTML = ` Your result is: ${Math.floor(result)}.  Morbidly obese`
    } else {
        textResult.innerHTML = Math.floor(result) + " please enter a valid value";
    }

    e.preventDefault()


});
//Adult BMI calculator

var adultCalc = document.getElementById("adultCalc")

adultCalc.addEventListener("click", function(e) {
    let textResult = document.querySelector("#adultResult");
    let kgAdult = document.getElementById("kgAdult").value;
    let heightAdult = document.getElementById("heightAdult").value;

    let kgA = parseFloat(kgAdult);
    let heightA = parseFloat(heightAdult);

    let resultA = parseFloat(kgA / (heightA * heightA));
    console.log(resultA)

    if (resultA < 18.5) {
        textResult.innerHTML = Math.floor(resultA) + " you are so weak"
    } else if (resultA > 18.5 && resultA < 24.9) {
        textResult.innerHTML = Math.floor(resultA) + " your weight is normal"
    } else if (resultA > 25 && resultA < 29.9) {
        textResult.innerHTML = Math.floor(resultA) + " you are overweight"
    } else if (resultA > 30 && resultA < 39.9) {
        textResult.innerHTML = Math.floor(resultA) + "you are obese";
    } else if (resultA > 40) {
        textResult.innerHTML = Math.floor(resultA) + " severely obese (morbidly obese)";
    } else {
        textResult.innerHTML = Math.floor(resultA) + " please enter a valid value";
    }
    e.preventDefault()

});

//Waist Circumference
var btnWaist = document.getElementById("btnWaist");
var formWaist = document.getElementById("formWaist");
var waistCalc = document.getElementById("waistCalc");

waistCalc.addEventListener("click", function() {
    let gender = document.getElementById("gender");
    let waist = document.getElementById("waist").value;
    let waistResult = document.getElementById("waistResult");

    if (gender.value == "Female") {
        if (waist <= 80) {
            waistResult.innerHTML = `Your waist thickness is ${waist}.
        It is normal for women`
        } else {
            waistResult.innerHTML = `Your waist thickness is ${waist}.
        Women's waist circumference should be less than 80 cm, you are in the risk group`
        }
    }

    if (gender.value == "Male") {
        if (waist <= 94) {
            waistResult.innerHTML = `Your waist thickness is ${waist}.
        It is normal for men`
        } else {
            waistResult.innerHTML = `Your waist thickness is ${waist}.
        Men's waist circumference should be less than 94 cm, you are in the risk group`
        }
    }

});