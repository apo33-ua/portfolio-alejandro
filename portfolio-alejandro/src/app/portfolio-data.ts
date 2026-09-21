export const PORTFOLIO_DATA = {
  hero: {
    name: "Alejandro Palomares Orugo",
    headline: "Ingeniero Informático - Full Stack Developer",
    description: "Ingeniero Informático con sólida formación académica y experiencia práctica en el desarrollo integral de software. Especializado en el diseño e implementación de aplicaciones Full Stack, integración de sistemas y despliegue de arquitecturas empresariales."
  },
  education: [
    {
      degree: "Grado en Ingeniería Informática",
      institution: "Universidad de Alicante",
      date: "2022 - 2026"
    },
    {
      degree: "Inglés (B2 Oxford) y Valenciano (C1)",
      institution: "Certificaciones de Idiomas",
      date: ""
    }
  ],
  experience: [
    {
      role: "Desarrollador Full Stack y Sistemas",
      company: "Avanade",
      date: "Mar – Sep 2026",
      description:
        "Desarrollo y mantenimiento de aplicaciones corporativas con Angular y C#/.NET. Automatización y empaquetado de aplicaciones empresariales mediante Microsoft Intune y SCCM, junto con la implementación de scripts de PowerShell para instalaciones automáticas.",
      techStack: ["Angular", "C#", ".NET", "PowerShell", "Intune", "SCCM"]
    },
    {
      role: "Desarrollador Web",
      company: "Savour Digital Agency",
      date: "Mar - May 2025",
      description:
        "Desarrollo de páginas web responsivas y optimización de la experiencia de usuario. Colaboración con equipos de diseño y marketing para adaptar contenidos y mejorar el posicionamiento SEO.",
      techStack: ["HTML", "CSS", "JavaScript", "SEO"]
    }
  ],
  projects: [
    {
      title: "Sistema Multiagente de IA para Planificación de Viajes",
      description:
        "Sistema multiagente desarrollado como Trabajo de Fin de Grado capaz de interpretar una petición de viaje y coordinar agentes especializados para generar un itinerario combinando vuelos, hoteles, meteorología, recomendaciones y validación presupuestaria.",
      tech: ["Python", "LangChain", "LangGraph", "Google Gemini API"],
      image: "assets/projects/travel-planner.png",
      link: "https://github.com/apo33-ua/multi-agent-travel-planner"
    },
    {
      title: "Firefighter Frenzy",
      description:
        "Videojuego 2D de acción y puzles con vista cenital, desarrollado de principio a fin. Diseño de mecánicas, construcción de niveles y creación de los recursos visuales necesarios para la experiencia de juego.",
      tech: ["Game Design", "Pixel Art", "2D Mechanics"],
      image: "/assets/projects/firefighter-frenzy.png",
      link: "https://firefighter-frenzy.itch.io/firefighter-frenzy"
    }
  ],
  skills: {
    backend: ["Java", "Python", "C/C++", "C#", "PHP", "Spring Boot", ".NET", "Laravel"],
    frontend: ["Angular", "Vue", "JavaScript", "HTML", "CSS"],
    tools: ["Docker", "MySQL", "PostgreSQL", "Kafka", "ActiveMQ", "MuleSoft", "LangChain", "LangGraph"]
  },
  contact: {
    email: "apo2609@gmail.com",
    linkedin: "https://www.linkedin.com/in/alex-palomares4",
    github: "https://github.com/apo33-ua"
  }
};