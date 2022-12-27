const TodoList = ({ todos, deleteFunc }) => {
  return todos?.length > 0 ? (
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return (
          <div className="todo">
            <li key={index}>{todo}</li>
            <button
              className="delete-button"
              onClick={() => {
                deleteFunc(todo);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  ) : (
    <div className="empty">
      <p>No task found</p>
    </div>
  );
};
export default TodoList;
