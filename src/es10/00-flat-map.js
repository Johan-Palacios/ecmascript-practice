// Flat
const array = [1, 2, 3, 4, 5, 65, [1, 2, 4, 5, 65, [1, 2, 34, 5, 5, 6, 67]]];
console.log(array.flat(3));

// Flat map

const array2 = [1, 2, 4, 5];
console.log(array2.flatMap((v) => [v, v * 2]));
