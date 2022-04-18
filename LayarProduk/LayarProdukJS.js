function plus() {
    var price = document.getElementById("price");
    var count = document.getElementById("count");
    var oriPrice = document.getElementById("product-price");
    var num = parseInt(count.innerText);
    var tmp;

    num += 1;
    count.innerText = num;
    tmp = parseInt(priceText()) + parseInt(oriPriceText());
    price.innerHTML = numberWithCommas(tmp);
}

function minus() {
    var price = document.getElementById("price");
    var count = document.getElementById("count");
    var oriPrice = document.getElementById("product-price");
    var num = parseInt(count.innerText);
    var tmp;

    if (num > 1) {
        num -= 1;
    }

    count.innerText = num;
    console.log(num);
    tmp = parseInt(priceText()) - parseInt(oriPriceText());
    if (parseInt(priceText()) == parseInt(oriPriceText())) {
    } else {
        price.innerHTML = numberWithCommas(tmp);
    }
}

function priceText() {
    var price = document.getElementById("price");
    var count = document.getElementById("count");
    var newPrice = price.innerText.replace("Rp.", "");
    for (let i = 0; i < 10; i++) {
        newPrice = newPrice.replace(".", "");
    }
    return newPrice;
}

function oriPriceText() {
    var oriPrice = document.getElementById("product-price");
    var count = document.getElementById("count");
    var newPrice = oriPrice.innerText.replace("Rp.", "");
    for (let i = 0; i < 10; i++) {
        newPrice = newPrice.replace(".", "");
    }
    return newPrice;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function star(id) {
    var starClass = document.querySelectorAll(".star-logo");
    var stars = document.querySelectorAll(".stars");

    for (let index = 0; index < 5; index++) {
        if (index < id) {
            stars[index].style.fill = "gold";
        } else {
            stars[index].style.fill = "grey";
        }
    }
}

function clicked(id) {
    var a = parseInt(id);
    star(a);
}
