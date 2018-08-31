'use strict';
 
const Activity = require('../models/activity');
 
class ActivityRepository {
    constructor() {
        this.activities = new Map([
            [1, new Activity(1, 'Taller1', '5.0')],
            [2, new Activity(2, 'Taller2', '5.0')],
            [3, new Activity(3, 'Taller3', '5.0')],
            [4, new Activity(4, 'Blog', '5.0')]
        ]);
    }

    getById(id) {
        return this.activities.get(id);
    }
 
    getAll() {
        return Array.from(this.activities.values());
    }
 
    remove() {
        const keys = Array.from(this.activities.keys());
        this.activities.delete(keys[keys.length - 1]);
    }
 
    save(activity) {
        if (this.getById(activity.id) !== undefined) {
            this.activities[activity.id] = activity;
            return "Actualizada actividad con id = " + person.id;
        }
        else {
            this.activities.set(person.id, person);
            return "ACtividad agregada con id=" + person.id;
        }
    }
}
 
const activityRepository = new ActivityRepository();
 
module.exports = activityRepository;