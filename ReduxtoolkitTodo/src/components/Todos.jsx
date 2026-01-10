import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  const dispatch = useDispatch();

  return (
    <>
      <h3>Todos List App</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
