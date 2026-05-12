import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n={arrowLeft:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,arrowRight:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,caretDown:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4.5 6.5L8 10L11.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`},r=({totalCount:e=200,totalPages:t=2,currentPage:r=1,unit:i=`件`,showPerPage:a=!1,perPage:o=100,perPageOptions:s=[25,50,100],disabled:c=!1,onPageChange:l=null,onPerPageChange:u=null}={})=>{let d=document.createElement(`div`);d.className=`storybook-pagination`,d.setAttribute(`role`,`navigation`),d.setAttribute(`aria-label`,`ページネーション`);let f=(r-1)*o+1,p=Math.min(r*o,e),m=document.createElement(`span`);if(m.className=`storybook-pagination__count`,m.textContent=`${f} - ${p} / ${e}${i}`,d.appendChild(m),a){let e=document.createElement(`div`);e.className=`storybook-pagination__per-page`;let t=document.createElement(`div`);t.className=[`storybook-pagination__per-page-field`,c?`storybook-pagination__per-page-field--disabled`:``].filter(Boolean).join(` `);let r=document.createElement(`select`);r.className=`storybook-pagination__per-page-select`,r.disabled=c,r.setAttribute(`aria-label`,`1ページの表示件数`),s.forEach(e=>{let t=document.createElement(`option`);t.value=String(e),t.textContent=`${e}件`,t.selected=e===o,r.appendChild(t)}),typeof u==`function`&&r.addEventListener(`change`,e=>u(Number(e.target.value)));let i=document.createElement(`span`);i.className=`storybook-pagination__per-page-caret`,i.innerHTML=n.caretDown,t.appendChild(r),t.appendChild(i),e.appendChild(t);let a=document.createElement(`span`);a.className=`storybook-pagination__per-page-label`,a.textContent=`表示`,e.appendChild(a),d.appendChild(e)}let h=document.createElement(`div`);h.className=`storybook-pagination__pages`;let g=c||r<=1,_=document.createElement(`button`);_.type=`button`,_.className=[`storybook-pagination__btn`,`storybook-pagination__btn--prev`,g?`storybook-pagination__btn--inactive`:``].filter(Boolean).join(` `),_.setAttribute(`aria-label`,`前のページへ`),g&&_.setAttribute(`aria-disabled`,`true`),_.innerHTML=n.arrowLeft,!g&&typeof l==`function`&&_.addEventListener(`click`,()=>l(r-1)),h.appendChild(_);let v=document.createElement(`div`);v.className=`storybook-pagination__page-count`;let y=document.createElement(`input`);y.type=`text`,y.inputMode=`numeric`,y.className=[`storybook-pagination__page-input`,c?`storybook-pagination__page-input--disabled`:``].filter(Boolean).join(` `),y.value=String(r),y.disabled=c,y.setAttribute(`aria-label`,`ページ番号（全${t}ページ）`);let b=()=>{if(typeof l!=`function`)return;let e=Math.min(Math.max(1,parseInt(y.value,10)||1),t);y.value=String(e),l(e)};y.addEventListener(`blur`,b),y.addEventListener(`keydown`,e=>{e.key===`Enter`&&b()});let x=document.createElement(`span`);x.className=`storybook-pagination__page-total`,x.textContent=`/${t}ページ`,v.appendChild(y),v.appendChild(x),h.appendChild(v);let S=c||r>=t,C=document.createElement(`button`);return C.type=`button`,C.className=[`storybook-pagination__btn`,`storybook-pagination__btn--next`,S?`storybook-pagination__btn--inactive`:``].filter(Boolean).join(` `),C.setAttribute(`aria-label`,`次のページへ`),S&&C.setAttribute(`aria-disabled`,`true`),C.innerHTML=n.arrowRight,!S&&typeof l==`function`&&C.addEventListener(`click`,()=>l(r+1)),h.appendChild(C),d.appendChild(h),d}})),a,o,s,c,l,u,d,f,p;e((()=>{i(),a=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **大量のコンテンツを適切なページごとに分割し、ページの移動を効率的に行えるもの。**

---

## 基本設計

| バリエーション | 説明 |
|--------------|------|
| デフォルト | 総件数テキスト ＋ ページナビゲーション |
| 表示件数設定あり | 総件数テキスト ＋ 表示件数ドロップダウン ＋ ページナビゲーション |
| Disabled | 表示件数・ページ入力・ボタンがすべて無効状態 |

### ページナビゲーション

| 要素 | 仕様 |
|------|------|
| 前ページボタン | 36×36px、背景: \`#f7f7f8\`（gray/50） |
| 次ページボタン（有効） | 36×36px、背景: \`#eaf3fe\`（blue/100）、アイコン: \`#318bf7\` |
| 次ページボタン（無効） | 36×36px、背景: \`#f7f7f8\`（gray/50）、アイコン: \`#adb2b8\` |
| ページ入力フィールド | 幅 60px、border \`#d6d9db\`、border-radius 4px、padding 8px 12px |
| 表示件数ドロップダウン | 幅 90px、同border仕様 |

---

## 使用時に気をつけておくこと

- 基本的に、コンテンツの下部に配置する。
  - 可能なら、コンテンツの上下に配置したい。
- 全件数がわかること。
  - ただし、別のエリアで全件数が表示されている場合は、省略可能。
- 現在開いているページの位置がわかること。
  - 可能なら、現在開いているページでの表示件数を出したい。
- 一つ前のページ、一つ後のページへ直感的に移動できること。
  - 最前のページ、最後のページ、直接特定のページに移動できるとなお良い。
`,o={title:`Pagination`,tags:[`autodocs`],render:e=>r(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{totalCount:{control:`number`,description:`総件数`,table:{defaultValue:{summary:`200`}}},totalPages:{control:`number`,description:`総ページ数`,table:{defaultValue:{summary:`2`}}},currentPage:{control:`number`,description:`現在のページ番号`,table:{defaultValue:{summary:`1`}}},unit:{control:`text`,description:`件数単位テキスト（例: "店舗"）`,table:{defaultValue:{summary:`件`}}},showPerPage:{control:`boolean`,description:`表示件数セレクターを表示するか`,table:{defaultValue:{summary:`false`}}},perPage:{control:`number`,description:`1ページの表示件数`,table:{defaultValue:{summary:`100`}}},perPageOptions:{control:`object`,description:`表示件数の選択肢`,table:{defaultValue:{summary:`[25, 50, 100]`}}},disabled:{control:`boolean`,description:`無効状態`,table:{defaultValue:{summary:`false`}}},onPageChange:{action:`page-changed`,description:`ページ変更コールバック (page: number)`},onPerPageChange:{action:`per-page-changed`,description:`表示件数変更コールバック (perPage: number)`}},args:{totalCount:200,totalPages:2,currentPage:1,unit:`店舗`,showPerPage:!1,perPage:100,perPageOptions:[25,50,100],disabled:!1}},s={},c={parameters:{docs:{description:{story:"`showPerPage: true` で表示件数ドロップダウンを表示。Figma「表示件数設定あり」バリエーション。"}}},args:{showPerPage:!0}},l={parameters:{docs:{description:{story:"`disabled: true` で全操作要素が無効化。テキスト色は `#adb2b8`（text/disable）に変化。Figma「Disabled」バリエーション。"}}},args:{showPerPage:!0,disabled:!0}},u={parameters:{docs:{description:{story:"先頭ページ（`currentPage=1`）。前ページボタンが非アクティブになり、次ページボタンがブルー（`#eaf3fe`）になる。"}}},args:{totalCount:500,totalPages:5,currentPage:1}},d={parameters:{docs:{description:{story:"最終ページ（`currentPage=totalPages`）。次ページボタンが非アクティブ（gray/50）になる。"}}},args:{totalCount:500,totalPages:5,currentPage:5,perPage:100}},f={parameters:{docs:{description:{story:`Figma「基本設計」の3バリエーション（デフォルト / 表示件数設定あり / Disabled）を縦並びで比較。`}}},render:()=>{let e=[{label:`デフォルト`,args:{showPerPage:!1,disabled:!1}},{label:`表示件数設定あり`,args:{showPerPage:!0,disabled:!1}},{label:`Disabled`,args:{showPerPage:!0,disabled:!0}}],t=document.createElement(`div`);return t.style.cssText=`display: flex; flex-direction: column; gap: 32px; align-items: flex-end;`,e.forEach(({label:e,args:n})=>{let i=document.createElement(`div`);i.style.cssText=`display: flex; flex-direction: column; align-items: flex-end; gap: 8px; width: 100%;`;let a=document.createElement(`span`);a.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94; align-self: flex-start;`,a.textContent=e,i.appendChild(a),i.appendChild(r({totalCount:200,totalPages:2,currentPage:1,unit:`店舗`,perPage:100,...n})),t.appendChild(i)}),t}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`デフォルト。総件数テキスト＋ページナビゲーション。
Figma「基本設計 / デフォルト」に対応。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`showPerPage: true\` で表示件数ドロップダウンを表示。Figma「表示件数設定あり」バリエーション。'
      }
    }
  },
  args: {
    showPerPage: true
  }
}`,...c.parameters?.docs?.source},description:{story:`表示件数セレクターあり。ページナビゲーションの左に表示件数ドロップダウンが追加される。
Figma「基本設計 / 表示件数設定あり」に対応。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`disabled: true\` で全操作要素が無効化。テキスト色は \\\`#adb2b8\\\`（text/disable）に変化。Figma「Disabled」バリエーション。'
      }
    }
  },
  args: {
    showPerPage: true,
    disabled: true
  }
}`,...l.parameters?.docs?.source},description:{story:`Disabled 状態。表示件数ドロップダウン・ページ入力・前後ボタンがすべて無効になる。
Figma「基本設計 / Disabled」に対応。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '先頭ページ（\`currentPage=1\`）。前ページボタンが非アクティブになり、次ページボタンがブルー（\`#eaf3fe\`）になる。'
      }
    }
  },
  args: {
    totalCount: 500,
    totalPages: 5,
    currentPage: 1
  }
}`,...u.parameters?.docs?.source},description:{story:"先頭ページ。`currentPage=1` のため前ページボタンが非アクティブ（gray/50）になる。",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '最終ページ（\`currentPage=totalPages\`）。次ページボタンが非アクティブ（gray/50）になる。'
      }
    }
  },
  args: {
    totalCount: 500,
    totalPages: 5,
    currentPage: 5,
    perPage: 100
  }
}`,...d.parameters?.docs?.source},description:{story:"最終ページ。`currentPage=totalPages` のため次ページボタンが非アクティブになる。",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma「基本設計」の3バリエーション（デフォルト / 表示件数設定あり / Disabled）を縦並びで比較。'
      }
    }
  },
  render: () => {
    const variants = [{
      label: 'デフォルト',
      args: {
        showPerPage: false,
        disabled: false
      }
    }, {
      label: '表示件数設定あり',
      args: {
        showPerPage: true,
        disabled: false
      }
    }, {
      label: 'Disabled',
      args: {
        showPerPage: true,
        disabled: true
      }
    }];
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 32px; align-items: flex-end;';
    variants.forEach(({
      label,
      args
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; flex-direction: column; align-items: flex-end; gap: 8px; width: 100%;';
      const labelEl = document.createElement('span');
      labelEl.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94; align-self: flex-start;";
      labelEl.textContent = label;
      row.appendChild(labelEl);
      row.appendChild(createPagination({
        totalCount: 200,
        totalPages: 2,
        currentPage: 1,
        unit: '店舗',
        perPage: 100,
        ...args
      }));
      wrapper.appendChild(row);
    });
    return wrapper;
  }
}`,...f.parameters?.docs?.source},description:{story:`Figma「基本設計」の全3バリエーションを縦並びで比較表示。`,...f.parameters?.docs?.description}}},p=[`Default`,`WithPerPage`,`Disabled`,`FirstPage`,`LastPage`,`AllVariants`]}))();export{f as AllVariants,s as Default,l as Disabled,u as FirstPage,d as LastPage,c as WithPerPage,p as __namedExportsOrder,o as default};