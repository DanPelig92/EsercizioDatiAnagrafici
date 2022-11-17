let User = class {

    constructor(nome, cognome, codiceFiscale, dataNascita, indirizzo, email, telefono, occupazione){

        this.nome=nome
        this.cognome=cognome
        this.codiceFiscale=codiceFiscale
        this.dataNascita=dataNascita
        this.indirizzo=indirizzo
        this.email=email
        this.telefono=telefono
        this.occupazione=occupazione

    }

    getNome(){return this.nome}

    getCognome(){return this.cognome}

    getCodiceFiscale(){return this.codiceFiscale}

    getDataNascita(){return this.dataNascita}

    getIndirizzo(){return this.indirizzo}

    getEmail(){return this.email}

    getTelefono(){return this.telefono}

    getOccupazione(){return this.occupazione}
}

export {User};