import { useState } from 'react';

const items = [
  { q: "🤖 Czy AI zastąpi moich pracowników?", a: "Nie - AI ma za zadanie wspierać i wzmacniać możliwości Twoich pracowników, a nie ich zastępować. Pomagamy zautomatyzować rutynowe zadania, dzięki czemu Twój zespół może skupić się na bardziej kreatywnych i strategicznych działaniach." },
  { q: "💰 Ile kosztuje wdrożenie AI w mojej firmie?", a: "Koszty zależą od skali i złożoności projektu. Pakiet Start-AI (diagnoza) kosztuje 369 zł, a kompleksowe wdrożenia rozpoczynamy od 2000 zł. Oferujemy bezpłatną konsultację, podczas której omówimy Twoje potrzeby i przygotujemy spersonalizowaną wycenę." },
  { q: "⏱️ Jak długo trwa wdrożenie?", a: "Podstawowe wdrożenie zajmuje 1-2 tygodnie, a kompleksowe projekty 1-3 miesiące. Pierwsze efekty widoczne są już po kilku dniach. Wszystko zależy od zakresu automatyzacji i złożoności procesów w Twojej organizacji." },
  { q: "🔐 Czy moje dane są bezpieczne?", a: "Absolutnie! Wszystkie nasze rozwiązania są w pełni zgodne z RODO. Korzystamy z lokalnych modeli LLM lub bezpiecznych API z najwyższymi certyfikatami bezpieczeństwa. Twoje dane nigdy nie są wykorzystywane do trenowania modeli AI." },
  { q: "📚 Czy otrzymam szkolenie dla zespołu?", a: "Tak! Każde wdrożenie obejmuje kompleksowe wsparcie dla zespołu. W Pakiecie Fit-AI znajdziesz szkolenia dostosowane do potrzeb Twojej firmy, bibliotekę promptów oraz wsparcie poimplementacyjne. Dodatkowo nagrywamy video-instrukcje do wielokrotnego użytku." },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderTop: "1px solid var(--border)", borderBottom: i === items.length - 1 ? "1px solid var(--border)" : "none" }}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              width: "100%", background: "transparent", border: "none",
              padding: "24px 0", display: "flex", justifyContent: "space-between",
              alignItems: "center", cursor: "pointer", color: "var(--fg)",
              fontFamily: "inherit", fontSize: "1.05rem", fontWeight: 500,
              textAlign: "left", letterSpacing: "-0.01em",
            }}
          >
            <span>{item.q}</span>
            <span style={{ color: "var(--accent)", fontSize: "1.5rem", lineHeight: 1, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: 24, color: "var(--fg-muted)", maxWidth: 720 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
