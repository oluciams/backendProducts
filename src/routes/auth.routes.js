const router = require('express').Router();

const {createUser, logOut} = require('../controllers/auth.controllers')

router.post('/signup', createUser);

//router.post('/login', loginUser);

router.get('/logout', logOut);


module.exports = router;