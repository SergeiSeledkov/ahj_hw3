import getRandomArbitrary from '../js/random';

test('test random number >= 0', () => {
  const randomNumber = getRandomArbitrary(0, 16);
  expect(randomNumber).toBeGreaterThanOrEqual(0);
});

test('test random number < 16', () => {
  const randomNumber = getRandomArbitrary(0, 16);
  expect(randomNumber).toBeLessThan(16);
});
