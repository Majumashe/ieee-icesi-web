// ============================================
// DATOS DE CAPÍTULOS — IEEE ICESI
// Cada capítulo con su slug (para la URL), nombre y logo.
// Los logos se importan (Astro los optimiza), no son strings.
// ============================================

// El tipo ImageMetadata es lo que Astro devuelve al importar una imagen.
import type { ImageMetadata } from "astro";

import aes from "../assets/brand/logos/aes.svg";
import ci from "../assets/brand/logos/ci.svg";
import comsoc from "../assets/brand/logos/comsoc.svg";
import cs from "../assets/brand/logos/cs.svg";
import pes from "../assets/brand/logos/pes.svg";
import wie from "../assets/brand/logos/wie.svg";

export interface Chapter {
  slug: string; // para la URL: /chapters/pes
  name: string; // nombre corto mostrado
  fullName: string; // nombre completo (para SEO y títulos)
  logo: ImageMetadata; // logo importado
}

export const chapters: Chapter[] = [
  {
    slug: "pes",
    name: "PES",
    fullName: "Power & Energy Society",
    logo: pes,
  },
  {
    slug: "comsoc",
    name: "ComSoc",
    fullName: "Communications Society",
    logo: comsoc,
  },
  {
    slug: "wie",
    name: "WIE",
    fullName: "Women in Engineering",
    logo: wie,
  },
  {
    slug: "cs",
    name: "CS",
    fullName: "Computer Society",
    logo: cs,
  },
  {
    slug: "ci",
    name: "CI",
    fullName: "Computational Intelligence Society",
    logo: ci,
  },
  {
    slug: "aes",
    name: "AESS",
    fullName: "Aerospace & Electronic Systems Society",
    logo: aes,
  },
];