// Everything on the home page that isn't a project lives here.
// Projects are Markdown files in src/content/work/.

export const site = {
  name: 'Hafizh Ilman Aziz',
  title: 'Hafizh Ilman Aziz · Full stack developer',
  description:
    'Full stack developer from Pasuruan, Indonesia. Since 2013 I have built core banking, ERP and legal-tech systems with PHP, Go, Python and TypeScript.',
  jobTitle: 'Full Stack Developer',
  location: 'Pasuruan, Indonesia',
  timezone: 'UTC+7',
  email: 'superhafizh@gmail.com',
  currentOrg: 'Schutze Web Engineering',
  links: [
    { label: 'GitHub', href: 'https://github.com/superhafizh' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hafizh-ilman-aziz/' },
  ],
};

export type Job = {
  period: string;
  role: string;
  org: string;
  points: string[];
};

export const experience: Job[] = [
  {
    period: '2023 – now',
    role: 'Full Stack Developer',
    org: 'Schutze Web Engineering',
    points: [
      'Added AI services, written in Go and Python, to the document and email pipeline: automated document analysis, email processing and chat features.',
      'Build and maintain applications for private law firms in Germany with Next.js, Node.js and Firebase, and Symfony.',
      'Own project architecture and code quality.',
    ],
  },
  {
    period: '2021 – 2023',
    role: 'Full Stack Developer',
    org: 'PT Kunci Inti Transindo',
    points: [
      'Designed and launched a web-based ERP in Laravel from the ground up, replacing a desktop system.',
      'Automated invoices and shipment itineraries over WhatsApp, and built a tax calculation and reporting module.',
    ],
  },
  {
    period: '2020 – 2021',
    role: 'Front-End Developer',
    org: 'PT Datamax Teknologi Internasional',
    points: [
      'Rebuilt the customer-facing marketplace in Vue.js and Nuxt.',
      'Rolled out a new company-wide UI framework together with the design and management teams.',
    ],
  },
  {
    period: '2019 – 2020',
    role: 'Full Stack Developer',
    org: 'Pilarmedia Indonesia',
    points: [
      'Built a multi-module logistics ERP in Laravel and AngularJS that moved shipping companies off Excel.',
      'Gathered requirements directly with clients, from small truck fleets to large warehouses, and automated deployments with SSH scripts.',
    ],
  },
  {
    period: '2013 – 2019',
    role: 'Programmer',
    org: 'PT Assist Indonesia Pratama',
    points: [
      'Developed and maintained a core banking suite for microfinance institutions: loans, deposits and accounting.',
      'Onboarded and trained six new institutions, and updated financial reporting for new OJK regulations.',
    ],
  },
];

export const toolkit: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['PHP', 'Go', 'Python', 'TypeScript', 'JavaScript'] },
  { label: 'Frameworks', items: ['Laravel', 'Symfony', 'Next.js', 'Node.js', 'Nuxt', 'Vue.js', 'React'] },
  { label: 'Data', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'] },
  { label: 'Domains', items: ['ERP', 'Logistics', 'Microfinance', 'Legal tech', 'AI integration'] },
  { label: 'Speaking', items: ['Indonesian (native)', 'English (professional)'] },
];
