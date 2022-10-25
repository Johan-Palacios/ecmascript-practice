// Antes de ES6
function newUser(name, age, country) {
  var name = name || "Oscar";
  var age = age || 34;
  var country = country || "GT";
  console.log(name, age, country);
}

newUser();
newUser("johan", 99, "MX");

// ES6
function newAdmin(name = "Johan", age = 39, country = "GT") {
  console.log(name, age, country);
}
newAdmin()
newAdmin("johan", 9191, "MX")
