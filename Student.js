const { Person } = require("./Person");

class Student extends Person {
    constructor(name) {
        super(name);
        this.name = name;
        this.__grades = [];
        this.__id = null;
    }

    set_id(id) {
        if (this.__id === null) {
            this.__id = id;
        } else {
            return "Can't change ID";
        }
    }

    get_id() {
        return this.__id;
    }

    add_grade(course, grade) {
        this.__grades.push([course, grade]);
    }

    get_grades() {
        return this.__grades;
    }

    get_average_grade() {
        let average = -1;
        if (this.__grades.length > 0) {
            const total = this.__grades.reduce((sum, grade) => sum + grade[1], 0);
            average = total / this.__grades.length;
        }
        return average;
    }

    toString() {
        return `${this.name}`;
    }
}

module.exports = {Student} 