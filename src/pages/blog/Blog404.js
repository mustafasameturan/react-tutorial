import { Link } from "react-router-dom";

function Blog404(){
    return (
        <div>
            <h1>We couldn't find the page you were looking for blog :( </h1>
            <Link to="/blog">Return The Home Page</Link>
        </div>
    )
}

export default Blog404;