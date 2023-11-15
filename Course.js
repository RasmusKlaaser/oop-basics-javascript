class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    add_grade(student, grade) {
        this.grades.push([student, grade]);
    }

    get_grades() {
        return this.grades;
    }

    set_grade(student, grade) {
        this.grades.push([student, grade]);
    }

    get_average_grade() {
        let average = -1;
        if (this.grades.length > 0) {
            const total = this.grades.reduce((sum, grade) => sum + grade[1], 0);
            average = total / this.grades.length;
        }
        return average;
    }

    toString() {
        return `${this.name}`;
    }
}

module.exports = {Course} 