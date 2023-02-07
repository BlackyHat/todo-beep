import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "redux/auth/auth-operations";

import { Formik } from "formik";
import * as Yup from "yup";
import CustomToast from "components/Toast";
import {
  BestButton,
  BestField,
  BestForm,
  FormErrorMsg,
  InputItem,
  LinkToRegister,
} from "./LogInPage.styled";

const schemaAddContact = Yup.object().shape({
  email: Yup.string()
    .required("E-mail name required")
    .min(4, "E-mail name is too short")
    .max(32, "E-mail name is too long"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Password is too short, must be 7-32 symbols")
    .max(32, "Password is too long, must be 7-32 symbols"),
});

const initialValues = {
  email: "",
  password: "",
};

const LogInPage = () => {
  const dispatch = useDispatch();
  const { addToast } = CustomToast();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    resetForm();
    addToast({
      info: `Welcome back`,
      status: "success",
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaAddContact}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <BestForm>
          <InputItem>
            <BestField
              label="E-mail"
              type="email"
              name="email"
              required
              placeholder="input your e-mail"
            />
            <FormErrorMsg name="email" component="div" />
          </InputItem>
          <InputItem>
            <BestField
              label="Password"
              name="password"
              type="password"
              required
              placeholder="input your password"
            />
            <FormErrorMsg name="password" component="div" />{" "}
          </InputItem>

          <BestButton type="submit" disabled={isSubmitting}>
            Log in
          </BestButton>
          <LinkToRegister as={Link} to="/register">Create an account</LinkToRegister>
        </BestForm>
      )}
    </Formik>
  );
};

export default LogInPage;
