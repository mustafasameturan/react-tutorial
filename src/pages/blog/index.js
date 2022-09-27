import { Outlet } from "react-router-dom";


function BlogLayout(){
    return(
        <div>
            <h1>Blog Sayfası</h1>
            <Outlet />
        </div>
    )
}

export default BlogLayout;