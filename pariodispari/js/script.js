let userNumber= prompt("Inserisci un numero compreso da 1 a 5");
const randomN=0;
numberPC= pcNumber(randomN);
console.log(numberPC);
while(userNumber <1 || userNumber >5){
    alert("Numero non valido!")
    userNumber= prompt("Inserisci un numero compreso da 1 a 5");
}

// FUNZIONE PER GENERARE IL NUMERO CASUALE DEL PC , COMPRESO TRA 1 E 5
function pcNumber(randomN){
     randomN= Math.floor(Math.random()*5 +1);
    return randomN;
}