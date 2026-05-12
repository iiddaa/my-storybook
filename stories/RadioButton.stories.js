import { fn } from 'storybook/test';
import { createRadioButton, createRadioGroup } from '../src/components/RadioButton';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Radio button ページより
// node-id: 233:5841
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **選択肢から一つを選べるもの。選択肢を格納せずに全て表示するため、選択肢を一覧できる。**

---

## 基本設計

ラジオ丸（16×16px / border-radius: 10px の円形）＋ラベルテキスト（任意でヒントテキスト）の構成。

| 状態 | 見た目 |
|------|--------|
| unchecked（enabled） | 白背景・グレーボーダー（\`#d6d9db\`） |
| hover（enabled） | 白背景・ブルーボーダー（\`#318bf7\`） |
| checked（enabled） | ブルー背景（\`#318bf7\`）・中央に白ドット（6×6px） |
| unchecked（disabled） | グレー背景（\`#d6d9db\`）・グレーボーダー |
| checked（disabled） | 薄ブルー背景（\`#98c5fb\`）・グレーボーダー・白ドット |

---

## 使用時に気をつけておくこと

- Checkbox・RadioButton・ToggleSwitchの使い分けを意識して、適切に使い分ける。
- 選択状態がひと目で分かるよう、視認性を重視する。
- 何に対しての操作なのか明示するためにラベルを設ける。
- ラベルも含めてクリック/タップ領域を確保する。
- 操作をしたら即座に反応を返す。過剰なアニメーションはつけない。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'RadioButton',
  tags: ['autodocs'],
  render: (args) => createRadioButton(args),
  parameters: {
    layout: 'padded',
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
      table: { defaultValue: { summary: 'アイテム 1' } },
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
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '無効状態',
      table: { defaultValue: { summary: 'false' } },
    },
    hint: {
      control: 'text',
      description: 'ラベル下に表示するヒントテキスト（空文字の場合は非表示）',
      table: { defaultValue: { summary: '' } },
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
// Default（unchecked・enabled）
// ─────────────────────────────────────────────────────────────
/** 未選択・有効状態。デフォルト。グレーボーダーの空のラジオ丸。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Checked（選択済み・enabled）
// ─────────────────────────────────────────────────────────────
/** 選択済み。ブルー背景（\`#318bf7\`）＋中央に白ドット（6×6px）が表示される。 */
export const Checked = {
  parameters: {
    docs: {
      description: {
        story: '選択済み状態（enabled）。ブルー背景・白ドット（Figma: 状態=選択済み, disabled=False）。',
      },
    },
  },
  args: {
    checked: true,
  },
};

// ─────────────────────────────────────────────────────────────
// WithHint（ヒントテキストあり）
// ─────────────────────────────────────────────────────────────
/** ラベル下にヒントテキスト（12px / \`#5c6670\`）を表示する。 */
export const WithHint = {
  parameters: {
    docs: {
      description: {
        story: 'ヒントテキスト付き。ラベル下に 12px・`#5c6670` で補足テキストを表示（Figma: propValue4=true）。',
      },
    },
  },
  args: {
    hint: 'ヒントテキスト',
  },
};

// ─────────────────────────────────────────────────────────────
// DisabledUnchecked（無効・未選択）
// ─────────────────────────────────────────────────────────────
/** 無効・未選択状態。グレー背景（\`#d6d9db\`）でインタラクション不可。テキストも薄くなる（\`#adb2b8\`）。 */
export const DisabledUnchecked = {
  parameters: {
    docs: {
      description: {
        story:
          '無効・未選択。グレー背景（`#d6d9db`）・テキスト `#adb2b8`（Figma: 状態=未選択, disabled=True）。',
      },
    },
  },
  args: {
    disabled: true,
  },
};

// ─────────────────────────────────────────────────────────────
// DisabledChecked（無効・選択済み）
// ─────────────────────────────────────────────────────────────
/** 無効・選択済み状態。薄ブルー背景（\`#98c5fb\`）でインタラクション不可。 */
export const DisabledChecked = {
  parameters: {
    docs: {
      description: {
        story:
          '無効・選択済み。薄ブルー背景（`#98c5fb`）・グレーボーダー・白ドット（Figma: 状態=選択済み, disabled=True）。',
      },
    },
  },
  args: {
    checked: true,
    disabled: true,
  },
};

// ─────────────────────────────────────────────────────────────
// AllStates（全状態一覧）
// ─────────────────────────────────────────────────────────────
/** 全状態の比較表示。Figma「基本設計」のカラーパターン一覧に対応。 */
export const AllStates = {
  parameters: {
    docs: {
      description: {
        story:
          '全状態の比較表示（Figma「基本設計」）。左列: enabled、右列: disabled。行: unchecked / checked。',
      },
    },
  },
  render: () => {
    const states = [
      { label: 'unchecked', checked: false },
      { label: 'checked',   checked: true  },
    ];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';

    states.forEach(({ label, checked }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 32px;';

      const stateLabel = document.createElement('span');
      stateLabel.style.cssText =
        'font-family: monospace; font-size: 12px; color: #858c94; width: 90px; text-align: right; flex-shrink: 0;';
      stateLabel.textContent = label;
      row.appendChild(stateLabel);

      row.appendChild(
        createRadioButton({ label: 'アイテム 1', value: label, name: 'all', checked, disabled: false, onChange: fn() })
      );
      row.appendChild(
        createRadioButton({ label: 'アイテム 1', value: label + '-d', name: 'all', checked, disabled: true, onChange: fn() })
      );

      wrapper.appendChild(row);
    });

    return wrapper;
  },
};

// ─────────────────────────────────────────────────────────────
// Group（グループ使用例）
// ─────────────────────────────────────────────────────────────
/**
 * `createRadioGroup` を使ったグループ例。
 * 同一の `name` を持つ選択肢を縦に並べ、排他選択が機能する状態。
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
