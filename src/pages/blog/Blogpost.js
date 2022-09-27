import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

function Blogpost(){

    const {url, id} = useParams()

    return(
        <>
            <Helmet>
                <title>{url} Blogpost</title>
            </Helmet>
            <h3>Blogpost Page</h3>
            <h5>URL = {url}</h5>
            <h5>ID = {id}</h5>
        </>
    )
}

export default Blogpost;