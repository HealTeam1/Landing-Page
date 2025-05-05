const translations = {
    en: {
        home: "Home",
        aboutus: "About Us",
        contactus: "Contact Us",
        welcome: "Welcome to NutriPlan",
        find: "Find the perfect nutrition plan for you or earn income sharing your plans.",
        more: "Learn More",
        ofer: "What We Offer",
        give: "We give you the possibility to choose from a variety of nutrition plans or earn income helping others reach their goals.",
        fast: "Fast",
        easy: "Healthy",
        secure: "Safe",
        who: "Who Are We?",
        platform: "At NutriPlan, we are a digital platform seeking to improve access to personalized nutrition plans, helping people live healthier lives.",
        mission: "Mission",
        mission2: "Facilitate access to personalized nutrition plans through an accessible platform that helps users lead a healthier, more balanced life.",
        vision: "Vision",
        vision2: "Be a leading platform in digital nutrition, helping thousands improve their well-being with tailored plans.",
        help: "We are here to support you. If you have questions about our nutrition plans or how to earn income, feel free to contact us.",
        phone: "Phone:",
        address: "Address:",
        rigths: "© 2025 NutriPlan. All rights reserved."
    },
    es: {
        home: "Inicio",
        aboutus: "Sobre Nosotros",
        contactus: "Contáctanos",
        welcome: "Bienvenido a NutriPlan",
        find: "Encuentra el plan de nutrición perfecto para ti o genera ingresos compartiendo tus planes nutricionales.",
        more: "Saber Más",
        ofer: "¿Qué ofrecemos?",
        give: "Te damos la posibilidad de escoger entre una gran variedad de planes nutricionales que se adapten a tus necesidades, o generar ingresos ayudando a otros a alcanzar sus metas.",
        fast: "Rápido",
        easy: "Saludable",
        secure: "Seguro",
        who: "¿Quiénes Somos?",
        platform: "En NutriPlan, somos una plataforma digital que busca mejorar el acceso a planes de nutrición personalizados, ayudando a las personas a llevar una vida más saludable.",
        mission: "Misión",
        mission2: "Facilitar el acceso a planes nutricionales personalizados a través de una plataforma accesible, que permita a los usuarios llevar una vida más saludable y equilibrada.",
        vision: "Visión",
        vision2: "Ser una plataforma líder en nutrición digital, ayudando a miles de personas a mejorar su bienestar a través de planes nutricionales adaptados a sus necesidades.",
        help: "Estamos aquí para ayudarte. Si tienes alguna pregunta sobre nuestros planes de nutrición o cómo generar ingresos, no dudes en ponerte en contacto con nosotros.",
        phone: "Teléfono:",
        address: "Dirección:",
        rigths: "© 2025 NutriPlan. Todos los derechos reservados."
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
