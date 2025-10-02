type Proyecto = {
  titulo: string;
  descripcion: string;
  imagen: string;
  repo?: string;
  despliegue?: string;
  tarea?: string;
};

export const proyectos: Proyecto[] = [
  {
    titulo: "Formulario de Registro",
    descripcion:
      "App en React + TypeScript que guarda datos en Excel mediante backend Node.js.",
    imagen: "/assets/proyectos/formulario.png",
    repo: "https://github.com/leotedd/formulario-teddy-excel",
    despliegue: "https://formulario-teddy-excel.vercel.app/"
  },
  {
    titulo: "Glosario Desarrollo Web",
    descripcion: "Tarea de investigación sobre conceptos clave vistos en clase.",
    imagen: "/assets/proyectos/glosario.png",
    tarea: "/docs/glosario.pdf"
  },
  // Agrega más proyectos aquí...
];
