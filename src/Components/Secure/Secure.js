import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Secure = () => {
    const checkout = useLoaderData()
    console.log(checkout)
    return (
        <div>
            <h1>Hi</h1>
        </div>
    );
};

export default Secure;