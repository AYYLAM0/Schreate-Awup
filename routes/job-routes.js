const router = require('express').Router()
let Job = require('../models/Job')

router.route('/').get((req,res) => {
    Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error ' + err))
})
router.route('/add').post((req,res)=>{
    const id = req.body.id
    const name = req.body.name
    const company = req.body.company
    const budget = req.body.budget
    const dateStart = req.body.dateStarted
    const finish = req.body.finishDate
    const newJob = new Job({
         id,
         name,
         company,
         budget,
         dateStart,
         finish
        })

    newJob.save()
    .then(() => res.json('job added'))
    .catch(err => res.status(400).json('error' + err))
})

module.exports = router;