'use strict';
 
const Router = require('express');
const activityRepository = require('../repository/activityRepository');
 
const getActivityRoutes = (app) => {
    const router = new Router();
 
    router
        .get('/get/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = activityRepository.getById(id);
            res.send(result);
        })
        .get('/all', (req, res) => {
            const result = activityRepository.getAll();
            res.send(result);
        })
        .get('/remove', (req, res) => {
            activityRepository.remove();
            const result = 'Ultima actividad removida. Total: '
                + activityRepository.activities.size;
            res.send(result);
        })
        .post('/save', (req, res) => {
            const activity = req.body;
            const result = activityRepository.save(activity);
            res.send(result);
        });
 
    app.use('/activity', router);
};
 
module.exports = getActivityRoutes;