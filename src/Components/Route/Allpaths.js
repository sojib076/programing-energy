import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../Blog/Blog"
import Courseinfo from "../Courseinfo/Courseinfo"
import Courses from "../Courses/Courses"
import Error from "../error.js/Error"
import Home from "../Home/Home"
import Login from "../Login/Login"
import PrivateRoute from "./PrivateRoute"
import Secure from "../Secure/Secure"
import Signup from "../Signup/Signup"
import FAQ from "../FAQ/FAQ"
import Profile from "../Profile/Profile"

 export const sojib=createBrowserRouter([
    { path:'/' , element: <Main/>, children: [ 
        { path: '/home', element: <Home/> },
        { path: '/', element: <Home/> },
        { path: '/login', element: <Login/> },
        { path: '/signup', element: <Signup/> },
        { path: '*', element: <Error/> },
          {path:'/courses', loader: ()=>{   
          return fetch('https://assingment-server.vercel.app/courses')
          } ,element:<Courses></Courses> },
          {path:'blog', element:<Blog> </Blog>},
          {path:'/faq', element:<FAQ></FAQ>},
        { path:'checkout/:id', 
        loader:({params})=>{ 
          return fetch(`https://assingment-server.vercel.app/details/${params.id}`)
        },
        element:<PrivateRoute> <Secure> </Secure> </PrivateRoute> },
        {path:'course/:id', 
        loader:({params})=>{ 
          return fetch(`https://assingment-server.vercel.app/details/${params.id}`)
        }, 
        element:<Courseinfo></Courseinfo> },
        {path:'profile', element:<PrivateRoute> <Profile></Profile> </PrivateRoute> }
        
    ] }])