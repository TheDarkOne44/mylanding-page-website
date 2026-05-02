// Shared components for BrightMind redesign

const Nav = ({ active = "home" }) => {
  const links = [
    { id: "home", label: "Strona Główna", href: "index.html" },
    { id: "about", label: "O mnie", href: "o-mnie.html" },
    { id: "services", label: "Usługi", href: "index.html#uslugi" },
    { id: "practice", label: "AI w Praktyce", href: "ai-w-praktyce.html" },
    { id: "contact", label: "Kontakt", href: "index.html#kontakt" },
  ];
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="index.html" className="nav-brand">
          <span className="nav-brand-mark">B</span>
          <span>BrightMind <span style={{ color: "var(--fg-muted)" }}>/ AI</span></span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={l.href} className={l.id === active ? "active" : ""}>
              {l.label}
            </a>
          ))}
          <a href="#kontakt" className="nav-cta">Bezpłatna konsultacja →</a>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="nav-brand" style={{ marginBottom: 16 }}>
            <span className="nav-brand-mark">B</span>
            <span>BrightMind <span style={{ color: "var(--fg-muted)" }}>/ AI</span></span>
          </div>
          <p className="text-muted" style={{ fontSize: "0.9rem", maxWidth: 320 }}>
            Profesjonalne wdrożenia AI B2B dla polskich firm. Automatyzacja procesów, agenci AI, doradztwo. Zgodne z RODO i NIS2.
          </p>
        </div>
        <div className="footer-col">
          <h4>Usługi</h4>
          <ul>
            <li><a href="index.html#uslugi">Doradztwo AI dla Firm</a></li>
            <li><a href="index.html#uslugi">Korepetycje AI</a></li>
            <li><a href="index.html#uslugi">Automatyzacja marketingu</a></li>
            <li><a href="index.html#uslugi">Agenci AI dla firm</a></li>
            <li><a href="NIS2.html">Wdrożenia NIS2</a></li>
            <li><a href="index.html#strony">Strony internetowe</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Firma</h4>
          <ul>
            <li><a href="o-mnie.html">O mnie</a></li>
            <li><a href="ai-w-praktyce.html">AI w Praktyce</a></li>
            <li><a href="index.html#cennik">Cennik</a></li>
            <li><a href="index.html#kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kontakt</h4>
          <ul style={{ fontSize: "0.85rem", color: "var(--fg-muted)" }}>
            <li>BrightMind AI Solutions</li>
            <li>Patryk Gliński</li>
            <li><a href="mailto:kontakt@brightmind-solutions.com">kontakt@brightmind-solutions.com</a></li>
            <li><a href="tel:+48730152161">+48 730 152 161</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 BrightMind AI Solutions. Wszystkie prawa zastrzeżone.</span>
        <span>
          <a href="privacy-policy.html" style={{ color: "var(--fg-muted)" }}>Polityka prywatności</a>
        </span>
      </div>
    </div>
  </footer>
);

// Inline icon set — line icons only, no gradient circles
const Icon = ({ name, size = 20 }) => {
  const stroke = "currentColor";
  const sw = 1.5;
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
    scale: <><path d="M12 3v18" /><path d="M5 7h14" /><path d="M5 7l-3 7a4 4 0 008 0L7 7" /><path d="M19 7l-3 7a4 4 0 008 0L21 7" /></>,
    cpu: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" /></>,
    zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    book: <><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></>,
    bot: <><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M12 8V4M8 4h8" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" /></>,
    chart: <><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" /></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></>,
    arrow: <><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></>,
    check: <path d="M5 12l5 5L20 7" />,
    alert: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></>,
    file: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>,
    play: <polygon points="6 4 20 12 6 20 6 4" />,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></>,
    code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
    target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  };
  return <svg {...props}>{paths[name] || paths.check}</svg>;
};

Object.assign(window, { Nav, Footer, Icon });
