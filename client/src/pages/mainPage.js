import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import axios from 'axios'

const style = {
    height: '100vh',
    maxWidth: '150vh'

}

const NewTransaction = () => {
    const [name, setName] = useState()
    const [value, setValue] = useState()
    const [post, setPost] = useState([])

    // Handle submit
    const handleSubmit = e => {
        e.preventDefault()
        console.log("transaction added")
        API.createTransaction({ name, value })
        .then((res) => {
            console.log(res)
        })

    }

    // Calling database for budgets
    useEffect(() => {
        const budget = async () => {
            const res = await axios(
                '/api/scraightUp/budget-routes/'
            );
            setPost(res.data);
            console.log(res);
        };

        budget();
    }, [value]);

    return (
        <div className="container" style={style}>


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

            <div className=" mb-3">
                <h1>Expenses</h1>
                <div className="card-body">
                    {post.map(post => (
                        <div className="card mx-3 p-3" key={post._id}>

                            <div>Transaction Name: {post.name}</div>
                            <div>Transaction Value: {post.value}</div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default NewTransaction

