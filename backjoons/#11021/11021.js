const fs = require('fs');
let input = fs.readFileSync('example.txt').toString();
input = input.split('\n'); // 한 줄씩 데이터 분리

let t = parseInt(input[0]);

for (let index = 1; index <= t; index++) {
  let element = input[index].split(' ');
  let sum = element.reduce((a, b) => parseInt(a) + parseInt(b));

  console.log(`Case #${index}: ${sum}`);
}
