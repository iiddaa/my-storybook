import { createChip } from '../src/components/Chip';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Chip ページより
// node-id: 238:7162
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **オブジェクトに紐づく属性・状態・情報を直感的に表すもの**

---

## 基本設計

Chip は \`height: 20px\`・\`border-radius: 99px\`（pill 形状）・\`font-size: 12px\` の小さな情報タグ。

### カラーパターン

| バリアント | 背景 | ボーダー | 文字色 |
|-----------|------|---------|-------|
| \`red\` | 白 | \`#eb4d38\` | \`#eb4d38\` |
| \`green\` | 白 | \`#22ad7f\` | \`#22ad7f\` |
| \`orange\` | 白 | \`#f78f43\` | \`#f78f43\` |
| \`gray\` | 白 | \`#858c94\` | \`#858c94\` |
| \`blue\` | 白 | \`#318bf7\` | \`#318bf7\` |
| \`blue-filled\` | \`#eaf3fe\` | なし | \`#222\` |
| \`gray-filled\` | \`#eff0f1\` | なし | \`#222\` |

### xボタンあり

\`dismissible: true\` を指定すると、ラベル右に x ボタン（解除ボタン）が表示される。
\`onDismiss\` コールバックを渡すことで削除動作を実装できる。

---

## Label / Chip / Badge の使い分け

補助的な情報を小さく表示する3コンポーネントの役割の違い。

| | Label | Chip | Badge |
|---|---|---|---|
| **表すもの** | オブジェクトの名称 | オブジェクトに紐づく状況・属性・情報 | 特に目立たせたいオブジェクトの状態 |
| **例** | ButtonのLabel：「保存」「送信」 / FormのLabel：「氏名」「送信者」 | 状態：「完了」「進行中」「要対応」/ 属性：「必須」/ 情報：「クチコミ4.0以上」「横浜エリア」 | 未読件数 |

---

## 使用時に気をつけておくこと

**タイトルラベル**

- 「Label・Chip・Badgeの使い分け」を参照して適切に使い分ける。
- プロダクトの中で一貫した命名・色・階層を保ち、ユーザーが直感的に理解できるようにする。
  - 例：進行中は緑色、エラーは赤色
- 意味の重複を避ける。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Chip',
  tags: ['autodocs'],
  render: (args) => createChip(args),
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
      description: 'チップのテキスト',
      table: { defaultValue: { summary: 'ラベル名' } },
    },
    variant: {
      control: 'select',
      options: ['red', 'green', 'orange', 'gray', 'blue', 'blue-filled', 'gray-filled'],
      description: 'カラーバリアント（Figma: propValue1 に対応）',
      table: { defaultValue: { summary: 'red' } },
    },
    dismissible: {
      control: 'boolean',
      description: 'xボタン（解除ボタン）を表示するか',
      table: { defaultValue: { summary: 'false' } },
    },
    onDismiss: {
      action: 'dismissed',
      description: 'xボタンクリック時のコールバック',
    },
  },
  args: {
    label: 'ラベル名',
    variant: 'red',
    dismissible: false,
  },
};

// ─────────────────────────────────────────────────────────────
// Default（レッド）
// ─────────────────────────────────────────────────────────────
/** レッド。エラー・警告・要注意などの状態を表す。デフォルトバリアント。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Green
// ─────────────────────────────────────────────────────────────
/** グリーン。進行中・完了など肯定的な状態を表す（例：「進行中」）。 */
export const Green = {
  parameters: {
    docs: {
      description: {
        story: 'グリーンバリアント。進行中・完了などの肯定的な状態に使用（Figma: propValue1=グリーン）。',
      },
    },
  },
  args: {
    variant: 'green',
    label: '進行中',
  },
};

// ─────────────────────────────────────────────────────────────
// Orange
// ─────────────────────────────────────────────────────────────
/** オレンジ。注意・保留など中間的な状態を表す（例：「要対応」）。 */
export const Orange = {
  parameters: {
    docs: {
      description: {
        story: 'オレンジバリアント。注意・保留などの状態に使用（Figma: propValue1=オレンジ）。',
      },
    },
  },
  args: {
    variant: 'orange',
    label: '要対応',
  },
};

// ─────────────────────────────────────────────────────────────
// Gray
// ─────────────────────────────────────────────────────────────
/** グレー。無効・ドラフトなど中立・非アクティブな状態を表す。 */
export const Gray = {
  parameters: {
    docs: {
      description: {
        story: 'グレーバリアント。無効・ドラフトなど中立的な状態に使用（Figma: propValue1=グレー）。',
      },
    },
  },
  args: {
    variant: 'gray',
    label: 'ドラフト',
  },
};

// ─────────────────────────────────────────────────────────────
// Blue
// ─────────────────────────────────────────────────────────────
/** ブルー（アウトライン）。カテゴリーや情報タグを表す。 */
export const Blue = {
  parameters: {
    docs: {
      description: {
        story: 'ブルーアウトラインバリアント。カテゴリー・情報タグに使用（Figma: propValue1=ブルー）。',
      },
    },
  },
  args: {
    variant: 'blue',
    label: 'カテゴリー',
  },
};

// ─────────────────────────────────────────────────────────────
// BlueFilled
// ─────────────────────────────────────────────────────────────
/**
 * ブルー（ベタ塗り）。背景色（#eaf3fe）でカテゴリー・タグを強調する場合に使用。
 * xボタんあり（Figma「基本設計 > xボタンあり」）の既定バリアント。
 */
export const BlueFilled = {
  parameters: {
    docs: {
      description: {
        story: 'ブルーベタ塗りバリアント。背景 `#eaf3fe`・テキスト `#222`（Figma: propValue1=ブルー_ベタ）。',
      },
    },
  },
  args: {
    variant: 'blue-filled',
    label: 'ラベル名',
  },
};

