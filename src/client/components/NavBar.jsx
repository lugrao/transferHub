import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link to={`/`}>
          <h1>Transfer Hub</h1>
        </Link>
      </nav>
    </>
  );
}
