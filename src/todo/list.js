import { useSelector } from "react-redux";
import TodoItem from "./item";

function TodoList(){

    const { todos } = useSelector(state => state.todo)

    return(
        <ul>
            {todos.map((todo, key) => <TodoItem key={key} todo={todo}/>)}
        </ul>
    )
}

export default TodoList;