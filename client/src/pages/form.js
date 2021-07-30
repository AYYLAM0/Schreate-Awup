import React from 'react'


export class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {

        return (
            <div className="container bg-white border border-primary round mt-5">
                <div className="row">
                    <h1 className="text-center">Job get! {this.state.username} {this.state.age}</h1>
                    <form className="col-md-8 go-right">

                        <p>Infomation on Job</p>

                        <div className="form-group ">
                            <input
                                name="jobName"
                                type="text"
                                onChange={this.myChangeHandler}
                                className="form-control" />
                            <label>Name of Job :</label>
                        </div>

                        <div className="form-group">
                            <input
                                name="finshDate"
                                type="text"
                                onChange={this.myChangeHandler}
                                className="form-control" />
                            <label>Job Due Date :</label>
                        </div>

                        <div className="form-group">
                            <input
                                name="jobBid"
                                type="text"
                                onChange={this.myChangeHandler}
                                className="form-control" />
                            <label>Job Bid :</label>
                        </div>

                        <div className="form-group">
                            <input
                                name="dateStarted"
                                type="text"
                                onChange={this.myChangeHandler}
                                className="form-control" />
                            <label>Start Date :</label>
                        </div>

                        <div className="form-group">
                            <input
                                name="budget"
                                type="text"
                                onChange={this.myChangeHandler}
                                className="form-control" />
                            <label>Jobs Budget :</label>
                        </div>

                        <div className="form-group">
                            <textarea
                                name="jobDetails"
                                type="text"
                                className="form-control"></textarea>
                            <label>Jobs Details :</label>
                        </div>

                    </form>
                        <div className="d-flex justify-content-end">
                            <input className="btn btn-outline-primary btn-lg" type="submit" value="Submit" />
                        </div>



                </div>
            </div>
        );
    }
}





