import { Link } from "react-router-dom";

function Page404(){
    return(
        <div>
            <h1>We couldn't find the page you were looking for :( </h1>
            <Link to="/">Return The Home Page</Link>
        </div>
    )
}

export default Page404;