for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}