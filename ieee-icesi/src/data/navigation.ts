// ============================================
// DATOS DE NAVEGACIÓN — IEEE ICESI
// Los links del navbar viven aquí, separados del markup.
// Cambiar un link = editar solo este archivo.
// ============================================

// Tipamos la forma de cada link para tener autocompletado y evitar errores.
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Comunidad", href: "/community" },
  { label: "Eventos", href: "/events" },
  { label: "Capítulos & Grupos", href: "/chapters" },
  { label: "Contacto", href: "/contact" },
];
