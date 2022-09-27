import { useState } from "react";
import AddTodo from "../../todo/add.js";
import Header from "../../todo/header";
import TodoList from "../../todo/list"
import Modal from "../../todo/modal.js";

function TodoApp(){

    const [user, setUser] = useState(false)
    const [todos, setTodos] = useState([])
    const [modal, setModal] = useState(false)

    const close = () => setModal(false)

    return (
        <>
        {modal && <Modal name={modal.name} data={modal.data} close={close} />}
            <Header user={user} setUser={setUser}/>
            <hr/>
            <AddTodo setTodos={setTodos} user={user}/>
            <TodoList setModal={setModal} todos={todos} setTodos={setTodos} user={user} />
        </>
    )
}

export default TodoApp;