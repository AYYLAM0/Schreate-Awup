import { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import axios from 'axios'

const style = {
    height: '100vh',
    maxWidth: '100vh'
}


const ChartGraph = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {

        let transName = [];
        let transAmount = [];

        // API call for transaction data
        axios.get('/api/scraightUp/budget-routes/')
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    transName.push(dataObj.name)
                    transAmount.push(parseInt(dataObj.value))
                }
                // Data for graph
                setChartData({
                    labels: transName,
                    datasets: [
                        {
                            label: 'Expense',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgb(247, 182, 5)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: transAmount
                        }
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            })
        console.log(transName, transAmount);

    };
// Rendering chart
    useEffect(() => {
        chart();
    }, []);
    return (
        <div className="container" >

            <div className="card mt-3 " >
                <Bar
                    data={chartData}
                    options={{
                        title: {
                            display: 'true',
                            text: 'Total Income',
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

export default ChartGraph;
