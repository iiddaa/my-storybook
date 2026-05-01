import { fn } from 'storybook/test';
import { createSelect } from '../src/components/Select';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Select ページより
// node-id: 255:13677
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **選択肢から一つもしくは複数のアイテムを選べるもの。**
> 選択肢を格納するため、画面の情報量を減らすことができる。また、選択後は選択した項目のみ表示され、一目で認識できる。

---

## 基本設計

- 横幅は自由だが、**最小幅は 160px**。

| 状態 | ボーダー | 説明 |
|------|----------|------|
| 未選択 | グレー 1px（\`#d6d9db\`） | プレースホルダー表示 |
| 選択中 | 青 2px（\`#318bf7\`） | フォーカス時。下に Dropdown Menu が表示される |
| 選択済み（単数） | グレー 1px（\`#d6d9db\`） | 選択した項目名をテキストで表示 |
| 選択済み（複数） | グレー 1px（\`#d6d9db\`） | 選択した項目名をチップ（pill）で表示。× ボタンで個別削除可能 |
| Disabled | グレー 1px（\`#d6d9db\`） | 操作不可。背景グレー（\`#f7f7f8\`）、文字色薄く |

---

### 選択中の表示

選択中（open）状態では、フィールドの下に Dropdown Menu が表示される。

---

## 使用時に気をつけておくこと

- アローやプラスなどのアイコンを設けて、Dropdown Menu が出てくることを明示する。
- 選択肢が多い場合は、検索可能な Combobox を使う。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Select',
  tags: ['autodocs'],
  render: (args) => createSelect(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'open', 'filled-single', 'filled-multiple', 'disabled'],
      description:
        '表示状態（Figma の5状態に対応）',
      table: { defaultValue: { summary: 'default' } },
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト（未選択・選択中・Disabled 時に表示）',
      table: { defaultValue: { summary: '選択してください' } },
    },
    selectedValue: {
      control: 'text',
      description: '選択済み（単数）の表示値',
      table: { defaultValue: { summary: '選択した項目名' } },
    },
    selectedValues: {
      control: 'object',
      description: '選択済み（複数）のチップ値リスト',
    },
    options: {
      control: 'object',
      description: 'ドロップダウンの選択肢（state が open のときに表示）',
    },
    onSelect: { action: 'select' },
    onRemoveChip: { action: 'removeChip' },
  },
  args: {
    state: 'default',
    placeholder: '選択してください',
    selectedValue: '選択した項目名',
    selectedValues: ['選択した項目名', '選択した項目名'],
    options: ['選択肢_1', '選択肢_2', '選択肢_3'],
    onSelect: fn(),
    onRemoveChip: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default（未選択）
// ─────────────────────────────────────────────────────────────
/** 未選択状態。プレースホルダーを表示。ボーダーはグレー 1px。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Open（選択中）
// ─────────────────────────────────────────────────────────────
/**
 * 選択中状態。フィールドが青いボーダー 2px になり、
 * 下に Dropdown Menu（選択肢リスト）が表示される。
 */
export const Open = {
  parameters: {
    docs: {
      description: {
        story:
          '選択中（フォーカス）状態。ボーダーが青 2px（`#318bf7`）になり、フィールド下に Dropdown Menu が表示される（Figma「選択中の表示」）。',
      },
    },
  },
  args: {
    state: 'open',
    options: ['選択肢_1', '選択肢_2', '選択肢_3'],
  },
};

// ─────────────────────────────────────────────────────────────
// FilledSingle（選択済み・単数）
// ─────────────────────────────────────────────────────────────
/** 選択済み（単数）状態。選択した項目名をテキストで表示。ボーダーはグレー 1px。 */
export const FilledSingle = {
  parameters: {
    docs: {
      description: {
        story: '選択済み（単数）。選択した項目名がフィールドに表示される（Figma「選択済み（単数）」）。',
      },
    },
  },
  args: {
    state: 'filled-single',
    selectedValue: '選択した項目名',
  },
};

// ─────────────────────────────────────────────────────────────
// FilledMultiple（選択済み・複数）
// ─────────────────────────────────────────────────────────────
/**
 * 選択済み（複数）状態。選択した項目名をチップ（pill）形式で表示する。
 * 各チップの × ボタンで個別削除が可能。
 */
export const FilledMultiple = {
  parameters: {
    docs: {
      description: {
        story:
          '選択済み（複数）。チップ（pill）形式で選択値を表示。× で個別削除できる（Figma「選択済み（複数）」）。',
      },
    },
  },
  args: {
    state: 'filled-multiple',
    selectedValues: ['選択した項目名', '選択した項目名'],
  },
};

// ─────────────────────────────────────────────────────────────
// Disabled
// ─────────────────────────────────────────────────────────────
/** 操作不可状態。背景グレー（`#f7f7f8`）、テキスト・アイコン色が薄くなる。 */
export const Disabled = {
  parameters: {
    docs: {
      description: {
        story:
          'Disabled 状態。背景が `#f7f7f8`、プレースホルダー色が `#adb2b8` に変化し操作不可になる（Figma「Disabled」）。',
      },
    },
  },
  args: {
    state: 'disabled',
  },
};
