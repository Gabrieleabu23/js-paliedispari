let userNumber=parseInt( prompt("Inserisci un numero compreso da 1 a 5"));
let randomN=0; let userPcsum = 0;let pariDispari=0;

randomN= pcNumber(randomN);
userPcsum= sumPcUser(userNumber,randomN)
pariDispari= pariodispari(userPcsum);
while(userNumber <1 || userNumber >5){
    alert("Numero non valido!")
    userNumber= parseInt( prompt("Inserisci un numero compreso da 1 a 5"));
}
// DEBUG \\
console.log("Numero generato da PC: ",randomN);
console.log("Numero utente: ",userNumber);
console.log("Somma numeri: ",userPcsum);
console.log("Risultato:",pariDispari);

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