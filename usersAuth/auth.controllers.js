const User = require('./user.model');
const jwt = require('jsonwebtoken')

const createUser = async (req, res)=>{
  const {name, email, password} = req.body;
  try {
    const user = await new User ({name, email, password});
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}

const loginUser = async (req, res)=>{
  const {email, password} = req.body;  
  try {
    const user = await User.authenticate({email, password});    
    if(user){       
      const token = jwt.sign({id: user._id}, process.env.SECRET);
      res.status(200).json({token});      
    }else{
      res.status(400).json({message: 'invalid password or email'});
    }
  } catch (error) {
    res.status(400).json({error});
  }
}

const logOut = (req, res)=>{
  try {
    res.status(200),json({message: 'logout user'});
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createUser,
  loginUser,
  logOut
}