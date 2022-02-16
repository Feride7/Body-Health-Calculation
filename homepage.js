
// Hamburger bar
const hamburger = document.getElementById("hamburger");
const navUL = document.querySelector(".nav-top-ul");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show")
})


// Slider 

const sliderImages = document.querySelectorAll(".slide")
const arrowRight = document.getElementById("arrow-right")
const arrowLeft = document.getElementById("arrow-left")
current = 0;


// To clear all images
function reset() {
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none";
    }
}


//init Slider
function startSlider() {
    reset();
    sliderImages[0].style.display="block"
}

// Showing prev

function slideLeft() {
    reset();
    sliderImages[current-1].style.display = "block";
    current--;
}

// Slide right
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++
}

// Left Arrow Click

arrowLeft.addEventListener("click", ()=>{
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
} )

// Right Arrow Click

arrowRight.addEventListener("click", ()=>{
    if(current === sliderImages.length-1){
        current = -1;
    }
    slideRight();
} )

startSlider();