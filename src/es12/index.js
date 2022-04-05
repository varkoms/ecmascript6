// ES12 (2021)

// Replace All
// Con replace, solo trabaja la primera coincidencia
// con replaceAll, reemplaza todas las coincidencias

// Caso de Uso
// - Filtrar palabras prohibidas en un chat, post, comentario, etc.
// - Generar titulos aleatorios

const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";
const replacedString = string.replace('Javascript', 'Python');
console.log(replacedString);

// ES12 - replaceAll
const replacedString2 = string.replaceAll('Javascript', 'Python');
console.log(replacedString2);

// Metodos privados
// Trabajando con clases, podremos definir metodos privados

class Message {
  // Con el caracter '#' se define un metodo privado, y no es accessible fuera de la clase
  #show(val) {
    console.log(val);
  };

  // Getters y Setters
  get #add(val) {
    ...
  }

  set #set(val) {
    ...
  }
}

const message = new Message();
message.show('Hola');


// Promise Any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

// Retorna el valor que se resuelva primera, e ignora los demas
Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response)); // 2

// Weak Ref
// Evita que un elemento con referencia debil no sea recogido por el Garbage Collector
class anyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
  {... }
}

// Nuevos operadores logicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);

isTrue = undefined;
console.log(isTrue ??= isFalse);