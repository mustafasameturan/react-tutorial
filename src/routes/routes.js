import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home";
import HomeLayout from "../pages/home/HomeLayout"
import Contact from "../pages/contact/Contact";
import BlogLayout from "../pages/blog";
import Blog from "../pages/blog/Blog";
import Categories from "../pages/blog/Categories";
import Page404 from "../pages/404/Page404";
import Blog404 from "../pages/blog/Blog404";
import Profile from "../pages/profile/Profile";
import Blogpost from "../pages/blog/Blogpost";
import PrivateRoute from "../components/privateRoute";
import AuthLayout from "../pages/auth/AuthLayout";
import Login from "../pages/auth/Login";
import ApiLayout from "../pages/api";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index={true} element={<Home />} />
                    <Route path="contact" element={<Contact />}/>

                    <Route path="blog" element={<BlogLayout />}>
                        <Route index={true} element={<Blog />}/>
                        <Route path="categories" element={<Categories />}/>
                        <Route path="blogpost/:url/:id" element={<Blogpost />}/>
                        <Route path="*" element={<Blog404 />}/>
                    </Route>
                    <Route path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>}/>
                    
                    <Route path="api" element={<ApiLayout />}>
                        <Route index={true} />
                    </Route>
                </Route>
                  
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />}/>
                </Route>

                <Route path="*" element={<Page404 />}/>
            </Routes>
        </>

    )
}

export default AppRoutes;