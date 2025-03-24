import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages
import Home from "./pages/Home/Home";
import MagicEightball from "./pages/Mini-Projects/MagicEightball/MagicEightball";
import TodoList from "./pages/Mini-Projects/Todo-List/Todo";
import Counter from "./pages/Mini-Projects/Counter/Counter";
import UserForm from "./pages/Mini-Projects/UserForm/UserForm";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eightball" element={<MagicEightball />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/user-form" element={<UserForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
