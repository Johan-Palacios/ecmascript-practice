async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const other = anotherGenerator()
other.next().then(reponse => console.log(reponse.value))
other.next().then(reponse => console.log(reponse.value))
other.next().then(reponse => console.log(reponse.value))

console.log("Hello")

async function arrayofNames(array) {
    for await(let value of array) {
        console.log(value)
    }
}

const name = arrayofNames(["Johan", "Palacios", "emilia", "Rem"])
console.log("After")