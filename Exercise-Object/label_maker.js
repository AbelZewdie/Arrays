let contact = {
  name : "Abel Zewdie",
  address : "Yeka",
  city :  "Addis Ababa",
  state : "Shola",
  zip : 269
}

console.log(contact.name)
console.log(contact.address,",", contact.city)
console.log(contact.state, contact.zip)


console.log(" ")
let keys = Object.keys(contact)
for(k of keys) {
  console.log(k, ":", contact[k]);
}