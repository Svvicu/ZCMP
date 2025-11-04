function oblicz(a, b, operacja) {
  if (isNaN(a) || isNaN(b)) {
    return { wynik: "Wprowadź obie liczby!", blad: true };
  }
 //comment 

  let wynik;
  switch (operacja) {
    case 'dodaj':
      wynik = a + b;
      break;
    case 'odejmij':
      wynik = a - b;
      break;
    case 'mnoz':
      wynik = a * b;
      break;
    case 'dziel':
      if (b === 0) {
        return { wynik: "Błąd: Nie można dzielić przez 0", blad: true };
      }
      wynik = a / b;
      break;
    default:
      return { wynik: "Nieznana operacja", blad: true };
  }

  return { wynik: parseFloat(wynik.toFixed(10)), blad: false };
}
