const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 45 },
{ name: "banana", color: "yellow", calories: 105 },
{ name: "coconut", color: "white", calories: 159 },
{ name: "pineapple", color: "yellow", calories: 37 }];

// finding properties by index
console.log(fruits[0].color); 
console.log(fruits[1].color);
console.log(fruits[2].color);
console.log(fruits[3].color);
console.log(fruits[fruits.length - 1].color);

// finding properties by index
console.log(fruits[0].name);
console.log(fruits[1].name);
console.log(fruits[2].name);
console.log(fruits[3].name);
console.log(fruits[fruits.length - 1].name);