import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('token'); // Check if the user is logged in
  const userRole = localStorage.getItem('role'); // Get the user's role

  if (!token || !allowedRoles.includes(userRole)) {
    return <Navigate to="/Unauthorized" replace />; // Redirect unauthorized users
  }

  return <Outlet />; // Render child routes
};

export default ProtectedRoute;
