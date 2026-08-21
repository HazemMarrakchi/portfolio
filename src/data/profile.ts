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
}

export interface ExperienceItem {
  id: string
  role: Localized
  org: string
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
      en: 'My daily toolkit spans the JavaScript/TypeScript ecosystem (Angular, Node.js), Java with Spring Boot and Python with FastAPI. I have hands-on experience modelling service-oriented architectures, building secure REST APIs and managing SQL/NoSQL databases.',
      fr: "Mon quotidien tourne autour de l'écosystème JavaScript/TypeScript (Angular, Node.js), de Java avec Spring Boot et de Python avec FastAPI. J'ai une expérience concrète en modélisation d'architectures orientées services, création d'APIs REST sécurisées et gestion de bases de données SQL/NoSQL.",
    },
  ] as Localized[],
  skillGroups: [
    {
      label: { en: 'Languages', fr: 'Langages' },
      items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'C++'],
    },
    {
      label: { en: 'Frontend', fr: 'Frontend' },
      items: ['Angular', 'React', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3'],
    },
    {
      label: { en: 'Backend & APIs', fr: 'Backend & APIs' },
      items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'REST APIs', 'WebSockets', '.NET'],
    },
    {
      label: { en: 'Databases', fr: 'Bases de données' },
      items: ['MongoDB', 'MySQL', 'Oracle Database'],
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
      label: { en: 'Tools & Methods', fr: 'Outils & Méthodes' },
      items: ['Git', 'GitHub', 'Postman', 'Agile Scrum', 'UML', 'n8n'],
    },
  ],
  projects: [
    {
      id: 'hospital-platform',
      name: 'Intelligent Hospital Management Platform',
      kind: { en: "Final Year Project — Digilife", fr: "Projet de Fin d'Études — Digilife" },
      description: {
        en: 'A smart hospital management platform with AI-based prediction features: real-time coordination between services via WebSockets and secured access with JWT.',
        fr: "Une plateforme intelligente de gestion hospitalière avec prédictions basées sur l'IA : coordination temps réel entre services via WebSockets et accès sécurisé par JWT.",
      },
      stack: ['Angular', 'Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'JWT', 'WebSockets'],
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
      org: 'Digilife',
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
      org: 'Telecom Company',
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
      org: 'Telecom Company',
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
      org: 'STEG',
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
      org: 'Sana Travel Agency (STA)',
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
  ] as EducationItem[],
  certifications: [
    { en: 'Full Stack & Front End Development — LinkedIn Learning', fr: 'Full Stack & Front End Development — LinkedIn Learning' },
    { en: 'Deep Learning Foundation', fr: 'Deep Learning Foundation' },
  ] as Localized[],
  languagesSpoken: [
    { name: 'Arabic', level: { en: 'Native', fr: 'Langue maternelle' } },
    { name: 'French', level: { en: 'Professional', fr: 'Professionnel' } },
    { name: 'English', level: { en: 'Professional', fr: 'Professionnel' } },
    { name: 'German', level: { en: 'Beginner (A1)', fr: 'Notions (A1)' } },
  ],
} as const

export type Profile = typeof profile
