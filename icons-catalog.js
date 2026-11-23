
/* =====================================================================
   PlayHub - Catálogo Oficial de Ícones (Mapeado com icons/icons-site/)
   Ordem de Fallback: Imagem Local (.webp) -> SVG Simples -> Emoji
   ===================================================================== */

const PLAYHUB_ICONS_CATALOG = {
    // --- Marca & Logos (Sempre branco no header/sidebar) ---
    logo_playhub: {
        file: "icons/icon.png",
        fixedImage: true,
        emoji: "",
        svgSimple: "",
        svgColor: ""
    },
    github_octo: {
        file: "icons/icons-site/0-changes/Git.webp",
        fixedImage: true,
        emoji: "💻",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>'
    },

    // --- Navegação Principal ---
        inicio: {
        file: "icons/icons-site/0/🏠.webp",
        emoji: "🏠",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" fill="rgba(56,189,248,0.18)"/></svg>'
    },
    criados: {
        file: "icons/icons-site/0/🗃.webp",
        emoji: "🗃️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="17" x2="15" y2="17"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="2" fill="rgba(96,165,250,0.18)"/><rect x="3" y="14" width="18" height="6" rx="2" fill="rgba(96,165,250,0.18)"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="17" x2="15" y2="17"/></svg>'
    },
    favoritos: {
        file: "icons/icons-site/0/⭐️.webp",
        emoji: "⭐",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
    },
    criar: {
        file: "icons/icons-site/0/➕️.webp",
        emoji: "➕",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5" fill="rgba(129,140,248,0.2)"/><line x1="12" y1="8" x2="12" y2="16" stroke="#c7d2fe"/><line x1="8" y1="12" x2="16" y2="12" stroke="#c7d2fe"/></svg>'
    },
    selecionar: {
        file: "icons/icons-site/0/☑️.webp",
        emoji: "☑️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4" stroke="#a5b4fc"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>'
    },
    ajustes: {
        file: "icons/icons-site/0/⚙️.webp",
        emoji: "⚙️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" stroke="#38bdf8"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
    },
    dispositivo: {
        file: "icons/icons-site/0/💻📱.webp",
        emoji: "💻",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" fill="rgba(56,189,248,0.16)"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
    },
    menu: {
        file: "icons/icons-site/0/3-bars.webp",
        emoji: "☰",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12" stroke="#38bdf8"/><line x1="4" y1="17" x2="20" y2="17"/></svg>'
    },

    // --- Barra Superior & Ações ---
    busca: {
        file: "icons/icons-site/0/🔍.webp",
        emoji: "🔎",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.2" y2="16.2"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" fill="rgba(56,189,248,0.12)"/><line x1="20" y1="20" x2="16.2" y2="16.2"/></svg>'
    },
    idioma: {
        file: "icons/icons-site/0/🌎.webp",
        emoji: "🌐",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="12" cy="12" r="9" fill="rgba(56,189,248,0.14)"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18"/></svg>'
    },
    tema: {
        file: "icons/icons-site/settings/☀️🌑.webp",
        emoji: "🌓",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18z" fill="#818cf8"/></svg>'
    },
    instalar: {
        file: "icons/icons-site/0/📲.webp",
        emoji: "⬇️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10" stroke="#a5b4fc"/><line x1="12" y1="15" x2="12" y2="3" stroke="#a5b4fc"/></svg>'
    },

    // --- Ações de Card & Contexto ---
    abrir: {
        file: "icons/icons-site/0/↗️.webp",
        emoji: "↗️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9" stroke="#818cf8"/><line x1="10" y1="14" x2="21" y2="3" stroke="#818cf8"/></svg>'
    },
    editar: {
        file: "icons/icons-site/0/✏️.webp",
        emoji: "✏️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="rgba(96,165,250,0.2)"/></svg>'
    },
    copiar: {
        file: "icons/icons-site/0/📋.webp",
        emoji: "📋",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" fill="rgba(165,180,252,0.18)"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
    },
    compartilhar: {
        file: "icons/icons-site/0/🔗.webp",
        emoji: "🔗",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3" fill="rgba(56,189,248,0.2)"/><circle cx="6" cy="12" r="3" fill="rgba(56,189,248,0.2)"/><circle cx="18" cy="19" r="3" fill="rgba(56,189,248,0.2)"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>'
    },
    verificar: {
        file: "icons/icons-site/0/verificador.webp",
        emoji: "📡",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
    },
    apagar: {
        file: "icons/icons-site/0/🗑.webp",
        emoji: "🗑️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" fill="rgba(248,113,113,0.16)"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>'
    },

    // --- Backup & Exportar / Importar ---
    exportar: {
        file: "icons/icons-site/0/📤.webp",
        emoji: "📤",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8" stroke="#818cf8"/><line x1="12" y1="3" x2="12" y2="15" stroke="#818cf8"/></svg>'
    },
    importar: {
        file: "icons/icons-site/0/📥.webp",
        emoji: "📥",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10" stroke="#a5b4fc"/><line x1="12" y1="15" x2="12" y2="3" stroke="#a5b4fc"/></svg>'
    },

    // --- Ajustes (Cada opção com seu ícone real da pasta settings/) ---
    pref_bubble: {
        file: "icons/icons-site/settings/🫧.webp",
        emoji: "🫧",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="6"/><circle cx="18" cy="18" r="3"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="11" cy="11" r="6" fill="rgba(56,189,248,0.18)"/><circle cx="18" cy="18" r="3" fill="rgba(129,140,248,0.22)"/></svg>'
    },
    pref_miniMenu: {
        file: "icons/icons-site/settings/🎛.webp",
        emoji: "📐",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21" stroke="#38bdf8"/></svg>'
    },
    pref_forceMobile: {
        file: "icons/icons-site/settings/📱-ui.webp",
        emoji: "📱",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="2" fill="rgba(56,189,248,0.15)"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'
    },
    pref_blur: {
        file: "icons/icons-site/settings/🖼⚙️.webp",
        emoji: "✨",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8" stroke-dasharray="3 3"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2"><circle cx="12" cy="12" r="8" stroke-dasharray="3 3"/></svg>'
    },
    pref_sound: {
        file: "icons/icons-site/settings/🔊.webp",
        emoji: "🔊",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="rgba(96,165,250,0.2)"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#38bdf8"/></svg>'
    },
    pref_images: {
        file: "icons/icons-site/0/🖼.webp",
        emoji: "🖼️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" fill="rgba(56,189,248,0.14)"/><circle cx="8.5" cy="8.5" r="1.5" fill="#fbbf24"/><polyline points="21 15 16 10 5 21"/></svg>'
    },
    pref_names: {
        file: "icons/icons-site/settings/📝👤.webp",
        emoji: "🏷️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>'
    },
    pref_desc: {
        file: "icons/icons-site/0/📝.webp",
        emoji: "📝",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="17" x2="12" y2="17"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7" stroke="#38bdf8"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="17" x2="12" y2="17"/></svg>'
    },
    pref_dots: {
        file: "icons/icons-site/settings/🙂.webp",
        emoji: "⋮",
        svgSimple: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="#818cf8"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>'
    },
    pref_checkOnOpen: {
        file: "icons/icons-site/0/🛡✔️.webp",
        emoji: "🛡️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(52,211,153,0.16)"/><polyline points="9 12 11 14 15 10"/></svg>'
    },

    // --- Info Aparelho (Mapeado com 0-changes/cpu/ e 0/) ---
    dev_sistema: {
        file: "icons/icons-site/0/🖥.webp",
        emoji: "💻",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
    },
    dev_cpu: {
        file: "icons/icons-site/0-changes/cpu/cpu.webp",
        fixedImage: true,
        emoji: "🧠",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" fill="rgba(129,140,248,0.25)"/></svg>'
    },
    dev_ram: {
        file: "icons/icons-site/0/💾.webp",
        emoji: "💾",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="10" y1="10" x2="10" y2="14"/><line x1="14" y1="10" x2="14" y2="14"/><line x1="18" y1="10" x2="18" y2="14"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2" fill="rgba(96,165,250,0.16)"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="10" y1="10" x2="10" y2="14"/><line x1="14" y1="10" x2="14" y2="14"/><line x1="18" y1="10" x2="18" y2="14"/></svg>'
    },
    dev_video: {
        file: "icons/icons-site/0/🎨.webp",
        emoji: "🎨",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M14 10h4M14 14h4"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2" fill="rgba(167,139,250,0.16)"/><circle cx="8" cy="12" r="2"/><path d="M14 10h4M14 14h4"/></svg>'
    },
    dev_temp: {
        file: "icons/icons-site/0-changes/cpu/temperatura.webp",
        fixedImage: true,
        emoji: "🌡️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" fill="rgba(249,115,22,0.18)"/></svg>'
    },

    // --- Categorias (Mapeadas com icons/icons-site/0/ e ia/) ---
    cat_jogos: {
        file: "icons/icons-site/0/🎮.webp",
        emoji: "🎮",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="5"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="11" r="1"/><circle cx="17" cy="13" r="1"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="5" fill="rgba(129,140,248,0.16)"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="11" r="1" fill="#38bdf8"/><circle cx="17" cy="13" r="1" fill="#f472b6"/></svg>'
    },
    cat_filmes: {
        file: "icons/icons-site/0/🎬.webp",
        emoji: "🎬",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="7" y1="4" x2="10" y2="9"/><line x1="14" y1="4" x2="17" y2="9"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2" fill="rgba(56,189,248,0.15)"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="7" y1="4" x2="10" y2="9"/><line x1="14" y1="4" x2="17" y2="9"/></svg>'
    },
    cat_ia: {
        file: "icons/icons-site/ia/ai.webp",
        emoji: "✨",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" fill="rgba(167,139,250,0.22)"/></svg>'
    },
    cat_video: {
        file: "icons/icons-site/0/🎞.webp",
        emoji: "🎞️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3" fill="rgba(244,63,94,0.2)"/></svg>'
    },
    cat_design: {
        file: "icons/icons-site/0/🎨.webp",
        emoji: "🎨",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><circle cx="12" cy="15" r="1"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#f472b6" stroke-width="2"><circle cx="12" cy="12" r="9" fill="rgba(244,114,182,0.16)"/><circle cx="9" cy="10" r="1" fill="#38bdf8"/><circle cx="15" cy="10" r="1" fill="#fbbf24"/><circle cx="12" cy="15" r="1" fill="#818cf8"/></svg>'
    },
    cat_audio: {
        file: "icons/icons-site/ia/🎙.webp",
        emoji: "🎙️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="17" x2="12" y2="22"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><rect x="9" y="2" width="6" height="11" rx="3" fill="rgba(56,189,248,0.2)"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="17" x2="12" y2="22"/></svg>'
    },
    cat_aplicativos: {
        file: "icons/icons-site/settings/📱.webp",
        emoji: "📱",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5" fill="rgba(96,165,250,0.2)"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5" fill="rgba(129,140,248,0.2)"/></svg>'
    },
    cat_produtividade: {
        file: "icons/icons-site/0/🗂.webp",
        emoji: "🗂️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="rgba(251,191,36,0.16)"/></svg>'
    },
    cat_dev: {
        file: "icons/icons-site/0-changes/‹＼›.webp",
        emoji: "💻",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18" stroke="#818cf8"/></svg>'
    },
    cat_servidor: {
        file: "icons/icons-site/0/🗄.webp",
        emoji: "🖥️",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><circle cx="6" cy="6.5" r="1" fill="currentColor"/><circle cx="6" cy="17.5" r="1" fill="currentColor"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><circle cx="6" cy="6.5" r="1" fill="#34d399"/><circle cx="6" cy="17.5" r="1" fill="#38bdf8"/></svg>'
    },
    cat_outros: {
        file: "icons/icons-site/0/🌐.webp",
        emoji: "🌐",
        svgSimple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18"/></svg>',
        svgColor: '<svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><circle cx="12" cy="12" r="9" fill="rgba(96,165,250,0.14)"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18"/></svg>'
    }
};

window.PLAYHUB_ICONS_CATALOG = PLAYHUB_ICONS_CATALOG;