import './shadow.css';

/**
 * Figma "Design-System-2.0--AI-Native-" Shadow ページより。
 * node-id: 502:11987
 *
 * シャドウトークンをカタログ形式で表示するドキュメンテーションコンポーネント。
 * Variation（トークン名・影パラメータ）/ Use（用途説明）の表形式で構成。
 */

// ─── シャドウエントリ定義 ───

const SHADOW_ENTRIES = [
  {
    token: 'M',
    cssValue: '0px 2px 10px 0px rgba(0, 0, 0, 0.15)',
    params: 'X , Y：0 , 2\nBlar：10\nColor：#000000\nOpacity：0.15',
    use: 'Shadow_Sとは違い、はっきりと「影」のイメージで使う。情報を強調させたり、操作できるパーツとして認知させたい場合に用いる。モーダルなど。',
  },
  {
    token: 'S',
    cssValue: '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
    params: 'X , Y：0 , 1\nBlar：2\nColor：#000000\nOpacity：0.15',
    use: '「影」ではなく「Line」のような用途で使う。Lineでセパレートするよりも視覚的ノイズが発生しづらいメリットがあるが、逆にレイヤーが増えて画面構成がごちゃつくリスクがある。機能性ではなくUI品質の向上のためのバリエーションであり、これを使うことで明確に質感が良くなる場合にのみ用いる。ヘッダーなど。',
  },
];

// ─── 内部ヘルパー ───

function createRow({ token, cssValue, params, use }) {
  const row = document.createElement('div');
  row.className = 'storybook-shadow__row';

  // ── プレビュースクエア ──
  const squareWrap = document.createElement('div');
  squareWrap.className = 'storybook-shadow__square-wrap';

  const square = document.createElement('div');
  square.className = 'storybook-shadow__square';
  square.style.boxShadow = cssValue;
  squareWrap.appendChild(square);

  // ── コード情報（トークン名 + パラメータ）──
  const code = document.createElement('div');
  code.className = 'storybook-shadow__code';

  const nameEl = document.createElement('p');
  nameEl.className = 'storybook-shadow__name';
  nameEl.textContent = token;
  code.appendChild(nameEl);

  const paramsEl = document.createElement('p');
  paramsEl.className = 'storybook-shadow__params';
  paramsEl.textContent = params;
  code.appendChild(paramsEl);

  // ── 用途 ──
  const useEl = document.createElement('p');
  useEl.className = 'storybook-shadow__use';
  useEl.textContent = use;

  row.appendChild(squareWrap);
  row.appendChild(code);
  row.appendChild(useEl);

  return row;
}

/**
 * Shadow ドキュメンテーションコンポーネントを生成する。
 *
 * デザインシステムのシャドウトークン一覧（M / S）を
 * カタログ形式で表示する。
 * Figma node-id: 502:11987
 *
 * @param {Object} [props]
 * @param {string} [props.className=''] - 追加クラス名
 * @returns {HTMLElement}
 */
export const createShadow = ({ className = '' } = {}) => {
  const root = document.createElement('div');
  root.className = ['storybook-shadow', className].filter(Boolean).join(' ');

  // ── Head ──
  const head = document.createElement('div');
  head.className = 'storybook-shadow__head';

  const headTitle = document.createElement('h1');
  headTitle.className = 'storybook-shadow__head-title';
  headTitle.textContent = 'Shadow';
  head.appendChild(headTitle);
  root.appendChild(head);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'storybook-shadow__body';

  // ── 概念セクション ──
  const concept = document.createElement('div');
  concept.className = 'storybook-shadow__concept';

  const conceptHeader = document.createElement('div');
  conceptHeader.className = 'storybook-shadow__concept-header';

  const conceptLabel = document.createElement('p');
  conceptLabel.className = 'storybook-shadow__concept-label';
  conceptLabel.textContent = '概念';

  const conceptDesc = document.createElement('p');
  conceptDesc.className = 'storybook-shadow__concept-desc';
  conceptDesc.textContent =
    'どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。';

  conceptHeader.appendChild(conceptLabel);
  conceptHeader.appendChild(conceptDesc);

  const conceptTitle = document.createElement('p');
  conceptTitle.className = 'storybook-shadow__concept-title';
  conceptTitle.textContent =
    '画面上で情報のレイヤー構造を表現し、直感的に理解しやすくするためのもの。';

  concept.appendChild(conceptHeader);
  concept.appendChild(conceptTitle);
  body.appendChild(concept);

  // ── テーブルカード ──
  const card = document.createElement('div');
  card.className = 'storybook-shadow__card';

  // テーブルヘッダー行
  const tableHeader = document.createElement('div');
  tableHeader.className = 'storybook-shadow__table-header';

  const labelVariation = document.createElement('p');
  labelVariation.className =
    'storybook-shadow__table-label storybook-shadow__table-label--variation';
  labelVariation.textContent = 'Variation';

  const labelUse = document.createElement('p');
  labelUse.className =
    'storybook-shadow__table-label storybook-shadow__table-label--use';
  labelUse.textContent = 'Use';

  tableHeader.appendChild(labelVariation);
  tableHeader.appendChild(labelUse);
  card.appendChild(tableHeader);

  // エントリ行
  SHADOW_ENTRIES.forEach((entry) => {
    card.appendChild(createRow(entry));
  });

  body.appendChild(card);
  root.appendChild(body);

  return root;
};
