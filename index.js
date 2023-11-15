const Person = require('./Person')
const Student = require('./Student')

const person1 = new Person('Adam')
person1.setDateOfBirth(1995)
console.log(person1)

console.log()
const person2 = new Person('Bob')
person2.setDateOfBirth = new Person(1995)
console.log(person2)
console.log(person2.description())
