const router = require('express').Router();
const passport = require('passport');
let User = require('../models/User');
const bcrypt = require('bcrypt')

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err));
});
 // add bcrypt password hashing
router.post('/add', async (req, res) => {
    console.log(req.body)   
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const username = req.body.username;
    const password = hashedPassword
    const newUser = new User({ username, password });
    newUser.save()
    .then((user) => {
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            console.log(user._id)
            return res.json("User Added!")
        })
    })
    .catch(err => res.status(400).json('Error ' + err));
});
router.post('/signin', async (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
        if (err) { 
            console.log(err)
            return next(err) 
        }
        if (!user) { return res.json("incorrect username or password"); }
        req.logIn(user, function(err) {
            if (err) { 
                console.log(err)
                return next(err); 
            }
            console.log(user._id)
            return res.json(user._id)
        })
    })(req, res, next)
});
router.route('/logout').post((req, res) => {
    console.log("logging out")
    req.logout();
    res.json("redirect now");
});


module.exports = router;