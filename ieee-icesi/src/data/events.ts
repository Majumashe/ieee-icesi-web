// ============================================
// DATOS DE EVENTOS — IEEE ICESI
// ============================================
// Cada evento tiene una fecha. El sitio clasifica SOLO entre
// "próximos" y "pasados" comparando esa fecha con la fecha de hoy.
// No hay que mover eventos a mano: cuando pasa la fecha, el evento
// se convierte en "pasado" automáticamente.
//
// ─────────────────────────────────────────────────────────────
// CÓMO AGREGAR UN EVENTO:
//   Añade un objeto al array `events` con estos campos:
//
//   OBLIGATORIOS:
//     - slug:        id único para la URL (/events/mi-evento)
//     - title:       nombre del evento
//     - date:        fecha/hora ISO "AAAA-MM-DDTHH:mm" (define próximo/pasado)
//     - location:    dónde se realiza
//     - description: resumen corto (1-2 frases)
//     - image:       ruta de la foto. Pon la imagen en public/events/ y
//                    escribe aquí "/events/nombre.jpg". El nombre lo eliges
//                    tú, solo debe coincidir con el archivo.
//
//   OPCIONALES (omítelos si no aplican):
//     - type:        "Conferencia" | "Taller" | "Panel" | etc. (badge)
//     - modality:    "Presencial" | "Virtual" | "Híbrido"
//     - organizers:  lista de slugs de capítulos (deben existir en
//                    chapters.ts). Ej: ["wie", "cs"] → muestra sus logos.
//     - speaker:     { name, role, photo? } — ponente, si aplica
//     - capacity:    número de cupos totales (ej. 120 → "120 cupos")
//     - registerUrl: enlace de inscripción
//     - rating:      calificación 1-5 para eventos YA pasados (ej. 4.7).
//                    Es MANUAL: sale de tabular las encuestas post-evento.
// ─────────────────────────────────────────────────────────────
// By: Majumashe - WebMaster 2026

export interface EventSpeaker {
  name: string;
  role: string;
  photo?: string; // ruta en public/, ej. "/events/speakers/elena.jpg"
}

export interface EventItem {
  slug: string;
  title: string;
  date: string; // ISO: "AAAA-MM-DDTHH:mm"
  location: string;
  description: string;
  image: string;
  // Opcionales
  type?: string;
  modality?: "Presencial" | "Virtual" | "Híbrido";
  organizers?: string[]; // slugs de chapters.ts
  speaker?: EventSpeaker;
  capacity?: number;
  registerUrl?: string;
  rating?: number; // 1-5, para eventos pasados (manual, sale de encuestas)
}

// ⚠️ Estos son eventos de EJEMPLO. Reemplázalos por los reales.
export const events: EventItem[] = [
  {
    slug: "ia-generativa",
    title: "IA Generativa en la Ingeniería",
    date: "2026-07-12T10:00",
    location: "Auditorio Central, ICESI",
    description:
      "Cómo la IA generativa está transformando la práctica de la ingeniería.",
    image: "/events/ia-generativa.jpg",
    type: "Conferencia",
    modality: "Presencial",
    organizers: ["cs", "ci"],
    speaker: {
      name: "Dra. Elena Ramírez",
      role: "Investigadora en ML",
      photo: "/events/speakers/elena.jpg",
    },
    capacity: 120,
    registerUrl: "https://forms.gle/ejemplo",
  },
  {
    slug: "mujeres-ingenieria",
    title: "Panel: Mujeres que Transforman la Ingeniería",
    date: "2026-11-03T10:00",
    location: "Auditorio DeLima, ICESI",
    description:
      "Un panel inspirador con mujeres líderes en distintas ramas de la ingeniería.",
    image: "/events/mujeres-ingenieria.jpg",
    type: "Panel",
    modality: "Presencial",
    organizers: ["wie"],
    capacity: 80,
    registerUrl: "https://forms.gle/ejemplo",
  },
  {
    slug: "taller-arduino",
    title: "Taller de Arduino desde cero",
    date: "2026-08-20T16:00",
    location: "Laboratorio de Electrónica, ICESI",
    description:
      "Aprende a programar tu primer microcontrolador con proyectos prácticos.",
    image: "/events/arduino.jpg",
    type: "Taller",
    modality: "Presencial",
    organizers: ["cs"],
    capacity: 30,
    registerUrl: "https://forms.gle/ejemplo",
  },
  // ── Eventos pasados de ejemplo (fecha anterior a hoy) ──
  {
    slug: "rnr-bucaramanga",
    title: "Reunión Nacional de Ramas 2025",
    date: "2025-09-05T09:00",
    location: "Bucaramanga, Santander",
    description:
      "Representamos a ICESI en el encuentro nacional de ramas estudiantiles IEEE.",
    image: "/events/rnr.jpg",
    type: "Encuentro",
    modality: "Presencial",
    rating: 4.8,
  },
  {
    slug: "ieee-day-2025",
    title: "IEEE Day 2025",
    date: "2025-10-07T14:00",
    location: "Plazoleta central, ICESI",
    description:
      "Celebramos el día mundial de IEEE con actividades para toda la comunidad.",
    image: "/events/ieee-day.jpg",
    type: "Celebración",
    modality: "Presencial",
    rating: 4.5,
  },
];

// ============================================
// HELPERS: clasifican y ordenan los eventos solos
// ============================================

/** Eventos futuros (fecha >= hoy), ordenados del más próximo al más lejano. */
export function getUpcomingEvents(): EventItem[] {
  const now = new Date();
  return events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/** Eventos pasados (fecha < hoy), ordenados del más reciente al más antiguo. */
export function getPastEvents(): EventItem[] {
  const now = new Date();
  return events
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}