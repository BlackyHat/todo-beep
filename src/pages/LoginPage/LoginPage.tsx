import { Link } from "react-router-dom";
import { logIn } from "redux/auth/auth-operations";

import { Formik, FormikHelpers } from "formik";
import {
  BestButton,
  BestField,
  BestForm,
  FormErrorMsg,
  InputItem,
  LinkToRegister,
} from "./LoginPage.styled";
import { useAppDispatch } from "hooks/hooks";
import { IRegisterValues } from "types/data";
import { schemaLoginUser } from "utils/form.schema";

const initialValues: IRegisterValues = {
  email: "",
  password: "",
};

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: IRegisterValues,
    { resetForm }: FormikHelpers<IRegisterValues>
  ) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaLoginUser}
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
          <LinkToRegister as={Link} to="/register">
            Create an account
          </LinkToRegister>
        </BestForm>
      )}
    </Formik>
  );
};

export default LoginPage;
