import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import API from '../utils/API'
import axios from 'axios'

const style = {
    height: '100vh',
    maxWidth: '150vh'

}
const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Expense',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56,]
        }
    ]
}

// export default class MainPage extends React.Component {
//     render() {
const NewTransaction = () => {
    const [name, setName] = useState()
    const [value, setValue] = useState()
    const [post, setPost] = useState([])



    const handleSubmit = e => {
        e.preventDefault()
        console.log("transaction added")
        API.createTransaction({ name, value })
            .then((res) => {
                console.log(res)
            })

    }
    // Calling database for jobs
    useEffect(() => {
        const jobs = async () => {
            const res = await axios(
                '/api/scraightUp/job-routes/'
            );
            setPost(res.data);
            console.log(res);
        };

        jobs();
    }, []);

    return (
        <div className="container" style={style}>
            {/* Rendering job name */}
            <div className="text-white">
                <ul>
                    {post.map(post => (
                        <li key={post.id}>
                            {post.name} , 
                            {post.company} , 
                            {post.bid} , 
                            {post.budget} ,
                            {post.dateStarted} , 
                            {post.finishDate} ,
                            {post.description}</li>
                    ))}
                </ul>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="t-name"
                        placeholder="Name of transaction"
                        onChange={e => setName(e.target.value)} />
                </div>

                <div>
                    <input
                        type="number"
                        id="t-amount"
                        placeholder="Transaction amount"
                        onChange={e => setValue(e.target.value)} />
                </div>

                <div>
                    <button type="submit" > Add Funds <i className="bi bi-plus-square" ></i></button>
                    <button type="submit" > Subtract Funds <i className="bi bi-dash-square" ></i></button>
                </div>

            </form>

            <div className="card mt-3 "  >
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: 'true',
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>





        </div>



    )
}



export default NewTransaction
// import React from 'react';
// import Chart from '../components/chart/chart'

// const MainPage = () => {
//     return (
//         <Chart />
//     )
// }

// export default MainPage;
