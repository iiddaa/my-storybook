import { fn } from 'storybook/test';
import { createFileObject } from '../src/components/FileObject';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" File Object ページより
// node-id: 474:10002
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **アップロードしたファイルを確認・削除できるもの。**

---

## 基本設計

- 横幅は自由だが、**最小幅は 240px**。

| 要素 | 内容 |
|------|------|
| ドキュメントアイコン | 32px、左端に配置 |
| ファイル名 | W6 / 14px / \`#222\`。長い場合は末尾「...」で省略 |
| ファイルサイズ | W3 / 12px / \`#858c94\`（ミュートカラー） |
| × ボタン | 削除アクション、右端に配置 |

---

## 使用時に気をつけておくこと

- 同一画面上では、File Object のサイズは統一させる。
  - FileName が長い場合は改行せずに、末尾「...」で省略する。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'FileObject',
  tags: ['autodocs'],
  render: (args) => createFileObject(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    fileName: {
      control: 'text',
      description: 'ファイル名',
      table: { defaultValue: { summary: 'FileName.csv' } },
    },
    fileSize: {
      control: 'text',
      description: 'ファイルサイズ文字列（例: 88KB）。省略時は非表示',
      table: { defaultValue: { summary: '' } },
    },
    onRemove: { action: 'remove' },
  },
  args: {
    fileName: 'FileName.csv',
    fileSize: '88KB',
    onRemove: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/** Figmaの基本設計に沿った標準形。ファイル名・サイズ・削除ボタン付き。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// LongFileName（長いファイル名）
// ─────────────────────────────────────────────────────────────
/**
 * ファイル名が長い場合の表示確認。
 * 改行せずに末尾「...」で省略される（Figmaガイドライン）。
 */
export const LongFileName = {
  parameters: {
    docs: {
      description: {
        story:
          'FileName が長い場合は改行せず末尾「...」で省略する（Figma 使用時の注意）。',
      },
    },
  },
  args: {
    fileName: 'very-long-filename-that-should-be-truncated-with-ellipsis-2024.csv',
    fileSize: '1.2MB',
  },
};

// ─────────────────────────────────────────────────────────────
// NoSize（サイズ非表示）
// ─────────────────────────────────────────────────────────────
/** ファイルサイズを省略した構成。fileSize を空にするとサイズ行が非表示になる。 */
export const NoSize = {
  parameters: {
    docs: {
      description: {
        story: 'fileSize を省略するとサイズ行が非表示になる。',
      },
    },
  },
  args: {
    fileName: 'FileName.csv',
    fileSize: '',
  },
};
