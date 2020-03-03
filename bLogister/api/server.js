const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Task = require('./api/models/apiModel');
const bodyParser = require('body-parser');

//mongoose instance url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ep10');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//express middleware
//app.use(function(req, res) {
  //  res.status(404).send({url: req.originalUrl + ' not found'})
 // });

const routes = require('./api/routes/apiRoutes'); // import the route
routes(app); // register the route

app.listen(port);

console.log(`we're doing well on ${port}`);

