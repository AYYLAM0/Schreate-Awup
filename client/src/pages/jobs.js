import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"

const JobsList = () => {
    const [post, setPost] = useState([])
    let history = useHistory();
    // Calling database for jobs
    useEffect(() => {
        const jobs = async () => {
            const res = await axios(
                '/api/scraightUp/job-routes/'
            );
            if (res.data === "redirect") {
                history.push("/");
            } else {
            setPost(res.data);
            console.log(res);
            }
        };

        jobs();
    }, [history]);

    return (
        <div className="card-group ">

                <div className="card-body ">
                    {post.map( post => (
                    <div className = "card p-5 m-5 bg-secondary text-warning border border-2 border-warning rounded-3" key={post._id}>
                        <h1>{post.name}</h1>
                        <li>{post.company} </li>
                        <li>${post.bid}</li>
                        <li>${post.budget}</li>
                        <li>{post.dateStarted}</li>
                        <li>{post.finishDate}</li>
                        <li>{post.description}</li>

                    </div>
                   ))}
                </div>




        </div>

    )
}

export default JobsList