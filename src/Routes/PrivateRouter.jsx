import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

 
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRouter;
