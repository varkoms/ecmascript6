// Encapsulando objetos

const obj = {
  name: 'Cesar',
  age: 33,
  country: 'MX'
};

let { country, ...all } = obj;
console.log(all); // Cesar { age: 33, country: 'MX' }

// Unir objetos con el Spread Operator

const datos = {
  name: 'Cesar',
  age: 33
};

const obj1 = {
  ...datos,
  country : 'MX'
};

console.log(obj1);

// Promise Finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizado'))

// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2019-04-20');
console.log(match);
const year = match[1];
const month = match[2];
const day = match[3];
console.log(`Date -> ${year}-${month}-${day}`);