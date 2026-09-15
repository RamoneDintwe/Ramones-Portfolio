export const profile = {
  name: 'Ramone Lebogang Dintwe',
  headline: 'Cybersecurity | Blue Team | ICT',
  tagline:
    'Building practical cybersecurity and ICT skills through projects, labs, security analysis and continuous learning.',
  status: 'Currently studying CompTIA Security+',
  email: 'your.email@example.com',
  github: 'https://github.com/RamoneDintwe',
  linkedin: 'https://www.linkedin.com/in/ramone-lebogang-dintwe-65a65a17b',
  cv: '/cv-placeholder.pdf',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Lab', href: '#lab' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const currentFocus = [
  'Blue Team fundamentals',
  'Security monitoring',
  'Python',
  'SIEM',
  'Networking',
  'CompTIA Security+',
]

export type ProjectStatus = 'Built' | 'In Development' | 'Research / Planning'

export type Project = {
  title: string
  description: string
  status?: ProjectStatus
  technologies?: string[]
  securityConcepts?: string[]
  links?: { label: string; href: string; primary?: boolean }[]
}

export const projects: Project[] = [
  {
    title: 'AI Phishing Analyser',
    description:
      'A Python-based security tool that analyses .eml email files for phishing indicators and produces a risk score.',
    status: 'Built',
    technologies: ['Python', 'Regex', 'Email parsing', 'URL parsing', 'pytest'],
    securityConcepts: [
      'Phishing analysis',
      'Email headers',
      'Indicators of compromise',
      'URL analysis',
      'Risk scoring',
    ],
    links: [
      { label: 'View Project', href: '#', primary: true },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    title: 'Blue Team Home Lab',
    description:
      'A virtualised cybersecurity lab designed for practising security monitoring, log analysis, SIEM operations and incident investigation.',
    status: 'In Development',
    technologies: ['Wazuh', 'Windows', 'Linux', 'Virtualisation', 'pfSense'],
  },
  {
    title: 'SA Smishing Detector',
    description:
      'A rule-based SMS smishing detector focused on South African scam patterns, including bank and telecom impersonation, SASSA/SARS fraud, courier scams, investment bait and malicious URLs.',
    status: 'Built',
    technologies: [
      'Python',
      'Regex',
      'URL analysis',
      'Rule-based detection',
      'pytest',
    ],
    securityConcepts: [
      'Smishing detection',
      'Social engineering',
      'Brand impersonation',
      'URL analysis',
      'Risk scoring',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/RamoneDintwe/SA-Smishing-Detector',
        primary: true,
      },
    ],
  },
]

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cybersecurity',
    skills: [
      'Phishing analysis',
      'Security monitoring fundamentals',
      'Incident response fundamentals',
      'Email security',
      'Network security fundamentals',
      'SIEM fundamentals',
    ],
  },
  {
    title: 'Programming & Scripting',
    skills: ['Python', 'PowerShell', 'Bash'],
  },
  {
    title: 'Systems & Infrastructure',
    skills: ['Windows', 'Linux', 'Virtualisation', 'Docker', 'Networking'],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'pytest'],
  },
]

export const certifications = {
  completed: [
    'Google Cybersecurity Professional Certificate',
    'Digital Literacy training',
    'AI for Government',
    'Introduction to Project Management',
    'Cisco Packet Tracer training',
  ],
  learning: [
    'CompTIA Security+',
    'Python',
    'Blue Team security operations',
    'SIEM',
    'PowerShell',
  ],
}

export type TimelineEntry = {
  year: string
  title: string
}

export const timeline: TimelineEntry[] = [
  { year: '2026', title: 'Google Cybersecurity Professional Certificate' },
  { year: '2026', title: 'AI Phishing Analyser' },
  { year: '2026', title: 'SA Smishing Detector' },
  { year: '2026', title: 'CompTIA Security+ Preparation' },
  { year: '2026', title: 'Blue Team Home Lab' },
]

export type LabNode = {
  name: string
  note?: string
}

export const labNetworks: { name: string; systems: LabNode[] }[] = [
  {
    name: 'Corp Network',
    systems: [
      { name: 'Windows Client' },
      { name: 'Windows Server / Domain Controller' },
    ],
  },
  {
    name: 'Management Network',
    systems: [{ name: 'Wazuh SIEM' }, { name: 'Linux Server' }],
  },
  {
    name: 'Attack Network',
    systems: [{ name: 'Kali Linux' }],
  },
]

export const labPractices = [
  'log collection',
  'detection',
  'alert investigation',
  'network monitoring',
  'Windows security',
  'simulated attacks',
  'incident response',
]
