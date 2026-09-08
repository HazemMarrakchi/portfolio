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
  location: { en: 'Gabès, Tunisia', fr: 'Gabès, Tunisie' },
  role: { en: 'Software Engineer', fr: 'Ingénieur en Génie Logiciel' },
  tagline: { en: 'Full Stack Developer', fr: 'Développeur Full Stack' },
  heroPitch: {
    en: 'I design and build modern full stack web platforms — and wire them to intelligence.',
    fr: "Je conçois et développe des plateformes web full stack modernes — connectées à l'intelligence artificielle.",
  },
  about: [
    {
      en: 'I am a Software Engineering graduate from ESSAT Gabès (EUR-ACE® accredited programme), specialized in designing and developing modern Full Stack web applications and integrating AI-powered solutions.',
      fr: "Diplômé en Génie Logiciel de l'ESSAT Gabès (programme accrédité EUR-ACE®), je suis spécialisé dans la conception et le développement d'applications web Full Stack modernes et l'intégration de solutions d'intelligence artificielle.",
    },
    {
      en: 'My toolkit spans JavaScript/TypeScript (React, Angular, NestJS, Vite), Python (FastAPI, Scikit-learn) and Java (Spring Boot). I build production-grade platforms with multi-step form wizards, real-time APIs, Trilingual i18n (EN/FR/AR+RTL), E2E testing (Cypress/Playwright), CI/CD and containerized deployments.',
      fr: "Ma boîte à outils couvre JavaScript/TypeScript (React, Angular, NestJS, Vite), Python (FastAPI, Scikit-learn) et Java (Spring Boot). Je construis des plateformes de production avec formulaires multi-étapes, APIs en temps réel, i18n trilingue (EN/FR/AR+RTL), tests E2E (Cypress/Playwright), CI/CD et déploiements conteneurisés.",
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
      label: { en: 'Databases & ORM', fr: 'Bases de données & ORM' },
      items: ['MongoDB', 'MySQL', 'Oracle Database', 'SQLite', 'Drizzle ORM', 'Zod'],
    },
    {
      label: { en: 'AI & Machine Learning', fr: 'IA & Machine Learning' },
      items: ['Scikit-learn', 'Deep Learning'],
    },
    {
      label: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' },
      items: ['Docker', 'Microsoft Azure', 'Linux'],
    },
    {
      label: { en: 'Testing & Quality', fr: 'Tests & Qualité' },
      items: ['Cypress E2E', 'Playwright E2E', 'CI/CD (GitHub Actions)', 'OpenAPI / Swagger'],
    },
    {
      label: { en: 'Tools & Methods', fr: 'Outils & Méthodes' },
      items: ['Git', 'GitHub', 'Postman', 'Agile Scrum', 'UML', 'n8n'],
    },
  ],
  projects: [
    {
      id: 'facturia',
      name: 'Facturia — EU-Compliant E-Invoicing SaaS',
      kind: { en: 'Full-Stack SaaS — EN 16931 · Peppol BIS', fr: 'SaaS Full-Stack — EN 16931 · Peppol BIS' },
      description: {
        en: 'A production-grade e-invoicing platform emitting EN 16931-compliant UBL 2.1 documents (Peppol BIS Billing 3.0 & XRechnung CIUS): multi-organization workspaces with role-based access, invoice lifecycle (draft → sent → accepted/refused → paid), per-org sequential numbering, client directory, immutable GDPR audit trail with self-service data export & deletion, and an AI copilot over invoice data. NestJS REST API with OpenAPI/Swagger, React dashboard, Zod contracts shared across a monorepo, 8 Playwright E2E tests running against a real server, Docker images and full CI/CD (GitHub Actions + Render).',
        fr: "Une plateforme d'e-facturation conforme EN 16931 émettant des documents UBL 2.1 (Peppol BIS Billing 3.0 & XRechnung) : espaces multi-organisations avec rôles, cycle de vie complet des factures (brouillon → envoyée → acceptée/refusée → payée), numérotation séquentielle par organisation, répertoire clients, piste d'audit RGPD immuable avec export et suppression des données, et un copilote IA sur les données de facturation. API REST NestJS avec Swagger, tableau de bord React, contrats Zod partagés en monorepo, 8 tests E2E Playwright contre un vrai serveur, images Docker et CI/CD complet (GitHub Actions + Render).",
      },
      stack: ['NestJS', 'React 19', 'TypeScript', 'Drizzle ORM', 'SQLite', 'Zod', 'Tailwind CSS v4', 'Playwright', 'Docker', 'GitHub Actions', 'Render'],
      highlight: {
        en: 'Live in production — frontend on GitHub Pages, real REST API deployed on Render',
        fr: 'En ligne en production — frontend sur GitHub Pages, vraie API REST déployée sur Render',
      },
      link: 'https://github.com/HazemMarrakchi/facturia',
      demo: 'https://hazemmarrakchi.github.io/facturia/',
    },
    {
      id: 'einvoice-studio',
      name: 'eInvoice Studio — EN 16931 Validator Playground',
      kind: { en: 'Open Developer Tool — EU e-Invoicing', fr: 'Outil Développeur — E-facturation EU' },
      description: {
        en: 'A free online playground validating UBL 2.1 / Peppol BIS invoices against EN 16931 business rules: paste any document and get instant rule-level diagnostics (BR-*, BR-CO-*) with plain-language explanations and concrete fix hints, plus a visual structure explorer of parties, totals and lines. Namespace-agnostic parser and pure-TypeScript rule engine running 100% in the browser — no server, invoices never leave the machine — with Vitest unit tests gating deploys in CI.',
        fr: "Un bac à sable en ligne gratuit validant les factures UBL 2.1 / Peppol BIS contre les règles métier EN 16931 : collez un document et obtenez un diagnostic instantané règle par règle (BR-*, BR-CO-*) avec explications et corrections concrètes, plus un explorateur visuel de la structure. Parseur agnostique aux espaces de noms et moteur de règles TypeScript pur, 100% navigateur — aucune donnée transmise — tests unitaires Vitest bloquant le déploiement en CI.",
      },
      stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Vitest', 'GitHub Pages'],
      highlight: {
        en: 'Live ahead of the September 2026 French e-invoicing mandate',
        fr: "En ligne avant la bascule e-facturation française de septembre 2026",
      },
      link: 'https://github.com/HazemMarrakchi/einvoice-studio',
      demo: 'https://hazemmarrakchi.github.io/einvoice-studio/',
    },
    {
      id: 'sana-travel',
      name: 'SANA Travel — Trilingual Travel Agency Platform',
      kind: { en: 'Full-Stack Production — FR / EN / AR + RTL', fr: 'Full-Stack Production — FR / EN / AR + RTL' },
      description: {
        en: 'A production-grade trilingual (French / English / Arabic with full RTL support) travel agency platform: organized tours catalog, hotel search with cascading country→city filters, real-time flight search (Amadeus API), custom trip builder, AI concierge chatbot, newsletter subscriptions, user authentication with JWT, and a NestJS REST API backed by MongoDB Atlas. Live in production with real API deployed on Render.',
        fr: "Une plateforme d'agence de voyage trilingue (français / anglais / arabe avec support RTL complet) en production : catalogue de voyages organisés, recherche d'hôtels avec filtres cascade pays→villes, recherche de vols en temps réel (API Amadeus), constructeur de voyage sur mesure, chatbot concierge IA, inscriptions newsletter, authentification utilisateur JWT, et une API REST NestJS avec MongoDB Atlas. En production avec API déployée sur Render.",
      },
      stack: ['React 19', 'TypeScript', 'Vite', 'NestJS', 'MongoDB Atlas', 'Tailwind CSS v4', 'JWT', 'Amadeus API'],
      highlight: {
        en: 'Live in production — Frontend on GitHub Pages, API on Render',
        fr: 'En production — Frontend sur GitHub Pages, API sur Render',
      },
      link: 'https://github.com/HazemMarrakchi/sana-travel',
      demo: 'https://hazemmarrakchi.github.io/sana-travel/',
    },
    {
      id: 'dhahabi-loan-platform',
      name: 'LendSwift — Online Loan Application',
      kind: { en: 'ZeTheta Program — Fintech Platform', fr: 'Programme ZeTheta — Plateforme Fintech' },
      description: {
        en: 'A premium multi-step loan application wizard (Indian market spec): 8-step flow with real-time Zod validation, conditional co-applicant logic, KYC verification with simulated OTP, INR-formatted EMI breakdown, client-side document compression, e-signature pad, encrypted auto-save (AES-256-GCM) with resume, and a 34-test Cypress E2E suite. Premium fintech UI with emerald/gold design system.',
        fr: "Un parcours de demande de crédit premium en 8 étapes (spec marché indien) : validation Zod temps réel, logique co-applicant conditionnelle, vérification KYC avec OTP simulé, tableau d'amortissement INR, compression des documents côté client, pad de signature, sauvegarde chiffrée AES-256-GCM avec reprise, et 34 tests E2E Cypress. Interface fintech premium avec système de design émeraude/or.",
      },
      stack: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind CSS v4', 'React Hook Form', 'Zod 4', 'Cypress'],
      highlight: {
        en: '34 E2E tests · 136 unit tests · ZeTheta certification',
        fr: '34 tests E2E · 136 tests unitaires · Certification ZeTheta',
      },
      link: 'https://github.com/HazemMarrakchi/loan-application',
      demo: 'https://hazemmarrakchi.github.io/loan-application/',
    },
    {
      id: 'hospital-platform',
      name: 'MedAI Pro — Intelligent Patient Monitoring',
      kind: { en: "Final Year Project — Digilife · ML-Powered", fr: "Projet de Fin d'Études — Digilife · IA" },
      description: {
        en: 'A professional-grade hospital platform for patients and clinical teams (5 roles: admin, doctor, nurse, secretary and an autonomous ML service) built end-to-end — ~60,000 lines of code (114 files), 9 functional modules and 157 REST endpoints. Real-time bed map (122 beds, 6 specialized levels), vital signs monitoring, WebSocket care-task notifications and severity-scored AI alerts. ML on scikit-learn: Gradient Boosting risk classification (4 levels), calibrated 30-day readmission prediction and hybrid Isolation Forest anomaly detection, guarded by mandatory clinical rules. Patient forms in 4 steps, PDF report export (KPIs, statistics, ML performance), JWT security, dark mode, French UI, mobile/tablet responsive and a full RGPD audit log. Managed with Scrum (26 user stories, 5 sprints) with sprint reviews and demos. Documented road map: patient QR code, real-time chat, medical AI assistant.',
        fr: "Une plateforme hospitalière professionnelle pour patients et équipes cliniques (5 rôles : admin, médecin, infirmier, secrétaire et un service ML autonome), construite de bout en bout — ~60 000 lignes de code (114 fichiers), 9 modules fonctionnels et 157 endpoints REST. Carte des lits temps réel (122 lits, 6 niveaux spécialisés), surveillance des signes vitaux, notifications WebSocket de tâches de soins et alertes IA scorées en sévérité. ML avec scikit-learn : classification de risque Gradient Boosting (4 niveaux), prédiction calibrée de réadmission à 30 jours et détection d'anomalies Isolation Forest hybride, encadrées par des règles cliniques non négociables. Formulaires patient en 4 étapes, export de rapports PDF (KPIs, statistiques, performance ML), sécurité JWT, mode sombre, interface traduite en français, responsive mobile/tablette et piste d'audit RGPD complète. Piloté en Scrum (26 user stories, 5 sprints) avec revues de sprint et démonstrations. Feuille de route documentée : QR-code patient, chat temps réel, assistant IA médical.",
      },
      stack: ['Angular 17', 'Node.js', 'Express.js', 'FastAPI', 'Python', 'Scikit-learn', 'MongoDB', 'WebSockets', 'JWT'],
      highlight: { en: 'Graduated with 18.5/20 — High Honors', fr: 'Noté 18,5/20 — Mention Très Bien' },
    },
    {
      id: 'cinema-booking',
      name: 'Cinema Ticket Booking Platform',
      kind: { en: 'Year-End Project', fr: 'Projet de Fin d\'Année' },
      description: {
        en: 'A cinema ticket booking platform with session management, seat selection and a Spring Boot REST backend backed by MySQL.',
        fr: 'Une plateforme de réservation de billets de cinéma avec gestion des séances, choix des places et un backend REST Spring Boot adossé à MySQL.',
      },
      stack: ['Angular', 'Spring Boot', 'MySQL'],
    },
    {
      id: 'carpooling',
      name: 'Carpooling Web Application',
      kind: { en: "Bachelor's Final Project", fr: "PFE de Licence Informatique de Gestion" },
      description: {
        en: 'A carpooling web application connecting drivers and travellers: trip publishing, search by route and booking management.',
        fr: 'Une application web de covoiturage mettant en relation conducteurs et voyageurs : publication de trajets, recherche par itinéraire et gestion des réservations.',
      },
      stack: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
    },
  ] as Project[],
  experience: [
    {
      id: 'digilife',
      role: { en: 'Software Engineering Intern', fr: 'Stagiaire Ingénieur Informatique' },
      org: { en: 'Digilife', fr: 'Digilife' },
      period: { en: 'Feb 2026 – Jun 2026', fr: 'Fév. 2026 – Juin 2026' },
      points: [
        {
          en: 'Designed and developed an intelligent hospital management platform integrating AI-based prediction features.',
          fr: "Conception et développement d'une plateforme intelligente de gestion hospitalière intégrant des prédictions basées sur l'IA.",
        },
        {
          en: 'Full Stack development with Angular, Node.js, Express.js, FastAPI and MongoDB.',
          fr: 'Développement Full Stack avec Angular, Node.js, Express.js, FastAPI et MongoDB.',
        },
        {
          en: 'Contributed to software architecture design and REST API development.',
          fr: "Participation à la conception de l'architecture logicielle et au développement des API REST.",
        },
      ],
    },
    {
      id: 'telecom-2025',
      role: { en: 'Software Engineering Intern', fr: 'Stagiaire Ingénieur Informatique' },
      org: { en: 'Telecom Company', fr: 'Opérateur Télécom' },
      period: { en: 'Jun 2025 – Jul 2025', fr: 'Juin 2025 – Juil. 2025' },
      points: [
        {
          en: 'Contributed to web/mobile applications, showcase sites and internal tools.',
          fr: "Participation au développement d'applications web/mobile, sites vitrines et outils internes.",
        },
        {
          en: 'Deployed and maintained internal IT and application infrastructure.',
          fr: "Déploiement et assistance à la maintenance des infrastructures informatiques et applicatives internes.",
        },
        {
          en: 'Diagnosed and resolved software and network issues.',
          fr: 'Diagnostic et résolution de problématiques logicielles et réseaux.',
        },
      ],
    },
    {
      id: 'telecom-2024',
      role: { en: 'Software Engineering Intern', fr: 'Stagiaire Ingénieur Informatique' },
      org: { en: 'Telecom Company', fr: 'Opérateur Télécom' },
      period: { en: 'Jun 2024 – Jul 2024', fr: 'Juin 2024 – Juil. 2024' },
      points: [
        {
          en: 'User support, maintenance of IT assets, network and messaging systems.',
          fr: "Assistance aux utilisateurs, maintenance du parc informatique, du réseau et de la messagerie.",
        },
        {
          en: 'Built database queries and kept data up to date.',
          fr: 'Création de requêtes, alimentation et mise à jour des bases de données.',
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
      period: { en: 'Jun 2022 – Jul 2022', fr: 'Juin 2022 – Juil. 2022' },
      points: [
        {
          en: 'IT maintenance and support activities.',
          fr: 'Activités de maintenance et support informatique.',
        },
        {
          en: 'Assisted with IT environment management.',
          fr: "Assistance dans la gestion des environnements informatiques.",
        },
      ],
    },
    {
      id: 'sta-freelance',
      role: { en: 'Freelance Web Developer', fr: 'Développeur Web (Freelance)' },
      org: { en: 'Sana Travel Agency (STA)', fr: 'Agence de Voyage Sana (STA)' },
      period: { en: 'Apr 2018 – Oct 2020', fr: 'Avril 2018 – Oct. 2020' },
      points: [
        {
          en: 'Built and maintained the showcase site and online booking platform, front and back.',
          fr: 'Création et maintenance du site vitrine et de la plateforme de réservation en ligne, front et back.',
        },
        {
          en: 'Integrated airline, hotel and payment provider APIs.',
          fr: "Intégration des API de compagnies aériennes, hôtels et prestataires de paiement.",
        },
        {
          en: 'SEO and performance optimization; bug fixes, security and updates.',
          fr: 'Optimisation SEO et performance ; correction de bugs, sécurité et mises à jour.',
        },
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      id: 'engineering-degree',
      period: '2023 – 2026',
      degree: { en: 'National Degree in Software Engineering', fr: "Diplôme National d'Ingénieur en Génie Logiciel" },
      school: { en: 'ESSAT Gabès, Tunisia', fr: 'ESSAT Gabès, Tunisie' },
      note: {
        en: 'EUR-ACE® European-Accredited Engineering Master Degree Programme (ASIIN e.V.)',
        fr: 'Programme accrédité EUR-ACE® comme European-Accredited Engineering Master Degree Programme (ASIIN e.V.)',
      },
    },
    {
      id: 'bachelor-degree',
      period: '2020 – 2023',
      degree: { en: "Bachelor's in Business Computing", fr: 'Licence en Informatique de Gestion' },
      school: { en: 'ESSAT Gabès, Tunisia', fr: 'ESSAT Gabès, Tunisie' },
    },
    {
      id: 'baccalaureate',
      period: '2018',
      degree: { en: 'Baccalauréat in Economics & Management', fr: 'Baccalauréat Économie & Gestion' },
      school: { en: 'Gabès, Tunisia', fr: 'Gabès, Tunisie' },
    },
  ] as EducationItem[],
  certifications: [
    { en: 'Full Stack & Front End Development — LinkedIn Learning', fr: 'Full Stack & Front End Development — LinkedIn Learning' },
    { en: 'Deep Learning Foundation', fr: 'Deep Learning Foundation' },
  ] as Localized[],
  languagesSpoken: [
    { name: { en: 'Arabic', fr: 'Arabe' }, level: { en: 'Native', fr: 'Langue maternelle' } },
    { name: { en: 'French', fr: 'Français' }, level: { en: 'Professional', fr: 'Professionnel' } },
    { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' } },
    { name: { en: 'German', fr: 'Allemand' }, level: { en: 'Beginner (A1)', fr: 'Notions (A1)' } },
  ],
} as const

export type Profile = typeof profile
