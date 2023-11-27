// alert("IL RISULTATO È IN CONSOLE!");
var flag=0;

function invia(){
    let createDiv;
    let randomN=0; let userPcsum = 0;let pariDispari=0; let wonorNot;
    let userNumber= parseInt(document.getElementById("boh2").value);
    // while((userNumber <1 || userNumber >5)){
    // alert("Numero non valido!")
    // userNumber= parseInt(document.getElementById("boh2").value);
    // break;
    // }
    document.querySelector(".content").innerHTML='';


    let userChoice=document.getElementById("boh3").value;
    randomN= pcNumber(randomN);
    userPcsum= sumPcUser(userNumber,randomN)
    pariDispari= pariodispari(userPcsum);
    // wonorNot= indovinatoRis(userChoice,pariDispari);
    
    createDiv= createDivs(userChoice,randomN,userNumber,userPcsum,pariDispari);
    
    // // DEBUG \\
console.log("Scelta utente: ",userChoice);
console.log("Numero generato da PC: ",randomN);
console.log("Numero utente: ",userNumber);
console.log("Somma numeri: ",userPcsum);
console.log("Risultato:",pariDispari);
}
let userNumber=document.getElementById("boh2").value;
let randomN=0; let userPcsum = 0;let pariDispari=0; let wonorNot;


// // CICLO WHILE PER ASSICURARCI CHE L'UTENTE INSERISCA UN NUMERO COMPRESO DA 1 E 5
// while((userNumber <1 || userNumber >5)){
//     alert("Numero non valido!")
//     userNumber= parseInt( prompt("Inserisci un numero compreso tra 1 e 5"));
// }
// const userChoice= prompt("Secondo te, uscirà un numero pari o dispari?");
// CALL DELLE FUNCTION IN ORDINE DI ESECUZIONE
// randomN= pcNumber(randomN);
// userPcsum= sumPcUser(userNumber,randomN)
// pariDispari= pariodispari(userPcsum);
// wonorNot= indovinatoRis(userChoice,pariDispari);

// // DEBUG \\
// console.log("Scelta utente: ",userChoice);
// console.log("Numero generato da PC: ",randomN);
// console.log("Numero utente: ",userNumber);
// console.log("Somma numeri: ",userPcsum);
// console.log("Risultato:",pariDispari);

function createDivs(userChoice,randomN,userNumber,userPcsum,pariDispari,wonorNot,flag){
    const vet= [userChoice,randomN,userNumber,userPcsum,pariDispari,wonorNot];
    for (let i =0; i<=5;i++){
        const divs=document.createElement("div");
        switch (i){
            case 0:
                divs.innerHTML="Scelta utente: "+vet[i];
                break;
            case 1:
                divs.innerHTML="Numero generato da PC: "+vet[i];
                break;
            case 2:
                divs.innerHTML="Numero utente: "+vet[i];
                break;
            case 3:
                divs.innerHTML="Somma numeri: "+vet[i];
                break;
            case 4:
                divs.innerHTML="Risultato: "+vet[i];
                break;
            case 5:
                indovinatoRis(userChoice,pariDispari);
                flag=1;
                break;
            
        }
        document.querySelector(".content").append(divs)
    }
}

// // FUNZIONE PER SCOPRIRE SE l'UTENTE HA INDOVINATO SE IL NUMERO È PARI O DISPARI
function indovinatoRis(userChoice,pariDispari){
    const divs=document.createElement("div");
    if(userChoice === "pari" && pariDispari === "Pari"){
        divs.append("indovinato!");
    }
    else if(userChoice === "dispari" && pariDispari === "Dispari"){
        divs.append("indovinato!");
        // console.log("No, non hai indovinato");
    }
    else if(userChoice === "pari" && pariDispari === "Dispari"){
        divs.append("Mi dispiace, non hai indovinato! È un numero: ",pariDispari);
    }
    else{
        divs.append("Mi dispiace, non hai indovinato! È un numero: ",pariDispari);
    }
    document.querySelector(".content").append(divs)
}

// // FUNZIONE PARI O DISPARI
function pariodispari(userPcsum){
    if(userPcsum % 2){
        return "Dispari";
    }
    else{
        return "Pari";
    }
}


// // FUNZIONE PER SOMMARE I NUMERI
function sumPcUser(userNumber,randomN){
    let sum= userNumber + randomN;
    return sum;
}

// // FUNZIONE PER GENERARE IL NUMERO CASUALE DEL PC , COMPRESO TRA 1 E 5
function pcNumber(randomN){
     randomN= Math.floor(Math.random()*5 +1);
    return randomN;
}

