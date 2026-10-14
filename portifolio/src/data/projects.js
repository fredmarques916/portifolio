/**
 * Projects data for Frederico Marques
 * Chronological order confirmed:
 * 1. Solidariza (1º Semestre 2026 — Fundamentos Web, Trabalho Interdisciplinar PUC Minas)
 * 2. Expandindo Horizontes (2026 — Aplicação Full Stack Web, 1ª Oficialaria Executiva DeMolay MG)
 * 3. BioSense (2026 — Telemetria IoT, Laravel, Python, Hardware Arduino/ESP32, Classificado Fase Estadual)
 */

export const projectsData = [
  {
    id: "solidariza",
    title: "Solidariza",
    subtitle: {
      pt: "Plataforma Centralizada de Gestão Humanitária e Doações Transparentes",
      en: "Centralized Humanitarian Aid Platform & Transparent Donation Ecosystem",
    },
    period: "2026 (1º Semestre)",
    narrativeStage: {
      pt: "Fase 01 • Understanding (Compreender)",
      en: "Phase 01 • Understanding",
    },
    tagline: {
      pt: "Aproximando doadores, organizadores e beneficiários em ações de impacto social",
      en: "Connecting donors, organizers, and beneficiaries in social impact initiatives",
    },
    problem: {
      pt: "A fragmentação das ações de caridade e a falta de transparência na prestação de contas geram desconfiança nos doadores e dificultam o atendimento ágil a famílias em situação de vulnerabilidade social extrema.",
      en: "Fragmentation in humanitarian initiatives and lack of transparent accountability lead to donor distrust and create significant barriers to delivering timely aid to vulnerable communities.",
    },
    solution: {
      pt: "Desenvolvimento de uma plataforma web responsiva e modular que centraliza campanhas solidárias, simulação de doações, cadastro e triagem de pedidos de auxílio e prestação de contas pública e auditável.",
      en: "Development of a responsive, modular web platform centralizing charitable campaigns, simulated donation processing, aid request screening, and auditable public accountability.",
    },
    contribution: {
      pt: "Atuação como Product Owner (PO), conduzindo dinâmicas de Design Thinking e prototipação em Figma. Concepção e desenvolvimento do módulo administrativo central (aprovação e moderação de pedidos e campanhas), modelagem da base de dados e coordenação técnica da integração de código da equipe no repositório GitHub.",
      en: "Served as Product Owner (PO), leading Design Thinking discovery and Figma prototyping. Designed and engineered the core administrative dashboard (screening aid requests and campaign moderation), designed data schemas, and led technical code integration across the team repository.",
    },
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "Node.js",
      "JSON Server",
      "Figma",
      "Design Thinking",
      "Git",
    ],
    highlight: {
      pt: "Liderança de Produto & Coordenação de Integração Técnica",
      en: "Product Leadership & Technical Integration Coordination",
    },
    links: {
      repository: "https://github.com/fredmarques916", // configurável
      demo: null, // Campo configurável (sem URL inventada)
      statusNote: {
        pt: "Projeto acadêmico interdisciplinar concluído na PUC Minas",
        en: "Interdisciplinary academic software project completed at PUC Minas",
      },
    },
  },
  {
    id: "expandindo-horizontes",
    title: "Expandindo Horizontes",
    subtitle: {
      pt: "Sistema de Gestão e Acompanhamento de Visitações Regionais da Ordem DeMolay",
      en: "Regional Visitation Tracking & Analytics Platform for DeMolay Leadership",
    },
    period: "2026",
    narrativeStage: {
      pt: "Fase 02 • Building (Construir)",
      en: "Phase 02 • Building",
    },
    tagline: {
      pt: "Gestão inteligente de presença e auditoria de visitas para a liderança regional",
      en: "Smart attendance management and visitation auditing for regional leadership",
    },
    problem: {
      pt: "Acompanhar e validar a presença de oficiais executivos em capítulos e organizações vinculadas em todo o estado de Minas Gerais exigia processos manuais lentos, propensos a inconsistências e sem métricas consolidadas.",
      en: "Tracking and certifying executive officers' visits across affiliated chapters across the state of Minas Gerais relied on slow manual logs, prone to inconsistencies and lacking consolidated real-time metrics.",
    },
    solution: {
      pt: "Plataforma web SPA completa para registro, envio de comprovações fotográficas de atas, auditoria administrativa de visitas, notificações em tempo real e painel analítico com gráficos interativos.",
      en: "A complete SPA web platform for visit registration, photographic proof uploads, administrative auditing, real-time notifications, and an analytics dashboard with interactive charts.",
    },
    contribution: {
      pt: "Concepção e desenvolvimento full stack integral: arquitetura front-end em React + Vite, modelagem do banco relacional PostgreSQL com políticas Row Level Security (RLS) no Supabase, fluxo de cadastro multi-etapas com validações de negócio, integração de armazenamento para comprovações em nuvem e animações dinâmicas com GSAP.",
      en: "Full stack engineering and conception: architected modern front-end in React + Vite, modeled relational PostgreSQL schemas with Row Level Security (RLS) in Supabase, built multi-step validation wizards, cloud storage for verification photos, and fluid UI micro-interactions with GSAP.",
    },
    technologies: [
      "React 19",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Row Level Security (RLS)",
      "Supabase Storage",
      "Recharts",
      "GSAP",
      "Vanilla CSS",
    ],
    highlight: {
      pt: "Arquitetura Full Stack, Segurança em RLS e Experiência Reativa",
      en: "Full Stack Architecture, RLS Security & Fluid Reactive Experience",
    },
    links: {
      repository: "https://github.com/fredmarques916", // configurável
      demo: null, // Campo configurável
      statusNote: {
        pt: "Plataforma ativa vinculada à 1ª Oficialaria Executiva Regional de MG",
        en: "Active platform dedicated to the 1st Regional Executive Directorate of MG",
      },
    },
  },
  {
    id: "biosense",
    title: "BioSense",
    subtitle: {
      pt: "Sistema de Telemetria e Monitoramento Preventivo da Saúde Bovina",
      en: "IoT Telemetry & Preventive Livestock Health Intelligence System",
    },
    period: "2026",
    narrativeStage: {
      pt: "Fase 03 • Evolving (Evoluir)",
      en: "Phase 03 • Evolving",
    },
    tagline: {
      pt: "Detecção precoce de anomalias sanitárias por telemetria e marcadores procedurais",
      en: "Early anomaly detection through real-time telemetry and procedural cattle markers",
    },
    problem: {
      pt: "A pecuária tradicional depende de rondas visuais manuais periódicas. Doenças críticas geram alterações comportamentais e térmicas silenciosas de 4 a 6 dias antes dos sinais visíveis a olho nu, provocando diagnósticos tardios, contágio e prejuízos severos.",
      en: "Traditional livestock management relies on intermittent manual inspections. Critical diseases trigger subtle physiological and behavioral anomalies 4 to 6 days before clinical symptoms become visible, leading to delayed diagnoses, contagion, and severe losses.",
    },
    solution: {
      pt: "Ecossistema integrado conectando sensores vestíveis (IoT Arduino/ESP32) à ingestão de telemetria contínua via Python e plataforma web centralizada em Laravel. Fornece mapas interativos de pasto com marcadores dinâmicos, perfis individuais e alertas preventivos imediatos.",
      en: "An integrated ecosystem connecting wearable IoT devices (Arduino/ESP32) to real-time Python telemetry pipelines and a centralized Laravel web platform. Provides interactive pasture maps with dynamic markers, individual animal profiles, and immediate preventive health alerts.",
    },
    contribution: {
      pt: "Liderança técnica e atuação como Product Owner. Responsável pela concepção de software, modelagem de dados, desenvolvimento do back-end em Laravel, interface responsiva com mapas interativos (Leaflet e marcadores procedurais dinâmicos) e desenvolvimento do pipeline de ingestão serial de telemetria em Python.",
      en: "Tech Lead and Product Owner. Responsible for overall software architecture, data modeling, Laravel back-end engineering, responsive mapping dashboard (Leaflet with procedural behavioral markers), and Python serial telemetry ingestion pipeline.",
    },
    technologies: [
      "Laravel (PHP)",
      "Python",
      "Arduino / ESP32",
      "IoT Telemetry",
      "Leaflet.js",
      "Chart.js",
      "SQLite",
      "Docker",
      "Bootstrap",
    ],
    highlight: {
      pt: "Classificado para a Fase Estadual de Competição de Inovação e Automação",
      en: "Qualified for State Finals in Innovation & Automation Championship",
    },
    links: {
      repository: "https://github.com/fredmarques916", // configurável
      demo: null, // Campo configurável
      statusNote: {
        pt: "MVP funcional com ingestão contínua de telemetria e simulação de rebanho",
        en: "Functional MVP featuring continuous telemetry ingestion and livestock simulation",
      },
    },
  },
];
