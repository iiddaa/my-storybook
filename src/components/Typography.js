import './typography.css';

/**
 * Figma "Design-System-2.0--AI-Native-" Typography ページより。
 * node-id: 392:4505
 *
 * フォントシステムをカタログ形式で表示するドキュメンテーションコンポーネント。
 * 7カテゴリ × Preview / Variation / Use テーブルで構成。
 *
 * Semantic Color 使用箇所:
 *  - ヘッダー背景     : Text/Link = Icon/Link = Border/Accent (#318BF7)
 *  - ヘッダータイトル : Text/Inverse (#FFFFFF)
 *  - セクション見出し : Text/Main (#222222)
 *  - テーブル本文     : Text/Main (#222222)
 *  - Linkプレビュー   : Text/Link (#318BF7)
 *  - カード背景       : BG/Sub (#F7F7F8)
 *  - テーブルヘッダ   : BG/Notice (#EFF0F1)
 *  - 行背景           : BG/Main (#FFFFFF)
 */

// ─── タイポグラフィセクション定義 ───

const TYPOGRAPHY_SECTIONS = [
  {
    id: 'display',
    title: 'Display',
    descriptions: [
      'ユーザーの感情を動かす「ここぞという時の演出用」「特殊文字」。',
      'サイズはUIのバランスを見ながら、期待する効果に合わせて調整する。ページ内で何度も利用すると強調効果が薄れるので多用は控えること。',
    ],
    entries: [
      { variation: 'Display/EXL/Bold',    fontSize: 32, fontWeight: 700, isLink: false, use: '【特殊演出（特大）】ログイン画面、LP、特に強調したい数字などで使用。\n「期待感」「インパクト」などを表現したい場合の特別文字。' },
      { variation: 'Display/EXL/Regular', fontSize: 32, fontWeight: 300, isLink: false, use: '【特殊演出（特大）】Boldだと、画面の統一感が崩壊してしまう場合に使う。' },
      { variation: 'Display/2XL/Bold',    fontSize: 24, fontWeight: 700, isLink: false, use: '【特殊演出（大）】ログイン画面、LP、特に強調したい数字などで使用。\n「期待感」「インパクト」などを表現したい場合の特別文字。' },
      { variation: 'Display/2XL/Regular', fontSize: 24, fontWeight: 300, isLink: false, use: '【特殊演出（大）】Boldだと、画面の統一感が崩壊してしまう場合に使う。' },
      { variation: 'Display/XL/Bold',     fontSize: 20, fontWeight: 700, isLink: false, use: '【特殊演出（中）】ログイン画面、LP、特に強調したい数字などで使用。\n「期待感」「インパクト」などを表現したい場合の特別文字。' },
      { variation: 'Display/XL/Regular',  fontSize: 20, fontWeight: 300, isLink: false, use: '【特殊演出（中）】Boldだと、画面の統一感が崩壊してしまう場合に使う。' },
    ],
  },
  {
    id: 'title',
    title: 'Title',
    descriptions: [
      'ページ全体のテーマを示す「看板」。1画面につき1回、最上部で使用。',
    ],
    entries: [
      { variation: 'Title/2XL/Bold',    fontSize: 24, fontWeight: 700, isLink: false, use: '【ページ看板（大）】主要な画面の最上部で使用。\n1画面につき1つのみ。これが標準。' },
      { variation: 'Title/2XL/Regular', fontSize: 24, fontWeight: 300, isLink: false, use: '【ページ看板（大）】Boldだと、画面の統一感が崩壊してしまう場合に使用。' },
      { variation: 'Title/XL/Bold',     fontSize: 20, fontWeight: 700, isLink: false, use: '【ページ看板（中）】2XLだと強調しすぎの場合に使用。\n1画面につき1つのみ。' },
      { variation: 'Title/XL/Regular',  fontSize: 20, fontWeight: 300, isLink: false, use: '【ページ看板（中）】Boldだと、画面の統一感が崩壊してしまう場合に使用。' },
      { variation: 'Title/L/Bold',      fontSize: 16, fontWeight: 700, isLink: false, use: '【ページ看板（小）】設定画面や、情報量の多い画面の見出し。\n1画面につき1つのみ。' },
      { variation: 'Title/L/Regular',   fontSize: 16, fontWeight: 300, isLink: false, use: '【ページ看板（小）】Boldだと、画面の統一感が崩壊してしまう場合に使用。' },
    ],
  },
  {
    id: 'head',
    title: 'Head',
    descriptions: [
      '各セクションやコンテンツの「区切り」「ラベル」。',
      'サイズは「Title」>「Head」≧「Body」。',
    ],
    entries: [
      { variation: 'Head/L/Bold',    fontSize: 16, fontWeight: 700, isLink: false, use: '【セクション見出し（大）】コンテンツの大きな塊を分ける区切り。\nサイズはTitle > Head ≧ Body' },
      { variation: 'Head/L/Regular', fontSize: 16, fontWeight: 300, isLink: false, use: '【セクション見出し（大）】見出しよりも、中の情報を強調させたい場合に使用。\nサイズはTitle > Head ≧ Body' },
      { variation: 'Head/M/Bold',    fontSize: 14, fontWeight: 700, isLink: false, use: '【セクション見出し（中）】カード内の題名や、セクション内の中見出し。\nサイズはTitle > Head ≧ Body' },
      { variation: 'Head/M/Regular', fontSize: 14, fontWeight: 300, isLink: false, use: '【セクション見出し（中）】見出しよりも、中の情報を強調させたい場合に使用。\nサイズはTitle > Head ≧ Body' },
      { variation: 'Head/S/Bold',    fontSize: 12, fontWeight: 700, isLink: false, use: '【セクション見出し（小）】情報の最小単位のグループ分けや、項目名（ラベル）に使用。\nサイズはTitle > Head ≧ Body' },
      { variation: 'Head/S/Regular', fontSize: 12, fontWeight: 300, isLink: false, use: '【セクション見出し（小）】見出しよりも、中の情報を強調させたい場合に使用。\nサイズはTitle > Head ≧ Body' },
    ],
  },
  {
    id: 'body',
    title: 'Body',
    descriptions: [
      'プロダクトの「読みやすさ」を支える標準テキスト。「本文」や「リスト」。',
    ],
    entries: [
      { variation: 'Body/M/Bold',    fontSize: 14, fontWeight: 700, isLink: false, use: '【強調/ボタン】本文中の強調や、ボタン内のラベルなど。' },
      { variation: 'Body/M/Regular', fontSize: 14, fontWeight: 300, isLink: false, use: '【本文】標準テキスト。説明文、リスト、入力値に使用。' },
    ],
  },
  {
    id: 'sub-text',
    title: 'Sub Text',
    descriptions: [
      '本文よりも一歩引いた「補足」。読ませたい文の最小表現。',
    ],
    entries: [
      { variation: 'Sub Text/S/Bold',    fontSize: 12, fontWeight: 700, isLink: false, use: '【補足強調】補足情報の中でも視認性を高めたい場合に使用。' },
      { variation: 'Sub Text/S/Regular', fontSize: 12, fontWeight: 300, isLink: false, use: '【補足】本文に付随する補足情報、メタデータ（日付・投稿者など）に使用。' },
    ],
  },
  {
    id: 'caption',
    title: 'Caption',
    descriptions: [
      'UIの細部を支える最小単位のテキスト。「注釈」「図説」。',
      'サイズは「Body」>「Sub Text」≧「Caption」。',
    ],
    entries: [
      { variation: 'Caption/M/Bold',    fontSize: 14, fontWeight: 700, isLink: false, use: '【注釈強調（大）】非常に小さなスペース（バッジの中など）での強調用。' },
      { variation: 'Caption/M/Regular', fontSize: 14, fontWeight: 300, isLink: false, use: '【注釈（大）】フォーム下の注釈、エラーメッセージ、図説に使用。\nサイズはBody > Sub Text ≧ Caption' },
      { variation: 'Caption/S/Bold',    fontSize: 12, fontWeight: 700, isLink: false, use: '【注釈強調（中）】非常に小さなスペース（バッジの中など）での強調用。' },
      { variation: 'Caption/S/Regular', fontSize: 12, fontWeight: 300, isLink: false, use: '【注釈（中）】フォーム下の注釈、エラーメッセージ、図説に使用。\nサイズはBody > Sub Text ≧ Caption' },
      { variation: 'Caption/XS/Bold',   fontSize: 10, fontWeight: 700, isLink: false, use: '【注釈強調（小）】非常に小さなスペース（バッジの中など）での強調用。' },
      { variation: 'Caption/XS/Regular',fontSize: 10, fontWeight: 300, isLink: false, use: '【注釈（小）】フォーム下の注釈、エラーメッセージ、図説に使用。\nサイズはBody > Sub Text ≧ Caption' },
    ],
  },
  {
    id: 'link',
    title: 'Link',
    descriptions: [
      'システムを操作せず、画面遷移や関連情報を表示するための「リンクテキスト」。ボタンではない。',
      'アクセシビリティを考慮してアンダーライン推奨。',
    ],
    entries: [
      { variation: 'Link/M/Bold',    fontSize: 14, fontWeight: 700, isLink: true, use: '【テキストリンク（中）】文章内での遷移や、情報の詳細参照に使用。\nアクション実行ではない。' },
      { variation: 'Link/M/Regular', fontSize: 14, fontWeight: 300, isLink: true, use: '【テキストリンク（中）】文章内での遷移や、情報の詳細参照に使用。\nアクション実行ではない。' },
      { variation: 'Link/S/Bold',    fontSize: 12, fontWeight: 700, isLink: true, use: '【テキストリンク（小）】文章内での遷移や、情報の詳細参照に使用。\nアクション実行ではない。' },
      { variation: 'Link/S/Regular', fontSize: 12, fontWeight: 300, isLink: true, use: '【テキストリンク（小）】文章内での遷移や、情報の詳細参照に使用。\nアクション実行ではない。' },
    ],
  },
];

