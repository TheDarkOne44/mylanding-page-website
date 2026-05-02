// Home page sections — odpowiada strukturze brightmindsolutions.pl

// === USŁUGI (6 z oryginału) ===
const Services = () => {
  const services = [
    { icon: "scale", title: "Doradztwo AI dla Firm", desc: "Profesjonalne doradztwo w zakresie wdrażania AI: od narzędzi do programowania (GitHub Copilot, Claude Code), przez tworzenie audio, wideo i prezentacji, transkrypcje spotkań, aż po zastosowania w prawie, medycynie i rolnictwie. Identyfikuję obszary o największym potencjale automatyzacji w Twojej branży." },
    { icon: "book", title: "Korepetycje AI", desc: "Indywidualne szkolenia z zakresu sztucznej inteligencji dla osób prywatnych. Asystenci programistyczni, generatory audio i wideo, aplikacje do transkrypcji, branżowe rozwiązania AI. Niezależnie od dziedziny — pomogę wykorzystać potencjał AI." },
    { icon: "chart", title: "Automatyzacja Marketingu AI", desc: "Kompleksowa automatyzacja marketingu z wykorzystaniem AI. Treści reklamowe, posty społecznościowe, kampanie e-mailowe i grafiki generowane przez AI — bez ręcznej pracy." },
    { icon: "cpu", title: "Automatyzacja i Agenci AI dla Firm", desc: "Inteligentni agenci i zaawansowane przepływy automatyzacji z wykorzystaniem n8n, Zapier i LangChain. Automatyzuję powtarzalne procesy, integruję systemy i tworzę autonomicznych agentów AI wykonujących złożone zadania bez Twojego udziału." },
    { icon: "bot", title: "Spersonalizowane Asystenty AI", desc: "Projektowanie i wdrażanie dedykowanych asystentów AI dopasowanych do specyfiki branży. Od automatyzacji obsługi klienta, przez analizę dokumentów prawnych i medycznych, po wsparcie w rolnictwie precyzyjnym. Pełna integracja z istniejącymi systemami." },
    { icon: "shield", title: "Wdrożenia AI i Compliance NIS2", desc: "Kompleksowe wsparcie we wdrażaniu rozwiązań AI zgodnych z dyrektywą NIS2. Audyt bezpieczeństwa, procedury cyberbezpieczeństwa, zarządzanie ryzykiem i raportowanie incydentów. Spełnij wymogi regulacyjne wykorzystując potencjał AI.", tag: "Flagship", featured: true, href: "NIS2.html" },
  ];

  return (
    <section className="section" id="uslugi">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">/ Usługi</span>
          <h2>Nasze Usługi</h2>
        </div>
        <div className="grid grid-3">
          {services.map((s, i) => (
            <div key={i} className={`card ${s.featured ? "card-accent" : ""}`}>
              {s.tag && (
                <span className="chip" style={{ marginBottom: 16, color: "var(--accent)", borderColor: "var(--accent)" }}>
                  ★ {s.tag}
                </span>
              )}
              <div style={{ color: "var(--accent)", marginBottom: 16 }}>
                <Icon name={s.icon} size={26} />
              </div>
              <h3 style={{ marginBottom: 12 }}>{s.title}</h3>
              <p className="text-muted" style={{ fontSize: "0.95rem" }}>{s.desc}</p>
              {s.href && (
                <a href={s.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, fontSize: "0.875rem", fontWeight: 500 }}>
                  Zobacz dedykowaną stronę <Icon name="arrow" size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === PAKIETY (Start-AI + Fit-AI z oryginału) ===
const Packages = () => {
  const packs = [
    {
      name: "Pakiet Start-AI",
      icon: "📋",
      features: [
        "Kompleksowa diagnoza potrzeb firmy",
        "Doradztwo w zakresie lokalnych modeli LLM",
        "Mapa procesów do automatyzacji",
        "Minibook z praktycznymi rekomendacjami",
        "Roadmapa wdrożenia AI w organizacji",
        "Identyfikacja kluczowych obszarów optymalizacji",
      ],
    },
    {
      name: "Pakiet Fit-AI",
      icon: "🎯",
      features: [
        "Personalizacja narzędzi AI dla zespołu",
        "Konfiguracja ChatGPT, Copilot, Claude",
        "Biblioteka gotowych promptów",
        "Playbook bezpieczeństwa AI",
        "Szkolenia dla zespołu dostosowane do potrzeb",
        "Nagranie video do wielokrotnego użytku",
        "Wsparcie poimplementacyjne i bieżąca optymalizacja",
      ],
      featured: true,
    },
  ];

  return (
    <section className="section" id="pakiety" style={{ background: "var(--bg-elev)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">/ Pakiety</span>
          <h2>Nasze Pakiety</h2>
        </div>
        <div className="grid grid-2">
          {packs.map((p, i) => (
            <div key={i} className={`card ${p.featured ? "card-accent" : ""}`}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: "1.75rem" }}>{p.icon}</span>
                <h3>{p.name}</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ display: "flex", gap: 12, fontSize: "0.95rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", marginTop: 3 }}><Icon name="check" size={14} /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === CENNIK (3 karty z oryginału) ===
const Pricing = () => {
  const tiers = [
    {
      name: "Korepetycje AI",
      price: "61,5 zł",
      note: "za godzinę (cena brutto z 23% VAT)",
    },
    {
      name: "Pakiet Start-AI",
      price: "369 zł",
      note: "kompleksowa diagnoza (cena brutto z 23% VAT)",
      featured: true,
    },
    {
      name: "Pakiet Fit-AI",
      price: "Wycena indywidualna",
      note: "cena do uzgodnienia",
      isText: true,
    },
  ];

  return (
    <section className="section" id="cennik">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">/ Cennik</span>
          <h2>Cennik</h2>
        </div>
        <div className="grid grid-3">
          {tiers.map((t, i) => (
            <div key={i} className={`card ${t.featured ? "card-accent" : ""}`} style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
              <h3 style={{ marginBottom: 20 }}>{t.name}</h3>
              <div style={{ fontSize: t.isText ? "1.5rem" : "2.5rem", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--accent)", marginBottom: 12, lineHeight: 1.1 }}>{t.price}</div>
              <div className="text-muted" style={{ fontSize: "0.9rem", marginBottom: 28, maxWidth: 240 }}>{t.note}</div>
              <a href="#kontakt" className={`btn ${t.featured ? "btn-accent" : "btn-secondary"}`} style={{ justifyContent: "center", marginTop: "auto" }}>Zapytaj<Icon name="arrow" size={14} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === TWORZENIE STRON (special-service z oryginału) ===
const WebsitesService = () => (
  <section className="section" id="strony" style={{ background: "var(--bg-elev)" }}>
    <div className="container">
      <div className="section-header">
        <span className="eyebrow">/ Usługa Specjalna</span>
        <h2>Tworzenie Stron Internetowych</h2>
        <p className="text-muted" style={{ fontSize: "1.05rem", maxWidth: 720, margin: "16px auto 0" }}>Profesjonalne strony internetowe, które wyróżnią Twój biznes w sieci. Wybierz model współpracy dopasowany do Twoich potrzeb.</p>
      </div>
      <div className="grid grid-2">
        <div className="card">
          <span className="chip" style={{ marginBottom: 16 }}>Projekt</span>
          <h3 style={{ marginBottom: 8 }}>Kompleksowe wdrożenie projektowe</h3>
          <p className="accent" style={{ fontSize: "0.95rem", marginBottom: 16, fontWeight: 500 }}>Gotowa strona + pełny kod źródłowy w Twoich rękach.</p>
          <p className="text-muted" style={{ marginBottom: 20 }}>
            Projektujemy i budujemy Twoją stronę od podstaw, wykorzystując nowoczesny stack technologiczny. Po odbiorze projektu otrzymujesz kompletny kod źródłowy — bez abonamentów, bez ukrytych kosztów, bez zobowiązań.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}><span className="accent" style={{ marginTop: 2 }}><Icon name="check" size={14} /></span><span>Indywidualny projekt UI/UX dopasowany do marki</span></li>
            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}><span className="accent" style={{ marginTop: 2 }}><Icon name="check" size={14} /></span><span>Responsywna implementacja (mobile-first)</span></li>
            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}><span className="accent" style={{ marginTop: 2 }}><Icon name="check" size={14} /></span><span>Pełna własność kodu — robisz z nim, co chcesz</span></li>
          </ul>
          <a href="#kontakt" className="btn btn-secondary" style={{ justifyContent: "center" }}>Zapytaj o wycenę<Icon name="arrow" size={14} /></a>
        </div>
        <div className="card card-accent">
          <span className="chip" style={{ marginBottom: 16, color: "var(--accent)", borderColor: "var(--accent)" }}>★ Subskrypcja</span>
          <h3 style={{ marginBottom: 8 }}>Pełna obsługa &amp; CMS</h3>
          <p className="accent" style={{ fontSize: "0.95rem", marginBottom: 16, fontWeight: 500 }}>Edytuj treści w kilka sekund — bez pisania kodu.</p>
          <p className="text-muted" style={{ marginBottom: 20 }}>
            Skup się na biznesie, a my zajmiemy się technologią. Otrzymujesz intuicyjny panel CMS (Sanity.io), w którym zmiana tekstów czy zdjęć publikuje się natychmiast na stronie. W pakiecie: hosting, utrzymanie i wsparcie techniczne.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}><span className="accent" style={{ marginTop: 2 }}><Icon name="check" size={14} /></span><span>Panel CMS — edycja treści bez programisty</span></li>
            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}><span className="accent" style={{ marginTop: 2 }}><Icon name="check" size={14} /></span><span>Natychmiastowa publikacja zmian na żywo</span></li>
            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}><span className="accent" style={{ marginTop: 2 }}><Icon name="check" size={14} /></span><span>Hosting i domena w cenie subskrypcji</span></li>
            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}><span className="accent" style={{ marginTop: 2 }}><Icon name="check" size={14} /></span><span>Bieżące aktualizacje i wsparcie techniczne</span></li>
            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.9rem" }}><span className="accent" style={{ marginTop: 2 }}><Icon name="check" size={14} /></span><span>Comiesięczny raport wydajności strony</span></li>
          </ul>
          <a href="#kontakt" className="btn btn-accent" style={{ justifyContent: "center" }}>Wybierz subskrypcję<Icon name="arrow" size={14} /></a>
        </div>
      </div>
    </div>
  </section>
);

// === DLACZEGO BRIGHTMIND (4 punkty z oryginału + przewaga ekspercka) ===
const WhyUs = () => {
  const reasons = [
    { num: "01", icon: "zap", title: "Szybka Implementacja", desc: "Wdrażamy rozwiązania AI w rekordowym czasie — pierwsze rezultaty już po 7 dniach." },
    { num: "02", icon: "target", title: "Dopasowane Rozwiązania", desc: "Każdy projekt dostosowujemy do specyfiki Twojej branży i indywidualnych potrzeb." },
    { num: "03", icon: "chart", title: "Mierzalne Efekty", desc: "Średnio 40% wzrost produktywności i 60% redukcja czasu wykonywania zadań." },
    { num: "04", icon: "lock", title: "Bezpieczeństwo Danych", desc: "RODO-compliant rozwiązania z najwyższymi standardami ochrony danych." },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">/ Dlaczego BrightMind AI</span>
          <h2>Dlaczego BrightMind AI?</h2>
        </div>
        <div className="grid grid-2">
          {reasons.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 24, padding: "28px 0", borderTop: i < 2 ? "none" : "1px solid var(--border)" }}>
              <div className="mono accent" style={{ fontSize: "0.85rem", letterSpacing: "0.1em", paddingTop: 4, minWidth: 32 }}>{r.num}</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span className="accent"><Icon name={r.icon} size={18} /></span>
                  <h3>{r.title}</h3>
                </div>
                <p className="text-muted">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === AI W PRAKTYCE TEASER (z oryginału) ===
const AIShowcase = () => {
  const items = [
    { icon: "📊", title: "Claude AI w Excel", desc: "Analiza danych w naturalnym języku — bez formuł i makr." },
    { icon: "🏥", title: "MedGemma MRI", desc: "Lokalna analiza obrazów medycznych z pełną prywatnością danych." },
    { icon: "📄", title: "OCR — Tekst z obrazu", desc: "Automatyczne odczytywanie tekstu ze zdjęć, skanów i PDF-ów." },
    { icon: "📱", title: "Aplikacja mobilna", desc: "Własna aplikacja mobilna bez pisania kodu — AI robi to za Ciebie." },
    { icon: "🧬", title: "Evo 2 — Genetyka", desc: "Przewidywanie mutacji genetycznych na poziomie genomu." },
  ];

  return (
    <section className="section" id="ai-showcase" style={{ background: "var(--bg-elev)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">/ AI w praktyce</span>
          <h2>Zobacz, jak to działa.<br /><span className="text-muted">Praktyczne zastosowania AI w codziennym życiu.</span></h2>
        </div>
        <div className="grid grid-3" style={{ marginBottom: 32 }}>
          {items.map((it, i) => (
            <div key={i} className="card" style={{ padding: 24 }}>
              <div style={{ fontSize: "2rem", marginBottom: 12, lineHeight: 1 }}>{it.icon}</div>
              <h3 style={{ marginBottom: 8, fontSize: "1.1rem" }}>{it.title}</h3>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>{it.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="#" className="btn btn-secondary">Zobacz wszystkie przykłady<Icon name="arrow" size={14} /></a>
        </div>
      </div>
    </section>
  );
};

// === PROCES (5 kroków z oryginału) ===
const Process = () => {
  const steps = [
    { n: "01", title: "🎯 Analiza potrzeb", desc: "Przeprowadzam szczegółową analizę Twoich procesów biznesowych i identyfikuję obszary, które najbardziej skorzystają na automatyzacji AI.", time: "1–2 tyg." },
    { n: "02", title: "📋 Strategia wdrożenia", desc: "Opracowuję spersonalizowaną roadmapę z konkretnymi krokami, harmonogramem i oczekiwanymi rezultatami.", time: "1 tydzień" },
    { n: "03", title: "⚙️ Implementacja", desc: "Wdrażam wybrane rozwiązania AI, konfiguruję narzędzia i integruję je z Twoimi istniejącymi systemami.", time: "2–6 tyg." },
    { n: "04", title: "📚 Szkolenie zespołu", desc: "Prowadzę kompleksowe szkolenia dla Twojego zespołu, aby wszyscy mogli efektywnie wykorzystywać nowe narzędzia AI.", time: "1 tydzień" },
    { n: "05", title: "🚀 Wsparcie i optymalizacja", desc: "Zapewniam ciągłe wsparcie, monitoruję efekty i optymalizuję rozwiązania, aby maksymalizować korzyści.", time: "ciągłe" },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">/ Proces współpracy</span>
          <h2>Jak przebiega proces współpracy?</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 120px", gap: 32, padding: "28px 0", borderTop: "1px solid var(--border)", alignItems: "start" }}>
              <div className="mono" style={{ fontSize: "0.875rem", color: "var(--accent)", letterSpacing: "0.1em" }}>{s.n}</div>
              <div>
                <h3 style={{ marginBottom: 8 }}>{s.title}</h3>
                <p className="text-muted" style={{ maxWidth: 600 }}>{s.desc}</p>
              </div>
              <div className="mono text-dim" style={{ fontSize: "0.825rem", textAlign: "right" }}>{s.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === FAQ (z oryginału + 2 dodane: NIS2, certyfikaty) ===
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: "🤖 Czy AI zastąpi moich pracowników?", a: "Nie - AI ma za zadanie wspierać i wzmacniać możliwości Twoich pracowników, a nie ich zastępować. Pomagamy zautomatyzować rutynowe zadania, dzięki czemu Twój zespół może skupić się na bardziej kreatywnych i strategicznych działaniach." },
    { q: "💰 Ile kosztuje wdrożenie AI w mojej firmie?", a: "Koszty zależą od skali i złożoności projektu. Pakiet Start-AI (diagnoza) kosztuje 369 zł, a kompleksowe wdrożenia rozpoczynamy od 2000 zł. Oferujemy bezpłatną konsultację, podczas której omówimy Twoje potrzeby i przygotujemy spersonalizowaną wycenę." },
    { q: "⏱️ Jak długo trwa wdrożenie?", a: "Podstawowe wdrożenie zajmuje 1-2 tygodnie, a kompleksowe projekty 1-3 miesiące. Pierwsze efekty widoczne są już po kilku dniach. Wszystko zależy od zakresu automatyzacji i złożoności procesów w Twojej organizacji." },
    { q: "🔐 Czy moje dane są bezpieczne?", a: "Absolutnie! Wszystkie nasze rozwiązania są w pełni zgodne z RODO. Korzystamy z lokalnych modeli LLM lub bezpiecznych API z najwyższymi certyfikatami bezpieczeństwa. Twoje dane nigdy nie są wykorzystywane do trenowania modeli AI." },
    { q: "📚 Czy otrzymam szkolenie dla zespołu?", a: "Tak! Każde wdrożenie obejmuje kompleksowe wsparcie dla zespołu. W Pakiecie Fit-AI znajdziesz szkolenia dostosowane do potrzeb Twojej firmy, bibliotekę promptów oraz wsparcie poimplementacyjne. Dodatkowo nagrywamy video-instrukcje do wielokrotnego użytku. Możemy zorganizować szkolenia w różnych formatach - zarówno krótkie warsztaty, jak i rozbudowane programy rozwojowe." },
  ];

  return (
    <section className="section">
      <div className="container-narrow">
        <div className="section-header">
          <span className="eyebrow">/ FAQ</span>
          <h2>Najczęściej zadawane pytania</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div key={i} style={{ borderTop: "1px solid var(--border)", borderBottom: i === items.length - 1 ? "1px solid var(--border)" : "none" }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  padding: "24px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "var(--fg)",
                  fontFamily: "inherit",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  textAlign: "left",
                  letterSpacing: "-0.01em",
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
      </div>
    </section>
  );
};

// === KONTAKT (jak w oryginale, czystszy układ) ===
const Contact = () => (
  <section className="section" id="kontakt" style={{ background: "var(--bg-elev)" }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <span className="eyebrow">/ Kontakt</span>
          <h2 style={{ margin: "12px 0 32px" }}>Skontaktuj się z nami</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            <a href="mailto:kontakt@brightmind-solutions.com" style={{ display: "flex", gap: 16, alignItems: "center", padding: 16, border: "1px solid var(--border)", borderRadius: "var(--radius)", color: "var(--fg)" }}>
              <Icon name="file" />
              <div>
                <div className="text-dim" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Email</div>
                <div>kontakt@brightmind-solutions.com</div>
              </div>
            </a>
            <a href="tel:+48730152161" style={{ display: "flex", gap: 16, alignItems: "center", padding: 16, border: "1px solid var(--border)", borderRadius: "var(--radius)", color: "var(--fg)" }}>
              <Icon name="users" />
              <div>
                <div className="text-dim" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Telefon</div>
                <div>+48 730 152 161</div>
              </div>
            </a>
          </div>
          <div className="mono text-dim" style={{ fontSize: "0.8rem" }}>
            Pn–Pt 9:00–17:00 · CET
          </div>
        </div>
        <form className="card" style={{ padding: 32 }} onSubmit={(e) => { e.preventDefault(); alert("Demo formularz — wiadomość wysłana"); }}>
          <h3 style={{ marginBottom: 24 }}>📬 Formularz kontaktowy</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <FormField label="Imię i nazwisko" required placeholder="Jan Kowalski" />
            <FormField label="Adres e-mail" required type="email" placeholder="jan@firma.pl" />
            <FormField label="Numer telefonu" type="tel" placeholder="+48 123 456 789" />
            <FormField label="Nazwa firmy" placeholder="Firma sp. z o.o." />
            <FormSelect label="Czego dotyczy zapytanie?" options={["Doradztwo AI dla firm", "Korepetycje AI", "Automatyzacja marketingu", "Agenci AI / automatyzacja", "Spersonalizowane asystenty", "Wdrożenia NIS2", "Strona internetowa", "Inne"]} />
            <FormTextarea label="Opis projektu / dodatkowe informacje" required placeholder="Opisz swoje potrzeby, oczekiwania i cele projektu. Im więcej szczegółów, tym lepiej dopasuję ofertę." />
            <label style={{ display: "flex", gap: 10, fontSize: "0.85rem", color: "var(--fg-muted)", lineHeight: 1.5 }}>
              <input type="checkbox" required style={{ marginTop: 4 }} />
              <span>Wyrażam zgodę na przetwarzanie danych zgodnie z <a href="#">Polityką Prywatności</a>. *</span>
            </label>
            <label style={{ display: "flex", gap: 10, fontSize: "0.85rem", color: "var(--fg-muted)", lineHeight: 1.5 }}>
              <input type="checkbox" style={{ marginTop: 4 }} />
              <span>Wyrażam zgodę na otrzymywanie informacji marketingowych o usługach BrightMind AI Solutions.</span>
            </label>
            <button type="submit" className="btn btn-primary" style={{ justifyContent: "center", marginTop: 8 }}>Wyślij wiadomość 🚀</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const FormField = ({ label, required, type = "text", placeholder }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <span style={{ fontSize: "0.85rem", color: "var(--fg-muted)" }}>{label} {required && <span style={{ color: "var(--accent)" }}>*</span>}</span>
    <input type={type} placeholder={placeholder} required={required} style={{
      background: "var(--bg)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "12px 14px",
      color: "var(--fg)",
      fontFamily: "inherit",
      fontSize: "0.95rem",
    }} />
  </label>
);

const FormSelect = ({ label, options }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <span style={{ fontSize: "0.85rem", color: "var(--fg-muted)" }}>{label}</span>
    <select style={{
      background: "var(--bg)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "12px 14px",
      color: "var(--fg)",
      fontFamily: "inherit",
      fontSize: "0.95rem",
    }}>
      {options.map((o, i) => <option key={i}>{o}</option>)}
    </select>
  </label>
);

const FormTextarea = ({ label, required, placeholder }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <span style={{ fontSize: "0.85rem", color: "var(--fg-muted)" }}>{label} {required && <span style={{ color: "var(--accent)" }}>*</span>}</span>
    <textarea placeholder={placeholder} required={required} rows={4} style={{
      background: "var(--bg)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "12px 14px",
      color: "var(--fg)",
      fontFamily: "inherit",
      fontSize: "0.95rem",
      resize: "vertical",
    }}></textarea>
  </label>
);

Object.assign(window, { Services, Packages, Pricing, WebsitesService, WhyUs, AIShowcase, Process, FAQ, Contact });
