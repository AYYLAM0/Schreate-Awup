const router = require('express').Router()
let Job = require('../models/Job')
const db = require('../controllers/controller')


router.route('/').get((req, res) => {
    if (req.user) {
        Job.find({
            user: req.user.username
        })
            .then(jobs => {
                res.json(jobs)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json('Error ' + err)
            })
    }
    else {
        res.json("redirect")
    }

})
router.route('/add').post((req, res) => {
    if (req.user) {

        const username = req.user.username
        console.log(username)
        const bid = req.body.bid
        const name = req.body.name
        const company = req.body.company
        const budget = req.body.budget
        const dateStart = req.body.dateStarted
        const finish = req.body.finishDate
        const description = req.body.description
        const newJob = new Job({
            bid,
            name,
            company,
            budget,
            dateStart,
            finish,
            description,
            user: username
        })

        newJob.save()
            .then(() => res.json('job added'))
            .catch(err => {
                console.log(err)
                res.status(400).json('error' + err)
            })
    }
    else {
        res.json("redirect")
    }
})

module.exports = router;