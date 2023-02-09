import { ButtonTheme } from "components/ButtonTheme/ButtonTheme";
import UserMenu from "components/UserMenu";
import { useAuth } from "hooks/useAuth";
import { BestLink, Header, HomeLink, Navigation, Title } from "./AppBar.styled";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Title>
        <HomeLink to="/">BeepPlan</HomeLink> <ButtonTheme />
      </Title>
      <Navigation>
        {isLoggedIn ? (
          <>
            <BestLink to="/todos">Tasks</BestLink>
            <UserMenu />
          </>
        ) : (
          <BestLink to="/login">Login</BestLink>
        )}
      </Navigation>
    </Header>
  );
};
