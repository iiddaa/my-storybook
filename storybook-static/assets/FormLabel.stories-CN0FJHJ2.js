import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({label:e=`ラベル`,required:t=!1,description:n=``}={})=>{let r=document.createElement(`div`);r.className=`storybook-form-label`;let i=document.createElement(`div`);i.className=`storybook-form-label__header`;let a=document.createElement(`span`);if(a.className=`storybook-form-label__text`,a.textContent=e,i.appendChild(a),t){let e=document.createElement(`span`);e.className=`storybook-form-label__required`,e.textContent=`必須`,i.appendChild(e)}if(r.appendChild(i),n){let e=document.createElement(`p`);e.className=`storybook-form-label__description`,e.textContent=n,r.appendChild(e)}return r}})),i,a,o,s,c,l;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **エリアに何を入力すべきなのか、必須かどうかも含めて示すもの。**

---

## 基本設計

FormLabel は **ラベルテキスト**・**必須バッジ**・**説明文** の3要素で構成される。

| 要素 | 仕様 |
|------|------|
| ラベルテキスト | Hiragino Sans W6 / 14px / \`#222\` / 1行で収める |
| 必須バッジ | テキスト「必須」/ 10px W3 / オレンジ（\`#f78f43\`）ボーダー＋文字色 / 背景白 / pill 形状（border-radius: 99px） |
| 説明文 | Hiragino Sans W3 / 12px / \`#515a65\` / ラベル直下に配置 |

### バリエーション

| パターン | 説明 |
|----------|------|
| ラベルのみ | 必須バッジ・説明文なし。シンプルなラベル。 |
| ラベル + 必須 | 必須入力フィールドに付与するバッジを右隣に表示。 |
| ラベル + 必須 + 説明文 | 入力例・補足説明が必要な場合は説明文も追加。 |

---

## 使用時に気をつけておくこと

- 入力内容が具体的に正確にわかるラベルにする。ラベルは**1行で収める**。（説明文は含まない）
- 不要な装飾や重複表現を避ける。
- プロダクト内で、配置やスタイルの一貫性を保つ。
`,a={title:`FormLabel`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:i}}},argTypes:{label:{control:`text`,description:`ラベルテキスト（1行で収める）`,table:{defaultValue:{summary:`ラベル`}}},required:{control:`boolean`,description:`必須バッジを表示するか`,table:{defaultValue:{summary:`false`}}},description:{control:`text`,description:`説明文（空文字の場合は非表示）`,table:{defaultValue:{summary:``}}}},args:{label:`ラベル`,required:!1,description:``}},o={},s={parameters:{docs:{description:{story:"必須バッジあり。ラベルの右隣にオレンジ（`#f78f43`）ボーダーの pill バッジを表示（Figma「02 Label/Required」）。"}}},args:{required:!0}},c={parameters:{docs:{description:{story:"必須バッジ＋説明文あり。ラベル直下に補足テキストを 12px・`#515a65` で表示（Figma「基本設計」第2パターン）。"}}},args:{required:!0,description:`説明文`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source},description:{story:`ラベルテキストのみ。必須バッジ・説明文なし。最もシンプルな形。`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '必須バッジあり。ラベルの右隣にオレンジ（\`#f78f43\`）ボーダーの pill バッジを表示（Figma「02 Label/Required」）。'
      }
    }
  },
  args: {
    required: true
  }
}`,...s.parameters?.docs?.source},description:{story:"必須入力フィールドに使用。ラベル右隣にオレンジの「必須」バッジを表示。\nバッジはボーダー付き pill 形状（`#f78f43`）。",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '必須バッジ＋説明文あり。ラベル直下に補足テキストを 12px・\`#515a65\` で表示（Figma「基本設計」第2パターン）。'
      }
    }
  },
  args: {
    required: true,
    description: '説明文'
  }
}`,...c.parameters?.docs?.source},description:{story:"補足説明が必要な場合。ラベル下に説明文（12px / `#515a65`）を追加。\nFigmaの「基本設計」第2パターンに対応。",...c.parameters?.docs?.description}}},l=[`Default`,`WithRequired`,`WithDescription`]}))();export{o as Default,c as WithDescription,s as WithRequired,l as __namedExportsOrder,a as default};