import { createBrandLogo } from '../src/components/BrandLogo';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Brand Logo ページより
// node-id: 440:9322
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **プロダクトのアイデンティティを示す象徴。**

---

## 基本設計

ロゴは「ワードマーク（上段）」と「タグライン（下段）」の2パーツで構成される。

| variant | 説明 |
|---|---|
| \`store-marketing\` | カンリー 店舗集客ロゴ |
| \`benefits\` | カンリー 福利厚生ロゴ |

サイズは 136×61px 固定（Figma準拠）。

---

## 使用時に気をつけておくこと

- 原則として画面の左上（グローバルナビゲーションの最上部）に固定する。
- 縦横比を変えたり、指定外の色に変更したりしてはいけない。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'DesignTokens/BrandLogo',
  tags: ['autodocs'],
  render: (args) => createBrandLogo(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['store-marketing', 'benefits'],
      description: 'ロゴ種別。`store-marketing`（店舗集客）または `benefits`（福利厚生）を指定する。',
    },
  },
  args: {
    variant: 'store-marketing',
  },
};

// ─────────────────────────────────────────────────────────────
// StoreMarketing
// ─────────────────────────────────────────────────────────────
/** カンリー 店舗集客ロゴ。グローバルナビゲーションのロゴエリアで使用する。 */
export const StoreMarketing = {
  parameters: {
    docs: {
      description: {
        story: '店舗集客プロダクト向けブランドロゴ。GlobalNavigation のロゴエリアで使用される。',
      },
    },
  },
  args: {
    variant: 'store-marketing',
  },
};

// ─────────────────────────────────────────────────────────────
// Benefits
// ─────────────────────────────────────────────────────────────
/** カンリー 福利厚生ロゴ。 */
export const Benefits = {
  parameters: {
    docs: {
      description: {
        story: '福利厚生プロダクト向けブランドロゴ。',
      },
    },
  },
  args: {
    variant: 'benefits',
  },
};
