import { Link } from "react-router-dom";
import "./styles/Proyectos.css";
import { proyectos } from "../data/proyectos";

type Proyecto = {
  titulo: string;
  descripcion: string;
  imagen: string;
  repo?: string;
  despliegue?: string;
  tarea?: string;
};

const Proyectos: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Tareas y Proyectos</h1>
      <p className="projects-subtitle">
        Selección de trabajos con breve descripción y enlaces a su repositorio y/o despliegue.
      </p>

      <div className="projects-grid">
        {proyectos.map((proyecto: Proyecto, index: number) => (
          <div key={index} className="project-card">
            <img 
              src={proyecto.imagen} 
              alt={proyecto.titulo}
              className="project-image"
            />
            <div className="project-content">
              <h2>{proyecto.titulo}</h2>
              <p>{proyecto.descripcion}</p>
              <div className="project-actions">
                {proyecto.repo && (
                  <a 
                    href={proyecto.repo} 
                    className="btn btn-secondary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    💻 Ver Repositorio
                  </a>
                )}
                {proyecto.despliegue && (
                  <a 
                    href={proyecto.despliegue} 
                    className="btn btn-primary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    🚀 Ver Despliegue
                  </a>
                )}
                {proyecto.tarea && (
                  <Link to={proyecto.tarea} className="btn btn-primary">
                    📚 Ver Tarea
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
