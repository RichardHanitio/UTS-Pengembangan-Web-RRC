var f = document.getElementById("form");

f.addEventListener("submit", (e) => {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var passCon = document.getElementById("confirmPassword").value;
    var phone = document.getElementById("phone").value;
    var meter = document.getElementById("meter");
    var userInv = document.getElementById("userInvalid");
    var passInv = document.getElementById("passNotMatch");
    var problem = false;

    if (checkSpace(user)) {
        userInv.innerHTML = "Username cannot contain space !";
        userInv.style.color = "red";
        problem = true;
    }

    if (pass != passCon || pass === "") {
        passInv.innerHTML = "Password does not match !";
        passInv.style.color = "red";
        problem = true;
    }

    if (problem == true) {
        e.preventDefault();
    }
});

password.addEventListener("input", strongPassword);
function strongPassword() {
    var pass = document.getElementById("password").value;
    var gauge = 0;
    var regExp = /[A-Z]/;
    let isMatch = regExp.test(pass);

    if (pass.length < 8) {
    } else {
        gauge += 1;
    }

    if (stringContainsNumber(pass)) {
        gauge += 1;
    } else {
    }

    if (isMatch) {
        gauge += 1;
    }

    if (gauge == 1) {
        meter.innerHTML = "Weak";
        meter.style.color = "red";
    } else if (gauge == 2) {
        meter.innerHTML = "Medium";
        meter.style.color = "gold";
    } else if (gauge == 3) {
        meter.innerHTML = "Strong";
        meter.style.color = "greenyellow";
    } else {
        meter.innerHTML = "Weak";
        meter.style.color = "red";
    }
}

function stringContainsNumber(pass) {
    return /\d/.test(pass);
}

function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

function checkSpace(user) {
    var check = user.indexOf(" ") >= 0;
    return check;
}
