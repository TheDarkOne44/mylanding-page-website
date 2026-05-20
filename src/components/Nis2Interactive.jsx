import { useState } from 'react';

const CheckIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
);
const AlertIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={10}/><path d="M12 8v4M12 16h.01"/></svg>
);
const ArrowIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>
);

// NIS2 Checker Quiz
const questions = [
  { id: "size", q: "Czy firma zatrudnia ponad 50 pracowników lub ma obrót powyżej 10 mln EUR?" },
  { id: "sector_key", q: "Czy działa w sektorze kluczowym (energetyka, transport, banki, ochrona zdrowia, woda, infrastruktura cyfrowa, administracja publiczna)?" },
  { id: "sector_imp", q: "Lub w sektorze ważnym (poczta, gospodarka odpadami, produkcja chemikaliów/leków/maszyn, dostawcy usług cyfrowych, badania naukowe)?" },
  { id: "supply", q: "Czy jest dostawcą lub podwykonawcą podmiotu objętego NIS2?" },
];

export function Checker() {
  const [answers, setAnswers] = useState({});
  const setAns = (id, v) => setAnswers(prev => ({ ...prev, [id]: v }));
  const allAnswered = questions.every(q => answers[q.id]);

  let result = null;
  if (allAnswered) {
    if (answers.size === "yes" && (answers.sector_key === "yes" || answers.sector_imp === "yes")) {
      result = { type: "yes", title: "Twoja firma prawdopodobnie podlega NIS2", desc: "Spełniasz oba kryteria: rozmiar + sektor. Powinieneś rozpocząć audyt zgodności jak najszybciej. Kary za brak zgodności sięgają 10 mln EUR." };
    } else if (answers.supply === "yes") {
      result = { type: "maybe", title: "Możesz podlegać pośrednio", desc: "Jako dostawca podmiotu objętego NIS2, zostaniesz zobowiązany umownie do spełnienia wymogów bezpieczeństwa łańcucha dostaw." };
    } else {
      result = { type: "no", title: "Prawdopodobnie nie podlegasz NIS2", desc: "Na podstawie odpowiedzi — nie spełniasz progów. Ale zalecam mimo to wdrożenie podstawowych zabezpieczeń (RODO i tak obowiązuje)." };
    }
  }

  const colors = { yes: "var(--danger)", maybe: "var(--warn)", no: "var(--success)" };

  return (
    <section className="section" id="sprawdz" style={{ background: "var(--bg-elev)" }}>
      <div className="container-narrow">
        <div className="section-header">
          <span className="eyebrow">/ Sprawdź w 60 sekund</span>
          <h2>Czy Twoja firma podlega NIS2?</h2>
          <p className="text-muted" style={{ fontSize: "1.05rem" }}>4 pytania. Otrzymasz wstępną ocenę. Pełny audyt potwierdzi status wiążąco.</p>
        </div>
        <div className="card" style={{ padding: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {questions.map((q, i) => (
              <div key={q.id} style={{ paddingBottom: 20, borderBottom: i < questions.length - 1 ? "1px solid var(--border)" : "none" }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <span className="mono accent" style={{ fontSize: "0.8rem", paddingTop: 2 }}>0{i+1}</span>
                  <span style={{ fontWeight: 500 }}>{q.q}</span>
                </div>
                <div style={{ display: "flex", gap: 8, marginLeft: 28, flexWrap: "wrap" }}>
                  {[{ v: "yes", l: "Tak" }, { v: "no", l: "Nie" }, { v: "unsure", l: "Nie wiem" }].map(opt => (
                    <button key={opt.v} onClick={() => setAns(q.id, opt.v)} className="btn" style={{
                      padding: "8px 16px", fontSize: "0.85rem",
                      background: answers[q.id] === opt.v ? "var(--accent)" : "transparent",
                      color: answers[q.id] === opt.v ? "#061018" : "var(--fg)",
                      border: `1px solid ${answers[q.id] === opt.v ? "var(--accent)" : "var(--border-strong)"}`,
                    }}>{opt.l}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {result && (
            <div style={{ marginTop: 24, padding: 20, borderRadius: "var(--radius)", border: `1px solid ${colors[result.type]}`, background: "var(--bg)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: colors[result.type], marginTop: 2 }}>
                  {result.type === "no" ? <CheckIcon size={20} /> : <AlertIcon size={20} />}
                </span>
                <div>
                  <h3 style={{ marginBottom: 8, color: colors[result.type] }}>{result.title}</h3>
                  <p className="text-muted" style={{ marginBottom: 16 }}>{result.desc}</p>
                  <a href="#kontakt" className="btn btn-primary" style={{ fontSize: "0.85rem", padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Umów bezpłatną konsultację<ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// NIS2 FAQ Accordion
const faqItems = [
  { q: "Od kiedy obowiązuje NIS2?", a: "Dyrektywa NIS2 weszła w życie 16 października 2024 w UE. Polska implementuje ją przez nowelizację ustawy o krajowym systemie cyberbezpieczeństwa (KSC). Niezależnie od tempa polskiej legislacji, wymogi obowiązują polskie firmy działające w UE." },
  { q: "Kto dokładnie podlega NIS2?", a: "Podmioty kluczowe: energetyka, transport, banki, infrastruktura rynku finansowego, ochrona zdrowia, woda pitna, ścieki, infrastruktura cyfrowa, administracja publiczna, kosmos. Podmioty ważne: poczta, gospodarka odpadami, produkcja chemikaliów/leków/maszyn/elektroniki/żywności, dostawcy usług cyfrowych, badania naukowe. Próg: 50+ pracowników lub obrót >10 mln EUR." },
  { q: "Jakie są kary za brak zgodności?", a: "Dla podmiotów kluczowych — do 10 mln EUR lub 2% globalnego obrotu (wyższy próg). Dla podmiotów ważnych — do 7 mln EUR lub 1,4% obrotu. Dodatkowo: odpowiedzialność osobista członków zarządu, możliwy zakaz pełnienia funkcji kierowniczych." },
  { q: "Ile trwa pełne wdrożenie?", a: "Standardowo 12 tygodni od podpisania umowy do certyfikacji. Audyt wstępny (2 tyg.) + remediation (8 tyg.) + audyt końcowy i dokumentacja (2 tyg.). Dla większych organizacji 16–20 tygodni." },
  { q: "Co odróżnia BrightMind AI od kancelarii prawnej / firmy IT?", a: "Kancelarie prawne nie wdrożą procedur technicznych. Firmy IT nie napiszą polityk zgodnych z prawem polskim. Konsultanci compliance nie wdrożą rozwiązań AI bezpiecznych dla NIS2. Patryk Gliński łączy wszystkie trzy kompetencje — radca prawny, Google Cloud Generative AI Leader, Blue Team HackerU. Jeden kontrakt, jedna odpowiedzialność." },
];

export function Nis2FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container-narrow">
        <div className="section-header">
          <span className="eyebrow">/ FAQ</span>
          <h2>Pytania, które zadaje zarząd.</h2>
        </div>
        <div>
          {faqItems.map((item, i) => (
            <div key={i} style={{ borderTop: "1px solid var(--border)", borderBottom: i === faqItems.length - 1 ? "1px solid var(--border)" : "none" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: "100%", background: "transparent", border: "none", padding: "24px 0",
                display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer",
                color: "var(--fg)", fontFamily: "inherit", fontSize: "1.05rem", fontWeight: 500, textAlign: "left",
              }}>
                <span>{item.q}</span>
                <span style={{ color: "var(--accent)", fontSize: "1.5rem", lineHeight: 1, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </button>
              {open === i && <div style={{ paddingBottom: 24, color: "var(--fg-muted)" }}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
