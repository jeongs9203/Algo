const fs = require('fs');
let input = fs.readFileSync('example.txt').toString();

let i = input;
let sum = 0;
let t = 0;
let count = 0;

if (input < 10) {
  i = 0 + input;
  input = 0 + input;
}

while (true) {
  count += 1;

  sum = i.split('');

  t = sum.reduce((a, b) => parseInt(a) + parseInt(b));
  if (t < 10) {
    t = '0' + t;
  }

  i = sum[1] + String(t).split('')[1];

  if (i === input) {
    break;
  }
}

console.log(count);
