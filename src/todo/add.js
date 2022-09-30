import { nanoid } from "nanoid"
import { useState } from "react";
import { useSelector } from "react-redux";
import { addTodoHandle } from "../components/utils"

function AddTodo(){

    const [todo, setTodo] = useState('')
    const { user } = useSelector(state => state.auth)

    const submitHandle = e => {
        e.preventDefault()
        addTodoHandle({
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id
        })
        setTodo('')
    }

    return(
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="add todo"/>
            <button disabled={!todo || !user} type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;