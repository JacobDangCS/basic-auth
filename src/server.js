'use strict';

// 3rd Party Resources
require('dotenv').config();
const express = require('express');
const authRouter = require('./auth/router/router');
const { Users } = require('./auth/models/users-model');
const sequelize = require('sequelize');
const cors = require ('cors');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

app.use(cors());


// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Working route!');
});

const start = () => app.listen(3000, () => console.log('server up'));


module.exports = {
  app,
  start,
  sequelize,
  Users,
};