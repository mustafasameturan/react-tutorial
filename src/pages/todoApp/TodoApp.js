import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import AddTodo from "../../todo/add.js";
import Header from "../../todo/header";
import TodoList from "../../todo/list"
import Modal from "../../todo/modal.js";

function TodoApp(){

    //const [user, setUser] = useState(false)
    //const [todos, setTodos] = useState([])
    //const [modal, setModal] = useState(false)
    //const [language, setLanguage] = useState('tr')
    //const [dark, setDark] = useState('tr')

    //const close = () => setModal(false)
    const { open } = useSelector(state => state.modal)

    return (
        <>
        <Helmet>
            <title>Todo App</title>
        </Helmet>
        {open && <Modal />}
            <Header />
            <hr/>
            <AddTodo />
            <TodoList />
        </>
    )
}

export default TodoApp;