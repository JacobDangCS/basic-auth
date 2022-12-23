'use strict';

const { app } = require('./src/server');
const { sequelize } = require('./src/auth/models/index');

sequelize.sync()
  .then(() => {
    console.log('successful connection');
    app.listen(3000, () => console.log('server up'));
  })
  .catch(e => console.error(e));