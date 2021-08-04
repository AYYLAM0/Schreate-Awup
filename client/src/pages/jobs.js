import React, {useState, useEffect} from 'react'
import axios from "axios"

const JobsList = () => {
    const [post, setPost] = useState([])
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
        <div classNme="card-group">

                <div className="card-body ">
                    {post.map( post => (
                    <div className = "card p-5 m-5" key={post.id}>
                        <h1>{post.name}</h1>
                        <li>{post.company} </li>
                        <li>{post.bid}</li>
                        <li>{post.budget}</li>
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