import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  //to add the todo to the list
  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  //to remove the todo from the list
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>

      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button classname="add-button" type="submit" onClick={addTodo}>
          {" "}
          Add
        </button>
        <TodoList todos={todos} todo={todo} deleteFunc={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
