import { fn } from 'storybook/test';
import { createGlobalNavigation } from '../src/components/GlobalNavigation';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Global Navigation ページより
// node-id: 147:8919
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **主要機能を切り替えるもの。**

---

## 基本設計

ナビゲーションは3つのエリアで構成される。

| エリア | 役割 |
|---|---|
| ロゴエリア | サービスロゴを表示する |
| ナビセクション群 | 主要機能をグループ単位（セクション）で一覧表示する |
| オプションエリア | ヘルプ・ログアウトなど補助的なアクション |

各セクションは「セクション見出し（アイコン＋ラベル）」と「ナビリスト（インデントされた項目一覧）」で構成される。

バッジは件数通知が必要な項目にのみ付与する（例：クチコミ・投稿）。

---

## 使用時に気をつけておくこと

- いつでもすぐにアクセスできるよう、位置は固定で常に表示する。
- 項目数はできるだけ絞る。あくまで主要機能群。
- 現在地がわかるようにする。（なんのサービスの、どの主要機能を操作しているのか）
`;

// ─────────────────────────────────────────────────────────────
// デフォルトデータ（Figmaの基本設計より）
// ─────────────────────────────────────────────────────────────
const LOGO_SRC =
  'https://www.figma.com/api/mcp/asset/ec44eb76-3490-4a31-8912-d5c69e313f6a';

const DEFAULT_SECTIONS = [
  {
    label: '管理・運用',
    icon: 'store',
    items: [
      { id: 'shop', label: '店舗', href: '#' },
      { id: 'media', label: '画像・動画', href: '#' },
      { id: 'menu', label: 'メニュー', href: '#' },
      { id: 'review', label: 'クチコミ', href: '#', badge: '99+' },
      { id: 'post', label: '投稿', href: '#', badge: '7' },
    ],
  },
  {
    label: '分析',
    icon: 'analysis',
    items: [
      { id: 'views', label: '閲覧・反応数', href: '#' },
      { id: 'review-summary', label: 'クチコミ総評', href: '#' },
      { id: 'keywords', label: '検索キーワード', href: '#' },
      { id: 'ranking', label: '検索順位', href: '#' },
    ],
  },
  {
    label: '設定',
    icon: 'gear',
    items: [
      { id: 'group', label: 'グループ', href: '#' },
      { id: 'user', label: 'ユーザー', href: '#' },
    ],
  },
];

const DEFAULT_OPTIONS = [
  { label: 'ヘルプ', href: '#' },
  { label: 'ログアウト', href: '#', onClick: fn() },
];

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'GlobalNavigation',
  tags: ['autodocs'],
  render: (args) => createGlobalNavigation(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    logo: {
      control: 'object',
      description:
        'ロゴ設定。src（画像URL）と alt（代替テキスト）を指定する。省略時は alt のテキストをフォールバック表示する。',
    },
    sections: {
      control: 'object',
      description:
        'ナビセクション配列。各セクションに label・icon（store / analysis / gear）・items を指定する。',
    },
    options: {
      control: 'object',
      description:
        '下部オプション項目（ヘルプ・ログアウトなど）。省略時はオプションエリア自体が非表示になる。',
    },
    activeItemId: {
      control: 'text',
      description:
        '現在地を示すアイテムの id。該当アイテムがアクティブ状態（背景色・テキスト色）で表示される。',
    },
  },
  args: {
    logo: { src: LOGO_SRC, alt: 'カンリー' },
    sections: DEFAULT_SECTIONS,
    options: DEFAULT_OPTIONS,
    activeItemId: undefined,
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/** Figmaの基本設計そのままの構成。ロゴ・全セクション・バッジ・オプション付き。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// WithActiveItem
// ─────────────────────────────────────────────────────────────
/**
 * 現在地（アクティブ状態）の表示確認。
 * activeItemId に対象アイテムの id を渡すと、背景色とテキスト色で現在地を示す。
 * Figmaガイドライン：「現在地がわかるようにする。」
 */
export const WithActiveItem = {
  parameters: {
    docs: {
      description: {
        story:
          '`activeItemId` にアイテムの id を渡すことで現在地を明示する（Figmaガイドライン）。',
      },
    },
  },
  args: {
    activeItemId: 'review',
  },
};

// ─────────────────────────────────────────────────────────────
// WithBadge
// ─────────────────────────────────────────────────────────────
/**
 * バッジの表示確認。
 * 件数通知が必要な項目（クチコミ・投稿など）に badge を付与する。
 */
export const WithBadge = {
  parameters: {
    docs: {
      description: {
        story:
          '件数通知が必要なアイテムにのみ badge を付与する。Figmaの基本設計では「クチコミ（99+）」「投稿（7）」に表示。',
      },
    },
  },
  args: {
    sections: [
      {
        label: '管理・運用',
        icon: 'store',
        items: [
          { id: 'shop', label: '店舗', href: '#' },
          { id: 'review', label: 'クチコミ', href: '#', badge: '99+' },
          { id: 'post', label: '投稿', href: '#', badge: '7' },
        ],
      },
    ],
    options: DEFAULT_OPTIONS,
  },
};

// ─────────────────────────────────────────────────────────────
// Minimal
// ─────────────────────────────────────────────────────────────
/**
 * logo・options を省略した最小構成。
 * セクションのみで成立させる場合の参考。
 */
export const Minimal = {
  parameters: {
    docs: {
      description: {
        story:
          'logo・options を省略可能。logo 省略時は alt テキストをフォールバック表示する。options 省略時はオプションエリアが非表示になる。',
      },
    },
  },
  args: {
    logo: undefined,
    sections: [
      {
        label: '管理・運用',
        icon: 'store',
        items: [
          { id: 'shop', label: '店舗', href: '#' },
          { id: 'menu', label: 'メニュー', href: '#' },
        ],
      },
    ],
    options: [],
  },
};
