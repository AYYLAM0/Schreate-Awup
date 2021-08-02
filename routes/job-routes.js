const router = require('express').Router()
let Job = require('../models/Job')
const controller = require('../controllers/controller')


router.route('/').get((req,res) => {
    Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error ' + err))
})
router.route('/add').post((req,res)=>{

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
         description
        })

    newJob.save()
    .then(() => res.json('job added'))
    .catch(err => {
        console.log(err)
        res.status(400).json('error' + err)
    })
})

module.exports = router;