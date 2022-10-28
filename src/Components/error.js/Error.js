import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'

const Error = () => {
    // this route is for showing errors
    return (
        <div className='noFounderr '>
                    <div> 
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p className='text-xl'>Sorry, but the page you are looking for does not exist,<br></br>have been removed. name changed or is temporarily unavailable</p>
                        <Link to='/home' className='btn btn-primary'>Back to Home</Link>
                    </div>

        </div>
    );
};

export default Error;