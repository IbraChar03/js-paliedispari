
var numUtente=document.getElementById("input");
var numrandompc=numeropc();
var paridispari=document.getElementById("input2");
var somma=numUtente + numrandompc;
let button=document.getElementById("button");
button.addEventListener("click",
function(){
    numUtente=document.getElementById("input").value;
    console.log(numUtente)
   paridispari=document.getElementById("input2").value;
   console.log(paridispari);
    numrandompc=numeropc();
    console.log(numrandompc)
     somma= Number(numUtente) + Number(numrandompc);
     console.log(somma);
    var stampa=document.getElementById("title1");
    stampa.innerHTML=`la somma e ${somma}`;
    var risultato=sommaPariDispari();
    console.log(risultato);
    var stampa2=document.getElementById("title2");
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


