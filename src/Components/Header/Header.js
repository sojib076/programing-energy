import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContex } from '../../Contexs/UserContext';
import { MoonIcon ,SunIcon} from '@heroicons/react/24/solid'


const Header = () => {
    const { user, logout, loading } = useContext(authContex)
               const [dark,setDark]=useState(false) 
    function isdark(e) {
        setDark(!dark)
    }

    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to={'/home'}>home </Link></li>
                            <li><Link to={'/courses'}>Courses</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/faq'}>FAQ</Link></li>
                        </ul>
                    </div>
                    {/* A fancy name for website */}
                    <Link to={'/home'} >

                        <span className="text-lg font-bold text-slate-500"> Progaming Edu</span>
                    </Link>
                </div>
                <div onClick={isdark}>
                           { 
                                 dark ? <MoonIcon className='w-5 h-5'></MoonIcon> : <SunIcon className='w-5 h-5'></SunIcon>
                           }
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='btn btn-outline' > <Link to={'/home'}>home </Link></li>

                        <li className='ml-1'><Link to={'/courses'}>Courses</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/faq'}>FAQ</Link></li>

                    </ul>

                </div>
                {
                    user?.uid ?

                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">

                                        <img src={user?.photoURL} alt="" title={user?.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between" >
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li> <button onClick={logout}> Logout</button>  </li>
                                </ul>
                            </div>
                        </div> : <>
                            <li><Link to={'/signup'}>Sign Up</Link></li>

                            <li className='ml-4'><Link to={'/login'}>Login</Link></li>
                        </>
                }
            </div>

        </div>
    );
};

export default Header;