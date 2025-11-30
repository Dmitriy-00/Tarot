const cardData = [
  {
    id: 'node-void',
    type: 'node',
    code: 'N0',
    title: 'Порог Пустоты',
    essence: 'Момент полного сброса. Точка перед шагом.',
    energy: 'стазис → импульс',
    hint: 'остановка дыхания',
    signal: 'Ритуалы завершены, система ждёт импульса.',
    action: 'Признай отсутствие формы и обозначь новую траекторию.',
  },
  {
    id: 'node-threshold',
    type: 'node',
    code: 'N3',
    title: 'Разлом',
    essence: 'Пространство ломается, путь делится на ветви.',
    energy: 'фазовый сдвиг',
    hint: 'трещина света',
    signal: 'Старые рамки отстают, появляются новые входы.',
    action: 'Выбери ветвь, фиксируй её через действие/обет.',
  },
  {
    id: 'figure-witness',
    type: 'figure',
    code: 'F4',
    title: 'Свидетель',
    essence: 'Фигура наблюдателя, собирающая факты.',
    energy: 'холодный анализ',
    hint: 'пустые глаза',
    signal: 'Нужно зафиксировать реальность без оценок.',
    action: 'Отступи на дистанцию и описывай без метафор.',
  },
  {
    id: 'figure-operator',
    type: 'figure',
    code: 'F7',
    title: 'Оператор',
    essence: 'Фигура, управляющая процессом из тени.',
    energy: 'волевой контроль',
    hint: 'руки в перчатках',
    signal: 'Требуется скрытое вмешательство и тонкая настройка.',
    action: 'Собери узлы, выстрой протокол, не раскрывая карты.',
  },
  {
    id: 'operation-sever',
    type: 'operation',
    code: 'O5',
    title: 'Разрыв',
    essence: 'Отсечь лишнее, разорвать связку, снять паразита.',
    energy: 'резкий импульс',
    hint: 'разомкнутый контур',
    signal: 'Привычная сцепка блокирует движение.',
    action: 'Реши, что оставить, и отрежь остальное одним жестом.',
  },
  {
    id: 'operation-vector',
    type: 'operation',
    code: 'O2',
    title: 'Векторизация',
    essence: 'Сжать поток в направленный луч.',
    energy: 'ускорение',
    hint: 'стрела света',
    signal: 'Энергия рассеяна, нужен выбранный канал.',
    action: 'Обозначь цель, собери фокус и выстрели.',
  },
  {
    id: 'scene-bridge',
    type: 'scene',
    code: 'S1',
    title: 'Лиминальный мост',
    essence: 'Переход между двумя несоединимыми пространствами.',
    energy: 'хрупкая опора',
    hint: 'тонкая дуга',
    signal: 'Есть способ перейти, но он нестабилен.',
    action: 'Двигайся медленно, фиксируй шаги, не смотри вниз.',
  },
  {
    id: 'scene-echo',
    type: 'scene',
    code: 'S4',
    title: 'Камера Эха',
    essence: 'Комната, где мысли отражаются и усиливаются.',
    energy: 'резонанс',
    hint: 'пульсирующие стены',
    signal: 'Идеи повторяются, пока не изменят форму.',
    action: 'Лови повторяющиеся мотивы, выделяй главный и усиливай.',
  },
  {
    id: 'node-surge',
    type: 'node',
    code: 'N6',
    title: 'Всплеск',
    essence: 'Резкое появление силы, импульс к прорыву.',
    energy: 'скачок',
    hint: 'вспышка плазмы',
    signal: 'Ресурс пришёл внезапно и ненадолго.',
    action: 'Используй окно 12–24 часа, зафиксируй контур.',
  },
  {
    id: 'figure-shadow',
    type: 'figure',
    code: 'F1',
    title: 'Тень',
    essence: 'Скрытая мотивация, невидимый игрок.',
    energy: 'скрытый жар',
    hint: 'силуэт за стеклом',
    signal: 'Эмоция управляет решением из-под слоя логики.',
    action: 'Назови реальную мотивацию и дай ей роль, а не власть.',
  },
  {
    id: 'operation-weave',
    type: 'operation',
    code: 'O7',
    title: 'Сплетение',
    essence: 'Связать узлы в сеть, переназначить связи.',
    energy: 'комбинаторика',
    hint: 'узлы и нити',
    signal: 'Разрозненные элементы требуют новой конфигурации.',
    action: 'Собери три опоры и протяни между ними рабочие мосты.',
  },
  {
    id: 'scene-labyrinth',
    type: 'scene',
    code: 'S7',
    title: 'Лабиринт',
    essence: 'Коридоры и сводчатые пустоты, ведущие к ядру.',
    energy: 'поиск',
    hint: 'эхо шагов',
    signal: 'Ответ спрятан глубже, первый ход — ложный.',
    action: 'Делай метки на пути, меняй высоту взгляда каждые 3 шага.',
  },
];

