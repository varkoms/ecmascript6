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

// ANTES
let person = {
  'name': 'Cesar',
  'age': 33,
  'country': 'MX'
};

console.log(person.name, person.age, person.country);

// ES6
let { name, age, country } = person;
console.log(name, age, country);

// Operador de Propagacion (Spread Operator)
// Permite expandir varios elementos

let team1 = ['Cesar', 'Julieta', 'Diego'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2, 'Flavio'];
console.log(education);