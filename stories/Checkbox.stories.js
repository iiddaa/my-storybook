import { createCheckbox } from '../src/components/Checkbox';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Checkbox ページより
// node-id: 234:5945
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **選択肢に対し、ON/OFFを切り替えるもの。複数の項目に対して、自由な組み合わせでON/OFFが選べる。**

---

## 基本設計

チェックボックス本体（16×16px / border-radius: 4px）＋ラベルテキスト（任意で説明文）の構成。

| 状態 | 見た目 |
|------|--------|
| unchecked（enabled） | 白背景・グレーボーダー（\`#d6d9db\`） |
| hover（enabled） | 白背景・ブルーボーダー（\`#318bf7\`） |
| checked（enabled） | ブルー背景（\`#318bf7\`）・白チェックマーク |
| indeterminate（enabled） | ブルー背景（\`#318bf7\`）・白ダッシュ |
| unchecked（disabled） | グレー背景（\`#d6d9db\`）・グレーボーダー |
| checked（disabled） | 薄ブルー背景（\`#98c5fb\`）・グレーボーダー・白チェックマーク |
| indeterminate（disabled） | 薄ブルー背景（\`#98c5fb\`）・グレーボーダー・白ダッシュ |

---

## 使用時に気をつけておくこと

- 「Checkbox・RadioButton・ToggleSwitchの使い分け」を意識して、適切に使い分ける。
- 選択状態がひと目で分かるよう、視認性を重視する。
- 何に対しての操作なのか明示するためにラベルを設ける。
- ラベルも含めてクリック/タップ領域を確保する。
- 操作をしたら即座に反応を返す。過剰なアニメーションはつけない。

---

## 選択パーツの使い分け

**選択パーツには、選択肢が最初から表示されているタイプ or 選択肢が隠れているタイプがある。**

### 選択肢が最初から表示されているタイプ ［Checkbox］［RadioButton］［ToggleSwitch］

選択肢が **5つ未満** であればこちらを使う。

| | Checkbox | RadioButton | ToggleSwitch |
|---|---|---|---|
| **単一選択・複数選択** | どちらも可能 | 一つしか選択できない（排他的選択） | 単一の項目に対してON/OFFできる |
| **状態の反映タイミング** | 決定や保存などのアクションを完了したあと | 決定や保存などのアクションを完了したあと | 操作した時点で即時反映される |

### 選択肢が隠れているタイプ ［Select］［Combobox］

選択肢が **5つ以上** であればこちらを使う。領域の制約がある場合にもこちらを使う。

| | Select | Combobox |
|---|---|---|
| **選択肢の絞り込み** | ❌ | ⭕️ |
| **単一選択・複数選択** | どちらも可能 | どちらも可能 |
| **使い分け** | 選択肢が少ない場合 | 選択肢が多い場合 |

**ただし以下のような例外もある。**
- 不動産サービスなどの場合は都道府県選択を強調させるため、選択肢が多くともCheckbox・Radio Buttonを利用。
- 画面の一貫性を揃えるため、選択肢が少なくともCheckbox・Radio Buttonを利用。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Checkbox',
  tags: ['autodocs'],
  render: (args) => createCheckbox(args),
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
      description: 'ラベルテキスト',
      table: { defaultValue: { summary: 'アイテム 1' } },
    },
    description: {
      control: 'text',
      description: '説明文（空文字の場合は非表示）',
      table: { defaultValue: { summary: '' } },
    },
    checked: {
      control: 'boolean',
      description: '選択済み状態',
      table: { defaultValue: { summary: 'false' } },
    },
    indeterminate: {
      control: 'boolean',
      description: '不確定状態（ダッシュ表示）。checked より優先される',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '無効状態',
      table: { defaultValue: { summary: 'false' } },
    },
    onChange: {
      action: 'changed',
      description: 'クリック時のコールバック',
    },
  },
  args: {
    label: 'アイテム 1',
    description: '',
    checked: false,
    indeterminate: false,
    disabled: false,
  },
};

// ─────────────────────────────────────────────────────────────
// Default（unchecked・enabled）
// ─────────────────────────────────────────────────────────────
/** 未選択・有効状態。デフォルト。グレーボーダーの空のチェックボックス。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Checked（選択済み・enabled）
// ─────────────────────────────────────────────────────────────
/** 選択済み。ブルー背景（\`#318bf7\`）に白チェックマークが表示される。 */
export const Checked = {
  parameters: {
    docs: {
      description: {
        story: '選択済み状態（enabled）。ブルー背景・白チェックマーク（Figma: 状態=選択済み, disabled=False）。',
      },
    },
  },
  args: {
    checked: true,
  },
};

// ─────────────────────────────────────────────────────────────
// Indeterminate（不確定状態）
// ─────────────────────────────────────────────────────────────
/**
 * 不確定状態。複数項目のうち一部だけ選択されている場合などに使用。
 * ブルー背景に白いダッシュ（－）が表示される。
 */
export const Indeterminate = {
  parameters: {
    docs: {
      description: {
        story:
          '不確定状態（indeterminate）。ブルー背景・白ダッシュ。複数項目の一部選択などで使用（Figma 基本設計）。',
      },
    },
  },
  args: {
    indeterminate: true,
  },
};

// ─────────────────────────────────────────────────────────────
// WithDescription（説明文あり）
// ─────────────────────────────────────────────────────────────
/** 説明文付き。ラベル直下に補足テキスト（12px / \`#5c6670\`）を表示。 */
export const WithDescription = {
  parameters: {
    docs: {
      description: {
        story: '説明文付き。ラベル下に 12px・`#5c6670` で説明文を表示（Figma: propValue3=true）。',
      },
    },
  },
  args: {
    label: 'アイテム 1',
    description: '説明文',
  },
};

