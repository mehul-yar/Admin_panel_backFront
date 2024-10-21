// import { useContext } from "react";
// import { AuthContext } from "./App"; // Import the context from App
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useContext(AuthContext);

//   // If the user is not authenticated, redirect them to the login page
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   // If the user is authenticated, allow them to proceed
//   return <Outlet />;
// };

// export default ProtectedRoute;


import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./App"; 

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;




