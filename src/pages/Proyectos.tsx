import CardProyecto from "../components/CardProyecto";
import { proyectos } from "../data/proyectos";

export default function Proyectos() {
  return (
    <section className="container" style={{ padding: "28px 0 40px" }}>
      <h2 style={{ color: "#eaf1f9", marginBottom: 14 }}>Tareas y Proyectos</h2>
      <p style={{ color: "#cfe2ff", marginBottom: 20 }}>
        Selección de trabajos con breve descripción y enlaces a su repositorio y/o despliegue.
      </p>

      <div className="grid">
        {proyectos.map((p, idx) => (
          <CardProyecto
            key={idx}
            imagen={p.imagen}
            titulo={p.titulo}
            descripcion={p.descripcion}
            repo={p.repo}
            despliegue={p.despliegue}
            tarea={p.tarea}
          />
        ))}
      </div>
    </section>
  );
}
