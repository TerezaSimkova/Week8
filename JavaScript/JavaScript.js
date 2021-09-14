//Javascript

function demoOnLoad() {
    alert("Ciao!");
}
function demoOnClick() {
    alert("Hai cliccato sul tasto!")
}

function onkeydownDemo() {
    alert("Hai premuto il tasto")
}

function demoOnChange() {
    alert("Hai selezionato qualcosa")
}

function checkSelection() {
    let checkBox = document.getElementById("avaible");
    if (checkBox.checked) {

        alert("ogetto disponibile!")
    }
    else {
        alert("ogetto non disponibile!")
    }
}

function changeButtonVisibiliti() {
    let usernameInput = document.getElementsByClassName("username");
    let button = document.getElementById("submit");
    if (usernameInput.value != "") {
        button.style.visibility = "visibile";
    }
}


function changeButton() {
    let usernameInput1 = document.getElementsByClassName("username");
    let button = document.getElementById("submit2");
    if (usernameInput1.value != "") {
        button.disabled = false;
    }
}