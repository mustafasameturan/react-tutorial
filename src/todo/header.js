function Header({user, setUser}){

    const loginHandle = user =>{
        setUser(user)
    }

    const logoutHandle = () =>{
        setUser(false)
    }

    return(
        <header className="header">
            <h2>TodoApp</h2>
            {!user && (
                <nav>
                    <button onClick={() => loginHandle({id: 1, username: 'mystic'})}>login with mystic</button>&nbsp;&nbsp;
                    <button onClick={() => loginHandle({id: 2, username: 'mustafasamet'})}>login with mustafasamet</button>
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