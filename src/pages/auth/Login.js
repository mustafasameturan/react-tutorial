import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";
import Input from "../../components/forms/Input";
import Password from "../../components/forms/Password";
import { LoginSchema } from "../../validations";

function Login(){

    const navigate = useNavigate()
    const location = useLocation()
    const { setUser } = useAuth()
    
    return(
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h3>Login Page</h3>

            {/* Formik Field Sample */}
            <Formik initialValues={{
                email : '',
                password: ''
            }}
            onSubmit= {values => {
                setUser(values)
                navigate(location?.state?.return_url || '/' , {
                    replace: true
                })
            }}
                validationSchema={LoginSchema}
            >
                {(props) => (
                    <Form>
                        <Input name="email" label="E-Mail"/><br />
                        <Password name="password" label="Password" /><br />
                        <button type="submit">Giriş Yap</button>
                     </Form>
                )}          
            </Formik>
        </div>
    )
}

export default Login;