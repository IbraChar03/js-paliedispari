
let numUtente=document.getElementById("input");
let numrandompc=numeropc();
let paridispari=document.getElementById("input2");
let somma=numUtente + numrandompc;
let button=document.getElementById("button");
button.addEventListener("click",
function(){
  numUtente=document.getElementById("input").value;
  console.log(numUtente)

  paridispari=document.getElementById("input2").value;

  numrandompc=numeropc();
  console.log(numrandompc)
  let stampa2=document.getElementById("title2");
  stampa2.innerHTML=`Il numero del pc è ${numrandompc}`;

  somma= Number(numUtente) + Number(numrandompc);
  console.log(somma);

  let  risultato=sommaPariDispari();
  console.log(risultato);
  let stampa=document.getElementById("title1");
  stampa.innerHTML=risultato;

  if(numUtente>5 || numUtente==0){
      alert("Attenzione! Devi inserire un numero da 1 a 5");
      location.reload();
  }
  if(paridispari!= "pari" && paridispari!= "dispari"){
      alert("Attenzione! Devi inserire pari o dispari");
      location.reload();
  }

}

);


function numeropc(){
  let numrandom2=Math.floor(Math.random()*5)+1;
  return numrandom2;

}

function sommaPariDispari(){
  if(somma % 2 == 0 && paridispari == "pari"){
    return "hai vinto la somma è pari"
  }
  else  if(somma % 2 == 0 && paridispari == "dispari"){
    return "hai perso la somma è pari"
  }
  else  if(somma % 2 == 1 && paridispari == "pari"){
    return "hai perso la somma è dispari"
  }

  else  if(somma % 2 == 1 && paridispari == "dispari"){
    return "hai vinto la somma è dispari"
  }

}


