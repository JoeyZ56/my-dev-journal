import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages
import Home from "./pages/Home/Home";
import MagicEightball from "./pages/Mini-Projects/MagicEightball/MagicEightball";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eightball" element={<MagicEightball />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
