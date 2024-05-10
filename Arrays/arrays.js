let kids = ["Natalie", "Brittany", "Zachary"];
console.log(kids[1], kids[2], kids[0]);

console.log("");

let oldest = kids[0];
let middle = kids[1];
let youngest = kids[kids.length - 1];
console.log(oldest, middle, youngest) 

console.log("");

//Use a variable as a subscript.
let i = 0

let allKids = kids.length

for(i = 0; i < allKids; i++){
  console.log(i, kids[i])
}

console.log("")
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

for(let i = 0; i < cars.length; i++){
  console.log(i, cars[i]);
}


console.log("");
const importantDates = [];
importantDates[0] = new Date(1958, 8, 5);
importantDates[1] = new Date(1998, 6, 9);
importantDates[2] = new Date(1967, 1, 5);
console.log(importantDates[1]);
console.log("");
console.log("");

for(let i = 0; i < importantDates.length; i++){
  console.log(importantDates[i]);
}


let menu = [];
menu[0] = [item= "Hamburger", price= 9.90],
menu[1] = [item= "Burger", price= 4.90]
console.log(i, menu[0]);