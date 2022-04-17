let amounts = Array.from(document.getElementsByClassName("amount"));
let recapAmounts = Array.from(document.getElementsByClassName("recap-amount"));
let recapHarga = Array.from(document.getElementsByClassName("recap-harga"));
let grandTotal = document.querySelector(".grandTotal");
let harga = [4059000, 790000];

let checkBoxes = Array.from(document.getElementsByClassName("keranjang-checkbox"));

let plus = Array.from(document.getElementsByClassName("plus"));
let minus = Array.from(document.getElementsByClassName("minus"));

checkBoxes.forEach(
    (checkbox, checkboxIndex) => {
        function addIncrement() {
            increment(checkboxIndex);
        }
        function addDecrement() {
            decrement(checkboxIndex);
        }
        checkbox.addEventListener("change", e => {   
            if(e.target.checked){
                plus[checkboxIndex].addEventListener("click", addIncrement);
                minus[checkboxIndex].addEventListener("click", addDecrement); 
                setInnerHTML(checkboxIndex, 1);
            } 
            else {
                plus[checkboxIndex].removeEventListener("click", addIncrement);
                minus[checkboxIndex].removeEventListener("click", addDecrement);
                resetInnerHTML(checkboxIndex);
            }
        })
    }
)


function calculateGrandTotal() {
    let gt = 0;
    for(let i=0; i<recapHarga.length; i++) {
        gt+=parseInt(recapHarga[i].innerHTML);
    } 
    grandTotal.innerHTML = gt.toLocaleString();
}

function resetInnerHTML(idx) {
    amounts[idx].innerHTML = 0;
    recapAmounts[idx].innerHTML = 0;
    recapHarga[idx].innerHTML = 0;
    calculateGrandTotal();
}

function setInnerHTML(idx, currAmount){
    amounts[idx].innerHTML = currAmount;
    recapAmounts[idx].innerHTML = currAmount;
    recapHarga[idx].innerHTML = (currAmount * harga[idx]);
    calculateGrandTotal();
}

function decrement(idx) {
    let currAmount = parseInt(amounts[idx].innerHTML);
    if(currAmount>1) currAmount--;
    setInnerHTML(idx, currAmount);
}

function increment(idx) {
    let currAmount = parseInt(amounts[idx].innerHTML);
    currAmount++;
    setInnerHTML(idx, currAmount);
}
