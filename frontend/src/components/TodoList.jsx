const TodoList = ({ todos = [], onDelete, onToggle, onEdit }) => {
  return (
    <ul
      className="nes-container with-title is-centered is-rounded"
      style={{ padding: "1rem" }}
    >
      <p className="title">Todos</p>
      {todos.map((todo) => (
        <li
          key={todo._id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          {/* Checkbox + Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label>
              <input
                type="checkbox"
                className="nes-checkbox is-dark"
                id={`checkbox-${todo._id}`}
                checked={todo.completed}
                onChange={() => onToggle(todo._id, !todo.completed)}
              />
              <span
                style={{ marginLeft: "1.2rem" }}
                className="nes-text is-white"
              >
                {todo.title}
              </span>
            </label>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => onEdit(todo._id, todo.title)}
              className="nes-btn is-warning"
              style={{ marginRight: "5px" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="oi-edit">
                  <path
                    className="oi-vector"
                    d="M4 20V16L17 3L21 7L8 20H4Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="oi-line"
                    d="M14 6L18 10"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
            <button
              onClick={() => onDelete(todo._id)}
              className="nes-btn is-error"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="oi-delete">
                  <path
                    className="oi-vector"
                    d="M5 7L5.93366 20.0712C5.97104 20.5946 6.40648 21 6.93112 21H17.0689C17.5935 21 18.029 20.5946 18.0663 20.0712L19 7"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="oi-vector"
                    d="M3 7H21"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="oi-vector"
                    d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="oi-line"
                    d="M10 11V17"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="oi-line"
                    d="M14 11V17"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
