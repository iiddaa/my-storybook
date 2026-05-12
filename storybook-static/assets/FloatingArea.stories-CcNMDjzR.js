import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({disabled:e=!1,primaryLabel:t=`次へ進む`,secondaryLabel:n=`キャンセル`,onPrimary:r=null,onSecondary:i=null,extraContent:a=null,fixed:o=!1}={})=>{let s=document.createElement(`div`);s.className=[`storybook-floating-area`,e?`storybook-floating-area--disabled`:``,o?`storybook-floating-area--fixed`:``].filter(Boolean).join(` `),s.setAttribute(`role`,`toolbar`),s.setAttribute(`aria-label`,`アクションエリア`),a instanceof HTMLElement&&s.appendChild(a);let c=document.createElement(`div`);c.className=`storybook-floating-area__btn-group`;let l=document.createElement(`button`);l.type=`button`,l.className=[`storybook-floating-area__btn`,`storybook-floating-area__btn--secondary`,e?`storybook-floating-area__btn--disabled`:``].filter(Boolean).join(` `),l.textContent=n,l.disabled=e,!e&&typeof i==`function`&&l.addEventListener(`click`,i),c.appendChild(l);let u=document.createElement(`button`);return u.type=`button`,u.className=[`storybook-floating-area__btn`,`storybook-floating-area__btn--primary`,e?`storybook-floating-area__btn--disabled`:``].filter(Boolean).join(` `),u.textContent=t,u.disabled=e,!e&&typeof r==`function`&&u.addEventListener(`click`,r),c.appendChild(u),s.appendChild(c),s}}));function i(){let e=document.createElement(`div`);e.style.cssText=`display: flex; align-items: center; gap: 24px;`;let t=document.createElement(`div`);t.style.cssText=`display: flex; align-items: center; gap: 12px;`,t.setAttribute(`role`,`radiogroup`),t.setAttribute(`aria-label`,`表示オプション`),[{label:`アイテム 1`,checked:!1},{label:`アイテム 2`,checked:!0}].forEach(({label:e,checked:n})=>{let r=document.createElement(`label`);r.style.cssText=`display: flex; align-items: center; gap: 8px; cursor: pointer;`;let i=document.createElement(`input`);if(i.type=`radio`,i.name=`floating-area-radio-demo`,i.checked=n,i.style.cssText=[`appearance: none`,`-webkit-appearance: none`,`width: 16px`,`height: 16px`,`border-radius: 50%`,`border: 1px solid #d6d9db`,`box-sizing: border-box`,`flex-shrink: 0`,n?`background-color: #318bf7; border-color: #d6d9db;`:`background-color: #fff;`].join(`; `),n){let e=document.createElement(`span`);e.style.cssText=[`display: block`,`width: 6px`,`height: 6px`,`border-radius: 50%`,`background-color: #fff`,`position: absolute`,`top: 50%`,`left: 50%`,`transform: translate(-50%, -50%)`].join(`; `),i.style.position=`relative`,i.appendChild(e)}let a=document.createElement(`span`);a.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-weight: 300; font-size: 14px; line-height: 1.5; color: #222; white-space: nowrap;`,a.textContent=e,r.appendChild(i),r.appendChild(a),t.appendChild(r)}),e.appendChild(t);let n=document.createElement(`div`);n.style.cssText=`display: flex; align-items: center; gap: 12px;`;let r=document.createElement(`div`);r.style.cssText=`display: flex; align-items: center; gap: 4px;`;let i=document.createElement(`span`);i.style.cssText=`display: flex; align-items: center; width: 20px; height: 20px;`,i.innerHTML=o;let a=document.createElement(`span`);a.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-weight: 300; font-size: 16px; line-height: 1.5; color: #222; white-space: nowrap;`,a.textContent=`更新予約`,r.appendChild(i),r.appendChild(a),n.appendChild(r);let c=(e,t)=>{let n=document.createElement(`div`);n.style.cssText=`position: relative; width: ${t}px;`;let r=document.createElement(`select`);r.style.cssText=[`-webkit-appearance: none`,`appearance: none`,`width: ${t}px`,`height: 36px`,`padding: 8px 28px 8px 12px`,`font-family: 'Hiragino Sans', sans-serif`,`font-weight: 300`,`font-size: 14px`,`line-height: 1.5`,`color: #222`,`background-color: #fff`,`border: 1px solid #d6d9db`,`border-radius: 4px`,`box-sizing: border-box`,`cursor: pointer`].join(`; `),e.forEach(({value:e,label:t,selected:n})=>{let i=document.createElement(`option`);i.value=e,i.textContent=t,i.selected=!!n,r.appendChild(i)});let i=document.createElement(`span`);return i.style.cssText=`position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; display: flex; align-items: center;`,i.innerHTML=s,n.appendChild(r),n.appendChild(i),n};return n.appendChild(c([{value:`today`,label:`今日`,selected:!0},{value:`tomorrow`,label:`明日`},{value:`next-week`,label:`来週`}],127)),n.appendChild(c([{value:`now`,label:`現在時刻`,selected:!0},{value:`09:00`,label:`09:00`},{value:`12:00`,label:`12:00`},{value:`18:00`,label:`18:00`}],102)),e.appendChild(n),e}var a,o,s,c,l,u,d,f,p;e((()=>{r(),a=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **該当の画面での最終的なアクションが画面に常に表示するもの。**
> **それにより、ユーザーにとってゴールが明確になり、意図しない離脱や未保存を防げる。**

---

## 基本設計

| バリエーション | 説明 |
|--------------|------|
| Default | セカンダリボタン＋プライマリボタンのみ |
| Disabled | 全ボタンが無効状態（薄ブルー: \`#98c5fb\`） |
| ラジオボタン＋セレクト | ボタン左に追加コンテンツ（ラジオグループ・セレクトフィールドなど）を配置 |

### ボタン仕様

| ボタン | 状態 | 背景 | テキスト | ボーダー |
|--------|------|------|----------|---------|
| プライマリ | Default | \`#318bf7\` | \`#fff\` | なし |
| プライマリ | Disabled | \`#98c5fb\` | \`#fff\` | なし |
| セカンダリ | Default | \`#fff\` | \`#318bf7\` | \`1px solid #318bf7\` |
| セカンダリ | Disabled | \`#fff\` | \`#98c5fb\` | \`1px solid #98c5fb\` |

### レイアウト

- 背景: 白（\`#fff\`）、上ボーダー: \`1px solid #d6d9db\`
- padding: \`12px 24px\`
- ボタン間 gap: \`12px\`、セクション間 gap: \`24px\`
- 右寄せ（\`justify-content: flex-end\`）
- \`fixed: true\` を渡すと \`position: fixed; bottom: 0\` で画面下部に固定される

---

## 使用時に気をつけておくこと

- 原則、ブラウザの下部に配置。
- 画面をスクロールしても、固定表示される。
- 主操作のボタン（Primary Button）は、プロダクト内で一貫した位置（左右どちらか）に配置する。
`,o=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="2.5" y="4" width="15" height="13" rx="2" stroke="#222" stroke-width="1.5"/>
  <path d="M2.5 8.5H17.5" stroke="#222" stroke-width="1.5"/>
  <path d="M6.5 2V5.5" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M13.5 2V5.5" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,s=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,c={title:`FloatingArea`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{disabled:{control:`boolean`,description:`ボタンの無効状態`,table:{defaultValue:{summary:`false`}}},primaryLabel:{control:`text`,description:`プライマリボタンのラベル`,table:{defaultValue:{summary:`次へ進む`}}},secondaryLabel:{control:`text`,description:`セカンダリボタンのラベル`,table:{defaultValue:{summary:`キャンセル`}}},fixed:{control:`boolean`,description:`true にすると position:fixed でブラウザ下部に固定される（Storybookではfalseで確認推奨）`,table:{defaultValue:{summary:`false`}}},extraContent:{control:!1,description:`ボタングループ左に配置する追加コンテンツ（HTMLElement）。ラジオボタングループ・セレクトフィールドなどを配置できる。`},onPrimary:{action:`primary-clicked`,description:`プライマリボタンのクリックコールバック`},onSecondary:{action:`secondary-clicked`,description:`セカンダリボタンのクリックコールバック`}},args:{disabled:!1,primaryLabel:`次へ進む`,secondaryLabel:`キャンセル`,fixed:!1}},l={},u={parameters:{docs:{description:{story:"`disabled: true` で全ボタンが無効化。プライマリ bg `#98c5fb`、セカンダリ border/text `#98c5fb`。Figma「Disabled」バリエーション。"}}},args:{disabled:!0}},d={parameters:{docs:{description:{story:"`extraContent` を使ってボタン左に任意のコンテンツを配置できる。ここではラジオグループ＋更新予約セレクトを配置した例（Figma「ラジオボタン＋セレクト」バリエーション）。"}}},render:e=>n({...e,extraContent:i()})},f={parameters:{docs:{description:{story:`Figma「基本設計」の3バリエーション（Default / Disabled / ラジオボタン＋セレクト）を縦並びで比較。`}}},render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-direction: column; gap: 32px;`,[{label:`Default`,component:n({})},{label:`Disabled`,component:n({disabled:!0})},{label:`ラジオボタン＋セレクト`,component:n({extraContent:i()})}].forEach(({label:t,component:n})=>{let r=document.createElement(`div`);r.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let i=document.createElement(`span`);i.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;`,i.textContent=t,r.appendChild(i),r.appendChild(n),e.appendChild(r)}),e}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source},description:{story:`デフォルト。セカンダリ＋プライマリボタンのみの基本構成。
Figma「基本設計 / Default」に対応。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`disabled: true\` で全ボタンが無効化。プライマリ bg \`#98c5fb\`、セカンダリ border/text \`#98c5fb\`。Figma「Disabled」バリエーション。'
      }
    }
  },
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source},description:{story:`Disabled 状態。全ボタンが無効化され、薄ブルー（#98c5fb）になる。
Figma「基本設計 / Disabled」に対応。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`extraContent\` を使ってボタン左に任意のコンテンツを配置できる。ここではラジオグループ＋更新予約セレクトを配置した例（Figma「ラジオボタン＋セレクト」バリエーション）。'
      }
    }
  },
  render: args => createFloatingArea({
    ...args,
    extraContent: buildRadioSelectContent()
  })
}`,...d.parameters?.docs?.source},description:{story:"`extraContent` にラジオボタングループ＋更新予約セレクトを配置した例。\nFigma「基本設計 / ラジオボタン＋セレクト」に対応。",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma「基本設計」の3バリエーション（Default / Disabled / ラジオボタン＋セレクト）を縦並びで比較。'
      }
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';
    const variants = [{
      label: 'Default',
      component: createFloatingArea({})
    }, {
      label: 'Disabled',
      component: createFloatingArea({
        disabled: true
      })
    }, {
      label: 'ラジオボタン＋セレクト',
      component: createFloatingArea({
        extraContent: buildRadioSelectContent()
      })
    }];
    variants.forEach(({
      label,
      component
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const labelEl = document.createElement('span');
      labelEl.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;";
      labelEl.textContent = label;
      row.appendChild(labelEl);
      row.appendChild(component);
      wrapper.appendChild(row);
    });
    return wrapper;
  }
}`,...f.parameters?.docs?.source},description:{story:`Figma「基本設計」の全3バリエーションを縦並びで比較表示。`,...f.parameters?.docs?.description}}},p=[`Default`,`Disabled`,`WithRadioAndSelect`,`AllVariants`]}))();export{f as AllVariants,l as Default,u as Disabled,d as WithRadioAndSelect,p as __namedExportsOrder,c as default};