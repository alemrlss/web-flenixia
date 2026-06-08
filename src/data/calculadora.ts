// TODO: los precios "desde" son placeholders — ajustar a tu pricing real antes de publicar
export const IVA_RATE = 0.21; // TODO: confirmar el tipo de IVA aplicable a tu actividad
export const HOURLY_RATE = 75; // TODO: tarifa por hora placeholder (sin IVA) — ajustar antes de publicar

export type UnidadPrecio = '/mes' | 'proyecto';

export interface VarianteCalculadora {
  id: string;
  nombre: string;
  desc: string;
  icon: string;
}

// Formatos de acompañamiento que se pueden añadir a cualquier servicio en el Paso 2
export const variantes: VarianteCalculadora[] = [
  {
    id: 'sesion-directo',
    nombre: 'Sesión en directo',
    desc: 'Trabajamos contigo en tiempo real, por videollamada.',
    icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
  },
  {
    id: 'formacion-grabada',
    nombre: 'Formación grabada',
    desc: 'Vídeos a medida que tu equipo consume a su ritmo.',
    icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zM15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z',
  },
  {
    id: 'auditoria-ia',
    nombre: 'Auditoría IA completa',
    desc: 'Análisis a fondo con informe y plan de acción.',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
];

export const horasDisponibles: number[] = [2, 4, 8, 16];

export interface ServicioCalculadora {
  id: string;
  nombre: string;
  tag: string;
  icon: string;
  accent: string;
  resumen: string;
  modalidad: string;
  precioDesde: number;     // sin IVA
  unidad: UnidadPrecio;
  setupDesde?: number;     // sin IVA — solo si aplica
  incluye: string[];
  plazo: string;
}

export const servicios: ServicioCalculadora[] = [
  {
    id: 'desarrollo-web',
    nombre: 'Desarrollo Web',
    tag: 'Web',
    accent: '#2563EB',
    icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3',
    resumen: 'Webs y landing pages diseñadas para convertir visitas en clientes.',
    modalidad: 'Proyecto a medida',
    precioDesde: 1200,
    unidad: 'proyecto',
    incluye: [
      'Diseño a medida y SEO técnico de base',
      'Optimización de velocidad y Core Web Vitals',
      'Integración con tu CRM y formularios',
      'Analytics y seguimiento configurados',
    ],
    plazo: 'Lista en 2–4 semanas',
  },
  {
    id: 'automatizaciones-con-ia',
    nombre: 'Automatizaciones con IA',
    tag: 'Automatización',
    accent: '#0EA5E9',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    resumen: 'Conecta tus herramientas y elimina el trabajo repetitivo del equipo.',
    modalidad: 'Suscripción mensual',
    precioDesde: 220,
    unidad: '/mes',
    setupDesde: 500,
    incluye: [
      'Auditoría de procesos y priorización por impacto',
      'Flujos con n8n / Make conectando tus herramientas',
      'Automatismos con decisiones basadas en IA',
      'Monitorización y mantenimiento continuo',
    ],
    plazo: 'Primeros flujos activos en 2–3 semanas',
  },
  {
    id: 'consultoria-de-ia',
    nombre: 'Consultoría de IA',
    tag: 'Consultoría',
    accent: '#F59E0B',
    icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
    resumen: 'Diagnóstico y hoja de ruta priorizada para implementar IA sin errores.',
    modalidad: 'Proyecto a medida',
    precioDesde: 900,
    unidad: 'proyecto',
    incluye: [
      'Diagnóstico completo de tu negocio y procesos',
      'Identificación de quick wins y oportunidades',
      'Hoja de ruta priorizada con estimación de ROI',
      'Sesiones de seguimiento durante la implementación',
    ],
    plazo: 'Hoja de ruta entregada en 3–6 semanas',
  },
  {
    id: 'seo',
    nombre: 'SEO',
    tag: 'SEO',
    accent: '#0891B2',
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z',
    resumen: 'Posicionamiento orgánico sostenido — sin pagar por cada clic.',
    modalidad: 'Suscripción mensual',
    precioDesde: 350,
    unidad: '/mes',
    incluye: [
      'Auditoría técnica completa y de palabras clave',
      'Optimización on-page y datos estructurados',
      'Estrategia y calendario de contenido mensual',
      'Reporting con tráfico, posiciones y leads generados',
    ],
    plazo: 'Primeros movimientos visibles en 3–4 meses',
  },
  {
    id: 'crm-y-automatizacion-de-ventas',
    nombre: 'CRM y Automatización de Ventas',
    tag: 'CRM',
    accent: '#EF4444',
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    resumen: 'Pipeline conectado y seguimientos automáticos — cero leads perdidos.',
    modalidad: 'Suscripción mensual',
    precioDesde: 200,
    unidad: '/mes',
    setupDesde: 450,
    incluye: [
      'Configuración del CRM y diseño del pipeline',
      'Automatización de seguimientos y recordatorios',
      'Integración de WhatsApp, email y formularios',
      'Lead scoring con IA y formación del equipo comercial',
    ],
    plazo: 'Sistema activo en 2–3 semanas',
  },
  {
    id: 'agentes-de-ia',
    nombre: 'Agentes de IA',
    tag: 'Agentes IA',
    accent: '#9333EA',
    icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
    resumen: 'Atención 24/7 en WhatsApp, web y voz — con la voz de tu marca.',
    modalidad: 'Suscripción mensual',
    precioDesde: 280,
    unidad: '/mes',
    setupDesde: 650,
    incluye: [
      'Diseño del flujo conversacional a tu medida',
      'Integración multicanal: WhatsApp, web y voz',
      'Entrenamiento con tu catálogo, precios y políticas',
      'Escalado inteligente a humano cuando hace falta',
    ],
    plazo: 'Agente activo en 2–4 semanas',
  },
  {
    id: 'automatizacion-de-rrss',
    nombre: 'Automatización de RRSS',
    tag: 'RRSS',
    accent: '#EC4899',
    icon: 'M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z',
    resumen: 'Contenido generado, programado y publicado — sin esfuerzo diario.',
    modalidad: 'Suscripción mensual',
    precioDesde: 220,
    unidad: '/mes',
    incluye: [
      'Estrategia editorial y calendario con IA',
      'Generación de copy, hashtags y sugerencias visuales',
      'Programación automática en horarios de mayor alcance',
      'Respuestas a comentarios y mensajes frecuentes',
    ],
    plazo: 'Primer banco de contenido en 2 semanas',
  },
  {
    id: 'desarrollo-a-medida',
    nombre: 'Desarrollo a Medida',
    tag: 'A medida',
    accent: '#10B981',
    icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    resumen: 'Herramientas e integraciones propias cuando nada del mercado encaja.',
    modalidad: 'Proyecto a medida',
    precioDesde: 3000,
    unidad: 'proyecto',
    incluye: [
      'Análisis de requisitos y arquitectura técnica',
      'Desarrollo iterativo con entregas frecuentes',
      'Pruebas de QA, seguridad y rendimiento',
      'Documentación técnica y soporte post-lanzamiento',
    ],
    plazo: 'Plazos según alcance — propuesta tras el análisis',
  },
  {
    id: 'ao-ai-optimization',
    nombre: 'AO — AI Optimization',
    tag: 'AO',
    accent: '#8B5CF6',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
    resumen: 'Que ChatGPT, Gemini y Perplexity recomienden tu negocio.',
    modalidad: 'Suscripción mensual',
    precioDesde: 300,
    unidad: '/mes',
    incluye: [
      'Auditoría de tu presencia en motores de IA',
      'Optimización de contenido para que los LLMs lo citen',
      'Datos estructurados y Schema avanzado',
      'Seguimiento mensual de menciones en IA',
    ],
    plazo: 'Primeras mejoras visibles en 6–8 semanas',
  },
  {
    id: 'agente-clinicas-esteticas',
    nombre: 'Agente de IA para Clínicas Estéticas',
    tag: 'Agente especializado',
    accent: '#C026D3',
    icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    resumen: 'Capta pacientes, agenda citas y reduce no-shows en tu clínica — 24/7.',
    modalidad: 'Suscripción mensual',
    precioDesde: 280,
    unidad: '/mes',
    setupDesde: 600,
    incluye: [
      'Agente entrenado con tus tratamientos y tarifas',
      'Agenda de citas conectada a tu calendario',
      'Recordatorios automáticos que reducen los no-shows',
      'Seguimiento y reactivación de pacientes inactivos',
    ],
    plazo: 'Agente activo en 2–3 semanas',
  },
  {
    id: 'agente-clinicas-dentales',
    nombre: 'Agente de IA para Clínicas Dentales',
    tag: 'Agente especializado',
    accent: '#0D9488',
    icon: 'M15.182 16.318A4.486 4.486 0 0112.016 18a4.486 4.486 0 01-3.198-1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z',
    resumen: 'Agenda revisiones, resuelve dudas y reduce ausencias a consulta — 24/7.',
    modalidad: 'Suscripción mensual',
    precioDesde: 280,
    unidad: '/mes',
    setupDesde: 600,
    incluye: [
      'Agente entrenado con tus tratamientos y tarifas',
      'Agendamiento de revisiones y urgencias automatizado',
      'Recordatorios que reducen las ausencias a consulta',
      'Seguimiento postoperatorio y reactivación de pacientes',
    ],
    plazo: 'Agente activo en 2–3 semanas',
  },
];

export function getServicioCalculadora(id: string): ServicioCalculadora | undefined {
  return servicios.find(s => s.id === id);
}
