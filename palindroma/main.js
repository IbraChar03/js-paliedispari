let parolaUtente=prompt("inserisci parola");
let parolaInvertita=invertiParola(parolaUtente);

 if(parolaUtente == parolaInvertita){
    console.log('la parola è palindroma');
   } else {
     console.log('la parola non è palindroma');
   }
  
 function invertiParola(parola){
   let parolaInv = parola.split('').reverse().join('');  
   return parolaInv;
 }



