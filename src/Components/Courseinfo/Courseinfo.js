import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PencilSquareIcon, ArrowDownIcon, } from '@heroicons/react/24/solid'
import "./sojib.css"
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Courseinfo = () => {
    // we get the data from the server and display it
    const cousedetails = useLoaderData()

    const { id, details, image, name, description, learn } = cousedetails
    const options = {
        orientation: 'landscape',
    };
    console.log(cousedetails);
    return (
        //  get pdf & print 
        // <div className='shadow-2xl ' ref={ref}>
        //     <Pdf targetRef={ref} filename="code-example.pdf" options={options}  >
        //         {({ toPdf }) => <button className='btn btn-outline' onClick={toPdf}
        //         ><ArrowDownIcon />PDF</button>}
        //     </Pdf>
        //     {/* dynamic for all  course infos   */}
        //     <div className='w-[90%] mx-auto'>
        //         <div className="hero  bg-base-200" >
        //             <div className="hero-content flex-col lg:flex-row">

        //                 <div>
        //                     <h1 className="text-5xl font-bold">{name}</h1>
        //                     <h1 className="text-2xl mt-2 mb-0"> Some info About Course</h1>

        //                     <p className="py-2"> {description}</p>
        //                 </div>
        //                 <img src={image} alt={name} className="lg:max-w-sm w-[80%] rounded-lg shadow-2xl" />

        //             </div>

        //         </div>
        //     </div>

        //     <div className='border border-blue-900'>
        //         <h1 className='text-2xl '>What will you learn</h1>
        //         <div className='grid grid-cols-2  gap-9 p-10 lg:w-[80%] mx-auto '>

        //             {
        //                 learn.map(lrn => <div className='flex  items-center'>

        //                     <div className='flex justify-center items-center '>
        //                         <PencilSquareIcon className='w-16 h-16 lg:w-6 lg:h-6'> </PencilSquareIcon>
        //                         {lrn}
        //                     </div>

        //                 </div>)
        //             }
        //         </div>
        //     </div>

        //     <h1 className='text-2xl text-emerald-500'>Introduction</h1>
        //     {
        //         details.map(s =>
        //             <div>

        //                 <ol className='btn btn-outline flex flex-row w-80 mx-auto mt-2'>{s}
        //                     <ArrowDownIcon className='w-5 h-5'></ArrowDownIcon>
        //                 </ol>
        //             </div>)
        //     }

        //     <p className='text-blue-700 m-4'> To Know More Get Premium access</p>
        //    
        // </div>
        <div>
            <div className='lg:grid lg:grid-cols-4'>
                <div className='col-span-3'>
                    <h1 className='text-center  font-bold text-xl'>Decription</h1>
                    <p className='w-[90%] text-center ml-5 '>
                        {description}
                    </p>
                    <h1 className='text-2xl'>Requirments</h1>
                    <div className='flex justify-evenly mt-5'>
                        <div className='shadow-xl shadow-slate-900 p-5'>
                            <h1 className='text-xl'>Basic Knowledge</h1>
                        </div>
                        <div className='shadow-xl shadow-slate-900 p-5'>
                            <h1 className='text-xl'>Computer Laptop</h1>
                        </div>
                        <div className='shadow-xl shadow-slate-900 p-5'>
                            <h1 className='text-xl'> Good Internet </h1>
                        </div>

                    </div>
                </div>
                <div className=''>
                    <div className="card w-[80]shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className='text-center '>
                                    <p >Course Duration:</p>
                                    <p>Course Level:</p>
                                    <p>Last Update</p>
                                </div>
                                <div className='text-center items-center'>
                                    <p>02 hours 45 minutes</p>
                                    <p>Expert</p>
                                    <p>2022/11</p>
                                </div>
                            </div>
                        </div>
                        <Link to={`/checkout/${id}`}><button className='btn btn-info mb-5 bg-[#FFE4AA] border-none' > Get Premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courseinfo;