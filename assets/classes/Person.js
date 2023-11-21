const Person = class {
    constructor(name) {
        this.name = name;
    }

    
    getDateOfBirth() {
        return this.year;
    }
    getName() {
        return this.name;
    }
    age() {
        return new Date().getFullYear() - this.year;
    }
    description() {
        return `This is a person with the name ${this.name} and age ${this.age()}`
    }

    setDateOfBirth(year) {
        this.year = year;
    }

}

exports.Person = Person;