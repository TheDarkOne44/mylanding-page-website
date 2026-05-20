import { useState } from 'react';

const icons = {
  chart: <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>,
  eye: <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx={12} cy={12} r={3}/></svg>,
  file: <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>,
  code: <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  target: <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10}/><circle cx={12} cy={12} r={6}/><circle cx={12} cy={12} r={2}/></svg>,
  clock: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10}/><path d="M12 6v6l4 2"/></svg>,
  zap: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  lock: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x={4} y={11} width={16} height={10} rx={2}/><path d="M8 11V7a4 4 0 018 0v4"/></svg>,
  cpu: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x={4} y={4} width={16} height={16} rx={2}/><rect x={9} y={9} width={6} height={6}/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></svg>,
  book: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  users: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx={9} cy={7} r={4}/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  bot: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x={3} y={8} width={18} height={12} rx={2}/><path d="M12 8V4M8 4h8"/><circle cx={9} cy={14} r={1}/><circle cx={15} cy={14} r={1}/></svg>,
  check: <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>,
  arrow: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>,
};

const CASES = [
  {
    id: "excel",
    tab: "Claude AI w Excel",
    icon: "chart",
    tag: "Automatyzacja Biznesowa",
    title: "Claude AI w Microsoft Excel — Analiza Danych w Naturalnym Języku",
    desc: "Integracja Claude AI z Microsoft Excel eliminuje potrzebę skomplikowanych formuł i makr. Analitycy i specjaliści biznesowi mogą teraz przetwarzać dane, tworzyć raporty i generować insights używając prostych poleceń w naturalnym języku.",
    features: [
      { icon: "clock", h: "Oszczędność 60–80% czasu", p: "Redukcja czasu analizy z 45 minut do 2 minut. Automatyczna segmentacja i raportowanie w sekundach." },
      { icon: "target", h: "Bez znajomości formuł", p: "Analiza danych bez zaawansowanych formuł Excel. Każdy może być analitykiem — wystarczy opisać co chcesz osiągnąć." },
      { icon: "zap", h: "Wszechstronne zastosowania", p: "Segmentacja klientów, personalizacja treści marketingowych, czyszczenie danych, wykrywanie anomalii — jednym poleceniem." },
    ],
    results: ["Segmentacja klientów według przychodów i regionów", "Generowanie spersonalizowanych szablonów komunikacji", "Walidacja i standaryzacja danych kontaktowych", "Tworzenie raportów biznesowych bez pivot tables", "Wykrywanie duplikatów i anomalii w bazach danych"],
    media: () => (
      <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border-strong)", background: "var(--bg-elev-2)" }}>
        <video controls preload="metadata" playsInline muted style={{ width: "100%", display: "block" }}>
          <source src="/EXCEL_Claude.mp4" type="video/mp4" />
        </video>
      </div>
    ),
  },
  {
    id: "medgemma",
    tab: "MedGemma MRI",
    icon: "eye",
    tag: "Medycyna & AI",
    title: "Analiza Skanów MRI z MedGemma 1.5",
    desc: "Zaawansowany system analizy obrazów medycznych wykorzystujący model MedGemma — specjalistyczny model AI przeszkolony w dziedzinie medycyny przez Google DeepMind.",
    features: [
      { icon: "lock", h: "Pełna prywatność", p: "Model działa w pełni lokalnie — żadne dane nie są wysyłane na zewnętrzne serwery. Twoje dane medyczne pozostają bezpieczne." },
      { icon: "zap", h: "Natychmiastowa analiza", p: "Szybka interpretacja obrazów MRI z wykorzystaniem najnowszych osiągnięć w dziedzinie AI medycznego." },
      { icon: "target", h: "Specjalistyczna wiedza", p: "Model trenowany na danych medycznych zapewnia profesjonalne wsparcie diagnostyczne." },
    ],
    results: null,
    media: () => (
      <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border-strong)", position: "relative" }}>
        <img src="/medgemma-demo.png" alt="Analiza obrazów MRI przy pomocy MedGemma" style={{ width: "100%", display: "block" }} loading="lazy" />
        <span className="chip" style={{ position: "absolute", top: 16, right: 16, color: "var(--accent)", borderColor: "var(--accent)" }}>100% lokalnie</span>
      </div>
    ),
  },
  {
    id: "ocr",
    tab: "OCR — Tekst z Obrazu",
    icon: "file",
    tag: "Rozpoznawanie Tekstu",
    title: "OCR — Jak zamienić obraz w edytowalny tekst?",
    desc: 'OCR (Optical Character Recognition) "czyta" tekst ze zdjęć, skanów lub dokumentów PDF i zamienia go na format, który można kopiować i edytować.',
    features: [
      { icon: "cpu", h: "DeepSeek-VL2 / DeepSeek OCR", p: "Nowoczesny model multimodalny ze świetnym stosunkiem wydajności do zasobów. Łączy rozumienie obrazu z rozpoznawaniem tekstu." },
      { icon: "book", h: "Tesseract OCR", p: "Klasyka OCR rozwijana przez Google — najbardziej popularny silnik open-source. Obsługuje ponad 100 języków." },
      { icon: "users", h: "PaddleOCR", p: "Wszechstronny framework od Baidu — świetny do wielu języków, w tym azjatyckich." },
    ],
    results: ["Automatyzacja księgowości — odczytywanie faktur i paragonów", "Digitalizacja archiwów papierowych dokumentów", "Ekstrakcja danych z formularzy i umów", "Skanowanie wizytówek i automatyczne dodawanie kontaktów", "Przetwarzanie korespondencji i dokumentacji urzędowej"],
    media: () => (
      <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: "3rem" }}>
          <span>📄</span>
          <span style={{ color: "var(--accent)", fontSize: "1.5rem" }}>→</span>
          <span>🔍</span>
          <span style={{ color: "var(--accent)", fontSize: "1.5rem" }}>→</span>
          <span>📝</span>
        </div>
        <p className="text-muted" style={{ textAlign: "center", margin: 0, fontSize: "0.9rem" }}>Obraz → Rozpoznanie → Edytowalny Tekst</p>
        <span className="chip" style={{ color: "var(--success)", borderColor: "var(--success)" }}>Open Source</span>
      </div>
    ),
  },
  {
    id: "mobile",
    tab: "Aplikacja Mobilna",
    icon: "code",
    tag: "Aplikacje Mobilne",
    title: "Twoja Własna Aplikacja Mobilna — Bez Kodowania!",
    desc: "Marzysz o własnej aplikacji mobilnej, ale nie umiesz programować? Dzięki AI to już nie problem! Sztuczna inteligencja pisze kod za Ciebie — wystarczy opisać, czego potrzebujesz.",
    features: [
      { icon: "zap", h: "Od pomysłu do aplikacji w kilka godzin", p: "Zamiast tygodni nauki programowania — opisujesz swój pomysł, a AI generuje kompletny kod aplikacji." },
      { icon: "bot", h: "Zero doświadczenia? Żaden problem", p: "Nie musisz znać React Native, Swift ani Kotlina. AI rozumie naturalny język — powiedz co chcesz, a dostaniesz gotowy kod." },
      { icon: "eye", h: "Profesjonalny design w pakiecie", p: "AI nie tylko pisze kod — tworzy też nowoczesny, elegancki interfejs z animacjami i intuicyjną nawigacją." },
    ],
    results: ["Aplikacje do zarządzania zadaniami i produktywnością", "Kalkulatory, konwertery i narzędzia codzienne", "Aplikacje fitness, zdrowotne i do śledzenia nawyków", "Proste gry mobilne i quizy edukacyjne", "Aplikacje dla małego biznesu — rezerwacje, katalogi, CRM"],
    media: () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border-strong)", position: "relative" }}>
          <div style={{ padding: 40, background: "var(--bg-elev-2)", minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>📱</div>
          <span className="chip" style={{ position: "absolute", top: 12, right: 12 }}>Gotowa apka</span>
        </div>
        <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border-strong)", position: "relative" }}>
          <img src="/kod_mobileapp.png" alt="Kod źródłowy aplikacji mobilnej wygenerowany przez AI" style={{ width: "100%", display: "block" }} loading="lazy" />
          <span className="chip" style={{ position: "absolute", top: 12, right: 12 }}>Kod AI</span>
        </div>
      </div>
    ),
  },
  {
    id: "evo2",
    tab: "Evo 2 — Genetyka",
    icon: "target",
    tag: "Genomika & AI",
    title: "Przewidywanie Mutacji Genetycznych z Modelem Evo 2",
    desc: "Evo 2 to przełomowy, w pełni otwartoźródłowy model AI wytrenowany na 9 bilionach par zasad DNA ze wszystkich domen życia. Potrafi przewidywać skutki mutacji genetycznych bez dodatkowego trenowania.",
    features: [
      { icon: "target", h: "Precyzyjna analiza wariantów", p: "Ocena patogenności mutacji genetycznych (m.in. BRCA1, warianty kliniczne z bazy ClinVar) w trybie zero-shot." },
      { icon: "zap", h: "Analiza w skali genomu", p: "Przetwarzanie sekwencji DNA o długości do 1 miliona par zasad, co umożliwia badanie całych genów wraz z ich otoczeniem regulacyjnym." },
      { icon: "cpu", h: "Projektowanie nowych sekwencji", p: "Poza predykcją, Evo 2 generuje nowe sekwencje DNA — od genomów mitochondrialnych po chromosomy eukariotyczne." },
    ],
    results: ["Przewidywanie patogenności wariantów klinicznych w onkologii", "Analiza wpływu mutacji w niekodujących regionach DNA", "Wsparcie w projektowaniu terapii genowych", "Automatyczna adnotacja elementów funkcjonalnych genomu", "Identyfikacja potencjalnie szkodliwych mutacji w badaniach przesiewowych"],
    media: () => (
      <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: "3rem" }}>
          <span>🧬</span>
          <span style={{ color: "var(--accent)", fontSize: "1.5rem" }}>→</span>
          <span>🤖</span>
          <span style={{ color: "var(--accent)", fontSize: "1.5rem" }}>→</span>
          <span>🔬</span>
        </div>
        <p className="text-muted" style={{ textAlign: "center", margin: 0, fontSize: "0.9rem" }}>Sekwencja DNA → Evo 2 AI → Analiza Mutacji</p>
        <span className="chip" style={{ color: "var(--success)", borderColor: "var(--success)" }}>Open Source · 9B par zasad</span>
      </div>
    ),
  },
];

