'use strict';

/* =====================================================================
   PlayHub - script principal
   Funciona como extensão (Manifest V3), como site e como app instalável.
   ===================================================================== */

// Só é "extensão" se existir chrome.runtime.id. Nada é descoberto de fora.
const IS_EXTENSION = !!(typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id);
const IS_POPUP = new URLSearchParams(location.search).get('popup') === '1';

const KEYS = {
    sites: 'playhub_custom_sites',
    hidden: 'playhub_hidden',
    favs: 'playhub_favs',
    prefs: 'playhub_prefs',
    bubbleLabel: 'playhub_bubble_label'
};

const DEFAULT_PREFS = {
    theme: 'system-mode', lang: 'auto', gridCols: 6, miniMenu: false, forceMobile: false,
    blur: true, sound: true, images: true, names: true, desc: true, dots: true, checkOnOpen: true,
    bubble: false, openMode: 'tab', iconStyle: 'image'
};
const TOGGLE_KEYS = ['bubble', 'miniMenu', 'forceMobile', 'blur', 'sound', 'images', 'names', 'desc', 'dots', 'checkOnOpen'];
const BACKUP_PREF_KEYS = ['theme', 'lang', 'gridCols', 'miniMenu', 'forceMobile', 'blur', 'sound', 'images', 'names', 'desc', 'dots', 'checkOnOpen', 'iconStyle'];

const CATEGORY_ORDER = ['jogos', 'filmes', 'ia', 'video', 'design', 'audio', 'aplicativos', 'produtividade', 'dev', 'servidor', 'outros'];
const CATEGORY_ICONS = {
    jogos: '🎮', filmes: '🎬', ia: '✨', video: '🎞️', design: '🎨',
    audio: '🎙️', aplicativos: '📱', produtividade: '🗂️', dev: '💻', servidor: '🖥️', outros: '🌐'
};
const LANGS = [
    { id: 'auto', name: '🌐 Auto' }, { id: 'pt-BR', name: '🇧🇷 PT-BR' }, { id: 'pt-PT', name: '🇵🇹 PT-PT' },
    { id: 'en', name: '🇺🇸 EN' }, { id: 'es', name: '🇪🇸 ES' }, { id: 'fr', name: '🇫🇷 FR' },
    { id: 'ru', name: '🇷🇺 RU' }, { id: 'de', name: '🇩🇪 DE' }, { id: 'it', name: '🇮🇹 IT' },
    { id: 'ja', name: '🇯🇵 JA' }, { id: 'ko', name: '🇰🇷 KO' }, { id: 'zh-CN', name: '🇨🇳 ZH' },
    { id: 'ar', name: '🇸🇦 AR' }, { id: 'hi', name: '🇮🇳 HI' }, { id: 'tr', name: '🇹🇷 TR' },
    { id: 'pl', name: '🇵🇱 PL' }, { id: 'nl', name: '🇳🇱 NL' }, { id: 'id', name: '🇮🇩 ID' }, { id: 'uk', name: '🇺🇦 UK' }
];

/* ---------------------------------------------------------------------
   Armazenamento (localStorage + espelho em chrome.storage.local na extensão)
   --------------------------------------------------------------------- */
function safeStorageGet(key, defaultVal) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : defaultVal;
    } catch (e) {
        return defaultVal;
    }
}

function safeStorageSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* cota cheia ou modo privado */ }
    if (IS_EXTENSION && chrome.storage && chrome.storage.local) {
        try { chrome.storage.local.set({ [key]: val }); } catch (e) { /* ignora */ }
    }
}

/* ---------------------------------------------------------------------
   Estado
   --------------------------------------------------------------------- */
let customSites = sanitizeSiteList(safeStorageGet(KEYS.sites, []));
let hiddenSites = toStringArray(safeStorageGet(KEYS.hidden, []));
let favoritedUrls = new Set(toStringArray(safeStorageGet(KEYS.favs, [])));
let prefs = Object.assign({}, DEFAULT_PREFS, safeStorageGet(KEYS.prefs, {}));
prefs.gridCols = clampCols(prefs.gridCols);
if (prefs.openMode !== 'popup') prefs.openMode = 'tab';

let activeCategory = 'todos';
let multiSelectMode = false;
const selectedUrls = new Set();
let currentSiteForPanel = null;
let audioCtx = null;
let toastTimer = null;
let deferredInstallPrompt = null;
let searchTimer = null;

const mqMobile = window.matchMedia('(max-width: 768px)');
const mqDark = window.matchMedia('(prefers-color-scheme: dark)');
const mqStandalone = window.matchMedia('(display-mode: standalone)');

/* ---------------------------------------------------------------------
   Utilidades
   --------------------------------------------------------------------- */
const $ = (id) => document.getElementById(id);
const tr = (key, vars) => (typeof t === 'function' ? t(key, vars) : key);

function toStringArray(v) { return Array.isArray(v) ? v.filter(x => typeof x === 'string') : []; }
function clampCols(v) { return Math.min(10, Math.max(3, parseInt(v, 10) || 6)); }

function hashString(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
    return h.toString(36);
}

// Extrai e formata o nome a partir da URL com maiúsculas e espaços
function extractSiteNameFromUrl(rawUrl) {
    let url = normalizeUrl(rawUrl) || rawUrl;
    if (!url) return '';
    try {
        let hostname = new URL(url).hostname;
        hostname = hostname.replace(/^www\./i, '');
        const mainPart = hostname.split('.')[0];
        if (!mainPart) return '';
        const words = mainPart.split(/[-_]/).filter(Boolean);
        return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    } catch (e) {
        return '';
    }
}

// Detecta se a URL traz indicativos de ser um jogo
function detectGameCategoryFromUrl(rawUrl) {
    const urlStr = String(rawUrl || '').toLowerCase();
    const gameKeywords = ['game', 'jogos', 'jogo', 'play', 'gta', 'roblox', 'poki', 'crazygames', 'friv', 'zombies', 'fps', 'arcade', 'emulator', 'retro', 'sim64', 'krunker'];
    return gameKeywords.some(kw => urlStr.includes(kw));
}

