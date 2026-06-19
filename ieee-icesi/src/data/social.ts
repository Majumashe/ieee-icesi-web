// ============================================
// DATOS DE REDES SOCIALES — IEEE ICESI
// Separados del markup. Para añadir/quitar una red,
// solo edita este archivo.
// ============================================

export interface SocialLink {
  label: string; // nombre accesible (para aria-label)
  href: string; // URL del perfil
  icon: "instagram" | "facebook" | "linkedin" | "spotify" | "discord";
}

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ieeeicesi/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ieeeicesi/",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ieee-studen-branch-icesi/",
    icon: "linkedin",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/7m2JtyEguyvEwRw8EzS60j",
    icon: "spotify",
  },
  {
    label: "Discord",
    href: "#", // TODO: reemplazar con la invitación real de Discord
    icon: "discord",
  },
];