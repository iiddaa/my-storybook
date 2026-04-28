import './spacing.css';

/**
 * Figma "Design-System-2.0--AI-Native-" Spacing ページより。
 * node-id: 406:5217
 *
 * スペーシングトークンをカタログ形式で表示するドキュメンテーションコンポーネント。
 * Variation（トークン名・px値）/ Use（用途説明）の表形式で構成。
 *
 * Semantic Color 使用箇所:
 *  - ヘッダー背景     : Yellow/500 (#fbbc04)
 *  - ヘッダータイトル : Text/Inverse (#FFFFFF)
 *  - 概念ラベル・説明 : Blue/600 (#1e74db)
 *  - セクション見出し : Text/Main (#222222)
 *  - テーブル本文     : Text/Main (#222222)
 *  - カード背景       : BG/Sub (#F7F7F8)
 *  - テーブルヘッダー : BG/Notice (#EFF0F1)
 *  - 行背景           : BG/Main (#FFFFFF)
 *  - カラースクエア   : Magenta (#FF00CC) ※Figmaデザインより
 */

// ─── スペーシングエントリ定義 ───

const SPACING_ENTRIES = [
  {
    token: '2XS',
    size: 4,
    use: '【極小】アイコンと文字の間など、ほぼ密着させたい最小単位。',
  },
  {
    token: 'XS',
    size: 8,
    use: '【近接】同じグループ内の要素（ラベルと入力、タイトルと本文など）。',
  },
  {
    token: 'S',
    size: 12,
    use: '【コンテンツ間：小】カード内での要素のグループ分けなど。小さなグループや要素の端のパディングにも使用。（Input、Select、tableなど）',
  },
  {
    token: 'M',
    size: 16,
    use: '【コンテンツ間：標準】並んでいるカード同士や、リストの行間。',
  },
  {
    token: 'L',
    size: 24,
    use: '【コンテンツ間：大】同一コンテンツ内の情報を区切る最大単位。ボタン上部や画面端のマージンにも使用。',
  },
  {
    token: 'XL',
    size: 32,
    use: '【セクション間：小】同一ページ内の異なるセクション（話題・要素の切り替わり）の最小単位。',
  },
  {
    token: '2XL',
    size: 40,
    use: '【セクション間：標準】情報の塊同士を離すとき。',
  },
  {
    token: '3XL',
    size: 48,
    use: '【セクション間：大】大きな情報の塊同士を離すとき。',
  },
  {
    token: 'EXL',
    size: 60,
    use: '【余白：大】特定のコンテンツを強調表示させるための大胆な余白など。',
  },
];

// ─── 内部ヘルパー ───

/**
 * スペーシング行を1つ生成する内部ヘルパー。
 * @param {{ token: string, size: number, use: string }} entry
 * @returns {HTMLElement}
 */
function createRow({ token, size, use }) {
  const row = document.createElement('div');
  row.className = 'storybook-spacing__row';

  // ── カラースクエアコンテナ ──
  const squareContainer = document.createElement('div');
  squareContainer.className = 'storybook-spacing__square-container';

  const square = document.createElement('div');
  square.className = 'storybook-spacing__square';
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  squareContainer.appendChild(square);

  // ── バリエーション情報 ──
  const info = document.createElement('div');
  info.className = 'storybook-spacing__info';

  const code = document.createElement('div');
  code.className = 'storybook-spacing__code';

  const nameEl = document.createElement('p');
  nameEl.className = 'storybook-spacing__name';
  nameEl.textContent = token;

  const sizeEl = document.createElement('p');
  sizeEl.className = 'storybook-spacing__size';
  sizeEl.textContent = `${size}px`;

  code.appendChild(nameEl);
  code.appendChild(sizeEl);

  // ── 用途 ──
  const useEl = document.createElement('p');
  useEl.className = 'storybook-spacing__use';
  useEl.textContent = use;

  info.appendChild(code);
  info.appendChild(useEl);

  row.appendChild(squareContainer);
  row.appendChild(info);

  return row;
}

/**
 * Spacing ドキュメンテーションコンポーネントを生成する。
 *
 * デザインシステムのスペーシングトークン一覧（Spacing）を
 * カタログ形式で表示する。
 * Figma node-id: 406:5217
 *
 * @param {Object} [props]
 * @param {string} [props.className=''] - 追加クラス名
 * @returns {HTMLElement}
 */
export const createSpacing = ({ className = '' } = {}) => {
  const root = document.createElement('div');
  root.className = ['storybook-spacing', className].filter(Boolean).join(' ');

  // ── Head ──
  const head = document.createElement('div');
  head.className = 'storybook-spacing__head';

  const headTitle = document.createElement('h1');
  headTitle.className = 'storybook-spacing__head-title';
  headTitle.textContent = 'Spacing';
  head.appendChild(headTitle);
  root.appendChild(head);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'storybook-spacing__body';

  // ── 概念セクション ──
  const concept = document.createElement('div');
  concept.className = 'storybook-spacing__concept';

  const conceptHeader = document.createElement('div');
  conceptHeader.className = 'storybook-spacing__concept-header';

  const conceptLabel = document.createElement('p');
  conceptLabel.className = 'storybook-spacing__concept-label';
  conceptLabel.textContent = '概念';

  const conceptDesc = document.createElement('p');
  conceptDesc.className = 'storybook-spacing__concept-desc';
  conceptDesc.textContent =
    'どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。';

  conceptHeader.appendChild(conceptLabel);
  conceptHeader.appendChild(conceptDesc);

  const conceptTitle = document.createElement('p');
  conceptTitle.className = 'storybook-spacing__concept-title';
  conceptTitle.textContent = '要素、またはセクション間の余白の定義。';

  concept.appendChild(conceptHeader);
  concept.appendChild(conceptTitle);
  body.appendChild(concept);

  // ── テーブルカード ──
  const card = document.createElement('div');
  card.className = 'storybook-spacing__card';

  // テーブルヘッダー行
  const tableHeader = document.createElement('div');
  tableHeader.className = 'storybook-spacing__table-header';

  const labelVariation = document.createElement('p');
  labelVariation.className =
    'storybook-spacing__table-label storybook-spacing__table-label--variation';
  labelVariation.textContent = 'Variation';

  const labelUse = document.createElement('p');
  labelUse.className =
    'storybook-spacing__table-label storybook-spacing__table-label--use';
  labelUse.textContent = 'Use';

  tableHeader.appendChild(labelVariation);
  tableHeader.appendChild(labelUse);
  card.appendChild(tableHeader);

  // エントリ行
  SPACING_ENTRIES.forEach((entry) => {
    card.appendChild(createRow(entry));
  });

  body.appendChild(card);
  root.appendChild(body);

  return root;
};