function normalizeUrl(raw) {
    let url = String(raw || '').trim();
    if (!url || /\s/.test(url)) return null;
    if (/^(javascript|data|vbscript|file|blob|mailto|tel|chrome|chrome-extension):/i.test(url)) return null;
    if (!/^https?:\/\//i.test(url)) {
        if (/^[a-z][a-z0-9+.-]*:\/\//i.test(url)) return null;
        url = 'https://' + url;
    }
    try {
        const u = new URL(url);
        return (u.protocol === 'http:' || u.protocol === 'https:') && u.hostname ? url : null;
    } catch (e) {
        return null;
    }
}

function isImageSource(v) {
    return typeof v === 'string' && (/^data:image\//i.test(v) || /^https?:\/\//i.test(v) || /^[\w./-]+\.(png|jpe?g|webp|gif|svg|ico)$/i.test(v));
}

function sanitizeSite(s) {
    if (!s || typeof s !== 'object') return null;
    const url = normalizeUrl(s.url);
    const name = typeof s.name === 'string' ? s.name.trim().slice(0, 80) : '';
    if (!url || !name) return null;
    const out = {
        id: (typeof s.id === 'string' && s.id) ? s.id.slice(0, 60) : 'c_' + hashString(url),
        name,
        url,
        category: CATEGORY_ORDER.includes(s.category) ? s.category : 'outros',
        description: typeof s.description === 'string' ? s.description.slice(0, 300) : '',
        iconData: typeof s.iconData === 'string' ? s.iconData.slice(0, 400000) : ''
    };
    if (typeof s.origUrl === 'string') out.origUrl = s.origUrl;
    if (typeof s.imagem === 'string') out.imagem = s.imagem;
    return out;
}

function sanitizeSiteList(list) {
    if (!Array.isArray(list)) return [];
    return list.map(sanitizeSite).filter(Boolean);
}

function persistSites() { safeStorageSet(KEYS.sites, customSites); }
function persistHidden() { safeStorageSet(KEYS.hidden, hiddenSites); }
function persistFavs() { safeStorageSet(KEYS.favs, Array.from(favoritedUrls)); }
function persistPrefs() {
    safeStorageSet(KEYS.prefs, prefs);
    window.dispatchEvent(new CustomEvent('playhub:prefs-changed'));
}

function playSound() {
    if (!prefs.sound) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const now = audioCtx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(580, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(now + 0.04);
    } catch (e) { /* sem áudio */ }
}

/* ---------------------------------------------------------------------
   Sites (padrão + criados)
   --------------------------------------------------------------------- */
function getDefaultSites() {
    const list = (typeof SITES !== 'undefined') ? SITES : [];
    const mapCat = { 'games': 'jogos', 'apps': 'aplicativos', 'movies': 'filmes' };
    
    list.forEach(s => { 
        if (!s.id) s.id = 'd_' + hashString(s.url); 
        if (mapCat[s.category]) s.category = mapCat[s.category];
        if (s.isHidden && !hiddenSites.includes(s.url)) {
            hiddenSites.push(s.url);
            persistHidden();
        }
    });
    return list;
}

function getAllSites() {
    const defaults = getDefaultSites();
    const replaced = new Set();
    customSites.forEach(c => { replaced.add(c.url); if (c.origUrl) replaced.add(c.origUrl); });
    const hidden = new Set(hiddenSites);
    const combined = [...defaults.filter(d => !replaced.has(d.url)), ...customSites];
    return combined.filter(s => !hidden.has(s.url));
}

function findSiteByUrl(url) {
    return getDefaultSites().find(s => s.url === url) || customSites.find(s => s.url === url) || null;
}

function isCustom(site) { return customSites.some(c => c.id === site.id); }

/* ---------------------------------------------------------------------
   Início
   --------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    if (IS_POPUP) document.documentElement.classList.add('popup-mode');
    populateLangSelectors();
    renderDynamicCategoryButtons();
    applyPreferences();
    renderPage();
    setupEvents();
    setupInstall();
    registerServiceWorker();
    if (IS_EXTENSION) {
        safeStorageSet(KEYS.prefs, prefs);
    }
    if (prefs.checkOnOpen && !IS_POPUP) runBackgroundPingCheck();
}

/* ---------------------------------------------------------------------
   Preferências, tema e layout
   --------------------------------------------------------------------- */
function applyPreferences() {
    const cl = document.body.classList;
    ['system-mode', 'dark-mode', 'light-mode'].forEach(c => cl.remove(c));
    cl.add(['dark-mode', 'light-mode'].includes(prefs.theme) ? prefs.theme : 'system-mode');

    cl.toggle('no-blur', !prefs.blur);
    cl.toggle('no-images', !prefs.images);
    cl.toggle('no-names', !prefs.names);
    cl.toggle('no-desc', !prefs.desc);
    cl.toggle('no-dots', !prefs.dots);
    cl.toggle('mini-menu', !!prefs.miniMenu);
    cl.toggle('popup-mode', IS_POPUP);
    cl.toggle('is-extension', IS_EXTENSION);

    document.documentElement.style.setProperty('--grid-cols', clampCols(prefs.gridCols));

    activeLangKey = (prefs.lang && prefs.lang !== 'auto' && I18N_DICT[prefs.lang])
        ? prefs.lang
        : detectAutoLanguage();

    updateLayoutMode();
    updateThemeColor();
    applyTranslations();
    refreshDynamicLabels();
    updateSettingsUI();
    syncBubbleLabel();
}

function updateLayoutMode() {
    const mobile = IS_POPUP || prefs.forceMobile || mqMobile.matches;
    const was = document.body.classList.contains('is-mobile');
    document.body.classList.toggle('is-mobile', mobile);
    if (was !== mobile) closeEverything();
}

function isDarkNow() {
    if (prefs.theme === 'dark-mode') return true;
    if (prefs.theme === 'light-mode') return false;
    return mqDark.matches;
}

function updateThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDarkNow() ? '#0f172a' : '#f1f5f9');
    const btn = $('theme-toggle');
    if (btn) {
        btn.textContent = prefs.theme === 'dark-mode' ? '🌙' : (prefs.theme === 'light-mode' ? '☀️' : '🖥️');
        btn.title = tr('tema') + ': ' + tr(prefs.theme === 'dark-mode' ? 'tema_escuro' : (prefs.theme === 'light-mode' ? 'tema_claro' : 'tema_sistema'));
    }
}

function syncBubbleLabel() {
    if (IS_EXTENSION && chrome.storage && chrome.storage.local) {
        try { chrome.storage.local.set({ [KEYS.bubbleLabel]: tr('abrir_playhub') }); } catch (e) { /* ignora */ }
    }
}

function updateSettingsUI() {
    const setVal = (id, v) => { const el = $(id); if (el) el.value = v; };
    setVal('pref-theme-select', prefs.theme);
    setVal('pref-gridCols', clampCols(prefs.gridCols));
    setVal('pref-openMode', prefs.openMode);
    setVal('pref-lang-select', prefs.lang || 'auto');
    setVal('lang-selector', prefs.lang || 'auto');

    TOGGLE_KEYS.forEach(key => {
        const chk = $(`pref-${key}`);
        const st = $(`st-${key}`);
        if (chk) chk.checked = !!prefs[key];
        if (st) {
            st.textContent = prefs[key] ? tr('ativo') : tr('inativo');
            st.classList.toggle('active', !!prefs[key]);
        }
    });

    $('row-open-mode')?.classList.toggle('hidden', !IS_EXTENSION);
    $('hint-bubble')?.classList.toggle('hidden', !IS_EXTENSION);

    renderHiddenSitesList();
}

function populateLangSelectors() {
    [$('lang-selector'),$('pref-lang-select')].forEach(sel => {
        if (!sel) return;
        sel.innerHTML = '';
        LANGS.forEach(l => {
            const opt = document.createElement('option');
            opt.value = l.id;
            opt.textContent = l.name;
            sel.appendChild(opt);
        });
        sel.value = prefs.lang || 'auto';
    });
}

function setLanguage(value) {
    prefs.lang = value;
    persistPrefs();
    applyPreferences();
    renderPage();
}

/* ---------------------------------------------------------------------
   Categorias
   --------------------------------------------------------------------- */
