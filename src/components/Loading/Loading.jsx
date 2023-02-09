import { RevolvingDot } from "react-loader-spinner";
import { Flex } from "./Loading.styled";
const Loading = () => {
  return (
    <Flex>
      <RevolvingDot
        height="300"
        width="300"
        radius="24"
        color="#55adb8"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Flex>
  );
};

export default Loading;
