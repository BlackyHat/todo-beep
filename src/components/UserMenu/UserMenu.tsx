import { useAppDispatch } from "hooks/hooks";
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/auth/auth-operations";
import { ImExit } from "react-icons/im";
import { Box, Text, Button, ButtonLogOut, Show, Hide } from "./UserMenu.styled";

const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const hadleLogOut = () => dispatch(logOut());
  return (
    <Box>
      <Show>
        <Button aria-label="log out" onClick={hadleLogOut}>
          <ImExit size={18} />
        </Button>
      </Show>

      <Hide>
        <Text>{user.name} </Text>
        <ButtonLogOut type="button" onClick={hadleLogOut}>
          Log Out <ImExit size={18} />
        </ButtonLogOut>
      </Hide>
    </Box>
  );
};

export default UserMenu;
