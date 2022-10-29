require('dotenv').config();

require('../confg/dbConfig');
const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken')

const authRoutes = require('./auth.routes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(authRoutes);




app.listen(process.env.PORT || 3001, console.log(`running in port ${process.env.PORT || 3001}`))