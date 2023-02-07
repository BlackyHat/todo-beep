import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import { Link } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
import CustomToast from "components/Toast";
import {
  BestButton,
  BestField,
  BestForm,
  FormErrorMsg,
  InputItem,
  LinkGoBack,
} from "./Register.styled";

const schemaAddContact = Yup.object().shape({
  name: Yup.string()
    .required("Login name required")
    .min(4, "Login name is too short")
    .max(32, "Login name is too long"),
  password: Yup.string()
    .required("Password required")
    .min(4, "Password is too short, min 4 digits")
    .max(32, "Password is too long, max 32 digits"),
  email: Yup.string()
    .required("E-mail required")
    .min(4, "E-mail is too short")
    .max(32, "E-mail is too long"),
});

const initialValues = {
  name: "",
  password: "",
  email: "",
};

const SignUp = () => {
  const dispatch = useDispatch();

  const { addToast } = CustomToast();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    resetForm();
    addToast({
      info: `${name.toUpperCase()} welcome to the app`,
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
              label="Login"
              type="text"
              name="name"
              required
              placeholder="input your login"
            />
            <FormErrorMsg name="name" component="div" />
          </InputItem>
          <InputItem>
            <BestField
              label="Password"
              name="password"
              type="password"
              required
              placeholder="input your password"
            />
            <FormErrorMsg name="password" component="div" />
          </InputItem>
          <InputItem>
            <BestField
              label="E-mail"
              name="email"
              type="email"
              required
              placeholder="input your e-mail"
            />
            <FormErrorMsg name="email" component="div" />
          </InputItem>

          <BestButton type="submit" disabled={isSubmitting}>
            Sign up
          </BestButton>
          <LinkGoBack as={Link} to="/login">
            Go Back
          </LinkGoBack>
        </BestForm>
      )}
    </Formik>
  );
};

export default SignUp;
