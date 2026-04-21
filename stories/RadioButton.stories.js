import { fn } from 'storybook/test';
import { createRadioButton, createRadioGroup } from '../src/components/RadioButton';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0" Radio button ページより
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

選択肢から**一つを選べる**コンポーネント。
選択肢を格納せずに全て表示するため、選択肢を一覧できる。

---

## 基本構造

| 要素 | 内容 |
|------|------|
| ラジオ丸 | 16×16px の円。未選択：白背景・グレーボーダー / 選択済み：青背景・白ドット |
| ラベル | 何に対しての操作かを明示するテキスト |
| ヒントテキスト | ラベル下に表示する補足テキスト（任意） |

---

## 状態

| 状態 | 説明 |
|------|------|
| default（通常） | 未選択の初期状態 |
| hover（ホバー） | PCのみ。ラジオ丸のボーダーが青くなる |
| focused（フォーカス） | キーボード操作時にアウトラインを表示 |
| disabled（無効） | 操作不可。opacity 50% で表示 |

---

## 使用上の注意

> 参考程度に。厳格なルールというわけではない。

- 「CheckboxとRadioButtonとToggleSwitchの使い分け」を参照して適切に使い分ける
- **何に対しての操作なのか明示するためにラベルを設ける**
- **ラベルも含めてクリック / タップ領域を確保する**
- 操作をしたら即座に反応を返す、過剰なアニメーションはつけない
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'RadioButton',
  tags: ['autodocs'],
  render: (args) => createRadioButton(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: '選択肢のラベルテキスト',
    },
    value: {
      control: 'text',
      description: 'この選択肢の値',
    },
    name: {
      control: 'text',
      description: 'ラジオグループ名（同一グループで共通にする）',
    },
    checked: {
      control: 'boolean',
      description: '選択済み状態',
      table: { defaultValue: { summary: false } },
    },
    disabled: {
      control: 'boolean',
      description: '無効状態',
      table: { defaultValue: { summary: false } },
    },
    hint: {
      control: 'text',
      description: 'ラベル下に表示するヒントテキスト（任意）',
    },
    onChange: { action: 'changed' },
  },
  args: {
    label: 'アイテム 1',
    value: 'item1',
    name: 'example',
    checked: false,
    disabled: false,
    hint: '',
    onChange: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default（未選択）
// ─────────────────────────────────────────────────────────────
/** 通常の未選択状態。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Checked（選択済み）
// ─────────────────────────────────────────────────────────────
/** 選択済み状態。ラジオ丸が青背景＋白ドットになる。 */
export const Checked = {
  args: { checked: true },
};

// ─────────────────────────────────────────────────────────────
// WithHint（ヒントテキストあり）
// ─────────────────────────────────────────────────────────────
/** ラベル下にヒントテキストを表示する。 */
export const WithHint = {
  args: {
    hint: 'ヒントテキスト',
  },
};

// ─────────────────────────────────────────────────────────────
// Disabled（無効）
// ─────────────────────────────────────────────────────────────
/** 無効状態。opacity 50% で操作不可になる。 */
export const Disabled = {
  args: { disabled: true },
};

/** 無効かつ選択済み。 */
export const DisabledChecked = {
  args: { checked: true, disabled: true },
};

// ─────────────────────────────────────────────────────────────
// AllStates（全状態一覧）
// ─────────────────────────────────────────────────────────────
/**
 * Figmaの基本設計に沿った全状態の一覧。
 * 左列：未選択 / 右列：選択済み（enabled・disabled）
 */
export const AllStates = {
  parameters: {
    docs: {
      description: {
        story: '全4状態（default / hover / focused / disabled）の比較一覧。',
      },
    },
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;flex-direction:column;gap:24px;padding:24px;';

    const rows = [
      { label: 'default（通常）',   checked: false, disabled: false },
      { label: 'selected（選択済み）', checked: true,  disabled: false },
      { label: 'disabled 未選択',    checked: false, disabled: true  },
      { label: 'disabled 選択済み',  checked: true,  disabled: true  },
    ];

    rows.forEach(({ label, checked, disabled }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:32px;';

      const caption = document.createElement('span');
      caption.style.cssText =
        'font-family:sans-serif;font-size:12px;color:#888;width:140px;flex-shrink:0;';
      caption.innerText = label;

      const item = createRadioButton({
        label: 'アイテム 1',
        value: label,
        name: 'allstates',
        checked,
        disabled,
        hint: checked ? 'ヒントテキスト' : '',
        onChange: fn(),
      });

      row.appendChild(caption);
      row.appendChild(item);
      container.appendChild(row);
    });

    return container;
  },
};

// ─────────────────────────────────────────────────────────────
// Group（グループ使用例）
// ─────────────────────────────────────────────────────────────
/**
 * `createRadioGroup` を使ったグループ例。
 * 選択肢を縦に並べ、1つが選択済みの状態。
 */
export const Group = {
  parameters: {
    docs: {
      description: {
        story:
          '`createRadioGroup` を使った複数選択肢のグループ。同一の `name` でまとめることで排他選択が機能する。',
      },
    },
  },
  render: () =>
    createRadioGroup({
      name: 'role',
      options: [
        { label: '一般ユーザー', value: 'user' },
        { label: '管理者',       value: 'admin' },
        { label: 'オーナー',     value: 'owner', hint: '全ての権限を持ちます' },
        { label: '閲覧のみ',     value: 'viewer', disabled: true },
      ],
      value: 'user',
      onChange: fn(),
    }),
};
