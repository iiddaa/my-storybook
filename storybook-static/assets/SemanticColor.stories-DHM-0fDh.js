import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n({title:e,description:t,tokens:n}){let r=document.createElement(`div`);r.className=`storybook-semantic-color__category`;let i=document.createElement(`div`);i.className=`storybook-semantic-color__category-header`;let a=document.createElement(`p`);a.className=`storybook-semantic-color__category-title`,a.textContent=e;let o=document.createElement(`p`);o.className=`storybook-semantic-color__category-desc`,o.textContent=t,i.appendChild(a),i.appendChild(o),r.appendChild(i);let s=document.createElement(`div`);s.className=`storybook-semantic-color__card`;let c=document.createElement(`div`);c.className=`storybook-semantic-color__table-header`;let l=document.createElement(`p`);l.className=`storybook-semantic-color__table-label`,l.textContent=`Variation`;let u=document.createElement(`p`);return u.className=`storybook-semantic-color__table-label`,u.textContent=`Use`,c.appendChild(l),c.appendChild(u),s.appendChild(c),n.forEach(({variation:e,primitive:t,color:n,use:r})=>{let i=document.createElement(`div`);i.className=`storybook-semantic-color__row`;let a=document.createElement(`span`);a.className=`storybook-semantic-color__square`,a.style.backgroundColor=n,a.setAttribute(`role`,`img`),a.setAttribute(`aria-label`,`${e} — ${n}`),a.setAttribute(`title`,n);let o=document.createElement(`div`);o.className=`storybook-semantic-color__name-block`;let c=document.createElement(`p`);c.className=`storybook-semantic-color__variation`,c.textContent=e;let l=document.createElement(`p`);l.className=`storybook-semantic-color__primitive`,l.textContent=t,o.appendChild(c),o.appendChild(l);let u=document.createElement(`p`);u.className=`storybook-semantic-color__use`,u.innerHTML=r.replace(/\n/g,`<br>`),i.appendChild(a),i.appendChild(o),i.appendChild(u),s.appendChild(i)}),r.appendChild(s),r}var r,i,a=e((()=>{t(),r=[{id:`text`,title:`Text`,description:`テキストパーツに利用する。`,tokens:[{variation:`Main`,primitive:`Gray/900`,color:`#222222`,use:`読んでもらいたい文字。Title、Head、本文など。`},{variation:`Sub`,primitive:`Gray/600`,color:`#515A65`,use:`一歩引いた文字。Sub Text、補足情報。`},{variation:`Muted`,primitive:`Gray/400`,color:`#858C94`,use:`明確に薄い表現にしたい文字。Caption、プレースホルダー。`},{variation:`Disable`,primitive:`Gray/300`,color:`#ADB2B8`,use:`無効状態。押せないボタンや、非活性の項目。`},{variation:`Inverse`,primitive:`Neutral/White`,color:`#FFFFFF`,use:`濃い背景用。青いボタンの中の白い文字など。`},{variation:`Link`,primitive:`Blue/500`,color:`#318BF7`,use:`標準のリンク色。本文中のリンクなど。`},{variation:`Alert`,primitive:`Red/500`,color:`#EB4D38`,use:`アラート文字。エラー状態の説明など。`}]},{id:`bg`,title:`BG`,description:`背景に利用する。`,tokens:[{variation:`Main`,primitive:`Neutral/White`,color:`#FFFFFF`,use:`基本背景。ページ全体のベースカラー。`},{variation:`Sub`,primitive:`Gray/50`,color:`#F7F7F8`,use:`一歩引いた背景。`},{variation:`Content`,primitive:`Gray/200`,color:`#D6D9DB`,use:`画像やアイコンの後ろに敷く、コンテンツを目立たせるための背景。`},{variation:`Surface`,primitive:`Neutral/White`,color:`#FFFFFF`,use:`浮き上がった要素の背景。モーダルやカードなど。`},{variation:`Accent`,primitive:`Blue/100`,color:`#EAF3FE`,use:`強調したいポジティブな情報の背景色。
選択中状態やグローバルナビゲーションの現在地、アクティブな表現など。`},{variation:`Notice`,primitive:`Gray/100`,color:`#EFF0F1`,use:`補足など目立たせなくてもいい情報の背景。
または、掲載期間が終了したなどネガティブな内容のお知らせ。`},{variation:`Alert`,primitive:`Red/100`,color:`#FDF2F0`,use:`アラート状態。InformationPanelや、Inputなど。`},{variation:`Success`,primitive:`Green/100`,color:`#E4F5EF`,use:`成功した状態。InformationPanelやトーストなど。`},{variation:`Warning`,primitive:`Orange/100`,color:`#FEF4ED`,use:`警告状態。InformationPanelやトーストなど。`}]},{id:`border`,title:`Border`,description:`線に利用する。`,tokens:[{variation:`Main`,primitive:`Gray/200`,color:`#D6D9DB`,use:`基本の線。セパレートライン、枠線など。`},{variation:`Accent`,primitive:`Blue/500`,color:`#318BF7`,use:`強調したいポジティブ表現との併用。
Inputの入力中状態やタブの現在地など。`},{variation:`Alert`,primitive:`Red/500`,color:`#EB4D38`,use:`アラート表現との併用。`},{variation:`Success`,primitive:`Green/500`,color:`#22AD7F`,use:`成功表現との併用。`},{variation:`Warning`,primitive:`Orange/500`,color:`#F78F43`,use:`警告表現との併用。`},{variation:`Inverse`,primitive:`Neutral/White`,color:`#FFFFFF`,use:`濃い背景の場合に利用。`}]},{id:`icon`,title:`Icon`,description:`アイコンに利用する。`,tokens:[{variation:`Main`,primitive:`Gray/900`,color:`#222222`,use:`デフォルトアイコン。ヘッドタイトルやリスト項目との併用。`},{variation:`Link`,primitive:`Blue/500`,color:`#318BF7`,use:`リンク、操作できるアイコン。または青い表現で強調したい時。`},{variation:`Disable`,primitive:`Gray/300`,color:`#ADB2B8`,use:`非アクティブ状態。`},{variation:`Notice`,primitive:`Gray/500`,color:`#5C6670`,use:`補足など目立たせなくてもいい情報との併用。`},{variation:`Alert`,primitive:`Red/500`,color:`#EB4D38`,use:`アラート、エラー表現との併用。`},{variation:`Success`,primitive:`Green/500`,color:`#22AD7F`,use:`成功表現との併用。`},{variation:`Warning`,primitive:`Orange/500`,color:`#F78F43`,use:`警告表現との併用。`},{variation:`Inverse`,primitive:`Neutral/White`,color:`#FFFFFF`,use:`濃い背景の場合に利用。`}]}],i=({className:e=``}={})=>{let t=document.createElement(`div`);t.className=[`storybook-semantic-color`,e].filter(Boolean).join(` `);let i=document.createElement(`div`);i.className=`storybook-semantic-color__head`;let a=document.createElement(`h1`);a.className=`storybook-semantic-color__title`,a.textContent=`Semantic Color`,i.appendChild(a),t.appendChild(i);let o=document.createElement(`div`);o.className=`storybook-semantic-color__body`;let s=document.createElement(`div`);s.className=`storybook-semantic-color__concept`;let c=document.createElement(`div`);c.className=`storybook-semantic-color__concept-label-row`;let l=document.createElement(`p`);l.className=`storybook-semantic-color__concept-label`,l.textContent=`概念`;let u=document.createElement(`p`);u.className=`storybook-semantic-color__concept-tagline`,u.textContent=`どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。`,c.appendChild(l),c.appendChild(u),s.appendChild(c);let d=document.createElement(`div`);d.className=`storybook-semantic-color__concept-body`;let f=document.createElement(`p`);f.textContent=`用途によってカラーを定義。`;let p=document.createElement(`p`);p.textContent=`原則、セマンティックトークンから用途に合わせて色を選択する。`,d.appendChild(f),d.appendChild(p),s.appendChild(d),o.appendChild(s);let m=document.createElement(`div`);return m.className=`storybook-semantic-color__categories`,r.forEach(e=>m.appendChild(n(e))),o.appendChild(m),t.appendChild(o),t}})),o,s,c,l;e((()=>{a(),o=`
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
`,s={title:`DesignTokens/Color/Semantic Colors`,tags:[`autodocs`],render:e=>i(e),parameters:{layout:`fullscreen`,docs:{description:{component:o}}},argTypes:{className:{control:`text`,description:`追加クラス名`,table:{defaultValue:{summary:``}}}},args:{className:``}},c={},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`セマンティックカラー全カテゴリを表示。
Text / BG / Border / Icon の4カテゴリを
Variation・Primitive参照・用途の表形式で一覧表示する。`,...c.parameters?.docs?.description}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};