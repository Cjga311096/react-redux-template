export const compare = (value1, value2) => {
  const trimedString1 = value1.toString().trim().toUpperCase();
  const trimedString2 = value2.toString().trim().toUpperCase();
  return trimedString1.includes(trimedString2);
}