/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  return l1 * l2;
};
console.log(area(3, 4));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (moltiplicazione = (num1 + num2) * 3);
  } else if (num1 !== num2) {
    return (somma = num1 + num2);
  }
};
console.log(crazySum(1, 1));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function (num1, num2 = 19) {
  if (num1 < num2) {
    return Math.abs(num1 - num2);
  } else if (num1 > num2) {
    return Math.abs(num1 - num2) * 3;
  }
};
console.log(crazyDiff(21));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n) {
  if (n <= 20 || n === 400) {
    console.log(n < 20 || n === 400);
  } else {
    console.log("non rientra nei parametri");
  }
};
console.log(boundary(41));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
let parola = "EPICODE";
const epify = function (stringa) {
  if (stringa.toLowerCase().startsWith("e")) {
    return stringa;
  } else {
    console.log(parola, stringa);
  }
};
console.log(epify("ciao"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = function (num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log("è multiplo di 3 e  7");
  } else if (num % 3 === 0) {
    console.log("è multiplo di 3");
  } else if (num % 7 === 0) {
    console.log("è multiplo di 7");
  } else {
    console.log("non hai inserito un numero che sia multiplo di 3 o di 7");
  }
};
console.log(check3and7(22));
console.log(check3and7(28));
console.log(check3and7(33));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (stringa) {
  const arraycarattery = stringa.split("");

  const arrayinvertito = arraycarattery.reverse();

  const stringainv = arrayinvertito.join("");

  return stringainv;
};
console.log(reverseString("LAV"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function (stringa) {
  let parole = stringa.split(" ");
  let letteremaisc = parole.map((parola) => parola.toUpperCase().charAt() + parola.slice(1) + " ");
  return letteremaisc.join("");
};
console.log(upperFirst("ciao come stai"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (stringa) {
  return stringa.slice(1, -1);
};
console.log(cutString("akkkkkkkko"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n 
 e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const contenitore = [];

const giveMeRandom = function (numero) {
  for (i = 0; i < numero; i++) {
    const numerirandom = Math.floor(Math.random() * 11);
    contenitore.push(numerirandom);
  }
};
giveMeRandom(5);
console.log(contenitore);
/* SCRIVI QUI LA TUA RISPOSTA */
