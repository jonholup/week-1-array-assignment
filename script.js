function bigVsSmall(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (a > b) {
    return 'The first number was bigger!';
  } else if (a < b) {
    return 'The second number was bigger!';
  } else if (a === b) {
    return 'The numbers are the same!';
  }
  }

console.log(bigVsSmall(2, 4));
console.log(bigVsSmall(4, 2));
console.log(bigVsSmall(3, 3));
console.log(bigVsSmall('86.7 taco', 92));
