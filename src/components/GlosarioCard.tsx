// src/components/GlosarioCard.tsx
import React from "react";
import "./styles/TermCard.css"; // ✅ ruta correcta (estás dentro de /components)

type Props = {
  icon?: React.ReactNode; // emoji, <svg/>, o <img/>
  title: string;
  description: string;
  colorFrom?: string;
  colorTo?: string;
};

export default function GlosarioCard({
  icon,
  title,
  description,
  colorFrom = "#007bff", // azul
  colorTo = "#00bcd4",   // cian
}: Props) {
  return (
    <article className="gl-card">
      <div
        className="gl-card-icon"
        style={{ background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }}
        aria-hidden="true"
      >
        {icon || <span>🧠</span>}
      </div>
      <div className="gl-card-body">
        <h3 className="gl-card-title">{title}</h3>
        <p className="gl-card-desc">{description}</p>
      </div>
    </article>
  );
}
