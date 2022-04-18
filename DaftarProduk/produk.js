let penawaranLists = Array.from(document.getElementsByClassName("penawaran-list-1"));
let nextBtn = document.querySelector(".penawaran-btn-next");
let prevBtn = document.querySelector(".penawaran-btn-prev");

prevBtn.style.display = "none";

console.log(penawaranLists);

let currIndex = 0;

function startAnimation() {
    for (let i = 0; i < penawaranLists.length; i++) {
        penawaranLists[i].style.transform = "scale(0)";
    }
    setTimeout(() => {
        for (let i = 0; i < penawaranLists.length; i++) {
            penawaranLists[i].style.transform = "scale(1)";
        }
    }, 200);
}


function nextSlide() {
    startAnimation();
    penawaranLists[currIndex].classList.remove("active");
    penawaranLists[currIndex + 3].classList.add("active");
    currIndex++;
    if (currIndex + 2 === penawaranLists.length - 1) {
        nextBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
}

function prevSlide() {
    startAnimation();
    penawaranLists[currIndex - 1].classList.add("active");
    penawaranLists[currIndex + 2].classList.remove("active");
    currIndex--;
    if (currIndex === 0) {
        prevBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}