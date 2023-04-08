import React from 'react'
import './Follower.css'
import { Link } from 'react-router-dom';

const Follower = () => {
    return (
        <>
            <div className="follower-container">
                <h2>User Follows</h2>
                <div>
                    <h1>You are not following anyone</h1>
                </div>
                <Link to="/" ><button className='btnn12'>Go Back</button></Link>
            </div>

        </>
    )
}

export default Follower