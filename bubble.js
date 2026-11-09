/* =====================================================================
   PlayHub - Modo Bolha (Botão Flutuante / Quick Launcher)
   ===================================================================== */
(function () {
  'use strict';

  // Não executa se for dentro da janela popup da extensão
  if (new URLSearchParams(window.location.search).get('popup') === '1') return;

  function createBubble() {
    if (document.getElementById('playhub-bubble')) return;

    const bubble = document.createElement('div');
    bubble.id = 'playhub-bubble';
    bubble.title = 'Abrir PlayHub';
    bubble.innerHTML = '⚡';

    // Estilos inline para garantir funcionamento imediato
    Object.assign(bubble.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      boxShadow: '0 8px 20px rgba(99, 102, 241, 0.5)',
      cursor: 'pointer',
      zIndex: '99999',
      transition: 'transform 0.2s ease, opacity 0.2s ease',
      userSelect: 'none'
    });

    bubble.addEventListener('mouseenter', () => {
      bubble.style.transform = 'scale(1.1)';
    });

    bubble.addEventListener('mouseleave', () => {
      bubble.style.transform = 'scale(1)';
    });

    bubble.addEventListener('click', () => {
      // Dispara o evento capturado pelo script.js para abrir o Quick Launcher
      window.dispatchEvent(new CustomEvent('playhub:bubble-click'));
    });

    document.body.appendChild(bubble);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBubble);
  } else {
    createBubble();
  }
})();

 