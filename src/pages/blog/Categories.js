import { Link } from "react-router-dom";

function Categories(){
    return(
        <>
            <h3>Blog Kategorileri</h3>
            <ul>
                <li>
                    <Link to="#">Yazılım</Link>
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