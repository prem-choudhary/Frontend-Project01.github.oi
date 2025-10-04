//  for Loop

for (let i = 0; i < 5; i++) {
  console.log("Hello", i);
}
// while loop

let i = 0;
while (i < 5) {
  console.log("Count:", i);
  i++;
}

// Do.while Loop

let x = 0;
do {
  console.log("Value:", x);
  x++;
} while (x < 5);

//  For in Loop

let person = { name: "Prem", age: 20, city: "Delhi" };
for (let key in person) {
  console.log(key, ":", person[key]);
}
