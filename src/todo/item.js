import { useSelector } from "react-redux"
import { deleteTodoHandle, modalOpen } from "../components/utils"

function TodoItem({ todo }){

    const { user } = useSelector(state => state.auth)

    const deleteHandle = () => {
        deleteTodoHandle(todo.id)
    }

    const editHandle = () => {
         modalOpen('edit-todo', todo)
    }

    // {textDecoration: todo.done ? 'line-throught': false}

    return (
        <li>
            <span style={{background: todo.done ? 'red': false}}>
                {todo.title} - {todo.user} - {todo.id}
            </span>
            {todo.user === user.id && (
                <>
                    &nbsp;&nbsp;
                    <button onClick={editHandle}>Düzenle</button>
                    &nbsp;
                    <button onClick={deleteHandle}>Sil</button>
                </>
            )}
        </li>
    )
}

export default TodoItem;