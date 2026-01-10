import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const clickhandler = (id) => {
    console.log("clicked", id);
    dispatch(deleteTodo(id));
  };
  const clickhandlerDone = (id) => {
    console.log("marked as done", id);
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h3>Todos List App</h3>
      <ul>
        {todos.todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
              opacity: todo.isDone ? 0.6 : 1,
            }}
          >
            {todo.task}
            <button onClick={() => clickhandler(todo.id)}>Delete</button>
            <button onClick={() => clickhandlerDone(todo.id)}>
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
