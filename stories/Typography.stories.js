import { createTypography } from '../src/components/Typography';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Typography ページより
// node-id: 392:4505
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

フォントシステムを7カテゴリで定義。各カテゴリはPreview / Variation / Useの表形式で構成される。

---

## カテゴリ構成

| カテゴリ | 役割 |
|---------|------|
| **Display** | ユーザーの感情を動かす演出用・特殊文字。ページ内での多用は避ける |
| **Title** | ページ全体のテーマを示す「看板」。1画面につき1回、最上部で使用 |
| **Head** | 各セクションやコンテンツの「区切り」「ラベル」。サイズは Title > Head ≧ Body |
| **Body** | プロダクトの「読みやすさ」を支える標準テキスト。本文・リスト |
| **Sub Text** | 本文よりも一歩引いた「補足」。読ませたい文の最小表現 |
| **Caption** | UIの細部を支える最小単位のテキスト。注釈・図説。サイズは Body > Sub Text ≧ Caption |
| **Link** | 画面遷移や関連情報を表示するためのリンクテキスト。ボタンではない |

---

## Display

ユーザーの感情を動かす「ここぞという時の演出用」「特殊文字」。
サイズはUIのバランスを見ながら、期待する効果に合わせて調整する。ページ内で何度も利用すると強調効果が薄れるので多用は控えること。

| Variation | サイズ | font-weight | 用途 |
|-----------|--------|-------------|------|
| **Display/EXL/Bold** | 32px | Bold | 【特殊演出（特大）】ログイン画面、LP、特に強調したい数字などで使用 |
| **Display/EXL/Regular** | 32px | Regular | 【特殊演出（特大）】Boldだと画面の統一感が崩壊してしまう場合 |
| **Display/2XL/Bold** | 24px | Bold | 【特殊演出（大）】ログイン画面、LP、特に強調したい数字などで使用 |
| **Display/2XL/Regular** | 24px | Regular | 【特殊演出（大）】Boldだと画面の統一感が崩壊してしまう場合 |
| **Display/XL/Bold** | 20px | Bold | 【特殊演出（中）】ログイン画面、LP、特に強調したい数字などで使用 |
| **Display/XL/Regular** | 20px | Regular | 【特殊演出（中）】Boldだと画面の統一感が崩壊してしまう場合 |

---

## Title

ページ全体のテーマを示す「看板」。1画面につき1回、最上部で使用。

| Variation | サイズ | font-weight | 用途 |
|-----------|--------|-------------|------|
| **Title/2XL/Bold** | 24px | Bold | 【ページ看板（大）】主要な画面の最上部。1画面につき1つ。これが標準 |
| **Title/2XL/Regular** | 24px | Regular | 【ページ看板（大）】Boldだと統一感が崩壊してしまう場合 |
| **Title/XL/Bold** | 20px | Bold | 【ページ看板（中）】2XLだと強調しすぎの場合 |
| **Title/XL/Regular** | 20px | Regular | 【ページ看板（中）】Boldだと統一感が崩壊してしまう場合 |
| **Title/L/Bold** | 16px | Bold | 【ページ看板（小）】設定画面や情報量の多い画面の見出し |
| **Title/L/Regular** | 16px | Regular | 【ページ看板（小）】Boldだと統一感が崩壊してしまう場合 |

---

## Head

各セクションやコンテンツの「区切り」「ラベル」。
サイズは「Title」>「Head」≧「Body」。

| Variation | サイズ | font-weight | 用途 |
|-----------|--------|-------------|------|
| **Head/L/Bold** | 16px | Bold | 【セクション見出し（大）】コンテンツの大きな塊を分ける区切り |
| **Head/L/Regular** | 16px | Regular | 【セクション見出し（大）】見出しよりも中の情報を強調させたい場合 |
| **Head/M/Bold** | 14px | Bold | 【セクション見出し（中）】カード内の題名や、セクション内の中見出し |
| **Head/M/Regular** | 14px | Regular | 【セクション見出し（中）】見出しよりも中の情報を強調させたい場合 |
| **Head/S/Bold** | 12px | Bold | 【セクション見出し（小）】情報の最小単位のグループ分けや項目名（ラベル） |
| **Head/S/Regular** | 12px | Regular | 【セクション見出し（小）】見出しよりも中の情報を強調させたい場合 |

---

## Body

プロダクトの「読みやすさ」を支える標準テキスト。「本文」や「リスト」。

| Variation | サイズ | font-weight | 用途 |
|-----------|--------|-------------|------|
| **Body/M/Bold** | 14px | Bold | 【強調/ボタン】本文中の強調や、ボタン内のラベルなど |
| **Body/M/Regular** | 14px | Regular | 【本文】標準テキスト。説明文、リスト、入力値に使用 |

---

## Sub Text

本文よりも一歩引いた「補足」。読ませたい文の最小表現。

| Variation | サイズ | font-weight | 用途 |
|-----------|--------|-------------|------|
| **Sub Text/S/Bold** | 12px | Bold | 【補足強調】補足情報の中でも視認性を高めたい場合 |
| **Sub Text/S/Regular** | 12px | Regular | 【補足】本文に付随する補足情報、メタデータ（日付・投稿者など） |

---

## Caption

UIの細部を支える最小単位のテキスト。「注釈」「図説」。
サイズは「Body」>「Sub Text」≧「Caption」。

| Variation | サイズ | font-weight | 用途 |
|-----------|--------|-------------|------|
| **Caption/M/Bold** | 14px | Bold | 【注釈強調（大）】バッジの中などでの強調用 |
| **Caption/M/Regular** | 14px | Regular | 【注釈（大）】フォーム下の注釈、エラーメッセージ、図説 |
| **Caption/S/Bold** | 12px | Bold | 【注釈強調（中）】バッジの中などでの強調用 |
| **Caption/S/Regular** | 12px | Regular | 【注釈（中）】フォーム下の注釈、エラーメッセージ、図説 |
| **Caption/XS/Bold** | 10px | Bold | 【注釈強調（小）】バッジの中などでの強調用 |
| **Caption/XS/Regular** | 10px | Regular | 【注釈（小）】フォーム下の注釈、エラーメッセージ、図説 |

---

## Link

システムを操作せず、画面遷移や関連情報を表示するための「リンクテキスト」。ボタンではない。
アクセシビリティを考慮してアンダーライン推奨。

| Variation | サイズ | font-weight | 用途 |
|-----------|--------|-------------|------|
| **Link/M/Bold** | 14px | Bold | 【テキストリンク（中）】文章内での遷移や、情報の詳細参照 |
| **Link/M/Regular** | 14px | Regular | 【テキストリンク（中）】文章内での遷移や、情報の詳細参照 |
| **Link/S/Bold** | 12px | Bold | 【テキストリンク（小）】文章内での遷移や、情報の詳細参照 |
| **Link/S/Regular** | 12px | Regular | 【テキストリンク（小）】文章内での遷移や、情報の詳細参照 |
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'DesignTokens/Typography',
  tags: ['autodocs'],
  render: (args) => createTypography(args),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    className: { table: { disable: true } },
  },
  args: {},
};

// ─────────────────────────────────────────────────────────────
// Default（全カテゴリカタログ）
// ─────────────────────────────────────────────────────────────
/**
 * Display / Title / Head / Body / Sub Text / Caption / Link の
 * 全7カテゴリを Preview・Variation・Use の表形式で一覧表示する。
 */
export const Default = {};
