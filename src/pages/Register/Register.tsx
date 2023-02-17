import { register } from "redux/auth/auth-operations";
import { Link } from "react-router-dom";

import { Formik, FormikHelpers } from "formik";
import {
  BestButton,
  BestField,
  BestForm,
  FormErrorMsg,
  InputItem,
  LinkGoBack,
} from "./Register.styled";
import { useAppDispatch } from "hooks/hooks";
import { IRegisterValues } from "types/data";
import { schemaRegisterUser } from "utils/form.schema";

const initialValues: IRegisterValues = {
  name: "",
  password: "",
  email: "",
};

const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: IRegisterValues,
    { resetForm }: FormikHelpers<IRegisterValues>
  ) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaRegisterUser}
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

export default Register;
