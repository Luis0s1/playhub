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

    document.querySelectorAll('.install-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            if (!deferredInstallPrompt) return;
            const promptEvent = deferredInstallPrompt;
            deferredInstallPrompt = null;
            updateInstallButtons();
            try {
                promptEvent.prompt();
                const { outcome } = await promptEvent.userChoice;
                if (outcome === 'accepted') {
                    showToast(tr('instalado'));
                }
            } catch (err) { /* ignora */ }
        });
    });
}

function updateInstallButtons() {
    const show = !!deferredInstallPrompt && !isStandalone() && !IS_EXTENSION;
    document.querySelectorAll('.install-btn').forEach(btn => btn.classList.toggle('hidden', !show));
}

function registerServiceWorker() {
    if (IS_EXTENSION) return;
    if (!('serviceWorker' in navigator)) return;
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
    navigator.serviceWorker.register('sw.js').catch(() => { /* offline silencioso */ });
}

/* =====================================================================
   INTEGRAÇÃO COM SHARE TARGET E BANNER PWA
   ===================================================================== */
function checkIncomingShare() {
    const params = new URLSearchParams(window.location.search);
    const sharedUrl = params.get('share_url') || params.get('share_text');
    const sharedTitle = params.get('share_title');

    if (sharedUrl) {
        const match = sharedUrl.match(/https?:\/\/[^\s]+/);
        const finalUrl = match ? match[0] : sharedUrl;
        window.history.replaceState({}, document.title, window.location.pathname);

        if (typeof openCreateModal === 'function') {
            openCreateModal({
                url: finalUrl,
                name: sharedTitle || ''
            });
        }
    }
}

function initPwaInstallBanner() {
    if (IS_EXTENSION || isStandalone()) return;

    const banner = $('pwa-install-banner');
    const installBtn = $('pwa-banner-install-btn');
    const closeBtn = $('pwa-banner-close-btn');

    if (!banner || !installBtn) return;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstallPrompt = e;

        setTimeout(() => {
            banner.classList.remove('hidden');
            setTimeout(() => banner.classList.add('show'), 50);
        }, 1500);
    });

    installBtn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;

        banner.classList.remove('show');
        setTimeout(() => banner.classList.add('hidden'), 400);

        try {
            deferredInstallPrompt.prompt();
            const { outcome } = await deferredInstallPrompt.userChoice;
            if (outcome === 'accepted') {
                showToast(tr('instalado') || 'Aplicativo instalado com sucesso!');
            }
        } catch (err) {}
        deferredInstallPrompt = null;
    });

    closeBtn?.addEventListener('click', () => {
        banner.classList.remove('show');
        setTimeout(() => banner.classList.add('hidden'), 400);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        checkIncomingShare();
        initPwaInstallBanner();
    });
} else {
    checkIncomingShare();
    initPwaInstallBanner();
}