function renderDynamicCategoryButtons() {
    const side = $('dynamic-categories');
    const mobile = $('mobile-categories');
    const catSelect = $('new-site-categoria');
    if (side) side.innerHTML = '';
    if (mobile) mobile.innerHTML = '';
    if (catSelect) catSelect.innerHTML = '';

    CATEGORY_ORDER.forEach(cat => {
        const icon = CATEGORY_ICONS[cat] || '🌐';
        const make = (cls) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `${cls} filter-btn`;
            btn.dataset.cat = cat;
            const ic = document.createElement('span');
            ic.className = 'icon';
            ic.setAttribute('aria-hidden', 'true');
            ic.textContent = icon;
            const label = document.createElement('span');
            label.className = 'nav-label';
            label.dataset.i18n = cat;
            label.textContent = tr(cat);
            btn.append(ic, label);
            return btn;
        };
        if (side) side.appendChild(make('nav-btn'));
        if (mobile) mobile.appendChild(make('cat-chip'));

        if (catSelect) {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.dataset.icon = icon;
            opt.textContent = `${icon} ${tr(cat)}`;
            catSelect.appendChild(opt);
        }
    });
    syncActiveButtons();
}

function refreshDynamicLabels() {
    const catSelect = $('new-site-categoria');
    if (catSelect) {
        Array.from(catSelect.options).forEach(opt => { opt.textContent = `${opt.dataset.icon || '🌐'} ${tr(opt.value)}`; });
    }
    updateSelectionLabel();
}

function syncActiveButtons() {
    document.querySelectorAll('.filter-btn').forEach(b => {
        const on = b.dataset.cat === activeCategory;
        b.classList.toggle('active', on);
        if (on) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
    });
    const menuBtn = $('bn-menu');
    if (menuBtn) menuBtn.classList.toggle('active', !['todos', 'criados', 'favoritos'].includes(activeCategory));
}

function selectCategory(cat) {
    activeCategory = cat;
    syncActiveButtons();
    closeEverything();
    renderPage();
    $('main-content')?.scrollTo?.({ top: 0 });
    window.scrollTo({ top: 0 });
}

/* ---------------------------------------------------------------------
   Grade de cards
   --------------------------------------------------------------------- */
function renderPage() {
    const gridContainer = $('grid-container');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const searchVal = ($('search-input')?.value || '').trim().toLowerCase();
    let baseSites = getAllSites().filter(s =>
        (s.name || '').toLowerCase().includes(searchVal) || (s.description || '').toLowerCase().includes(searchVal));

    if (activeCategory === 'criados') {
        const ids = new Set(customSites.map(c => c.id));
        baseSites = baseSites.filter(s => ids.has(s.id));
    } else if (activeCategory === 'favoritos') {
        baseSites = baseSites.filter(s => favoritedUrls.has(s.url));
    } else if (activeCategory !== 'todos') {
        baseSites = baseSites.filter(s => (s.category || 'outros') === activeCategory);
    }

    if (baseSites.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        const ico = document.createElement('div');
        ico.className = 'empty-ico';
        ico.textContent = activeCategory === 'favoritos' ? '⭐' : '🔎';
        const msg = document.createElement('p');
        msg.textContent = tr('sem_itens');
        empty.append(ico, msg);
        gridContainer.appendChild(empty);
        return;
    }

    const grouped = (activeCategory === 'todos' || activeCategory === 'criados' || activeCategory === 'favoritos')
        ? CATEGORY_ORDER.filter(c => baseSites.some(s => (s.category || 'outros') === c))
        : [activeCategory];

    grouped.forEach(cat => {
        const items = baseSites.filter(s => (s.category || 'outros') === cat);
        if (!items.length) return;
        const sec = document.createElement('section');
        sec.className = 'cat-section';

        const h = document.createElement('h2');
        h.className = 'section-title';
        const title = document.createElement('span');
        title.textContent = `${CATEGORY_ICONS[cat] || '🌐'} ${tr(cat)}`;
        const count = document.createElement('span');
        count.className = 'section-count';
        count.textContent = String(items.length);
        h.append(title, count);

        const grid = document.createElement('div');
        grid.className = 'grid-cards';
        items.forEach(site => grid.appendChild(createCardElement(site)));
        sec.append(h, grid);
        gridContainer.appendChild(sec);
    });
}

function createCardElement(site) {
    const card = document.createElement('div');
    card.className = 'site-card glass' + (site.isOffline ? ' is-offline' : '');
    card.dataset.url = site.url;
    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', site.name);

    if (selectedUrls.has(site.url)) card.classList.add('selected');

    if (multiSelectMode) {
        const chk = document.createElement('input');
        chk.type = 'checkbox';
        chk.className = 'multi-select-checkbox';
        chk.checked = selectedUrls.has(site.url);
        chk.tabIndex = -1;
        chk.setAttribute('aria-hidden', 'true');
        card.appendChild(chk);
    }

    if (favoritedUrls.has(site.url)) {
        const star = document.createElement('span');
        star.className = 'card-fav-star';
        star.textContent = '⭐';
        card.appendChild(star);
    }

    const optBtn = document.createElement('button');
    optBtn.type = 'button';
    optBtn.className = 'btn-options';
    optBtn.textContent = '⋮';
    optBtn.setAttribute('aria-label', site.name);
    optBtn.addEventListener('click', (e) => { e.stopPropagation(); openDetailsPanel(site); });
    card.appendChild(optBtn);

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'card-img-wrapper';
    renderIcon(imgWrapper, site);
    card.appendChild(imgWrapper);

    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = site.name;
    card.appendChild(title);

    if (site.description) {
        const desc = document.createElement('div');
        desc.className = 'card-desc';
        desc.textContent = site.description;
        card.appendChild(desc);
    }

    if (site.isOffline) addOfflineDot(card);

    let pressTimer = null;
    let touchMoved = false;
    let longPressed = false;

    const startPress = (e) => {
        touchMoved = false;
        longPressed = false;
        const point = e.touches ? e.touches[0] : e;
        const x = point.clientX, y = point.clientY;
        pressTimer = setTimeout(() => {
            if (!touchMoved) { longPressed = true; openContextMenu(x, y, site); }
        }, 650);
    };
    const cancelPress = () => { if (pressTimer) clearTimeout(pressTimer); pressTimer = null; };

    card.addEventListener('touchstart', startPress, { passive: true });
    card.addEventListener('touchmove', () => { touchMoved = true; cancelPress(); }, { passive: true });
    card.addEventListener('touchend', cancelPress);
    card.addEventListener('touchcancel', cancelPress);
    card.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        cancelPress();
        longPressed = true;
        openContextMenu(e.clientX, e.clientY, site);
    });

    const activate = () => {
        if (longPressed) { longPressed = false; return; }
        if (multiSelectMode) {
            toggleSelectUrl(site.url);
            card.classList.toggle('selected', selectedUrls.has(site.url));
            const chk = card.querySelector('.multi-select-checkbox');
            if (chk) chk.checked = selectedUrls.has(site.url);
            return;
        }
        openSiteUrl(site.url);
    };
    card.addEventListener('click', activate);
    card.addEventListener('keydown', (e) => {
        if (e.target !== card) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
        if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) {
            e.preventDefault();
            const r = card.getBoundingClientRect();
            openContextMenu(r.left + r.width / 2, r.top + r.height / 2, site);
        }
    });

    return card;
}

