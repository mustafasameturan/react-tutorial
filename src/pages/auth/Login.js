import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";

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
                username : '',
                password: ''
            }}
            onSubmit= {values => {
                setUser(values)
                navigate(location?.state?.return_url || '/' , {
                    replace: true
                })
            }}
            >
                {(props) => (
                    <Form>
                        <label htmlFor="">Username</label><br />
                        <Field name="username" /><br />

                        <label htmlFor="">Password</label><br />
                        <Field name="password" type="password" /><br />
                        <button type="submit">Giriş Yap</button>
                     </Form>
                )}          
            </Formik>
        </div>
    )
}

export default Login;