import { createPagination } from '../src/components/Pagination';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Pagination ページより
// node-id: 239:10010
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **大量のコンテンツを適切なページごとに分割し、ページの移動を効率的に行えるもの。**

---

## 基本設計

| バリエーション | 説明 |
|--------------|------|
| デフォルト | 総件数テキスト ＋ ページナビゲーション |
| 表示件数設定あり | 総件数テキスト ＋ 表示件数ドロップダウン ＋ ページナビゲーション |
| Disabled | 表示件数・ページ入力・ボタンがすべて無効状態 |

### ページナビゲーション

| 要素 | 仕様 |
|------|------|
| 前ページボタン | 36×36px、背景: \`#f7f7f8\`（gray/50） |
| 次ページボタン（有効） | 36×36px、背景: \`#eaf3fe\`（blue/100）、アイコン: \`#318bf7\` |
| 次ページボタン（無効） | 36×36px、背景: \`#f7f7f8\`（gray/50）、アイコン: \`#adb2b8\` |
| ページ入力フィールド | 幅 60px、border \`#d6d9db\`、border-radius 4px、padding 8px 12px |
| 表示件数ドロップダウン | 幅 90px、同border仕様 |

---

## 使用時に気をつけておくこと

- 基本的に、コンテンツの下部に配置する。
  - 可能なら、コンテンツの上下に配置したい。
- 全件数がわかること。
  - ただし、別のエリアで全件数が表示されている場合は、省略可能。
- 現在開いているページの位置がわかること。
  - 可能なら、現在開いているページでの表示件数を出したい。
- 一つ前のページ、一つ後のページへ直感的に移動できること。
  - 最前のページ、最後のページ、直接特定のページに移動できるとなお良い。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Pagination',
  tags: ['autodocs'],
  render: (args) => createPagination(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    totalCount: {
      control: 'number',
      description: '総件数',
      table: { defaultValue: { summary: '200' } },
    },
    totalPages: {
      control: 'number',
      description: '総ページ数',
      table: { defaultValue: { summary: '2' } },
    },
    currentPage: {
      control: 'number',
      description: '現在のページ番号',
      table: { defaultValue: { summary: '1' } },
    },
    unit: {
      control: 'text',
      description: '件数単位テキスト（例: "店舗"）',
      table: { defaultValue: { summary: '件' } },
    },
    showPerPage: {
      control: 'boolean',
      description: '表示件数セレクターを表示するか',
      table: { defaultValue: { summary: 'false' } },
    },
    perPage: {
      control: 'number',
      description: '1ページの表示件数',
      table: { defaultValue: { summary: '100' } },
    },
    perPageOptions: {
      control: 'object',
      description: '表示件数の選択肢',
      table: { defaultValue: { summary: '[25, 50, 100]' } },
    },
    disabled: {
      control: 'boolean',
      description: '無効状態',
      table: { defaultValue: { summary: 'false' } },
    },
    onPageChange: {
      action: 'page-changed',
      description: 'ページ変更コールバック (page: number)',
    },
    onPerPageChange: {
      action: 'per-page-changed',
      description: '表示件数変更コールバック (perPage: number)',
    },
  },
  args: {
    totalCount: 200,
    totalPages: 2,
    currentPage: 1,
    unit: '店舗',
    showPerPage: false,
    perPage: 100,
    perPageOptions: [25, 50, 100],
    disabled: false,
  },
};

// ─────────────────────────────────────────────────────────────
// Default（デフォルト）
// ─────────────────────────────────────────────────────────────
/**
 * デフォルト。総件数テキスト＋ページナビゲーション。
 * Figma「基本設計 / デフォルト」に対応。
 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// WithPerPage（表示件数設定あり）
// ─────────────────────────────────────────────────────────────
/**
 * 表示件数セレクターあり。ページナビゲーションの左に表示件数ドロップダウンが追加される。
 * Figma「基本設計 / 表示件数設定あり」に対応。
 */
export const WithPerPage = {
  parameters: {
    docs: {
      description: {
        story:
          '`showPerPage: true` で表示件数ドロップダウンを表示。Figma「表示件数設定あり」バリエーション。',
      },
    },
  },
  args: {
    showPerPage: true,
  },
};

// ─────────────────────────────────────────────────────────────
// Disabled
// ─────────────────────────────────────────────────────────────
/**
 * Disabled 状態。表示件数ドロップダウン・ページ入力・前後ボタンがすべて無効になる。
 * Figma「基本設計 / Disabled」に対応。
 */
export const Disabled = {
  parameters: {
    docs: {
      description: {
        story:
          '`disabled: true` で全操作要素が無効化。テキスト色は \`#adb2b8\`（text/disable）に変化。Figma「Disabled」バリエーション。',
      },
    },
  },
  args: {
    showPerPage: true,
    disabled: true,
  },
};

// ─────────────────────────────────────────────────────────────
// FirstPage（先頭ページ - 前ボタン無効）
// ─────────────────────────────────────────────────────────────
/** 先頭ページ。`currentPage=1` のため前ページボタンが非アクティブ（gray/50）になる。 */
export const FirstPage = {
  parameters: {
    docs: {
      description: {
        story:
          '先頭ページ（`currentPage=1`）。前ページボタンが非アクティブになり、次ページボタンがブルー（`#eaf3fe`）になる。',
      },
    },
  },
  args: {
    totalCount: 500,
    totalPages: 5,
    currentPage: 1,
  },
};

// ─────────────────────────────────────────────────────────────
// LastPage（最終ページ - 次ボタン無効）
// ─────────────────────────────────────────────────────────────
/** 最終ページ。`currentPage=totalPages` のため次ページボタンが非アクティブになる。 */
export const LastPage = {
  parameters: {
    docs: {
      description: {
        story:
          '最終ページ（`currentPage=totalPages`）。次ページボタンが非アクティブ（gray/50）になる。',
      },
    },
  },
  args: {
    totalCount: 500,
    totalPages: 5,
    currentPage: 5,
    perPage: 100,
  },
};

// ─────────────────────────────────────────────────────────────
// AllVariants（全バリエーション比較）
// ─────────────────────────────────────────────────────────────
/** Figma「基本設計」の全3バリエーションを縦並びで比較表示。 */
export const AllVariants = {
  parameters: {
    docs: {
      description: {
        story:
          'Figma「基本設計」の3バリエーション（デフォルト / 表示件数設定あり / Disabled）を縦並びで比較。',
      },
    },
  },
  render: () => {
    const variants = [
      { label: 'デフォルト',      args: { showPerPage: false, disabled: false } },
      { label: '表示件数設定あり', args: { showPerPage: true,  disabled: false } },
      { label: 'Disabled',        args: { showPerPage: true,  disabled: true  } },
    ];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 32px; align-items: flex-end;';

    variants.forEach(({ label, args }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; flex-direction: column; align-items: flex-end; gap: 8px; width: 100%;';

      const labelEl = document.createElement('span');
      labelEl.style.cssText =
        "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94; align-self: flex-start;";
      labelEl.textContent = label;
      row.appendChild(labelEl);

      row.appendChild(
        createPagination({
          totalCount: 200,
          totalPages: 2,
          currentPage: 1,
          unit: '店舗',
          perPage: 100,
          ...args,
        })
      );

      wrapper.appendChild(row);
    });

    return wrapper;
  },
};
