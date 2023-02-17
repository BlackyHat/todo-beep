import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import { RouteProps } from "types/data";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
}: RouteProps) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : <Component />;
};
