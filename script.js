// penawaran spesial slide

let nextBtn = document.querySelector(".penawaran-btn-next");
let prevBtn = document.querySelector(".penawaran-btn-prev");
let arrSlides = Array.from(document.getElementsByClassName("penawaran-list"));

prevBtn.style.display = "none";

let currIndex = 0;


function startAnimation() {
    for(let i=0; i<arrSlides.length-1; i++) {
        arrSlides[i].style.transform = "scale(0)";
    }
    setTimeout(() => {
        for (let i = 0; i < arrSlides.length - 1; i++) {
            arrSlides[i].style.transform = "scale(1)";
        }
    }, 100);
}

function nextSlide(){
    startAnimation();
    arrSlides[currIndex].classList.remove("active");
    arrSlides[currIndex+3].classList.add("active"); 
    currIndex++;
    if (currIndex + 2 === arrSlides.length - 1) {
        nextBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
}


function prevSlide() {
    startAnimation();
    arrSlides[currIndex-1].classList.add("active");
    arrSlides[currIndex+2].classList.remove("active");
    currIndex--;
    if(currIndex===0) {
        prevBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}