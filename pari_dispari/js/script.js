// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// UTENTE SCEGLIE SE PARI O DISPARI
var pariDispari = prompt('Pari o dispari?')
console.log(pariDispari);
// UTENTE SCEGLIE UN NUMERO DA 1 a 5
var numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(numeroUtente);
// GENERIAMO NUMERO RANDOM PC
var random = Math.floor(Math.random()*5 + 1)
console.log(random);
// SOMMIAMO I DUE numeri
var somma = numeroUtente + random
console.log(somma);

// FUNZIONE DI PARI E dispari
function pari0Dispari(somma) {
  if (pariDispari == 'pari' && somma % 2 == 0){
    return true;
  } else if (pariDispari == 'dispari' && somma % 2 != 0){
    return true
  } else {
    return false
  }
}

// IL VINCITORE
if (pari0Dispari(somma) == true){
  console.log('hai vinto');
} else {
  console.log('hai perso');
}
