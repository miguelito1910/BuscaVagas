import { DICAS } from '../data/tips.js';
import { PLATFORMS } from '../data/platforms.js';

export function renderAreaGrid(areas, activeAreaId) {
  const container = document.getElementById('area-grid');
  if (!container) return;

  container.innerHTML = areas.map(a => {
    const isActive = a.id === activeAreaId ? ' active' : '';
    return `
      <div class="area-card${isActive}" id="area-${a.id}" data-area-id="${a.id}" role="button" tabindex="0">
        <div class="area-card-icon" style="background:${a.iconBg}">
          <i class="ti ${a.icon}" style="color:${a.iconColor}" aria-hidden="true"></i>
        </div>
        <div>
          <p class="area-card-name">${a.name}</p>
          <p class="area-card-desc">${a.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

export function updateActiveAreaHighlight(activeAreaId) {
  document.querySelectorAll('.area-card').forEach(card => {
    if (card.dataset.areaId === activeAreaId) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

export function updateAreaInfo(area, modalidade) {
  const chipLabel = document.getElementById('chip-label');
  if (chipLabel) chipLabel.textContent = area.name;

  const chipIcon = document.getElementById('area-chip')?.querySelector('i');
  if (chipIcon) {
    chipIcon.className = 'ti ' + area.icon;
    chipIcon.setAttribute('aria-hidden', 'true');
  }

  const termoEl = document.getElementById('termo-exibido');
  if (termoEl) termoEl.textContent = area.query;

  const reqAreaLabel = document.getElementById('req-area-label');
  if (reqAreaLabel) reqAreaLabel.textContent = area.name;

  const tipoSelect = document.getElementById('tipo');
  if (tipoSelect && tipoSelect.value !== modalidade) {
    tipoSelect.value = modalidade;
  }
}

export function renderPlatformCards(query, modalidade) {
  const container = document.getElementById('platform-cards');
  if (!container) return;

  container.innerHTML = PLATFORMS.map(p => `
    <a href="${p.build(query, modalidade)}" target="_blank" rel="noopener noreferrer" class="job-card" style="display:flex;align-items:center;gap:12px;text-decoration:none;margin-bottom:.625rem">
      <div style="width:40px;height:40px;border-radius:10px;background:${p.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="ti ${p.icon}" style="color:${p.color};font-size:18px" aria-hidden="true"></i>
      </div>
      <div style="flex:1">
        <p class="job-title">${p.name}</p>
        <p class="job-company" style="margin-bottom:0">${p.sub}</p>
      </div>
      <span class="badge badge-blue" style="white-space:nowrap">Abrir <i class="ti ti-arrow-right" style="font-size:11px" aria-hidden="true"></i></span>
    </a>
  `).join('');
}

export function renderSidebarLinks(query, modalidade) {
  const container = document.getElementById('sidebar-links');
  if (!container) return;

  container.innerHTML = PLATFORMS.slice(0, 5).map(p => `
    <a href="${p.build(query, modalidade)}" target="_blank" rel="noopener noreferrer" class="platform-btn">
      <div class="platform-icon" style="background:${p.bg}">
        <i class="ti ${p.icon}" style="color:${p.color}" aria-hidden="true"></i>
      </div>
      <div style="flex:1">
        <p class="platform-name">${p.name}</p>
      </div>
      <i class="ti ti-external-link" style="font-size:13px;color:var(--text3)" aria-hidden="true"></i>
    </a>
  `).join('');
}

export function renderCompanies(companies) {
  const container = document.getElementById('company-grid');
  if (!container || !companies) return;

  container.innerHTML = companies.map(c => `
    <div class="company-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:6px;margin-bottom:6px">
        <p class="company-name">${c.name}</p>
        <span class="badge ${c.badge}" style="white-space:nowrap;flex-shrink:0">${c.seg}</span>
      </div>
      <div style="margin-bottom:10px">
        ${c.req.map(r => `<span class="req-tag">${r}</span>`).join('')}
      </div>
      <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="company-link">
        Ver carreiras <i class="ti ti-arrow-right" style="font-size:12px" aria-hidden="true"></i>
      </a>
    </div>
  `).join('');
}

export function renderRequisitos(requisitos) {
  const container = document.getElementById('requisitos-list');
  if (!container || !requisitos) return;

  container.innerHTML = requisitos.map(r => `
    <div class="job-card" style="margin-bottom:.625rem">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <p class="job-title" style="margin:0">${r.label}</p>
        ${r.obrig ? '<span class="badge badge-coral">obrigatório</span>' : '<span class="badge badge-gray">diferencial</span>'}
      </div>
      <div>${r.items.map(i => `<span class="req-tag">${i}</span>`).join('')}</div>
    </div>
  `).join('');
}

export function renderDicas() {
  const container = document.getElementById('dicas-list');
  if (!container) return;

  container.innerHTML = DICAS.map(d => `
    <div class="job-card" style="margin-bottom:.625rem">
      <div style="display:flex;align-items:flex-start;gap:12px">
        <div style="width:36px;height:36px;background:rgba(47,129,247,.1);border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <i class="ti ${d.icon}" style="color:var(--accent2);font-size:17px" aria-hidden="true"></i>
        </div>
        <div>
          <p class="job-title" style="margin-bottom:4px">${d.title}</p>
          <p style="font-size:13px;color:var(--text2);line-height:1.6">${d.desc}</p>
        </div>
      </div>
    </div>
  `).join('');
}

export function renderActiveTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabId}`);
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
}
