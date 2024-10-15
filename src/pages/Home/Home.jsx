import "./styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-links-container">
        <Link to="/eightball" className="project-link">
          Magic Eightball
        </Link>
      </div>
    </div>
  );
};

export default Home;
