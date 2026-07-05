const resume = {
    name: "Patricia Álvarez",
    position: "AI Engineer",
    contactInformation: "692743157",
    email: "patriciaalvarezestevez@gmail.com",
    address: "Alicante, España",
    profilePicture: "",
    socialMedia: [
        {
            socialMedia: "GitHub",
            link: "github.com/PatriciaAlEs",
        },
        {
            socialMedia: "LinkedIn",
            link: "linkedin.com/in/patricia-alvarez-estevez",
        },
        {
            socialMedia: "Portfolio",
            link: "portfoliopatriciaales202603.onrender.com",
        },
    ],

    summary:
        "Desarrolladora de software orientada a productos donde la IA aporta una mejora concreta. Integración de Python, LLMs, APIs y datos con arquitectura preparada para iterar sin romper lo existente. Interés en equipos que integren IA con criterio de producto.",

    education: [
        {
            school: "4Geeks Academy",
            degree: "AI Engineering (en curso)",
            startYear: "2026-01-01",
            endYear: "Actualidad",
        },
        {
            school: "4Geeks Academy",
            degree: "Full Stack Development with AI",
            startYear: "2026-01-01",
            endYear: "2026-03-31",
        },
        {
            school: "4Geeks Academy",
            degree: "Full Stack Development",
            startYear: "2024-01-01",
            endYear: "2024-12-31",
        },
    ],

    workExperience: [
        {
            company: "4Geeks Academy",
            position: "Mentora Técnica & Desarrolladora de Proyectos Formativos",
            description:
                "Desarrollo de proyectos y ejercicios técnicos utilizados por el alumnado para practicar JavaScript, React, Python y Flask en contextos Full Stack.",
            keyAchievements:
                "Mentoría técnica y code review orientados a estructura, legibilidad, mantenibilidad y buenas prácticas de desarrollo.\n" +
                "Resolución de incidencias y debugging guiado para convertir errores reales en aprendizaje práctico.",
            startYear: "2025-02-01",
            endYear: "Actualidad",
        },
        {
            company: "Career Insights",
            position: "Frontend Developer",
            description:
                "Desarrollo de interfaces con React, TypeScript y Tailwind CSS integradas con APIs REST.",
            keyAchievements:
                "Conversión de requisitos de producto en componentes reutilizables y fáciles de mantener.\n" +
                "Integración de APIs cuidando estados de carga, errores y desacoplamiento del backend.",
            startYear: "2025-06-01",
            endYear: "2025-12-31",
        },
    ],

    projects: [
        {
            name: "ReadPp — Producto lector con datos y observabilidad",
            link: "",
            startYear: "2026-04-01",
            endYear: "Actualidad",
            description:
                "Producto en desarrollo que genera datos de lectura útiles: biblioteca, sesiones, progreso, calendario e insights.",
            keyAchievements:
                "Diseño de una base técnica con persistencia offline, sincronización y observabilidad para iterar con feedback real.\n" +
                "Separación de UI, estado, repositorios y datos para que la evolución del producto se apoye en una base sólida.",
        },
        {
            name: "PDF Translator — Traducción con LLMs",
            link: "",
            startYear: "2025-09-01",
            endYear: "2025-11-30",
            description:
                "Herramienta en Python para traducir documentos usando LLMs como apoyo controlado, no como resultado automático sin revisión.",
            keyAchievements:
                "Organización del flujo PDF a DOCX y vuelta a PDF para conservar la estructura del documento.\n" +
                "Comparación de OpenAI, Claude y Gemini mediante prompts con contexto, restricciones y revisión del resultado.",
        },
        {
            name: "TimeToTask",
            link: "",
            startYear: "2025-06-01",
            endYear: "2025-09-30",
            description:
                "Producto web de tareas usado para practicar flujos completos entre interfaz, API y persistencia.",
            keyAchievements:
                "Estructura de operaciones CRUD separando responsabilidades entre cliente, API y persistencia.\n" +
                "Base de backend y datos para plantear la IA como parte del producto, no como elemento aislado.",
        },
    ],

    skills: [
        {
            title: "IA aplicada",
            skills: ["Integración de LLMs con OpenAI", "Prompt Engineering con contexto y restricciones", "Evaluación de respuestas"],
        },
        {
            title: "Backend y datos",
            skills: ["APIs y automatización con Python/Flask", "Modelado de datos con PostgreSQL/SQLAlchemy", "Sincronización con Supabase"],
        },
        {
            title: "Producto y arquitectura",
            skills: ["Clean Architecture y Repository Pattern", "Debugging orientado a causa raíz", "Code review y Git"],
        },
        {
            title: "Producto software",
            skills: ["Interfaces con React/TypeScript", "Producto multiplataforma con Flutter", "Estado y persistencia con Riverpod y Drift/SQLite"],
        },
        {
            title: "Calidad",
            skills: ["Tests unitarios y widget tests", "Observabilidad con Sentry", "Analítica de producto con PostHog"],
        },
    ],

    languages: [
        {
            language: "Español",
            proficiency: "Nativo",
        },
        {
            language: "Inglés",
            proficiency: "B1 Intermedio",
        },
    ],

    certifications: [],
};

const aiEngineerProfile = {
    id: "ai-engineer",
    label: "AI Engineer",
    description: "Perfil orientado a integrar IA en productos reales con criterio de software, datos y arquitectura.",
    resume,
};

export default aiEngineerProfile;
