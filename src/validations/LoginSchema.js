import Yup from "./validation"

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required()
        .email(),
    password: Yup.string()
        .required()
        .min(4)
        .matches(/[a-zA-Z]/)
})