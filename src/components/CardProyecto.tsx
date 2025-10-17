import React, { useState } from "react";
import "./styles/CardProyecto.css";
import formularioImg from "../assets/proyectos/formulario.png";
import PdfViewer from "./PdfViewer";

type Props = {
  imagen: string;
  titulo: string;
  descripcion: string;
  repo?: string;
  despliegue?: string;
  tarea?: string; // para tareas “planas” (PDF/Docs)
};

const CardProyecto: React.FC<Props> = ({ imagen, titulo, descripcion, repo, despliegue, tarea }) => {
  const [showPdf, setShowPdf] = useState(false);
  const isFormulario = titulo.toLowerCase().includes('formulario');
  const cardStyle = isFormulario ? {
    backgroundImage: `linear-gradient(to bottom, rgba(7, 22, 39, 0.9), rgba(7, 22, 39, 0.95)), url(${formularioImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {};

  const isPdf = tarea?.toLowerCase().endsWith('.pdf');

  return (
    <div 
      className="card-proyecto shadow-sm" 
      data-proyecto={isFormulario ? 'formulario' : ''} 
      style={cardStyle}>
      <div className="card-img-wrap">
        <img src={imagen} alt={titulo} className="card-img" />
      </div>

      <div className="card-body">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-desc">{descripcion}</p>

        <div className="btn-row">
          {repo && (
            <a className="btn btn-dark" target="_blank" rel="noreferrer" href={repo}>
              💻 Ver Repositorio
            </a>
          )}
          {tarea && isPdf ? (
            <button className="btn btn-primary" onClick={() => setShowPdf(!showPdf)}>
              📂 {showPdf ? 'Cerrar PDF' : 'Ver PDF'}
            </button>
          ) : tarea && (
            <a className="btn btn-primary" target="_blank" rel="noreferrer" href={tarea}>
              📂 Ver Tarea
            </a>
          )}
          {despliegue && (
            <a className="btn btn-success" target="_blank" rel="noreferrer" href={despliegue}>
              🚀 Ver Despliegue
            </a>
          )}
        </div>
        {showPdf && isPdf && tarea && (
          <div className="pdf-container">
            <PdfViewer pdfPath={tarea} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProyecto;
