import "./styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Teddy Leonardo Hernández Pérez – UMG</p>
        <div className="social">
          <a href="https://github.com/leotedd" target="_blank" rel="noreferrer">GitHub</a>
          <span>·</span>
          <a href="mailto:teddy.hernandezp02@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
