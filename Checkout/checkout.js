let amount = document.querySelector(".amount");
let harga = document.querySelector(".harga");
let hargaAwal = 4059000;

let curr = parseInt(amount.innerHTML);


harga.innerHTML = hargaAwal.toLocaleString();

function increment() {
    curr++;
    amount.innerHTML = curr;
    harga.innerHTML = (curr * hargaAwal).toLocaleString();
}

function decrement() {
    if(curr>1) curr--;
    amount.innerHTML = curr;
    harga.innerHTML = (curr * hargaAwal).toLocaleString();
}
