import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const {loading, user} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return toast.promise({
            pending:"Loading...",
            success:"Promise has resolved!",
            error:"Request timeout!"
        });
    };
    if(!user){
        return  <Navigate to="/login" state={{ from: location }} replace />;
    };
    return children;
};

export default PrivateRoute;