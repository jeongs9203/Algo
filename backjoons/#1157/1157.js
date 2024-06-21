const fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().toUpperCase();

let x = input.split('');

// 빈 객체 생성
let charCount = {};

for (let char of x) {
  // 객체에 해당 키를 가진게 있는지 확인
  if (charCount[char]) {
    // 있다면 플러스
    charCount[char]++;
  } else {
    // 없다면 생성 하면서 플러스
    charCount[char] = 1;
  }
}

let maxCount = 0;
let most = '';
let dup = false;

for (let char in charCount) {
  if (charCount[char] > maxCount) {
    maxCount = charCount[char];
    most = char;
    dup = false;
  } else if (charCount[char] === maxCount) {
    dup = true;
  }
}

if (dup) {
  console.log('?');
} else {
  console.log(most);
}
