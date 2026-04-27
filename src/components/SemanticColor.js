import './semantic-color.css';

/**
 * Figma "Design-System-2.0--AI-Native-" Semantic Color より。
 * node-id: 370:8075
 *
 * Primitive Color を参照元として、用途ごとにセマンティックトークンを定義する。
 * トークン名・カテゴリ名はFigmaに合わせてTitle Case（例: Main, Sub, Muted）。
 * primitive 参照は Figma 表記（例: Gray/900, Blue/500）。
 * カテゴリ順: Text → BG → Border → Icon
 */
const CATEGORIES = [
  {
    id: 'text',
    title: 'Text',
    description: 'テキストパーツに利用する。',
    tokens: [
      { variation: 'Main',    primitive: 'Gray/900',      color: '#222222', use: '読んでもらいたい文字。Title、Head、本文など。' },
      { variation: 'Sub',     primitive: 'Gray/600',      color: '#515A65', use: '一歩引いた文字。Sub Text、補足情報。' },
      { variation: 'Muted',   primitive: 'Gray/400',      color: '#858C94', use: '明確に薄い表現にしたい文字。Caption、プレースホルダー。' },
      { variation: 'Disable', primitive: 'Gray/300',      color: '#ADB2B8', use: '無効状態。押せないボタンや、非活性の項目。' },
      { variation: 'Inverse', primitive: 'Neutral/White', color: '#FFFFFF', use: '濃い背景用。青いボタンの中の白い文字など。' },
      { variation: 'Link',    primitive: 'Blue/500',      color: '#318BF7', use: '標準のリンク色。本文中のリンクなど。' },
      { variation: 'Alert',   primitive: 'Red/500',       color: '#EB4D38', use: 'アラート文字。エラー状態の説明など。' },
    ],
  },
  {
    id: 'bg',
    title: 'BG',
    description: '背景に利用する。',
    tokens: [
      { variation: 'Main',    primitive: 'Neutral/White', color: '#FFFFFF', use: '基本背景。ページ全体のベースカラー。' },
      { variation: 'Sub',     primitive: 'Gray/50',       color: '#F7F7F8', use: '一歩引いた背景。' },
      { variation: 'Content', primitive: 'Gray/200',      color: '#D6D9DB', use: '画像やアイコンの後ろに敷く、コンテンツを目立たせるための背景。' },
      { variation: 'Surface', primitive: 'Neutral/White', color: '#FFFFFF', use: '浮き上がった要素の背景。モーダルやカードなど。' },
      {
        variation: 'Accent',
        primitive: 'Blue/100',
        color: '#EAF3FE',
        use: '強調したいポジティブな情報の背景色。\n選択中状態やグローバルナビゲーションの現在地、アクティブな表現など。',
      },
      {
        variation: 'Notice',
        primitive: 'Gray/100',
        color: '#EFF0F1',
        use: '補足など目立たせなくてもいい情報の背景。\nまたは、掲載期間が終了したなどネガティブな内容のお知らせ。',
      },
      { variation: 'Alert',   primitive: 'Red/100',       color: '#FDF2F0', use: 'アラート状態。InformationPanelや、Inputなど。' },
      { variation: 'Success', primitive: 'Green/100',     color: '#E4F5EF', use: '成功した状態。InformationPanelやトーストなど。' },
      { variation: 'Warning', primitive: 'Orange/100',    color: '#FEF4ED', use: '警告状態。InformationPanelやトーストなど。' },
    ],
  },
  {
    id: 'border',
    title: 'Border',
    description: '線に利用する。',
    tokens: [
      { variation: 'Main',    primitive: 'Gray/200',      color: '#D6D9DB', use: '基本の線。セパレートライン、枠線など。' },
      {
        variation: 'Accent',
        primitive: 'Blue/500',
        color: '#318BF7',
        use: '強調したいポジティブ表現との併用。\nInputの入力中状態やタブの現在地など。',
      },
      { variation: 'Alert',   primitive: 'Red/500',       color: '#EB4D38', use: 'アラート表現との併用。' },
      { variation: 'Success', primitive: 'Green/500',     color: '#22AD7F', use: '成功表現との併用。' },
      { variation: 'Warning', primitive: 'Orange/500',    color: '#F78F43', use: '警告表現との併用。' },
      { variation: 'Inverse', primitive: 'Neutral/White', color: '#FFFFFF', use: '濃い背景の場合に利用。' },
    ],
  },
  {
    id: 'icon',
    title: 'Icon',
    description: 'アイコンに利用する。',
    tokens: [
      { variation: 'Main',    primitive: 'Gray/900',      color: '#222222', use: 'デフォルトアイコン。ヘッドタイトルやリスト項目との併用。' },
      { variation: 'Link',    primitive: 'Blue/500',      color: '#318BF7', use: 'リンク、操作できるアイコン。または青い表現で強調したい時。' },
      { variation: 'Disable', primitive: 'Gray/300',      color: '#ADB2B8', use: '非アクティブ状態。' },
      { variation: 'Notice',  primitive: 'Gray/500',      color: '#5C6670', use: '補足など目立たせなくてもいい情報との併用。' },
      { variation: 'Alert',   primitive: 'Red/500',       color: '#EB4D38', use: 'アラート、エラー表現との併用。' },
      { variation: 'Success', primitive: 'Green/500',     color: '#22AD7F', use: '成功表現との併用。' },
      { variation: 'Warning', primitive: 'Orange/500',    color: '#F78F43', use: '警告表現との併用。' },
      { variation: 'Inverse', primitive: 'Neutral/White', color: '#FFFFFF', use: '濃い背景の場合に利用。' },
    ],
  },
];