function openSiteUrl(url) {
    window.open(url, '_blank', 'noopener');
}

function addOfflineDot(card) {
    if (card.querySelector('.offline-dot')) return;
    const dot = document.createElement('div');
    dot.className = 'offline-dot';
    dot.title = tr('site_offline');
    card.appendChild(dot);
}

/* ---------------------------------------------------------------------
   Ícones
   --------------------------------------------------------------------- */
function getDomain(site) {
    if (site.domain) return site.domain;
    try { return new URL(site.url).hostname; } catch (e) { return ''; }
}

function renderIcon(container, site) {
    container.innerHTML = '';

    const emoji = (typeof site.iconData === 'string' && site.iconData && !isImageSource(site.iconData)) ? site.iconData : '';
    if (emoji) { container.appendChild(makeLetterTile(emoji, site.name, true)); return; }

    const domain = getDomain(site);
    const sources = [
        isImageSource(site.iconData) ? site.iconData : null,
        site.imagem,
        domain ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128` : null,
        domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : null,
        domain ? `https://${domain}/favicon.ico` : null
    ].filter(Boolean);

    const img = document.createElement('img');
    img.alt = '';
    img.decoding = 'async';
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    let step = 0;
    const tryNext = () => {
        if (step < sources.length) img.src = sources[step++];
        else container.replaceChildren(makeLetterTile((site.name || 'P').trim().charAt(0).toUpperCase() || 'P', site.name, false));
    };
    img.addEventListener('error', tryNext);
    img.addEventListener('load', () => { if (img.naturalWidth && img.naturalWidth < 20 && step < sources.length) tryNext(); });
    container.appendChild(img);
    tryNext();
}

function makeLetterTile(text, name, isEmoji) {
    const tile = document.createElement('div');
    tile.className = 'icon-tile' + (isEmoji ? ' is-emoji' : '');
    tile.textContent = text;
    tile.setAttribute('aria-hidden', 'true');
    if (!isEmoji) {
        const hue = parseInt(hashString(name || 'p'), 36) % 360;
        tile.style.background = `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${(hue + 50) % 360} 70% 45%))`;
    }
    return tile;
}

/* ---------------------------------------------------------------------
   Eventos
   --------------------------------------------------------------------- */
function setupEvents() {
    const backdrop = $('backdrop');

    document.addEventListener('click', (e) => {
        if (e.target.closest('button, .site-card, select, input')) playSound();
        const ctxMenu = $('custom-context-menu');
        if (ctxMenu && !ctxMenu.classList.contains('hidden') && !ctxMenu.contains(e.target)) ctxMenu.classList.add('hidden');

        const f = e.target.closest('.filter-btn');
        if (f && f.dataset.cat) selectCategory(f.dataset.cat);
    });

    backdrop.addEventListener('click', closeEverything);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeEverything(); });
    window.addEventListener('resize', () => { $('custom-context-menu')?.classList.add('hidden'); });
    window.addEventListener('scroll', () => { $('custom-context-menu')?.classList.add('hidden'); }, { passive: true });

    mqMobile.addEventListener('change', () => { updateLayoutMode(); });
    mqDark.addEventListener('change', updateThemeColor);

    $('brand-toggle')?.addEventListener('click', () => {
        if (document.body.classList.contains('is-mobile')) return;
        prefs.miniMenu = !prefs.miniMenu;
        persistPrefs();
        applyPreferences();
    });

    $('search-input')?.addEventListener('input', () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(renderPage, 90);
    });
    $('btn-search-open')?.addEventListener('click', () => {
        document.body.classList.add('search-open');
        $('search-input')?.focus();
    });
    $('btn-search-close')?.addEventListener('click', () => {
        document.body.classList.remove('search-open');
        const input = $('search-input');
        if (input && input.value) { input.value = ''; renderPage(); }
    });

    $('lang-selector')?.addEventListener('change', (e) => setLanguage(e.target.value));
    $('theme-toggle')?.addEventListener('click', () => {
        prefs.theme = prefs.theme === 'dark-mode' ? 'light-mode' : (prefs.theme === 'light-mode' ? 'system-mode' : 'dark-mode');
        persistPrefs();
        applyPreferences();
    });
    $('btn-settings-top')?.addEventListener('click', openSettings);

    $('btn-multi-select')?.addEventListener('click', toggleMultiSelectMode);
    $('btn-sel-cancel')?.addEventListener('click', toggleMultiSelectMode);
    $('btn-sel-fav')?.addEventListener('click', favSelected);
    $('btn-sel-del')?.addEventListener('click', openConfirmDeleteSelected);

    $('bn-menu')?.addEventListener('click', () => openOverlay('mobile-menu'));
    $('close-mobile-menu')?.addEventListener('click', closeEverything);
    $('bn-create')?.addEventListener('click', () => openCreateModal());
    $('mm-select')?.addEventListener('click', () => { closeEverything(); if (!multiSelectMode) toggleMultiSelectMode(); });
    $('mm-device')?.addEventListener('click', openDeviceModal);
    $('mm-settings')?.addEventListener('click', openSettings);

    $('btn-open-settings')?.addEventListener('click', openSettings);
    $('close-settings')?.addEventListener('click', closeEverything);

    $('pref-theme-select')?.addEventListener('change', (e) => {
        prefs.theme = e.target.value;
        persistPrefs();
        applyPreferences();
    });
    $('pref-lang-select')?.addEventListener('change', (e) => setLanguage(e.target.value));
    $('pref-gridCols')?.addEventListener('change', (e) => {
        prefs.gridCols = clampCols(e.target.value);
        e.target.value = prefs.gridCols;
        persistPrefs();
        applyPreferences();
    });
    $('pref-openMode')?.addEventListener('change', (e) => {
        prefs.openMode = e.target.value === 'popup' ? 'popup' : 'tab';
        persistPrefs(); 
    });

    TOGGLE_KEYS.forEach(key => {
        $(`pref-${key}`)?.addEventListener('change', async (e) => {
            if (key === 'bubble') { await handleBubbleToggle(e.target); return; }
            prefs[key] = e.target.checked;
            persistPrefs();
            applyPreferences();
        });
    });

    $('btn-reset-settings')?.addEventListener('click', async () => {
        const hadBubble = prefs.bubble;
        prefs = Object.assign({}, DEFAULT_PREFS);
        persistPrefs();
        if (hadBubble && IS_EXTENSION) removeHostPermission();
        applyPreferences();
        renderPage();
        showToast(tr('ajustes_ok'));
    });

    $('btn-open-create')?.addEventListener('click', () => openCreateModal());
    $('close-create')?.addEventListener('click', closeEverything);
    $('btn-cancel-create')?.addEventListener('click', closeEverything);
    $('new-site-icon-type')?.addEventListener('change', (e) => buildIconInput(e.target.value));

    // Auto-preenchimento inteligente de nome e categoria ao digitar/colar a URL
    $('new-site-url')?.addEventListener('input', (e) => {
        const urlValue = e.target.value.trim();
        const nameInput = $('new-site-nome');
        const catSelect = $('new-site-categoria');
        
        if (urlValue && nameInput && (!nameInput.value || nameInput.dataset.autoFilled === 'true')) {
            const autoName = extractSiteNameFromUrl(urlValue);
            if (autoName) {
                nameInput.value = autoName;
                nameInput.dataset.autoFilled = 'true';
            }
        }
        
        if (urlValue && catSelect) {
            const isGame = detectGameCategoryFromUrl(urlValue);
            if (isGame) {
                catSelect.value = 'jogos';
            } else if (activeCategory && CATEGORY_ORDER.includes(activeCategory) && activeCategory !== 'todos') {
                catSelect.value = activeCategory;
            } else {
                catSelect.value = '';
            }
        }
    });

    $('form-create-site')?.addEventListener('submit', (e) => { e.preventDefault(); saveCreateSite(); });

    $('btn-export-data')?.addEventListener('click', exportBackup);
    $('btn-import-data')?.addEventListener('click', () => $('import-file-input').click());
    $('import-file-input')?.addEventListener('change', importBackup);

    $('btn-device-info')?.addEventListener('click', openDeviceModal);
    $('close-device')?.addEventListener('click', closeEverything);
    $('btn-copy-device-report')?.addEventListener('click', copyDeviceReport);
    $('close-panel')?.addEventListener('click', closeEverything);
    $('close-confirm')?.addEventListener('click', closeEverything);
    $('btn-confirm-cancel')?.addEventListener('click', closeEverything);

    $('close-quick')?.addEventListener('click', closeEverything);
    $('quick-search')?.addEventListener('input', renderQuickResults);
    window.addEventListener('playhub:bubble-click', openQuickLauncher);

    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.mini-menu .nav-btn, .header-actions .icon-btn');
        if (!target || document.body.classList.contains('is-mobile')) return;
        const label = target.querySelector('.nav-label')?.textContent || target.getAttribute('aria-label') || target.title;
        if (label) showTooltip(target, label.trim());
    });
    document.addEventListener('mouseout', (e) => { if (e.target.closest('.nav-btn, .icon-btn')) hideTooltip(); });
    document.addEventListener('focusin', (e) => { if (!e.target.closest('.nav-btn, .icon-btn')) hideTooltip(); });
}

