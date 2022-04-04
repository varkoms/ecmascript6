// Que se implemento en ES8?
// Object Entries

const data = {
  frontend: 'Oscar',
  backend: 'Cesar',
  design: 'Ana',
}

// Transformar objeto a una matriz
const entries = Object.entries(data);
console.log(entries);

// Saber cuantos elementos posee el array recien transformado
console.log(entries.length);

// Devuelve los valores de un objeto a un array
const values = Object.values(data);
console.log(values);
console.log(values.length); // Cuantos valores tiene el array

// Agregar una cadena vacia o elementos a un string
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ----- '));

// Si se agrega una coma al final, con ES8 ya no es un error sintactico, esto
// con el fin de que se de una ayuda visual al dev y, en caso de querer agregar
// mas elementos, pueda hacerlo sin restricciones.
const obj = {
  name: 'Oscar',
}

// Async y Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

// Las funciones async anteponen la palabra reservada async antes de la arrow function
const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

// Otra propuesta
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}

anotherFunction();