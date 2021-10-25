/* Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. */

const row = document.querySelector(".row");

// Start cycle
for (let i = 1; i <= 100; i++) {

  // I create element to put in html 
  const box = document.createElement("div");
  row.append(box);
  box.className = "ls-box";

  // I create the conditions of my cycle
  if (!(i % 3) && !(i % 5)) {
    box.classList.add("ls-red");
    box.innerHTML = "fizzbuzz";
  } else if (!(i % 3)) {
    box.classList.add("ls-green");
    box.innerHTML = "fizz";
  } else if (!(i % 5)) {
    box.classList.add("ls-yellow");
    box.innerHTML = "buzz";
  } else {
    box.classList.add("ls-blue");
    box.innerHTML = i;
  }

}