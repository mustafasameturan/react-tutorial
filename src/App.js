import { useEffect, useState } from "react"; 
import { PostService, UserService } from "./services"
import UserList from "./pages/UserList";
import PostList from "./pages/PostList";

function App() {
  
  useEffect(() => {
    PostService.getPostDetail(1)
      .then(res => console.log(res))
    PostService.newPost({
      userId: 3,
      title: 'test',
      body: 'test'
    })
      .then(res => console.log(res))
  }, [])

  return (
    <>
        <UserList />
        <hr/>
        <PostList />
    </>

  );
}

export default App;
