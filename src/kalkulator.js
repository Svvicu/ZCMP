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
module.exports = { oblicz };
