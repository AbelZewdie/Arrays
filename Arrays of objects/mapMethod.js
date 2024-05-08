const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 45 },
{ name: "banana", color: "yellow", calories: 105 },
{ name: "coconut", color: "white", calories: 159 },
{ name: "pineapple", color: "yellow", calories: 37 }];

//map() Method will run each element through a function and return a new array.

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map( fruit => fruit.calories)

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// for(row of fruits){
//   console.log(row);
// }


let row = fruitNames[1]
for(row of fruits){
  console.log(row[1]);
}