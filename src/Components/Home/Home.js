import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper";
import 'swiper/css';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className='overflow-hidden'>
                {/* this for swiper js to show slider */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                <SwiperSlide >
                    <div className='course-bg  flex flex-col justify-center'>
                        <h1 className='lg:text-5xl 0'> Bored at Home?</h1>
                        <p className='lg:text-2xl text-yellow-200'>We have the best solution for you</p>
                        <p className='text-2xl text-yellow-200'>Join our courses now</p>
                        <br></br>
                        <div>
                            <Link to='/courses' >
                                <button className='button lg:w-72 w-52 mx-auto'>
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Join Now</span>
                                </button>
                            </Link>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide >
                    <div className='course-bgtwo  flex flex-col justify-center'>
                        <h1 className='lg:text-4xl text-[#747ceb] '> Learn From Home</h1>
                        <p className='lg:text-2xl text-[#14184b] '>  
                            100% Online Courses
                        </p>
                        <p className='text-2xl text-[#747ceb]'>Join our courses now</p>
                        <br></br>
                        <div>
                            <Link to='/courses' >
                                <button className='button lg:w-72 w-52 mx-auto'>
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Join Now</span>
                                </button>
                            </Link>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide >
                    <div className='course-bgthree lg:h-[100vh] flex flex-col justify-center'>
                        <h1 className='lg:text-5xl text-yellow-300'> So Why are you waiting??</h1>
                        <p className='lg:text-2xl text-yellow-200'> Join now and get 30 % Discout</p>
                        <p className='text-2xl text-white font-bold'> Promo Code: <span className='text-xl te'>PED30%</span></p>
                        <br></br>
                        <div>
                            <Link to='/courses' >
                                <button className='button lg:w-72 w-52 mx-auto'>
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Join Now</span>
                                </button>
                            </Link>
                        </div>

                    </div>

                </SwiperSlide>
            </Swiper>
            {/* slider section end */}

            {/* this section is for upcoming course */}
            <section className=' m-5 bg-[#ACB0EF] p-5'>
                <h1 className='lg:text-5xl text-xl'>A broad selection of New courses Coming Soon</h1>
                <div>
                    <ul className='flex justify-around flex-wrap mt-5'>
                        <Link className='btn btn-outline w-80 ' > Graphic Desing </Link>

                        <Link className='btn btn-outline w-80'> Mobile Development </Link>
                        <Link className='btn btn-outline w-80'> Data Science </Link>
                        <Link className='btn btn-outline w-80 lg:mt-5'> Digital Marketing </Link>
                    </ul>
                </div>
            </section>

            <section className=' mt-10 b shadow-2xl  mx-auto p-5  h-[90%]'>
                <h1 className='lg:text-5xl mb-2'> What You Will Get Form Course</h1>
                <div className=' flex justify-between flex-col '>
                    <p className='font-bold text-xl'> Learn in-demand skills with over  204 video courses</p>
                    <p className='font-bold text-xl'>Choose courses taught by real-world experts</p>
                    <p className='font-bold text-xl'>Learn at your own H0me, with lifetime access on any
                        device
                    </p>
                </div>
            </section>



            <section className='m-10 bg-[#ACB0EF]'>
                <div className=' flex flex-col lg:flex-row justify-around border   shadow-2xl '>
                    <div>
                        <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="" className='h-[90%] w-[90%] mx-auto ' />
                        <p className='text-2xl'> MR:C</p>
                    </div>
                    <div>
                        <h1 className=' lg:text-5xl text-xl'> Instructor</h1>
                        <p className=' lg:w-96 lg:text-2xl'>
                            Become an instructor
                            You can aslo earn money by teaching online courses after you have learned from our courses
                            said by MR:C , One of our instructors,
                        </p>
                        <button className='btn btn-success'> Join Now?</button>
                        <p className='mt-5'> Get 30% Dicount now </p>
                        <p> SO, What are you waiting for?</p>
                    </div>



                </div>
            </section>
            {/* upcoming course end*/}
                 
        


        </div>
    );
};

export default Home;