import { createComboBox } from '../src/components/ComboBox';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" ComboBox ページより
// node-id: 252:12970
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **多数の選択肢の中から検索し、一つもしくは複数のアイテムを選べるもの。選択肢を格納するため、画面の情報量を減らすことができる。また、選択後は選択した項目のみ表示され、一目で認識できる。**

---

## 基本設計

### 状態バリエーション

| 状態 | 説明 |
|------|------|
| デフォルト | 未選択。プレースホルダーを表示。 |
| 選択中（フォーカス） | フィールドがアクティブ。ボーダー \`#318BF7\`（2px）に変化。ドロップダウンが開く。 |
| 入力時 | テキスト入力で選択肢をリアルタイムフィルタリング。 |
| 選択済み（単数） | 選択した項目名をフィールドに表示。 |
| 選択済み（複数） | 選択済みアイテムをラベル（ピル型チップ）としてフィールド内に並べる。各チップに削除ボタン（×）。 |
| 候補なし | 入力に一致する選択肢がない場合に「一致する選択肢がありません。」を表示。 |
| Disabled（デフォルト） | 背景 \`#F7F7F8\`。テキスト・アイコンを \`#ADB2B8\` でグレーアウト。 |
| Disabled（選択済み） | 無効化状態で選択済みチップを表示。チップ背景 \`#EFF0F1\`、テキスト \`#ADB2B8\`。 |

### フィールド仕様

| 要素 | 仕様 |
|------|------|
| ボーダー（デフォルト） | \`1px solid #D6D9DB\` |
| ボーダー（アクティブ） | \`2px solid #318BF7\` |
| パディング | \`8px 12px\` |
| border-radius | \`4px\` |
| 最小幅 | 160px |

### 選択済みラベル（チップ）

| 要素 | 仕様 |
|------|------|
| 背景色 | \`#EAF3FE\` |
| テキスト | 12px Regular、\`#222222\` |
| 高さ | 20px |
| padding | \`2px 8px\` |
| border-radius | 99px（ピル型） |
| 削除アイコン | 12×12px、クリックでチップ削除 |

### ドロップダウン

- box-shadow: \`0px 2px 10px 0px rgba(0,0,0,0.15)\`
- ホバー色: \`#EAF3FE\`
- 候補なし文言: 「一致する選択肢がありません。」（文字色 \`#858C94\`）

---

## 使用時に気をつけておくこと

- 選択肢が多い場合は検索可能な ComboBox を使用し、不要な場合は Select を使う。
- 選択肢を隠す Checkbox・RadioButton との使い分けを確認してから使用すること。
`;

// ─────────────────────────────────────────────────────────────
// サンプルデータ（Figma 使用例より）
// ─────────────────────────────────────────────────────────────
const INDUSTRY_OPTIONS = [
  '炭酸飲料業者',
  '研磨剤製造業者',
  '農産物卸売業者',
  '水産業者',
  'サンプル_1業者',
  'サンプル_2業者',
  'サンプル_3業者',
  'サンプル_4業者',
  'サンプル_5業者',
];

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'ComboBox',
  tags: ['autodocs'],
  render: (args) => createComboBox(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
      description: '選択肢の配列',
    },
    selectedValues: {
      control: 'object',
      description: '初期選択済みの値の配列',
      table: { defaultValue: { summary: '[]' } },
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
      table: { defaultValue: { summary: '選択してください' } },
    },
    multiple: {
      control: 'boolean',
      description: '複数選択を許可するか',
      table: { defaultValue: { summary: 'true' } },
    },
    disabled: {
      control: 'boolean',
      description: '無効化状態',
      table: { defaultValue: { summary: 'false' } },
    },
    onSelect: {
      action: 'selected',
      description: '選択時コールバック (value: string)',
      table: { category: 'Events' },
    },
    onRemove: {
      action: 'removed',
      description: 'チップ削除時コールバック (value: string)',
      table: { category: 'Events' },
    },
  },
  args: {
    options: INDUSTRY_OPTIONS,
    selectedValues: [],
    placeholder: '選択してください',
    multiple: true,
    disabled: false,
  },
};

// ─────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────

/** デフォルト。未選択状態。クリックでドロップダウンが開く。 */
export const Default = {};

/** 選択済み（単数）。1件選択された状態。 */
export const SelectedSingle = {
  name: '選択済み（単数）',
  args: {
    multiple: false,
    selectedValues: ['炭酸飲料業者'],
  },
};

/** 選択済み（複数）。複数件が選択されチップとして表示された状態（Figma 使用例）。 */
export const SelectedMultiple = {
  name: '選択済み（複数）',
  args: {
    selectedValues: ['炭酸飲料業者', '研磨剤製造業者', '農産物卸売業者'],
  },
};

/** 選択済み（多い場合）。選択件数が多くチップが折り返される状態。 */
export const SelectedMany = {
  name: '選択済み（多い場合）',
  args: {
    selectedValues: ['炭酸飲料業者', '研磨剤製造業者', '農産物卸売業者', '水産業者', 'サンプル_1業者'],
  },
};

/** Disabled（デフォルト）。操作不可・未選択の状態。 */
export const DisabledDefault = {
  name: 'Disabled（デフォルト）',
  args: {
    disabled: true,
  },
};

/** Disabled（選択済み）。操作不可・選択済みチップが表示された状態。 */
export const DisabledSelected = {
  name: 'Disabled（選択済み）',
  args: {
    disabled: true,
    selectedValues: ['炭酸飲料業者', '研磨剤製造業者'],
  },
};

/**
 * 全状態を縦並びで比較するビュー。
 * Storybook の Controls は使用不可（render を直接定義）。
 */
export const AllStates = {
  name: '状態比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 32px; max-width: 400px;';

    const states = [
      { label: 'デフォルト',
        args: { options: INDUSTRY_OPTIONS, selectedValues: [], multiple: true } },
      { label: '選択済み（単数）',
        args: { options: INDUSTRY_OPTIONS, selectedValues: ['炭酸飲料業者'], multiple: false } },
      { label: '選択済み（複数）',
        args: { options: INDUSTRY_OPTIONS, selectedValues: ['炭酸飲料業者', '研磨剤製造業者', '農産物卸売業者'], multiple: true } },
      { label: 'Disabled（デフォルト）',
        args: { options: INDUSTRY_OPTIONS, selectedValues: [], disabled: true } },
      { label: 'Disabled（選択済み）',
        args: { options: INDUSTRY_OPTIONS, selectedValues: ['炭酸飲料業者', '研磨剤製造業者'], disabled: true } },
    ];

    states.forEach(({ label, args }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';

      const heading = document.createElement('p');
      heading.style.cssText =
        "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;";
      heading.textContent = label;

      section.appendChild(heading);
      section.appendChild(createComboBox(args));
      wrapper.appendChild(section);
    });

    return wrapper;
  },
};
