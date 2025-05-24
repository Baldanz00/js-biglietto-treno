// Chiedo all'utente il numero di chilometri
//let km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
//
// Chiedo l'età del passeggero
//let eta = parseInt(prompt("Quanti anni ha il passeggero?"));

// Prezzo base al km
//const prezzoKm = 0.21;

// Calcolo del prezzo base
//let prezzoBase = km * prezzoKm;

// Applica sconti
//let sconto = 0;

//if (eta < 18) {
//sconto = 0.20;   // 20% di sconto se <18
//} else if (eta > 65) {
//sconto = 0.40; // 40% di sconto se over 65
//}

//Calcolo del prezzo finale 

//let prezzoFinale = prezzoBase * (1 - sconto);

// Trasformo il prezzo finale con massimo due decimali
//prezzoFinale = prezzoFinale.toFixed(2);

// Mostra il prezzo finale
//alert("Il prezzo finale del biglietto è: € " + prezzoFinale);
  function calcolaPrezzo() {
      const km = parseFloat(document.getElementById('km').value);
      const eta = parseInt(document.getElementById('eta').value);

      if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
        alert("Inserisci valori validi per chilometri ed età.");
        return;
      }

      const prezzoKm = 0.21;
      let prezzoBase = km * prezzoKm;
      let sconto = 0;

      if (eta < 18) {
        sconto = 0.20;
      } else if (eta > 65) {
        sconto = 0.40;
      }

      let prezzoFinale = prezzoBase * (1 - sconto);
      prezzoFinale = prezzoFinale.toFixed(2);

      // Genera data e ora attuali
      const now = new Date();
      const dataOra = now.toLocaleString('it-IT');

      // Genera numero biglietto casuale
      const numeroBiglietto = Math.floor(Math.random() * 900000) + 100000;

      // Mostra la card con i dati
      document.getElementById('cardKm').textContent = km;
      document.getElementById('cardEta').textContent = eta;
      document.getElementById('cardPrezzo').textContent = prezzoFinale;
      document.getElementById('dataOra').textContent = dataOra;
      document.getElementById('numeroBiglietto').textContent = numeroBiglietto;
      document.getElementById('cardContainer').classList.remove('d-none');
    }