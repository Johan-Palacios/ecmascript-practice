function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Johan", "Rem", "Emilia"]);

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)