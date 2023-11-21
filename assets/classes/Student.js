const Person = require('./Person').Person;

const Student = class extends Person {
    constructor(name) {
        super();
        this.name = name
        this.grades = []
        this.id = null
    }

    setId(id) {
        this.id = id
    }
    setGrades(grade) {
        this.grades.push(grade)
    }

    getId() {
        return this.id
    }
    getGrades() {
        return this.grades
    }
    getAverageGrade() {
        if(this.grades.lenght === 0) {
            return -1;
        } else {
            return this.grades.reduce((a, b) => a + b, 0) / this.grades.length
        }
    }
    description() {
        return `This is a student with the name ${this.name}, age ${this.age()} and id ${this.id}`
    }
}

exports.Student = Student;