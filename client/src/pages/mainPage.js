import React from 'react'
import { Line } from 'react-chartjs-2'

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
            data: [65, 59, 80, 81, 56]
        }
    ]
}

export default class MainPage extends React.Component {
    render() {
        return (
            <div className="container" style={style}>

                <div className="form">
                    <input type="text" id="t-name" placeholder="Name of transaction" />
                    <input type="number" id="t-amount" placeholder="Transaction amount" />
                    <button id="add-btn"> Add Funds <i className="bi bi-plus-square"></i></button>
                    <button id="sub-btn"> Subtract Funds <i className="bi bi-dash-square"></i></button>
                </div>

                <div className="card mt-3 "  >
                    <Line
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
}