const spreads = [
  {
    id: 'threshold',
    title: 'Порог Перехода',
    description: 'Вход, действие, исход. Классический маршрут в три шага.',
    path: ['node', 'operation', 'scene'],
  },
  {
    id: 'resonance',
    title: 'Резонанс фигуры',
    description: 'Как фигура влияет на маршрут: роль → действие → сцена.',
    path: ['figure', 'operation', 'scene'],
  },
  {
    id: 'rupture',
    title: 'Разрыв и сборка',
    description: 'Где рвём цепь и как собираем новую.',
    path: ['node', 'operation', 'node', 'figure'],
  },
  {
    id: 'labyrinth',
    title: 'Маршрут Лабиринта',
    description: 'Как пройти к ядру: вход → заблуждение → подсказка → ядро.',
    path: ['scene', 'figure', 'operation', 'node'],
  },
];

const layoutTitle = document.getElementById('layoutTitle');
const layoutDescription = document.getElementById('layoutDescription');
const layoutCanvas = document.getElementById('layoutCanvas');
const spreadList = document.getElementById('spreadList');
const cardGrid = document.getElementById('cardGrid');
const typeFilter = document.getElementById('typeFilter');
const detailPanel = document.getElementById('detailPanel');
const detailTitle = document.getElementById('detailTitle');
const detailEssence = document.getElementById('detailEssence');
const detailSignal = document.getElementById('detailSignal');
const detailAction = document.getElementById('detailAction');
const detailType = document.getElementById('detailType');
const detailEnergy = document.getElementById('detailEnergy');
const closePanel = document.getElementById('closePanel');
const startReading = document.getElementById('startReading');
const reshuffle = document.getElementById('reshuffle');
const shufflePortal = document.getElementById('shufflePortal');
const deepDive = document.getElementById('deepDive');
const exportBtn = document.getElementById('export');

let currentSpread = spreads[0];
let currentLayout = [];
let pinnedCard = null;

const colors = {
  node: '#82d0ff',
  figure: '#c09cff',
  operation: '#7ef8c7',
  scene: '#ffa0d2',
};

function drawSpreads() {
  spreadList.innerHTML = '';
  spreads.forEach((spread) => {
    const div = document.createElement('div');
    div.className = 'spread';
    div.innerHTML = `
      <div class="meta">
        <span class="pill">${spread.path.length} шага</span>
        <span class="pill">${spread.path.join(' → ')}</span>
      </div>
      <h3>${spread.title}</h3>
      <p class="lede">${spread.description}</p>
      <div class="map">${spread.path
        .map((type) => `<div class="dot" style="color:${colors[type]}">${type.charAt(0).toUpperCase()}</div>`)
        .join('')}</div>
      <button class="ghost" data-spread="${spread.id}">Применить</button>
    `;
    spreadList.appendChild(div);
  });
}

