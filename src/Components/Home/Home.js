import AOS from 'aos';
import 'aos/dist/aos.css'; 

import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import 'swiper/css';
import { Link } from 'react-router-dom';


const Home = () => {
    AOS.init();
    return (
        <div className='overflow-hidden'>
            {/* this for swiper js to show slider */}
            <div className=' lg:flex justify-between banner lg:mt-5 p-5'>
                <div className='lg:w-[50%] '>
                    <div className=' mx-auto md:mt-[20%] lg:flex lg:flex-col justify-center items-center '>
                        <h1 className='text-5xl md:w-[60%] text-black font-bold text-center '> Wanted to Grow your Skills? </h1>
                        <h1 className=' mt-10'>
                            <span className='text-5xl font-bold '>Join Us</span> and Learn from the best<span />
                        </h1>
                    </div>
                    <button className=' bg-[rgb(7,104,255)] btn border-none mt-5 '> Learn More </button>
                </div >
                <div className='lg:w-[50%] w-[68%] mx-auto' data-aos="fade-up"  data-aos-delay="100" data-aos-easing="ease-in-out" >
                    <div className=' '>
                        <img src="https://themexriver.com/wp/avarton/wp-content/uploads/revslider/main-slider-1-11/slider-shape.png" alt="" />
                    </div>
                </div>
            </div>
            {/* slider section end */}

            {/* this section is for upcoming course */}
            <section className=' m-5 p-5'>
                <h1 className='lg:text-5xl text-2xl'>A broad selection of New courses Coming Soon</h1>
                <div>
                    <ul className='flex justify-around flex-wrap mt-5'>
                        <Link className='btn btn-outline w-80 ' data-aos="fade-up"  data-aos-easing="ease-in-out" > Graphic Desing </Link>

                        <Link className='btn btn-outline w-80'  data-aos="fade-up"  data-aos-easing="ease-in-out"  > Mobile Development </Link>
                        <Link className='btn btn-outline w-80' data-aos="fade-up"  data-aos-easing="ease-in-out" > Data Science </Link>
                        <Link className='btn btn-outline w-80 lg:mt-5'  data-aos="fade-up"  data-aos-easing="ease-in-out" > Digital Marketing </Link>
                    </ul>
                </div>
            </section>
            {/* What you get  */}
            <section className=' relative mt-10    mx-auto p-5  h-[90%]'>
                <h1 className='lg:text-5xl mb-2 text-3xl' data-aos="fade-right"  data-aos-easing="ease-in-out" > What You Will Get Form Course</h1>
                <div className=' flex justify-between flex-col'  data-aos="fade-left" data-aos-easing="ease-in-out" >
                    <p className='font-bold text-xl'> Learn in-demand skills with over  204 video courses</p>
                    <p className='font-bold text-xl'>Choose courses taught by real-world experts</p>
                    <p className='font-bold text-xl'>Learn at your own H0me, with lifetime access on any
                        device
                    </p>
                </div>
                <img src="https://eazybe.com/static/media/thumbup.9e599d7c.svg" alt="" srcset="" className='md:left-[92%]  left-[70%] relative' data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-delay="200"  />
            </section>

            <section>
                <section className="py-10 bg-[#9AB7D3] sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"  >How You will be a successfull Developer</h2>
                            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                                Remember One thing
                                Hard work is the key to success
                            </p>
                        </div>

                        <ul className="max-w-md mx-auto mt-16 space-y-12">
                            <li className="relative flex items-start">
                                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                    <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold text-black">Create a free account</h3>
                                    <p className="mt-4 text-base text-gray-600"> Then Enroll to our course
                                        and start learning from our courses
                                    </p>
                                </div>
                            </li>

                            <li className="relative flex items-start">
                                <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                    <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                    </svg>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold text-black">Build your first website</h3>
                                    <p className="mt-4 text-base text-gray-600"> Learn from zero and build your first website with us . Only Hard work</p>
                                </div>
                            </li>

                            <li className="relative flex items-start">
                                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                    <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-semibold text-black">Hardwork & Practice </h3>
                                    <p className="mt-4 text-base text-gray-600">
                                        Hardwork is the key to success,So keep practicing and you will be a successfull developer
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

            </section>

            {/* Succes section  */}
            <section>
                <section className="p-10 bg-gray-100 sm:py-10 lg:py-24">
                    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                            <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                            <div>
                                <h3 className="font-bold text-7xl">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 2+ </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                                <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-7xl">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium text-gray-900">Succesful student </p>
                                <p className="text-base mt-0.5 text-gray-500">In last 2 years</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-7xl">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                                </h3>
                                <p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
                                <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
            <div className='mt-10 h-[50%] w-[100%] '>
                <h1 className='text-2xl'> SO , What are you waiting for ?  </h1>
                <Link to={'/courses'}>  <button className='btn btn-success mt-5'> Enroll Now </button></Link>
                <img data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-delay="25"  src="https://eazybe.com/static/media/download_section_hand.236c118f.svg" alt="" srcset="" className='relative left-[55%]  h-[50%] w-[50%] ' />
            </div>

            {/*Review section   */}
            <section>
                <section className="py-10 bg-[#F7E1D3] sm:py-16 lg:py-20">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-5">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">What our Students say</h2>
                            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 px-4 mt-5 sm:px-0 xl:mt-10 xl:grid-cols-4 sm:grid-cols-2">
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                            <p className="text-sm text-gray-600 truncate">@darrels</p>
                                        </div>
                                        <a href="#" title="" className="inline-block text-sky-500">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            You made it so simple.  Awosome course , I have ever seen.

                                            <span className="block text-sky-500">#another</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                            <p className="text-sm text-gray-600 truncate">@darrels</p>
                                        </div>
                                        <a href="#" title="" className="inline-block text-sky-500">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            You made it so simple.  Awosome course , I have ever seen.

                                            <span className="block text-sky-500">#another</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                            <p className="text-sm text-gray-600 truncate">@darrels</p>
                                        </div>
                                        <a href="#" title="" className="inline-block text-sky-500">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            You made it so simple.  Awosome course , I have ever seen.

                                            <span className="block text-sky-500">#another</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                            <p className="text-sm text-gray-600 truncate">@darrels</p>
                                        </div>
                                        <a href="#" title="" className="inline-block text-sky-500">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            You made it so simple.  Awosome course , I have ever seen.

                                            <span className="block text-sky-500">#another</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                            <p className="text-sm text-gray-600 truncate">@darrels</p>
                                        </div>
                                        <a href="#" title="" className="inline-block text-sky-500">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            You made it so simple.  Awosome course , I have ever seen.

                                            <span className="block text-sky-500">#another</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                            <p className="text-sm text-gray-600 truncate">@darrels</p>
                                        </div>
                                        <a href="#" title="" className="inline-block text-sky-500">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            You made it so simple.  Awosome course , I have ever seen.

                                            <span className="block text-sky-500">#another</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg" alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                            <p className="text-sm text-gray-600 truncate">@darrels</p>
                                        </div>
                                        <a href="#" title="" className="inline-block text-sky-500">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            You made it so simple.  Awosome course , I have ever seen.

                                            <span className="block text-sky-500">#another</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="px-5 py-6">
                                    <div className="flex items-center justify-between">
                                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://i.ibb.co/d6Cbb5p/Firmware-amico.png" alt="" />
                                        <div className="min-w-0 ml-3 mr-auto">
                                            <p className="text-base font-semibold text-black truncate">Darrell Steward</p>
                                            <p className="text-sm text-gray-600 truncate">@darrels</p>
                                        </div>
                                        <a href="#" title="" className="inline-block text-sky-500">
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <blockquote className="mt-5">
                                        <p className="text-base text-gray-800">
                                            You made it so simple.  Awosome course , I have ever seen.

                                            <span className="block text-sky-500">#another</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

            </section>

      
            <section class="py-10 bg-white sm:py-16 lg:py-20">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-5">
                    <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                            I am making a cheap Course 
                            <span class="relative inline-block">
                                <span class="absolute inline-block w-full h-2 bg-[#DCB5B5] bottom-1.5"></span>
                                <span class="relative"> For the people  </span>
                            </span>
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 mt-8 md:mt-10 gap-y-6 md:grid-cols-2 gap-x-10">
                        <div>
                            <img class="w-full mx-auto sm:max-w-xs" src="https://i.ibb.co/bPm59C6/1671041849006.jpg" alt=""  />
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Hey! I am SOjib, founder of Programing Energy .</h3>
                            <p class="mt-4 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        

                            <h3 class="mt-8 text-lg font-semibold text-gray-900">How It will help</h3>
                            <p class="mt-4 text-lg text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-10 bg-[#95B1CC] sm:py-16 lg:py-20">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>

                    <div class="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="object-cover w-full h-full" src="https://i.ibb.co/d6Cbb5p/Firmware-amico.png" alt="" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> How to mange your remote team? </a>
                            </p>
                            <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
                        </div>
                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="object-cover w-full h-full" src="https://i.ibb.co/d6Cbb5p/Firmware-amico.png" alt="" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> How to mange your remote team? </a>
                            </p>
                            <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
                        </div>
                        <div>
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg" alt="" />
                            </a>
                            <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                            <p class="mt-6 text-xl font-semibold">
                                <a href="#" title="" class="text-black"> How to mange your remote team? </a>
                            </p>
                            <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                            <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;