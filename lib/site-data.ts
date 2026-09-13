export const siteData = {
  hero: {
    name: "Ramone Lebogang Dintwe",
    title: "Cybersecurity | Blue Team | ICT",
    subtitle:
      "Transitioning into cybersecurity and ICT through hands-on projects, home labs, and continuous learning.",
    currentStudy: "CompTIA Security+",
  },

  about: {
    title: "About Me",
    description:
      "I am transitioning into cybersecurity and ICT through hands-on projects, practical labs, certifications, and continuous self-directed learning. My current focus is building strong Blue Team and security operations fundamentals while developing practical technical skills.",
  },

  projects: [
    {
      title: "AI Phishing Analyser",
      description:
        "A lightweight Python-based .eml analyser that identifies phishing indicators, suspicious URLs, email header signals, and produces an explainable risk assessment.",
      status: "Built",
      technologies: [
        "Python",
        "Regex",
        "Email parsing",
        "URL analysis",
        "pytest",
      ],
      securityConcepts: [
        "Phishing analysis",
        "Email security",
        "IOCs",
        "URL analysis",
        "Risk scoring",
      ],
    },

    {
      title: "SA Smishing Detector",
      description:
        "A rule-based SMS smishing detector focused on South African scam patterns, including bank and telecom impersonation, SASSA/SARS fraud, courier scams, investment bait and malicious URLs.",
      status: "Built",
      technologies: [
        "Python",
        "Regex",
        "URL analysis",
        "Rule-based detection",
        "pytest",
      ],
      securityConcepts: [
        "Smishing detection",
        "Social engineering",
        "Brand impersonation",
        "URL analysis",
        "Risk scoring",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/RamoneDintwe/SA-Smishing-Detector",
          primary: true,
        },
      ],
    },

    {
      title: "Blue Team Home Lab",
      description:
        "A planned security lab for Windows and Linux monitoring, Wazuh SIEM, pfSense, simulated attacks, detection engineering and incident response.",
      status: "In Development",
      technologies: [
        "Wazuh",
        "Windows",
        "Linux",
        "pfSense",
        "Virtualization",
      ],
      securityConcepts: [
        "Security monitoring",
        "SIEM",
        "Detection engineering",
        "Incident response",
        "Network security",
      ],
    },
  ],

  skills: {
    cybersecurity: [
      "Phishing analysis",
      "Security monitoring fundamentals",
      "Incident response fundamentals",
      "Email security",
      "Network security fundamentals",
      "SIEM fundamentals",
    ],

    programming: ["Python", "PowerShell", "Bash"],

    systems: [
      "Windows",
      "Linux",
      "Virtualization",
      "Docker",
      "Networking",
    ],

    tools: ["Git", "GitHub", "VS Code", "pytest"],
  },

  certifications: [
    "Google Cybersecurity Professional Certificate",
    "Digital Literacy",
    "AI for Government",
    "Introduction to Project Management",
    "Cisco Packet Tracer",
  ],

  learning: [
    "CompTIA Security+",
    "Python",
    "Blue Team security operations",
    "SIEM",
    "PowerShell",
  ],

  timeline: [
    {
      year: "2026",
      title: "Google Cybersecurity Professional Certificate",
      description:
        "Completed foundational cybersecurity training and began transitioning into practical security projects.",
    },
    {
      year: "2026",
      title: "AI Phishing Analyser",
      description:
        "Built a Python-based email phishing analysis tool focused on explainable detection and risk scoring.",
    },
    {
      year: "2026",
      title: "SA Smishing Detector",
      description:
        "Built a rule-based SMS smishing detector focused on South African scam patterns and explainable risk scoring.",
    },
    {
      year: "2026",
      title: "Security+ Preparation",
      description:
        "Currently preparing for CompTIA Security+ while strengthening cybersecurity fundamentals.",
    },
    {
      year: "2026",
      title: "Blue Team Home Lab",
      description:
        "Developing a practical security monitoring and incident response laboratory.",
    },
  ],

  contact: {
    email: "your.email@example.com",
    github: "https://github.com/RamoneDintwe",
    linkedin: "https://www.linkedin.com/in/ramone-lebogang-dintwe-65a65a17b",
  },
}
   
