const router = require('express').Router()
let Budget = require('../models/Transaction')

router.route('/').get((req, res) => {
    Budget.find()
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json('Error'+err))
})

router.route('/add').post((req, res) => {
    console.log("in route")
    const name = req.body.name
    const value = req.body.value
    

    const newBudget = new Budget({ 
        name,
        value,
      
    })
    newBudget.save()
    .then(() => res.json('transaction added! from backend'))
    .catch(err => {
        console.log(err)
     res.status(400).json('Error ' + err);
    })
})


module.exports = router;