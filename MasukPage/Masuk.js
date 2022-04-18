var f = document.getElementById("form");

function showPassword() {
    var x = document.getElementById("password");
    var y = document.getElementById("checkbox");

    if (y.checked == 1) {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

f.addEventListener("submit", (sub) => {
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    var z = document.getElementById("wrong");

    console.log(x);
    console.log(y);
    if (x == "admin" && y == "admin") {
        console.log("Triggered");
    } else {
        z.innerText = "Username or password is wrong !";
        sub.preventDefault();
    }
});
