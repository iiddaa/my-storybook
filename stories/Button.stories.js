import { fn } from 'storybook/test';
import { createButton } from '../src/components/Button';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" button ページより
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

「クリック」や「キーボードのエンター操作」によって、ユーザーの意図通りのアクションを起こすもの。

---

## 基本設計

### バリアント（variant）

| variant | 使いどころ |
|---------|-----------|
| **Primary** | 主要アクション |
| **Secondary** | 副次的なアクション。PrimaryだとUI上ノイズとなってしまう場合（ボタンよりも目立たせたいパーツがある、など） |
| **Tertiary** | PrimaryやSecondaryより優先度を下げたい場合。積極的に押させたいわけではないが、遷移できることは示唆したい場合 |
| **Ghost** | UI上、ボタン表現が視覚的ノイズとなってしまう場合 |
| **Negative** | ネガティブな操作。「削除」のような不可逆な変更や、「解除」のような何かができなくなる場合 |
| **Danger** | 主要アクション（破壊的・危険な操作） |

### サイズ（size）

| size | padding | font-weight | 用途 |
|------|---------|-------------|------|
| M | 8px 16px | W6（Bold） | 標準 |
| S | 4px 12px | W3（Regular） | スペースが限られる場面・優先度の低いアクション |

### 状態（state）

| state | 説明 |
|-------|------|
| Default | 通常状態 |
| Hover | ホバー状態（Storybookで強制表示する場合に使用） |
| Disable | 操作不可状態 |

---

## 使用上の注意

- クリックエリアが明確であること。
- テキストやアイコンによって、押すと何が起こるかが予測できること。
- テキストリンクとの使い分けを意識すること。
  - ボタンは「**何かをする**」ためのもの。リンクは「**どこかへいく**」ためのもの。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
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
      description: 'ボタンに表示するテキスト',
    },
    variant: {
      control: { type: 'select' },
      options: ['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Negative', 'Danger'],
      description: 'ボタン種別',
      table: { defaultValue: { summary: 'Primary' } },
    },
    size: {
      control: { type: 'radio' },
      options: ['M', 'S'],
      description: 'サイズ（M: 8px 16px / S: 4px 12px）',
      table: { defaultValue: { summary: 'M' } },
    },
    state: {
      control: { type: 'radio' },
      options: ['Default', 'Hover', 'Disable'],
      description: '表示状態',
      table: { defaultValue: { summary: 'Default' } },
    },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'ボタン',
    variant: 'Primary',
    size: 'M',
    state: 'Default',
    onClick: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/** Primary / M / Default — 最もシンプルな使用例。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// バリアント別
// ─────────────────────────────────────────────────────────────
/** 副次的なアクションに使用する。Primary と並べる場面で視覚的な優先度を下げたいとき。 */
export const Secondary = {
  args: { variant: 'Secondary' },
};

/** PrimaryやSecondaryより優先度を下げたい場合。積極的に押させたいわけではないが、遷移できることは示唆したい場合。 */
export const Tertiary = {
  args: { variant: 'Tertiary' },
};

/** UI上、ボタン表現が視覚的ノイズとなってしまう場合に使用する。 */
export const Ghost = {
  args: { variant: 'Ghost' },
};

/** ネガティブな操作（削除・解除など）に使用する。不可逆な変更や何かができなくなる場合。 */
export const Negative = {
  args: { variant: 'Negative' },
};

/** 破壊的・危険な操作の主要アクションに使用する。 */
export const Danger = {
  args: { variant: 'Danger' },
};

// ─────────────────────────────────────────────────────────────
// サイズ別
// ─────────────────────────────────────────────────────────────
/** Sサイズ。スペースが限られる場面や、優先度の低いアクションに使用する。 */
export const SizeS = {
  args: { size: 'S' },
};

// ─────────────────────────────────────────────────────────────
// 状態別
// ─────────────────────────────────────────────────────────────
/** Hover 状態の強制表示。実際の画面ではカーソルを乗せたときに発生する。 */
export const HoverState = {
  args: { state: 'Hover' },
};

/** Disable 状態。操作不可。cursor: not-allowed になり onClick は発火しない。 */
export const DisableState = {
  args: { state: 'Disable' },
};

// ─────────────────────────────────────────────────────────────
// AllVariants（全バリアント一覧）
// ─────────────────────────────────────────────────────────────
/**
 * 全6バリアント × MサイズとSサイズ × 3状態（Default / Hover / Disable）の一覧。
 * Figmaの「基本設計」テーブルに対応する。
 */
export const AllVariants = {
  parameters: {
    docs: {
      description: {
        story:
          '全6バリアント × 2サイズ × 3状態（Default / Hover / Disable）の比較一覧。Figmaの基本設計テーブルに対応。',
      },
    },
    layout: 'padded',
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText =
      'display:flex;flex-direction:column;gap:0;font-family:"Hiragino Sans",sans-serif;min-width:800px;';

    const variants = ['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Negative', 'Danger'];
    const sizes = ['M', 'S'];
    const states = ['Default', 'Hover', 'Disable'];

    // ヘッダー行
    const headerRow = document.createElement('div');
    headerRow.style.cssText =
      'display:grid;grid-template-columns:120px repeat(6,1fr);gap:0;background:#f7f7f8;border-bottom:1px solid #d6d9db;';

    const emptyCell = document.createElement('div');
    emptyCell.style.cssText = 'padding:8px;border-right:1px solid #d6d9db;';
    headerRow.appendChild(emptyCell);

    sizes.forEach((size) => {
      states.forEach((state) => {
        const th = document.createElement('div');
        th.style.cssText =
          'padding:8px;font-size:11px;color:#858c94;text-align:center;border-right:1px solid #d6d9db;';
        th.textContent = `${size} / ${state}`;
        headerRow.appendChild(th);
      });
    });
    container.appendChild(headerRow);

    // バリアント行
    variants.forEach((variant) => {
      const row = document.createElement('div');
      row.style.cssText =
        'display:grid;grid-template-columns:120px repeat(6,1fr);gap:0;border-bottom:1px solid #d6d9db;';

      const labelCell = document.createElement('div');
      labelCell.style.cssText =
        'padding:16px 8px;display:flex;align-items:center;font-size:12px;font-weight:600;color:#222;border-right:1px solid #d6d9db;';
      labelCell.textContent = variant;
      row.appendChild(labelCell);

      sizes.forEach((size) => {
        states.forEach((state) => {
          const cell = document.createElement('div');
          cell.style.cssText =
            'padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid #d6d9db;';
          const btn = createButton({ label: 'ボタン', variant, size, state, onClick: fn() });
          cell.appendChild(btn);
          row.appendChild(cell);
        });
      });

      container.appendChild(row);
    });

    return container;
  },
};
