// Hero — English version

const Hero = () => (
  <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, opacity: 0.45, pointerEvents: "none",
      backgroundImage: "radial-gradient(ellipse 80% 60% at 70% 20%, var(--accent-soft), transparent 60%)" }}></div>
    <div className="container" style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 72, alignItems: "center" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>● BrightMind AI Solutions</div>
          <h1 style={{ marginBottom: 16, fontSize: "clamp(2.5rem, 4.6vw, 4rem)", lineHeight: 1.05 }}>
            BrightMind AI Solutions
          </h1>
          <p style={{ fontSize: "1.4rem", color: "var(--fg)", marginBottom: 24, fontWeight: 400, opacity: 0.9 }}>
            Marketing Automation and <span className="accent">AI for Business</span>
          </p>
          <p style={{ fontSize: "1.15rem", color: "var(--fg-muted)", marginBottom: 36, maxWidth: 540 }}>
            AI in practice — solutions that truly make everyday work easier.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#services" className="btn btn-primary">Start your AI transformation<Icon name="arrow" size={16} /></a>
            <a href="#contact" className="btn btn-secondary">Free consultation</a>
          </div>
        </div>

        {/* Right side: terminal-style card listing the 6 services */}
        <div className="card" style={{ padding: 0, overflow: "hidden", borderColor: "var(--border-strong)", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.45)" }}>
          <div style={{ background: "var(--bg-elev-2)", padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f87171" }}></span>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fbbf24" }}></span>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d399" }}></span>
            <span className="mono" style={{ fontSize: "0.75rem", color: "var(--fg-muted)", marginLeft: 8 }}>brightmind ~ services</span>
            <span className="mono" style={{ fontSize: "0.7rem", color: "var(--success)", marginLeft: "auto" }}>● online</span>
          </div>
          <div style={{ padding: 24, fontFamily: "var(--font-mono)", fontSize: "0.875rem", lineHeight: 1.85 }}>
            <div className="text-muted"># Services</div>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4 }}>
              <div><span className="accent">→</span> AI Consulting for Business</div>
              <div><span className="accent">→</span> AI Tutoring</div>
              <div><span className="accent">→</span> AI Marketing Automation</div>
              <div><span className="accent">→</span> AI Agents &amp; Process Automation</div>
              <div><span className="accent">→</span> Custom AI Assistants</div>
              <div><span className="accent">→</span> AI Implementations &amp; NIS2 Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });
