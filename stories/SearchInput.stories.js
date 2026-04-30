import { fn } from 'storybook/test';
import { createSearchInput } from '../src/components/SearchInput';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Search Input ページより
// node-id: 219:3123
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **大量のデータから、条件に一致するものだけを探し出すもの。**

---

## 基本設計

- 横幅は自由。（固定値でも、画面幅に合わせるでもOK。）

| 状態 | ボーダー | 説明 |
|------|----------|------|
| 未入力 | グレー 1px（\`#d6d9db\`） | プレースホルダー表示 |
| フォーカス時 | 青 2px（\`#318bf7\`） | 前回の検索履歴がドロップダウンで最大 n 件表示。履歴候補クリックで検索実行。履歴がなければ候補は非表示 |
| 入力中 | 青 2px（\`#318bf7\`） | 入力テキストの下部に「〜で検索」クリッカブルエリアが表示。クリックまたは Enter で検索実行。テキストが空の状態で Enter を押すと未入力状態に戻る |
| 入力済み | グレー 1px（\`#d6d9db\`） | 検索実行後の状態 |
| Disabled | グレー 1px（\`#d6d9db\`） | 操作不可、グレー背景 |

---

## 詳細な仕様

**入力文章が長い場合**
- 改行はしない。末尾を表示する。
- 横スクロールで全文を参照できる。

---

## 使用時に気をつけておくこと

- Input は「情報を登録する」ためのものだが、Search Input は「今ある情報の中から見つけ出す」ためのもの。
  - 「何を入力するか」よりも「入力した結果、何が出るか」に価値がある。
- タイトルラベルは不要。配置する場所やアイコンで、検索窓だと認知させることは可能。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'SearchInput',
  tags: ['autodocs'],
  render: (args) => createSearchInput(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
      table: { defaultValue: { summary: '店舗名、店番、住所で検索' } },
    },
    value: {
      control: 'text',
      description: '入力値（state が active / filled のときに使用）',
      table: { defaultValue: { summary: '' } },
    },
    state: {
      control: 'select',
      options: ['default', 'focus', 'active', 'filled', 'disabled'],
      description: '表示状態（Figma の5状態に対応）',
      table: { defaultValue: { summary: 'default' } },
    },
    historyItems: {
      control: 'object',
      description: '検索履歴リスト（state が focus のときにドロップダウン表示）',
    },
    onSearch: { action: 'search' },
    onHistorySelect: { action: 'historySelect' },
  },
  args: {
    placeholder: '店舗名、店番、住所で検索',
    value: '',
    state: 'default',
    historyItems: ['前回の履歴_1', '前回の履歴_2', '前回の履歴_3'],
    onSearch: fn(),
    onHistorySelect: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default（未入力）
// ─────────────────────────────────────────────────────────────
/** 未入力状態。プレースホルダーのみ表示。ボーダーはグレー 1px。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Focus（フォーカス時）
// ─────────────────────────────────────────────────────────────
/**
 * 未入力のSearch Inputにフォーカスを当てた状態。
 * 前回の検索履歴が候補としてドロップダウン表示される。
 * 履歴候補をクリックで検索実行。履歴がなければ候補は非表示。
 */
export const Focus = {
  parameters: {
    docs: {
      description: {
        story:
          'フォーカス時。前回の検索履歴をドロップダウンで表示。候補クリックで検索実行（Figma 基本設計より）。',
      },
    },
  },
  args: {
    state: 'focus',
    historyItems: ['前回の履歴_1', '前回の履歴_2', '前回の履歴_3'],
  },
};

// ─────────────────────────────────────────────────────────────
// Active（入力中）
// ─────────────────────────────────────────────────────────────
/**
 * 入力中状態。入力テキストの下部に「〜で検索」のクリッカブルエリアが表示。
 * クリックまたは Enter で検索実行。テキストが空の状態で Enter を押すと未入力状態に戻る。
 */
export const Active = {
  parameters: {
    docs: {
      description: {
        story:
          '入力中。下部の「〜で検索」エリアをクリック or Enter で検索実行（Figma 基本設計より）。',
      },
    },
  },
  args: {
    state: 'active',
    value: '入力中のテキスト',
  },
};

// ─────────────────────────────────────────────────────────────
// Filled（入力済み）
// ─────────────────────────────────────────────────────────────
/** 検索実行後の入力済み状態。ボーダーはグレー 1px（未入力と同じ見た目）。 */
export const Filled = {
  parameters: {
    docs: {
      description: {
        story: '入力済み状態（検索実行後）。フォーカスが外れ、ボーダーがグレーに戻る。',
      },
    },
  },
  args: {
    state: 'filled',
    value: '入力済みのテキスト',
  },
};

// ─────────────────────────────────────────────────────────────
// Disabled
// ─────────────────────────────────────────────────────────────
/** 操作不可状態。背景がグレー、テキスト・アイコン色が薄くなる。 */
export const Disabled = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled 状態。操作不可。背景グレー（\`#f7f7f8\`）、アイコン・テキスト色が薄くなる。',
      },
    },
  },
  args: {
    state: 'disabled',
  },
};

// ─────────────────────────────────────────────────────────────
// LongText（入力文章が長い場合）
// ─────────────────────────────────────────────────────────────
/**
 * 入力文章が長い場合の表示確認。
 * 改行せず末尾を表示、横スクロールで全文参照可能（Figma 詳細な仕様より）。
 */
export const LongText = {
  parameters: {
    docs: {
      description: {
        story:
          '入力文章が長い場合。改行せず末尾を表示する（Figma「詳細な仕様」より）。',
      },
    },
  },
  args: {
    state: 'active',
    value: 'ストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合',
  },
};
