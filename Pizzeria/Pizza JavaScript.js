function openNav() {
    document.getElementById("navigazione").style.width = "250px";
}

function closeNav() {
    document.getElementById("navigazione").style.width = "0";
}

//function openForm() {
//    document.getElementById("form").style.display = "block";
//}
//function closeForm() {
//    document.getElementById("form").style.display = "none";

//}

function calcBill() {

    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let priceData = document.querySelectorAll("td#prezzo");
    let bill = 0.0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            bill += parseInt(priceData[i].innerHTML)
        }
    }
    if (bill != 0.0) {
        localStorage.setItem("conto", bill);
    }
    console.log(bill);
    console.log(priceData);
    let pageMenu = document.getElementById("changePage");
    pageMenu.setAttribute("href", "Menu.html");
 
}
function showCardInput() {
    let cardInput = document.getElementById("codiceCarta");
    cardInput.setAttribute("required", "");    //turns required off
    cardInput.required = false;

    let cashChoice = document.querySelector("input[value='1']");
    let cardChoice = document.querySelector("input[value='2']");

    if (cardChoice.checked) {
        cardInput.style.display = "";
        cardInput.setAttribute("required", "");    //turns required on
        cardInput.required = true;
    }
    else if (cashChoice.checked) {
        cardInput.style.display = "none"
    }
}

function showBill() {
    let p = document.getElementById("bill");
    let bill = localStorage.getItem("conto");
    p.innerHTML = "Stai per pagare: " + bill + "€";
    localStorage.clear();
   
}

function myFunction() {
     document.getElementById("form").reset();

}