function showTooltip(target, text) {
    const tip = $('app-tooltip');
    if (!tip) return;
    tip.textContent = text;
    tip.classList.remove('hidden');
    const r = target.getBoundingClientRect();
    const rtl = document.documentElement.dir === 'rtl';
    const tw = tip.offsetWidth;
    const mini = document.body.classList.contains('mini-menu') && target.classList.contains('nav-btn');
    let left = mini ? (rtl ? r.left - tw - 8 : r.right + 8) : r.left + r.width / 2 - tw / 2;
    let top = mini ? r.top + r.height / 2 - tip.offsetHeight / 2 : r.bottom + 8;
    left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
}
function hideTooltip() { $('app-tooltip')?.classList.add('hidden'); }

/* ---------------------------------------------------------------------
   Janelas e Modais
   --------------------------------------------------------------------- */
let lastFocused = null;

function openOverlay(id, focusSelector) {
    const el = $(id);
    if (!el) return;
    closeEverything(true);
    lastFocused = document.activeElement;
    el.classList.remove('hidden');
    $('backdrop')?.classList.remove('hidden');
    document.body.classList.add('overlay-open');
    const target = focusSelector ? el.querySelector(focusSelector) : null;
    if (target) setTimeout(() => target.focus(), 30);
}

function closeEverything(keepFocus) {
    document.querySelectorAll('.modal, .details-panel, .sheet, .quick-launcher, .backdrop, .context-menu').forEach(el => el.classList.add('hidden'));
    hideTooltip();
    document.body.classList.remove('overlay-open');
    if (keepFocus !== true && lastFocused && document.contains(lastFocused)) { try { lastFocused.focus(); } catch (e) { /* ignora */ } }
    if (keepFocus !== true) lastFocused = null;
}

function openSettings() {
    updateSettingsUI();
    openOverlay('settings-modal');
}

/* ---------------------------------------------------------------------
   Seleção Múltipla
   --------------------------------------------------------------------- */
function toggleMultiSelectMode() {
    multiSelectMode = !multiSelectMode;
    selectedUrls.clear();
    document.body.classList.toggle('multi-select-mode', multiSelectMode);
    $('normal-header-actions')?.classList.toggle('hidden', multiSelectMode);
    $('selection-header-actions')?.classList.toggle('hidden', !multiSelectMode);
    document.body.classList.remove('search-open');
    updateSelectionLabel();
    renderPage();
}

function toggleSelectUrl(url) {
    if (selectedUrls.has(url)) selectedUrls.delete(url); else selectedUrls.add(url);
    updateSelectionLabel();
}

function updateSelectionLabel() {
    const label = $('selection-count-label');
    if (label) label.textContent = tr('n_selecionados', { n: selectedUrls.size });
}

function favSelected() {
    if (!selectedUrls.size) return;
    selectedUrls.forEach(url => favoritedUrls.add(url));
    persistFavs();
    showToast(tr('favs_add'));
    toggleMultiSelectMode();
}

function openConfirmDeleteSelected() {
    if (selectedUrls.size === 0) return;
    const msg = $('confirm-modal-msg');
    const list = $('confirm-modal-list');
    if (msg) msg.textContent = tr('confirmar_msg', { n: selectedUrls.size });
    if (list) list.innerHTML = '';

    const all = getAllSites();
    selectedUrls.forEach(url => {
        const item = all.find(s => s.url === url);
        if (item && list) {
            const li = document.createElement('li');
            li.textContent = item.name;
            list.appendChild(li);
        }
    });

    $('btn-confirm-ok').onclick = () => {
        const urls = Array.from(selectedUrls);
        toggleMultiSelectMode();
        closeEverything();
        removeSites(urls);
    };
    openOverlay('confirm-modal', '#btn-confirm-cancel');
}

function removeSites(urls) {
    const snapshot = { custom: customSites.map(c => Object.assign({}, c)), hidden: [...hiddenSites], favs: new Set(favoritedUrls) };
    const set = new Set(urls);
    const removedCustoms = customSites.filter(c => set.has(c.url));
    customSites = customSites.filter(c => !set.has(c.url));
    removedCustoms.forEach(c => { if (c.origUrl && !hiddenSites.includes(c.origUrl)) hiddenSites.push(c.origUrl); });
    urls.forEach(url => {
        const isDefault = getDefaultSites().some(d => d.url === url);
        if (isDefault && !hiddenSites.includes(url)) hiddenSites.push(url);
    });
    persistSites();
    persistHidden();
    renderPage();
    updateSettingsUI();
    showToast(tr('removidos'), () => {
        customSites = snapshot.custom;
        hiddenSites = snapshot.hidden;
        favoritedUrls = snapshot.favs;
        persistSites(); persistHidden(); persistFavs();
        renderPage();
        updateSettingsUI();
        showToast(tr('desfeito'));
    });
}

/* ---------------------------------------------------------------------
   Avisos (Toast)
   --------------------------------------------------------------------- */
