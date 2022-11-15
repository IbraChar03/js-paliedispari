 let button=document.getElementById("button");

 button.addEventListener("click",
 function(){
  let parolaUtente=document.getElementById("input").value;
  let title=document.getElementById("title");
  let parolaInvertita=invertiParola(parolaUtente);
  if(parolaUtente.length == 1){
    alert("Errore");
    location.reload();
  }
 
   if(parolaUtente == parolaInvertita){
      console.log('la parola è palindroma');
      title.innerHTML="la parola è palindroma";

     } else {
       console.log('la parola non è palindroma');
       title.innerHTML="la parola non è palindroma";
     }
   
 }
 
 );


 function invertiParola(parola){
    let parolaInv = parola.split('').reverse().join('');  
    return parolaInv;
 }
