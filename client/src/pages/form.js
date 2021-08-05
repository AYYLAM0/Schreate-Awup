import React, { useState } from 'react'
import API from '../utils/API'


const view = {
    height: '80vh',
    maxWidth: '180vh'
}

const style = {
    textAlign: 'center',
    display: 'block',
    marginLeft: '10rem',
    border: '1px solid',
    padding: '5px',
    width: '40rem'
}

const NewJob = () => {
    const [bid, setBid] = useState()
    const [name, setName] = useState()
    const [company, setCompany] = useState()
    const [budget, setBudget] = useState()
    const [dateStarted, setStart] = useState()
    const [finishDate, setFinish] = useState()
    const [description, setDescription] = useState()

    const handleSubmit = e => {
        e.preventDefault();
        console.log("job created for " + name);

        API.createJob({ bid, name, company, budget, dateStarted, finishDate, description })
            .then((response) => {
                console.log(response)
            })

    };

    return (
        <div className="container bg-secondary border border-warning border-3 mt-2" style={view}>
            <div className="row mx-5">
                <h1 className="text-center text-warning mb-5 p-3">New Job</h1>
                    
                <form className="col-lg-8 go-right" onSubmit={handleSubmit}>


                    {/* Name of Job */}
                    <div className="form-group mb-3">
                        <input
                            name="jobName"
                            type="text"
                            style={style}
                            onChange={e => setName(e.target.value)}
                            className="form-control border border-2 border-warning rounded-3" />
                        <label className="text-warning">Name of Job :</label>
                    </div>

                    {/* Name of Company */}
                    <div className="form-group mb-3">
                        <input
                            name="companyName"
                            type="text"
                            style={style}
                            onChange={e => setCompany(e.target.value)}
                            className="form-control border border-2 border-warning rounded-3" />
                        <label className="text-warning">Name of Company :</label>
                    </div>

                    {/* Job Bid */}
                    <div className="form-group mb-3">
                        <input
                            name="jobBid"
                            type="text"
                            style={style}
                            onChange={e => setBid(e.target.value)}
                            className="form-control border border-2 border-warning rounded-3" />
                        <label className="text-warning">Job Bid :</label>
                    </div>

                    {/* Jobs Budget */}
                    <div className="form-group mb-3">
                        <input
                            name="budget"
                            type="text"
                            style={style}
                            onChange={e => setBudget(e.target.value)}
                            className="form-control border border-2 border-warning rounded-3" />
                        <label className="text-warning">Jobs Budget :</label>
                    </div>

                    {/* Start Date */}
                    <div className="form-group mb-3">
                        <input
                            name="dateStarted"
                            type="date"
                            data-date-inline-picker="true"
                            style={style}
                            onChange={e => setStart(e.target.value)}
                            className="form-control border border-2 border-warning rounded-3" />
                        <label className="text-warning">Start Date :</label>
                    </div>

                    {/* Finish Date */}
                    <div className="form-group mb-3">
                        <input
                            name="finishDate"
                            type="date"
                            data-date-inline-picker="true"
                            style={style}
                            onChange={e => setFinish(e.target.value)}
                            className="form-control border border-2 border-warning rounded-3" />
                        <label className="text-warning">Job Due Date :</label>
                    </div>

                    {/* Job Details */}
                    <div className="form-group mb-3">
                        <textarea
                            name="jobDetails"
                            type="text"
                            style={style}
                            onChange={e => setDescription(e.target.value)}
                            className="form-control border border-2 border-warning rounded-3"></textarea>
                        <label className="text-warning">Jobs Details :</label>
                    </div>

                    {/* Submit Button */}
                    <div className="d-flex justify-content-center col-sm-12">
                        <input className="btn btn-outline-warning btn-lg" type="submit" value="Submit" />
                    </div>

                </form>

            </div>
        </div>
    );
}

export default NewJob