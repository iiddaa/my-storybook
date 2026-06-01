import './icon.css';
import { ICON_DEFS, BRAND_LOGOS, ICON_MULTICOLOR, buildSvgEl } from './icons/index.js';

/**
 * Figma "Design-System-2.0--AI-Native-" Icon ページより。
 * node-id: 238:7678
 *
 * テキストと比べて小さな領域で、かつ直感的に情報を伝達できる、絵や記号。
 * アイコン一覧をカタログ形式で表示するドキュメンテーションコンポーネント。
 *
 * Semantic Color 使用箇所:
 *  - ヘッダー背景     : Yellow/500 (#FBBC04)  ← Figma: var(--yellow/500)
 *  - ヘッダータイトル : text/paper (#FFFFFF)
 *  - セクション見出し : text/accent-dark (#1E74DB)
 *  - 本文テキスト     : text/ink (#222222)
 *  - カード背景       : background/content (#D6D9DB)
 *  - アイコン色       : icon/ink (#222222)
 */

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

  // Figma: 基本設計セクション内のサイズルール箇条書き（カードの上）
  const sizeRulesList = document.createElement('ul');
  sizeRulesList.className = 'storybook-icon__notes-list';
  [
    'サイズパターンは「16x16」「20x20」「24x24」「32x32」',
    'テキストと併用する場合は、そのテキストに近いサイズを選択する',
  ].forEach((text) => {
    const li = document.createElement('li');
    li.className = 'storybook-icon__notes-item';
    li.textContent = text;
    sizeRulesList.appendChild(li);
  });
  designSection.appendChild(sizeRulesList);

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

  // Figma: このセクションは未定義（空プレースホルダー）
  const notesList = document.createElement('ul');
  notesList.className = 'storybook-icon__notes-list';
  notesSection.appendChild(notesList);
  body.appendChild(notesSection);

  root.appendChild(body);
  return root;
};
