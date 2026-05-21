import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n(e,t,n,r){let o=document.createElement(`button`);o.type=`button`,o.className=`storybook-accordion-list__trigger`,o.setAttribute(`aria-expanded`,String(n)),o.setAttribute(`aria-controls`,r);let s=document.createElement(`span`);s.className=`storybook-accordion-list__icon`,s.setAttribute(`aria-hidden`,`true`),s.innerHTML=n?a:i;let c=document.createElement(`span`);c.className=`storybook-accordion-list__heading`,c.textContent=t.heading,o.appendChild(s),o.appendChild(c),e.appendChild(o);let l=document.createElement(`div`);l.id=r,l.className=`storybook-accordion-list__content`,l.hidden=!n;let u=document.createElement(`p`);u.className=`storybook-accordion-list__body`,u.textContent=t.content,l.appendChild(u),e.appendChild(l),o.addEventListener(`click`,()=>{let e=o.getAttribute(`aria-expanded`)===`true`;o.setAttribute(`aria-expanded`,String(!e)),s.innerHTML=e?i:a,l.hidden=e})}function r(e,t,n,r){let i=document.createElement(`button`);i.type=`button`,i.className=`storybook-accordion-list__trigger`,i.setAttribute(`aria-expanded`,String(n)),i.setAttribute(`aria-controls`,r);let a=document.createElement(`span`);a.className=`storybook-accordion-list__label`,a.textContent=`Q.`;let c=document.createElement(`span`);c.className=`storybook-accordion-list__question`,c.textContent=t.question;let l=document.createElement(`span`);l.className=`storybook-accordion-list__arrow`,l.setAttribute(`aria-hidden`,`true`),l.innerHTML=n?s:o,i.appendChild(a),i.appendChild(c),i.appendChild(l),e.appendChild(i);let u=document.createElement(`div`);u.id=r,u.className=`storybook-accordion-list__answer`,u.hidden=!n;let d=document.createElement(`span`);d.className=`storybook-accordion-list__label`,d.textContent=`A.`;let f=document.createElement(`span`);f.className=`storybook-accordion-list__answer-text`,f.textContent=t.answer,u.appendChild(d),u.appendChild(f),e.appendChild(u),i.addEventListener(`click`,()=>{let e=i.getAttribute(`aria-expanded`)===`true`;i.setAttribute(`aria-expanded`,String(!e)),l.innerHTML=e?o:s,u.hidden=e})}var i,a,o,s,c,l=e((()=>{t(),i=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,a=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,o=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,s=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 12.5L10 7.5L15 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,c=({pattern:e=`list`,items:t=[],openIndexes:i=[]}={})=>{let a=new Set(i),o=0,s=document.createElement(`div`);return s.className=`storybook-accordion-list storybook-accordion-list--${e}`,t.forEach((t,i)=>{let c=document.createElement(`div`);c.className=`storybook-accordion-list__item`;let l=a.has(i),u=`accordion-content-${++o}`;e===`list`?n(c,t,l,u):r(c,t,l,u),s.appendChild(c)}),s}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{l(),u=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **全体像を把握しやすくするために見出しのみを表示し、自由に開閉して内容を確認できる。**

---

## 基本設計

AccordionList には \`list\`（シンプルなアコーディオン）と \`faq\`（Q&A形式）の2パターンがある。

### List パターン

| 状態 | 説明 |
|------|------|
| Default | \`caret_right\` アイコン + 見出し（Head/L/Bold 16px）、背景なし |
| hover | 背景 \`#F7F7F8\` |
| 展開時 | \`caret_down\` アイコンに切り替わり、本文（Body/M/Regular 14px）が表示される |

- アイテム間には区切り線（\`1px solid #EFF0F1\`）を設ける
- 本文はアイコン幅（24px）＋gap（4px）= **28px** インデント

### FAQ パターン

| 要素 | スタイル |
|------|---------|
| Q. / A. ラベル | Head/L/Bold 16px、color \`#318BF7\` |
| 質問 / 回答テキスト | Head/L/Regular 16px、color \`#222222\` |
| arrow アイコン | 20×20px（閉じている: ↓、開いている: ↑） |

- 質問行の padding: \`8px\`、borderRadius: \`8px\`
- hover 時: 質問行の背景 \`#F5F9FF\`
- 展開時: 回答行（A. + 回答テキスト）が質問行の下に表示される

---

## 使用時に気をつけておくこと

- **対象となる情報が、展開できることが直感的に理解できること**
- **何が包含されているのかが予想できる見出しを設けること**
`,d=[{heading:`見出し`,content:`中身の文章`},{heading:`見出し`,content:`中身の文章`},{heading:`見出し`,content:`中身の文章`}],f=[{heading:`とても長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い見出し`,content:`とても長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い中身の文章`},{heading:`見出し`,content:`中身の文章`}],p=[{question:`質問`,answer:`答え`},{question:`質問`,answer:`答え`},{question:`質問`,answer:`答え`}],m=[{question:`とても長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い質問`,answer:`とても長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い質問の答え`},{question:`質問`,answer:`答え`}],h={title:`AccordionList`,tags:[`autodocs`],render:e=>c(e),parameters:{layout:`padded`,docs:{description:{component:u}}},argTypes:{pattern:{control:`select`,options:[`list`,`faq`],description:`シンプルなアコーディオン（list）か Q&A 形式（faq）かを選択する`,table:{defaultValue:{summary:`list`}}},items:{control:`object`,description:'アイテムの配列。pattern="list" の場合は `{ heading, content }`、pattern="faq" の場合は `{ question, answer }` の形式。'},openIndexes:{control:`object`,description:`初期状態で開いているアイテムのインデックス配列（0始まり）。`,table:{defaultValue:{summary:`[]`}}}}},g={args:{pattern:`list`,items:d,openIndexes:[]}},_={name:`List / 展開済みあり`,args:{pattern:`list`,items:d,openIndexes:[0]}},v={name:`List / 長いテキスト`,args:{pattern:`list`,items:f,openIndexes:[0]}},y={name:`FAQ パターン`,args:{pattern:`faq`,items:p,openIndexes:[]}},b={name:`FAQ / 展開済みあり`,args:{pattern:`faq`,items:p,openIndexes:[0]}},x={name:`FAQ / 長いテキスト`,args:{pattern:`faq`,items:m,openIndexes:[0]}},S={name:`パターン比較`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-direction: column; gap: 48px;`,[{label:`List パターン（1件目が展開済み）`,args:{pattern:`list`,items:d,openIndexes:[0]}},{label:`FAQ パターン（1件目が展開済み）`,args:{pattern:`faq`,items:p,openIndexes:[0]}}].forEach(({label:t,args:n})=>{let r=document.createElement(`div`);r.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let i=document.createElement(`p`);i.style.cssText=`font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;`,i.textContent=t,r.appendChild(i),r.appendChild(c(n)),e.appendChild(r)}),e}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    pattern: 'list',
    items: LIST_ITEMS,
    openIndexes: []
  }
}`,...g.parameters?.docs?.source},description:{story:`List パターン。全アイテム閉じた初期状態。`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'List / 展開済みあり',
  args: {
    pattern: 'list',
    items: LIST_ITEMS,
    openIndexes: [0]
  }
}`,..._.parameters?.docs?.source},description:{story:`List パターン / 1件目が展開済みの状態。`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'List / 長いテキスト',
  args: {
    pattern: 'list',
    items: LIST_ITEMS_LONG,
    openIndexes: [0]
  }
}`,...v.parameters?.docs?.source},description:{story:`List パターン / 長い見出し・本文の折り返しを確認する。`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'FAQ パターン',
  args: {
    pattern: 'faq',
    items: FAQ_ITEMS,
    openIndexes: []
  }
}`,...y.parameters?.docs?.source},description:{story:`FAQ パターン。全アイテム閉じた初期状態。`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'FAQ / 展開済みあり',
  args: {
    pattern: 'faq',
    items: FAQ_ITEMS,
    openIndexes: [0]
  }
}`,...b.parameters?.docs?.source},description:{story:`FAQ パターン / 1件目が展開済みの状態。`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'FAQ / 長いテキスト',
  args: {
    pattern: 'faq',
    items: FAQ_ITEMS_LONG,
    openIndexes: [0]
  }
}`,...x.parameters?.docs?.source},description:{story:`FAQ パターン / 長いテキストの折り返しを確認する。`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'パターン比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 48px;';
    const sections = [{
      label: 'List パターン（1件目が展開済み）',
      args: {
        pattern: 'list',
        items: LIST_ITEMS,
        openIndexes: [0]
      }
    }, {
      label: 'FAQ パターン（1件目が展開済み）',
      args: {
        pattern: 'faq',
        items: FAQ_ITEMS,
        openIndexes: [0]
      }
    }];
    sections.forEach(({
      label,
      args
    }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const heading = document.createElement('p');
      heading.style.cssText = 'font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;';
      heading.textContent = label;
      section.appendChild(heading);
      section.appendChild(createAccordionList(args));
      wrapper.appendChild(section);
    });
    return wrapper;
  }
}`,...S.parameters?.docs?.source},description:{story:`List と FAQ の2パターンを並べて比較するビュー。
Storybook の Controls は使用不可（render を直接定義）。`,...S.parameters?.docs?.description}}},C=[`Default`,`ListExpanded`,`ListLongText`,`Faq`,`FaqExpanded`,`FaqLongText`,`AllPatterns`]}))();export{S as AllPatterns,g as Default,y as Faq,b as FaqExpanded,x as FaqLongText,_ as ListExpanded,v as ListLongText,C as __namedExportsOrder,h as default};