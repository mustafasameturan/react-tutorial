//import AppRoutes from "./routes/routes"
import routes from "./routes/routes-two";
import { useRoutes } from "react-router-dom";

function App() {
  
  // useEffect(() => {
  //   PostService.getPostDetail(1)
  //     .then(res => console.log(res))
  //   PostService.newPost({
  //     userId: 3,
  //     title: 'test',
  //     body: 'test'
  //   })
  //     .then(res => console.log(res))
  // }, [])

  //return <AppRoutes />
  return useRoutes(routes)
}

export default App;
