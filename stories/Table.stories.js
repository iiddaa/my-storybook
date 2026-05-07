import { fn } from 'storybook/test';
import { createTable } from '../src/components/Table';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Table ページより
// node-id: 230:4573
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **表形式で複数の情報を表示するもの。**
> 情報がルールに沿って整理されており、ユーザーは確認、比較、操作しやすくなる。

---

## 基本設計

### 構造

| 要素 | 説明 |
|------|------|
| Table Header | 1行目のヘッダー。背景 \`#f7f7f8\`、テキスト 12px / \`#515a65\`。ソート可能なカラムにはソートアイコンを表示する |
| Table Row | データ行。背景白、ボトムボーダー \`#d6d9db 1px\`。padding \`12px\` |
| Checkbox | 行選択用チェックボックス（左端） |
| Action Button | 操作ボタン（右端）。三次ボタンスタイル（背景 \`#eaf3fe\`、テキスト \`#318bf7\`） |

### 幅サイズ

- 1行目のHeaderにHeaderItemが並ぶ。**ヘッダーアイテムの横幅はBodyItemに合わせる**
- Table1行に、複数のitemを並べることができる
  - 左寄せで、横幅はコンテンツに合わせて数値を指定する。**可変幅（flex）も可能**
  - 各Itemの間は **24px** あける
  - ボタンは **右寄せ**

### カラム定義（\`columns\` prop）

| プロパティ | 型 | 説明 |
|---|---|---|
| \`key\` | string | 行データのキー |
| \`label\` | string | ヘッダーに表示するラベル |
| \`width\` | string | 固定幅（例: \`'60px'\`）。未指定で flex: 1（可変幅） |
| \`sortable\` | boolean | ソートアイコンを表示するか |

### セルデータ（\`rows\` prop）

各行はオブジェクト。セル値は文字列のほか、\`{ main, sub }\` 形式でサブテキスト付きの2行表示も可能。

\`\`\`js
{ main: '店舗名テキスト', sub: '株式会社〇〇' }
\`\`\`

---

## 使用時に気をつけておくこと

- 必要な情報のみを配置する。Itemの並び順や整列ルールを一貫させる。
- 可読性を最優先し、装飾は最小限に抑える。
- どんな値が入るかを事前に想定し、最適な行の高さを指定する。Itemの情報量によって高さは可変せず、**一定の高さに揃える**。
- 操作可能なボタンなどは、常に表示されていることが望ましい。スクロールしないと出てこない、スクロールすると隠れてしまう、などは避ける。
`;

// ─────────────────────────────────────────────────────────────
// サンプルデータ（Figma の「店舗一覧」より）
// ─────────────────────────────────────────────────────────────
const STORE_COLUMNS = [
  { key: 'id',      label: '店番',   width: '60px',  sortable: true },
  { key: 'store',   label: '店舗名', width: '200px', sortable: true },
  { key: 'brand',   label: 'ブランド', width: '200px' },
  { key: 'group',   label: 'グループ', width: '260px' },
  { key: 'updated', label: '更新日時', sortable: true },
];

const STORE_ROWS = [
  {
    id: '37018',
    store: { sub: '株式会社心', main: '食べ飲み放題 焼肉ダイニング' },
    brand: '焼肉ダイニング ちからや',
    group: '横浜エリア / 焼肉ダイニングちからや DOURAKU',
    updated: '2025.09.01 12:41',
  },
  {
    id: '37019',
    store: { sub: '株式会社心', main: '餃子ノ酒場 太陽ホエール 野毛本店' },
    brand: '餃子ノ酒場 太陽ホエールホエール',
    group: '太陽ホエール / クチコミ4.0以上',
    updated: '2025.09.01 12:41',
  },
  {
    id: '37020',
    store: { sub: '株式会社心', main: '個室居酒屋 鳥邸 天神駅前店' },
    brand: '鳥邸',
    group: '札幌エリア',
    updated: '2025.09.01 12:41',
  },
  {
    id: '37021',
    store: { sub: '株式会社心', main: '食べ飲み放題 焼肉ダイニング' },
    brand: '焼肉ダイニング ちからや',
    group: '横浜エリア / 焼肉ダイニングちからや DOURAKU',
    updated: '2025.09.01 12:41',
  },
];

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Table',
  tags: ['autodocs'],
  render: (args) => createTable(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'テーブル上部に表示するタイトル',
      table: { defaultValue: { summary: '' } },
    },
    columns: {
      control: 'object',
      description: 'カラム定義（key / label / width / sortable）',
    },
    rows: {
      control: 'object',
      description: '行データ。セル値は文字列または { main, sub } 形式',
    },
    showCheckbox: {
      control: 'boolean',
      description: 'チェックボックスを表示するか',
      table: { defaultValue: { summary: 'true' } },
    },
    showAction: {
      control: 'boolean',
      description: '行ごとのアクションボタンを表示するか',
      table: { defaultValue: { summary: 'true' } },
    },
    actionLabel: {
      control: 'text',
      description: 'アクションボタンのラベル',
      table: { defaultValue: { summary: '編集' } },
    },
    onAction: { action: 'action' },
    onSort:   { action: 'sort' },
  },
  args: {
    title: '店舗一覧',
    columns: STORE_COLUMNS,
    rows: STORE_ROWS,
    showCheckbox: true,
    showAction: true,
    actionLabel: '編集',
    onAction: fn(),
    onSort: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default（基本テーブル）
// ─────────────────────────────────────────────────────────────
/**
 * Figma「店舗一覧」に対応したサンプルデータを使用した基本テーブル。
 * チェックボックス・ソートアイコン・「編集」ボタンを含む。
 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// NoCheckbox（チェックボックスなし）
// ─────────────────────────────────────────────────────────────
/** チェックボックスを非表示にしたテーブル。一括選択が不要な場面に使用。 */
export const NoCheckbox = {
  parameters: {
    docs: {
      description: {
        story: 'チェックボックスを非表示にしたバリエーション（`showCheckbox: false`）。',
      },
    },
  },
  args: {
    showCheckbox: false,
  },
};

// ─────────────────────────────────────────────────────────────
// NoAction（アクションボタンなし）
// ─────────────────────────────────────────────────────────────
/** 行ごとのアクションボタンを非表示にしたテーブル。閲覧専用一覧などに使用。 */
export const NoAction = {
  parameters: {
    docs: {
      description: {
        story: 'アクションボタンを非表示にしたバリエーション（`showAction: false`）。',
      },
    },
  },
  args: {
    showAction: false,
  },
};

// ─────────────────────────────────────────────────────────────
// MinimalColumns（カラム最小構成）
// ─────────────────────────────────────────────────────────────
/**
 * カラムを最小限に絞ったシンプルなテーブル。
 * 固定幅・可変幅（flex）カラムの使い方を示す。
 */
export const MinimalColumns = {
  parameters: {
    docs: {
      description: {
        story:
          '固定幅と可変幅（flex）カラムの混在例。未指定のカラムは `flex: 1` で残り幅を埋める。',
      },
    },
  },
  args: {
    title: 'シンプルテーブル',
    columns: [
      { key: 'id',    label: 'ID',   width: '80px', sortable: true },
      { key: 'name',  label: '名前', sortable: true },
      { key: 'date',  label: '日付', width: '140px' },
    ],
    rows: [
      { id: '001', name: 'サンプル店舗 A', date: '2025.09.01' },
      { id: '002', name: 'サンプル店舗 B', date: '2025.09.02' },
      { id: '003', name: 'サンプル店舗 C', date: '2025.09.03' },
    ],
  },
};