// ─────────────────────────────────────────────────────────────
// DisabledUnchecked（無効・未選択）
// ─────────────────────────────────────────────────────────────
/** 無効・未選択状態。グレー背景（\`#d6d9db\`）でインタラクション不可。テキストも薄くなる。 */
export const DisabledUnchecked = {
  parameters: {
    docs: {
      description: {
        story: '無効・未選択。グレー背景（`#d6d9db`）・テキスト `#adb2b8`（Figma: 状態=未選択, disabled=True）。',
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
/** 無効・選択済み状態。薄いブルー背景（\`#98c5fb\`）でインタラクション不可。 */
export const DisabledChecked = {
  parameters: {
    docs: {
      description: {
        story: '無効・選択済み。薄ブルー背景（`#98c5fb`）・グレーボーダー（Figma: 状態=選択済み, disabled=True）。',
      },
    },
  },
  args: {
    checked: true,
    disabled: true,
  },
};

// ─────────────────────────────────────────────────────────────
// DisabledIndeterminate（無効・不確定）
// ─────────────────────────────────────────────────────────────
/** 無効・不確定状態。薄いブルー背景（\`#98c5fb\`）でインタラクション不可。 */
export const DisabledIndeterminate = {
  parameters: {
    docs: {
      description: {
        story: '無効・不確定状態。薄ブルー背景（`#98c5fb`）・白ダッシュ（Figma 基本設計）。',
      },
    },
  },
  args: {
    indeterminate: true,
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
          '全状態の比較表示（Figma「基本設計」）。左列: enabled、右列: disabled。行: unchecked / checked / indeterminate。',
      },
    },
  },
  render: () => {
    const states = [
      { label: 'unchecked',     checked: false, indeterminate: false },
      { label: 'checked',       checked: true,  indeterminate: false },
      { label: 'indeterminate', checked: false, indeterminate: true  },
    ];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';

    states.forEach(({ label, checked, indeterminate }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 32px;';

      const stateLabel = document.createElement('span');
      stateLabel.style.cssText =
        'font-family: monospace; font-size: 12px; color: #858c94; width: 110px; text-align: right; flex-shrink: 0;';
      stateLabel.textContent = label;
      row.appendChild(stateLabel);

      row.appendChild(
        createCheckbox({ label: 'アイテム 1', checked, indeterminate, disabled: false })
      );
      row.appendChild(
        createCheckbox({ label: 'アイテム 1', checked, indeterminate, disabled: true })
      );

      wrapper.appendChild(row);
    });

    return wrapper;
  },
};
