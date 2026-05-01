import { fn } from 'storybook/test';
import { createDropdownMenu } from '../src/components/DropdownMenu';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Dropdown Menu ページより
// node-id: 219:3200
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **可能な操作や遷移先を一時的に一覧で表示し、クリックで操作の実行または画面遷移ができるもの。**

---

## 基本設計

- 横幅は自由だが、**最小幅は 160px**。
  - メニュー名に合わせて横幅の調整可能。

### バリエーション

| バリアント | 説明 |
|-----------|------|
| アイコンあり | 各アイテムの左側にアイコンを表示。操作内容をより直感的に伝えられる |
| アイコンなし | アイコンなしのシンプルな構成 |
| マウスホバー | ホバー時にアイテム背景が \`#f7f7f8\` に変化 |
| 2階層ある場合 | 「大分類/小分類」はドリルダウン（階層）形式で表示可能。最大2階層まで。1階層目をマウスオーバーすると2階層目を表示する |

---

## 使用時に気をつけておくこと

- メニュー名が明確で、クリックで何が起こるかイメージできること。
- 一覧表示されることを考慮し、メニュー名はできるだけ短くすること。
- 選択肢の表示順序を定めること。（アクションしてほしい順、よく選ばれる順など）
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'DropdownMenu',
  tags: ['autodocs'],
  render: (args) => createDropdownMenu(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'メニューアイテムの配列。各アイテムは `{ label, icon?, children? }` の形式。`icon` は `pencil` / `sync` / `link` を指定可。`children` を持つアイテムはサブメニューを表示する',
    },
    openSubmenuIndex: {
      control: 'number',
      description:
        'サブメニューを強制表示するアイテムのインデックス（Storybook確認用）。通常はホバーで表示される',
      table: { defaultValue: { summary: 'null' } },
    },
    onSelect: { action: 'select' },
  },
  args: {
    items: [
      { label: '編集', icon: 'pencil' },
      { label: '更新', icon: 'sync' },
      { label: 'リンクをコピー', icon: 'link' },
    ],
    openSubmenuIndex: null,
    onSelect: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default（アイコンあり）
// ─────────────────────────────────────────────────────────────
/**
 * アイコンあり。各アイテムの左側にアイコンを表示する基本形。
 * Figmaの「基本設計 / アイコンあり」に相当。
 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// NoIcon（アイコンなし）
// ─────────────────────────────────────────────────────────────
/**
 * アイコンなしのシンプルな構成。
 * Figmaの「基本設計 / アイコンなし」に相当。
 */
export const NoIcon = {
  parameters: {
    docs: {
      description: {
        story: 'アイコンなし。テキストのみで構成するシンプルな形（Figma「アイコンなし」）。',
      },
    },
  },
  args: {
    items: [
      { label: '編集' },
      { label: '更新' },
      { label: 'リンクをコピー' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// Hover（マウスホバー）
// ─────────────────────────────────────────────────────────────
/**
 * アイテムにカーソルを合わせた状態。
 * 背景色が #f7f7f8 に変化する。
 * このストーリーでは最初のアイテムをホバー状態で固定表示。
 * 実際のブラウザ操作では :hover で同じスタイルが適用される。
 */
export const Hover = {
  parameters: {
    docs: {
      description: {
        story:
          'ホバー時のアイテム背景色（`#f7f7f8`）を確認するストーリー。最初のアイテムをホバー状態で固定表示（Figma「マウスホバー」）。',
      },
    },
  },
  render: (args) => {
    const menu = createDropdownMenu(args);
    const firstItem = menu.querySelector('.storybook-dropdown-menu__item');
    if (firstItem) firstItem.classList.add('storybook-dropdown-menu__item--open');
    return menu;
  },
  args: {
    items: [
      { label: 'メニュー' },
      { label: 'メニュー' },
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// Hierarchical（2階層ある場合）
// ─────────────────────────────────────────────────────────────
/**
 * 2階層のドリルダウン形式。
 * 「大分類/小分類」はドリルダウン（階層）形式で表示可能。
 * 最大2階層までとし、1階層目をマウスオーバーすると2階層目を右側に表示する。
 * このストーリーでは openSubmenuIndex=1 でサブメニューを固定表示。
 */
export const Hierarchical = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          '2階層ドリルダウン。1階層目をホバーすると右側にサブメニューが展開する（Figma「2階層ある場合」）。`openSubmenuIndex` でサブメニューの強制表示インデックスを変更できる。',
      },
    },
  },
  args: {
    items: [
      { label: 'メニュー' },
      {
        label: '1階層メニュー',
        children: [
          { label: '2階層メニュー' },
          { label: '2階層メニュー' },
          { label: '2階層メニュー' },
        ],
      },
      { label: 'メニュー' },
    ],
    openSubmenuIndex: 1,
  },
};
