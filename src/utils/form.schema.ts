import * as Yup from "yup";

export const schemaLoginUser = Yup.object().shape({
  email: Yup.string()
    .required("E-mail name required")
    .min(4, "E-mail name is too short")
    .max(32, "E-mail name is too long"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Password is too short, must be 7-32 symbols")
    .max(32, "Password is too long, must be 7-32 symbols"),
});

export const schemaRegisterUser = schemaLoginUser.shape({
  name: Yup.string()
    .required("Login name required")
    .min(4, "Login name is too short")
    .max(32, "Login name is too long"),
});
