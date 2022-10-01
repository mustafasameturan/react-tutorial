import { Helmet } from "react-helmet";
import { Formik, Form  } from "formik"
import Input from "../../components/forms/Input";
import File from "../../components/forms/File";
import Checkbox from "../../components/forms/Checkbox";
import Textarea from "../../components/forms/Textarea";
import Select from "../../components/forms/Select";

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
                    about: '',
                    accept: false,
                    gender: 1,
                    skills: [],
                    avatar: ''
                }}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {({values}) => (
                    <Form>  
                        <Input name="name" label="Name-Surname" /><br />
                        <Textarea name="about" label="About" /><br />
                        <Select name="gender" label="Gender" options={[
                            { key: 1, value: 'Female'},
                            { key: 2, value: 'Male'}
                        ]}/><br />
                        <File name="avatar" label="Avatar" /><br />
                        <Checkbox name="accept" label="I accept the conditions!" /><br />
                        <button disabled={values.accept} type="submit">Send</button>

                        <pre>{JSON.stringify(values, 2, null)}</pre>
                    </Form>
                )}
            </Formik>

        </>
    )
}

export default Contact;