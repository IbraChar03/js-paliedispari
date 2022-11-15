
let paridispari=prompt("scegli pari o dispari");
let numUtente=parseInt(prompt("inserisci un numero da 1 a 5"));

if(numUtente>5){
  alert("Attenzione! Devi inserire un numero da 1 a 5");
  location.reload();
}

console.log(numUtente);
let numrandompc=numeropc();

console.log(numrandompc);

let somma=numUtente + numrandompc;
console.log(somma);

let risultato=sommaPariDispari();
console.log(risultato);

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


