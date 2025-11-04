const { dodaj, odejmij, mnoz, dziel } = require('./kalkulator.html');

test('dodaj 2 + 3 = 5', () => {
  expect(dodaj(2, 3)).toBe(5);
});

test('odejmij 5 - 2 = 3', () => {
  expect(odejmij(5, 2)).toBe(3);
});

test('mnoz 4 * 3 = 12', () => {
  expect(mnoz(4, 3)).toBe(12);
});

test('dziel 10 / 2 = 5', () => {
  expect(dziel(10, 2)).toBe(5);
});

test('dziel przez zero', () => {
  expect(dziel(5, 0)).toBe("Błąd: Nie można dzielić przez zero");
});

test('dodaj z NaN', () => {
  expect(dodaj(NaN, 2)).toBe("Błąd danych");
});

test('dziel z NaN', () => {
  expect(dziel(2, NaN)).toBe("Błąd danych");
});
