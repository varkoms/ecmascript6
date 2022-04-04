let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// Array.prototype.flat(nivel_profundidad)
// Nos genera un nuevo array aplanado

console.log(array.flat(2));

// Array.prototype.flatMap()
// lo mismo que flat, solo que aqui permite mapear cada elemento del array e interactuar antes de
// poder aplanarlo
let array = [1, 2, 3, 4, 5]

console.log(array.flatMap(value => [value, value * 2]));

// String.prototype.trimStart()
// Permite eliminar los espacios en blanco
// Esto solo permite borrar una parte al principio o al final, pero no ambos
// para borrar en ambos sentidos, se usa trim()

let hello = '                      hello world                            ';
console.log(hello);

console.log(hello.trimStart());
console.log(hello.trimEnd());

// Optional Catch binding
// Pasar de forma opcional el valor de error en el catch

// ANTES
try {

} catch (error) {

}

// ES10
try {
  
} catch {
  // Ya no es necesario especificar el error
}

// Object.fromEntries
// Inverso a Object.entries(), es decir, podemos convertir de una matriz clave/valor a un objeto

let entries = [["name","Oscar"],["age", 32]];

console.log(Object.fromEntries(entries));

// Symbol.prototype.description
// Permite regresar el description opcional de Symbol

let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol);
console.log(symbol.description);