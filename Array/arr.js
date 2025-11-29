// Array literal
const fruits = ["apple", "banana", "orange"];
// Array constructor (less common)
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
//  print the double age
const ages = [10, 22, 32, 40, 25, 45];

//  this will also work what the output in not array form
for (var i = 0; i < ages.length; i++) {
  console.log(ages[i] * 2);
}
// this is the right way to write a code
const ageDouble = ages.map((age) => age * 2);
console.log(ageDouble);
//  use filter print age only less than 40
const ageLessThan40 = ages.filter((age) => age <= 40);
console.log(ageLessThan40);
