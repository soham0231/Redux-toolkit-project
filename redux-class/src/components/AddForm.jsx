import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };
  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="mt-30">
        <input
          type="text"
          value={task}
          onChange={changeHandler}
          className="border border-gray-300 px-3 py-2 rounded w-64 mr-4 mb-4"
        />

        <button className="bg-red-500 text-white px-4 py-2 rounded " >
          Add Todo
        </button>
      </form>
    </>
  );
}
