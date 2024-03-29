require('dotenv').config();
const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/usersTalent'

mongoose.connect(process.env.MONGO_DB_URL || URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in db connection'))
db.once('open', () => console.log('db connected'))
