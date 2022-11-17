import {User, User} from './User.js'

let pulsanteSubmit = document.getElementById("submit")
pulsanteSubmit.addEventListener("click",submit, false);

function submit(){

    let User = new User(
        document.getElementById("nomeUtente").value, 
        document.getElementById("cognomeUtente").value, 
        document.getElementById("codiceFiscaleUtente").value, 
        document.getElementById("dataNascitaUtente").value,
        document.getElementById("indirizzoUtente").value,
        document.getElementById("emailUtente").value,
        document.getElementById("telefonoUtente").value,
        document.getElementById("occupazioneUtente").value)
    // document.getElementById("nome").textContent = "Nome: " + document.getElementById("nomeUtente").value
    // document.getElementById("cognome").textContent = "Cognome: " + document.getElementById("cognomeUtente").value
    // document.getElementById("codiceFiscale").textContent = "Codice fiscale: " + document.getElementById("codiceFiscaleUtente").value //MDDDNL92M26D969P
    // document.getElementById("dataNascita").textContent = "Data di nascita: " + document.getElementById("dataNascitaUtente").value
    // document.getElementById("indirizzo").textContent = "Indirizzo: " + document.getElementById("indirizzoUtente").value
    // document.getElementById("email").textContent = "Email: " + document.getElementById("emailUtente").value
    // document.getElementById("telefono").textContent = "Telefono: " + document.getElementById("telefonoUtente").value
    // document.getElementById("occupazione").textContent = "Occupazione: " + document.getElementById("occupazioneUtente").value
}