/**
 * セマンティックカラーのカテゴリカードを生成する内部ヘルパー。
 *
 * @param {Object}   category
 * @param {string}   category.title
 * @param {string}   category.description
 * @param {Array<{variation: string, primitive: string, color: string, use: string}>} category.tokens
 * @returns {HTMLElement}
 */
function createCategory({ title, description, tokens }) {
  const wrapper = document.createElement('div');
  wrapper.className = 'storybook-semantic-color__category';

  // ── カテゴリヘッダー ──
  const header = document.createElement('div');
  header.className = 'storybook-semantic-color__category-header';

  const titleEl = document.createElement('p');
  titleEl.className = 'storybook-semantic-color__category-title';
  titleEl.textContent = title;

  const descEl = document.createElement('p');
  descEl.className = 'storybook-semantic-color__category-desc';
  descEl.textContent = description;

  header.appendChild(titleEl);
  header.appendChild(descEl);
  wrapper.appendChild(header);

  // ── カード ──
  const card = document.createElement('div');
  card.className = 'storybook-semantic-color__card';

  // テーブルヘッダー行
  const tableHeader = document.createElement('div');
  tableHeader.className = 'storybook-semantic-color__table-header';

  const varLabel = document.createElement('p');
  varLabel.className = 'storybook-semantic-color__table-label';
  varLabel.textContent = 'Variation';

  const useLabel = document.createElement('p');
  useLabel.className = 'storybook-semantic-color__table-label';
  useLabel.textContent = 'Use';

  tableHeader.appendChild(varLabel);
  tableHeader.appendChild(useLabel);
  card.appendChild(tableHeader);

  // カラー行
  tokens.forEach(({ variation, primitive, color, use }) => {
    const row = document.createElement('div');
    row.className = 'storybook-semantic-color__row';

    // カラースクエア
    const square = document.createElement('span');
    square.className = 'storybook-semantic-color__square';
    square.style.backgroundColor = color;
    square.setAttribute('role', 'img');
    square.setAttribute('aria-label', `${variation} — ${color}`);
    square.setAttribute('title', color);

    // バリエーション名 + Primitive参照
    const nameBlock = document.createElement('div');
    nameBlock.className = 'storybook-semantic-color__name-block';

    const variationEl = document.createElement('p');
    variationEl.className = 'storybook-semantic-color__variation';
    variationEl.textContent = variation;

    const primitiveEl = document.createElement('p');
    primitiveEl.className = 'storybook-semantic-color__primitive';
    primitiveEl.textContent = primitive;

    nameBlock.appendChild(variationEl);
    nameBlock.appendChild(primitiveEl);

    // 用途テキスト（改行対応）
    const useEl = document.createElement('p');
    useEl.className = 'storybook-semantic-color__use';
    useEl.innerHTML = use.replace(/\n/g, '<br>');

    row.appendChild(square);
    row.appendChild(nameBlock);
    row.appendChild(useEl);
    card.appendChild(row);
  });

  wrapper.appendChild(card);
  return wrapper;
}

/**
 * セマンティックカラー表示コンポーネントを生成する。
 *
 * デザインシステムのセマンティックカラー（Semantic Color）を
 * 用途カテゴリ別に視覚的に一覧表示するドキュメンテーションコンポーネント。
 * Figma node-id: 370:8075
 *
 * @param {Object}  [props]
 * @param {string}  [props.className=''] - 追加クラス名
 * @returns {HTMLElement}
 */
export const createSemanticColor = ({ className = '' } = {}) => {
  const root = document.createElement('div');
  root.className = ['storybook-semantic-color', className].filter(Boolean).join(' ');

  // ── Head ──
  const head = document.createElement('div');
  head.className = 'storybook-semantic-color__head';
  const title = document.createElement('h1');
  title.className = 'storybook-semantic-color__title';
  title.textContent = 'Semantic Color';
  head.appendChild(title);
  root.appendChild(head);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'storybook-semantic-color__body';

  // ── 概念セクション ──
  const concept = document.createElement('div');
  concept.className = 'storybook-semantic-color__concept';

  const conceptLabelRow = document.createElement('div');
  conceptLabelRow.className = 'storybook-semantic-color__concept-label-row';

  const conceptLabel = document.createElement('p');
  conceptLabel.className = 'storybook-semantic-color__concept-label';
  conceptLabel.textContent = '概念';

  const conceptTagline = document.createElement('p');
  conceptTagline.className = 'storybook-semantic-color__concept-tagline';
  conceptTagline.textContent = 'どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。';

  conceptLabelRow.appendChild(conceptLabel);
  conceptLabelRow.appendChild(conceptTagline);
  concept.appendChild(conceptLabelRow);

  const conceptBody = document.createElement('div');
  conceptBody.className = 'storybook-semantic-color__concept-body';

  const line1 = document.createElement('p');
  line1.textContent = '用途によってカラーを定義。';
  const line2 = document.createElement('p');
  line2.textContent = '原則、セマンティックトークンから用途に合わせて色を選択する。';

  conceptBody.appendChild(line1);
  conceptBody.appendChild(line2);
  concept.appendChild(conceptBody);

  body.appendChild(concept);

  // ── カテゴリ群 ──
  const categories = document.createElement('div');
  categories.className = 'storybook-semantic-color__categories';
  CATEGORIES.forEach((category) => categories.appendChild(createCategory(category)));
  body.appendChild(categories);

  root.appendChild(body);
  return root;
};
