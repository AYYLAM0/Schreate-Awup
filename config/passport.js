// const User = require("./user");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');
const passport = require("passport");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username'}, (username,password, done) => {
      User.findOne({ username: username })
      .then(user => {
        if(!user){
          return done(null, false, { message: 'That email is not registered' });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect'});
          }
        });
      })
      .catch(err => console.log(err))
    })
  )
}
passport.serializeUser((user, done) => {
  done(null, user.username);
});
passport.deserializeUser((username, done) => {
  User.findById(username, (err, user) => {
    if (err) {return err}
    done(err, user);
  })
})