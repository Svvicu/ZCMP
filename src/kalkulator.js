function dodaj(a, b) {
  return isNaN(a) || isNaN(b) ? "Błąd danych" : a + b;
}

function odejmij(a, b) {
  return isNaN(a) || isNaN(b) ? "Błąd danych" : a - b;
}

function mnoz(a, b) {
  return isNaN(a) || isNaN(b) ? "Błąd danych" : a * b;
}

function dziel(a, b) {
  if (isNaN(a) || isNaN(b)) return "Błąd danych";
  if (b === 0) return "Błąd: Nie można dzielić przez zero";
  return a / b;
}


function oblicz(a, b, operacja) {
  switch (operacja) {
    case "dodaj":
      return { wynik: dodaj(a, b), blad: false };
    case "odejmij":
      return { wynik: odejmij(a, b), blad: false };
    case "mnoz":
      return { wynik: mnoz(a, b), blad: false };
    case "dziel":
      return { wynik: dziel(a, b), blad: false };
    default:
      return { wynik: "Nieznana operacja", blad: true };
  }
}


module.exports = { oblicz };
