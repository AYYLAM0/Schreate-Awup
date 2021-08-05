// const User = require("./user");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');
const passport = require("passport");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username'}, (username,password, done) => {
      console.log(username)
      User.findOne({ username: username })
      .then(user => {
        if(!user){
          return done(null, false, { message: 'That user is not registered' });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) {
            console.log(err);
            throw err
          }
          if(isMatch) {
            console.log("Match!")
            return done(null, user);
          } else {
            console.log("incorrect password")
            return done(null, false, { message: 'Password incorrect'});
          }
        });
      })
      .catch(err => console.log(err))
    })
  )
}

passport.serializeUser((user, done) => {
  console.log("serializing", user.username)
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  console.log("deserializing", username)
  User.findOne({username}, (err, user) => {
    if (err) {
      console.log("error", err)
      return err
    }
    done(err, user);
  })
})