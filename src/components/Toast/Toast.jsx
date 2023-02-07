import PropTypes from "prop-types";

// import { useToast } from "@chakra-ui/react";
import { toast } from "react-toastify";

const CustomToast = () => {
  // const toast = useToast();
  // types are: "success", "info", "warning", "error"
  // const notify = () => toast("Wow so easy !");
  // <ToastContainer />;

  // toast("🦄 Wow so easy!", {
  // position: "top-right",
  // autoClose: 5000,
  // hideProgressBar: false,
  // closeOnClick: true,
  // pauseOnHover: true,
  // draggable: true,
  // progress: undefined,
  // theme: "light",
  // });
  const addToast = ({ info }) => {
    toast.success(info, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  addToast.propTypes = {
    info: PropTypes.string.isRequired,
  };

  return { addToast };
};

export default CustomToast;
