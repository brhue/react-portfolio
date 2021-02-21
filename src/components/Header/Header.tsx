import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <div className="container">
        <nav>
          <h1>
            <Link to="/">Bradley Donahue</Link>
          </h1>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}