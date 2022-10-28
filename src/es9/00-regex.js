const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const matches = regex.exec("2022-11-01")
console.table(matches)