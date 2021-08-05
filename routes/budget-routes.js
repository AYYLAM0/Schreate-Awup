const router = require('express').Router()
let Budget = require('../models/Transaction')

router.route('/').get((req, res) => {
    if (req.user) {
        Budget.find({
            user: req.user.username
        })
        .then(transaction => {
            res.json(transaction)
        })
        .catch(err => {
            res.status(400).json('Error' + err)
    })
}
    else {
        res.json("redirect")
    }

})

router.route('/add').post((req, res) => {
    if (req.user){

    const username = req.user.username
    const name = req.body.name
    const value = req.body.value


    const newBudget = new Budget({
        name,
        value,
        user: username

    })
    newBudget.save()
        .then(() => res.json('transaction added! from backend'))
        .catch(err => {
            console.log(err)
            res.status(400).json('Error ' + err);
        })
    }   
else {
    res.json('redirect')
    }
})

module.exports = router;