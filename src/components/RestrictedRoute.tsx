import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import { RouteProps } from "types/data";

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: RouteProps) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
};
