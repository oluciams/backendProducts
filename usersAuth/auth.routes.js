const router = require('express').Router();

const validation = require('./validationMiddleware');
const userSchema = require('./user.validation');
const loginSchema = require('./login.validation');

const {createUser, loginUser, logOut} = require('./auth.controllers');

router.post('/signup', validation(userSchema), createUser);

router.post('/login', validation(loginSchema), loginUser);

router.get('/logout', logOut);


module.exports = router;