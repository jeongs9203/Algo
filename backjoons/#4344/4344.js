// 5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91

const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim();

input = input.split('\n');
let n = +input[0];

for (let i = 1; i <= n; i++) {
  let score = input[i].split(' ').map((item) => +item);
  let amount = score.reduce((a, b) => a + b) - score[0];

  let avg = amount / score[0];

  // let student = 0;
  // for 문 보다 필터를 사용하여 찾는게 더 빠름
  // for (let i = 1; i <= score[0]; i++) {
  //   if (score[i] > avg) {
  //     student++;
  //   }
  // }
  // 해당 점수에서 평균보다 큰것들을 찾아냄
  const student = score.filter((c) => c > avg);

  const ans = ((student.length / score[0]) * 100).toFixed(3);

  console.log(ans + '%');
}
