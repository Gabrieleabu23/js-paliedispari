// INSERISCO PAROLA TRAMITE PROMPT
const parola= prompt("Inserisci parola");

// DICHIARO  VARIABILE PER STAMPARE IL RISULTATO FINALE
let results=0;
// DICHIARO VARIABILE CHE PERMETTE DI DIVIDERE IL VALORE DELLA COSTANTE PAROLE IN SINGOLI CARATTERI, GIRARLI AL CONTRARIO E DISTACCARLI 
let reverseParola= parola.split('').reverse().join('');

// console.log(reverseParola);
for(let i=0;i<((parola.length/2));i++){

    // DEBUG
    // console.log("Parola",parola[i],"reverseParola",reverseParola[i]);
    // console.log(checkvar1[i])
    if(reverseParola[i]=== parola[i]){
        results++;
    }
    else{
        results--;
    }
}
// CONDIZIONE DI CONTROLLO SE LA VARIABILE RESULTS È UGUALE ALLA METÀ DELLA PAROLA DIVISA IN DUE
// N.B MATH ROUND SERVE PER LE PAROLE DI LUNGHEZZA DISPARI. ARROTONDA PER ECCESSO, PERMETTENDO DI CONTARE X ELEMENTO DISPARI IN ENTRAMBI LE SUDDIVISIONI
    // SE SI OTTIENE LA STESSA LUNGHEZZA 
if(results === Math.round(parola.length/2)){
    console.log("Parola Palindroma");
    // ALTRIMENTI 
}else{
    console.log("Parola non Palindroma");
}


