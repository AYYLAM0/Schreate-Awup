const router = require('express').Router()
let Budget = require('../models/Transaction')

router.route('/').get((req, res) => {
    Budget.find()
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json('Error'+err))
})

router.route('/add').post((req, res) => {
    const transaction = req.body.name;

    const newBudget = new Budget({ transaction })
    newBudget.save()
    .then(() => res.json('transaction added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;