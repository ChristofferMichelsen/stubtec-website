const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const menuLabel = document.querySelector('[data-menu-label]');
const nav = document.querySelector('.site-nav');
const menuMedia = window.matchMedia('(max-width: 900px)');

function setHeader() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 24);
}

function setMenu(open) {
  if (!menuButton || !nav) return;
  const next = Boolean(open && menuMedia.matches);
  menuButton.setAttribute('aria-expanded', String(next));
  nav.classList.toggle('open', next);
  document.body.classList.toggle('menu-open', next);
  if (menuLabel) menuLabel.textContent = next ? 'Luk menu' : 'Åbn menu';
}

setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

if (menuButton && nav) {
  menuButton.addEventListener('click', function () {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  Array.from(nav.querySelectorAll('a')).forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape' || menuButton.getAttribute('aria-expanded') !== 'true') return;
    setMenu(false);
    menuButton.focus();
  });

  document.addEventListener('click', function (event) {
    if (menuButton.getAttribute('aria-expanded') !== 'true') return;
    if (header && !header.contains(event.target)) setMenu(false);
  });
}

function handleMenuMedia(event) {
  if (!event.matches) setMenu(false);
}

if (typeof menuMedia.addEventListener === 'function') {
  menuMedia.addEventListener('change', handleMenuMedia);
} else if (typeof menuMedia.addListener === 'function') {
  menuMedia.addListener(handleMenuMedia);
}

const lensData = {
  management: {
    kicker: 'LEDELSE',
    title: 'Placér release-autoriteten',
    copy: 'Ledelsesbeslutningen er, hvilket system der må erklære en produktkonfiguration frigivet, og hvem der ejer konsekvensen.',
    items: ['Forretningsejer for frigivet konfiguration', 'Bevidst valg mellem migration og arkiv', 'Gates fra prototype til produktion'],
  },
  engineering: {
    kicker: 'ENGINEERING',
    title: 'Adskil CAD-revision fra part-release',
    copy: 'PDM må eje CAD-revisionen, mens PLM ejer partens lifecycle og den frigivne konfiguration. Synkroniseringen skal respektere begge modeller.',
    items: ['Parent kan ikke frigives før child', 'Revise i PDM åbner relevant PLM-state', 'Approval write-back uden ny CAD-revision'],
  },
  it: {
    kicker: 'IT & ARKITEKTUR',
    title: 'Definér identitet og fejlsemantik',
    copy: 'Integrationen kræver en stabil identitetsnøgle, idempotente operationer og eksplicit recovery. Ellers bliver edge cases til permanent driftsgæld.',
    items: ['PDM File ID koblet deterministisk til PLM Part', 'Queue, retries og konfliktregler', 'Monitorering, datakvalitet og recovery'],
  },
};

const tabs = Array.from(document.querySelectorAll('[data-lens]'));
const lensPanel = document.querySelector('.lens-content');
const title = document.querySelector('.lens-title');
const kicker = document.querySelector('.lens-kicker');
const copy = document.querySelector('.lens-copy');
const list = document.querySelector('.lens-list');
const layers = Array.from(document.querySelectorAll('[data-highlight]'));

function selectLens(name, moveFocus) {
  const data = lensData[name];
  if (!data || !title || !kicker || !copy || !list) return;
  let activeTab = null;

  tabs.forEach(function (tab) {
    const selected = tab.dataset.lens === name;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected) activeTab = tab;
  });

  if (lensPanel && activeTab) lensPanel.setAttribute('aria-labelledby', activeTab.id);
  kicker.textContent = data.kicker;
  title.textContent = data.title;
  copy.textContent = data.copy;
  list.textContent = '';
  data.items.forEach(function (item) {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
  layers.forEach(function (layer) {
    const highlights = (layer.dataset.highlight || '').split(' ');
    layer.classList.toggle('active', highlights.indexOf(name) !== -1);
  });

  if (moveFocus && activeTab) activeTab.focus();
}

tabs.forEach(function (tab, index) {
  tab.addEventListener('click', function () { selectLens(tab.dataset.lens, false); });
  tab.addEventListener('keydown', function (event) {
    if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].indexOf(event.key) === -1) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    selectLens(tabs[nextIndex].dataset.lens, true);
  });
});
selectLens('management', false);

const diagramTabs = Array.from(document.querySelectorAll('[data-diagram-target]'));
const diagramPanels = Array.from(document.querySelectorAll('.diagram-panel'));

function selectDiagram(panelId, moveFocus) {
  let activeTab = null;
  diagramTabs.forEach(function (tab) {
    const selected = tab.dataset.diagramTarget === panelId;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected) activeTab = tab;
  });
  diagramPanels.forEach(function (panel) { panel.hidden = panel.id !== panelId; });
  if (moveFocus && activeTab) activeTab.focus();
}

diagramTabs.forEach(function (tab, index) {
  tab.addEventListener('click', function () { selectDiagram(tab.dataset.diagramTarget, false); });
  tab.addEventListener('keydown', function (event) {
    if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].indexOf(event.key) === -1) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % diagramTabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + diagramTabs.length) % diagramTabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = diagramTabs.length - 1;
    selectDiagram(diagramTabs[nextIndex].dataset.diagramTarget, true);
  });
});
if (diagramTabs.length) selectDiagram(diagramTabs[0].dataset.diagramTarget, false);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = Array.from(document.querySelectorAll('.reveal'));

if (!reduceMotion && 'IntersectionObserver' in window) {
  try {
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px' });
    revealElements.forEach(function (element) { observer.observe(element); });
  } catch (error) {
    document.documentElement.classList.remove('motion-ready');
  }
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

window.addEventListener('beforeprint', function () {
  Array.from(document.querySelectorAll('img[loading="lazy"]')).forEach(function (image) {
    image.loading = 'eager';
  });
});
