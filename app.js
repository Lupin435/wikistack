const morgan = require('morgan');
const express = require('express');
const { db } = require('./models');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.send('hello world');
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})
