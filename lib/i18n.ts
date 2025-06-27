export const languages = {
  pt: "Português",
  en: "English",
  es: "Español",
} as const;

export type Language = keyof typeof languages;

export const translations = {
  pt: {
    // Header
    features: "Recursos",
    pricing: "Planos",
    testimonials: "Depoimentos",
    details: "Detalhes",
    login: "Login",
    startFree: "Começar Grátis",

    // Hero
    heroTitle: "Gerencie Múltiplos",
    heroTitleHighlight: "Negócios",
    heroTitleEnd: "em Uma Única Plataforma",
    heroDescription:
      "Simplifique a gestão de múltiplos clientes e projetos com nossa plataforma de multiatendimento. Isolamento completo de dados, personalização total e escalabilidade infinita.",
    emailPlaceholder: "Digite seu email profissional",
    startFreeTrial: "Começar Teste Grátis",
    freeDays: "14 dias grátis",
    noCard: "Sem cartão de crédito",
    support247: "Suporte 24/7",

    // Features
    featuresTitle: "Tudo que você ",
    featuresTitleSub: "precisa para gerenciar múltiplos negócios",
    featuresDescription:
      "Nossa plataforma oferece isolamento completo, segurança avançada e personalização total para cada tenant.",

    // Pricing
    pricingTitle: "Escolha o plano ",
    pricingTitleSub: "ideal para seu negócio",
    pricingDescription:
      "Planos flexíveis que crescem com você. Comece grátis e escale conforme necessário.",
    comparePlans: "Comparar Planos",

    // Support
    needHelp: "Precisa de Ajuda?",
    openTicket: "Abrir Ticket",

    // Tour
    startTour: "Fazer Tour",

    // Common
    month: "/mês",
    popular: "Mais Popular",
    contact: "Contato",
    close: "Fechar",
  },
  en: {
    // Header
    features: "Features",
    pricing: "Pricing",
    testimonials: "Testimonials",
    details: "Details",
    login: "Login",
    startFree: "Start Free",

    // Hero
    heroTitle: "Manage Multiple",
    heroTitleHighlight: "Businesses",
    heroTitleEnd: "in One Platform",
    heroDescription:
      "Simplify the management of multiple clients and projects with our multi-tenant platform. Complete data isolation, full customization and infinite scalability.",
    emailPlaceholder: "Enter your business email",
    startFreeTrial: "Start Free Trial",
    freeDays: "14 days free",
    noCard: "No credit card",
    support247: "24/7 Support",

    // Features
    featuresTitle: "Everything you need ",
    featuresTitleSub: "to manage multiple businesses",
    featuresDescription:
      "Our platform offers complete isolation, advanced security and full customization for each tenant.",

    // Pricing
    pricingTitle: "Choose the ideal ",
    pricingTitleSub: "plan for your business",
    pricingDescription:
      "Flexible plans that grow with you. Start free and scale as needed.",
    comparePlans: "Compare Plans",

    // Support
    needHelp: "Need Help?",
    openTicket: "Open Ticket",

    // Tour
    startTour: "Take Tour",

    // Common
    month: "/month",
    popular: "Most Popular",
    contact: "Contact",
    close: "Close",
  },
  es: {
    // Header
    features: "Características",
    pricing: "Precios",
    testimonials: "Testimonios",
    details: "Detalles",
    login: "Iniciar Sesión",
    startFree: "Empezar Gratis",

    // Hero
    heroTitle: "Gestiona Múltiples",
    heroTitleHighlight: "Negocios",
    heroTitleEnd: "en Una Sola Plataforma",
    heroDescription:
      "Simplifica la gestión de múltiples clientes y proyectos con nuestra plataforma multi-tenant. Aislamiento completo de datos, personalización total y escalabilidad infinita.",
    emailPlaceholder: "Ingresa tu email empresarial",
    startFreeTrial: "Comenzar Prueba Gratis",
    freeDays: "14 días gratis",
    noCard: "Sin tarjeta de crédito",
    support247: "Soporte 24/7",

    // Features
    featuresTitle: "Todo lo que ",
    featuresTitleSub: "necesitas para gestionar múltiples negocios",
    featuresDescription:
      "Nuestra plataforma ofrece aislamiento completo, seguridad avanzada y personalización total para cada tenant.",

    // Pricing
    pricingTitle: "Elige el plan ",
    pricingTitleSub: "ideal para tu negocio",
    pricingDescription:
      "Planes flexibles que crecen contigo. Comienza gratis y escala según sea necesario.",
    comparePlans: "Comparar Planes",

    // Support
    needHelp: "¿Necesitas Ayuda?",
    openTicket: "Abrir Ticket",

    // Tour
    startTour: "Hacer Tour",

    // Common
    month: "/mes",
    popular: "Más Popular",
    contact: "Contacto",
    close: "Cerrar",
  },
};

export function useTranslation(lang: Language) {
  return translations[lang] || translations.pt;
}
