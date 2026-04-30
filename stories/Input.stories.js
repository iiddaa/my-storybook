import { fn } from 'storybook/test';
import { createInput } from '../src/components/Input';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Input ページより
// node-id: 213:3052
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ユーザーが「何を入力すべきか」を理解している前提で、その情報をテキストで入力するもの。**

---

## 基本設計

- 横幅は自由。（固定値でも、画面幅に合わせるでもOK。）

| 状態 | 背景色 | ボーダー |
|------|--------|----------|
| 未入力 | 白（\`#fff\`） | グレー 1px（\`#d6d9db\`） |
| 入力中 | 白（\`#fff\`） | 青 2px（\`#318bf7\`） |
| 入力済み | 白（\`#fff\`） | グレー 1px（\`#d6d9db\`） |
| Disabled | グレー（\`#f7f7f8\`） | グレー 1px（\`#d6d9db\`） |
| Error | 赤み（\`#fdf2f0\`） | 赤 2px（\`#eb4d38\`）＋エラーメッセージ |

---

## 使用時に気をつけておくこと

- 短い文章を入力する場合に用いる。
  - 長い文章を入力させたい場合は TextArea を用いる。
    - 項目を分割して Input を用いるのもあり。
    - 例：住所を分ける → 郵便番号、都道府県、市区町村番地、マンション名。
- 何を入力するべきかを理解しておく必要があるため、FormLabel もセットで表示する。
  - ラベルは項目名として常に表示する。
  - プレースホルダーは入力例や補足を示す。
- 最低限 3 タイプ用意する。
  - a. 入力前
  - b. 入力後
  - c. エラー
- 文字数上限を一応決めておく。
  - 文字数を超えた場合のエラー表現はプロダクト内で統一させておくこと。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Input',
  tags: ['autodocs'],
  render: (args) => createInput(args),
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
      description: 'プレースホルダーテキスト（入力例や補足を示す）',
      table: { defaultValue: { summary: '入力してください' } },
    },
    value: {
      control: 'text',
      description: '入力値。state が active / filled / error のとき表示される',
      table: { defaultValue: { summary: '' } },
    },
    state: {
      control: 'select',
      options: ['default', 'active', 'filled', 'disabled', 'error'],
      description: '表示状態（Figma の5状態に対応）',
      table: { defaultValue: { summary: 'default' } },
    },
    errorMessage: {
      control: 'text',
      description: 'エラー時に表示するメッセージ（state が error のときのみ表示）',
      table: { defaultValue: { summary: '形式に不備があります。' } },
    },
    onChange: { action: 'change' },
  },
  args: {
    placeholder: '入力してください',
    value: '',
    state: 'default',
    errorMessage: '形式に不備があります。',
    onChange: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default（未入力）
// ─────────────────────────────────────────────────────────────
/** 未入力状態。プレースホルダーのみ表示。ボーダーはグレー 1px。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Active（入力中）
// ─────────────────────────────────────────────────────────────
/**
 * 入力中状態。フォーカス時のスタイル（青いボーダー 2px）。
 * 実際のブラウザ操作では :focus-visible でも同じスタイルが適用される。
 */
export const Active = {
  parameters: {
    docs: {
      description: {
        story: '入力中（フォーカス）状態。ボーダーが青 2px（\`#318bf7\`）になる。',
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
/** 入力済み状態。ボーダーはグレー 1px（未入力と同じ見た目）。 */
export const Filled = {
  parameters: {
    docs: {
      description: {
        story: '入力済み状態。フォーカスが外れた後の見た目。',
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
/** 操作不可状態。グレー背景、テキスト色も薄く表示。 */
export const Disabled = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled 状態。背景がグレー（\`#f7f7f8\`）、テキスト・プレースホルダーが薄くなる。',
      },
    },
  },
  args: {
    state: 'disabled',
  },
};

// ─────────────────────────────────────────────────────────────
// Error
// ─────────────────────────────────────────────────────────────
/**
 * エラー状態。赤みがかった背景と赤いボーダー 2px。
 * アラートアイコン付きのエラーメッセージが下部に表示される。
 */
export const Error = {
  parameters: {
    docs: {
      description: {
        story:
          'エラー状態。背景が \`#fdf2f0\`、ボーダーが赤 2px（\`#eb4d38\`）。アラートアイコン付きのエラーメッセージが下部に表示される。',
      },
    },
  },
  args: {
    state: 'error',
    value: '入力済みのテキスト',
    errorMessage: '形式に不備があります。',
  },
};
