import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <span className="code-tag">{"</"}</span>
        Portafolio
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/proyectos" className="nav-link">Proyectos</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </div>
    </nav>
  );
}
