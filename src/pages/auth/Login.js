import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate()
    const location = useLocation()
    const { setUser } = useAuth()
    const user = {
        username: 'mystic',
        password: '123'
    }

    const loginHandle = () =>{
        setUser(user)
        navigate(location?.state?.return_url || '/' , {
            replace: true
        })
    }

    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={loginHandle}>Login</button>
        </div>
    )
}

export default Login;