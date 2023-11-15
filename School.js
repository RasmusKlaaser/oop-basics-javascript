class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
    }

    add_course(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    add_student(student) {
        if (!this.students.includes(student)) {
            let id = Math.floor(Math.random() * 1000) + 1;
            while (this.students.some(s => s.get_id() === id)) {
                id = Math.floor(Math.random() * 1000) + 1;
            }
            student.set_id(id);
            this.students.push(student);
        }
    }

    add_student_grade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.add_grade(course, grade);
            course.add_grade(student, grade);
        }
    }

    get_students() {
        return this.students;
    }

    get_courses() {
        return this.courses;
    }

    get_students_ordered_by_average_grade() {
        for (let i = 0; i < this.students.length - 1; i++) {
            if (this.students[i].get_average_grade() < this.students[i + 1].get_average_grade()) {
                const temp = this.students[i];
                this.students[i] = this.students[i + 1];
                this.students[i + 1] = temp;
            }
        }
        return this.students;
    }
}

module.exports = {School} 
