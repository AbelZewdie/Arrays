//JS allows you to declare objects with value for each property.
//Properties are written as names and value pairs that are separated by a colon.

let emp = {
  employeeId: "1",
  name: "Ezra",
  jobTitle: "Theater Teacher",
  payRate: 38.46
};

//Dot Notation is the most common way of accessing the property of an object.
console.log(emp.employeeId);
console.log(emp.name);
console.log(emp.jobTitle);
console.log(emp.payRate);

console.log(" ");
console.log(" ");

console.log(emp["employeeId"]);
console.log(emp["name"])
console.log(emp["jobTitle"])
console.log(emp["payRate"])

console.log(" ");
console.log(" ");

console.log(emp.employeeId, emp.name, emp.jobTitle, emp.payRate);

console.log(" ");
console.log(" ");


let keys = Object.keys(emp)
for (k of keys) {
  console.log(k, ":", emp[k]);
}
