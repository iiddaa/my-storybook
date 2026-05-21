import { createAccordionList } from '../src/components/AccordionList';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" AccordionList ページより
// node-id: 318:3913
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **全体像を把握しやすくするために見出しのみを表示し、自由に開閉して内容を確認できる。**

---

## 基本設計

AccordionList には \`list\`（シンプルなアコーディオン）と \`faq\`（Q&A形式）の2パターンがある。

### List パターン

| 状態 | 説明 |
|------|------|
| Default | \`caret_right\` アイコン + 見出し（Head/L/Bold 16px）、背景なし |
| hover | 背景 \`#F7F7F8\` |
| 展開時 | \`caret_down\` アイコンに切り替わり、本文（Body/M/Regular 14px）が表示される |

- アイテム間には区切り線（\`1px solid #EFF0F1\`）を設ける
- 本文はアイコン幅（24px）＋gap（4px）= **28px** インデント

### FAQ パターン

| 要素 | スタイル |
|------|---------|
| Q. / A. ラベル | Head/L/Bold 16px、color \`#318BF7\` |
| 質問 / 回答テキスト | Head/L/Regular 16px、color \`#222222\` |
| arrow アイコン | 20×20px（閉じている: ↓、開いている: ↑） |

- 質問行の padding: \`8px\`、borderRadius: \`8px\`
- hover 時: 質問行の背景 \`#F5F9FF\`
- 展開時: 回答行（A. + 回答テキスト）が質問行の下に表示される

---

## 使用時に気をつけておくこと

- **対象となる情報が、展開できることが直感的に理解できること**
- **何が包含されているのかが予想できる見出しを設けること**
`;

// ─────────────────────────────────────────────────────────────
// サンプルデータ
// ─────────────────────────────────────────────────────────────

const LIST_ITEMS = [
  { heading: '見出し', content: '中身の文章' },
  { heading: '見出し', content: '中身の文章' },
  { heading: '見出し', content: '中身の文章' },
];

const LIST_ITEMS_LONG = [
  {
    heading: 'とても長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い見出し',
    content: 'とても長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い中身の文章',
  },
  { heading: '見出し', content: '中身の文章' },
];

const FAQ_ITEMS = [
  { question: '質問', answer: '答え' },
  { question: '質問', answer: '答え' },
  { question: '質問', answer: '答え' },
];

const FAQ_ITEMS_LONG = [
  {
    question: 'とても長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い質問',
    answer: 'とても長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い質問の答え',
  },
  { question: '質問', answer: '答え' },
];

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'AccordionList',
  tags: ['autodocs'],
  render: (args) => createAccordionList(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    pattern: {
      control: 'select',
      options: ['list', 'faq'],
      description: 'シンプルなアコーディオン（list）か Q&A 形式（faq）かを選択する',
      table: { defaultValue: { summary: 'list' } },
    },
    items: {
      control: 'object',
      description:
        'アイテムの配列。pattern="list" の場合は `{ heading, content }`、pattern="faq" の場合は `{ question, answer }` の形式。',
    },
    openIndexes: {
      control: 'object',
      description: '初期状態で開いているアイテムのインデックス配列（0始まり）。',
      table: { defaultValue: { summary: '[]' } },
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────

/** List パターン。全アイテム閉じた初期状態。 */
export const Default = {
  args: {
    pattern: 'list',
    items: LIST_ITEMS,
    openIndexes: [],
  },
};

/** List パターン / 1件目が展開済みの状態。 */
export const ListExpanded = {
  name: 'List / 展開済みあり',
  args: {
    pattern: 'list',
    items: LIST_ITEMS,
    openIndexes: [0],
  },
};

/** List パターン / 長い見出し・本文の折り返しを確認する。 */
export const ListLongText = {
  name: 'List / 長いテキスト',
  args: {
    pattern: 'list',
    items: LIST_ITEMS_LONG,
    openIndexes: [0],
  },
};

/** FAQ パターン。全アイテム閉じた初期状態。 */
export const Faq = {
  name: 'FAQ パターン',
  args: {
    pattern: 'faq',
    items: FAQ_ITEMS,
    openIndexes: [],
  },
};

/** FAQ パターン / 1件目が展開済みの状態。 */
export const FaqExpanded = {
  name: 'FAQ / 展開済みあり',
  args: {
    pattern: 'faq',
    items: FAQ_ITEMS,
    openIndexes: [0],
  },
};

/** FAQ パターン / 長いテキストの折り返しを確認する。 */
export const FaqLongText = {
  name: 'FAQ / 長いテキスト',
  args: {
    pattern: 'faq',
    items: FAQ_ITEMS_LONG,
    openIndexes: [0],
  },
};

/**
 * List と FAQ の2パターンを並べて比較するビュー。
 * Storybook の Controls は使用不可（render を直接定義）。
 */
export const AllPatterns = {
  name: 'パターン比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 48px;';

    const sections = [
      {
        label: 'List パターン（1件目が展開済み）',
        args: { pattern: 'list', items: LIST_ITEMS, openIndexes: [0] },
      },
      {
        label: 'FAQ パターン（1件目が展開済み）',
        args: { pattern: 'faq', items: FAQ_ITEMS, openIndexes: [0] },
      },
    ];

    sections.forEach(({ label, args }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';

      const heading = document.createElement('p');
      heading.style.cssText =
        'font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;';
      heading.textContent = label;

      section.appendChild(heading);
      section.appendChild(createAccordionList(args));
      wrapper.appendChild(section);
    });

    return wrapper;
  },
};
