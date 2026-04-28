import { fn } from 'storybook/test';
import { createPageTitle } from '../src/components/PageTitle';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Page Title ページより
// node-id: 173:3967
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **「現在表示しているものが何か」を把握しやすくするもの。**

---

## 基本設計

\`Breadcrumbs（任意）\` ＋ \`タイトル（必須）\` ＋ \`説明文（任意）\` で構成する。

| バリアント | 要素 |
|---|---|
| フル | Breadcrumbs ＋ タイトル ＋ 説明文 |
| タイトルのみ | タイトルのみ（最も基本的な形） |

---

## 使用時に気をつけておくこと

- 下層ページに進んだら、タイトル上部にBreadcrumbsを配置する。
- 必要な場合にのみ、説明文を付与する。基本はいらない。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'PageTitle',
  tags: ['autodocs'],
  render: (args) => createPageTitle(args),
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
      description: 'ページタイトル（必須）',
    },
    description: {
      control: 'text',
      description: '説明文（任意）。必要な場合にのみ付与する。基本はいらない。',
    },
    breadcrumbs: {
      control: 'object',
      description:
        'Breadcrumbs設定（任意）。下層ページへ進んだ場合に設定する。items: 親階層の配列、current: 現在地テキスト',
    },
  },
  args: {
    title: 'Page Title（例：P-Action株式会社）',
    description: undefined,
    breadcrumbs: undefined,
  },
};

// ─────────────────────────────────────────────────────────────
// Default（タイトルのみ）
// ─────────────────────────────────────────────────────────────
/** Figmaの基本設計「タイトルのみ」パターン。最も基本的な形。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// WithBreadcrumbs（Breadcrumbs ＋ タイトル）
// ─────────────────────────────────────────────────────────────
/** 下層ページへ進んだ際のパターン。タイトル上部にBreadcrumbsを配置する。 */
export const WithBreadcrumbs = {
  parameters: {
    docs: {
      description: {
        story:
          '下層ページに進んだら、タイトル上部にBreadcrumbsを配置する（Figmaガイドライン）。',
      },
    },
  },
  args: {
    breadcrumbs: {
      items: [{ label: '店舗', href: '#', onClick: fn() }],
      current: '現在地',
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Full（Breadcrumbs ＋ タイトル ＋ 説明文）
// ─────────────────────────────────────────────────────────────
/** Figmaの基本設計「Breadcrumbs＋タイトル＋説明文」フルパターン。 */
export const Full = {
  parameters: {
    docs: {
      description: {
        story:
          '説明文は必要な場合にのみ付与する（Figmaガイドライン）。基本は description なしが推奨。',
      },
    },
  },
  args: {
    breadcrumbs: {
      items: [{ label: '店舗', href: '#', onClick: fn() }],
      current: '現在地',
    },
    description:
      '説明文（例：以下のステップに沿って、設定してください。XXXXをしてください。）',
  },
};

// ─────────────────────────────────────────────────────────────
// AllPatterns（全パターン比較）
// ─────────────────────────────────────────────────────────────
/** Figmaの基本設計に沿った全バリアントの比較一覧。 */
export const AllPatterns = {
  parameters: {
    docs: {
      description: {
        story: 'タイトルのみ・Breadcrumbs付き・フルの3パターン比較。',
      },
    },
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;flex-direction:column;gap:40px;padding:24px;';

    const patterns = [
      {
        label: 'タイトルのみ',
        args: {
          title: 'Page Title（例：P-Action株式会社）',
        },
      },
      {
        label: 'Breadcrumbs ＋ タイトル',
        args: {
          title: 'Page Title（例：P-Action株式会社）',
          breadcrumbs: {
            items: [{ label: '店舗', href: '#', onClick: fn() }],
            current: '現在地',
          },
        },
      },
      {
        label: 'Breadcrumbs ＋ タイトル ＋ 説明文',
        args: {
          title: 'Page Title（例：P-Action株式会社）',
          breadcrumbs: {
            items: [{ label: '店舗', href: '#', onClick: fn() }],
            current: '現在地',
          },
          description:
            '説明文（例：以下のステップに沿って、設定してください。XXXXをしてください。）',
        },
      },
    ];

    patterns.forEach(({ label, args }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-direction:column;gap:8px;';

      const caption = document.createElement('span');
      caption.style.cssText =
        'font-family:sans-serif;font-size:12px;color:#888;';
      caption.textContent = label;

      row.appendChild(caption);
      row.appendChild(createPageTitle(args));
      container.appendChild(row);
    });

    return container;
  },
};
