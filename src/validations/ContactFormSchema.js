import Yup from "./validation"

export const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .required()
        .min(2),
    surname: Yup.string()
        .required()
        .min(2),
    age: Yup.number()
        .required()
        .min(10)
        .max(100),
    about: Yup.string()
        .required()
        .min(5),
    gender: Yup.string()
        .required(),
    accept: Yup.boolean()
        .oneOf([true]),
    avatar: Yup.mixed()
        .test({
            message: "You must choose an avatar.",
            test: file => file?.name
        })
})