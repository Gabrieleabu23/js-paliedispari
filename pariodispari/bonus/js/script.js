alert("IL RISULTATO È IN CONSOLE!");
let userNumber=parseInt( prompt("Inserisci un numero compreso tra 1 e 5"));
let randomN=0; let userPcsum = 0;let pariDispari=0; let wonorNot;


// CICLO WHILE PER ASSICURARCI CHE L'UTENTE INSERISCA UN NUMERO COMPRESO DA 1 E 5
while((userNumber <1 || userNumber >5)){
    alert("Numero non valido!")
    userNumber= parseInt( prompt("Inserisci un numero compreso tra 1 e 5"));
}
const userChoice= prompt("Secondo te, uscirà un numero pari o dispari?");
// CALL DELLE FUNCTION IN ORDINE DI ESECUZIONE
randomN= pcNumber(randomN);
userPcsum= sumPcUser(userNumber,randomN)
pariDispari= pariodispari(userPcsum);
wonorNot= indovinatoRis(userChoice,pariDispari);

// DEBUG \\
console.log("Scelta utente: ",userChoice);
console.log("Numero generato da PC: ",randomN);
console.log("Numero utente: ",userNumber);
console.log("Somma numeri: ",userPcsum);
console.log("Risultato:",pariDispari);

// FUNZIONE PER SCOPRIRE SE l'UTENTE HA INDOVINATO SE IL NUMERO È PARI O DISPARI
function indovinatoRis(userChoice,pariDispari){
    if(userChoice === "pari" && pariDispari === "Pari"){
        console.log("indovinato!");
    }
    else if(userChoice === "dispari" && pariDispari === "Dispari"){
        console.log("indovinato!");
        // console.log("No, non hai indovinato");
    }
    else if(userChoice === "pari" && pariDispari === "Dispari"){
        console.log("Mi dispiace, non hai indovinato! È un numero: ",pariDispari);
    }
    else{
        console.log("Mi dispiace, non hai indovinato! È un numero: ",pariDispari);
    }
}

// FUNZIONE PARI O DISPARI
function pariodispari(userPcsum){
    if(userPcsum % 2){
        return "Dispari";
    }
    else{
        return "Pari";
    }
}


// FUNZIONE PER SOMMARE I NUMERI
function sumPcUser(userNumber,randomN){
    let sum= userNumber + randomN;
    return sum;
}

// FUNZIONE PER GENERARE IL NUMERO CASUALE DEL PC , COMPRESO TRA 1 E 5
function pcNumber(randomN){
     randomN= Math.floor(Math.random()*5 +1);
    return randomN;
}