import './icon.css';

/**
 * Figma "Design-System-2.0--AI-Native-" Icon ページより。
 * node-id: 238:7678
 *
 * テキストと比べて小さな領域で、かつ直感的に情報を伝達できる、絵や記号。
 * アイコン一覧をカタログ形式で表示するドキュメンテーションコンポーネント。
 *
 * Semantic Color 使用箇所:
 *  - ヘッダー背景     : Blue/500 (#318BF7)
 *  - ヘッダータイトル : text/paper (#FFFFFF)
 *  - セクション見出し : text/accent-dark (#1E74DB)
 *  - 本文テキスト     : text/ink (#222222)
 *  - カード背景       : background/content (#D6D9DB)
 *  - アイコン色       : icon/ink (#222222)
 */

// ─── SVG パス定義（stroke="currentColor" stroke-based, viewBox="0 0 24 24"）───

const ICON_DEFS = {
  // 矢印
  arrow_up:          'M12 19V5M5 12l7-7 7 7',
  arrow_down:        'M12 5v14M5 12l7 7 7-7',
  arrow_left:        'M19 12H5M12 5l-7 7 7 7',
  arrow_right:       'M5 12h14M12 5l7 7-7 7',
  arrow_down_circle: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM12 8v8M8 12l4 4 4-4',
  caret_up:          'M18 15l-6-6-6 6',
  caret_down:        'M6 9l6 6 6-6',
  caret_left:        'M15 18l-6-6 6-6',
  caret_right:       'M9 18l6-6-6-6',
  caret_up_down:     'M8 9l4-4 4 4M8 15l4 4 4-4',

  // アクション
  check_circle:  'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM7 12l4 4 6-6',
  alert_circle:  'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM12 8v5M12 16v.5',
  x_circle:      'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM9 9l6 6M15 9l-6 6',
  sync:          'M4 4v5h5M20 20v-5h-5M4.07 15a9 9 0 1 0 .29-4.88',
  x:             'M18 6L6 18M6 6l12 12',
  search:        'M21 21l-4.35-4.35M17 11a7 7 0 1 0-14 0 7 7 0 0 0 14 0',
  plus:          'M12 5v14M5 12h14',
  minus:         'M5 12h14',
  plus_circle:   'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM12 8v8M8 12h8',
  external_link: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3',
  check:         'M20 6L9 17l-5-5',
  calendar:      'M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM3 10h18M8 3v4M16 3v4',
  eye:           'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6',

  // 編集・コンテンツ
  pencil:          'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z',
  pencil_circle:   'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM9.5 9.5l4 1-1 4-4-1 1-4z',
  photo:           'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
  photo_plus:      'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 13v4M10 15h4',
  video:           'M15 10l4.55-2.28A1 1 0 0 1 21 8.68v6.64a1 1 0 0 1-1.45.9L15 14M3 8h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z',
  copy:            'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1M9 7h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z',
  document:        'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h6',
  documents:       'M4 4h9l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM13 4v5h5M7 11h5M7 15h8',
  no_result:       'M21 21l-4.35-4.35M17 11a7 7 0 1 0-14 0 7 7 0 0 0 14 0M11 8v3M11 14v.5',
  globe:           'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  link:            'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',

  // UI・コントロール
  magic_wand:      'M15 4V2M15 16v-2M8 9H2M20 9h-2M17.8 11.8L19 13M17.8 6.2L19 5M3 21L12 12M12.2 6.2L11 5',
  gear:            'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  light_bulb:      'M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.2 4.5-3 5.7V18H9v-3.3C7.2 13.5 6 11.5 6 9a6 6 0 0 1 6-6z',
  clock:           'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM12 6v6l4 2',
  logout:          'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  bell:            'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
  question_circle: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01',
  star:            'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  star_half:       'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z',
  comment:         'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  minus_circle:    'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM8 12h8',
  ellipsis:        'M12 12m-1 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM6 12m-1 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM18 12m-1 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0',

  // ブランド（シンプルな代表形状）
  'brand/google_map': 'M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4',
  'brand/facebook':   'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  'brand/instagram':  'M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM17.5 6.5h.01',
  'brand/yahoo':      'M3 5l4 8v4h2v-4l4-8h-2l-3 5-3-5zM15 9l3.5-4h-2l-2.5 3',
  'brand/yelp':       'M12 13v8M8 17l2-3M16 17l-2-3M12 3a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2z',
  'brand/youtube':    'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM10 15.5v-7l6 3.5-6 3.5z',
  'brand/line':       'M21 11.5c0-4.14-4.04-7.5-9-7.5S3 7.36 3 11.5c0 3.71 3.2 6.82 7.53 7.41.29.06.69.19.79.44.09.22.06.57.03.8l-.13.79c-.04.22-.18.87.74.47s4.91-2.96 6.7-5.07A6.77 6.77 0 0 0 21 11.5z',
  'brand/x':          'M4 4l16 16M4 20L20 4',
  'brand/tiktok':     'M19 3a5.5 5.5 0 0 1-3.29 5 5.5 5.5 0 0 1-3.21 1V9.5a5.5 5.5 0 0 0 5.5-5.5V3h1zM9.5 9.5v6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 2.5-2.5',
  'brand/apple':      'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z',
  'brand/store_website': 'M3 3h18v4H3zM3 10h5v11H3zM10 10h11v3H10zM10 16h7v5H10z',

  // アプリナビゲーション
  store_nav:    'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  analysis_nav: 'M18 20V10M12 20V4M6 20v-6',
  gear_nav:     'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
};