// ─── 内部ヘルパー ───

/**
 * タイポグラフィセクションを生成する内部ヘルパー。
 */
function createSection({ title, descriptions, entries }) {
  const wrapper = document.createElement('div');
  wrapper.className = 'storybook-typography__section';

  // ── セクションヘッダー ──
  const header = document.createElement('div');
  header.className = 'storybook-typography__section-header';

  const titleEl = document.createElement('p');
  titleEl.className = 'storybook-typography__section-title';
  titleEl.textContent = title;
  header.appendChild(titleEl);

  descriptions.forEach((text) => {
    const p = document.createElement('p');
    p.className = 'storybook-typography__section-desc';
    p.textContent = text;
    header.appendChild(p);
  });

  wrapper.appendChild(header);

  // ── テーブルカード ──
  const card = document.createElement('div');
  card.className = 'storybook-typography__card';

  // テーブルヘッダー行
  const tableHeader = document.createElement('div');
  tableHeader.className = 'storybook-typography__table-header';

  ['Preview', 'Variation', 'Use'].forEach((label) => {
    const p = document.createElement('p');
    p.className = 'storybook-typography__table-label';
    p.textContent = label;
    tableHeader.appendChild(p);
  });

  card.appendChild(tableHeader);

  // エントリ行
  entries.forEach(({ variation, fontSize, fontWeight, isLink, use }) => {
    const row = document.createElement('div');
    row.className = 'storybook-typography__row';

    // Preview セル
    const previewCell = document.createElement('div');
    previewCell.className = 'storybook-typography__preview';

    const preview = document.createElement('span');
    preview.className = 'storybook-typography__preview-text';
    preview.textContent = 'Aa';
    preview.style.fontSize = `${fontSize}px`;
    preview.style.fontWeight = String(fontWeight);
    if (isLink) {
      preview.classList.add('storybook-typography__preview-text--link');
    }
    previewCell.appendChild(preview);

    // Variation セル
    const variationCell = document.createElement('div');
    variationCell.className = 'storybook-typography__variation';
    variationCell.textContent = variation;

    // Use セル
    const useCell = document.createElement('div');
    useCell.className = 'storybook-typography__use';
    useCell.innerHTML = use.replace(/\n/g, '<br>');

    row.appendChild(previewCell);
    row.appendChild(variationCell);
    row.appendChild(useCell);
    card.appendChild(row);
  });

  wrapper.appendChild(card);
  return wrapper;
}

