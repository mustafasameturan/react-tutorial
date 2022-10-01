import { useSelector } from "react-redux"
import { changeLanguage, changeTheme } from "../../components/utils"

function Header(){

    const { theme } = useSelector(state => state.theme)
    const { language } = useSelector(state => state.language)

    return(
        <>
            <header>
                <span style={{background: theme === 'Dark' ? "black" : "white", color: theme === 'Dark' ? "white" : "black"}}>
                    {theme}&nbsp;
                    <button onClick={changeTheme}>Change Theme</button>
                </span>
                &nbsp;&nbsp;
                <span>
                    {language}&nbsp;
                    <button onClick={changeLanguage}>Change Language</button>
                </span>
                <hr/>
            </header>
        </>
    )
}

export default Header;