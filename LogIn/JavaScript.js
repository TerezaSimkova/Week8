function CheckedLogUser() {
    let storedUsername = localStorage.getItem("username"); /*Recupero i dati passandoli la Key */
    let storedPassword = localStorage.getItem("password");

    if (storedUsername != null && storedPassword != null) {

        hideForm();
    }
}

function hideForm() {
    let form = document.getElementById("loginForm");

    form.style.display = none; //nasconde lo form 

    let logoutButton = document.getElementById("logOutButton");

    logoutButton.style.display = "";
}

function save() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    //salvo tutto nel local storage
    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);
}

function change() {

    //se i campiu sono compilati --> login effetuato con successo
    //recupero elementi tramite input type
    let inputs = document.querySelectorAll("input[type='text'], input[type='password']");
    //recupero il tasto di login 
    let loginButton = document.querySelector("input[type=submit]");

    //Ciclo su inputs per verificare se sono compilati o meno
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") //se l'i-esimo campo input ha valore stringa vuota
        {
            loginButton.disabled = true; //oppure button.disabled="disabled"; => è disabilitato se il campo non è compilato
            return; //esce se trova un campo non compilato
        }
    }
    loginButton.disabled = false; //arriva qui solo se entrambi i campi sono compilati
}

function logOut() {

    //ripulire il localstorage
    localStorage.clear();

    //recuperare la form e mostrarla di nuovo 
    let form = document.getElementById("loginForm");
    form.style.display = "";

    //recuperare e nascondere tasto logout
    let logoutButton = document.getElementById("logOutButton");
    logoutButton.style.display = "none";

}