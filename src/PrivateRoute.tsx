import { Navigate, To } from "react-router-dom";
import { useStoreSelector } from "./redux/hook";

interface PrivateRouteProps {
  children: JSX.Element;
  to: To;
}

export const PrivateRoute = ({ children, to }: PrivateRouteProps) => {
  const { token } = useStoreSelector((state) => state.auth);
  if (!token) return <Navigate to={to} replace />;
  return <>{children}</>;
};
