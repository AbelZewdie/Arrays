# Arrays
* used to store multiple values in a single variable.
### Example:
```
let kids = ["Natalie", "Brittany", "Zachary];
```
## *Arrays can store any type of data.*
### Example:

1) An array that stores all numbers:
```
let mileAgeLog = [313, 328, 349, 287, 301];
```
2) An array that stores all dates
```
let importantDates = [
new Date(1958, 8, 5),
new Date(1976, 4, 30),
new Date(2009, 9, 10)
];
```
3) an array that stores objects
```
let menu = [
{item: "Hamburger", price: 6.95},
{item: "Cheeseburger", price: 7.95},
{item: "Hot dog", price: 4.95}
];
```
You can also create an array, and then provide the elements:
```
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```

## Arrays and functions:
* you can pass an array to a function.
> you can also return an array from a function.
### Example:
```
// returns an array of names

function getKids() {
let kids = ["Natalie", "Brittany", "Zachary"];
return kids;
}

// displays data in an array of names

function displayKids(kids) {
let numKids = kids.length;
for(let i = 0; i < numKids; i++) {
console.log(kids[i]);
}
}

let ourKids = getKids(); // returns an array
displayKids(ourKids); // pass an array
```

## Loping through an Array of Objects:
* When you loop throough an array of objects, you must use the subscript after the array name and then the property name after the subscript.
### Example:
```
function getMealCost(orders) {
let sum = 0;
let numOrders = orders.length;

for(let i = 0; i < numOrders; i++) {
sum += orders[i].price;
}
return sum;
}

let myOrder = [
{item: "Chicken Tacos", price: 8.95},
{item: "Guacamole", price: 2.85},
{item: "Sweet Tea", price: 2.75}
];

let yourOrder = [
{item: "Hamburger", price: 6.95},
{item: "Fries", price: 2.25},
{item: "Sweet Tea", price: 2.75},
{item: "Fried Apple Pie", price: 4.95}
];

let mealCost = getMealCost(myOrder);
let totalWithTip = mealCost * 1.2;
console.log("My meal costs " + totalWithTip.toFixed(2));

mealCost = getMealCost(yourOrder);
totalWithTip = mealCost * 1.2;
console.log("Your meal costs " + totalWithTip.toFixed(2));
```  