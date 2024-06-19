const fs = require('fs');
let input = fs.readFileSync('example.txt').toString();
input = input.split('\n');

let number = parseInt(input[0]);

let score = input[1]
  .split(' ')
  .map(Number)
  .sort(function (a, b) {
    return a - b;
  });

let maxScore = score[number - 1];

let t = score.map((item) => (item / maxScore) * 100);

let avg = t.reduce((a, b) => parseFloat(a) + parseFloat(b)) / number;

console.log(avg);
