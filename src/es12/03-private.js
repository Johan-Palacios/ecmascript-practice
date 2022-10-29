class User {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Method
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  // Getter
  // Solo se agrega un # a privado
  get #uAge() {
    return this.age;
  }
  // Setter
  set #uAge(n) {
    this.age = n;
  }
}

const newUser = new User("Johan", 18);

console.log(newUser.uAge);
console.log(newUser.uAge = 20);


