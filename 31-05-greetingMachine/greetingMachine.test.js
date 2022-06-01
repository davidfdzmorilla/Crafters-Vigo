const greetingMachine = require('./greetingMachine');


test('Pasamos Rubén', () => {
  expect(greetingMachine('Rubén')).toBe('Hola, Rubén.');
});

test('Pasamos null', () => {
  expect(greetingMachine(null)).toBe('Hola, mundo.');
});

test('Pasamos PEPA', () => {
  expect(greetingMachine('PEPA')).toBe('HOLA, PEPA!');
});

test('Pasamos dos nombres', () => {
  expect(greetingMachine('Ana, Bartolo')).toBe('Hola, Ana y Bartolo');
});

test('Pasamos varios nombres', () => {
  expect(greetingMachine('Ana, Bartolo, Carlota, Daniel')).toBe('Hola, Ana, Bartolo, Carlota, y Daniel');
});
