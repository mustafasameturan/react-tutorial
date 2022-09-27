import { Outlet } from "react-router-dom";

function ApiLayout(){
    return(
        <>
            <h1>API List Page</h1>
            <Outlet />
        </>
    )
}

export default ApiLayout;