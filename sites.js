/**
 * PlayHub - Agregador Principal e Verificador de Versões
 * Localizado na Raiz do Projeto
 */

// Versão do sistema de sites em 5 números (0.8.0.01)
const PLAYHUB_SITES_VERSION = "0.8.0.01";

// Mapeamento dos arquivos dentro da pasta sites/
const SITES_FILES_MAP = {
  server: { path: 'sites/server.js', version: '0.8.0.01' },
  ai: { path: 'sites/ai.js', version: '0.8.0.01' },
  apps: { path: 'sites/apps.js', version: '0.8.0.01' },
  audio: { path: 'sites/audio.js', version: '0.8.0.01' },
  design: { path: 'sites/design.js', version: '0.8.0.01' },
  dev: { path: 'sites/dev.js', version: '0.8.0.01' },
  games: { path: 'sites/games.js', version: '0.8.0.02' },
  movies: { path: 'sites/movies-&-series.js', version: '0.8.0.01' },
  others: { path: 'sites/others.js', version: '0.8.0.01' },
  productivity: { path: 'sites/productivity.js', version: '0.8.0.01' },
  video: { path: 'sites/video.js', version: '0.8.0.01' }
};

// Função principal de unificação dos arrays declarados nas pastas
function getAllSites() {
  const all = [];
  if (typeof SERVER_SITES !== 'undefined' && Array.isArray(SERVER_SITES)) all.push(...SERVER_SITES);
  if (typeof AI_SITES !== 'undefined' && Array.isArray(AI_SITES)) all.push(...AI_SITES);
  if (typeof APPS_SITES !== 'undefined' && Array.isArray(APPS_SITES)) all.push(...APPS_SITES);
  if (typeof AUDIO_SITES !== 'undefined' && Array.isArray(AUDIO_SITES)) all.push(...AUDIO_SITES);
  if (typeof DESIGN_SITES !== 'undefined' && Array.isArray(DESIGN_SITES)) all.push(...DESIGN_SITES);
  if (typeof DEV_SITES !== 'undefined' && Array.isArray(DEV_SITES)) all.push(...DEV_SITES);
  if (typeof GAMES_SITES !== 'undefined' && Array.isArray(GAMES_SITES)) all.push(...GAMES_SITES);
  if (typeof FILMES_E_SERIES_SITES !== 'undefined' && Array.isArray(FILMES_E_SERIES_SITES)) all.push(...FILMES_E_SERIES_SITES);
  if (typeof OUTROS_SITES !== 'undefined' && Array.isArray(OUTROS_SITES)) all.push(...OUTROS_SITES);
  if (typeof PRODUTIVIDADE_SITES !== 'undefined' && Array.isArray(PRODUTIVIDADE_SITES)) all.push(...PRODUTIVIDADE_SITES);
  if (typeof VIDEO_SITES !== 'undefined' && Array.isArray(VIDEO_SITES)) all.push(...VIDEO_SITES);
  return all;
}

// Inicialização da variável global
var SITES = getAllSites();

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    SITES = getAllSites();
    console.log(`[PlayHub Sites] Sucesso: ${SITES.length} sites integrados na memória.`);
  });
}

function getSitesByCategory(category) {
  return getAllSites().filter(site => site.category && site.category.toLowerCase() === category.toLowerCase());
}

function searchSites(query) {
  const term = query.toLowerCase();
  return getAllSites().filter(site => 
    (site.name && site.name.toLowerCase().includes(term)) ||
    (site.description && site.description.toLowerCase().includes(term)) ||
    (site.tags && site.tags.some(tag => tag.toLowerCase().includes(term)))
  );
}

/* ---------- CHECAGEM AUTOMÁTICA DE NOVOS SITES NO GITHUB RAW ---------- */
async function checkSitesUpdatesFromGitHub() {
  const repoRawBase = "https://raw.githubusercontent.com/luis0s1/playhub/main/";
  const updatesFound = [];

  for (const [key, info] of Object.entries(SITES_FILES_MAP)) {
    try {
      const res = await fetch(`${repoRawBase}${info.path}`);
      if (res.ok) {
        const text = await res.text();
        const matchVer = text.match(/VERSION\s*=\s*["']([^"']+)["']/);
        const remoteVersion = matchVer ? matchVer[1] : null;

        if (remoteVersion && remoteVersion !== info.version) {
          updatesFound.push({
            file: info.path,
            localVersion: info.version,
            remoteVersion: remoteVersion,
            codeSnippet: text
          });
        }
      }
    } catch (e) {
      console.warn(`[PlayHub Updates] Não foi possível verificar ${info.path}`);
    }
  }

  if (updatesFound.length > 0) {
    showUpdateNotificationMenu(updatesFound);
  }
}

// Interface de notificação flutuante com opção de copiar o código novo
function showUpdateNotificationMenu(updates) {
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 999999;
    background: #1e293b; border: 1px solid #38bdf8; border-radius: 14px;
    padding: 16px; color: #fff; max-width: 380px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    font-family: system-ui, sans-serif; font-size: 13px;
  `;
  
  let html = `<strong style="color:#38bdf8; font-size:14px;">🔔 Atualização de Sites Encontrada!</strong><br>`;
  html += `<p style="margin: 6px 0; color:#94a3b8;">Arquivos com novos links disponíveis no GitHub:</p><ul style="padding-left:16px; margin:4px 0;">`;
  
  updates.forEach(u => {
    html += `<li><strong>${u.file}</strong> (${u.localVersion} ➔ <span style="color:#10b981">${u.remoteVersion}</span>)</li>`;
  });
  html += `</ul>`;
  html += `<div style="margin-top:10px; display:flex; gap:8px;">
    <button id="btn-copy-update-code" style="background:#38bdf8; color:#0f172a; border:none; padding:6px 12px; border-radius:6px; font-weight:bold; cursor:pointer;">Copiar Código</button>
    <button onclick="this.parentElement.parentElement.remove()" style="background:#334155; color:#fff; border:none; padding:6px 12px; border-radius:6px; cursor:pointer;">Fechar</button>
  </div>`;
  
  container.innerHTML = html;
  document.body.appendChild(container);

  document.getElementById('btn-copy-update-code').onclick = () => {
    const fullCode = updates.map(u => `// === Atualização: ${u.file} ===\n${u.codeSnippet}`).join('\n\n');
    navigator.clipboard.writeText(fullCode);
    alert('Código de atualização copiado para a área de transferência! Cole no final do arquivo correspondente.');
  };
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(checkSitesUpdatesFromGitHub, 3000);
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLAYHUB_SITES_VERSION, SITES_FILES_MAP, getAllSites, getSitesByCategory, searchSites };
}

 