export interface Localized {
  en: string
  fr: string
}

export interface Project {
  id: string
  name: string
  kind: Localized
  description: Localized
  stack: string[]
  highlight?: Localized
  link?: string
  demo?: string
}

export interface ExperienceItem {
  id: string
  role: Localized
  org: Localized
  period: Localized
  points: Localized[]
}

export interface EducationItem {
  id: string
  period: string
  degree: Localized
  school: Localized
  note?: Localized
}

export const profile = {
  name: 'Hazem Marrakchi',
  initials: 'HM',
  email: 'hazemmrk12@gmail.com',
  phoneDisplay: '+216 22 907 082',
  phoneHref: 'tel:+21622907082',
  github: 'https://github.com/HazemMarrakchi',
  linkedin: 'https://www.linkedin.com/in/hazem-marrakchi/',
  location: { en: 'GabÃ¨s, Tunisia', fr: 'GabÃ¨s, Tunisie' },
  role: { en: 'Software Engineer', fr: 'IngÃ©nieur en GÃ©nie Logiciel' },
  tagline: { en: 'Full Stack Developer', fr: 'DÃ©veloppeur Full Stack' },
  heroPitch: {
    en: 'I build production-grade full stack platforms â€” from distributed simulation engines to AI-powered SaaS â€” and ship them end to end.',
    fr: "Je construis des plateformes full stack de niveau production â€” des moteurs de simulation distribuÃ©s aux SaaS augmentÃ©s par l'IA â€” et je les livre de bout en bout.",
  },
  about: [
    {
      en: 'I am a Software Engineering graduate from ESSAT GabÃ¨s (EUR-ACEÂ® accredited programme), specialized in designing and developing modern Full Stack web applications and integrating AI-powered solutions.',
      fr: "DiplÃ´mÃ© en GÃ©nie Logiciel de l'ESSAT GabÃ¨s (programme accrÃ©ditÃ© EUR-ACEÂ®), je suis spÃ©cialisÃ© dans la conception et le dÃ©veloppement d'applications web Full Stack modernes et l'intÃ©gration de solutions d'intelligence artificielle.",
    },
    {
      en: 'My recent work goes from distributed, event-driven platforms â€” a real-time planetary simulation streaming 1M+ entities through Kafka and Flink, a multi-tenant IoT supervision SaaS on 6 microservices â€” to AI-integrated products (risk prediction, RAG, anomaly detection). I build production-grade platforms with trilingual i18n (EN/FR/AR+RTL), E2E testing (Cypress/Playwright), CI/CD and containerized deployments on Docker, Kubernetes and Terraform.',
      fr: "Mes rÃ©alisations rÃ©centes vont des plateformes distribuÃ©es Ã©vÃ©nementielles â€” une simulation planÃ©taire temps rÃ©el streamant 1M+ entitÃ©s via Kafka et Flink, un SaaS IoT multi-tenant sur 6 microservices â€” aux produits augmentÃ©s par l'IA (prÃ©diction de risque, RAG, dÃ©tection d'anomalies). Je construis des plateformes de production avec i18n trilingue (EN/FR/AR+RTL), tests E2E (Cypress/Playwright), CI/CD et dÃ©ploiements conteneurisÃ©s sur Docker, Kubernetes et Terraform.",
    },
  ] as Localized[],
  skillGroups: [
    {
      label: { en: 'Languages', fr: 'Langages' },
      items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'C++'],
    },
    {
      label: { en: 'Frontend', fr: 'Frontend' },
      items: ['React', 'Angular', 'Three.js', 'Tailwind CSS v4', 'Bootstrap', 'HTML5 / CSS3'],
    },
    {
      label: { en: 'Backend & APIs', fr: 'Backend & APIs' },
      items: ['Node.js', 'NestJS', 'Express.js', 'Spring Boot', 'FastAPI', 'REST APIs', 'WebSockets', '.NET'],
    },
    {
      label: { en: 'Streaming & Data', fr: 'Streaming & DonnÃ©es' },
      items: ['Apache Kafka', 'Apache Flink', 'PostgreSQL Â· PostGIS', 'TimescaleDB', 'Redis'],
    },
    {
      label: { en: 'Databases & ORM', fr: 'Bases de donnÃ©es & ORM' },
      items: ['MongoDB', 'MySQL', 'Oracle Database', 'SQLite', 'Drizzle ORM', 'Zod'],
    },
    {
      label: { en: 'AI & Machine Learning', fr: 'IA & Machine Learning' },
      items: ['Scikit-learn', 'Deep Learning', 'RAG'],
    },
    {
      label: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' },
      items: ['Docker', 'Kubernetes', 'Helm', 'Terraform', 'Microsoft Azure', 'Linux'],
    },
    {
      label: { en: 'Observability & Testing', fr: 'ObservabilitÃ© & Tests' },
      items: ['Prometheus', 'Grafana', 'Cypress E2E', 'Playwright E2E', 'CI/CD (GitHub & GitLab)', 'OpenAPI / Swagger'],
    },
    {
      label: { en: 'Tools & Methods', fr: 'Outils & MÃ©thodes' },
      items: ['Git', 'GitHub', 'Postman', 'Agile Scrum', 'UML', 'n8n'],
    },
  ],
  projects: [
    {
      id: 'gaia',
      name: 'GAIA â€” The Living Planet Simulation',
      kind: { en: 'Distributed Simulation Platform â€” 1M+ entities', fr: 'Plateforme de Simulation DistribuÃ©e â€” 1M+ entitÃ©s' },
      description: {
        en: 'A real-time distributed simulation platform that models the world as a system of interacting domains â€” energy/climate, cities, transport and finance â€” where a crisis in one domain mechanically propagates to the others. Java 21 discrete-event engine simulating 1M+ entities per tick (~130 ticks/s), events streamed through Kafka, continuously aggregated by Apache Flink into PostGIS, and an AI service (FastAPI) forecasting, detecting anomalies and suggesting interventions operators validate in a what-if scenario engine with deterministic replay. Mission-control 3D globe (Angular 19 + Three.js) with day/night earth, live regional hot-spots and cross-domain crisis HUD, plus an observability stack: Prometheus, Grafana, Micrometer metrics. Packaged with Docker Compose, Helm charts and Terraform (Azure AKS), CI/CD on GitLab.',
        fr: "Une plateforme de simulation distribuÃ©e temps rÃ©el modÃ©lisant le monde comme un systÃ¨me de domaines interconnectÃ©s â€” Ã©nergie/climat, villes, transport, finance â€” oÃ¹ une crise dans un domaine se propage mÃ©caniquement aux autres. Moteur Java 21 Ã  Ã©vÃ©nements discrets simulant 1M+ entitÃ©s par tick (~130 ticks/s), Ã©vÃ©nements streamÃ©s via Kafka, agrÃ©gÃ©s en continu par Apache Flink dans PostGIS, et un service IA (FastAPI) qui prÃ©voit, dÃ©tecte les anomalies et suggÃ¨re des interventions validables dans un moteur de scÃ©narios what-if avec replay dÃ©terministe. Globe 3D mission-control (Angular 19 + Three.js) avec terre jour/nuit, hot-spots rÃ©gionaux live et HUD de crise cross-domain, plus l'observabilitÃ© complÃ¨te : Prometheus, Grafana, mÃ©triques Micrometer. PackagÃ© avec Docker Compose, charts Helm et Terraform (Azure AKS), CI/CD GitLab.",
      },
      stack: ['Java 21', 'Spring Boot', 'Apache Kafka', 'Apache Flink', 'PostGIS', 'Angular 19', 'Three.js', 'FastAPI', 'Docker', 'Kubernetes Â· Helm', 'Terraform', 'GitLab CI'],
      highlight: {
        en: '1M+ entities per tick Â· cross-domain crisis propagation Â· deterministic replay',
        fr: '1M+ entitÃ©s par tick Â· propagation de crise cross-domain Â· replay dÃ©terministe',
      },
      link: 'https://github.com/HazemMarrakchi/Gaia',
      demo: 'https://hazemmarrakchi.github.io/Gaia/',
    },
    {
      id: 'telemetryhub',
      name: 'TelemetryHub â€” Industrial IoT Supervision SaaS',
      kind: { en: 'Multi-Tenant Microservices SaaS', fr: 'SaaS Multi-Tenant en Microservices' },
      description: {
        en: 'A multi-tenant SaaS for industrial IoT fleet supervision, architected as 7 Spring Boot microservices (gateway, auth, fleet, telemetry ingestion, alerting, reports, maintenance) communicating through Kafka: device registry with JWT/OAuth2 per-tenant isolation, high-frequency telemetry ingestion into TimescaleDB hypertables, real-time rule-based alerting, OEE/availability tracking, PDF report generation and an Angular 18 operations console with NgRx. An auxiliary FastAPI RAG service answers natural-language questions over fleet data with Z-Score anomaly detection. Full observability: Prometheus, Grafana, Loki. CI/CD on GitHub Actions, Docker, Kubernetes (Helm), Terraform (GCP).',
        fr: "Un SaaS multi-tenant de supervision IoT industrielle en 7 microservices Spring Boot (gateway, auth, fleet, ingestion, alerting, rapports, maintenance) via Kafka : registre d'appareils JWT/OAuth2 par tenant, ingestion haute frÃ©quence dans TimescaleDB, alerting temps rÃ©el sur rÃ¨gles, suivi OEE/availability, gÃ©nÃ©ration de rapports PDF et console Angular 18 avec NgRx. Service FastAPI RAG avec dÃ©tection d'anomalies Z-Score. ObservabilitÃ© Prometheus/Grafana/Loki. CI/CD GitHub Actions, Docker, Kubernetes (Helm), Terraform (GCP).",
      },
      stack: ['Java 21', 'Spring Boot', 'Apache Kafka', 'TimescaleDB', 'PostgreSQL', 'Angular 18', 'NgRx', 'FastAPI', 'Docker', 'Kubernetes Â· Helm', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
      highlight: {
        en: '7 microservices Â· Kafka event-driven Â· NgRx Â· Full test suite Â· CI/CD',
        fr: '7 microservices Â· Event-driven Kafka Â· NgRx Â· Suite de tests complÃ¨te Â· CI/CD',
      },
      link: 'https://github.com/HazemMarrakchi/telemetryhub',
      demo: 'https://hazemmarrakchi.github.io/telemetryhub/',
    },
    {
      id: 'facturia',
      name: 'Facturia â€” EU-Compliant E-Invoicing SaaS',
      kind: { en: 'Full-Stack SaaS â€” EN 16931 Â· Peppol BIS', fr: 'SaaS Full-Stack â€” EN 16931 Â· Peppol BIS' },
      description: {
        en: 'A production-grade e-invoicing platform emitting EN 16931-compliant UBL 2.1 documents (Peppol BIS Billing 3.0 & XRechnung CIUS): multi-organization workspaces with role-based access, invoice lifecycle (draft â†’ sent â†’ accepted/refused â†’ paid), per-org sequential numbering, client directory, immutable GDPR audit trail with self-service data export & deletion, and an AI copilot over invoice data. NestJS REST API with OpenAPI/Swagger, React dashboard, Zod contracts shared across a monorepo, 8 Playwright E2E tests running against a real server, Docker images and full CI/CD (GitHub Actions + Render).',
        fr: "Une plateforme d'e-facturation conforme EN 16931 Ã©mettant des documents UBL 2.1 (Peppol BIS Billing 3.0 & XRechnung) : espaces multi-organisations avec rÃ´les, cycle de vie complet des factures (brouillon â†’ envoyÃ©e â†’ acceptÃ©e/refusÃ©e â†’ payÃ©e), numÃ©rotation sÃ©quentielle par organisation, rÃ©pertoire clients, piste d'audit RGPD immuable avec export et suppression des donnÃ©es, et un copilote IA sur les donnÃ©es de facturation. API REST NestJS avec Swagger, tableau de bord React, contrats Zod partagÃ©s en monorepo, 8 tests E2E Playwright contre un vrai serveur, images Docker et CI/CD complet (GitHub Actions + Render).",
      },
      stack: ['NestJS', 'React 19', 'TypeScript', 'Drizzle ORM', 'SQLite', 'Zod', 'Tailwind CSS v4', 'Playwright', 'Docker', 'GitHub Actions', 'Render'],
      highlight: {
        en: 'Live in production â€” frontend on GitHub Pages, real REST API deployed on Render',
        fr: 'En ligne en production â€” frontend sur GitHub Pages, vraie API REST dÃ©ployÃ©e sur Render',
      },
      link: 'https://github.com/HazemMarrakchi/facturia',
      demo: 'https://hazemmarrakchi.github.io/facturia/',
    },
    {
      id: 'einvoice-studio',
      name: 'eInvoice Studio â€” EN 16931 Validator Playground',
      kind: { en: 'Open Developer Tool â€” EU e-Invoicing', fr: 'Outil DÃ©veloppeur â€” E-facturation EU' },
      description: {
        en: 'A free online playground validating UBL 2.1 / Peppol BIS invoices against EN 16931 business rules: paste any document and get instant rule-level diagnostics (BR-*, BR-CO-*) with plain-language explanations and concrete fix hints, plus a visual structure explorer of parties, totals and lines. Namespace-agnostic parser and pure-TypeScript rule engine running 100% in the browser â€” no server, invoices never leave the machine â€” with Vitest unit tests gating deploys in CI.',
        fr: "Un bac Ã  sable en ligne gratuit validant les factures UBL 2.1 / Peppol BIS contre les rÃ¨gles mÃ©tier EN 16931 : collez un document et obtenez un diagnostic instantanÃ© rÃ¨gle par rÃ¨gle (BR-*, BR-CO-*) avec explications et corrections concrÃ¨tes, plus un explorateur visuel de la structure. Parseur agnostique aux espaces de noms et moteur de rÃ¨gles TypeScript pur, 100% navigateur â€” aucune donnÃ©e transmise â€” tests unitaires Vitest bloquant le dÃ©ploiement en CI.",
      },
      stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Vitest', 'GitHub Pages'],
      highlight: {
        en: 'Live ahead of the September 2026 French e-invoicing mandate',
        fr: "En ligne avant la bascule e-facturation franÃ§aise de septembre 2026",
      },
      link: 'https://github.com/HazemMarrakchi/einvoice-studio',
      demo: 'https://hazemmarrakchi.github.io/einvoice-studio/',
    },
    {
      id: 'jarra',
      name: 'JARRA â€” Anti-Food-Waste Marketplace',
      kind: { en: 'Social Impact Platform â€” GabÃ¨s, Tunisia', fr: 'Plateforme Ã  Impact Social â€” GabÃ¨s, Tunisie' },
      description: {
        en: 'A real-time anti-food-waste marketplace born in GabÃ¨s: merchants publish their day-end surplus in 30 seconds (surprise baskets at âˆ’50â€“70%), citizens see available baskets live on the city map, reserve in 2 clicks and collect with a unique code. Custom vector map of GabÃ¨s (Medina, Chott Salem, Teboulbou, Cheniki, Menzelâ€¦), merchant dashboard with AI prediction of tomorrow\'s unsold items (seasonal moving averages), public Impact page with live counters (meals saved, kg of COâ‚‚ avoided, TND recovered) and street-level impact tracking. The demo runs 100% in the browser on a deterministic simulation engine; the real backend (PostgreSQL, RLS, transactional RPCs, realtime) is delivered ready for Supabase. Mobile-first PWA, Angular 19, CI/CD GitHub Actions â†’ GitHub Pages.',
        fr: "Une marketplace anti-gaspillage alimentaire temps rÃ©el nÃ©e Ã  GabÃ¨s : les commerÃ§ants publient leurs invendus en 30 secondes (paniers surprise Ã  âˆ’50â€“70 %), les citoyens voient les paniers disponibles en live sur la carte de la ville, rÃ©servent en 2 clics et rÃ©cupÃ¨rent avec un code unique. Carte vectorielle custom de GabÃ¨s (MÃ©dina, Chott Salem, Teboulbou, Cheniki, Menzelâ€¦), dashboard commerÃ§ant avec prÃ©diction IA des invendus du lendemain (moyennes glissantes saisonniÃ¨res), page Impact publique avec compteurs live (repas sauvÃ©s, kg de COâ‚‚ Ã©vitÃ©s, TND rÃ©injectÃ©s) et suivi de l'impact par quartier. La dÃ©mo tourne 100 % dans le navigateur sur un moteur de simulation dÃ©terministe ; le backend rÃ©el (PostgreSQL, RLS, RPC transactionnelles, temps rÃ©el) est livrÃ© prÃªt pour Supabase. PWA mobile-first, Angular 19, CI/CD GitHub Actions â†’ GitHub Pages.",
      },
      stack: ['Angular 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Python', 'PWA', 'GitHub Actions'],
      highlight: {
        en: 'In development â€” not finished yet',
        fr: 'En cours de dÃ©veloppement â€” pas encore terminÃ©',
      },
      link: 'https://github.com/HazemMarrakchi/jarra',
      demo: 'https://hazemmarrakchi.github.io/jarra/',
    },
    {
      id: 'dhahabi-loan-platform',
      name: 'LendSwift â€” Online Loan Application',
      kind: { en: 'ZeTheta Program â€” Fintech Platform', fr: 'Programme ZeTheta â€” Plateforme Fintech' },
      description: {
        en: 'A premium multi-step loan application wizard (Indian market spec): 8-step flow with real-time Zod validation, conditional co-applicant logic, KYC verification with simulated OTP, INR-formatted EMI breakdown, client-side document compression, e-signature pad, encrypted auto-save (AES-256-GCM) with resume, and a 34-test Cypress E2E suite. Premium fintech UI with emerald/gold design system.',
        fr: "Un parcours de demande de crÃ©dit premium en 8 Ã©tapes (spec marchÃ© indien) : validation Zod temps rÃ©el, logique co-applicant conditionnelle, vÃ©rification KYC avec OTP simulÃ©, tableau d'amortissement INR, compression des documents cÃ´tÃ© client, pad de signature, sauvegarde chiffrÃ©e AES-256-GCM avec reprise, et 34 tests E2E Cypress. Interface fintech premium avec systÃ¨me de design Ã©meraude/or.",
      },
      stack: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind CSS v4', 'React Hook Form', 'Zod 4', 'Cypress'],
      highlight: {
        en: '34 E2E tests Â· 136 unit tests Â· ZeTheta certification',
        fr: '34 tests E2E Â· 136 tests unitaires Â· Certification ZeTheta',
      },
      link: 'https://github.com/HazemMarrakchi/loan-application',
      demo: 'https://hazemmarrakchi.github.io/loan-application/',
    },
    {
      id: 'hospital-platform',
      name: 'MedAI Pro â€” Intelligent Patient Monitoring',
      kind: { en: "Final Year Project â€” Digilife Â· ML-Powered", fr: "Projet de Fin d'Ã‰tudes â€” Digilife Â· IA" },
      description: {
        en: 'A professional-grade hospital platform for patients and clinical teams (5 roles: admin, doctor, nurse, secretary and an autonomous ML service) built end-to-end â€” ~60,000 lines of code (114 files), 9 functional modules and 157 REST endpoints. Real-time bed map (122 beds, 6 specialized levels), vital signs monitoring, WebSocket care-task notifications and severity-scored AI alerts. ML on scikit-learn: Gradient Boosting risk classification (4 levels), calibrated 30-day readmission prediction and hybrid Isolation Forest anomaly detection, guarded by mandatory clinical rules. Patient forms in 4 steps, PDF report export (KPIs, statistics, ML performance), JWT security, dark mode, French UI, mobile/tablet responsive and a full RGPD audit log. Managed with Scrum (26 user stories, 5 sprints) with sprint reviews and demos. Documented road map: patient QR code, real-time chat, medical AI assistant.',
        fr: "Une plateforme hospitaliÃ¨re professionnelle pour patients et Ã©quipes cliniques (5 rÃ´les : admin, mÃ©decin, infirmier, secrÃ©taire et un service ML autonome), construite de bout en bout â€” ~60 000 lignes de code (114 fichiers), 9 modules fonctionnels et 157 endpoints REST. Carte des lits temps rÃ©el (122 lits, 6 niveaux spÃ©cialisÃ©s), surveillance des signes vitaux, notifications WebSocket de tÃ¢ches de soins et alertes IA scorÃ©es en sÃ©vÃ©ritÃ©. ML avec scikit-learn : classification de risque Gradient Boosting (4 niveaux), prÃ©diction calibrÃ©e de rÃ©admission Ã  30 jours et dÃ©tection d'anomalies Isolation Forest hybride, encadrÃ©es par des rÃ¨gles cliniques non nÃ©gociables. Formulaires patient en 4 Ã©tapes, export de rapports PDF (KPIs, statistiques, performance ML), sÃ©curitÃ© JWT, mode sombre, interface traduite en franÃ§ais, responsive mobile/tablette et piste d'audit RGPD complÃ¨te. PilotÃ© en Scrum (26 user stories, 5 sprints) avec revues de sprint et dÃ©monstrations. Feuille de route documentÃ©e : QR-code patient, chat temps rÃ©el, assistant IA mÃ©dical.",
      },
      stack: ['Angular 17', 'Node.js', 'Express.js', 'FastAPI', 'Python', 'Scikit-learn', 'MongoDB', 'WebSockets', 'JWT'],
      highlight: { en: 'Graduated with 18.5/20 â€” High Honors', fr: 'NotÃ© 18,5/20 â€” Mention TrÃ¨s Bien' },
    },
    {
      id: 'cinema-booking',
      name: 'Cinema Ticket Booking Platform',
      kind: { en: 'Year-End Project', fr: 'Projet de Fin d\'AnnÃ©e' },
      description: {
        en: 'A cinema ticket booking platform with session management, seat selection and a Spring Boot REST backend backed by MySQL.',
        fr: 'Une plateforme de rÃ©servation de billets de cinÃ©ma avec gestion des sÃ©ances, choix des places et un backend REST Spring Boot adossÃ© Ã  MySQL.',
      },
      stack: ['Angular', 'Spring Boot', 'MySQL'],
    },
    {
      id: 'carpooling',
      name: 'Carpooling Web Application',
      kind: { en: "Bachelor's Final Project", fr: "PFE de Licence Informatique de Gestion" },
      description: {
        en: 'A carpooling web application connecting drivers and travellers: trip publishing, search by route and booking management.',
        fr: 'Une application web de covoiturage mettant en relation conducteurs et voyageurs : publication de trajets, recherche par itinÃ©raire et gestion des rÃ©servations.',
      },
      stack: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
    },
  ] as Project[],
  experience: [
    {
      id: 'digilife',
      role: { en: 'Software Engineering Intern', fr: 'Stagiaire IngÃ©nieur Informatique' },
      org: { en: 'Digilife', fr: 'Digilife' },
      period: { en: 'Feb 2026 â€“ Jun 2026', fr: 'FÃ©v. 2026 â€“ Juin 2026' },
      points: [
        {
          en: 'Designed and developed an intelligent hospital management platform integrating AI-based prediction features.',
          fr: "Conception et dÃ©veloppement d'une plateforme intelligente de gestion hospitaliÃ¨re intÃ©grant des prÃ©dictions basÃ©es sur l'IA.",
        },
        {
          en: 'Full Stack development with Angular, Node.js, Express.js, FastAPI and MongoDB.',
          fr: 'DÃ©veloppement Full Stack avec Angular, Node.js, Express.js, FastAPI et MongoDB.',
        },
        {
          en: 'Contributed to software architecture design and REST API development.',
          fr: "Participation Ã  la conception de l'architecture logicielle et au dÃ©veloppement des API REST.",
        },
      ],
    },
    {
      id: 'telecom-2025',
      role: { en: 'Software Engineering Intern', fr: 'Stagiaire IngÃ©nieur Informatique' },
      org: { en: 'Telecom Company', fr: 'OpÃ©rateur TÃ©lÃ©com' },
      period: { en: 'Jun 2025 â€“ Jul 2025', fr: 'Juin 2025 â€“ Juil. 2025' },
      points: [
        {
          en: 'Contributed to web/mobile applications, showcase sites and internal tools.',
          fr: "Participation au dÃ©veloppement d'applications web/mobile, sites vitrines et outils internes.",
        },
        {
          en: 'Deployed and maintained internal IT and application infrastructure.',
          fr: "DÃ©ploiement et assistance Ã  la maintenance des infrastructures informatiques et applicatives internes.",
        },
        {
          en: 'Diagnosed and resolved software and network issues.',
          fr: 'Diagnostic et rÃ©solution de problÃ©matiques logicielles et rÃ©seaux.',
        },
      ],
    },
    {
      id: 'telecom-2024',
      role: { en: 'Software Engineering Intern', fr: 'Stagiaire IngÃ©nieur Informatique' },
      org: { en: 'Telecom Company', fr: 'OpÃ©rateur TÃ©lÃ©com' },
      period: { en: 'Jun 2024 â€“ Jul 2024', fr: 'Juin 2024 â€“ Juil. 2024' },
      points: [
        {
          en: 'User support, maintenance of IT assets, network and messaging systems.',
          fr: "Assistance aux utilisateurs, maintenance du parc informatique, du rÃ©seau et de la messagerie.",
        },
        {
          en: 'Built database queries and kept data up to date.',
          fr: 'CrÃ©ation de requÃªtes, alimentation et mise Ã  jour des bases de donnÃ©es.',
        },
        {
          en: 'Proposed optimization and automation solutions.',
          fr: "Proposition de solutions d'optimisation et d'automatisation.",
        },
      ],
    },
    {
      id: 'steg',
      role: { en: 'IT Intern', fr: 'Stagiaire Informatique' },
      org: { en: 'STEG', fr: 'STEG' },
      period: { en: 'Jun 2022 â€“ Jul 2022', fr: 'Juin 2022 â€“ Juil. 2022' },
      points: [
        {
          en: 'IT maintenance and support activities.',
          fr: 'ActivitÃ©s de maintenance et support informatique.',
        },
        {
          en: 'Assisted with IT environment management.',
          fr: "Assistance dans la gestion des environnements informatiques.",
        },
      ],
    },
    {
      id: 'sta-freelance',
      role: { en: 'Freelance Web Developer', fr: 'DÃ©veloppeur Web (Freelance)' },
      org: { en: 'Sana Travel Agency (STA)', fr: 'Agence de Voyage Sana (STA)' },
      period: { en: 'Apr 2018 â€“ Oct 2020', fr: 'Avril 2018 â€“ Oct. 2020' },
      points: [
        {
          en: 'Built and maintained the showcase site and online booking platform, front and back.',
          fr: 'CrÃ©ation et maintenance du site vitrine et de la plateforme de rÃ©servation en ligne, front et back.',
        },
        {
          en: 'Integrated airline, hotel and payment provider APIs.',
          fr: "IntÃ©gration des API de compagnies aÃ©riennes, hÃ´tels et prestataires de paiement.",
        },
        {
          en: 'SEO and performance optimization; bug fixes, security and updates.',
          fr: 'Optimisation SEO et performance ; correction de bugs, sÃ©curitÃ© et mises Ã  jour.',
        },
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      id: 'engineering-degree',
      period: '2023 â€“ 2026',
      degree: { en: 'National Degree in Software Engineering', fr: "DiplÃ´me National d'IngÃ©nieur en GÃ©nie Logiciel" },
      school: { en: 'ESSAT GabÃ¨s, Tunisia', fr: 'ESSAT GabÃ¨s, Tunisie' },
      note: {
        en: 'EUR-ACEÂ® European-Accredited Engineering Master Degree Programme (ASIIN e.V.)',
        fr: 'Programme accrÃ©ditÃ© EUR-ACEÂ® comme European-Accredited Engineering Master Degree Programme (ASIIN e.V.)',
      },
    },
    {
      id: 'bachelor-degree',
      period: '2020 â€“ 2023',
      degree: { en: "Bachelor's in Business Computing", fr: 'Licence en Informatique de Gestion' },
      school: { en: 'ESSAT GabÃ¨s, Tunisia', fr: 'ESSAT GabÃ¨s, Tunisie' },
    },
    {
      id: 'baccalaureate',
      period: '2018',
      degree: { en: 'BaccalaurÃ©at in Economics & Management', fr: 'BaccalaurÃ©at Ã‰conomie & Gestion' },
      school: { en: 'GabÃ¨s, Tunisia', fr: 'GabÃ¨s, Tunisie' },
    },
  ] as EducationItem[],
  certifications: [
    { en: 'Full Stack & Front End Development â€” LinkedIn Learning', fr: 'Full Stack & Front End Development â€” LinkedIn Learning' },
    { en: 'Deep Learning Foundation', fr: 'Deep Learning Foundation' },
  ] as Localized[],
  languagesSpoken: [
    { name: { en: 'Arabic', fr: 'Arabe' }, level: { en: 'Native', fr: 'Langue maternelle' } },
    { name: { en: 'French', fr: 'FranÃ§ais' }, level: { en: 'Professional', fr: 'Professionnel' } },
    { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' } },
    { name: { en: 'German', fr: 'Allemand' }, level: { en: 'Beginner (A1)', fr: 'Notions (A1)' } },
  ],
} as const

export type Profile = typeof profile