import TodoItem from "./item";

function TodoList({user, setTodos, todos, setModal}){
    return(
        <ul>
            {todos.map((todo, key) => <TodoItem key={key} user={user} todo={todo} setTodos={setTodos} setModal={setModal}/>)}
        </ul>
    )
}

export default TodoList;