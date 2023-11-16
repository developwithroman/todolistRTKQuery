import { useState } from "react";
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "./todoSlice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const handleSubmit = (e) => {
    console.log("here");
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false });
    setNewTodo("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="formfield">
          <label htmlFor="new-todo">Enter new todo items</label>
          <input
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
        {isSuccess &&
          todos.map((todo) => (
            <article className="todos" key={todo.id}>
              <div className="todo">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  id={todo.id}
                  onChange={() =>
                    updateTodo({ ...todo, completed: !todo.completed })
                  }
                />
                <label htmlFor={todo.id}>{todo.title}</label>
              </div>
              <button
                className="trash"
                onClick={() => deleteTodo({ id: todo.id })}
              >
                X
              </button>
            </article>
          ))}
        {isError && error}
      </div>
    </section>
  );
};

export default TodoList;
