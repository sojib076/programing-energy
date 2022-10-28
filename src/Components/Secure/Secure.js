import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContex } from '../../Contexs/UserContext';

const Secure = () => {
    const checkout = useLoaderData()
        const {user}=useContext(authContex)
       
    const { price, name } = checkout
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                         
                        <h1 className="text-3xl font-bold">{name} </h1>
                        <p className="mt-5 text-xl"> {price} TK </p>
                         <div className='card-body p-5 '> 
                         <h1 className="mb-5 text-5xl font-bold">Checkout</h1>
                                    <div className='card-title border border-b-teal-900 p-5  '> 
                                        <h1>User Name : {user?.displayName}</h1> 
                                    </div> 
                                    <div className='card-title border border-b-teal-900 p-4 '>
                                    <h1>User Email : {user?.email}</h1>
                                        </div>
                                  
                         </div>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secure;