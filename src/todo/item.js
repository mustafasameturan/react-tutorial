function TodoItem({ todo, user, setTodos, setModal}){
    const deleteHandle = () => {
        setTodos(todos => todos.filter(t => t.id !== todo.id))
    }

    const editHandle = () => {
        setModal({
            name: 'edit-todo',
            data: todo
        })
    }

    return (
        <li>
            <span style={{textDecoration: todo.done ? 'line-throught': false}}>
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