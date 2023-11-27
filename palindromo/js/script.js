const parola= prompt("Inserisci parola");
const vet= [];
let g=parola.length;
let results=0;
for( let i=0; i<(parola.length/2); i++){
    vet[i]=parola[i];
    console.log(vet[i]);
    while(g-1 >((parola.length/ 2 )-1)){
        vet[g]=parola[g-1];
        console.log(vet[g]);
    //    console.log("i",vet[i]);
    //    console.log("g",vet[g]);
       if(vet[g] !== vet[i]){
        results--;
       }
       else{
        results++;
       }
       g--;
       break
    }
    
}
if(boh === Math.round((parola.length/2))){
    console.log("uguale");
}

