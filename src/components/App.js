import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

import { Layout } from "components/Layout/Layout";
import { Loading } from "components/Loading/Loading";
import { auth } from "../firebase";
import { relogin } from "redux/auth/auth-slice";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const Tasks = lazy(() => import("pages/Tasks"));
const LogInPage = lazy(() => import("pages/LoginPage"));
const Register = lazy(() => import("pages/Register"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux,
        // store the current user in the state
        dispatch(
          relogin({
            email: userAuth.email,
            name: userAuth.email.split("@")[0],
          })
        );
      }
    });
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
            <RestrictedRoute component={LogInPage} redirectTo="/todos" />
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
