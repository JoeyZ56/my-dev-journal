import "./styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-links-container">
        <Link to="/eightball" className="project-link1">
          Magic Eightball
        </Link>
        <Link to="/todo-list" className="project-link2">
          Todo List
        </Link>
      </div>
    </div>
  );
};

export default Home;
