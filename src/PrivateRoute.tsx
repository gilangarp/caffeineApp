import React from "react";
import { Navigate } from "react-router-dom";
import { useStoreSelector } from "./hooks/useStore";
/* import { jwtDecode } from 'jwt-decode'
 */
interface PrivateRouteProps {
  children: React.ReactNode;
  to: string;
  requiredRoles: string[];
}

export const PrivateRoute = ({
  children,
  to,
  requiredRoles,
}: PrivateRouteProps) => {
  const { token, role } = useStoreSelector((state) => state.auth);

  if (!token) {
    return <Navigate to={to} replace />;
  }

  if (!role || !requiredRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
