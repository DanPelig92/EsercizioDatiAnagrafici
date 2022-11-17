import {User} from './User.js'

let pulsanteSubmit = document.getElementById("submit")
pulsanteSubmit.addEventListener("click",submit, false);
let pulsanteVisualizzaDatiUtente = document.getElementById("visualizzaDati")
pulsanteVisualizzaDatiUtente.addEventListener("click",stampaDati, false)


let array=[]
function submit(){

    let user = new User(
        document.getElementById("nomeUtente").value, 
        document.getElementById("cognomeUtente").value, 
        document.getElementById("codiceFiscaleUtente").value, 
        document.getElementById("dataNascitaUtente").value,
        document.getElementById("indirizzoUtente").value,
        document.getElementById("emailUtente").value,
        document.getElementById("telefonoUtente").value,
        document.getElementById("occupazioneUtente").value)
        array[0] = user;
        // array.push(user);
}

function stampaDati(){
    document.getElementById("nome").textContent = "Nome: " + array[0].getNome()
    document.getElementById("cognome").textContent = "Cognome: " + array[0].getCognome()
    document.getElementById("codiceFiscale").textContent = "Codice fiscale: " + array[0].getCodiceFiscale() //MDDDNL92M26D969P
    document.getElementById("dataNascita").textContent = "Data di nascita: " + array[0].getDataNascita()
    document.getElementById("indirizzo").textContent = "Indirizzo: " + array[0].getIndirizzo()
    document.getElementById("email").textContent = "Email: " + array[0].getEmail()
    document.getElementById("telefono").textContent = "Telefono: " + array[0].getTelefono()
    document.getElementById("occupazione").textContent = "Occupazione: " + array[0].getOccupazione()
}