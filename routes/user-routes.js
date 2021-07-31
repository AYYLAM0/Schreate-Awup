const router = require('express').Router();
const passport = require('../config/passport');
let User = require('../models/User');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req.body)
    const username = req.body.username;
    const password = req.body.password

    const newUser = new User({ username, password });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/signin').post((req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err) }
        console.log(user)
        if (!user) { return res.json("incorrect username"); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            console.log(user._id)
            return res.json(user._id)
        })
    })(req, res, next)

})

module.exports = router;