import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container" style={{ padding: "32px 0" }}>
        <h2 style={{ color: "#eaf1f9" }}>Sobre mí</h2>
        <p style={{ color: "#cfe2ff", maxWidth: 750 }}>
          Soy estudiante de Ingeniería en Sistemas (UMG). Me enfoco en desarrollo web con React + TypeScript,
          diseño de bases de datos (ER y SQL) y prototipos con Arduino. En este portafolio reúno tareas, proyectos
          y despliegues con su documentación.
        </p>
      </section>
    </>
  );
}
