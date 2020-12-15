export function format(input) {
  return new Intl.NumberFormat('de-DE').format(input);
}