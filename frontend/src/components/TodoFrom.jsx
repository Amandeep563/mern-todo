import { useState } from "react";
import api from "../services/api";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !title.trim()) return;

    try {
      const res = await api.post("/todos", { title });
      onAdd(res.data);
      setTitle(""); // clear input
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="nes-field"
      style={{ marginBottom: "1rem", display: "flex", gap: "10px" }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="nes-input"
      />
      <button type="submit" className="nes-btn is-primary">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
