let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(list) {
  let total = 0;
  for (v of list) {  // v is parameters
    total = total + v;
    // console.log(total, v);
  }
  return total / list.length
}

// result = getAverage(myScores)
console.log("My result:", getAverage(yourScores));
// console.log();
console.log("Your result:", getAverage(myScores));