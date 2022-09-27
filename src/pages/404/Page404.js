import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Page404(){
    return(
        <div>
            <Helmet>
                <title>404</title>
            </Helmet>

            <h1>We couldn't find the page you were looking for :( </h1>
            <Link to="/">Return The Home Page</Link>
        </div>
    )
}

export default Page404;