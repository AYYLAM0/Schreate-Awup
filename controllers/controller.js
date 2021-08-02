let db;
const bcrypt = require('bcryptjs');
const passport = require('passport')
const request = indexedDB.open("ScraightUP", 1);
   

    request.onupgradeneeded = function (event) {
        const db = event.target.result;
        db.createObjectStore("awaiting", { autoIncrement: true });
      };
      
      request.onsuccess = function (event) {
        db = event.target.result;
        if (navigator.onLine) {
          checkData();
        }
      };
      

module.exports = {

 
    findAll: function(req, res) {
        db.Job
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res){
        console.log(req.body)
        db.Job
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Job
        .findByIdAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Job
        .findByIdAndRemove({ _id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.Transaction
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res){
        console.log(req.body)
        db.Transaction
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Transaction
        .findByIdAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Transaction
        .findByIdAndRemove({ _id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },


    createNew: function(req, res){
        
            const { username, password} = req.body;
            let errors = [];
        
            //Check required fields
            if (!username || !password ) {
                errors.push({ msg: 'Please fill in all fields' });
            }
        
                //Validation passed
                db.User.find0ne({ username: username })
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


}