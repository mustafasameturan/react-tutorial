import { Helmet } from "react-helmet";
import { Formik, Form  } from "formik"
import Input from "../../components/forms/Input";
import InputNumber from "../../components/forms/InputNumber";
import File from "../../components/forms/File";
import Checkbox from "../../components/forms/Checkbox";
import Textarea from "../../components/forms/Textarea";
import Select from "../../components/forms/Select";
import { ContactFormSchema } from "../../validations";

function Contact(){
    return(
        <>
            <Helmet>
                <title>Contact Page</title>
            </Helmet>
            <h3>Contact Form</h3>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    about: '',
                    age: "",
                    accept: false,
                    gender: "",
                    skills: [],
                    avatar: ''
                }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={ContactFormSchema}
            >
                {({values}) => (
                    <Form>  
                        <Input name="name" label="Name" /><br />
                        <Input name="surname" label="Surname" /><br />
                        <InputNumber name="age" label="Age" /><br />
                        <Textarea name="about" label="About" /><br />
                        <Select name="gender" label="Gender" options={[
                            { key: 1, value: 'Female'},
                            { key: 2, value: 'Male'}
                        ]}/><br />
                        <File name="avatar" label="Avatar" /><br />
                        <Checkbox name="accept" label="I accept the conditions!" /><br />
                        <button  type="submit">Send</button>
                        {/* disabled={!values.accept} */}
                        <pre>{JSON.stringify(values, 2, null)}</pre>
                    </Form>
                )}
            </Formik>

        </>
    )
}

export default Contact;