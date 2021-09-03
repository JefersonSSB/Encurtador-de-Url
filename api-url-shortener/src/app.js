"use strict";

const express = require("express");
const cors = require('cors');
const routes = require('./routes');
const app = express();

require('./database')

// Habilita o Body Parse
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// Habilita o CORS
app.use(cors());

app.use(routes);

module.exports = app;