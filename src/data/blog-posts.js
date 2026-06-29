// Centralna lista artykułów blogowych — źródło prawdy dla /blog/ oraz pojedynczych wpisów.
// Każdy wpis ma odpowiadającą stronę w src/pages/blog/<slug>.astro
export const SITE = 'https://brightmindsolutions.pl';

export const author = {
  name: 'Patryk Gliński',
  jobTitle: 'Radca prawny · Ekspert AI · Założyciel BrightMind AI Solutions',
  url: `${SITE}/o-mnie/`,
  image: `${SITE}/IMG_0406.jpg`,
  sameAs: [
    'https://www.youtube.com/@Neural_Update',
    'https://www.linkedin.com/in/patryk-gli%C5%84ski-172370215',
  ],
};

// Kolejność w tablicy = kolejność wyświetlania na liście bloga (najnowsze pierwsze).
export const posts = [
  {
    slug: 'nis2-dla-msp-checklista-90-dni',
    title: 'NIS2 dla MŚP — checklista wdrożenia w 90 dni',
    description:
      'Praktyczny przewodnik po wdrożeniu dyrektywy NIS2 w małej i średniej firmie. Checklista 90 dni, analiza luki, polityki bezpieczeństwa, raportowanie incydentów i odpowiedzialność zarządu.',
    excerpt:
      'Dyrektywa NIS2 obejmuje znacznie więcej firm niż jej poprzedniczka. Pokazuję krok po kroku, jak w 90 dni przejść od zera do zgodności — bez kosztownego konsultingu korporacyjnego.',
    category: 'Compliance NIS2',
    date: '2026-06-16',
    dateModified: '2026-06-16',
    readingTime: 16,
    keywords:
      'NIS2 dla MŚP, wdrożenie NIS2, checklista NIS2, audyt NIS2 cena, dyrektywa NIS2 małe firmy, compliance NIS2, cyberbezpieczeństwo MŚP',
    cover: { hue: 'shield', label: 'Compliance' },
  },
  {
    slug: 'ile-kosztuje-wdrozenie-ai-w-firmie-b2b',
    title: 'Ile kosztuje wdrożenie AI w firmie? Realne widełki B2B na 2026',
    description:
      'Przejrzysty rozkład kosztów wdrożenia AI w firmie B2B: licencje modeli, automatyzacje, agenci AI, koszty ukryte i zwrot z inwestycji. Konkretne widełki w złotówkach.',
    excerpt:
      'Najczęstsze pytanie od klientów: „ile to kosztuje?”. Rozbijam koszty wdrożenia AI na czynniki pierwsze — od abonamentu za model po koszt utrzymania — i pokazuję, kiedy inwestycja się zwraca.',
    category: 'Wdrożenia AI',
    date: '2026-06-09',
    dateModified: '2026-06-09',
    readingTime: 12,
    keywords:
      'ile kosztuje wdrożenie AI, koszty AI B2B, cena automatyzacji AI, ROI sztucznej inteligencji, budżet AI dla firmy',
    cover: { hue: 'cost', label: 'Koszty i ROI' },
  },
  {
    slug: 'n8n-vs-zapier-automatyzacja-dla-firm',
    title: 'n8n vs Zapier — którą platformę automatyzacji wybrać w 2026?',
    description:
      'Porównanie n8n i Zapier dla firm: koszty, hosting własny vs chmura, prywatność danych, integracje AI, limity i scenariusze, w których wygrywa każde z narzędzi.',
    excerpt:
      'n8n czy Zapier? To nie jest pytanie o „lepsze narzędzie”, tylko o model kosztów, kontrolę nad danymi i skalę. Porównuję oba pod kątem realnych wdrożeń B2B.',
    category: 'Automatyzacja',
    date: '2026-06-02',
    dateModified: '2026-06-02',
    readingTime: 11,
    keywords:
      'n8n vs Zapier, automatyzacja procesów, n8n self-hosted, Zapier alternatywa, automatyzacja AI dla firm, no-code automatyzacja',
    cover: { hue: 'flow', label: 'Automatyzacja' },
  },
  {
    slug: 'lokalne-llm-dla-firm',
    title: 'Lokalne modele LLM dla firm — kiedy warto i jak zacząć',
    description:
      'Lokalne modele LLM (Llama, Mistral, Qwen) na własnej infrastrukturze: prywatność danych, zgodność z RODO i NIS2, wymagania sprzętowe, koszty i kiedy lokalny model bije API chmurowe.',
    excerpt:
      'Nie każda firma może wysyłać dane do chmury OpenAI czy Anthropic. Lokalne LLM to dziś realna alternatywa — pokazuję, kiedy się opłacają, jakiego sprzętu wymagają i od czego zacząć.',
    category: 'Bezpieczeństwo',
    date: '2026-05-26',
    dateModified: '2026-05-26',
    readingTime: 13,
    keywords:
      'lokalne LLM, lokalne modele LLM dla firm, Llama dla firmy, prywatność danych AI, RODO AI, on-premise LLM, Ollama firma',
    cover: { hue: 'lock', label: 'Prywatność' },
  },
  {
    slug: '7-zastosowan-agentow-ai-w-firmie',
    title: '7 zastosowań agentów AI w firmie — od obsługi klienta po analizę dokumentów',
    description:
      'Siedem konkretnych use case’ów agentów AI dla firm B2B: obsługa klienta, kwalifikacja leadów, analiza dokumentów, raportowanie, monitoring, onboarding i research. Z opisem wdrożenia.',
    excerpt:
      'Agent AI to nie chatbot. To system, który samodzielnie wykonuje wieloetapowe zadania. Pokazuję 7 zastosowań, które realnie oszczędzają godziny pracy w polskich firmach.',
    category: 'Agenci AI',
    date: '2026-05-19',
    dateModified: '2026-05-19',
    readingTime: 12,
    keywords:
      'agenci AI dla firm, zastosowania agentów AI, AI agent use case, automatyzacja obsługi klienta AI, agent AI analiza dokumentów',
    cover: { hue: 'bot', label: 'Agenci AI' },
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);

// Zwraca do `limit` innych wpisów (do sekcji „Powiązane artykuły”).
export const relatedPosts = (slug, limit = 2) =>
  posts.filter((p) => p.slug !== slug).slice(0, limit);

// Formatowanie daty po polsku, np. „16 czerwca 2026”.
export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
