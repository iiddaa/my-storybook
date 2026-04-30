import { fn } from 'storybook/test';
import { createDropzone } from '../src/components/Dropzone';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Dropzone ページより
// node-id: 229:4499
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **アップロードできることを直感的に伝え、かつドラッグ&ドロップで手軽にファイルをアップロードできるもの。**

---

## 基本設計

- 横幅は自由だが、**最小幅は 512px**。
- クリック可能なのは**ボタン領域のみ**。ドロップゾーン全体はクリックに反応しない。

| 状態 | 背景色 | ボーダー |
|------|--------|----------|
| デフォルト | グレー（\`#f7f7f8\`） | グレー点線（\`#d6d9db\`） |
| ドラッグ時 | 水色（\`#eaf3fe\`） | 青い点線（\`#318bf7\`） |

---

## 使用時に気をつけておくこと

- ファイルのアップロードは、基本的にはユーザーにとって便利な Dropzone を使う。
  - ただし、以下のパターンの場合は Dropzone ではなく、他のパターンを利用する。
    - i. 領域が狭いとき
    - ii. 全体のバランスを見て、情報量を調整したいとき
    - iii. 他コンテンツとの一貫性を保ちたいとき
- ドラッグ&ドロップエリアのみの使用（ボタン無し）は不可。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Dropzone',
  tags: ['autodocs'],
  render: (args) => createDropzone(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    hint: {
      control: 'text',
      description: 'ファイル制約テキスト（サイズ・件数・ファイル形式など）',
      table: { defaultValue: { summary: '25MB以下 / 最大n件まで / CSVのみ' } },
    },
    isDragOver: {
      control: 'boolean',
      description:
        'ドラッグオーバー状態（Storybook確認用）。実際の操作ではドラッグイベントで自動的に切り替わる',
      table: { defaultValue: { summary: 'false' } },
    },
    onSelectFile: { action: 'selectFile' },
    onDrop: { action: 'drop' },
  },
  args: {
    hint: '25MB以下 / 最大n件まで / CSVのみ',
    isDragOver: false,
    onSelectFile: fn(),
    onDrop: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default（デフォルト）
// ─────────────────────────────────────────────────────────────
/** デフォルト状態。グレー背景・グレー点線ボーダー。クリック可能なのはボタン領域のみ。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// DragOver（ドラッグ時）
// ─────────────────────────────────────────────────────────────
/**
 * ファイルをドラッグしてエリアにカーソルを合わせた状態。
 * 背景が水色（#eaf3fe）、ボーダーが青（#318bf7）になる。
 * Figmaの基本設計「ファイルをドラッグ時」に相当。
 */
export const DragOver = {
  parameters: {
    docs: {
      description: {
        story:
          'ファイルをドラッグしてエリアに乗せた状態。背景・ボーダーがアクセントカラーに変化する（Figma「ファイルをドラッグ時」）。',
      },
    },
  },
  args: {
    isDragOver: true,
  },
};
