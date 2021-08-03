const router = require('express').Router();
const passport = require('passport');
let User = require('../models/User');
const bcrypt = require('bcryptjs')
const db = require('mongoose')

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const { username, password} = req.body;
    let errors = [];

    //Check required fields
    if (!username || !password ) {
        errors.push({ msg: 'Please fill in all fields' });
    }

        //Validation passed
        db.User.findOne({ username: username })
            .then(user => {
                if (user) {
                    // User exists
                    errors.push({ msg: 'username is already registered' })
                    res.render('register', {
                        errors,
                        username,
                        password
                    });
                } else {
                    const newUser = new db.User({
                        username,
                        password
                    });

                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            //Set password to hashed
                            newUser.password = hash;
                            //Save user
                            newUser.save()
                                .then(user => {
                                    res.redirect('/');
                                })
                                .catch(err => console.log(err));
                        }))
                }
            })
    
}


)
//     console.log(req.body)
//     const username = req.body.username;
//     const password = req.body.password
//     // add bcrypt password hashing
//     bcrypt.hash(password, 8)
//     .then(hashedPassword =>{

//     const newUser = new User({ username, hashedPassword });

//     newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error ' + err));
// });
// })
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