/**
 * Typography ドキュメンテーションコンポーネントを生成する。
 *
 * デザインシステムのタイポグラフィ一覧（Typography）を
 * カテゴリ別・バリエーション別にカタログ形式で表示する。
 * Figma node-id: 392:4505
 *
 * @param {Object}  [props]
 * @param {string}  [props.className=''] - 追加クラス名
 * @returns {HTMLElement}
 */
export const createTypography = ({ className = '' } = {}) => {
  const root = document.createElement('div');
  root.className = ['storybook-typography', className].filter(Boolean).join(' ');

  // ── Head ──
  const head = document.createElement('div');
  head.className = 'storybook-typography__head';
  const headTitle = document.createElement('h1');
  headTitle.className = 'storybook-typography__head-title';
  headTitle.textContent = 'Typography';
  head.appendChild(headTitle);
  root.appendChild(head);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'storybook-typography__body';

  // ── 概念セクション ──
  const concept = document.createElement('div');
  concept.className = 'storybook-typography__concept';

  const conceptLabelRow = document.createElement('div');
  conceptLabelRow.className = 'storybook-typography__concept-label-row';

  const conceptLabel = document.createElement('p');
  conceptLabel.className = 'storybook-typography__concept-label';
  conceptLabel.textContent = '概念';

  const conceptTagline = document.createElement('p');
  conceptTagline.className = 'storybook-typography__concept-tagline';
  conceptTagline.textContent = 'どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。';

  conceptLabelRow.appendChild(conceptLabel);
  conceptLabelRow.appendChild(conceptTagline);
  concept.appendChild(conceptLabelRow);

  const conceptTitle = document.createElement('p');
  conceptTitle.className = 'storybook-typography__concept-title';
  conceptTitle.textContent = 'フォントシステムを7カテゴリで定義。各カテゴリはPreview / Variation / Useの表形式で構成される。';
  concept.appendChild(conceptTitle);

  body.appendChild(concept);

  TYPOGRAPHY_SECTIONS.forEach((section) => {
    body.appendChild(createSection(section));
  });

  root.appendChild(body);
  return root;
};
