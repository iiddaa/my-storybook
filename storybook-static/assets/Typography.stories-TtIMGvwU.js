import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n({title:e,descriptions:t,entries:n}){let r=document.createElement(`div`);r.className=`storybook-typography__section`;let i=document.createElement(`div`);i.className=`storybook-typography__section-header`;let a=document.createElement(`p`);a.className=`storybook-typography__section-title`,a.textContent=e,i.appendChild(a),t.forEach(e=>{let t=document.createElement(`p`);t.className=`storybook-typography__section-desc`,t.textContent=e,i.appendChild(t)}),r.appendChild(i);let o=document.createElement(`div`);o.className=`storybook-typography__card`;let s=document.createElement(`div`);return s.className=`storybook-typography__table-header`,[`Preview`,`Variation`,`Use`].forEach(e=>{let t=document.createElement(`p`);t.className=`storybook-typography__table-label`,t.textContent=e,s.appendChild(t)}),o.appendChild(s),n.forEach(({variation:e,fontSize:t,fontWeight:n,isLink:r,use:i})=>{let a=document.createElement(`div`);a.className=`storybook-typography__row`;let s=document.createElement(`div`);s.className=`storybook-typography__preview`;let c=document.createElement(`span`);c.className=`storybook-typography__preview-text`,c.textContent=`Aa`,c.style.fontSize=`${t}px`,c.style.fontWeight=String(n),r&&c.classList.add(`storybook-typography__preview-text--link`),s.appendChild(c);let l=document.createElement(`div`);l.className=`storybook-typography__variation`,l.textContent=e;let u=document.createElement(`div`);u.className=`storybook-typography__use`,u.innerHTML=i.replace(/\n/g,`<br>`),a.appendChild(s),a.appendChild(l),a.appendChild(u),o.appendChild(a)}),r.appendChild(o),r}var r,i,a=e((()=>{t(),r=[{id:`display`,title:`Display`,descriptions:[`ユーザーの感情を動かす「ここぞという時の演出用」「特殊文字」。`,`サイズはUIのバランスを見ながら、期待する効果に合わせて調整する。ページ内で何度も利用すると強調効果が薄れるので多用は控えること。`],entries:[{variation:`Display/EXL/Bold`,fontSize:32,fontWeight:700,isLink:!1,use:`【特殊演出（特大）】ログイン画面、LP、特に強調したい数字などで使用。
「期待感」「インパクト」などを表現したい場合の特別文字。`},{variation:`Display/EXL/Regular`,fontSize:32,fontWeight:300,isLink:!1,use:`【特殊演出（特大）】Boldだと、画面の統一感が崩壊してしまう場合に使う。`},{variation:`Display/2XL/Bold`,fontSize:24,fontWeight:700,isLink:!1,use:`【特殊演出（大）】ログイン画面、LP、特に強調したい数字などで使用。
「期待感」「インパクト」などを表現したい場合の特別文字。`},{variation:`Display/2XL/Regular`,fontSize:24,fontWeight:300,isLink:!1,use:`【特殊演出（大）】Boldだと、画面の統一感が崩壊してしまう場合に使う。`},{variation:`Display/XL/Bold`,fontSize:20,fontWeight:700,isLink:!1,use:`【特殊演出（中）】ログイン画面、LP、特に強調したい数字などで使用。
「期待感」「インパクト」などを表現したい場合の特別文字。`},{variation:`Display/XL/Regular`,fontSize:20,fontWeight:300,isLink:!1,use:`【特殊演出（中）】Boldだと、画面の統一感が崩壊してしまう場合に使う。`}]},{id:`title`,title:`Title`,descriptions:[`ページ全体のテーマを示す「看板」。1画面につき1回、最上部で使用。`],entries:[{variation:`Title/2XL/Bold`,fontSize:24,fontWeight:700,isLink:!1,use:`【ページ看板（大）】主要な画面の最上部で使用。
1画面につき1つのみ。これが標準。`},{variation:`Title/2XL/Regular`,fontSize:24,fontWeight:300,isLink:!1,use:`【ページ看板（大）】Boldだと、画面の統一感が崩壊してしまう場合に使用。`},{variation:`Title/XL/Bold`,fontSize:20,fontWeight:700,isLink:!1,use:`【ページ看板（中）】2XLだと強調しすぎの場合に使用。
1画面につき1つのみ。`},{variation:`Title/XL/Regular`,fontSize:20,fontWeight:300,isLink:!1,use:`【ページ看板（中）】Boldだと、画面の統一感が崩壊してしまう場合に使用。`},{variation:`Title/L/Bold`,fontSize:16,fontWeight:700,isLink:!1,use:`【ページ看板（小）】設定画面や、情報量の多い画面の見出し。
1画面につき1つのみ。`},{variation:`Title/L/Regular`,fontSize:16,fontWeight:300,isLink:!1,use:`【ページ看板（小）】Boldだと、画面の統一感が崩壊してしまう場合に使用。`}]},{id:`head`,title:`Head`,descriptions:[`各セクションやコンテンツの「区切り」「ラベル」。`,`サイズは「Title」>「Head」≧「Body」。`],entries:[{variation:`Head/L/Bold`,fontSize:16,fontWeight:700,isLink:!1,use:`【セクション見出し（大）】コンテンツの大きな塊を分ける区切り。
サイズはTitle > Head ≧ Body`},{variation:`Head/L/Regular`,fontSize:16,fontWeight:300,isLink:!1,use:`【セクション見出し（大）】見出しよりも、中の情報を強調させたい場合に使用。
サイズはTitle > Head ≧ Body`},{variation:`Head/M/Bold`,fontSize:14,fontWeight:700,isLink:!1,use:`【セクション見出し（中）】カード内の題名や、セクション内の中見出し。
サイズはTitle > Head ≧ Body`},{variation:`Head/M/Regular`,fontSize:14,fontWeight:300,isLink:!1,use:`【セクション見出し（中）】見出しよりも、中の情報を強調させたい場合に使用。
サイズはTitle > Head ≧ Body`},{variation:`Head/S/Bold`,fontSize:12,fontWeight:700,isLink:!1,use:`【セクション見出し（小）】情報の最小単位のグループ分けや、項目名（ラベル）に使用。
サイズはTitle > Head ≧ Body`},{variation:`Head/S/Regular`,fontSize:12,fontWeight:300,isLink:!1,use:`【セクション見出し（小）】見出しよりも、中の情報を強調させたい場合に使用。
サイズはTitle > Head ≧ Body`}]},{id:`body`,title:`Body`,descriptions:[`プロダクトの「読みやすさ」を支える標準テキスト。「本文」や「リスト」。`],entries:[{variation:`Body/M/Bold`,fontSize:14,fontWeight:700,isLink:!1,use:`【強調/ボタン】本文中の強調や、ボタン内のラベルなど。`},{variation:`Body/M/Regular`,fontSize:14,fontWeight:300,isLink:!1,use:`【本文】標準テキスト。説明文、リスト、入力値に使用。`}]},{id:`sub-text`,title:`Sub Text`,descriptions:[`本文よりも一歩引いた「補足」。読ませたい文の最小表現。`],entries:[{variation:`Sub Text/S/Bold`,fontSize:12,fontWeight:700,isLink:!1,use:`【補足強調】補足情報の中でも視認性を高めたい場合に使用。`},{variation:`Sub Text/S/Regular`,fontSize:12,fontWeight:300,isLink:!1,use:`【補足】本文に付随する補足情報、メタデータ（日付・投稿者など）に使用。`}]},{id:`caption`,title:`Caption`,descriptions:[`UIの細部を支える最小単位のテキスト。「注釈」「図説」。`,`サイズは「Body」>「Sub Text」≧「Caption」。`],entries:[{variation:`Caption/M/Bold`,fontSize:14,fontWeight:700,isLink:!1,use:`【注釈強調（大）】非常に小さなスペース（バッジの中など）での強調用。`},{variation:`Caption/M/Regular`,fontSize:14,fontWeight:300,isLink:!1,use:`【注釈（大）】フォーム下の注釈、エラーメッセージ、図説に使用。
サイズはBody > Sub Text ≧ Caption`},{variation:`Caption/S/Bold`,fontSize:12,fontWeight:700,isLink:!1,use:`【注釈強調（中）】非常に小さなスペース（バッジの中など）での強調用。`},{variation:`Caption/S/Regular`,fontSize:12,fontWeight:300,isLink:!1,use:`【注釈（中）】フォーム下の注釈、エラーメッセージ、図説に使用。
サイズはBody > Sub Text ≧ Caption`},{variation:`Caption/XS/Bold`,fontSize:10,fontWeight:700,isLink:!1,use:`【注釈強調（小）】非常に小さなスペース（バッジの中など）での強調用。`},{variation:`Caption/XS/Regular`,fontSize:10,fontWeight:300,isLink:!1,use:`【注釈（小）】フォーム下の注釈、エラーメッセージ、図説に使用。
サイズはBody > Sub Text ≧ Caption`}]},{id:`link`,title:`Link`,descriptions:[`システムを操作せず、画面遷移や関連情報を表示するための「リンクテキスト」。ボタンではない。`,`アクセシビリティを考慮してアンダーライン推奨。`],entries:[{variation:`Link/M/Bold`,fontSize:14,fontWeight:700,isLink:!0,use:`【テキストリンク（中）】文章内での遷移や、情報の詳細参照に使用。
アクション実行ではない。`},{variation:`Link/M/Regular`,fontSize:14,fontWeight:300,isLink:!0,use:`【テキストリンク（中）】文章内での遷移や、情報の詳細参照に使用。
アクション実行ではない。`},{variation:`Link/S/Bold`,fontSize:12,fontWeight:700,isLink:!0,use:`【テキストリンク（小）】文章内での遷移や、情報の詳細参照に使用。
アクション実行ではない。`},{variation:`Link/S/Regular`,fontSize:12,fontWeight:300,isLink:!0,use:`【テキストリンク（小）】文章内での遷移や、情報の詳細参照に使用。
アクション実行ではない。`}]}],i=({className:e=``}={})=>{let t=document.createElement(`div`);t.className=[`storybook-typography`,e].filter(Boolean).join(` `);let i=document.createElement(`div`);i.className=`storybook-typography__head`;let a=document.createElement(`h1`);a.className=`storybook-typography__head-title`,a.textContent=`Typography`,i.appendChild(a),t.appendChild(i);let o=document.createElement(`div`);o.className=`storybook-typography__body`;let s=document.createElement(`div`);s.className=`storybook-typography__concept`;let c=document.createElement(`div`);c.className=`storybook-typography__concept-label-row`;let l=document.createElement(`p`);l.className=`storybook-typography__concept-label`,l.textContent=`概念`;let u=document.createElement(`p`);u.className=`storybook-typography__concept-tagline`,u.textContent=`どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。`,c.appendChild(l),c.appendChild(u),s.appendChild(c);let d=document.createElement(`p`);return d.className=`storybook-typography__concept-title`,d.textContent=`フォントシステムを7カテゴリで定義。各カテゴリはPreview / Variation / Useの表形式で構成される。`,s.appendChild(d),o.appendChild(s),r.forEach(e=>{o.appendChild(n(e))}),t.appendChild(o),t}})),o,s,c,l;e((()=>{a(),o=`
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
`,s={title:`DesignTokens/Typography`,tags:[`autodocs`],render:e=>i(e),parameters:{layout:`fullscreen`,docs:{description:{component:o}}},argTypes:{className:{table:{disable:!0}}},args:{}},c={},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`Display / Title / Head / Body / Sub Text / Caption / Link の
全7カテゴリを Preview・Variation・Use の表形式で一覧表示する。`,...c.parameters?.docs?.description}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};