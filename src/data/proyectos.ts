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
    titulo: "Mi CV Personal",
    descripcion:
      "Página web personal que muestra mi currículum vitae de forma interactiva y profesional.",
    imagen: "/assets/proyectos/cv.png",
    repo: "https://github.com/leotedd/mi-cvy.git",
    despliegue: "https://leotedd.github.io/mi-cvy/"
  },
  {
    titulo: "Formulario de Registro",
    descripcion:
      "App en React + TypeScript que guarda datos en Excel mediante backend Node.js.",
    imagen: "/assets/proyectos/formulario.png",
    repo: "https://github.com/leotedd/formulario-teddy-excel",
    despliegue: "https://leotedd.github.io/formulario-teddy-excel/"
  },
  {
    titulo: "Glosario Desarrollo Web",
    descripcion: "Tarea de investigación sobre conceptos clave vistos en clase.",
    imagen: "/assets/proyectos/glosario.png",
    tarea: "/glosario"
  },
  {
    titulo: "Investigación Desarrollo Web",
    descripcion: "Documento de investigación sobre tecnologías y conceptos fundamentales del desarrollo web moderno.",
    imagen: "/assets/proyectos/glosario.png",
    tarea: "/docs/Desarrollo Web .pdf"
  },
  {
    titulo: "Diseño Web Responsivo",
    descripcion: 
      "Proyecto de diseño web adaptable utilizando HTML5, CSS3 y técnicas modernas de diseño responsivo para una experiencia óptima en todos los dispositivos.",
    imagen: "/assets/proyectos/responsive.png",
    repo: "https://github.com/leotedd/teddy-diseno-responsivo",
    despliegue: "https://capable-tartufo-8f2041.netlify.app"
  }
];
