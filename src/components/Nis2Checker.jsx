import { useState } from 'react';

const AlertIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={12} cy={12} r={10} /><path d="M12 8v4M12 16h.01" />
  </svg>
);
const CheckIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
);
const ArrowIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
  </svg>
);

const questions = [
  { id: "size", q: "Czy firma zatrudnia ponad 50 pracowników lub ma obrót powyżej 10 mln EUR?" },
  { id: "sector_key", q: "Czy działa w sektorze kluczowym (energetyka, transport, banki, ochrona zdrowia, woda, infrastruktura cyfrowa, administracja publiczna)?" },
  { id: "sector_imp", q: "Lub w sektorze ważnym (poczta, gospodarka odpadami, produkcja chemikaliów/leków/maszyn, dostawcy usług cyfrowych, badania naukowe)?" },
  { id: "supply", q: "Czy jest dostawcą lub podwykonawcą podmiotu objętego NIS2?" },
];

export default function Nis2Checker() {
  const [answers, setAnswers] = useState({});
  const setAns = (id, v) => setAnswers(prev => ({ ...prev, [id]: v }));
  const allAnswered = questions.every(q => answers[q.id]);

  let result = null;
  if (allAnswered) {
    if (answers.size === "yes" && (answers.sector_key === "yes" || answers.sector_imp === "yes")) {
      result = { type: "yes", title: "Twoja firma prawdopodobnie podlega NIS2", desc: "Spełniasz oba kryteria: rozmiar + sektor. Powinieneś rozpocząć audyt zgodności jak najszybciej. Kary za brak zgodności sięgają 10 mln EUR." };
    } else if (answers.supply === "yes") {
      result = { type: "maybe", title: "Możesz podlegać pośrednio", desc: "Jako dostawca podmiotu objętego NIS2, zostaniesz zobowiązany umownie do spełnienia wymogów bezpieczeństwa łańcucha dostaw. Skontaktuj się — przeprowadzę audyt." };
    } else {
      result = { type: "no", title: "Prawdopodobnie nie podlegasz NIS2", desc: "Na podstawie odpowiedzi — nie spełniasz progów. Ale zalecam mimo to wdrożenie podstawowych zabezpieczeń (RODO i tak obowiązuje). Mogę pomóc na poziomie podstawowym." };
    }
  }

  const colors = { yes: "var(--danger)", maybe: "var(--warn)", no: "var(--success)" };

  return (
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
              {result.type === "no" ? <CheckIcon /> : <AlertIcon />}
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
  );
}
