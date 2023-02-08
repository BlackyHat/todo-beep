import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import { refreshUser } from "redux/auth/auth-operations";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

import Layout from "components/Layout";
import Loading from "components/Loading";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const Tasks = lazy(() => import("pages/Tasks"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const Register = lazy(() => import("pages/Register/Register"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/todos"
          element={<PrivateRoute component={Tasks} redirectTo="/login" />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/todos" />
          }
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={Register} redirectTo="/todos" />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
