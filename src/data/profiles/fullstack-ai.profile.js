const resume = {
    name: "Patricia Álvarez",
    position: "Full Stack Developer con IA",
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
        "Desarrolladora Full Stack orientada a construir producto de principio a fin. Desarrollo desde la interfaz hasta la persistencia, con atención a flujos, errores, autenticación y mantenibilidad. Integración de IA cuando mejora una funcionalidad real.",

    education: [
        {
            school: "4Geeks Academy",
            degree: "Full Stack Development with AI",
            startYear: "2026-01-01",
            endYear: "2026-03-31",
        },
        {
            school: "4Geeks Academy",
            degree: "AI Engineering (en curso)",
            startYear: "2026-01-01",
            endYear: "Actualidad",
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
                "Desarrollo de componentes React con TypeScript, Tailwind CSS e integración con APIs REST.",
            keyAchievements:
                "Traducción de necesidades de producto en interfaces responsive con estados claros y comportamiento predecible.\n" +
                "Separación de componentes, datos y lógica de UI para facilitar cambios sin rehacer pantallas completas.",
            startYear: "2025-06-01",
            endYear: "2025-12-31",
        },
    ],

    projects: [
        {
            name: "ReadPp — Producto Full Stack Flutter + Supabase",
            link: "",
            startYear: "2026-04-01",
            endYear: "Actualidad",
            description:
                "Producto en desarrollo para gestionar lectura personal con cliente multiplataforma, autenticación, datos y sincronización.",
            keyAchievements:
                "Conexión entre experiencia de usuario, persistencia local y backend Supabase para funcionamiento con y sin conexión.\n" +
                "Organización de APIs externas, repositorios, observabilidad y tests para añadir funcionalidades sin romper el flujo principal.",
        },
        {
            name: "TimeToTask",
            link: "",
            startYear: "2025-06-01",
            endYear: "2025-09-30",
            description:
                "Producto de tareas centrado en el flujo completo: pantalla, API, modelos, validación y persistencia.",
            keyAchievements:
                "Diseño del recorrido desde la acción del usuario hasta la base de datos manteniendo responsabilidades separadas.\n" +
                "CRUD con Flask, SQLAlchemy y PostgreSQL para entregar una funcionalidad usable de extremo a extremo.",
        },
        {
            name: "PDF Translator — Integración de IA",
            link: "",
            startYear: "2025-09-01",
            endYear: "2025-11-30",
            description:
                "Herramienta para traducir documentos donde la IA acompaña el flujo principal sin desplazar la lógica del producto.",
            keyAchievements:
                "Procesamiento de documentos con foco en mantener estructura, legibilidad y control del resultado.\n" +
                "Comparación de respuestas de distintos LLMs para ajustar prompts y reducir resultados poco útiles.",
        },
    ],

    skills: [
        {
            title: "Interfaz y cliente",
            skills: ["Interfaces mantenibles con React/TypeScript", "Cliente multiplataforma con Flutter", "UI responsive con Tailwind CSS/PWA"],
        },
        {
            title: "Backend y datos",
            skills: ["APIs REST con Python/Flask", "Persistencia con PostgreSQL/SQLAlchemy", "Autenticación y sincronización con Supabase"],
        },
        {
            title: "IA aplicada",
            skills: ["Integración de LLMs cuando mejora el flujo", "Prompt Engineering con revisión del resultado", "OpenAI en flujos controlados"],
        },
        {
            title: "Arquitectura y calidad",
            skills: ["Clean Architecture y Repository Pattern", "Debugging entre capas", "Code review, Git y criterio de producto"],
        },
        {
            title: "Herramientas",
            skills: ["Validación de APIs con Postman", "Observabilidad con Sentry", "Analítica con PostHog", "Scrum"],
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

const fullstackAIProfile = {
    id: "fullstack-ai",
    label: "Full Stack + AI",
    description: "Perfil orientado a construir productos completos de extremo a extremo, con IA como valor funcional.",
    resume,
};

export default fullstackAIProfile;
