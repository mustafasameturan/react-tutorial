import * as Yup from "yup"

Yup.setLocale({
    mixed: {
        required: "This field is required.",
        oneOf: "You must accept the conditions."
    },
    string: {
        min: "This field must be minimum ${min} character.",
        max: "This field must be maximum ${max} character.",
        email: "This field must be valid E-Mail.",
        matches: "The password can only contain latin letters."
    },
    number: {
        min: "Your age cannot be less than ${min} years old",
        max: "Your age cannot be more than ${max} years old"
    }
})

export default Yup