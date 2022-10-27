import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PencilSquareIcon, ArrowDownIcon, } from '@heroicons/react/24/solid'
import "./sojib.css"
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Courseinfo = () => {
    const cousedetails = useLoaderData()
    const { id, details, image, name, description, learn } = cousedetails
    const options = {
        orientation: 'landscape',
    };

    return (
        <div className='shadow-2xl 'ref={ref}>
            <Pdf targetRef={ref} filename="code-example.pdf" options={options}  >
                {({ toPdf }) => <button className='btn btn-outline' onClick={toPdf}>Get Pdf</button>}
            </Pdf>
            <div  className='w-[90%] mx-auto'>
                <div className="hero  bg-base-200" >
                    <div className="hero-content flex-col lg:flex-row">
                        
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <h1 className="text-2xl mt-2 mb-0"> Some info About Course</h1>

                            <p className="py-2"> {description}</p>
                        </div>
                        <img src={image} alt={name} className="lg:max-w-sm w-[80%] rounded-lg shadow-2xl" />

                    </div>

                </div>
            </div>

            <div className='border border-blue-900'>
                <h1 className='text-2xl '>What will you learn</h1>
                <div className='grid grid-cols-2  gap-9 p-10 lg:w-[80%] mx-auto '>

                    {
                        learn.map(lrn => <div className='flex  items-center'>

                            <div className='flex justify-center items-center '>
                                <PencilSquareIcon className='w-16 h-16 lg:w-6 lg:h-6'> </PencilSquareIcon>
                                {lrn}
                            </div>

                        </div>)
                    }
            </div>
                </div>

                <h1 className='text-2xl text-emerald-500'>Introduction</h1>
                {
                    details.map(s =>
                        <div>

                            <ol className='btn btn-outline flex flex-row w-80 mx-auto mt-2'>{s}
                                <ArrowDownIcon className='w-5 h-5'></ArrowDownIcon>
                            </ol>
                        </div>)
                }
            
            <p className='text-blue-700 m-4'> To Know More Get Premium access</p>
            <Link to={`/checkout/${id}`}><button className='btn btn-info mb-5' > Get Premium access</button></Link>
        </div>
    );
};

export default Courseinfo;