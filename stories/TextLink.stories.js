import { createTextLink } from '../src/components/TextLink';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Text Link ページより
// node-id: 240:11204
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **システムを操作せず、画面を遷移したり関連情報を表示したりするためのテキスト要素。**

---

## 基本設計

| 要素 | 仕様 |
|------|------|
| 色 | \`#318bf7\`（--text/link） |
| テキスト装飾 | 下線あり（underline / solid） |
| フォント | Hiragino Sans W3 / 14px / line-height 1.5 |

---

## 使用時に気をつけておくこと

- ユーザーを別の場所に移動させたり、情報を表示するために使う。
  - リンクは「どこかへいく」ためのもの。ボタンは「何かをする」ためのもの。
- 通常のテキスト表現とは差分を設けて、クリックできることを明確に伝える。
  - アクセシビリティを考慮した差分をつける。（下線、アイコン配置など）
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'TextLink',
  tags: ['autodocs'],
  render: (args) => createTextLink(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'リンクのテキスト',
      table: { defaultValue: { summary: 'テキスト' } },
    },
    href: {
      control: 'text',
      description: 'リンク先 URL',
      table: { defaultValue: { summary: '#' } },
    },
    target: {
      control: 'select',
      options: ['_self', '_blank'],
      description: 'リンクターゲット（_blank 時は rel="noopener noreferrer" を自動付与）',
      table: { defaultValue: { summary: '_self' } },
    },
    onClick: {
      action: 'clicked',
      description: 'クリック時のコールバック（設定時は href 遷移を preventDefault）',
    },
  },
  args: {
    text: 'テキスト',
    href: '#',
    target: '_self',
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/**
 * 基本のテキストリンク。
 * Figma「基本設計」に示されたブルー（#318bf7）＋下線のスタイル。
 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// ExternalLink（外部リンク）
// ─────────────────────────────────────────────────────────────
/**
 * 外部サイトへのリンク。
 * `target="_blank"` 指定時は `rel="noopener noreferrer"` を自動付与する。
 */
export const ExternalLink = {
  parameters: {
    docs: {
      description: {
        story:
          '`target="_blank"` を使った外部リンク。セキュリティのため `rel="noopener noreferrer"` が自動付与される。',
      },
    },
  },
  args: {
    text: '外部サイトを開く',
    href: 'https://example.com',
    target: '_blank',
  },
};

// ─────────────────────────────────────────────────────────────
// Inline（テキスト中への埋め込み）
// ─────────────────────────────────────────────────────────────
/**
 * テキスト中にリンクを埋め込んだ例。
 * 通常テキストとの色・下線の差分によりクリック可能であることが伝わる。
 */
export const Inline = {
  parameters: {
    docs: {
      description: {
        story:
          'テキスト中へのインライン埋め込み例。通常テキストとのコントラストでクリック可能であることを伝える（Figma 使用時の注意より）。',
      },
    },
  },
  render: () => {
    const wrapper = document.createElement('p');
    wrapper.style.cssText =
      "font-family: 'Hiragino Sans', sans-serif; font-size: 14px; line-height: 1.5; color: #222;";
    wrapper.textContent = '詳細については、';
    wrapper.appendChild(createTextLink({ text: 'こちらのページ', href: '#' }));
    const after = document.createTextNode('をご確認ください。');
    wrapper.appendChild(after);
    return wrapper;
  },
};
