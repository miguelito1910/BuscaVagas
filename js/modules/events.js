import { setActiveAreaById, setActiveModalidade, setActiveTab } from './state.js';

export function setupEventListeners() {
  // 1. Seleção de Área via Delegação de Eventos no container do grid
  const areaGrid = document.getElementById('area-grid');
  if (areaGrid) {
    areaGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.area-card');
      if (card && card.dataset.areaId) {
        setActiveAreaById(card.dataset.areaId);
      }
    });

    areaGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.area-card');
        if (card && card.dataset.areaId) {
          e.preventDefault();
          setActiveAreaById(card.dataset.areaId);
        }
      }
    });
  }

  // 2. Filtro de Modalidade (Remoto, Presencial, Híbrido, Todas)
  const tipoSelect = document.getElementById('tipo');
  if (tipoSelect) {
    tipoSelect.addEventListener('change', (e) => {
      setActiveModalidade(e.target.value);
    });
  }

  // 3. Troca de Abas
  const tabsContainer = document.querySelector('.tabs');
  if (tabsContainer) {
    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (btn && btn.dataset.tab) {
        setActiveTab(btn.dataset.tab);
      }
    });
  }
}
