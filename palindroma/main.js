let parolaUtente=prompt("inserisci parola");
if(typeof parolaUtente === 'number'){
  alert("Attenzione! Inserisci una parola non dei numeri");
  location.reload();
}
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



