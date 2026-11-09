/**
 * PlayHub - Catálogo de Ícones do Sistema
 * Suporta: Image (PNG/WebP), SVG Simple, SVG Color, Emoji.
 */
const PLAYHUB_ICONS_CATALOG = {
  // --- MARCA GITHUB E ZERO (Sempre Imagem Físicas) ---
  github_octo: {
    label: "OCTO",
    emoji: "🐱",
    file: "icons/icons-site/0-changes/Git.webp",
    forceImage: true
  },
  zero_portal: {
    label: "ZERO",
    emoji: "🌐",
    file: "icons/icons-site/0/inicio.webp",
    forceImage: true
  },

  // --- AÇÕES DE CONFIGURAÇÃO E INTERFAZ ---
  copiar: {
    label: "COPY",
    emoji: "📋",
    file: "icons/icons-site/configurações/copiar.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" fill="#4A90E2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="#357ABD" stroke-width="2"/></svg>`
  },
  compartilhar: {
    label: "SHAR",
    emoji: "🔗",
    file: "icons/icons-site/configurações/compartilhar.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><circle cx="18" cy="5" r="3" fill="#FF5722"/><circle cx="6" cy="12" r="3" fill="#4CAF50"/><circle cx="18" cy="19" r="3" fill="#2196F3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#9E9E9E" stroke-width="2"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#9E9E9E" stroke-width="2"/></svg>`
  },
  fundo_tela: {
    label: "BGIMG",
    emoji: "🖼️",
    file: "icons/icons-site/configurações/fundo.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" fill="#E0F7FA"/><circle cx="8.5" cy="8.5" r="1.5" fill="#FFEB3B"/><path d="M21 15l-5-5L5 21h16v-6z" fill="#4CAF50"/></svg>`
  },
  editar: {
    label: "EDIT",
    emoji: "✏️",
    file: "icons/icons-site/configurações/editar.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#607D8B" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" fill="#FFC107" stroke="#FF9800" stroke-width="1.5"/></svg>`
  },
  apagar: {
    label: "DEL",
    emoji: "🗑️",
    file: "icons/icons-site/configurações/apagar.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" fill="#FFEBEE" stroke="#F44336" stroke-width="2"/><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#D32F2F" stroke-width="2"/></svg>`
  },
  busca: {
    label: "SEARCH",
    emoji: "🔍",
    file: "icons/icons-site/configurações/ajustes.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" fill="#E3F2FD" stroke="#2196F3" stroke-width="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#0D47A1" stroke-width="3" stroke-linecap="round"/><circle cx="9.5" cy="9.5" r="2.5" fill="#FFFFFF" opacity="0.6"/></svg>`
  },

  // --- CONSOLES & MARCAS ---
  sony: { label: "SONY", emoji: "🔷", file: "icons/icons-site/0-changes/brands/ps.webp" },
  ps1: { label: "PS1", emoji: "🕹️", file: "icons/icons-site/0-changes/brands/ps/ps1.webp" },
  ps2: { label: "PS2", emoji: "🎮", file: "icons/icons-site/0-changes/brands/ps/ps2.webp" },
  ps4: { label: "PS4", emoji: "🎯", file: "icons/icons-site/0-changes/brands/ps/ps4.webp" },
  ps5: { label: "PS5", emoji: "⚡", file: "icons/icons-site/0-changes/brands/ps/psp.webp" },
  xbox: { label: "XBOX", emoji: "🟢", file: "icons/icons-site/0-changes/brands/Xbox.webp" },
  nintendo: { label: "NINT", emoji: "🔴", file: "icons/icons-site/0-changes/brands/Nintendo.webp" },
  youtube: { label: "YTB", emoji: "▶️", file: "icons/icons-site/0-changes/brands/YouTube.webp" },
  drive: { label: "DRV", emoji: "📁", file: "icons/icons-site/0-changes/brands/Drive.webp" }
};

 