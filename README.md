# Frederico Marques — Portfólio Profissional

> *"Understanding. Building. Evolving."*  
> Portfólio de engenharia de software e desenvolvimento full stack de **Frederico Marques**, estudante de Engenharia de Software na PUC Minas.

---

## 🎯 Sobre o Projeto

Aplicação web de página única (*Single Page Application*), narrativa e experimental, concebida para apresentar a identidade profissional, trajetória acadêmica, competências técnicas e projetos de Frederico Marques.

Inspirada no ritmo visual e presença editorial marcante do site de Lando Norris, mas com identidade gráfica e arquitetural própria — unindo precisão técnica, telemetria em tempo real, tipografia arrojada, paleta dark de alto contraste (*Obsidian & Cyber Volt*) e uma escultura volumétrica 3D autoral desenvolvida com Three.js.

---

## 🚀 Tecnologias e Ferramentas

| Camada | Tecnologias Utilizadas |
|---|---|
| **Core & Framework** | React 19, JavaScript (ES2024 / JSX), Vite 8 |
| **Cena 3D & Efeitos** | Three.js (WebGL com detecção e fallback CSS volumétrico) |
| **Estilização** | Vanilla CSS (Design System com custom properties e glassmorphism) |
| **Internacionalização** | Suporte bilíngue completo (Português & Inglês) sem dependências externas |
| **Qualidade & Linting** | Oxlint (Rust linter com 0 warnings e 0 erros) |
| **Acessibilidade** | Respeito integral a `prefers-reduced-motion`, semântica HTML5 e navegação por teclado |

---

## 🏗️ Estrutura do Repositório

```text
portifolio/
├── public/
│   ├── favicon.svg               # Favicon autoral com monograma FM
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navigation/           # Barra de navegação com telemetria e menu móvel
│   │   ├── LanguageToggle/       # Alternador acessível de idioma (PT / EN)
│   │   ├── ProjectTimeline/      # Linha do tempo cronológica interativa
│   │   ├── ProjectCard/          # Card detalhado com abas (Desafio, Solução, Contribuição)
│   │   └── ContactLinks/         # Cards interativos de contato com cópia de e-mail
│   ├── sections/
│   │   ├── Hero/                 # Abertura cinematográfica integrada ao Three.js
│   │   ├── About/                # Filosofia dos Três Pilares, biografia e interesses
│   │   ├── Education/            # Formação acadêmica (PUC Minas) e técnica (Trilhas, SENAI)
│   │   ├── Technologies/         # Arsenal tecnológico categorizado com prática real
│   │   ├── Projects/             # Seção de projetos integrada à timeline narrativa
│   │   ├── Experience/           # Vivência prática e programa de aprendizagem industrial
│   │   └── Contact/              # Conexão direta, redes sociais e rodapé institucional
│   ├── scenes/
│   │   └── HeroScene/            # Escultura 3D autoral (Core, Rings & Particles)
│   ├── data/
│   │   ├── profile.js            # Informações biográficas, contatos e formação
│   │   ├── projects.js           # Dados cronológicos e contribuições dos 3 projetos
│   │   └── translations.js       # Dicionário bilíngue natural (PT & EN)
│   ├── App.jsx                   # Orquestrador da aplicação e estado de idioma
│   ├── App.css
│   ├── index.css                 # Design System completo e tokens globais
│   └── main.jsx
├── index.html                    # SEO, Google Fonts e metadados
├── package.json
├── vite.config.js                # Build otimizado com code-splitting para Three.js
└── README.md
```

---

## 🧭 Linha do Tempo de Projetos

Apresentação cronológica da evolução técnica de Frederico Marques:

1. **Solidariza (1º Semestre de 2026 — *Phase 01: Understanding*)**  
   Plataforma centralizada de gestão humanitária e doações transparentes. Atuação como Product Owner (PO), descoberta com Design Thinking, prototipagem em Figma, desenvolvimento do painel administrativo e integração de código da equipe via GitHub.
   * *Stack:* HTML5, CSS3, JavaScript, Bootstrap 5, Node.js, JSON Server, Figma, Git.

2. **Expandindo Horizontes (2026 — *Phase 02: Building*)**  
   Plataforma oficial da 1ª Oficialaria Executiva Regional de MG (Ordem DeMolay) para gestão, registro e auditoria de visitas executivas com gráficos analíticos e notificações. Concepção e engenharia Full Stack integral.
   * *Stack:* React 19, Vite, Supabase, PostgreSQL, Row Level Security (RLS), Supabase Storage, Recharts, GSAP, Vanilla CSS.

3. **BioSense (2026 — *Phase 03: Evolving*)**  
   Sistema de telemetria IoT e monitoramento preventivo da saúde bovina para detecção precoce de anomalias sanitárias. Líder técnico e Product Owner, arquitetura web em Laravel, integração de telemetria serial em Python a partir de hardware Arduino/ESP32 e simulação de pasto com marcadores procedurais no Leaflet.
   * *Conquista:* Classificado para a Fase Estadual de Competição de Inovação e Automação.
   * *Stack:* Laravel (PHP), Python, Arduino / ESP32, Leaflet.js, Chart.js, SQLite, Docker, Bootstrap.

---

## 💻 Instruções para Execução Local

### Pré-requisitos
- Node.js 18+ instalado.
- Gerenciador de pacotes `npm`.

### Passos

```bash
# 1. Navegue até a pasta da aplicação
cd portifolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Para validar a qualidade de código (linter Rust)
npm run lint

# 5. Para gerar o build de produção otimizado
npm run build

# 6. Para visualizar a versão de produção localmente
npm run preview
```

---

## 🌐 Publicação no Render

Para publicar este portfólio no Render como **Static Site**:

1. Crie um novo **Static Site** no [Render Dashboard](https://dashboard.render.com).
2. Conecte o repositório `fredmarques916/portifolio`.
3. Configure os parâmetros de implantação:
   - **Root Directory:** `portifolio`
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist`
4. Clique em **Create Static Site**.
5. O site estará publicado com HTTPS e CDN global.

---

## 📬 Contato

- **E-mail:** [fredmarques916@gmail.com](mailto:fredmarques916@gmail.com)
- **GitHub:** [github.com/fredmarques916](https://github.com/fredmarques916)
- **LinkedIn:** [linkedin.com/in/frederico-marques-dev](https://www.linkedin.com/in/frederico-marques-dev/)
- **Localização:** Belo Horizonte, Minas Gerais, Brasil