import { Link, NavLink } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-wrap">
      <div className="nav-inner container">
        <Link to="/" className="brand">
          <span className="angle">&lt;/&gt;</span> Portafolio
        </Link>

        <div className="links">
          <NavLink to="/" end className="item">Inicio</NavLink>
          <NavLink to="/proyectos" className="item">Proyectos</NavLink>
          <NavLink to="/contacto" className="item">Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
}
