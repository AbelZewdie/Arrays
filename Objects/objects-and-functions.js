//passing objects to functions as parameters.

//Example

function pringCustomerAndPay(emp) {
  console.log("Name: " + emp.name);
  console.log("Pay: " + emp.cost);
}

let abelCinema = {
  employeeId: "777",
  name: "Abel",
  seatNumber: 7, 
  cost: 50,
}

let ampereCinema = {
  employeeId: "12",
  name: "Doyo",
  seatNumber: 21,
  cost: 35,
}

pringCustomerAndPay(abelCinema)
pringCustomerAndPay(ampereCinema)
console.log(" ");
console.log(" ");
console.log(" ");

let keys = Object.keys(abelCinema)
for(k of keys) {
  console.log(k, ":", abelCinema[k]);
}
