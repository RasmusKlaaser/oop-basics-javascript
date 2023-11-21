const Course = require('./Course.js').Course;
const Student = require('./Student.js').Student;

const School = class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
    }

    getStudents() {
        return this.students;
    }
    getCourses() {
        return this.courses
    }
    getStudentsOrderedByAverageGrade() {
        return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade())
    }

    addCourse(course) {
        if(course instanceof Course && !this.courses.includes(course)) {
            this.courses.push(course);
        }
    }
    addStudent(student) {
        if(student instanceof Student && !this.students.includes(student)) {
            if(student.age() >= 15) {
                this.students.push(student);
                student.setId(this.students.length)
            }
        }
    }
    addStudentGrade(student, course, grade) {
        if(this.students.includes(student) && this.courses.includes(course)) {
            course.setGrades([student.getId(), grade])
            student.setGrades(grade)
        }

    }
}

exports.School = School;