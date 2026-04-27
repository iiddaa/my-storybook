import './color-palettes.css';

/**
 * Figma "Design-System-2.0--AI-Native-" Color Palettes (Primitives) より。
 * node-id: 363:6854
 *
 * グループ順・カラー値はFigma準拠。
 * 表示形式: Name | Preview（横長バー）| Value の3カラムテーブル。
 */
const GROUPS = [
  {
    name: 'Gray',
    swatches: [
      { step: '900', color: '#222222' },
      { step: '800', color: '#333C45' },
      { step: '700', color: '#454F59' },
      { step: '600', color: '#515A65' },
      { step: '500', color: '#5C6670' },
      { step: '400', color: '#858C94' },
      { step: '300', color: '#ADB2B8' },
      { step: '200', color: '#D6D9DB' },
      { step: '100', color: '#EFF0F1' },
      { step: '50',  color: '#F7F7F8' },
    ],
  },
  {
    name: 'Blue',
    swatches: [
      { step: '900', color: '#053066' },
      { step: '800', color: '#0A458F' },
      { step: '700', color: '#125CB8' },
      { step: '600', color: '#1E74DB' },
      { step: '500', color: '#318BF7' },
      { step: '400', color: '#64A8F9' },
      { step: '300', color: '#98C5FB' },
      { step: '200', color: '#CBE2FD' },
      { step: '100', color: '#EAF3FE' },
      { step: '50',  color: '#F5F9FF' },
    ],
  },
  {
    name: 'Red',
    swatches: [
      { step: '500', color: '#EB4D38' },
      { step: '100', color: '#FDF2F0' },
    ],
  },
  {
    name: 'Green',
    swatches: [
      { step: '500', color: '#22AD7F' },
      { step: '100', color: '#E4F5EF' },
    ],
  },
  {
    name: 'Orange',
    swatches: [
      { step: '500', color: '#F78F43' },
      { step: '100', color: '#FEF4ED' },
    ],
  },
  {
    name: 'Yellow',
    swatches: [
      { step: '500', color: '#FBBC04' },
    ],
  },
  {
    name: 'Neutral',
    swatches: [
      { step: 'Black', color: '#000000' },
      { step: 'White', color: '#FFFFFF' },
    ],
  },
];

/**
 * カラーグループのDOM要素を生成する内部ヘルパー。
 * Name | Preview（横長バー）| Value の3カラムテーブル形式で表示する。
 *
 * @param {Object}   group
 * @param {string}   group.name
 * @param {Array<{step: string, color: string}>} group.swatches
 * @returns {HTMLElement}
 */
function createGroup({ name, swatches }) {
  const section = document.createElement('div');
  section.className = 'storybook-color-palettes__group';

  const groupTitle = document.createElement('p');
  groupTitle.className = 'storybook-color-palettes__group-name';
  groupTitle.textContent = name;
  section.appendChild(groupTitle);

  const table = document.createElement('div');
  table.className = 'storybook-color-palettes__table';

  // ヘッダー行
  const headerRow = document.createElement('div');
  headerRow.className =
    'storybook-color-palettes__table-row storybook-color-palettes__table-row--header';
  ['Name', 'Preview', 'Value'].forEach((label) => {
    const cell = document.createElement('span');
    cell.className = 'storybook-color-palettes__cell';
    cell.textContent = label;
    headerRow.appendChild(cell);
  });
  table.appendChild(headerRow);

  // データ行
  swatches.forEach(({ step, color }) => {
    const row = document.createElement('div');
    row.className = 'storybook-color-palettes__table-row';

    const nameCell = document.createElement('span');
    nameCell.className =
      'storybook-color-palettes__cell storybook-color-palettes__cell--name';
    nameCell.textContent = step;

    const previewCell = document.createElement('span');
    previewCell.className =
      'storybook-color-palettes__cell storybook-color-palettes__cell--preview';
    const bar = document.createElement('span');
    bar.className = 'storybook-color-palettes__bar';
    bar.style.backgroundColor = color;
    bar.setAttribute('role', 'img');
    bar.setAttribute('aria-label', `${name} ${step} — ${color}`);
    bar.setAttribute('title', color);
    previewCell.appendChild(bar);

    const valueCell = document.createElement('span');
    valueCell.className =
      'storybook-color-palettes__cell storybook-color-palettes__cell--value';
    valueCell.textContent = color.toUpperCase();

    row.appendChild(nameCell);
    row.appendChild(previewCell);
    row.appendChild(valueCell);
    table.appendChild(row);
  });

  section.appendChild(table);
  return section;
}

/**
 * カラーパレット表示コンポーネントを生成する。
 *
 * デザインシステムのプリミティブカラーパレット（Color Palettes / Primitives）を
 * 視覚的に一覧表示するドキュメンテーションコンポーネント。
 * Figma node-id: 363:6854
 *
 * @param {Object}  [props]
 * @param {string}  [props.className=''] - 追加クラス名
 * @returns {HTMLElement}
 */
export const createColorPalettes = ({ className = '' } = {}) => {
  const root = document.createElement('div');
  root.className = ['storybook-color-palettes', className].filter(Boolean).join(' ');

  // ── Head ──
  const head = document.createElement('div');
  head.className = 'storybook-color-palettes__head';
  const title = document.createElement('h1');
  title.className = 'storybook-color-palettes__title';
  title.textContent = 'Color Palettes (Primitives)';
  head.appendChild(title);
  root.appendChild(head);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'storybook-color-palettes__body';

  const section = document.createElement('div');
  section.className = 'storybook-color-palettes__section';

  const sectionTitle = document.createElement('p');
  sectionTitle.className = 'storybook-color-palettes__section-title';
  sectionTitle.textContent = 'Primitive Color';
  section.appendChild(sectionTitle);

  const card = document.createElement('div');
  card.className = 'storybook-color-palettes__card';

  const primitives = document.createElement('div');
  primitives.className = 'storybook-color-palettes__primitives';
  GROUPS.forEach((group) => primitives.appendChild(createGroup(group)));
  card.appendChild(primitives);

  section.appendChild(card);
  body.appendChild(section);
  root.appendChild(body);

  return root;
};
