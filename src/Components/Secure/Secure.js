import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Secure = () => {
    const checkout = useLoaderData()
    const { price, name } = checkout
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Checkout</h1>
                        <h1 className="text-3xl font-bold">{name} </h1>
                        <p className="mt-5 text-xl"> {price} TK </p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secure;