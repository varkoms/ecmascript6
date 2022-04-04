// Default Params
// Pasar parametros por defecto en funciones

// ANTES
function newFunction(name, age, country) {
  var name = name || 'Cesar';
  var age = age || 33;
  var country = country || "MX";
  console.log(name, age, country);
}

// ES6
function newFunction2(name = "Cesar", age = 33, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

// Template Literals
// Permite unir/separar texto

// ANTES
let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea en ECMAScript 6+

// ANTES
let lorem = "The path of the righteous man is beset on all \n"
  + "sides by the iniquities of the selfish and the \n"
  + "tyranny of evil men";

// ES6
let lorem2 = `The path of the righteous man is beset on all 
sides by the iniquities of the selfish and the 
tyranny of evil men`;

console.log(lorem);
console.log(lorem2);

// Desestructuracion de Elementos
// Separar los atributos de un objeto y almacenarlos en variables independientes.

// // ANTES
let person = {
  'name': 'Cesar',
  'age': 33,
  'country': 'MX'
};

console.log(person.name, person.age, person.country);

// // ES6
let { name, age, country } = person;
console.log(name, age, country);

// Operador de Propagacion (Spread Operator)
// Permite expandir varios elementos

let team1 = ['Cesar', 'Julieta', 'Diego'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2, 'Flavio'];
console.log(education);

// VAR, LET y CONST

{
  // Scope Global
  var globalVar = 'Global Var';
}

{
  // Scope local, solo puede ser accedida desde este bloque
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

// Constantes. NO CAMBIA SU VALOR
const a = 'b';
console.log(a); // 'b'

a = 'a'
console.log(a); // TypeError: Assignment to constant variable

// Asignacion de objetos

let name = 'Cesar';
let age = 33;

// ES5
obj = { name: name, age: age };

// ES6
obj2 = { name, age }
console.log(obj2);

// Arrow Functions
// Las arrow functions no tienen un this vinculado, es decir, el this 
// pasa a ser el del contexto que contiene a la arrow function.

const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Cesar', age: 33 }
]

// ANTES
let listOfNames = names.map(function (item) {
  console.log(item.name);
})

// ES6
let listOfNames2 = names.map(item => console.log(item.name));

// Una forma de presentar arrow functions
const listOfNames3 = (name, age, country) => {
  // Code here
}

// Si solo vamos a pasar un solo parametro, podemos usar la siguiente sintaxis
const listOfNames4 = name => {
  // Code here
}

// Un ejemplo mas
const square = num => num * num; // 

// PROMESAS
// Con Promises, podemos reparar el famoso Callback Hell, 

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups, algo salio mal!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log(`Hola`)) // Cuando algo falla, este then NO SE EJECUTA, si la promesa falla, se va directo a catch()
  .catch(reject => console.log(reject));