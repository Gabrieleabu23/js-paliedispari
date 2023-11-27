let userNumber=parseInt( prompt("Inserisci un numero compreso da 1 a 5"));
let randomN=0; let userPcsum = 0;
randomN= pcNumber(randomN);
// DEBUG
console.log(randomN);
userPcsum= sumPcUser(userNumber,randomN)
// DEBUG
console.log(userPcsum);
while(userNumber <1 || userNumber >5){
    alert("Numero non valido!")
    userNumber= parseInt( prompt("Inserisci un numero compreso da 1 a 5"));
}
console.log("Numero utente: ",userNumber);


function sumPcUser(){

}

// FUNZIONE PER GENERARE IL NUMERO CASUALE DEL PC , COMPRESO TRA 1 E 5
function pcNumber(randomN){
     randomN= Math.floor(Math.random()*5 +1);
    return randomN;
}