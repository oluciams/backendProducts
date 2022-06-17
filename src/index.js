require('dotenv').config();

require('./confg/dbConfig');
const express = require('express');
const app = express();


app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.listen(process.env.PORT || 3001, console.log(`running in port ${process.env.PORT || 3001}`))