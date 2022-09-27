import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet";

function Profile(){
    const { user, setUser} = useAuth()

    const logoutHandle = () => {
        setUser(false)
    }

    return(
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <h1>Profile Page</h1>
            {!user && <Link to="/auth/login">Login</Link>}
            {user && <button onClick={logoutHandle}>Logout</button>}
        </>
    )
}

export default Profile;