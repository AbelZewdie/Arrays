let num = 1;
let i = 1;


//While-Loop
while (i < 5) {
  num = num * 2;
  console.log(i, num);
  i++;
}
console.log(" ");



//Do-Loop
num = 10;
i = 1; 
do {
  num = num * 2;
console.log(i, num);
i++;
} while(i<5)

//OUTPUT
// 2 (i is 1 at the top of the loop / became 2 at the bottom)  
// 4 (i is 2 at the top of the loop / became 3 at the bottom)
// 8 (i is 3 at the top of the loop / became 4 at the bottom)
// 16 (i is 4 at the top of the loop / became 5 at the bottom)  

console.log(" ");
console.log(" ");
console.log(" ");

//FOR-LOOP
num = 1;
i;

for (i = 0; i < 4; i++) {
num = num * 2;
console.log(num);
}