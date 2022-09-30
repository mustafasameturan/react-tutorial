import { useSelector } from "react-redux"
import { loginHandle, logoutHandle } from "../components/utils"

function Header(){

    const { user } = useSelector(state => state.auth)

    const login = user =>{
        loginHandle(user)
    }

    return(
        <header className="header">
            <h2>TodoApp</h2>
            {!user && (
                <nav>
                    <button onClick={() => login({id: 1, username: 'mystic'})}>login with mystic</button>&nbsp;&nbsp;
                    <button onClick={() => login({id: 2, username: 'mustafasamet'})}>login with mustafasamet</button>
                </nav>
            )}
            {user && (
                <nav>
                    Welcome, {user.username}&nbsp;
                    <button onClick={logoutHandle}>Çıkış Yap</button>
                </nav>
            )}
        </header>
    )
}

export default Header;