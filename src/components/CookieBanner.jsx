import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "var(--bg-elev)", borderTop: "1px solid var(--border)",
      padding: "16px 24px", zIndex: 9999,
      display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
    }}>
      <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--fg-muted)", flex: 1, minWidth: 240 }}>
        Używamy plików cookie (w tym Facebook Pixel) w celu analizy ruchu i poprawy jakości usług.
        Więcej informacji znajdziesz w naszej{" "}
        <a href="/privacy-policy/" style={{ color: "var(--accent)" }}>Polityce prywatności</a>.
      </p>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button onClick={decline} style={{
          background: "transparent", border: "1px solid var(--border)",
          borderRadius: "var(--radius)", padding: "8px 18px",
          color: "var(--fg-muted)", fontFamily: "inherit", fontSize: "0.875rem", cursor: "pointer",
        }}>Odrzuć</button>
        <button onClick={accept} style={{
          background: "var(--accent)", border: "1px solid var(--accent)",
          borderRadius: "var(--radius)", padding: "8px 18px",
          color: "#fff", fontFamily: "inherit", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer",
        }}>Akceptuję</button>
      </div>
    </div>
  );
}
