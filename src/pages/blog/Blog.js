import { Link } from "react-router-dom";
import { url } from "../../routes/utils";

function Blog(){

    const blogposts = [
        {
            id: 1,
            title: 'Yazılım Blogpost',
            url: 'blogpost-1'
        },
        {
            id: 2,
            title: '.NET Blogpost',
            url: 'blogpost-2'
        },
        {
            id: 3,
            title: 'React Blogpost',
            url: 'blogpost-3'
        },
        {
            id: 4,
            title: 'MSSQL Blogpost',
            url: 'blogpost-4'
        }
    ]


    return(
        <>
            <ul>
                <li>
                    <Link to={url('home.blog.categories')}>Categories</Link>
                </li>
                {blogposts.map(post => (
                    <li key={post.id}>
                        <Link to={url('home.blog.blogpost', {
                            id: post.id,
                            url: post.url
                        })}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Blog;