// ─────────────────────────────────────────────────────────────
// GrayFilled
// ─────────────────────────────────────────────────────────────
/** グレー（ベタ塗り）。背景色（#eff0f1）で非アクティブなタグを表示する場合に使用。 */
export const GrayFilled = {
  parameters: {
    docs: {
      description: {
        story: 'グレーベタ塗りバリアント。背景 `#eff0f1`・テキスト `#222`（Figma: propValue1=グレー_ベタ）。',
      },
    },
  },
  args: {
    variant: 'gray-filled',
    label: 'ラベル名',
  },
};

// ─────────────────────────────────────────────────────────────
// Dismissible（xボタンあり）
// ─────────────────────────────────────────────────────────────
/**
 * xボタン（解除ボタン）付き。ユーザーが能動的に解除・削除できるチップ。
 * Figma「基本設計 > xボタンあり」に対応。
 */
export const Dismissible = {
  parameters: {
    docs: {
      description: {
        story:
          'xボタン付き（Figma「基本設計 > xボタンあり」）。`dismissible: true` + `onDismiss` コールバックで削除動作を実装できる。',
      },
    },
  },
  args: {
    variant: 'blue-filled',
    label: 'ラベル名',
    dismissible: true,
  },
};

// ─────────────────────────────────────────────────────────────
// AllVariants（全バリアント一覧）
// ─────────────────────────────────────────────────────────────
/** 全7バリアントの比較表示。カラーパターンを一目で確認できる。 */
export const AllVariants = {
  parameters: {
    docs: {
      description: {
        story: '全7カラーバリアントの比較表示（Figma「基本設計 > カラーパターン」）。',
      },
    },
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; align-items: center;';

    const variants = [
      { variant: 'red',         label: 'レッド' },
      { variant: 'green',       label: 'グリーン' },
      { variant: 'orange',      label: 'オレンジ' },
      { variant: 'gray',        label: 'グレー' },
      { variant: 'blue',        label: 'ブルー' },
      { variant: 'blue-filled', label: 'ブルー（ベタ）' },
      { variant: 'gray-filled', label: 'グレー（ベタ）' },
    ];

    variants.forEach(({ variant, label }) => {
      wrapper.appendChild(createChip({ label, variant }));
    });

    return wrapper;
  },
};
