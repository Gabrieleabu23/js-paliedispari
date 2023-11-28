function palindromo(){
    // PRENDO IL VALORE DALL'HTML TRAMITE ID
const parola= document.getElementById("parola").value;
let inviaRisultato= document.querySelector("h4");

// DICHIARO  VARIABILE PER STAMPARE IL RISULTATO FINALE
let results=0;
// DICHIARO VARIABILE CHE PERMETTE DI DIVIDERE IL VALORE DELLA COSTANTE PAROLE IN SINGOLI CARATTERI, GIRARLI AL CONTRARIO E DISTACCARLI 
let reverseParola= parola.split('').reverse().join('');
document.getElementById("contario").innerHTML= reverseParola;
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
    inviaRisultato.innerHTML= "La Parola è palindroma!"
    inviaRisultato.classList.remove("text-danger");
    console.log("Parola Palindroma");
    // ALTRIMENTI 
}else{
    inviaRisultato.innerHTML= "La Parola non è palindroma";
    inviaRisultato.classList.add("text-danger");
    console.log("Parola non Palindroma");
}
}


