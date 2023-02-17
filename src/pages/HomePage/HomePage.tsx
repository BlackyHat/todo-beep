import { Box } from "./HomePage.styled";

const HomePage: React.FC = () => {
  return (
    <Box>
      <h1>Welcome to Todo Beep app</h1>
      <p>This app created by using react-create-app.</p>
      <h2>Using next features:</h2>
      <p>React.js, React-router-dom,</p>
      <p>Styled Components, TypeScript</p>
      <p>Redux-toolkit, AsyncThunk, </p>
      <p>Google Firebase, Auth ...</p>
    </Box>
  );
};

export default HomePage;
