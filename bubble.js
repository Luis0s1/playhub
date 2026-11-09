/* =====================================================================
   PlayHub - Modo Bolha / Menu de Atalho Flutuante Avançado
   ===================================================================== */
(function () {
  'use strict';

  if (new URLSearchParams(window.location.search).get('popup') === '1') return;

  const BUBBLE_KEY = 'playhub_bubble_custom';

  function getBubbleConfig() {
    try {
      const raw = localStorage.getItem(BUBBLE_KEY);
      return raw ? JSON.parse(raw) : { type: 'emoji', value: '⚡', fixed: false, posX: null, posY: null };
    } catch (e) {
      return { type: 'emoji', value: '⚡', fixed: false, posX: null, posY: null };
    }
  }

  function saveBubbleConfig(cfg) {
    try { localStorage.setItem(BUBBLE_KEY, JSON.stringify(cfg)); } catch (e) {}
  }

  function isBubbleEnabled() {
    try {
      const prefs = JSON.parse(localStorage.getItem('playhub_prefs'));
      return prefs && !!prefs.bubble;
    } catch (e) {
      return false;
    }
  }

  function removeBubble() {
    document.getElementById('playhub-bubble')?.remove();
    document.getElementById('bubble-action-menu')?.remove();
  }

  function createBubble() {
    if (!isBubbleEnabled()) {
      removeBubble();
      return;
    }

    if (document.getElementById('playhub-bubble')) return;

    const config = getBubbleConfig();

    const bubble = document.createElement('div');
    bubble.id = 'playhub-bubble';
    bubble.title = 'Clique para atalhos | Segure para opções';

    renderBubbleContent(bubble, config);

    // Posicionamento que respeita limites
    const bottomNavHeight = document.body.classList.contains('is-mobile') ? 80 : 20;
    const initialBottom = config.posY !== null ? config.posY : bottomNavHeight + 20;
    const initialRight = config.posX !== null ? config.posX : 20;

    Object.assign(bubble.style, {
      position: 'fixed',
      bottom: initialBottom + 'px',
      right: initialRight + 'px',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      background: 'var(--accent-grad, linear-gradient(135deg, #6366f1, #a855f7))',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '26px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
      cursor: config.fixed ? 'pointer' : 'grab',
      zIndex: '99999',
      userSelect: 'none',
      touchAction: 'none',
      overflow: 'hidden',
      transition: 'transform 0.18s ease, box-shadow 0.18s ease'
    });

    let pressTimer = null;
    let isDragging = false;
    let hasMoved = false;
    let startX, startY, initialLeft, initialTop;

    // --- LÓGICA DE ARRASTE E PRESSIONAR ---
    function onStart(e) {
      hasMoved = false;
      const point = e.touches ? e.touches[0] : e;
      startX = point.clientX;
      startY = point.clientY;

      const rect = bubble.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;

      // Evento de Segurar (Pressing) para abrir menu de opções
      pressTimer = setTimeout(() => {
        if (!hasMoved) {
          openBubbleContextMenu(rect.left + rect.width / 2, rect.top);
        }
      }, 600);

      if (!config.fixed) {
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchmove', onMove, { passive: false });
        window.addEventListener('touchend', onEnd);
      }
    }

    function onMove(e) {
      const point = e.touches ? e.touches[0] : e;
      const deltaX = point.clientX - startX;
      const deltaY = point.clientY - startY;

      if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
        hasMoved = true;
        clearTimeout(pressTimer);
        isDragging = true;
        bubble.style.cursor = 'grabbing';
      }

      if (isDragging && !config.fixed) {
        let newLeft = initialLeft + deltaX;
        let newTop = initialTop + deltaY;

        // Limites da tela (Respeitando Header e Footer)
        const headerLimit = 70;
        const footerLimit = window.innerHeight - (document.body.classList.contains('is-mobile') ? 90 : 30);

        newLeft = Math.max(10, Math.min(newLeft, window.innerWidth - 66));
        newTop = Math.max(headerLimit, Math.min(newTop, footerLimit));

        bubble.style.left = newLeft + 'px';
        bubble.style.top = newTop + 'px';
        bubble.style.right = 'auto';
        bubble.style.bottom = 'auto';
      }
    }

    function onEnd() {
      clearTimeout(pressTimer);
      if (isDragging) {
        isDragging = false;
        bubble.style.cursor = config.fixed ? 'pointer' : 'grab';
        
        // Salva posição
        const rect = bubble.getBoundingClientRect();
        config.posX = window.innerWidth - rect.right;
        config.posY = window.innerHeight - rect.bottom;
        saveBubbleConfig(config);
      }
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    }

    bubble.addEventListener('mousedown', onStart);
    bubble.addEventListener('touchstart', onStart, { passive: true });

    bubble.addEventListener('click', (e) => {
      clearTimeout(pressTimer);
      if (hasMoved) return;
      
      // Clique Simples: Abre Lançador Rápido / Menu de Atalho
      if (typeof openQuickLauncher === 'function') {
        openQuickLauncher();
      } else {
        window.dispatchEvent(new CustomEvent('playhub:bubble-click'));
      }
    });

    document.body.appendChild(bubble);
  }

  function renderBubbleContent(bubbleEl, cfg) {
    bubbleEl.innerHTML = '';
    if (cfg.type === 'image' && cfg.value) {
      const img = document.createElement('img');
      img.src = cfg.value;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;';
      bubbleEl.appendChild(img);
    } else if (cfg.type === 'text') {
      const span = document.createElement('span');
      span.textContent = (cfg.value || 'P').slice(0, 3);
      span.style.cssText = 'font-weight:800;font-size:16px;text-transform:uppercase;';
      bubbleEl.appendChild(span);
    } else {
      bubbleEl.textContent = cfg.value || '⚡';
    }
  }

  // --- MENU DE OPÇÕES DA BOLHA (AO SEGURAR) ---
  function openBubbleContextMenu(x, y) {
    document.getElementById('bubble-action-menu')?.remove();

    const cfg = getBubbleConfig();
    const menu = document.createElement('div');
    menu.id = 'bubble-action-menu';
    menu.className = 'glass';

    Object.assign(menu.style, {
      position: 'fixed',
      left: Math.max(10, Math.min(x - 110, window.innerWidth - 230)) + 'px',
      top: Math.max(10, Math.min(y - 180, window.innerHeight - 220)) + 'px',
      width: '220px',
      padding: '12px',
      borderRadius: '16px',
      zIndex: '100000',
      boxShadow: '0 12px 35px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      background: 'var(--surface-solid, #1e293b)',
      color: 'var(--text-primary, #fff)'
    });

    menu.innerHTML = `
      <strong style="font-size:13px;color:var(--accent-color, #38bdf8);text-align:center;">⚙️ Opções da Bolha</strong>
      <button id="btn-bubble-fix" class="btn-action" style="font-size:12px;padding:6px;">${cfg.fixed ? '🔓 Desfixar Posição' : '🔒 Fixar no Local'}</button>
      <button id="btn-bubble-icon" class="btn-action" style="font-size:12px;padding:6px;">🎨 Alterar Foto / Ícone</button>
      <button id="btn-bubble-add" class="btn-action" style="font-size:12px;padding:6px;">➕ Adicionar Atalho Rápido</button>
      <button id="btn-bubble-settings" class="btn-action" style="font-size:12px;padding:6px;">⚙️ Abrir Ajustes</button>
      <button id="btn-bubble-disable" class="btn-action danger" style="font-size:12px;padding:6px;color:var(--danger, #ef4444);">🚫 Desativar Bolha</button>
    `;

    document.body.appendChild(menu);

    const closeMenu = () => menu.remove();

    menu.querySelector('#btn-bubble-fix').onclick = () => {
      cfg.fixed = !cfg.fixed;
      saveBubbleConfig(cfg);
      removeBubble();
      createBubble();
      closeMenu();
    };

    menu.querySelector('#btn-bubble-icon').onclick = () => {
      closeMenu();
      openBubbleCustomizer();
    };

    menu.querySelector('#btn-bubble-add').onclick = () => {
      closeMenu();
      if (typeof openCreateModal === 'function') openCreateModal();
    };

    menu.querySelector('#btn-bubble-settings').onclick = () => {
      closeMenu();
      if (typeof openSettings === 'function') openSettings();
    };

    menu.querySelector('#btn-bubble-disable').onclick = () => {
      closeMenu();
      try {
        const prefs = JSON.parse(localStorage.getItem('playhub_prefs')) || {};
        prefs.bubble = false;
        localStorage.setItem('playhub_prefs', JSON.stringify(prefs));
        window.dispatchEvent(new CustomEvent('playhub:prefs-changed'));
      } catch (e) {}
    };

    setTimeout(() => {
      window.addEventListener('click', function hide(e) {
        if (!menu.contains(e.target)) {
          closeMenu();
          window.removeEventListener('click', hide);
        }
      });
    }, 100);
  }

  // --- MODAL DE CUSTOMIZAÇÃO DO ÍCONE DA BOLHA ---
  function openBubbleCustomizer() {
    const cfg = getBubbleConfig();
    const val = prompt("Escolha o ícone da bolha:\n- Digite um Emoji (ex: 🚀, 🎮, ⚡)\n- Digite um Texto curto (ex: HUB)\n- Cole o link de uma imagem/SVG (https://...)", cfg.value);

    if (val !== null && val.trim() !== '') {
      const cleanVal = val.trim();
      if (/^https?:\/\//i.test(cleanVal) || /^data:image/i.test(cleanVal)) {
        cfg.type = 'image';
        cfg.value = cleanVal;
      } else if (cleanVal.length > 2 && !/\s/.test(cleanVal)) {
        cfg.type = 'text';
        cfg.value = cleanVal;
      } else {
        cfg.type = 'emoji';
        cfg.value = cleanVal;
      }
      saveBubbleConfig(cfg);
      removeBubble();
      createBubble();
    }
  }

  window.addEventListener('playhub:prefs-changed', () => {
    if (isBubbleEnabled()) createBubble();
    else removeBubble();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBubble);
  } else {
    createBubble();
  }
})();
