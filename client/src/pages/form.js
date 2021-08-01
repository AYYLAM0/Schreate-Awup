import React,{useState} from 'react'
import API from '../utils/API'


const view = {
    height: '90vh',
    maxWidth: '200vh'
}
const style = {

    textAlign: 'center',
    display: 'block',
    marginLeft: '10rem',
    border: '1px solid',
    padding: '5px',
    width: '40rem'
}


// export class MyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             age: null,
//         };
//     }
const NewJob = () => {
    const [bid,setBid] =useState()
    const [name, setName] = useState()
    const [company, setCompany] = useState()
    const [budget, setBudget] = useState()
    const [dateStarted, setStart] = useState()
    const [finishDate, setFinish] = useState()
    const [description, setDescription] = useState()

    // myChangeHandler = (event) => {
    //     let nam = event.target.name;
    //     let val = event.target.value;
    //     this.setState({ [nam]: val });
        
    // }
    // render() {
        const handleSubmit = e => {
            e.preventDefault();
            console.log("job created for " + name);
          
            API.createJob({bid, name, company, budget, dateStarted, finishDate, description })
            .then((response) => {
                console.log(response)
            })
         
        };

        return (
            <div className="container bg-white border border-primary round mt-2" style={view}>
                <div className="row mx-5">
                    <h1 className="text-center">Job get!</h1>
                    <form className="col-md-9 go-right" onSubmit={handleSubmit}>

                        <p>Infomation on Job</p>

                        <div className="form-group mb-3 mx-3">
                            <input
                                name="jobName"
                                type="text"
                                style={style}
                                onChange={e=> setName(e.target.value)}
                                className="form-control" />
                            <label>Name of Job :</label>
                        </div>
                        
                        <div className="form-group mb-3 mx-3">
                            <input
                                name="companyName"
                                type="text"
                                style={style}
                                onChange={e=> setCompany(e.target.value)}
                                className="form-control" />
                            <label>Name of Company :</label>
                        </div>

                        <div className="form-group mb-3 mx-3">
                            <input
                                name="finshDate"
                                type="text"
                                style={style}
                                onChange={e=> setFinish(e.target.value)}
                                className="form-control" />
                            <label>Job Due Date :</label>
                        </div>

                        <div className="form-group mb-3 mx-3">
                            <input
                                name="jobBid"
                                type="text"
                                style={style}
                                onChange={e=> setBid(e.target.value)}
                                className="form-control" />
                            <label>Job Bid :</label>
                        </div>

                        <div className="form-group mb-3 mx-3">
                            <input
                                name="dateStarted"
                                type="text"
                                style={style}
                                onChange={e=> setStart(e.target.value)}
                                className="form-control" />
                            <label>Start Date :</label>
                        </div>

                        <div className="form-group mb-3 mx-3">
                            <input
                                name="budget"
                                type="text"
                                style={style}
                                onChange={e=> setBudget(e.target.value)}
                                className="form-control" />
                            <label>Jobs Budget :</label>
                        </div>

                        <div className="form-group mb-3 mx-3">
                            <textarea
                                name="jobDetails"
                                type="text"
                                style={style}
                                onChange={e=> setDescription(e.target.value)}
                                className="form-control"></textarea>
                            <label>Jobs Details :</label>
                        </div>
                        <div className="d-flex justify-content-end">
                            <input className="btn btn-outline-primary btn-lg" type="submit" value="Submit" />
                        </div>

                    </form>
                        



                </div>
            </div>
        );
    }
//     }
// }





export default NewJob