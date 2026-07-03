/**
 * DATOS DEL EQUIPO — IEEE ICESI
 * UNA sola lista de personas + etiquetas de pertenencia. Una persona
 * puede estar en la junta, en varios capítulos y varios comités a la vez,
 * sin duplicar sus datos. La página filtra/agrupa según estas etiquetas.
 * Guardar como: src/data/team.ts
 *
 * ─────────────────────────────────────────────────────────────
 * CÓMO AGREGAR UNA PERSONA:
 *   1. Foto en src/assets/images/members/ (Astro la optimiza).
 *      Impórtala arriba y úsala en el campo `photo`.
 *      Si no hay foto, deja `photo` sin poner: la página muestra
 *      un avatar con las iniciales (no una imagen rota).
 *   2. Añade un objeto a `team` con un `id` único (ej. "jperez-2026").
 *   3. Marca sus pertenencias:
 *        board: true            → aparece en Junta directiva
 *        chapters: ["wie","cs"] → aparece en esos capítulos
 *        committees: ["eventos"]→ aparece en esos comités
 *      Puede tener varias a la vez, o ninguna (saldría solo en "Todos").
 *   4. Slugs de capítulos (de chapters.ts): pes, comsoc, wie, cs, ci, aes
 *   5. Slugs de comités: definidos en `committees` abajo.
 * ─────────────────────────────────────────────────────────────
 *
 * By: Majumashe - WebMaster 2026
 */

import type { ImageMetadata } from "astro";

// ── Fotos de la junta directiva (src/assets/images/members) ──
import presiPhoto from "../assets/images/members/presi.jpeg";
import vicePhoto from "../assets/images/members/vice.png";
import secrePhoto from "../assets/images/members/secre.png";
import treasPhoto from "../assets/images/members/treas.png";
import webPhoto from "../assets/images/members/web.png";

export interface TeamMember {
  id: string; // identificador único e invisible (buscar/editar/borrar fácil)
  name: string;
  role: string; // rol principal a mostrar
  photo?: ImageMetadata; // imagen importada de src/assets (opcional → avatar de iniciales)
  linkedin?: string;

  // ── Pertenencias (una persona puede tener varias) ──
  board?: boolean; // ¿junta directiva?
  chapters?: string[]; // slugs de capítulos: ["wie", "cs"]
  committees?: string[]; // slugs de comités: ["eventos"]
}

/**
 * COMITÉS de la rama. Ajusta esta lista cuando los definan.
 * (Los capítulos ya viven en chapters.ts)
 */
export const committees = [
  { slug: "eventos", name: "Comité de Eventos" },
  { slug: "comunicaciones", name: "Comité de Comunicaciones" },
  { slug: "logistica", name: "Comité de Logística" },
  { slug: "proyectos", name: "Comité de Proyectos" },
];

/**
 * EQUIPO — una sola lista con todas las personas.
 * (La junta ya tiene sus fotos reales; el resto son datos de ejemplo)
 */
export const team: TeamMember[] = [
  // ── Junta directiva (algunos además en capítulos/comités) ──
  {
    id: "presidente-2026",
    name: "Nombre Apellido",
    role: "Presidente",
    photo: presiPhoto,
    linkedin: "https://www.linkedin.com/in/usuario/",
    board: true,
    committees: ["proyectos"],
  },
  {
    id: "vicepresidente-2026",
    name: "Nombre Apellido",
    role: "Vicepresidenta",
    photo: vicePhoto,
    linkedin: "https://www.linkedin.com/in/usuario/",
    board: true,
    chapters: ["wie"],
  },
  {
    id: "secretario-2026",
    name: "Nombre Apellido",
    role: "Secretario",
    photo: secrePhoto,
    board: true,
  },
  {
    id: "tesorero-2026",
    name: "Nombre Apellido",
    role: "Tesorero",
    photo: treasPhoto,
    board: true,
  },
  {
    id: "webmaster-2026",
    name: "Nombre Apellido",
    role: "WebMaster",
    photo: webPhoto,
    linkedin: "https://www.linkedin.com/in/usuario/",
    board: true,
    committees: ["comunicaciones"],
  },

  // ── Coordinadores de capítulos ──
  {
    id: "coord-pes-2026",
    name: "Nombre Apellido",
    role: "Coordinador PES",
    linkedin: "https://www.linkedin.com/in/usuario/",
    chapters: ["pes"],
  },
  {
    id: "coord-wie-2026",
    name: "Nombre Apellido",
    role: "Coordinadora WIE",
    chapters: ["wie"],
    committees: ["comunicaciones"],
  },
  {
    id: "coord-cs-2026",
    name: "Nombre Apellido",
    role: "Coordinador CS",
    chapters: ["cs"],
  },

  // ── Miembros de comités ──
  {
    id: "miembro-eventos-01",
    name: "Nombre Apellido",
    role: "Miembro",
    committees: ["eventos"],
  },
  {
    id: "miembro-comunicaciones-01",
    name: "Nombre Apellido",
    role: "Miembro",
    committees: ["comunicaciones"],
  },
  {
    id: "miembro-proyectos-01",
    name: "Nombre Apellido",
    role: "Miembro",
    committees: ["proyectos"],
    chapters: ["cs"],
  },
];
