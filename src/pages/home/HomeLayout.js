import { NavLink, Outlet } from "react-router-dom";
import { url } from "../../routes/utils";

function HomeLayout(){
    return(
        <>
            <nav>
                <NavLink to={url('home')}>
                    Home Page
                </NavLink>
                &nbsp;&nbsp;
                <NavLink to={url('home.blog')}>
                    {({ isActive }) => (
                        <>
                        Blog
                        {isActive && '(Active)'}
                        </>
                    )}
                </NavLink>
                &nbsp;&nbsp;
                <NavLink to={url('home.profile')} style={( {isActive} ) => ({
                    backgroundColor : isActive ? 'red': 'transparent'
                })}>
                    Profile
                </NavLink>
                &nbsp;&nbsp;
                <NavLink to={url('home.api')} style={( {isActive} ) => ({
                    backgroundColor : isActive ? 'yellow': 'transparent'
                })}>
                    API
                </NavLink>
                &nbsp;&nbsp;
                <NavLink to={url('home.contact')} style={( {isActive} ) => ({
                    backgroundColor : isActive ? 'yellow': 'transparent'
                })}>
                    Contact
                </NavLink>
                &nbsp;&nbsp;
                <NavLink to={url('home.todoApp')} style={( {isActive} ) => ({
                    backgroundColor : isActive ? 'yellow': 'transparent'
                })}>
                    Todo App
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HomeLayout;