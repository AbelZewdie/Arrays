# Loops
* **Loops:** can be used to execute a block of code over and over until some condition is met.

**Types of loops:**
- while loop
- do/while loop
- for loop
- for-in loop

# WHILE LOOP
#### The **while** loop executes a block of code for as long as a specified condition is true.
## Syntax:
```
while (condition) {
  //code to be executed
}
```
### Example:
```
let num = 1;
let i = 1;

while (i < 5) {
num = num * 2;
console.log(num);
i++;
}

OUTPUT
2 (i is 1 at the top of the loop / became 2 at the bottom)
4 (i is 2 at the top of the loop / became 3 at the bottom)
8 (i is 3 at the top of the loop / became 4 at the bottom)
16 (i is 4 at the top of the loop / became 5 at the bottom)
```

# DO/WHILE LOOP
#### The **do/while** is like the while loop except the condition is checked at the bottom of the loop.
- this means the loop will execute at least once.
## Syntax
```
do {
// code to be executed
} while (condition);
```
### Example:
```
let num = 1;
let i = 1;

do {
num = num * 2;
console.log(num);
i++;
} while (i < 5)

OUTPUT
2 (i is 1 at the top of the loop / became 2 at the bottom)
4 (i is 2 at the top of the loop / became 3 at the bottom)
8 (i is 3 at the top of the loop / became 4 at the bottom)
16 (i is 4 at the top of the loop / became 5 at the bottom)
```

# FOR LOOP
* The for loop is typically considered a "counting" loop.
* It has three parts separted by semicolons:
  * code that execute before the loop begins.
  * a condition that must be true for the loop to keep executing.
  * code that runs at the bottom of each iteration.
## Syntax:
```
for (part 1; part 2; part 3) {
// code to be executed
}
```
### Examples:
In this example, we started i at 0 and added 1 to it each time through the loop but that is not a requirement:
```
let num = 1;
let i;

for (i = 0; i < 5; i++) {
num = num * 2;
console.log(num);
}

OUTPUT
2 (i is 0 at the top of the loop)
4 (i is 1 at the top of the loop)
8 (i is 2 at the top of the loop)
16 (i is 3 at the top of the loop)
32 (i is 4 at the top of the loop)
```