export default function PracticeApp() {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48, borderBottom: "1px solid var(--border)", paddingBottom: 0 }}>
          {CASES.map((cs, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              background: "transparent", border: "none", cursor: "pointer",
              padding: "12px 20px", fontFamily: "inherit", fontSize: "0.9rem",
              fontWeight: active === i ? 600 : 400,
              color: active === i ? "var(--fg)" : "var(--fg-muted)",
              borderBottom: active === i ? "2px solid var(--accent)" : "2px solid transparent",
              marginBottom: -1, transition: "color 0.15s",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              {icons[cs.icon]}
              {cs.tab}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <div>{c.media()}</div>
          <div>
            <span className="chip" style={{ marginBottom: 16 }}>{c.tag}</span>
            <h2 style={{ marginBottom: 16, fontSize: "1.5rem" }}>{c.title}</h2>
            <p className="text-muted" style={{ marginBottom: 32, lineHeight: 1.8 }}>{c.desc}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
              {c.features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 16 }}>
                  <div style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>{icons[f.icon]}</div>
                  <div>
                    <div style={{ fontWeight: 500, marginBottom: 4 }}>{f.h}</div>
                    <p className="text-muted" style={{ margin: 0, fontSize: "0.9rem" }}>{f.p}</p>
                  </div>
                </div>
              ))}
            </div>

            {c.results && (
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: 12, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Zastosowania</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.results.map((r, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.9rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent)", marginTop: 3, flexShrink: 0 }}>{icons.check}</span>
                      <span className="text-muted">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a href="/#kontakt" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Umów bezpłatną konsultację{icons.arrow}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
