import { oblicz } from './kalkulator.js';

test('dodawanie 2 + 3 = 5', () => {
  expect(oblicz(2, 3, 'dodaj')).toEqual({ wynik: 5, blad: false });
});

test('odejmowanie 5 - 2 = 3', () => {
  expect(oblicz(5, 2, 'odejmij')).toEqual({ wynik: 3, blad: false });
});

test('mnożenie 4 * 3 = 12', () => {
  expect(oblicz(4, 3, 'mnoz')).toEqual({ wynik: 12, blad: false });
});

test('dzielenie 10 / 2 = 5', () => {
  expect(oblicz(10, 2, 'dziel')).toEqual({ wynik: 5, blad: false });
});

test('dzielenie przez zero', () => {
  expect(oblicz(5, 0, 'dziel')).toEqual({ wynik: "Błąd: Nie można dzielić przez 0", blad: true });
});

test('nieznana operacja', () => {
  expect(oblicz(2, 2, 'xyz')).toEqual({ wynik: "Nieznana operacja", blad: true });
});

test('brak liczby (NaN)', () => {
  expect(oblicz(NaN, 2, 'dodaj')).toEqual({ wynik: "Wprowadź obie liczby!", blad: true });
});