// ─── アイコングループ定義（Figmaの基本設計カードに準拠）───

const ICON_GROUPS = [
  {
    label: '矢印',
    icons: [
      'arrow_up', 'arrow_down', 'arrow_left', 'arrow_right',
      'arrow_down_circle',
      'caret_up', 'caret_down', 'caret_left', 'caret_right', 'caret_up_down',
    ],
  },
  {
    label: 'アクション',
    icons: [
      'check_circle', 'alert_circle', 'x_circle', 'sync',
      'x', 'search', 'plus', 'minus',
      'plus_circle', 'external_link', 'check', 'calendar', 'eye',
    ],
  },
  {
    label: '編集・コンテンツ',
    icons: [
      'pencil', 'pencil_circle', 'photo', 'photo_plus', 'video',
      'copy', 'document', 'documents',
      'no_result', 'globe', 'link', 'ellipsis',
    ],
  },
  {
    label: 'UI・コントロール',
    icons: [
      'magic_wand', 'gear', 'light_bulb', 'clock',
      'logout', 'bell', 'question_circle',
      'star', 'star_half', 'comment', 'minus_circle',
    ],
  },
  {
    label: 'ブランド',
    icons: [
      'brand/google_map', 'brand/facebook', 'brand/instagram', 'brand/yahoo',
      'brand/yelp', 'brand/youtube', 'brand/line', 'brand/x',
      'brand/tiktok', 'brand/apple', 'brand/store_website',
    ],
  },
  {
    label: 'アプリナビゲーション',
    icons: ['store_nav', 'analysis_nav', 'gear_nav'],
  },
];

/**
 * インラインSVGアイコン要素を生成するユーティリティ。
 *
 * @param {string} name - アイコン名
 * @param {number} [size=24] - px単位のサイズ
 * @returns {SVGElement}
 */
function buildSvgEl(name, size = 24) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.5');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  const d = ICON_DEFS[name];
  if (d) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    svg.appendChild(path);
  }
  return svg;
}

/**
 * グループセクションを生成する内部ヘルパー。
 *
 * @param {Object} group
 * @param {string} group.label
 * @param {string[]} group.icons
 * @returns {HTMLElement}
 */
