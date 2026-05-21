import { createDatePicker } from '../src/components/DatePicker';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" DatePicker ページより
// node-id: 234:6282
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **正確な日付情報をカレンダーから直観的に入力できるもの。有り得ない日付入力を防ぐ役割も担う。**

---

## 基本設計

DatePicker には \`date\`（日付選択）と \`month\`（月選択）の2タイプがある。

### 共通仕様

- カレンダー幅: 固定 **192px**
- ヘッダー: \`← YYYY年M月（またはYYYY年） →\` の space-between レイアウト
- アイテムの border-radius: **99px**（円形またはピル型）

### type=date（日付選択）

| 要素 | サイズ | 詳細 |
|------|--------|------|
| 日付アイテム | 24×24px | 7列×n行のグリッド、gap 4px |
| 曜日ヘッダー | 24px幅 × 7列 | 日〜土、font-size 12px、color \`#858C94\` |

### type=month（月選択）

| 要素 | サイズ | 詳細 |
|------|--------|------|
| 月アイテム | 45×24px | 4列×3行のグリッド、gap 4px |

### アイテムの状態

| 状態 | テキスト色 | 背景色 |
|------|----------|--------|
| 未選択（Default） | \`#222222\` | なし |
| hover | \`#222222\` | \`#F5F9FF\` |
| 選択済み（Selected） | \`#FFFFFF\` | \`#318BF7\` |
| disabled | \`#ADB2B8\` | なし |

---

## 使用時に気をつけておくこと

**Date Picker、手動入力、Drumroll の特性を把握し、適切に使い分ける。**

| シーン | Date Picker | 手動入力 | Drumroll |
|--------|------------|---------|---------|
| 現時点から近い日付指定（投稿予定日） | 💯 分かりやすい ※今日の日付と無効日が視覚的に表現されていると良い | 🔺 | 💯 シンプルな操作かつ直感的に選択しやすい |
| 数年前の日付指定（生年月日などの絶対的な日付） | 🔺 テキスト入力ができるならOK | ⭕️ | 💯 直感的に選択しやすい |
| 年だけ・月だけ・日だけの日付指定 | 🔺 専用カレンダーを別途作成すればOK | ⭕️ | ⭕️ |
| 期間の指定 | 💯 一気に選択できる | ⭕️ | ⭕️ |
| 時間の指定 | 🔺 専用カレンダーを別途作成すればOK | ⭕️ | ⭕️ |
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'DatePicker',
  tags: ['autodocs'],
  render: (args) => createDatePicker(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'month'],
      description: '日付選択（date）か月選択（month）かを指定する',
      table: { defaultValue: { summary: 'date' } },
    },
    year: {
      control: { type: 'number', min: 1900, max: 2100 },
      description: '表示する年',
    },
    month: {
      control: { type: 'number', min: 1, max: 12 },
      description: '表示する月（1〜12）。type="date" のみ有効。',
    },
    selectedDate: {
      control: 'object',
      description:
        '選択済み日付。`{ year: number, month: number, day: number }` の形式。type="date" のみ有効。',
      table: { defaultValue: { summary: 'null' } },
    },
    selectedMonth: {
      control: 'object',
      description:
        '選択済み月。`{ year: number, month: number }` の形式。type="month" のみ有効。',
      table: { defaultValue: { summary: 'null' } },
    },
    onSelect: {
      action: 'date-selected',
      description:
        '日付または月を選択したときのコールバック。type="date" なら `{ year, month, day }`、type="month" なら `{ year, month }` を受け取る。',
      table: { category: 'Events' },
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────

/** type=date のデフォルト表示。未選択状態。 */
export const Default = {
  args: {
    type: 'date',
    year: 2025,
    month: 9,
    selectedDate: null,
  },
};

/** type=date / 日付が選択済みの状態。 */
export const DateSelected = {
  name: 'Date / 選択済み',
  args: {
    type: 'date',
    year: 2025,
    month: 9,
    selectedDate: { year: 2025, month: 9, day: 15 },
  },
};

/** type=month のデフォルト表示。12ヶ月を4列×3行で表示する。 */
export const MonthType = {
  name: 'Month type',
  args: {
    type: 'month',
    year: 2025,
    selectedMonth: null,
  },
};

/** type=month / 月が選択済みの状態。 */
export const MonthSelected = {
  name: 'Month / 選択済み',
  args: {
    type: 'month',
    year: 2025,
    selectedMonth: { year: 2025, month: 9 },
  },
};

/**
 * Date と Month の2タイプを並べて比較するビュー。
 * Storybook の Controls は使用不可（render を直接定義）。
 */
export const AllTypes = {
  name: 'タイプ比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; gap: 48px; align-items: flex-start; flex-wrap: wrap;';

    const sections = [
      {
        label: 'type=date（日付選択）',
        args: { type: 'date', year: 2025, month: 9, selectedDate: { year: 2025, month: 9, day: 15 } },
      },
      {
        label: 'type=month（月選択）',
        args: { type: 'month', year: 2025, selectedMonth: { year: 2025, month: 9 } },
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
      section.appendChild(createDatePicker(args));
      wrapper.appendChild(section);
    });

    return wrapper;
  },
};
