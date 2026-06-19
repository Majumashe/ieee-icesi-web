// ============================================
// DATOS DE RECURSOS IEEE — IEEE ICESI
// Enlaces al ecosistema IEEE global (footer).
// Externos: se abrirán en pestaña nueva.
// ============================================

export interface ResourceLink {
  label: string;
  href: string;
}

export const ieeeResources: ResourceLink[] = [
  { label: "IEEE.org", href: "https://www.ieee.org" },
  { label: "IEEE Membership", href: "https://www.ieee.org/membership/index.html" },
  { label: "IEEE Learning Network", href: "https://iln.ieee.org" },
  { label: "IEEE Standards", href: "https://standards.ieee.org" },
];
