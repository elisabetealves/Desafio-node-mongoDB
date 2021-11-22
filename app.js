const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const dotenv = require('dotenv')
const database = require('./config/database')

dotenv.config()
database.connect()

const index = require('./routes/index');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

app.use('/exports', express.static(process.cwd() + '/exports'))

app.use('/', index);


module.exports = app;