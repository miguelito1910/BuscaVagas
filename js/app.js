import { AREAS } from './data/areas.js';
import { getState, subscribe } from './modules/state.js';
import {
  renderAreaGrid,
  updateActiveAreaHighlight,
  updateAreaInfo,
  renderPlatformCards,
  renderSidebarLinks,
  renderCompanies,
  renderRequisitos,
  renderDicas,
  renderActiveTab
} from './modules/renderers.js';
import { setupEventListeners } from './modules/events.js';

function renderCurrentState(state, changedProp) {
  const { activeArea, activeModalidade, activeTab } = state;

  if (!changedProp || changedProp === 'area') {
    updateActiveAreaHighlight(activeArea.id);
    updateAreaInfo(activeArea, activeModalidade);
    renderPlatformCards(activeArea.query, activeModalidade);
    renderSidebarLinks(activeArea.query, activeModalidade);
    renderCompanies(activeArea.companies);
    renderRequisitos(activeArea.requisitos);
  } else if (changedProp === 'modalidade') {
    updateAreaInfo(activeArea, activeModalidade);
    renderPlatformCards(activeArea.query, activeModalidade);
    renderSidebarLinks(activeArea.query, activeModalidade);
  } else if (changedProp === 'tab') {
    renderActiveTab(activeTab);
  }
}

function init() {
  const initialState = getState();

  // 1. Renderiza estruturas estáticas ou base
  renderAreaGrid(AREAS, initialState.activeArea.id);
  renderDicas();

  // 2. Renderiza estado atual (área, modalidade, tab)
  renderCurrentState(initialState);
  renderActiveTab(initialState.activeTab);

  // 3. Registra ouvinte para mudanças de estado
  subscribe((newState, changedProp) => {
    renderCurrentState(newState, changedProp);
  });

  // 4. Configura eventos interativos do DOM
  setupEventListeners();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
