function dodaj(a, b) {
  return isNaN(a) || isNaN(b) ? "Błąd danych" : a + b;
}

export function odejmij(a, b) {
  return isNaN(a) || isNaN(b) ? "Błąd danych" : a - b;
}

export function mnoz(a, b) {
  return isNaN(a) || isNaN(b) ? "Błąd danych" : a * b;
}

export function dziel(a, b) {
  if (isNaN(a) || isNaN(b)) return "Błąd danych";
  if (b === 0) return "Błąd: Nie można dzielić przez zero";
  return a / b;
}
