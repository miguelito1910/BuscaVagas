import { AREAS } from '../data/areas.js';

// Tenta carregar preferências salvas ou parâmetros da URL
function getInitialState() {
  const params = new URLSearchParams(window.location.search);
  const areaParam = params.get('area');
  const tipoParam = params.get('tipo');
  const tabParam = params.get('tab');

  const initialArea = AREAS.find(a => a.id === areaParam) || AREAS[0];
  const initialModalidade = ['todos', 'remoto', 'hibrido', 'presencial'].includes(tipoParam) 
    ? tipoParam 
    : 'todos';
  const initialTab = ['plataformas', 'empresas', 'requisitos', 'dicas'].includes(tabParam) 
    ? tabParam 
    : 'plataformas';

  return {
    activeArea: initialArea,
    activeModalidade: initialModalidade,
    activeTab: initialTab
  };
}

const state = getInitialState();
const listeners = [];

export function getState() {
  return state;
}

export function subscribe(listener) {
  listeners.push(listener);
  return () => {
    const idx = listeners.indexOf(listener);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}

function notify(changedProp) {
  updateUrlParams();
  listeners.forEach(fn => fn(state, changedProp));
}

function updateUrlParams() {
  const params = new URLSearchParams();
  if (state.activeArea.id !== AREAS[0].id) {
    params.set('area', state.activeArea.id);
  }
  if (state.activeModalidade !== 'todos') {
    params.set('tipo', state.activeModalidade);
  }
  if (state.activeTab !== 'plataformas') {
    params.set('tab', state.activeTab);
  }

  const newQuery = params.toString();
  const newUrl = newQuery 
    ? `${window.location.pathname}?${newQuery}` 
    : window.location.pathname;

  window.history.replaceState({}, '', newUrl);
}

export function setActiveAreaById(areaId) {
  const found = AREAS.find(a => a.id === areaId);
  if (!found || found.id === state.activeArea.id) return;
  state.activeArea = found;
  notify('area');
}

export function setActiveModalidade(modalidade) {
  if (state.activeModalidade === modalidade) return;
  state.activeModalidade = modalidade;
  notify('modalidade');
}

export function setActiveTab(tabId) {
  if (state.activeTab === tabId) return;
  state.activeTab = tabId;
  notify('tab');
}
