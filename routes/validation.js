
const router = require('express').Router()
const bcrypt = require('bcryptjs')
const UserModel = require('../models/User.model.js')



// !CUSTOM MIDDLEWARES
// !userInfo

// !Check authorization! CM
const checkSession = (req, res, next) => {
  if (req.session.loggedInUser) {
    next()
  } else {
    res.redirect('/signin')
  }
}

const authorizeInput = (req, res, next) => {
  /* let username = req.body.username
   let password = req.body.password*/
  const { username, password } = req.body;
  // if (req.session.userInfo){
  if (!username || !password) {
    res.render('index', { msg: 'please fill in all fields' })
  } else {
    next()
    //res.redirect('/signup)
  }
}






//





module.exports = { authorizeInput, checkSession };