const user = {username : "johan", age: 18, country: "GT"}

const {username,...values} = user
console.log(username)
console.log(values)