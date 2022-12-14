import React from 'react';
import { useContext } from 'react';
import { authContex } from '../../Contexs/UserContext';
import google from "../img/google.png"
import facebook from "../img/facebook.svg"
import loginpic from "./img/undraw_Sign_in_re_o58h.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Signup = () => {
  const { user, createUser, googlepop, facebookPop, userproflie } = useContext(authContex)
  console.log();

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";


  const hadelgoogle = () => {
    googlepop()
      .then(result => {
        navigate(from, { replace: true });
      })

  }
  const handelfacebook = () => {
    facebookPop()
      .then(result => {
        navigate(from, { replace: true });
      })
  }

  const handelsubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value;
    const password = e.target.password.value;
    const img = e.target.image.value;
    createUser(email, password)
      .then((userCredential) => {
        userproflie(name, img)

        navigate(from, { replace: true });
      }
      )
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Wrong password");
        } else if (error.code === "auth/user-not-found") {
          toast.error("User not found");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email");
        }
      })

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">


            <img src={loginpic} alt="" />

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handelsubmit}>
              <h1 className='text-2xl'>Sign Up NOW</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Full Name</span>
                </label>
                <input type="text" placeholder=" Full Name" className="input input-bordered" name='name' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">IMG</span>
                </label>
                <input type="text" placeholder="IMG" className="input input-bordered" name='image' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" name='email' />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                <label className="label">

                  <Link to={'/login'}>  Have a Acoount? Login </Link>
                </label>

              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className='flex m-4'>
                <button
                  onClick={handelfacebook}
                  className="btn btn-circle bg-white border-none hover:bg-blue-800"
                >

                  <img src={facebook} alt="" />
                </button>
                <button
                  onClick={hadelgoogle}
                  className="btn btn-circle bg-white border-none hover:bg-blue-800"
                >

                  <img src={google} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;