function showToast(msg, undoFn) {
    const toast = $('toast');
    if (!toast) return;
    toast.innerHTML = '';
    const span = document.createElement('span');
    span.textContent = msg;
    toast.appendChild(span);

    if (typeof undoFn === 'function') {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'toast-undo-btn';
        btn.textContent = tr('desfazer');
        btn.addEventListener('click', () => { clearTimeout(toastTimer); toast.classList.add('hidden'); undoFn(); });
        toast.appendChild(btn);
    }
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), undoFn ? 6000 : 2500);
}

/* ---------------------------------------------------------------------
   Menu de Contexto
   --------------------------------------------------------------------- */
function toggleFavorite(url) {
    if (favoritedUrls.has(url)) favoritedUrls.delete(url); else favoritedUrls.add(url);
    persistFavs();
    renderPage();
}

function shareSite(site) {
    if (navigator.share) {
        navigator.share({ title: site.name, url: site.url }).catch(() => { /* cancelado */ });
    } else {
        copyText(site.url).then(() => showToast(tr('copiado')));
    }
}

function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text).catch(() => legacyCopy(text));
    }
    return Promise.resolve(legacyCopy(text));
}

function legacyCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignora */ }
    ta.remove();
}

async function checkSiteStatus(site) {
    showToast(tr('verificando'));
    const start = Date.now();
    try {
        await fetch(site.url, { mode: 'no-cors', cache: 'no-store' });
        showToast(tr('online_ms', { ms: Date.now() - start }));
    } catch (e) {
        showToast(tr('offline'));
    }
}

function openContextMenu(x, y, site) {
    const menu = $('custom-context-menu');
    if (!menu) return;
    hideTooltip();
    menu.classList.remove('hidden');
    menu.style.visibility = 'hidden';
    const w = menu.offsetWidth, h = menu.offsetHeight;
    menu.style.left = Math.max(8, Math.min(x, window.innerWidth - w - 8)) + 'px';
    menu.style.top = Math.max(8, Math.min(y, window.innerHeight - h - 8)) + 'px';
    menu.style.visibility = '';

    const close = () => menu.classList.add('hidden');

    $('ctx-open').onclick = () => { openSiteUrl(site.url); close(); };
    $('ctx-fav').onclick = () => { toggleFavorite(site.url); close(); };
    $('ctx-edit').onclick = () => { close(); openCreateModal(site); };
    $('ctx-copy').onclick = () => { close(); copyText(site.url).then(() => showToast(tr('copiado'))); };
    $('ctx-share').onclick = () => { close(); shareSite(site); };
    $('ctx-check').onclick = () => { close(); checkSiteStatus(site); };
    $('ctx-select').onclick = () => {
        close();
        if (!multiSelectMode) toggleMultiSelectMode();
        toggleSelectUrl(site.url);
        renderPage();
    };
    $('ctx-delete').onclick = () => { close(); removeSites([site.url]); };

    setTimeout(() => menu.querySelector('button')?.focus(), 0);
}

/* ---------------------------------------------------------------------
   Criar / Editar Site
   --------------------------------------------------------------------- */
function buildIconInput(type, currentValue) {
    const container = $('icon-input-container');
    if (!container) return;
    container.innerHTML = '';

    if (type === 'emoji') {
        const input = document.createElement('input');
        input.type = 'text'; input.id = 'icon-val'; input.maxLength = 8;
        input.placeholder = '🚀';
        input.value = currentValue || '';
        container.appendChild(input);
    } else if (type === 'link') {
        const input = document.createElement('input');
        input.type = 'text'; input.id = 'icon-val'; input.inputMode = 'url';
        input.placeholder = 'https://exemplo.com/icone.png';
        input.value = currentValue || '';
        container.appendChild(input);
    } else if (type === 'upload') {
        const file = document.createElement('input');
        file.type = 'file'; file.id = 'icon-file'; file.accept = 'image/*';
        const hidden = document.createElement('input');
        hidden.type = 'hidden'; hidden.id = 'icon-val';
        hidden.value = currentValue || '';
        container.append(file, hidden);
        file.addEventListener('change', (evt) => {
            const f = evt.target.files[0];
            if (!f) return;
            const reader = new FileReader();
            reader.onload = (el) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = 128; canvas.height = 128;
                    const side = Math.min(img.width, img.height);
                    canvas.getContext('2d').drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, 128, 128);
                    hidden.value = canvas.toDataURL('image/png');
                };
                img.src = el.target.result;
            };
            reader.readAsDataURL(f);
        });
    }
}

function setTitleKey(key) {
    const el = $('modal-title-text');
    if (!el) return;
    el.dataset.i18n = key;
    el.textContent = tr(key);
}

function openCreateModal(editSite) {
    $('form-create-site')?.reset();
    $('edit-site-id').value = '';
    $('edit-site-orig-url').value = '';
    const nameInput = $('new-site-nome');
    if (nameInput) nameInput.dataset.autoFilled = 'false';

    let iconType = 'auto';
    let iconValue = '';

    if (editSite) {
        setTitleKey('editar');
        $('edit-site-id').value = isCustom(editSite) ? editSite.id : '';
        $('edit-site-orig-url').value = editSite.origUrl || editSite.url;
        $('new-site-url').value = editSite.url || '';
        $('new-site-nome').value = editSite.name || '';
        $('new-site-categoria').value = CATEGORY_ORDER.includes(editSite.category) ? editSite.category : 'outros';
        $('new-site-desc').value = editSite.description || '';
        const icon = editSite.iconData || '';
        if (icon) {
            iconValue = icon;
            iconType = /^data:image\//i.test(icon) ? 'upload' : (/^https?:\/\//i.test(icon) ? 'link' : 'emoji');
        }
    } else {
        setTitleKey('criar_botao');
        $('new-site-categoria').value = '';
    }

    $('new-site-icon-type').value = iconType;
    buildIconInput(iconType, iconValue);
    openOverlay('create-modal', '#new-site-url');
}

