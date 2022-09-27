import { useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import { PostService } from "../../services"

function PostList(){
    const [posts, setPosts] = useState(false)

    useEffect(() => {
        PostService.getPosts()
            .then(res => setPosts(res))
    }, [])

    return(
        <>
            <Helmet>
                <title>Post List</title>
            </Helmet>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                {posts && posts.map(post => (
                    <tbody key={post.id}>
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>

    )

}

export default PostList;