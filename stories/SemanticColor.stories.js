import { createSemanticColor } from '../src/components/SemanticColor';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Semantic Color ページより
// node-id: 370:8075
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

用途によってカラーを定義。
原則、セマンティックトークンから用途に合わせて色を選択する。

> どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

---

## セマンティックトークンの構造

Primitive Color（原色定義）を参照元とし、**用途（Variation）** ごとにトークンを割り当てる。
トークン名はFigmaに合わせてTitle Case（例: \`Main\`, \`Sub\`, \`Muted\`）。

| カテゴリ | 説明 |
|---------|------|
| **Text** | テキストパーツに利用する |
| **BG** | 背景に利用する |
| **Border** | 線に利用する |
| **Icon** | アイコンに利用する |

---

## Text

テキストパーツに利用する。

| Variation | Primitive参照 | 用途 |
|-----------|--------------|------|
| **Main** | Gray/900 \`#222222\` | 読んでもらいたい文字。Title、Head、本文など。 |
| **Sub** | Gray/600 \`#515A65\` | 一歩引いた文字。Sub Text、補足情報。 |
| **Muted** | Gray/400 \`#858C94\` | 明確に薄い表現にしたい文字。Caption、プレースホルダー。 |
| **Disable** | Gray/300 \`#ADB2B8\` | 無効状態。押せないボタンや、非活性の項目。 |
| **Inverse** | Neutral/White \`#FFFFFF\` | 濃い背景用。青いボタンの中の白い文字など。 |
| **Link** | Blue/500 \`#318BF7\` | 標準のリンク色。本文中のリンクなど。 |
| **Alert** | Red/500 \`#EB4D38\` | アラート文字。エラー状態の説明など。 |

---

## BG

背景に利用する。

| Variation | Primitive参照 | 用途 |
|-----------|--------------|------|
| **Main** | Neutral/White \`#FFFFFF\` | 基本背景。ページ全体のベースカラー。 |
| **Sub** | Gray/50 \`#F7F7F8\` | 一歩引いた背景。 |
| **Content** | Gray/200 \`#D6D9DB\` | 画像やアイコンの後ろに敷く、コンテンツを目立たせるための背景。 |
| **Surface** | Neutral/White \`#FFFFFF\` | 浮き上がった要素の背景。モーダルやカードなど。 |
| **Accent** | Blue/100 \`#EAF3FE\` | 強調したいポジティブな情報の背景色。選択中状態やアクティブな表現など。 |
| **Notice** | Gray/100 \`#EFF0F1\` | 補足など目立たせなくてもいい情報の背景。または、ネガティブな内容のお知らせ。 |
| **Alert** | Red/100 \`#FDF2F0\` | アラート状態。InformationPanelや、Inputなど。 |
| **Success** | Green/100 \`#E4F5EF\` | 成功した状態。InformationPanelやトーストなど。 |
| **Warning** | Orange/100 \`#FEF4ED\` | 警告状態。InformationPanelやトーストなど。 |

---

## Border

線に利用する。

| Variation | Primitive参照 | 用途 |
|-----------|--------------|------|
| **Main** | Gray/200 \`#D6D9DB\` | 基本の線。セパレートライン、枠線など。 |
| **Accent** | Blue/500 \`#318BF7\` | 強調ポジティブ表現との併用。Inputの入力中状態やタブの現在地など。 |
| **Alert** | Red/500 \`#EB4D38\` | アラート表現との併用。 |
| **Success** | Green/500 \`#22AD7F\` | 成功表現との併用。 |
| **Warning** | Orange/500 \`#F78F43\` | 警告表現との併用。 |
| **Inverse** | Neutral/White \`#FFFFFF\` | 濃い背景の場合に利用。 |

---

## Icon

アイコンに利用する。

| Variation | Primitive参照 | 用途 |
|-----------|--------------|------|
| **Main** | Gray/900 \`#222222\` | デフォルトアイコン。ヘッドタイトルやリスト項目との併用。 |
| **Link** | Blue/500 \`#318BF7\` | リンク、操作できるアイコン。または青い表現で強調したい時。 |
| **Disable** | Gray/300 \`#ADB2B8\` | 非アクティブ状態。 |
| **Notice** | Gray/500 \`#5C6670\` | 補足など目立たせなくてもいい情報との併用。 |
| **Alert** | Red/500 \`#EB4D38\` | アラート、エラー表現との併用。 |
| **Success** | Green/500 \`#22AD7F\` | 成功表現との併用。 |
| **Warning** | Orange/500 \`#F78F43\` | 警告表現との併用。 |
| **Inverse** | Neutral/White \`#FFFFFF\` | 濃い背景の場合に利用。 |

---

## 使用上の注意

- **Primitive Color を直接使用しない**。必ずセマンティックトークンを経由して色を指定する。
- 同じ色値でも、用途が異なれば異なるトークンを使用すること（例: Text/Main と Icon/Main は同じ Gray/900 だが、テキストとアイコンで使い分ける）。
- \`Inverse\` 系のトークンは、濃い背景（青いボタンなど）の上に乗せる要素に使用する。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'DesignTokens/Color/Semantic Colors',
  tags: ['autodocs'],
  render: (args) => createSemanticColor(args),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: '追加クラス名',
      table: { defaultValue: { summary: '' } },
    },
  },
  args: {
    className: '',
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/**
 * セマンティックカラー全カテゴリを表示。
 * Text / BG / Border / Icon の4カテゴリを
 * Variation・Primitive参照・用途の表形式で一覧表示する。
 */
export const Default = {};
