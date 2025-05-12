import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      <div className="header-links">
        <button>
          <Link to="/">Countries</Link>
        </button>
        <button>
          <Link to="/add-country">Add country</Link>
        </button>
      </div>
    </header>
  );
}
