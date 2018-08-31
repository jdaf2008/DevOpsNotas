'use strict';
 
const Router = require('express');
const studentRepository = require('../repository/studentRepository');
 
const getStudentRoutes = (app) => {
    const router = new Router();
 
    router
        .get('/all', (req, res) => {
            const result = studentRepository.getAll();
            res.send(result);
        });
 
    app.use('/student', router);
};
 
module.exports = getStudentRoutes;