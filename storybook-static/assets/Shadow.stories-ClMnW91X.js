import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n({token:e,cssValue:t,params:n,use:r}){let i=document.createElement(`div`);i.className=`storybook-shadow__row`;let a=document.createElement(`div`);a.className=`storybook-shadow__square-wrap`;let o=document.createElement(`div`);o.className=`storybook-shadow__square`,o.style.boxShadow=t,a.appendChild(o);let s=document.createElement(`div`);s.className=`storybook-shadow__code`;let c=document.createElement(`p`);c.className=`storybook-shadow__name`,c.textContent=e,s.appendChild(c);let l=document.createElement(`p`);l.className=`storybook-shadow__params`,l.textContent=n,s.appendChild(l);let u=document.createElement(`p`);return u.className=`storybook-shadow__use`,u.textContent=r,i.appendChild(a),i.appendChild(s),i.appendChild(u),i}var r,i,a=e((()=>{t(),r=[{token:`M`,cssValue:`0px 2px 10px 0px rgba(0, 0, 0, 0.15)`,params:`X , Y：0 , 2
Blar：10
Color：#000000
Opacity：0.15`,use:`Shadow_Sとは違い、はっきりと「影」のイメージで使う。情報を強調させたり、操作できるパーツとして認知させたい場合に用いる。モーダルなど。`},{token:`S`,cssValue:`0px 1px 2px 0px rgba(0, 0, 0, 0.15)`,params:`X , Y：0 , 1
Blar：2
Color：#000000
Opacity：0.15`,use:`「影」ではなく「Line」のような用途で使う。Lineでセパレートするよりも視覚的ノイズが発生しづらいメリットがあるが、逆にレイヤーが増えて画面構成がごちゃつくリスクがある。機能性ではなくUI品質の向上のためのバリエーションであり、これを使うことで明確に質感が良くなる場合にのみ用いる。ヘッダーなど。`}],i=({className:e=``}={})=>{let t=document.createElement(`div`);t.className=[`storybook-shadow`,e].filter(Boolean).join(` `);let i=document.createElement(`div`);i.className=`storybook-shadow__head`;let a=document.createElement(`h1`);a.className=`storybook-shadow__head-title`,a.textContent=`Shadow`,i.appendChild(a),t.appendChild(i);let o=document.createElement(`div`);o.className=`storybook-shadow__body`;let s=document.createElement(`div`);s.className=`storybook-shadow__concept`;let c=document.createElement(`div`);c.className=`storybook-shadow__concept-header`;let l=document.createElement(`p`);l.className=`storybook-shadow__concept-label`,l.textContent=`概念`;let u=document.createElement(`p`);u.className=`storybook-shadow__concept-desc`,u.textContent=`どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。`,c.appendChild(l),c.appendChild(u);let d=document.createElement(`p`);d.className=`storybook-shadow__concept-title`,d.textContent=`画面上で情報のレイヤー構造を表現し、直感的に理解しやすくするためのもの。`,s.appendChild(c),s.appendChild(d),o.appendChild(s);let f=document.createElement(`div`);f.className=`storybook-shadow__card`;let p=document.createElement(`div`);p.className=`storybook-shadow__table-header`;let m=document.createElement(`p`);m.className=`storybook-shadow__table-label storybook-shadow__table-label--variation`,m.textContent=`Variation`;let h=document.createElement(`p`);return h.className=`storybook-shadow__table-label storybook-shadow__table-label--use`,h.textContent=`Use`,p.appendChild(m),p.appendChild(h),f.appendChild(p),r.forEach(e=>{f.appendChild(n(e))}),o.appendChild(f),t.appendChild(o),t}})),o,s,c,l;e((()=>{a(),o=`
## 概念

画面上で情報のレイヤー構造を表現し、直感的に理解しやすくするためのもの。

---

## シャドウトークン一覧

| Variation | X , Y | Blur | Color | Opacity | 用途 |
|-----------|-------|------|-------|---------|------|
| **M** | 0 , 2 | 10 | #000000 | 0.15 | Shadow_Sとは違い、はっきりと「影」のイメージで使う。情報を強調させたり、操作できるパーツとして認知させたい場合に用いる。モーダルなど。 |
| **S** | 0 , 1 | 2 | #000000 | 0.15 | 「影」ではなく「Line」のような用途で使う。Lineでセパレートするよりも視覚的ノイズが発生しづらいメリットがあるが、逆にレイヤーが増えて画面構成がごちゃつくリスクがある。機能性ではなくUI品質の向上のためのバリエーションであり、これを使うことで明確に質感が良くなる場合にのみ用いる。ヘッダーなど。 |

---

## CSS 値

| Variation | box-shadow |
|-----------|-----------|
| **M** | \`0px 2px 10px 0px rgba(0, 0, 0, 0.15)\` |
| **S** | \`0px 1px 2px 0px rgba(0, 0, 0, 0.15)\` |
`,s={title:`Shadow`,tags:[`autodocs`],render:e=>i(e),parameters:{layout:`fullscreen`,docs:{description:{component:o}}},argTypes:{className:{table:{disable:!0}}},args:{}},c={},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`M・S の全2トークンを Variation・Use の表形式で一覧表示する。
プレビュースクエアに実際の box-shadow が適用されており、視覚的に差を確認できる。`,...c.parameters?.docs?.description}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};