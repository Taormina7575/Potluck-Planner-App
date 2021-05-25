import * as yup from 'yup';

export default yup.object().shape({
    username: yup
    .string()
    .required("username is required")
    .min(5, "username must be at least 5 characters"),
    password: yup
    .string()
    .required("password is required")
    .min(5, "password must be at least 5 characters"),
})