const parola= prompt("Inserisci parola");
const vet= [];
for( let i=parola.length; i>0; i--){
    vet[i]=parola[i-1];
    console.log(vet[i]);
}