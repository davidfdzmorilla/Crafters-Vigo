const isPrime = require('./isPrime');

test('Pasamos null', () => {
  expect(isPrime()).toBe(null);
});

test('Pasamos uno', () => {
  const result = isPrime(1);
  expect(result).toStrictEqual([]);
});


test('Pasamos dos', () => {
  const result = isPrime(2);
  expect(result).toStrictEqual([2]);
});

test('Pasamos tres', () => {
  const result = isPrime(3);
  expect(result).toStrictEqual([3]);
});

test('Pasamos cuatro', () => {
  const result = isPrime(4);
  expect(result).toStrictEqual([2, 2]);
});

test('Pasamos cinco', () => {
  const result = isPrime(5);
  expect(result).toStrictEqual([2, 3]);
});

test('Pasamos seis', () => {
  const result = isPrime(6);
  expect(result).toStrictEqual([3, 3]);
});