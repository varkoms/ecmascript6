// ES11

// Dynamic Import
// Importacion de modulos de forma dinamica

const button = document.getElementById('btn');

button.addEventListener('click', async function() {
  const module = await import("./file.js");
  module.hello();
});

// Big Int

const aBigNumber = 9007199254740991n;
const anotherBigIntNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigIntNumber);

// Promise.allSettled()
// La diferencia entre allSettled y all, es que all ejecuta las promesas, pero si falla una, se detiene
// en cambio allSettled, ejecuta todas las promesas pero no se detiene, completa todas y envia los resultados

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));

// Global This
console.log(window); // Solo funciona con el browser, en consola no
console.log(globalThis);

// Nullish coalescing operator
const foo = 'null' ?? 'default string';
console.log(foo);

// Optional chaining (?.)
// Previene que la aplicacion se rompa si no existen valores

const user = {}; // Pensando que este objeto sera llenado mas adelante
console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log('email');
} else {
  console.log('fail');
}