function createGroup({ label, icons }) {
  const section = document.createElement('div');
  section.className = 'storybook-icon__group';

  const groupLabel = document.createElement('p');
  groupLabel.className = 'storybook-icon__group-label';
  groupLabel.textContent = label;
  section.appendChild(groupLabel);

  const grid = document.createElement('div');
  grid.className = 'storybook-icon__grid';

  icons.forEach((name) => {
    const item = document.createElement('div');
    item.className = 'storybook-icon__item';

    const iconWrap = document.createElement('span');
    iconWrap.className = 'storybook-icon__item-icon';
    iconWrap.setAttribute('title', name);
    iconWrap.appendChild(buildSvgEl(name, 24));
    item.appendChild(iconWrap);

    const nameEl = document.createElement('span');
    nameEl.className = 'storybook-icon__item-name';
    // brand/xxx → xxx 形式で表示
    nameEl.textContent = name.replace('brand/', '');
    item.appendChild(nameEl);

    grid.appendChild(item);
  });

  section.appendChild(grid);
  return section;
}

/**
 * Icon ドキュメンテーションコンポーネントを生成する。
 *
 * デザインシステムのアイコン一覧（Icon）をカタログ形式で
 * 表示するドキュメンテーションコンポーネント。
 * Figma node-id: 238:7678
 *
 * @param {Object}  [props]
 * @param {string}  [props.className=''] - 追加クラス名
 * @returns {HTMLElement}
 */
export const createIcon = ({ className = '' } = {}) => {
  const root = document.createElement('div');
  root.className = ['storybook-icon', className].filter(Boolean).join(' ');

  // ── Head ──
  const head = document.createElement('div');
  head.className = 'storybook-icon__head';
  const title = document.createElement('h1');
  title.className = 'storybook-icon__title';
  title.textContent = 'Icon';
  head.appendChild(title);
  root.appendChild(head);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'storybook-icon__body';

  // ── 概念セクション ──
  const concept = document.createElement('div');
  concept.className = 'storybook-icon__concept';

  const conceptLabelRow = document.createElement('div');
  conceptLabelRow.className = 'storybook-icon__concept-label-row';

  const conceptLabel = document.createElement('p');
  conceptLabel.className = 'storybook-icon__concept-label';
  conceptLabel.textContent = '概念';

  const conceptTagline = document.createElement('p');
  conceptTagline.className = 'storybook-icon__concept-tagline';
  conceptTagline.textContent = 'どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。';

  conceptLabelRow.appendChild(conceptLabel);
  conceptLabelRow.appendChild(conceptTagline);
  concept.appendChild(conceptLabelRow);

  const conceptBody = document.createElement('p');
  conceptBody.className = 'storybook-icon__concept-body';
  conceptBody.textContent = 'テキストと比べて小さな領域で、かつ直感的に情報を伝達できる、絵や記号。';
  concept.appendChild(conceptBody);

  body.appendChild(concept);

  // ── 基本設計セクション ──
  const designSection = document.createElement('div');
  designSection.className = 'storybook-icon__section';

  const designHeading = document.createElement('p');
  designHeading.className = 'storybook-icon__section-heading';
  designHeading.textContent = '基本設計';
  designSection.appendChild(designHeading);

  const card = document.createElement('div');
  card.className = 'storybook-icon__card';

  ICON_GROUPS.forEach((group) => card.appendChild(createGroup(group)));

  designSection.appendChild(card);
  body.appendChild(designSection);

  // ── 使用時に気をつけておくこと ──
  const notesSection = document.createElement('div');
  notesSection.className = 'storybook-icon__section';

  const notesHeading = document.createElement('p');
  notesHeading.className = 'storybook-icon__section-heading';
  notesHeading.textContent = '使用時に気をつけておくこと';
  notesSection.appendChild(notesHeading);

  const notesList = document.createElement('ul');
  notesList.className = 'storybook-icon__notes-list';

  [
    'サイズパターンは「16x16」「20x20」「24x24」',
    'テキストと併用する場合は、そのテキストに近いサイズを選択する',
  ].forEach((text) => {
    const li = document.createElement('li');
    li.className = 'storybook-icon__notes-item';
    li.textContent = text;
    notesList.appendChild(li);
  });

  notesSection.appendChild(notesList);
  body.appendChild(notesSection);

  root.appendChild(body);
  return root;
};
