import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContex } from '../../Contexs/UserContext';

const PrivateRoute = ({children}) => {
   //  this a private route for secure pages
    let location = useLocation();
   const {user,loading}= useContext(authContex)
   // this for loading the user data from api 
   if (loading) {
      return <h1>Loading</h1>
   }
   // if user is not logged in then redirect to login page
   if (user) {
    return children
   }else{

    return <Navigate to="/login" state={{ from: location }} replace />;
   }
};

export default PrivateRoute;