function saveCreateSite() {
    const rawUrl = $('new-site-url')?.value;
    const url = normalizeUrl(rawUrl);
    let name = $('new-site-nome')?.value.trim();
    
    if (!name && rawUrl) {
        name = extractSiteNameFromUrl(rawUrl);
    }

    let category = $('new-site-categoria')?.value;

    if (!name || !($('new-site-url')?.value.trim())) { 
        showToast(tr('preencha')); 
        return; 
    }
    if (!url) { 
        showToast(tr('url_invalida')); 
        return; 
    }

    if (!category) {
        openCategoryChoiceModal((selectedCat) => {
            $('new-site-categoria').value = selectedCat;
            saveCreateSite();
        });
        return;
    }

    const description = $('new-site-desc')?.value.trim();
    const editId = $('edit-site-id')?.value;
    const origUrl = $('edit-site-orig-url')?.value;
    const iconType = $('new-site-icon-type')?.value;
    let iconData = iconType === 'auto' ? '' : ($('icon-val')?.value.trim() || '');

    if (iconType === 'link' && !/^https?:\/\//i.test(iconData)) iconData = '';

    const editing = !!origUrl;
    const clash = getAllSites().some(s => s.url === url && s.url !== origUrl && s.id !== editId);
    if (clash) { 
        showToast(tr('url_existe')); 
        return; 
    }

    const siteObj = { 
        id: editId || ('c_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)), 
        name, 
        url, 
        category, 
        description, 
        iconData 
    };

    if (editing) {
        const idx = customSites.findIndex(c => c.id === editId);
        if (idx >= 0) {
            if (customSites[idx].origUrl) siteObj.origUrl = customSites[idx].origUrl;
            customSites[idx] = siteObj;
        } else {
            siteObj.origUrl = origUrl;
            customSites.push(siteObj);
        }
        if (origUrl !== url) {
            if (favoritedUrls.delete(origUrl)) favoritedUrls.add(url);
            persistFavs();
        }
    } else {
        customSites.push(siteObj);
    }

    if (hiddenSites.includes(url)) { 
        hiddenSites = hiddenSites.filter(u => u !== url); 
        persistHidden(); 
    }
    
    persistSites();
    closeEverything();
    renderPage();
    showToast(tr('salvo'));
}

function openCategoryChoiceModal(onSelect) {
    const msg = $('confirm-modal-msg');
    const list = $('confirm-modal-list');
    
    if (msg) msg.textContent = "Não conseguimos identificar a categoria. Onde deseja salvar este site?";
    if (list) {
        list.innerHTML = `
            <div style="display: flex; gap: 10px; margin-top: 15px; justify-content: center;">
                <button type="button" id="btn-choice-jogo" class="btn-primary" style="padding: 8px 16px;">🎮 É um Jogo</button>
                <button type="button" id="btn-choice-app" class="btn-primary" style="padding: 8px 16px;">📱 É um Aplicativo / Site</button>
            </div>
        `;
    }

    $('btn-choice-jogo').onclick = () => {
        closeEverything(true);
        onSelect('jogos');
    };
    
    $('btn-choice-app').onclick = () => {
        closeEverything(true);
        onSelect('aplicativos');
    };

    openOverlay('confirm-modal', '#btn-choice-jogo');
}

/* ---------------------------------------------------------------------
   Painel de Detalhes
   --------------------------------------------------------------------- */
function openDetailsPanel(site) {
    currentSiteForPanel = site;
    $('panel-title').textContent = site.name;
    $('panel-desc').textContent = site.description || '';
    $('panel-url').textContent = site.url;
    renderIcon($('panel-icon'), site);

    const badges = $('panel-badges');
    badges.innerHTML = '';
    const precoKey = { free: 'preco_free', freemium: 'preco_freemium', pago: 'preco_pago' }[site.price];
    if (precoKey) {
        const p = document.createElement('span');
        p.className = `badge-tag badge-${site.price}`;
        p.textContent = tr(precoKey);
        badges.appendChild(p);
    }
    if (site.opensource) {
        const o = document.createElement('span');
        o.className = 'badge-tag badge-open';
        o.textContent = tr('opensource');
        badges.appendChild(o);
    }

    const destBox = $('panel-destaques-box');
    const destList = $('panel-destaques-list');
    destList.innerHTML = '';
    if (Array.isArray(site.tags) && site.tags.length) {
        destBox.classList.remove('hidden');
        site.tags.forEach(d => {
            const li = document.createElement('li');
            li.textContent = d;
            destList.appendChild(li);
        });
    } else {
        destBox.classList.add('hidden');
    }

    $('btn-panel-launch').onclick = () => openSiteUrl(site.url);
    $('btn-panel-fav').onclick = () => { toggleFavorite(site.url); if (favoritedUrls.has(site.url)) showToast(tr('favs_add')); };
    $('btn-panel-copy').onclick = () => copyText(site.url).then(() => showToast(tr('copiado')));
    $('btn-panel-share').onclick = () => shareSite(site);
    $('btn-panel-search').onclick = () => window.open(`https://www.google.com/search?q=${encodeURIComponent(site.name)}`, '_blank', 'noopener');
    $('btn-panel-check').onclick = () => checkSiteStatus(site);

    openOverlay('details-panel', '#btn-panel-launch');
}

/* ---------------------------------------------------------------------
   Sites Ocultos
   --------------------------------------------------------------------- */
function renderHiddenSitesList() {
    const box = $('hidden-sites-list');
    if (!box) return;
    box.innerHTML = '';

    if (hiddenSites.length === 0) {
        const span = document.createElement('span');
        span.className = 'muted';
        span.textContent = tr('nenhum_oculto');
        box.appendChild(span);
        return;
    }

    hiddenSites.forEach(url => {
        const site = findSiteByUrl(url);
        const row = document.createElement('div');
        row.className = 'hidden-site-item';
        const label = document.createElement('span');
        label.textContent = site ? site.name : url;
        label.title = url;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn-action';
        btn.textContent = tr('restaurar');
        btn.addEventListener('click', () => {
            hiddenSites = hiddenSites.filter(u => u !== url);
            persistHidden();
            renderHiddenSitesList();
            renderPage();
        });
        row.append(label, btn);
        box.appendChild(row);
    });
}

/* ---------------------------------------------------------------------
   Backup
   --------------------------------------------------------------------- */
function exportBackup() {
    const data = {
        app: 'playhub',
        version: 2,
        exportedAt: new Date().toISOString(),
        customSites,
        favorites: Array.from(favoritedUrls),
        hidden: hiddenSites,
        prefs: BACKUP_PREF_KEYS.reduce((o, k) => { o[k] = prefs[k]; return o; }, {})
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = href;
    a.download = 'playhub_backup.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(href), 1000);
}

function importBackup(e) {
    const input = e.target;
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onerror = () => { showToast(tr('json_invalido')); input.value = ''; };
    reader.onload = (evt) => {
        try {
            const parsed = JSON.parse(evt.target.result);
            const isOld = Array.isArray(parsed);
            const isNew = parsed && typeof parsed === 'object' && !isOld && (parsed.customSites || parsed.favorites || parsed.hidden || parsed.prefs);
            if (!isOld && !isNew) throw new Error('formato');

            const incoming = sanitizeSiteList(isOld ? parsed : parsed.customSites);
            const byUrl = new Map(customSites.map(c => [c.url, c]));
            incoming.forEach(s => {
                const existing = byUrl.get(s.url);
                if (existing) s.id = existing.id;
                byUrl.set(s.url, s);
            });
            customSites = Array.from(byUrl.values());
            const seen = new Set();
            customSites.forEach(c => { if (seen.has(c.id)) c.id = 'c_' + hashString(c.url + Math.random()); seen.add(c.id); });

            if (isNew) {
                toStringArray(parsed.favorites).forEach(u => favoritedUrls.add(u));
                toStringArray(parsed.hidden).forEach(u => { if (!hiddenSites.includes(u)) hiddenSites.push(u); });
                if (parsed.prefs && typeof parsed.prefs === 'object') {
                    BACKUP_PREF_KEYS.forEach(k => {
                        if (!(k in parsed.prefs)) return;
                        const v = parsed.prefs[k];
                        if (typeof DEFAULT_PREFS[k] === typeof v) prefs[k] = v;
                    });
                    prefs.gridCols = clampCols(prefs.gridCols);
                    if (prefs.lang !== 'auto' && !I18N_DICT[prefs.lang]) prefs.lang = 'auto';
                    if (!['system-mode', 'dark-mode', 'light-mode'].includes(prefs.theme)) prefs.theme = 'system-mode';
                    persistPrefs();
                }
            }
            persistSites(); persistFavs(); persistHidden();
            applyPreferences();
            renderPage();
            showToast(tr('importado'));
        } catch (err) {
            showToast(tr('json_invalido'));
        }
        input.value = '';
    };
    reader.readAsText(file);
}

/* ---------------------------------------------------------------------
   Verificação de Sites
   --------------------------------------------------------------------- */
async function runBackgroundPingCheck() {
    const all = getAllSites();
    for (let i = 0; i < all.length; i += 6) {
        const batch = all.slice(i, i + 6);
        await Promise.all(batch.map(async (site) => {
            const controller = new AbortController();
            const tid = setTimeout(() => controller.abort(), 8000);
            try {
                await fetch(site.url, { mode: 'no-cors', cache: 'no-store', signal: controller.signal });
            } catch (e) {
                site.isOffline = true;
                const card = document.querySelector(`.site-card[data-url="${CSS.escape(site.url)}"]`);
                if (card) { card.classList.add('is-offline'); addOfflineDot(card); }
            } finally {
                clearTimeout(tid);
            }
        }));
    }
}

/* ---------------------------------------------------------------------
   Informações do Aparelho
   --------------------------------------------------------------------- */
function openDeviceModal() {
    const box = $('device-info-content');
    if (!box) return;
    box.innerHTML = '';

    const section = (icon, titleKey, rows) => {
        const sec = document.createElement('div');
        sec.className = 'device-sec';
        const h = document.createElement('h4');
        h.textContent = `${icon} ${tr(titleKey)}`;
        sec.appendChild(h);
        rows.forEach(r => {
            const p = document.createElement('p');
            p.textContent = r;
            sec.appendChild(p);
        });
        box.appendChild(sec);
        return sec;
    };

    let gpu = tr('dev_indisp');
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        const info = gl && gl.getExtension('WEBGL_debug_renderer_info');
        if (info) gpu = gl.getParameter(info.UNMASKED_RENDERER_GL);
    } catch (e) { /* ignora */ }

    section('💻', 'dev_sistema', [
        `${tr('dev_plataforma')}: ${navigator.userAgentData?.platform || navigator.platform || '-'}`,
        `User Agent: ${navigator.userAgent}`,
        `${tr('dev_idiomas')}: ${(navigator.languages || [navigator.language]).join(', ')}`,
        `${tr('dev_fuso')}: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`
    ]);
    const cpuSec = section('🧠', 'dev_cpu', [`${tr('dev_nucleos')}: ${navigator.hardwareConcurrency || '-'}`]);
    const ramSec = section('💾', 'dev_ram', [navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : tr('dev_indisp')]);
    section('🎨', 'dev_video', [
        `GPU: ${gpu}`,
        `${tr('dev_resolucao')}: ${screen.width}x${screen.height} (x${window.devicePixelRatio})`
    ]);
    section('🌡️', 'dev_temp', [tr('dev_indisp')]);

    if (IS_EXTENSION && chrome.system) {
        if (chrome.system.cpu) chrome.system.cpu.getInfo(info => {
            const p = document.createElement('p');
            p.textContent = `${info.modelName} (${info.archName})`;
            cpuSec.appendChild(p);
        });
        if (chrome.system.memory) chrome.system.memory.getInfo(info => {
            const p = document.createElement('p');
            p.textContent = `${(info.capacity / 1024 ** 3).toFixed(2)} GB / ${(info.availableCapacity / 1024 ** 3).toFixed(2)} GB`;
            ramSec.appendChild(p);
        });
    }

    openOverlay('device-modal');
}

function copyDeviceReport() {
    const box = $('device-info-content');
    if (box) copyText(box.innerText).then(() => showToast(tr('relatorio_ok')));
}

/* ---------------------------------------------------------------------
   Modo Bolha
   --------------------------------------------------------------------- */
async function handleBubbleToggle(checkbox) {
    const wantOn = checkbox.checked;
    if (IS_EXTENSION && chrome.permissions) {
        if (wantOn) {
            let granted = true ;
            try { granted = await chrome.permissions.request({ origins: ['http://*/*', 'https://*/*'] }); }
            catch (e) { granted = true ; }
            if (!granted) {
                checkbox.checked = true ;
                prefs.bubble = true ;
                persistPrefs();
                updateSettingsUI();
                showToast(tr('perm_negada'));
                return;
            }
        } else {
            removeHostPermission();
        }
    }
    prefs.bubble = wantOn;
    persistPrefs();
    updateSettingsUI();
}

function removeHostPermission() {
    try { chrome.permissions.remove({ origins: ['http://*/*', 'https://*/*'] }); } catch (e) { /* ignora */ }
}

/* ---------------------------------------------------------------------
   Lançador Rápido
   --------------------------------------------------------------------- */
function openQuickLauncher() {
    const input = $('quick-search');
    if (input) input.value = '';
    renderQuickResults();
    openOverlay('quick-launcher', '#quick-search');
}

function renderQuickResults() {
    const box = $('quick-results');
    if (!box) return;
    box.innerHTML = '';
    const q = ($('quick-search')?.value || '').trim().toLowerCase();
    const all = getAllSites();
    let list = q
        ? all.filter(s => (s.name || '').toLowerCase().includes(q) || (s.description || '').toLowerCase().includes(q))
        : all.filter(s => favoritedUrls.has(s.url));
    if (!q && list.length === 0) list = all.slice(0, 8);
    list.slice(0, 8).forEach(site => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quick-item';
        const ic = document.createElement('span');
        ic.className = 'quick-ico';
        renderIcon(ic, site);
        const name = document.createElement('span');
        name.textContent = site.name;
        btn.append(ic, name);
        btn.addEventListener('click', () => { openSiteUrl(site.url); closeEverything(); });
        box.appendChild(btn);
    });
    if (!list.length) {
        const p = document.createElement('p');
        p.className = 'muted';
        p.textContent = tr('sem_itens');
        box.appendChild(p);
    }
}

/* ---------------------------------------------------------------------
   App Instalável (PWA)
   --------------------------------------------------------------------- */
function isStandalone() {
    return mqStandalone.matches || window.navigator.standalone === true;
}

function setupInstall() {
    if (IS_EXTENSION) return; 

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstallPrompt = e;
        updateInstallButtons();
    });
    window.addEventListener('appinstalled', () => {
        deferredInstallPrompt = null;
        updateInstallButtons();
        showToast(tr('instalado'));
    });
    mqStandalone.addEventListener?.('change', updateInstallButtons);

    document.querySelectorAll('.install-btn').forEach(btn => btn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;
        const promptEvent = deferredInstallPrompt;
        deferredInstallPrompt = null; 
        updateInstallButtons();
        try {
            promptEvent.prompt();
            await promptEvent.userChoice;
        } catch (e) { /* ignora */ }
        closeEverything();
    }));
    updateInstallButtons();
}

function updateInstallButtons() {
    const show = !IS_EXTENSION && !!deferredInstallPrompt && !isStandalone();
    document.querySelectorAll('.install-btn').forEach(btn => btn.classList.toggle('hidden', !show));
}

function registerServiceWorker() {
    if (IS_EXTENSION) return;
    if (!('serviceWorker' in navigator)) return;
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
    navigator.serviceWorker.register('sw.js').catch(() => { /* sem offline, mas o site funciona */ });
}
