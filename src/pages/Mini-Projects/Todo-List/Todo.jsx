import { useState } from "react";
import "./styles.scss";

const Todo = () => {
  const [makeTodo, setMakeTodo] = useState("");
  const [showTodo, setShowTodo] = useState([]);

  const handleMakeTodo = (e) => {
    setMakeTodo(e.target.value);
  };

  const handleShowTodo = (e) => {
    e.preventDefault();
    const trimmedTodo = makeTodo.trim();

    setShowTodo([...showTodo, trimmedTodo]);
    setMakeTodo("");
    console.log(trimmedTodo);
  };

  const handleBackBtn = () => {
    window.history.back();
  };

  const handleResetTodo = () => {
    setShowTodo([]);
  };

  return (
    <>
      <button onClick={handleBackBtn} className="back-btn">
        Back
      </button>
      <div className="todo-list-main-container">
        {showTodo.length === 0 ? (
          <h1>Create a Todo list!</h1>
        ) : (
          <div className="display-todos">
            {" "}
            <ul>
              {showTodo
                .filter((item) => item !== "")
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        )}
        <div className="todo-list">
          <form className="form" onSubmit={handleShowTodo}>
            <input
              type="text"
              value={makeTodo}
              onChange={handleMakeTodo}
              placeholder="Add Todo here!"
            />
            <button type="submit" value={showTodo}>
              Submit
            </button>
            <button onClick={handleResetTodo}>Reset Todo List</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Todo;
