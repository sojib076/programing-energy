import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContex } from '../../Contexs/UserContext';

const PrivateRoute = ({children}) => {
  
    let location = useLocation();
   const {user,loading}= useContext(authContex)
   if (loading) {
      return <h1>Loading</h1>
   }
   if (user) {
    return children
   }else{

    return <Navigate to="/login" state={{ from: location }} replace />;
   }
};

export default PrivateRoute;