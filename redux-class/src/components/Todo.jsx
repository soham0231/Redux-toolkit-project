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
      <h3 className="font-serif font-seimibold text-3xl my-10">Todos List App</h3>
      <ul className="max-w-md mx-auto">
        {todos.todos.map((todo) => (
         <li
            className={`flex items-center bg-white p-3 my-3 rounded shadow transition-all ${
             todo.isDone ? "opacity-60" : "opacity-100"
             }` }
          >

            <span
               className={`flex-1 text-base transition-all ${
              todo.isDone
              ? "line-through text-gray-400 italic"
              : "text-gray-800 font-medium"
             }`}
           >
           {todo.task}
           </span>

            <button
              onClick={() => clickhandler(todo.id)}
              className="mx-8 my-2 bg-red-500 text-white border border-black rounded h-8 w-15 shadow-xl"
            >
              Delete
            </button>

            <button onClick={() => clickhandlerDone(todo.id)}
              className=" bg-red-500 text-white rounded h-8 w-30 border border-black rounded shadow-xl">
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
