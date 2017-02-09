function bigVsSmall(a, b) {
  console.log('Before: ', a, b);
  a = parseFloat(a);  //
  b = parseFloat(b);
  console.log('After: ', a, b);
  if (isNaN(a) || isNaN(b)) {
    alert('Input numbers first!');
    return;
  } else if (a > b) {
    return 'The first number was bigger!';
  } else if (a < b) {
    return 'The second number was bigger!';
  } else {
    return 'The numbers are the same!';
  }
}

console.log(bigVsSmall(2, 4));
console.log(bigVsSmall(4, 2));
console.log(bigVsSmall(3, 3));
console.log(bigVsSmall('86.7 taco', 92));
console.log(bigVsSmall('taco 86.7', 92));
console.log(bigVsSmall('', ''));
