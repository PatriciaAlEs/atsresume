const resume = {
    name: "Patricia Álvarez",
    position: "Mobile Flutter Developer",
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
        "Desarrolladora mobile centrada en Flutter y en aplicaciones mantenibles cuando crecen. Gestión de estado, persistencia offline, sincronización y testing como base del producto. Interés en producto móvil con criterio técnico y cuidado por la experiencia.",

    education: [
        {
            school: "4Geeks Academy",
            degree: "Full Stack Development",
            startYear: "2024-01-01",
            endYear: "2024-12-31",
        },
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
                "Desarrollo de interfaces web responsive con React, TypeScript y Tailwind CSS.",
            keyAchievements:
                "Construcción de componentes reutilizables cuidando consistencia visual, estados de UI y adaptación a distintos tamaños.\n" +
                "Aplicación de criterios trasladables a mobile: claridad de interfaz, separación de lógica y mantenibilidad.",
            startYear: "2025-06-01",
            endYear: "2025-12-31",
        },
    ],

    projects: [
        {
            name: "ReadPp — Aplicación Flutter multiplataforma",
            link: "",
            startYear: "2026-04-01",
            endYear: "Actualidad",
            description:
                "Producto Flutter para Android y Web/PWA centrado en seguimiento lector, biblioteca, sesiones y estadísticas.",
            keyAchievements:
                "Diseño de una experiencia que funciona con datos locales y sincronización, evitando depender siempre de conexión.\n" +
                "Arquitectura con Riverpod, Drift/SQLite, Supabase, repositorios, tests y observabilidad para crecer sin perder control técnico.",
        },
        {
            name: "TimeToTask",
            link: "",
            startYear: "2025-06-01",
            endYear: "2025-09-30",
            description:
                "Aplicación de tareas usada para entender cómo las decisiones de API y datos afectan a la experiencia cliente.",
            keyAchievements:
                "Práctica de creación, edición y consulta de datos desde la UI hasta el backend.\n" +
                "Base para diseñar productos mobile con sincronización y estado consistente.",
        },
        {
            name: "PDF Translator",
            link: "",
            startYear: "2025-09-01",
            endYear: "2025-11-30",
            description:
                "Herramienta de traducción de documentos que mantiene peso secundario frente al foco mobile del CV.",
            keyAchievements:
                "Flujo técnico con entrada, procesamiento, revisión y salida final controlada.\n" +
                "Criterio sobre integración de servicios externos y validación de resultados sin desplazar el foco mobile.",
        },
    ],

    skills: [
        {
            title: "Flutter mobile",
            skills: ["Desarrollo multiplataforma con Flutter/Dart", "Android y Web/PWA", "UI consistente con Material Design"],
        },
        {
            title: "Estado y arquitectura",
            skills: ["Estado mantenible con Riverpod", "Clean Architecture y Repository Pattern", "Separación de responsabilidades"],
        },
        {
            title: "Datos y sincronización",
            skills: ["Persistencia offline con Drift/SQLite", "Sincronización con Supabase", "Autenticación y datos locales"],
        },
        {
            title: "Calidad",
            skills: ["Tests unitarios y widget tests", "Debugging reproducible", "Observabilidad con Sentry/PostHog"],
        },
        {
            title: "Base Full Stack",
            skills: ["Criterio frontend con React/TypeScript", "APIs con Python/Flask", "Control de versiones con Git"],
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

const mobileFlutterProfile = {
    id: "mobile-flutter",
    label: "Mobile Flutter",
    description: "Perfil orientado a desarrollo mobile con Flutter, arquitectura mantenible y producto multiplataforma.",
    resume,
};

export default mobileFlutterProfile;
