import { useAuth } from "../../hooks";
import ButtonTheme from "../ButtonTheme";
import UserMenu from "../UserMenu/UserMenu";
import { BestLink, Header, HomeLink, Navigation, Title } from "./AppBar.styled";

const AppBar: React.FC = () => {
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

export default AppBar;
