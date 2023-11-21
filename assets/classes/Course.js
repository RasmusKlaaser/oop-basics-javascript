const Course = class {
    constructor(name) {
        this.name = name;
        this.grades = []; // [(student.id, grade), (student.id, grade) ....]
    }

    getGrades() {
        return this.grades
    }
    getAverageGrade() {
        if(this.grades.length === 0) {
            return -1;
        } else {
            return this.grades.reduce((a, b) => a + b[1], 0) / this.grades.length
        }
    }
    description() {
        return `This is a course with the name ${this.name}`
    }

    setGrades(grades) {
        this.grades.push(grades)
    }
}

exports.Course = Course;