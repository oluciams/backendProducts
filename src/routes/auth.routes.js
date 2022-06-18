const router = require('express').Router();

const validation = require('../middlewares/validationMiddleware');
const userSchema = require('../validations/user.validation');
const loginSchema = require('../validations/login.validation');

const {createUser, loginUser, logOut} = require('../controllers/auth.controllers');

router.post('/signup', validation(userSchema), createUser);

router.post('/login', validation(loginSchema), loginUser);

router.get('/logout', logOut);


module.exports = router;