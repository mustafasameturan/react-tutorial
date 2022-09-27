import { nanoid } from "nanoid"
import { useState } from "react";;

function AddTodo({setTodos, user}){

    const [todo, setTodo] = useState('')
    const submitHandle = e => {
        e.preventDefault()
        setTodos(todos => [{
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id
        }, ...todos])
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