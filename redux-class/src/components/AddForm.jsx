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
    }
    const changeHandler = (event) => {
        setTask(event.target.value);
    }    

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={task} onChange={changeHandler} />
        <button>Add Todo</button>
      </form>
    </>
  );
}
