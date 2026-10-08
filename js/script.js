/**
 * ARQUITETURA MODULAR
 * 
 * O código foi refatorado e separado em módulos com responsabilidades únicas:
 * - js/data/areas.js: Lista de áreas de atuação, requisitos e empresas
 * - js/data/platforms.js: Plataformas de vagas e geradores de URL
 * - js/data/tips.js: Dicas para processo seletivo e entrevistas
 * - js/modules/state.js: Gerenciamento reativo de estado e query params na URL
 * - js/modules/renderers.js: Funções puras de renderização de componentes
 * - js/modules/events.js: Delegação e ouvintes de eventos
 * - js/app.js: Ponto de entrada da aplicação
 */

export * from './data/areas.js';
export * from './data/platforms.js';
export * from './data/tips.js';
export * from './modules/state.js';
