const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, wiki, orange Apple, etc, etc";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
