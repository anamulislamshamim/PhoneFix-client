import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const {loading, user} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <h2>Loading...</h2>
    };
    if(!user){
        return  <Navigate to="/login" state={{ from: location }} replace />;
    };
    return children;
};

export default PrivateRoute;