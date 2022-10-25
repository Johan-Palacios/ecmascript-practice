// Array destructuring

let fruits = ["Apple", "Banana"];

let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { username: "Johan", age: 18 };

let { username, age } = user;

console.log(username, age);

// Spreaad Operator

let person = { name: "Johan", age: 18 };
let country = "GT";

let data = { ...person, country };
console.log(data);

// Rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(1,1,1,1,1,1,1,1,1,11,1,1,11)