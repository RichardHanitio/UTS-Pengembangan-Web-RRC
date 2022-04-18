function check() {
    var y = document.getElementById("checkbox");
    var alamat = document.getElementById("alamat");


    if (y.checked == 1) {
        alamat.innerHTML = "Alamat anda akan disimpan menjadi alamat utama";
        alamat.style.color = "blue";
        alamat.style.fontWeight = "bold";
        alamat.style.fontSize="13px";

    } else {
        alamat.innerHTML = "";
    }
}
