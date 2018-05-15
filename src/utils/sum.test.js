import sum from './sum';

test('pure function returns the same output for the same input', () => {
  expect(sum(2, 2)).toBe(4);
});
