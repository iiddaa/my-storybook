import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n({token:e,size:t,use:n}){let r=document.createElement(`div`);r.className=`storybook-spacing__row`;let i=document.createElement(`div`);i.className=`storybook-spacing__square-container`;let a=document.createElement(`div`);a.className=`storybook-spacing__square`,a.style.width=`${t}px`,a.style.height=`${t}px`,i.appendChild(a);let o=document.createElement(`div`);o.className=`storybook-spacing__info`;let s=document.createElement(`div`);s.className=`storybook-spacing__code`;let c=document.createElement(`p`);c.className=`storybook-spacing__name`,c.textContent=e;let l=document.createElement(`p`);l.className=`storybook-spacing__size`,l.textContent=`${t}px`,s.appendChild(c),s.appendChild(l);let u=document.createElement(`p`);return u.className=`storybook-spacing__use`,u.textContent=n,o.appendChild(s),o.appendChild(u),r.appendChild(i),r.appendChild(o),r}var r,i,a=e((()=>{t(),r=[{token:`2XS`,size:4,use:`【極小】アイコンと文字の間など、ほぼ密着させたい最小単位。`},{token:`XS`,size:8,use:`【近接】同じグループ内の要素（ラベルと入力、タイトルと本文など）。`},{token:`S`,size:12,use:`【コンテンツ間：小】カード内での要素のグループ分けなど。小さなグループや要素の端のパディングにも使用。（Input、Select、tableなど）`},{token:`M`,size:16,use:`【コンテンツ間：標準】並んでいるカード同士や、リストの行間。`},{token:`L`,size:24,use:`【コンテンツ間：大】同一コンテンツ内の情報を区切る最大単位。ボタン上部や画面端のマージンにも使用。`},{token:`XL`,size:32,use:`【セクション間：小】同一ページ内の異なるセクション（話題・要素の切り替わり）の最小単位。`},{token:`2XL`,size:40,use:`【セクション間：標準】情報の塊同士を離すとき。`},{token:`3XL`,size:48,use:`【セクション間：大】大きな情報の塊同士を離すとき。`},{token:`EXL`,size:60,use:`【余白：大】特定のコンテンツを強調表示させるための大胆な余白など。`}],i=({className:e=``}={})=>{let t=document.createElement(`div`);t.className=[`storybook-spacing`,e].filter(Boolean).join(` `);let i=document.createElement(`div`);i.className=`storybook-spacing__head`;let a=document.createElement(`h1`);a.className=`storybook-spacing__head-title`,a.textContent=`Spacing`,i.appendChild(a),t.appendChild(i);let o=document.createElement(`div`);o.className=`storybook-spacing__body`;let s=document.createElement(`div`);s.className=`storybook-spacing__concept`;let c=document.createElement(`div`);c.className=`storybook-spacing__concept-header`;let l=document.createElement(`p`);l.className=`storybook-spacing__concept-label`,l.textContent=`概念`;let u=document.createElement(`p`);u.className=`storybook-spacing__concept-desc`,u.textContent=`どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。`,c.appendChild(l),c.appendChild(u);let d=document.createElement(`p`);d.className=`storybook-spacing__concept-title`,d.textContent=`要素、またはセクション間の余白の定義。`,s.appendChild(c),s.appendChild(d),o.appendChild(s);let f=document.createElement(`div`);f.className=`storybook-spacing__card`;let p=document.createElement(`div`);p.className=`storybook-spacing__table-header`;let m=document.createElement(`p`);m.className=`storybook-spacing__table-label storybook-spacing__table-label--variation`,m.textContent=`Variation`;let h=document.createElement(`p`);return h.className=`storybook-spacing__table-label storybook-spacing__table-label--use`,h.textContent=`Use`,p.appendChild(m),p.appendChild(h),f.appendChild(p),r.forEach(e=>{f.appendChild(n(e))}),o.appendChild(f),t.appendChild(o),t}})),o,s,c,l;e((()=>{a(),o=`
## 概念

要素、またはセクション間の余白の定義。

> どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

---

## スペーシングトークン一覧

| Variation | サイズ | 用途 |
|-----------|--------|------|
| **2XS** | 4px | 【極小】アイコンと文字の間など、ほぼ密着させたい最小単位。 |
| **XS** | 8px | 【近接】同じグループ内の要素（ラベルと入力、タイトルと本文など）。 |
| **S** | 12px | 【コンテンツ間：小】カード内での要素のグループ分けなど。小さなグループや要素の端のパディングにも使用。（Input、Select、tableなど） |
| **M** | 16px | 【コンテンツ間：標準】並んでいるカード同士や、リストの行間。 |
| **L** | 24px | 【コンテンツ間：大】同一コンテンツ内の情報を区切る最大単位。ボタン上部や画面端のマージンにも使用。 |
| **XL** | 32px | 【セクション間：小】同一ページ内の異なるセクション（話題・要素の切り替わり）の最小単位。 |
| **2XL** | 40px | 【セクション間：標準】情報の塊同士を離すとき。 |
| **3XL** | 48px | 【セクション間：大】大きな情報の塊同士を離すとき。 |
| **EXL** | 60px | 【余白：大】特定のコンテンツを強調表示させるための大胆な余白など。 |

---

## トークンの分類

| 分類 | Variation | 主な用途 |
|------|-----------|----------|
| **要素間** | 2XS / XS / S / M / L | コンポーネント内・コンテンツ間の余白 |
| **セクション間** | XL / 2XL / 3XL | ページ内の異なるセクション間の余白 |
| **特殊余白** | EXL | 強調表示のための大胆な余白 |
`,s={title:`DesignTokens/Spacing`,tags:[`autodocs`],render:e=>i(e),parameters:{layout:`fullscreen`,docs:{description:{component:o}}},argTypes:{className:{table:{disable:!0}}},args:{}},c={},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`2XS〜EXL の全9トークンを Variation・Use の表形式で一覧表示する。
カラースクエアのサイズがトークン値（px）と対応しており、視覚的に差を確認できる。`,...c.parameters?.docs?.description}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};