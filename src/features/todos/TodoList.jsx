import { useState } from "react";
import { useGetTodosQuery } from "./todoSlice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="formfield">
          <label htmlFor="new-todo">Enter new todo items</label>
          <input
            type="checkbox"
            name="new-todo"
            id="new-todo"
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <div className="formfield">
          <button className="submit"> Submit</button>
        </div>
      </form>
      <div className="table-layout">
        {isLoading && <p>Content is Loading ...</p>}
        {isSuccess && JSON.stringify(todos)}
        {isError && error}
      </div>
    </section>
  );
};

export default TodoList;
