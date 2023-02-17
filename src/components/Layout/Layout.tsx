import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import { Container } from "./Layout.styled";

const Layout: React.FC = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