function getRandomCard(type) {
  const filtered = cardData.filter((card) => card.type === type);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function buildLayout(spread) {
  const layout = spread.path.map((type, index) => {
    if (index === 0 && pinnedCard && pinnedCard.type === type) return pinnedCard;
    return getRandomCard(type);
  });
  currentLayout = layout;
  renderLayout();
}

function renderLayout() {
  layoutCanvas.innerHTML = '';
  const pathLine = document.createElement('div');
  pathLine.className = 'path-line';
  layoutCanvas.appendChild(pathLine);

  const path = document.createElement('div');
  path.className = 'path-cards';

  currentLayout.forEach((card) => {
    const node = document.createElement('div');
    node.className = 'path-node';
    node.appendChild(buildCard(card));
    const label = document.createElement('span');
    label.className = 'pill';
    label.style.color = colors[card.type];
    label.textContent = card.title;
    node.appendChild(label);
    path.appendChild(node);
  });

  layoutCanvas.appendChild(path);
}

function buildCard(card) {
  const template = document.getElementById('cardTemplate');
  const clone = template.content.cloneNode(true);
  const cardEl = clone.querySelector('.card');
  cardEl.dataset.type = card.type;
  const pill = clone.querySelector('.pill');
  const code = clone.querySelector('.code');
  const title = clone.querySelector('h3');
  const essence = clone.querySelector('.essence');
  const energy = clone.querySelector('.energy');
  const hint = clone.querySelector('.hint');

  pill.textContent = card.type;
  pill.style.color = colors[card.type];
  code.textContent = card.code;
  title.textContent = card.title;
  essence.textContent = card.essence;
  energy.textContent = card.energy;
  hint.textContent = card.hint;

  cardEl.style.setProperty('--accent', colors[card.type]);
  cardEl.addEventListener('click', () => openDetail(card));
  return clone;
}

function drawCardGrid(type = 'all') {
  cardGrid.innerHTML = '';
  const filtered = type === 'all' ? cardData : cardData.filter((card) => card.type === type);
  filtered.forEach((card) => {
    cardGrid.appendChild(buildCard(card));
  });
}

function setFilter(type) {
  document.querySelectorAll('#typeFilter button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });
  drawCardGrid(type);
}

function openDetail(card) {
  detailTitle.textContent = `${card.title}`;
  detailEssence.textContent = card.essence;
  detailSignal.textContent = card.signal;
  detailAction.textContent = card.action;
  detailType.textContent = card.type;
  detailEnergy.textContent = card.energy;
  detailType.style.color = colors[card.type];
  detailPanel.classList.add('active');
  pinnedCard = card;
}

function closeDetail() {
  detailPanel.classList.remove('active');
}

function exportLayout() {
  const data = {
    spread: currentSpread,
    layout: currentLayout,
    pinned: pinnedCard,
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'liminal-layout.json';
  a.click();
  URL.revokeObjectURL(url);
}

function init() {
  drawSpreads();
  drawCardGrid();
  buildLayout(currentSpread);

  spreadList.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-spread]');
    if (!button) return;
    const id = button.dataset.spread;
    currentSpread = spreads.find((s) => s.id === id) || spreads[0];
    layoutTitle.textContent = `Маршрут: ${currentSpread.title}`;
    layoutDescription.textContent = currentSpread.description;
    buildLayout(currentSpread);
  });

  typeFilter.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    setFilter(e.target.dataset.type);
  });

  startReading.addEventListener('click', () => buildLayout(currentSpread));
  reshuffle.addEventListener('click', () => buildLayout(currentSpread));
  shufflePortal.addEventListener('click', () => buildLayout(currentSpread));
  deepDive.addEventListener('click', () => {
    const random = cardData[Math.floor(Math.random() * cardData.length)];
    openDetail(random);
  });
  exportBtn.addEventListener('click', exportLayout);
  closePanel.addEventListener('click', closeDetail);
  detailPanel.addEventListener('click', (e) => {
    if (e.target === detailPanel) closeDetail();
  });
}

init();
