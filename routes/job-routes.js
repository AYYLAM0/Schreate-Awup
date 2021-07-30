const router = require('express').router()
let Job = require('../models/Job')

router.route('/').get((req,res) => {
    Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error ' + err))
})
router.route('/add').post((req,res)=>{
    const job = req.body.name
    const newJob = new Job({ job })

    newJob.save()
    .then(() => res.json('job added'))
    .catch(err => res.status(400).json('error' + err))
})

module.exports = router;