'use strict';

const { start } = require('./src/server');
const { sequelize } = require('./src/models');

sequelize.sync()
    .then( () =>{
        console.log('successful connection');
        start();
    })
    .catch(e => console.error(e));