// INSERISCO PAROLA TRAMITE PROMPT
const parola= prompt("Inserisci parola");
// DICHIARO VETTORE CHE PERMETTE DI ASSOCIARE I SINGOLI CARATTERI DI PAROLA ALL'INTERNO DI ESSO
const vet= [];
// DICHIARO CONTATORE PER CICLO WHILE E VARIABILE PER STAMPARE IL RISULTATO FINALE
let g=parola.length;
let results=0;

// PRIMO CICLO CHE PARTE DA 0 E ARRIVA ALLA META' DELLA LUNGHEZZA DELLA PAROLA. 
for( let i=0; i<(parola.length/2); i++){
    // ASSOCIO IL CARATTERE ALLA POSIZIONE i AL VETTORE IN POSIZIONE i
    vet[i]=parola[i];
    // DEBUG
    // console.log(vet[i]);
    /* CICLO WHILE CHE PERMETTE DI ANDARE A LAVORARE SULL'ALTRA SECONDA META' DEL PROGRAMMA
       PARTE DALL'ESTREMITA' DELLA SECONDA PARTE, ASSOCIA L'ELEMENTO AL VETTORE IN POSIZIONE g, CON LE LETTERE GIA'IN ORDINE, COME NELLO "SCORRIMENTO NORMALE"

    */
    while(g-1 >((parola.length/ 2 )-1)){
        vet[g]=parola[g-1];
        console.log(vet[g]);
    //DEBUG 
    //    console.log("i",vet[i]);
    //    console.log("g",vet[g]);
    // CONDIZIONE DI CONTROLLO SE L'ELEMENTO "GIRATO" in posizione G CORRISPONDE A QUELLO IN POSIZIONE i(cioè SCORRIMENTO NATURALE)
        // SE NON CORRISPONDE, VARIABILE RESULTS DIMINUISCE DI VALORE -1
       if(vet[g] !== vet[i]){
        results--;
       }
        // ALTRIMENTI SE LO È, VARIABILE RESULTS AUMENTA DI VALORE +1 
       else{
        results++;
       }
        // DECREMENTO LA VARIABILE CONTATORE g IN MODO DA AVERLA AL PROSSIMO "CICLO" GIÀ MINORE E SENZA CREARE UN LOOP INFINITO    
       g--;
        // COMANDO PER BLOCCARE IL CICLO WHILE, SENZA ANDARE A FARE IL SECONDO GIRO SUBITO  
       break
    }
    // CONTINUA FINO A TERMINE DEL CICLO FOR
    
}
// CONDIZIONE DI CONTROLLO SE LA VARIABILE RESULTS È UGUALE ALLA METÀ DELLA PAROLA DIVISA IN DUE
// N.B MATH ROUND SERVE PER LE PAROLE DI LUNGHEZZA DISPARI. ARROTONDA PER ECCESSO, PERMETTENDO DI CONTARE X ELEMENTO DISPARI IN ENTRAMBI LE SUDDIVISIONI
    // SE SI OTTIENE LA STESSA LUNGHEZZA 
if(results === Math.round((parola.length/2))){
    console.log("Parola Palindroma");
    // ALTRIMENTI 
}else{
    console.log("Parola non Palindroma");
}


