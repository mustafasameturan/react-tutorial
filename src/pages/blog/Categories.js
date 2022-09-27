import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Categories(){
    return(
        <>
            <Helmet>
                <title>Categories</title>
            </Helmet>
            <h3>Blog Kategorileri</h3>
            <ul>
                <li>
                    <Link to="#">Software</Link>
                </li>
                <li>
                    <Link to="#">React</Link>
                </li>
                <li>
                    <Link to="#">.NET</Link>
                </li>
                <li>
                    <Link to="#">MSSQL</Link>
                </li>
            </ul>
        </>

    )
}

export default Categories;