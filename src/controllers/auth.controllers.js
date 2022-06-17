const User = require('../models/user.model');

const createUser = async (req, res)=>{
  const {name, email, password} = req.body;
  try {
    const user = await new User ({name, email, password});
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error)
  }
}

const logOut = (req, res) =>{
  try {
    res.status(200),json({message: 'logout user'})
  } catch (error) {
    res.status(400).json(error)
  }
}


module.exports = {
  createUser,
  logOut
}