import { createProgressBar } from '../src/components/ProgressBar';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" ProgressBar ページより
// node-id: 262:14147
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ユーザー操作へのフィードバックに、ある一定以上の時間がかかる場合、全体の処理時間を可視化するために使用する。**

---

## 基本設計

| 要素 | 仕様 |
|------|------|
| トラック（背景） | 高さ 8px、background \`#EFF0F1\`、border-radius 99px |
| フィル（進捗） | 高さ 8px、background \`#318BF7\`（Blue 500）、border-radius 99px |
| 幅 | 親要素に追従（100%） |

### 進捗バリエーション（Figma インジケーター コンポーネントセットより）

| 状態 | フィル幅 |
|------|---------|
| 0%   | 0 |
| 25%  | 25% |
| 50%  | 50% |
| 75%  | 75% |
| 100% | 100% |

### 使用例（Figma「店舗情報の照合ローディング」）

テキストエリア（中央揃え）+ インジケーターの縦並びレイアウト。

\`\`\`
Apple Businessアカウントの
情報を確認中です           ← 14px Bold（label）

店舗情報を照合しています。  ← 14px Regular（description）

[████████░░░░░░░░░░░]       ← インジケーター（25%）
\`\`\`

---

## 使用時に気をつけておくこと

- 進捗を測定・推定できる処理に使用する。
  - 測定・推定できないときは LoadingArea を優先する。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'ProgressBar',
  tags: ['autodocs'],
  render: (args) => createProgressBar(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '進捗率（0〜100）',
      table: { defaultValue: { summary: '0' } },
    },
    label: {
      control: 'text',
      description: 'バー上部のタイトルテキスト（改行 \\n 可）',
      table: { defaultValue: { summary: "''" } },
    },
    description: {
      control: 'text',
      description: 'タイトル下の説明テキスト',
      table: { defaultValue: { summary: "''" } },
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────

/** 0%（初期状態）。フィルなし。 */
export const Default = {
  args: { value: 0 },
};

/** 25%。 */
export const Progress25 = {
  name: '25%',
  args: { value: 25 },
};

/** 50%。 */
export const Progress50 = {
  name: '50%',
  args: { value: 50 },
};

/** 75%。 */
export const Progress75 = {
  name: '75%',
  args: { value: 75 },
};

/** 100%（完了状態）。フィルが全幅。 */
export const Complete = {
  name: '100%（完了）',
  args: { value: 100 },
};

/**
 * Figma「店舗情報の照合ローディング」に対応する使用例。
 * label（Bold）と description（Regular）を中央揃えで表示し、その下にインジケーターを配置。
 */
export const WithText = {
  name: 'テキストあり（使用例）',
  args: {
    value: 25,
    label: 'Apple Businessアカウントの\n情報を確認中です',
    description: '店舗情報を照合しています。しばらくお待ちください。',
  },
};

/**
 * Figma「インジケーター」コンポーネントセットの5バリエーションを縦並びで比較表示。
 * Storybook の Controls は使用不可（render を直接定義）。
 */
export const AllValues = {
  name: 'バリエーション比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 24px;';

    const steps = [0, 25, 50, 75, 100];
    steps.forEach((v) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';

      const label = document.createElement('p');
      label.style.cssText =
        "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;";
      label.textContent = `${v}%`;

      section.appendChild(label);
      section.appendChild(createProgressBar({ value: v }));
      wrapper.appendChild(section);
    });

    return wrapper;
  },
};
