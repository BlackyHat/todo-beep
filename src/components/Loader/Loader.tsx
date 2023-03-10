import { MutatingDots } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#0d0d0d"
      secondaryColor="#000000"
      radius="12"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ margin: "auto" }}
      wrapperClass="Loader"
      visible={true}
    />
  );
};

export default Loader;
