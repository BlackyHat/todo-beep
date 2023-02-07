import { RevolvingDot } from "react-loader-spinner";
export const Loading = () => {
  return (
    <RevolvingDot
      height="100"
      width="100"
      radius="6"
      color="#55adb8"
      secondaryColor=""
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
