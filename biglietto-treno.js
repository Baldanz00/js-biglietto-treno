// Chiedi all'utente il numero di chilometri
let km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

// Chiedi l'età del passeggero
let eta = parseInt(prompt("Quanti anni ha il passeggero?"));

// Prezzo base al km
const prezzoKm = 0.21;

// Calcolo del prezzo base
let prezzoBase = km * prezzoKm;

// Applica sconti
let sconto = 0;

if (eta < 18) {
sconto = 0.20; // 20% di sconto
} else if (eta > 65) {
sconto = 0.40; // 40% di sconto
}

let prezzoFinale = prezzoBase * (1 - sconto);

// Formatta il prezzo finale con massimo due decimali
prezzoFinale = prezzoFinale.toFixed(2);

// Mostra il prezzo finale
alert("Il prezzo finale del biglietto è: € " + prezzoFinale);