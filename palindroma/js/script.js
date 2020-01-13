// Scrivi una funzione per capire se la parola è palindroma

// CHIEDERE PAROLA ALL'UTENTE
var parola = prompt('Inserisci qui una parola');

// CREARE ARRAY PAROLE
var parole = [ ];
// CREARE ARRAY PAROLE REVERSE
var paroleReverse = [ ];

// CREO FUNZIONE
function isPalindrome(parola) {
  // inserisci parola in ARRAY
  for (var i = 0; i < parola.length; i++) {
    parole.push(parola[i])
    console.log(parole);
  }
  // inserisci parola in ARRAY REVERSE
  for (var i = parola.length - 1; i >= 0; i--) {
    paroleReverse.push(parola[i])
    console.log(paroleReverse);
  }
  // confronta i due Array
  for (var i = 0; i < parole.length; i++) {
    if (parole[i] == paroleReverse[i]) {
      return true;
    }
    else {
      return false;
    }
  }
}

// EVOCAZIONE DELLA FUNZIONE
if (isPalindrome(parola) == true) {
  var messaggio = 'palindromo';
} else {
  var messaggio = 'non è palindromo';
}

alert(messaggio)
