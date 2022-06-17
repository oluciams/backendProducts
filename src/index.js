require('dotenv').config();

require('./confg/dbConfig');
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(authRoutes);




app.listen(process.env.PORT || 3001, console.log(`running in port ${process.env.PORT || 3001}`))