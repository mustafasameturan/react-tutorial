import { Link } from "react-router-dom";
import { url } from "../../routes/utils";
import { Helmet } from "react-helmet";

function Api(){
    return (
        <>
            <Helmet>
                <title>API</title>
            </Helmet>
            <ul>
                <li>
                        <Link to={url('home.api.userList')}>User List</Link>
                </li> 
                <li>
                        <Link to={url('home.api.postList')}>Post List</Link>
                </li> 
            </ul>
        </>

    )
}

export default Api;