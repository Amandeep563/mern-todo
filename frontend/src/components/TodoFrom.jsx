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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <button type="submit">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="oi-add[plus,more]">
            <path
              className="oi-line"
              d="M12 5V19"
              stroke="#000000"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="oi-line"
              d="M19 12H5"
              stroke="#000000"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </form>
  );
}

export default TodoForm;
