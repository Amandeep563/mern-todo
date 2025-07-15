const TodoList = ({ todos = [], onDelete, onToggle, onEdit }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo._id, !todo.completed)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => onEdit(todo._id, todo.title)}>
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
            <button onClick={() => onDelete(todo._id)}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
