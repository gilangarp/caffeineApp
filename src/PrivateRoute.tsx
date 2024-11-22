import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
}

export const PrivateRoute = ({ element, isAuthenticated }: PrivateRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return <>{element}</>;
};
