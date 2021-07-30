const router = require('express').Router()
let Budget = require('../models/Transaction')

router.route('/').get((req, res) => {
    Budget.find()
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json('Error'+err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const value = req.body.value
    const date = req.body.date

    const newBudget = new Budget({ 
        name,
        value,
        date,    
    })
    newBudget.save()
    .then(() => res.json('transaction added!'))
    .catch(err => res.status(400).json('Error ' + err));
});


module.exports = router;