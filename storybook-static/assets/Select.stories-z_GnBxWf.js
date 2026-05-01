import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i,a=e((()=>{t(),n=`
  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,r=`
  <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true">
    <line x1="2" y1="2" x2="10" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="2" x2="2" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`,i=({state:e=`default`,placeholder:t=`選択してください`,selectedValue:i=`選択した項目名`,selectedValues:a=[`選択した項目名`,`選択した項目名`],options:o=[`選択肢_1`,`選択肢_2`,`選択肢_3`],onSelect:s,onRemoveChip:c}={})=>{let l=e===`disabled`,u=e===`open`,d=document.createElement(`div`);d.className=`storybook-select`;let f=document.createElement(`div`);if(f.className=[`storybook-select__field`,u?`storybook-select__field--open`:``,l?`storybook-select__field--disabled`:``,e===`filled-multiple`?`storybook-select__field--multiple`:``].filter(Boolean).join(` `),l?f.setAttribute(`aria-disabled`,`true`):(f.setAttribute(`role`,`combobox`),f.setAttribute(`aria-expanded`,String(u)),f.tabIndex=0),e===`filled-multiple`){let e=document.createElement(`div`);e.className=`storybook-select__chips`,a.forEach(t=>{let n=document.createElement(`span`);n.className=`storybook-select__chip`;let i=document.createElement(`span`);i.className=`storybook-select__chip-text`,i.textContent=t;let a=document.createElement(`button`);a.type=`button`,a.className=`storybook-select__chip-close`,a.setAttribute(`aria-label`,`${t}を削除`),a.innerHTML=r,a.addEventListener(`click`,e=>{e.stopPropagation(),typeof c==`function`&&c(t)}),n.appendChild(i),n.appendChild(a),e.appendChild(n)}),f.appendChild(e)}else if(e===`filled-single`){let e=document.createElement(`span`);e.className=`storybook-select__value`,e.textContent=i,f.appendChild(e)}else{let e=document.createElement(`span`);e.className=`storybook-select__placeholder`,e.textContent=t,f.appendChild(e)}let p=document.createElement(`span`);if(p.className=`storybook-select__caret`,p.innerHTML=n,f.appendChild(p),d.appendChild(f),u&&o.length>0){let e=document.createElement(`div`);e.className=`storybook-select__dropdown`,e.setAttribute(`role`,`listbox`),o.forEach(t=>{let n=document.createElement(`div`);n.className=`storybook-select__option`,n.setAttribute(`role`,`option`),n.tabIndex=0,n.textContent=t,n.addEventListener(`click`,()=>{typeof s==`function`&&s(t)}),n.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),typeof s==`function`&&s(t))}),e.appendChild(n)}),d.appendChild(e)}return d}})),o,s,c,l,u,d,f,p,m;e((()=>{a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **選択肢から一つもしくは複数のアイテムを選べるもの。**
> 選択肢を格納するため、画面の情報量を減らすことができる。また、選択後は選択した項目のみ表示され、一目で認識できる。

---

## 基本設計

- 横幅は自由だが、**最小幅は 160px**。

| 状態 | ボーダー | 説明 |
|------|----------|------|
| 未選択 | グレー 1px（\`#d6d9db\`） | プレースホルダー表示 |
| 選択中 | 青 2px（\`#318bf7\`） | フォーカス時。下に Dropdown Menu が表示される |
| 選択済み（単数） | グレー 1px（\`#d6d9db\`） | 選択した項目名をテキストで表示 |
| 選択済み（複数） | グレー 1px（\`#d6d9db\`） | 選択した項目名をチップ（pill）で表示。× ボタンで個別削除可能 |
| Disabled | グレー 1px（\`#d6d9db\`） | 操作不可。背景グレー（\`#f7f7f8\`）、文字色薄く |

---

### 選択中の表示

選択中（open）状態では、フィールドの下に Dropdown Menu が表示される。

---

## 使用時に気をつけておくこと

- アローやプラスなどのアイコンを設けて、Dropdown Menu が出てくることを明示する。
- 選択肢が多い場合は、検索可能な Combobox を使う。
`,c={title:`Select`,tags:[`autodocs`],render:e=>i(e),parameters:{layout:`padded`,docs:{description:{component:s}}},argTypes:{state:{control:`select`,options:[`default`,`open`,`filled-single`,`filled-multiple`,`disabled`],description:`表示状態（Figma の5状態に対応）`,table:{defaultValue:{summary:`default`}}},placeholder:{control:`text`,description:`プレースホルダーテキスト（未選択・選択中・Disabled 時に表示）`,table:{defaultValue:{summary:`選択してください`}}},selectedValue:{control:`text`,description:`選択済み（単数）の表示値`,table:{defaultValue:{summary:`選択した項目名`}}},selectedValues:{control:`object`,description:`選択済み（複数）のチップ値リスト`},options:{control:`object`,description:`ドロップダウンの選択肢（state が open のときに表示）`},onSelect:{action:`select`},onRemoveChip:{action:`removeChip`}},args:{state:`default`,placeholder:`選択してください`,selectedValue:`選択した項目名`,selectedValues:[`選択した項目名`,`選択した項目名`],options:[`選択肢_1`,`選択肢_2`,`選択肢_3`],onSelect:o(),onRemoveChip:o()}},l={},u={parameters:{docs:{description:{story:"選択中（フォーカス）状態。ボーダーが青 2px（`#318bf7`）になり、フィールド下に Dropdown Menu が表示される（Figma「選択中の表示」）。"}}},args:{state:`open`,options:[`選択肢_1`,`選択肢_2`,`選択肢_3`]}},d={parameters:{docs:{description:{story:`選択済み（単数）。選択した項目名がフィールドに表示される（Figma「選択済み（単数）」）。`}}},args:{state:`filled-single`,selectedValue:`選択した項目名`}},f={parameters:{docs:{description:{story:`選択済み（複数）。チップ（pill）形式で選択値を表示。× で個別削除できる（Figma「選択済み（複数）」）。`}}},args:{state:`filled-multiple`,selectedValues:[`選択した項目名`,`選択した項目名`]}},p={parameters:{docs:{description:{story:"Disabled 状態。背景が `#f7f7f8`、プレースホルダー色が `#adb2b8` に変化し操作不可になる（Figma「Disabled」）。"}}},args:{state:`disabled`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source},description:{story:`未選択状態。プレースホルダーを表示。ボーダーはグレー 1px。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '選択中（フォーカス）状態。ボーダーが青 2px（\`#318bf7\`）になり、フィールド下に Dropdown Menu が表示される（Figma「選択中の表示」）。'
      }
    }
  },
  args: {
    state: 'open',
    options: ['選択肢_1', '選択肢_2', '選択肢_3']
  }
}`,...u.parameters?.docs?.source},description:{story:`選択中状態。フィールドが青いボーダー 2px になり、
下に Dropdown Menu（選択肢リスト）が表示される。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '選択済み（単数）。選択した項目名がフィールドに表示される（Figma「選択済み（単数）」）。'
      }
    }
  },
  args: {
    state: 'filled-single',
    selectedValue: '選択した項目名'
  }
}`,...d.parameters?.docs?.source},description:{story:`選択済み（単数）状態。選択した項目名をテキストで表示。ボーダーはグレー 1px。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '選択済み（複数）。チップ（pill）形式で選択値を表示。× で個別削除できる（Figma「選択済み（複数）」）。'
      }
    }
  },
  args: {
    state: 'filled-multiple',
    selectedValues: ['選択した項目名', '選択した項目名']
  }
}`,...f.parameters?.docs?.source},description:{story:`選択済み（複数）状態。選択した項目名をチップ（pill）形式で表示する。
各チップの × ボタンで個別削除が可能。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled 状態。背景が \`#f7f7f8\`、プレースホルダー色が \`#adb2b8\` に変化し操作不可になる（Figma「Disabled」）。'
      }
    }
  },
  args: {
    state: 'disabled'
  }
}`,...p.parameters?.docs?.source},description:{story:"操作不可状態。背景グレー（`#f7f7f8`）、テキスト・アイコン色が薄くなる。",...p.parameters?.docs?.description}}},m=[`Default`,`Open`,`FilledSingle`,`FilledMultiple`,`Disabled`]}))();export{l as Default,p as Disabled,f as FilledMultiple,d as FilledSingle,u as Open,m as __namedExportsOrder,c as default};