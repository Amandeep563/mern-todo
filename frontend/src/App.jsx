import { useEffect, useState } from "react";
import TodoForm from "./components/TodoFrom";
import TodoList from "./components/TodoList";
import api from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await api.get("/todos");
      console.log(res.data);
      setTodos(res.data);
    } catch (err) {
      console.error("Error Fetching Data", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  //add todo

  const handleAdd = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  //delete

  const handleDelete = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Error deleting todo", err);
    }
  };

  //Toggle todo

  const handleToggle = async (id, completed) => {
    try {
      const res = await api.put(`/todos/${id}`, { completed });
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? res.data : todo))
      );
    } catch (error) {
      console.log("Toggle faild ", error);
    }
  };

  //edit todo

  const handleEdit = async (id, oldTitle) => {
    const newTitle = prompt("Edit todo", oldTitle);
    if (!newTitle || newTitle.trim() === "") return;

    try {
      const res = await api.put(`/todos/${id}`, { title: newTitle });
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? res.data : todo))
      );
    } catch (err) {
      console.error("Edit failed", err);
    }
  };

  return (
    <div className="app-container">
      <h1 className="nes-text is-primary">Todo App 📝</h1>

      <div className="todo-container">
        <TodoForm onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
