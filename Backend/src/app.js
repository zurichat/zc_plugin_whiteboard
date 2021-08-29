const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

//initialize express app
const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(cors());
app.use(morgan('tiny'));

module.exports = app;
