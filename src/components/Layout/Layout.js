import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { AppBar } from "components/AppBar/AppBar";

const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;