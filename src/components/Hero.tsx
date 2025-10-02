import { Link } from "react-router-dom";
import "./styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <p className="pill">Portafolio de Tareas · Desarrollo Web</p>
          <h1 className="title">Hola, soy <span className="highlight">Teddy</span> 👋</h1>
          <p className="subtitle">
            Estudiante de Ingeniería en Sistemas (UMG). Desarrollo Web con React + TypeScript,
            modelado de bases de datos y prototipos con Arduino.
          </p>
          <div className="cta-row">
            <Link to="/proyectos" className="btn btn-primary">📂 Ver Tareas & Proyectos</Link>
            <Link to="/contacto" className="btn btn-outline-light">✉️ Contacto</Link>
          </div>
        </div>

        <img className="hero-avatar" src="/assets/perfil.jpg" alt="Foto de perfil" />
      </div>
    </section>
  );
}
