import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log('location',location);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <Navigate state={location.pathname} to="/login" />;

  return children;
};

export default PrivateRoute;