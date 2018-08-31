'use strict';
 
const Student = require('../models/student');
const Activity = require('../models/activity');

 
class StudentRepository {
    constructor() {

        this.activities = new Array(
            new Activity(1, 'Taller1', '5.0'),
            new Activity(2, 'Taller2', '5.0'),
            new Activity(3, 'Taller3', '5.0'),
            new Activity(4, 'Blog', '5.0')
        );
            
        console.log(this.activities);

        this.student = new Map([
            [1, new Student('Juan David Arias', '20181195002', this.activities)]
        ]);

        
    }
 
    getAll() {
        return Array.from(this.student.values());
    }
 
}
 
const studentRepository = new StudentRepository();
 
module.exports = studentRepository;