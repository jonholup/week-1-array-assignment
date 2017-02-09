function bigVsSmall(a, b) {
  a = parseFloat(a);  //a and b are number values if possible
  b = parseFloat(b);
  if (isNaN(a) || isNaN(b)) {
    alert('Input numbers first!');  //if a or b are not numbers, alert user and exit function
    return;
  } else if (a > b) {  //if a > b tell them first number is bigger
    return 'The first number was bigger!';
  } else if (a < b) {  //if a < b, tell them second number is bigger
    return 'The second number was bigger!';
  } else {  //otherwise numbers must be the same
    return 'The numbers are the same!';
  }
}

console.log(bigVsSmall(2, 4));  //a < b
console.log(bigVsSmall(4, 2));  //a > b
console.log(bigVsSmall(3, 3));  //else a == b
console.log(bigVsSmall('86.7 taco', 92));  // parseFloat a to 86.7 so a < b
console.log(bigVsSmall('taco 86.7', 92));  // parseFloat checks first character as NaN so line 4 conditional is true
console.log(bigVsSmall('', ''));  // empty arrays read as Nan so line 4 conditional is true
