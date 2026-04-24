import './color-palettes.css';

/**
 * スケールカラー（10段階）: Gray / Blue
 * Figma "Design-System-2.0--AI-Native-" Color Palettes ページより。
 * ・Gray 300 = #adb2b8、Gray 400 = #858c94、Gray 500 = #5c6670 はコードベース確認済み
 * ・Blue 500 = #318bf7、Blue 600 = #1e74db はデザインシステムトークン確認済み
 * ・Blue 100 = #eaf3fe、Gray 100 = #eff0f1 は InformationPanel スタイルより確認済み
 * ・それ以外の中間値はパレット補完による推定値
 */
const SCALES = [
  {
    name: 'Gray',
    swatches: [
      { step: '900', color: '#222222' },
      { step: '800', color: '#2a2f35', muted: true },
      { step: '700', color: '#3a404a', muted: true },
      { step: '600', color: '#4b5259' },
      { step: '500', color: '#5c6670' },
      { step: '400', color: '#858c94' },
      { step: '300', color: '#adb2b8' },
      { step: '200', color: '#dde0e3' },
      { step: '100', color: '#eff0f1' },
      { step: '50',  color: '#f7f7f8' },
    ],
  },
  {
    name: 'Blue',
    swatches: [
      { step: '900', color: '#0a1f40' },
      { step: '800', color: '#0d2f61', muted: true },
      { step: '700', color: '#1247a1', muted: true },
      { step: '600', color: '#1e74db' },
      { step: '500', color: '#318bf7' },
      { step: '400', color: '#619ff0' },
      { step: '300', color: '#8fbff4' },
      { step: '200', color: '#c5dff9' },
      { step: '100', color: '#eaf3fe' },
      { step: '50',  color: '#f5f9ff' },
    ],
  },
  {
    name: 'Neutral',
    swatches: [
      { step: 'Black', color: '#222222' },
      { step: 'White', color: '#ffffff' },
    ],
  },
];

/**
 * アクセントカラー（各2段階、Yellow のみ1段階）
 */
const ACCENTS = [
  {
    name: 'Red',
    swatches: [
      { step: '500', color: '#eb4d38' },
      { step: '100', color: '#fdf2f0' },
    ],
  },
  {
    name: 'Green',
    swatches: [
      { step: '500', color: '#22a76a' },
      { step: '100', color: '#e4f5ef' },
    ],
  },
  {
    name: 'Orange',
    swatches: [
      { step: '500', color: '#f78f43' },
      { step: '100', color: '#fef4ed' },
    ],
  },
  {
    name: 'Yellow',
    swatches: [
      { step: '500', color: '#f5c842' },
    ],
  },
];

/**
 * カラーグループのDOM要素を生成する内部ヘルパー。
 *
 * @param {Object}   group
 * @param {string}   group.name
 * @param {Array<{step: string, color: string, muted?: boolean}>} group.swatches
 * @returns {HTMLElement}
 */
function createGroup({ name, swatches }) {
  const group = document.createElement('div');
  group.className = 'storybook-color-palettes__group';

  const groupName = document.createElement('span');
  groupName.className = 'storybook-color-palettes__group-name';
  groupName.textContent = name;
  group.appendChild(groupName);

  const swatchList = document.createElement('div');
  swatchList.className = 'storybook-color-palettes__swatches';

  swatches.forEach(({ step, color, muted }) => {
    const row = document.createElement('div');
    row.className = 'storybook-color-palettes__swatch';

    const label = document.createElement('span');
    label.className = [
      'storybook-color-palettes__swatch-step',
      muted ? 'storybook-color-palettes__swatch-step--muted' : '',
    ]
      .filter(Boolean)
      .join(' ');
    label.textContent = step;

    const circle = document.createElement('span');
    circle.className = 'storybook-color-palettes__swatch-circle';
    circle.style.backgroundColor = color;
    circle.setAttribute('role', 'img');
    circle.setAttribute('aria-label', `${name} ${step} — ${color}`);
    circle.setAttribute('title', color);

    row.appendChild(label);
    row.appendChild(circle);
    swatchList.appendChild(row);
  });

  group.appendChild(swatchList);
  return group;
}

/**
 * カラーパレット表示コンポーネントを生成する。
 *
 * デザインシステムのプリミティブカラーパレット（Color Palettes / Primitives）を
 * 視覚的に一覧表示するドキュメンテーションコンポーネント。
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
  title.textContent = 'Color Palettes';
  head.appendChild(title);
  root.appendChild(head);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'storybook-color-palettes__body';

  const section = document.createElement('div');
  section.className = 'storybook-color-palettes__section';

  const sectionTitle = document.createElement('p');
  sectionTitle.className = 'storybook-color-palettes__section-title';
  sectionTitle.textContent = 'Color Palettes (Primitives)';
  section.appendChild(sectionTitle);

  // Card
  const card = document.createElement('div');
  card.className = 'storybook-color-palettes__card';

  // Scales row: Gray / Blue / Neutral
  const scalesRow = document.createElement('div');
  scalesRow.className = 'storybook-color-palettes__scales';
  SCALES.forEach((group) => scalesRow.appendChild(createGroup(group)));
  card.appendChild(scalesRow);

  // Accents row: Red / Green / Orange / Yellow
  const accentsRow = document.createElement('div');
  accentsRow.className = 'storybook-color-palettes__accents';
  ACCENTS.forEach((group) => accentsRow.appendChild(createGroup(group)));
  card.appendChild(accentsRow);

  section.appendChild(card);
  body.appendChild(section);
  root.appendChild(body);

  return root;
};
