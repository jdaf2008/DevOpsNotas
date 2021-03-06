'use strict';
 
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
 
// register JSON parser middlewear
app.use(bodyParser.json());
 
//require('./routes/activityRoutes')(app);
require('./routes/studentRoutes')(app);
 
app.listen(3030, () => {
    console.log("Server is up!");
});