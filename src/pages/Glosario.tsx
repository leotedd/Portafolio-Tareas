import React from "react";
import GlosarioCard from "../components/GlosarioCard";
import "./styles/Glosario.css"; // Asegúrate de que la ruta sea correcta

const letras = [
  "Números y Redes",
  "A",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "L",
  "M",
  "P",
  "R",
  "S",
  "U",
  "W",
  "X",
];

const otrosTerminos = [
  { key: "AJAX", text: "Asynchronous JavaScript and XML: Técnica que permite actualizar partes de una página sin recargarla completamente." },
  { key: "ASP", text: "Active Server Pages: Tecnología para crear páginas dinámicas en el servidor." },
  { key: "CERN", text: "Consejo europeo donde se originó la World Wide Web." },
  { key: "CGI", text: "Common Gateway Interface: Ejecuta scripts del servidor para generar contenido dinámico." },
  { key: "CSS", text: "Cascading Style Sheets: Lenguaje para definir la presentación visual." },
  { key: "HTML", text: "HyperText Markup Language: Lenguaje de marcado para estructurar páginas web." },
  { key: "HTTP", text: "HyperText Transfer Protocol: Protocolo de comunicación entre navegadores y servidores." },
  { key: "JSP", text: "Java Server Pages: Genera páginas dinámicas con Java embebido en HTML." },
  { key: "PHP", text: "PHP: Hypertext Preprocessor: Lenguaje del lado servidor para sitios dinámicos." },
  { key: "RIA", text: "Rich Internet Application: Aplicaciones web interactivas tipo desktop." },
  { key: "RSS", text: "Really Simple Syndication: Formato XML para distribuir contenido actualizado." },
  { key: "SGBD", text: "Sistema de Gestión de Bases de Datos." },
  { key: "SOAP", text: "Simple Object Access Protocol: Intercambio estructurado de información (XML)." },
  { key: "UDDI", text: "Universal Description, Discovery and Integration: Estándar para registrar servicios web." },
  { key: "URL", text: "Uniform Resource Locator: Dirección que identifica recursos en Internet." },
  { key: "W3C", text: "World Wide Web Consortium: Define estándares para la web." },
  { key: "WSDL", text: "Web Services Description Language: Describe servicios web y operaciones." },
  { key: "XHTML", text: "Versión más estricta y compatible con XML de HTML." },
  { key: "XML", text: "eXtensible Markup Language: Formato para estructurar y transferir datos." },
];

export default function Glosario() {
  return (
    <div className="glosario-container">
      <h1 className="glosario-title">Glosario de Términos</h1>
      
      <div className="glosario-nav">
        {letras.map(letra => (
          <button key={letra} className="letra-btn">
            {letra}
          </button>
        ))}
      </div>

      <section className="glosario-section">
        <h2>Redes y Comunicaciones</h2>
        <div className="cards-grid">
          <GlosarioCard
            title="2G (Segunda Generación)"
            description="Tecnología de telefonía móvil que digitalizó las comunicaciones."
            colorFrom="#4CAF50"
            colorTo="#2196F3"
          />
          <GlosarioCard
            title="3G (Tercera Generación)"
            description="Permitió el acceso a Internet móvil de alta velocidad."
            colorFrom="#2196F3"
            colorTo="#9C27B0"
          />
        </div>
      </section>

      <section className="glosario-content">
        <h2 className="glosario-subtitle">Otros términos</h2>
        <ul className="glosario-terms" aria-label="Lista de definiciones">
          {otrosTerminos.map((t) => (
            <li key={t.key}><strong>{t.key}</strong> – {t.text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
