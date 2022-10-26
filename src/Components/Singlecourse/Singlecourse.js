import React from 'react';
import { Link } from 'react-router-dom';

const Singlecourse = ({data}) => {
   const {name,id,price,image,intro}=data
    return (
        
                <div className='mb-2'>
                        <div className="card w-80 h-[400px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt={name} className="rounded-xl h-[100px]" />
                    </figure>
                    <div className="card-body items-center text-center">

                        <h2 className="card-title">{name}</h2>
                        <p>{intro}</p>
                        <p> ${price}</p>
                        <div className="card-actions">
                           
                        </div>
                       
                    </div>
                    <Link to={`/course/${id}`}> <button className="btn btn-info w-full " >More Details</button></Link>
                </div>
        </div>
        
    );
};

export default Singlecourse;