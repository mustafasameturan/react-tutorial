import HomeLayout from "../pages/home/HomeLayout";
import Home from "../pages/home/Home";
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
import Api from "../pages/api/Api";
import ApiLayout from "../pages/api";
import UserList from "../pages/api/UserList"
import PostList from "../pages/api/PostList"

const routes = [
    {
        name : 'home',
        path : '/',
        element: <HomeLayout/>,
        children: [
            {
                name : 'index',
                index: true,
                element: <Home />
            },
            {
                name: 'contact',
                path: 'contact',
                element: <Contact />
            },
            {
                name: 'blog',
                path: 'blog',
                auth: true,
                element: <BlogLayout />,
                children : [
                    {
                        name: 'index',
                        index: true,
                        element: <Blog />
                    },
                    {
                        name: 'categories',
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        name: 'blogpost',
                        path: 'blogpost/:id/:url',
                        element: <Blogpost />
                    },
                    {
                        name: 'notFound',
                        path: '*',
                        element: <Blog404 />
                    }
                ]
            },
            {
                name: 'api',
                path: 'api',
                element: <ApiLayout />,
                children: [
                    {
                        name: 'index',
                        index: true,
                        element: <Api />
                    },
                    {
                        name: 'userList',
                        path: 'userList',
                        element: <UserList />
                    },
                    {
                        name: 'postList',
                        path: 'postList',
                        element: <PostList />
                    }
                ]
            },
            {
                name: 'profile',
                path: 'profile',
                auth: true,
                element:<Profile />
            }
        ]
    },
    {
        name: 'auth',
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                name: 'login',
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        name: 'notFound',
        path: '*',
        element: <Page404 />
    }
]

const authMap = routes => routes.map(route => {
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }

    if(route?.children){
        route.children = authMap(route.children)
    }

    return route
})

export default authMap(routes);