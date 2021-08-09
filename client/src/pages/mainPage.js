import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import { useHistory } from "react-router-dom"
import axios from 'axios'

const style = {
    height: '100vh',
    maxWidth: '150vh'
}

const NewTransaction = () => {
    const [name, setName] = useState()
    const [value, setValue] = useState()
    const [post, setPost] = useState([])
    let history = useHistory();

    // Handle submit
    const handleSubmit = e => {
        // e.preventDefault()
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
            if (res.data === "redirect") {
                history.push("/");
            } else {
                setPost(res.data);
                console.log(res);
            }

        };

        budget();
    }, [history]);

    return (
        <div className="container" style={style}>


            <form onSubmit={handleSubmit}>
                <div className="mb-2 mt-3 d-flex justify-content-center">
                    <input
                        type="text"
                        placeholder="Name of transaction"
                        className="text-white border border-2 border-warning rounded-3 w-75 bg-secondary"
                        onChange={e => setName(e.target.value)} />
                </div>

                <div className="d-flex justify-content-center text-white">
                    <input
                        type="number"
                        placeholder="Transaction amount"
                        className="text-white border border-2 border-warning rounded-3 w-75 bg-secondary"
                        onChange={e => setValue(e.target.value)} />
                </div>

                <div className="d-flex justify-content-center mt-2">
                    <button className="btn btn-outline-warning mt-3 w-25" type="submit" > Add Funds <i className="bi bi-plus-square" ></i></button>

                </div>

            </form>

            <div className=" p-3">
                <h1 className="text-center text-white">EXPENSES</h1>
                <div className="card-body">
                    {post.map(post => (
                        <div className="bg-secondary mx-3 mb-1 p-3 border border-2 rounded-3 border-warning " key={post._id}>

                            <div className="text-white"> {post.name}</div>
                            <div className="text-white">${post.value}</div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default NewTransaction

