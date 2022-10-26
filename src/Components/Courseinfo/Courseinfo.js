import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courseinfo = () => {
    const cousedetails = useLoaderData()
    const {id,details,image,name,description}=cousedetails
    
    return (
        <div className='shadow-2xl'>
          
                <div> Download pdf</div>
            <div className='card-body '> 

                        <div className=' w-80 mx-auto'> 
                                <img src={image} alt="gr" />
                        </div>
                    <div className='card-title'> 
                            <h1>{name}</h1>
                       
                    </div>
                    <h1> 
                      Some Details About this Course<br></br>
                        {description}
                </h1>
            </div>
            
            <h1 className='text-3xl'> What you Gonna learn From this course??</h1>
            <p className='text-xl'>Check This list : </p>
           {
            details.map(s => <ol className='text-lg'>{s}</ol>)
           } 
           <p className='text-blue-700 m-4'> To Know More Get Primium</p>
           <Link to={`/checkout/${id}`}><button className='btn btn-info mb-5' > Get Primium Acces</button></Link>
        </div>
    );
};

export default Courseinfo;