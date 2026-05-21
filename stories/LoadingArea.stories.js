import { createLoadingArea } from '../src/components/LoadingArea';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" LoadingArea ページより
// node-id: 262:14073
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **「システムが作動中であること」「もう少しで結果が出ること」を伝え、待つ間の安心感を持たせるためのもの。**

---

## 基本設計

スピナーは中央に配置し、ローディングエリア全体を占有する。

| サイズ | 直径 | stroke幅 | 使い所 |
|--------|------|---------|--------|
| M      | 48px | 5px     | 標準（デフォルト） |
| S      | 24px | 2.5px   | 狭いエリアや小さいコンポーネント内 |

---

## 使用時に気をつけておくこと

**進捗を測定できないローディング処理に使用する。測定できる場合は ProgressBar を優先する。**

| | LoadingArea | ProgressBar | skeleton |
|--|-------------|-------------|---------|
| **使い所** | 基本 | 待ち時間が長くて推定できる処理 | 待ち時間の体験を特別良くしたい時 |
| **メリット** | サイズ適応・軽い | 待つストレスを軽減できる | 表示内容が事前に想像できる |
| **デメリット** | ストレス軽減が低い | 開発コストが高い | レイアウトごと作成必要で管理コスト高い |
| **利用例** | — | アップロード・ダウンロード | ホーム画面 |
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'LoadingArea',
  tags: ['autodocs'],
  render: (args) => createLoadingArea(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['M', 'S'],
      description: 'スピナーのサイズ。M=48px（デフォルト）、S=24px（狭いエリア向け）。',
      table: { defaultValue: { summary: 'M' } },
    },
    height: {
      control: 'text',
      description:
        'ローディングエリアの高さ。数値（px）または文字列（例: "50%"）。省略時は高さを固定しない。',
      table: { defaultValue: { summary: 'null' } },
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────

/** M サイズ（デフォルト）。標準のローディング表示。 */
export const Default = {
  args: {
    size: 'M',
    height: 200,
  },
};

/** S サイズ。狭いエリアや小さいコンポーネント内で使用する。 */
export const Small = {
  name: 'Small (S)',
  args: {
    size: 'S',
    height: 80,
  },
};

/**
 * M・S の2サイズを並べて比較するビュー。
 * Storybook の Controls は使用不可（render を直接定義）。
 */
export const SizesComparison = {
  name: 'サイズ比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 48px;';

    const sizes = [
      { label: 'M サイズ（48px）', args: { size: 'M', height: 200 } },
      { label: 'S サイズ（24px）', args: { size: 'S', height: 80 } },
    ];

    sizes.forEach(({ label, args }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';

      const heading = document.createElement('p');
      heading.style.cssText =
        'font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;';
      heading.textContent = label;

      section.appendChild(heading);
      section.appendChild(createLoadingArea(args));
      wrapper.appendChild(section);
    });

    return wrapper;
  },
};
