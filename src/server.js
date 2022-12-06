'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World!');
});

function start(){
    app.listen(PORT, () => console.log('listening on port', PORT))
}

module.exports = { app, start }