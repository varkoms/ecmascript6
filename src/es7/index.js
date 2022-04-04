// Includes
// Determines whether an array includes a certain element, returning true or false as appropriate.

let numbers = [1, 2, 3, 7, 8];
let valor = 1;

if (numbers.includes(valor)) {
  console.log(`Si se encuentra el valor ${valor}`);
} else {
  console.log(`No se encuentra el valor ${valor} :(`);
}

// Elevar a potencia
let base = 4;
let exponent = 4;

let result = base ** exponent;
console.log(result);