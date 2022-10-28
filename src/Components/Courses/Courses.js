import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Singlecourse from '../Singlecourse/Singlecourse';

const Courses = () => {
    const alldatas = useLoaderData()
  
    return (
        <div className='bg-[#ACB0EF]'>
            <div className='lg:grid lg:grid-cols-3 '> 
                <div className='flex flex-wrap lg:flex-col lg:m-4 justify-evenly lg:justify-start m-5 bg-[#ACB0EF] '> 
                   {
                    alldatas.map(data => 
                    <Link to={`/course/${data.id}`} 
                    className=' lg:m-5 text-slate-50 lg:p-5 m-3 p-3 btn btn-outline'  >{data.name} </Link>)
                   }
                </div>
                <div className='col-span-2 grid lg:grid-cols-2 gap-5 justify-center mt-5' > 
                  { 
                    alldatas.map(data => <Singlecourse key={data.id} data={data}> </Singlecourse>)
                  }
                </div>
            </div>
        </div>
    );
};

export default Courses;