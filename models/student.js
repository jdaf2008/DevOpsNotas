'use strict';

const Activity = require('./activity');

class student {
    constructor(name, tag, activities) {
        this.name = name;
        this.tag = tag;
        this.activities = activities;
    }
}
 
module.exports = student;