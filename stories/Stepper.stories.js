import { createStepper } from '../src/components/Stepper';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Stepper ページより
// node-id: 239:10033
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ユーザーが安心してゴールに向かえるために、タスクを「わかりやすい手順」で表示し、全体像や現在地を把握できるもの。**

---

## 基本設計

### ステータス

| ステータス | サークル色 | ラベル色 | 説明 |
|-----------|----------|---------|------|
| Current   | \`#318BF7\`（Blue 500） | \`#222222\` | 現在進行中のステップ |
| Complete  | \`#98C5FB\`（Blue 200） | \`#858C94\` | 完了済みのステップ |
| Unvisited | \`#D6D9DB\`（Gray） | \`#858C94\` | まだ着手していないステップ |

### レイアウト

| 要素 | 仕様 |
|------|------|
| サークル | 32×32px、border-radius 99px、数字 16px Bold 白 |
| ラベル | 14px Bold、ステータスにより色が変わる |
| コネクター（完了→次） | \`#318BF7\`（青） |
| コネクター（未完了） | \`#D6D9DB\`（グレー） |
| 方向 | Horizontal（水平） / Vertical（縦） |

---

## 使用時に気をつけておくこと

- Complete（完了）・Current（進行中）・Unvisited（未着手）の3ステータスを明確に区別する。
  - 完了タスクにチェックアイコンを使うのも有効。
- 画面上部などの目につきやすい場所に配置する。スクロールしないと見えない位置はNG。
- Stepper はプロセスの道筋を示すためのもの。Breadcrumbs のようなクリック遷移操作は不要。

### Breadcrumbs との使い分け

| | Breadcrumbs | Stepper |
|--|-------------|---------|
| **主な目的** | 上部の階層に戻るため | プロセスを示して安心させるため |
| **示すもの** | 内部構造（例：一覧 ＞ 詳細） | プロセスの道筋（例：STEP1 → STEP2 → STEP3） |
`;

// ─────────────────────────────────────────────────────────────
// サンプルデータ（Figma 使用例より）
// ─────────────────────────────────────────────────────────────
const STEPS_4 = [
  { label: '基本情報の入力',   status: 'complete'  },
  { label: '利用方法の設定',   status: 'current'   },
  { label: '公開範囲の設定',   status: 'unvisited' },
  { label: '最終確認',         status: 'unvisited' },
];

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Stepper',
  tags: ['autodocs'],
  render: (args) => createStepper(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '水平（horizontal）または縦（vertical）方向',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    steps: {
      control: 'object',
      description:
        'ステップの配列。各要素は `{ label: string, status: "current" | "complete" | "unvisited" }` の形式。',
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────

/** Horizontal / 2ステップ目が現在進行中（Figma 使用例）。 */
export const Default = {
  args: {
    direction: 'horizontal',
    steps: STEPS_4,
  },
};

/** Vertical / 2ステップ目が現在進行中。 */
export const Vertical = {
  name: 'Vertical',
  args: {
    direction: 'vertical',
    steps: STEPS_4,
  },
};

/** 先頭ステップが Current（開始直後）。 */
export const FirstStep = {
  name: '1ステップ目（開始直後）',
  args: {
    direction: 'horizontal',
    steps: [
      { label: '基本情報の入力', status: 'current'   },
      { label: '利用方法の設定', status: 'unvisited' },
      { label: '公開範囲の設定', status: 'unvisited' },
      { label: '最終確認',       status: 'unvisited' },
    ],
  },
};

/** 最終ステップが Current（完了直前）。 */
export const LastStep = {
  name: '最終ステップ（完了直前）',
  args: {
    direction: 'horizontal',
    steps: [
      { label: '基本情報の入力', status: 'complete' },
      { label: '利用方法の設定', status: 'complete' },
      { label: '公開範囲の設定', status: 'complete' },
      { label: '最終確認',       status: 'current'  },
    ],
  },
};

/** 全ステップが Complete（完了後）。 */
export const AllComplete = {
  name: '全ステップ完了',
  args: {
    direction: 'horizontal',
    steps: [
      { label: '基本情報の入力', status: 'complete' },
      { label: '利用方法の設定', status: 'complete' },
      { label: '公開範囲の設定', status: 'complete' },
      { label: '最終確認',       status: 'complete' },
    ],
  },
};

/**
 * Horizontal / Vertical の2方向を並べて比較するビュー。
 * Storybook の Controls は使用不可（render を直接定義）。
 */
export const DirectionComparison = {
  name: '方向比較（Horizontal / Vertical）',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 48px;';

    const sections = [
      { label: 'Horizontal', args: { direction: 'horizontal', steps: STEPS_4 } },
      { label: 'Vertical',   args: { direction: 'vertical',   steps: STEPS_4 } },
    ];

    sections.forEach(({ label, args }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';

      const heading = document.createElement('p');
      heading.style.cssText =
        "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;";
      heading.textContent = label;

      section.appendChild(heading);
      section.appendChild(createStepper(args));
      wrapper.appendChild(section);
    });

    return wrapper;
  },
};
