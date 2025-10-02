import { Link } from "react-router-dom";
import "./styles/Hero.css";

export default function Hero() {
  return (
    <header className="hero-nemo">
      <div className="container hero-grid">
        {/* Copy */}
        <div className="hero-copy">
          <p className="top-pill">Desarrollo Web • Bases de Datos • Arduino</p>
          <h1 className="hero-title">
            Hello, It’s Me <span>Teddy</span>
          </h1>
          <p className="hero-sub">
            Estudiante de Ingeniería en Sistemas (UMG). Creo interfaces limpias,
            organizo datos con ER/SQL y despliego proyectos en Vercel/Netlify/GitHub Pages.
          </p>

          <div className="hero-actions">
            <Link to="/proyectos" className="btn btn-accent">🚀 Ver Portafolio</Link>
            <Link to="/contacto" className="btn btn-ghost">✉️ Contacto</Link>
          </div>

          <div className="hero-social">
            <a href="https://github.com/leotedd" target="_blank" rel="noreferrer">GitHub</a>
            <span>·</span>
            <a href="mailto:teddy.hernandezp02@gmail.com">Email</a>
          </div>
        </div>

        {/* Avatar */}
        <div className="hero-avatar-wrap">
          <img src="/assets/perfil.jpg" alt="Teddy" />
          <div className="ring"></div>
        </div>
      </div>
    </header>
  );
}
