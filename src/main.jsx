import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { todoSlice } from "./features/todos/todoSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={todoSlice}>
    <App />
  </ApiProvider>
);
