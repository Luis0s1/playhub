/**
 * PlayHub - Catálogo Completo de Ícones do Sistema
 * Suporta: Image (PNG/WebP), SVG Simple, SVG Color, Emoji.
 */
const PLAYHUB_ICONS_CATALOG = {
  // --- MARCA GITHUB E ZERO (Sempre Imagens Físicas se existirem) ---
  github_octo: {
    label: "OCTO",
    emoji: "⚡",
    file: "icons/icons-site/0-changes/Git.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#FACC15" stroke="#EAB308" stroke-width="1.5" stroke-linejoin="round"/></svg>`
  },
  zero_portal: {
    label: "ZERO",
    emoji: "⚡",
    file: "icons/icons-site/0/inicio.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#38BDF8" stroke="#0284C7" stroke-width="1.5" stroke-linejoin="round"/></svg>`
  },

  // --- NAVEGAÇÃO PRINCIPAL ---
  inicio: {
    label: "HOME",
    emoji: "🏠",
    file: "icons/icons-site/0/inicio.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" fill="#60A5FA" stroke="#2563EB" stroke-width="1.8"/><rect x="9" y="13" width="6" height="9" rx="1" fill="#FDE047"/></svg>`
  },
  criados: {
    label: "CRTD",
    emoji: "🗃️",
    file: "icons/icons-site/0/criados.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="#FBBF24" stroke="#D97706" stroke-width="1.8"/></svg>`
  },
  favoritos: {
    label: "FAVS",
    emoji: "⭐",
    file: "icons/icons-site/0/favoritos.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FACC15" stroke="#CA8A04" stroke-width="1.6" stroke-linejoin="round"/></svg>`
  },
  criar: {
    label: "ADD",
    emoji: "➕",
    file: "icons/icons-site/0/criar.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="#22C55E" stroke="#15803D" stroke-width="1.8"/><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>`
  },
  selecionar: {
    label: "SEL",
    emoji: "☑️",
    file: "icons/icons-site/0/selecionar.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" fill="#6366F1" stroke="#4338CA" stroke-width="1.8"/><polyline points="8 12 11 15 16 9" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  ajustes: {
    label: "CONF",
    emoji: "⚙️",
    file: "icons/icons-site/configurações/ajustes.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#94A3B8" stroke="#475569" stroke-width="2"/><circle cx="12" cy="12" r="3.5" fill="#38BDF8"/></svg>`
  },
  dispositivo: {
    label: "DEV",
    emoji: "💻",
    file: "icons/icons-site/0/dispositivo.webp",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/><line x1="8" y1="21" x2="16" y2="21" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="#94A3B8" stroke-width="2"/></svg>`
  },
  menu: {
    label: "MENU",
    emoji: "☰",
    svgSimple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    svgColor: `<svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2.4" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`
  },

  // --- AÇÕES DE CONFIGURAÇÃO E INTERFACE ---
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
