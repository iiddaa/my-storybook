import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n(e,t){t.forEach((n,r)=>{let s=document.createElement(`div`);s.className=`storybook-stepper__step`,s.setAttribute(`aria-current`,n.status===`current`?`step`:`false`);let c=i(n.status,r+1),l=a(n.status,n.label);s.appendChild(c),s.appendChild(l),e.appendChild(s),r<t.length-1&&e.appendChild(o(n.status===`complete`))})}function r(e,t){t.forEach((n,r)=>{let s=document.createElement(`div`);s.className=`storybook-stepper__item`,s.setAttribute(`aria-current`,n.status===`current`?`step`:`false`);let c=document.createElement(`div`);c.className=`storybook-stepper__track`,c.appendChild(i(n.status,r+1)),r<t.length-1&&c.appendChild(o(n.status===`complete`)),s.appendChild(c),s.appendChild(a(n.status,n.label)),e.appendChild(s)})}function i(e,t){let n=document.createElement(`div`);return n.className=`storybook-stepper__circle storybook-stepper__circle--${e}`,n.textContent=String(t),n}function a(e,t){let n=document.createElement(`p`);return n.className=`storybook-stepper__label storybook-stepper__label--${e}`,n.textContent=t,n}function o(e){let t=document.createElement(`div`);return t.className=`storybook-stepper__connector storybook-stepper__connector--${e?`active`:`inactive`}`,t}var s,c=e((()=>{t(),s=({direction:e=`horizontal`,steps:t=[]}={})=>{let i=document.createElement(`div`);return i.className=`storybook-stepper storybook-stepper--${e}`,i.setAttribute(`aria-label`,`ステップナビゲーション`),e===`horizontal`?n(i,t):r(i,t),i}})),l,u,d,f,p,m,h,g,_,v;e((()=>{c(),l=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ユーザーが安心してゴールに向かえるために、タスクを「わかりやすい手順」で表示し、全体像や現在地を把握できるもの。**

---

## 基本設計

### ステータス

| ステータス | サークル色 | ラベル色 | 説明 |
|-----------|----------|---------|------|
| Current   | \`#318BF7\`（Blue 500） | \`#222222\` | 現在進行中のステップ |
| Complete  | \`#98C5FB\`（Blue 200） | \`#858C94\` | 完了済みのステップ |
| Unvisited | \`#D6D9DB\`（Gray） | \`#858C94\` | まだ着手していないステップ |

### レイアウト

| 要素 | 仕様 |
|------|------|
| サークル | 32×32px、border-radius 99px、数字 16px Bold 白 |
| ラベル | 14px Bold、ステータスにより色が変わる |
| コネクター（完了→次） | \`#318BF7\`（青） |
| コネクター（未完了） | \`#D6D9DB\`（グレー） |
| 方向 | Horizontal（水平） / Vertical（縦） |

---

## 使用時に気をつけておくこと

- Complete（完了）・Current（進行中）・Unvisited（未着手）の3ステータスを明確に区別する。
  - 完了タスクにチェックアイコンを使うのも有効。
- 画面上部などの目につきやすい場所に配置する。スクロールしないと見えない位置はNG。
- Stepper はプロセスの道筋を示すためのもの。Breadcrumbs のようなクリック遷移操作は不要。

### Breadcrumbs との使い分け

| | Breadcrumbs | Stepper |
|--|-------------|---------|
| **主な目的** | 上部の階層に戻るため | プロセスを示して安心させるため |
| **示すもの** | 内部構造（例：一覧 ＞ 詳細） | プロセスの道筋（例：STEP1 → STEP2 → STEP3） |
`,u=[{label:`基本情報の入力`,status:`complete`},{label:`利用方法の設定`,status:`current`},{label:`公開範囲の設定`,status:`unvisited`},{label:`最終確認`,status:`unvisited`}],d={title:`Stepper`,tags:[`autodocs`],render:e=>s(e),parameters:{layout:`padded`,docs:{description:{component:l}}},argTypes:{direction:{control:`select`,options:[`horizontal`,`vertical`],description:`水平（horizontal）または縦（vertical）方向`,table:{defaultValue:{summary:`horizontal`}}},steps:{control:`object`,description:'ステップの配列。各要素は `{ label: string, status: "current" | "complete" | "unvisited" }` の形式。'}}},f={args:{direction:`horizontal`,steps:u}},p={name:`Vertical`,args:{direction:`vertical`,steps:u}},m={name:`1ステップ目（開始直後）`,args:{direction:`horizontal`,steps:[{label:`基本情報の入力`,status:`current`},{label:`利用方法の設定`,status:`unvisited`},{label:`公開範囲の設定`,status:`unvisited`},{label:`最終確認`,status:`unvisited`}]}},h={name:`最終ステップ（完了直前）`,args:{direction:`horizontal`,steps:[{label:`基本情報の入力`,status:`complete`},{label:`利用方法の設定`,status:`complete`},{label:`公開範囲の設定`,status:`complete`},{label:`最終確認`,status:`current`}]}},g={name:`全ステップ完了`,args:{direction:`horizontal`,steps:[{label:`基本情報の入力`,status:`complete`},{label:`利用方法の設定`,status:`complete`},{label:`公開範囲の設定`,status:`complete`},{label:`最終確認`,status:`complete`}]}},_={name:`方向比較（Horizontal / Vertical）`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-direction: column; gap: 48px;`,[{label:`Horizontal`,args:{direction:`horizontal`,steps:u}},{label:`Vertical`,args:{direction:`vertical`,steps:u}}].forEach(({label:t,args:n})=>{let r=document.createElement(`div`);r.style.cssText=`display: flex; flex-direction: column; gap: 12px;`;let i=document.createElement(`p`);i.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;`,i.textContent=t,r.appendChild(i),r.appendChild(s(n)),e.appendChild(r)}),e}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    steps: STEPS_4
  }
}`,...f.parameters?.docs?.source},description:{story:`Horizontal / 2ステップ目が現在進行中（Figma 使用例）。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  args: {
    direction: 'vertical',
    steps: STEPS_4
  }
}`,...p.parameters?.docs?.source},description:{story:`Vertical / 2ステップ目が現在進行中。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '1ステップ目（開始直後）',
  args: {
    direction: 'horizontal',
    steps: [{
      label: '基本情報の入力',
      status: 'current'
    }, {
      label: '利用方法の設定',
      status: 'unvisited'
    }, {
      label: '公開範囲の設定',
      status: 'unvisited'
    }, {
      label: '最終確認',
      status: 'unvisited'
    }]
  }
}`,...m.parameters?.docs?.source},description:{story:`先頭ステップが Current（開始直後）。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '最終ステップ（完了直前）',
  args: {
    direction: 'horizontal',
    steps: [{
      label: '基本情報の入力',
      status: 'complete'
    }, {
      label: '利用方法の設定',
      status: 'complete'
    }, {
      label: '公開範囲の設定',
      status: 'complete'
    }, {
      label: '最終確認',
      status: 'current'
    }]
  }
}`,...h.parameters?.docs?.source},description:{story:`最終ステップが Current（完了直前）。`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '全ステップ完了',
  args: {
    direction: 'horizontal',
    steps: [{
      label: '基本情報の入力',
      status: 'complete'
    }, {
      label: '利用方法の設定',
      status: 'complete'
    }, {
      label: '公開範囲の設定',
      status: 'complete'
    }, {
      label: '最終確認',
      status: 'complete'
    }]
  }
}`,...g.parameters?.docs?.source},description:{story:`全ステップが Complete（完了後）。`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '方向比較（Horizontal / Vertical）',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 48px;';
    const sections = [{
      label: 'Horizontal',
      args: {
        direction: 'horizontal',
        steps: STEPS_4
      }
    }, {
      label: 'Vertical',
      args: {
        direction: 'vertical',
        steps: STEPS_4
      }
    }];
    sections.forEach(({
      label,
      args
    }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
      const heading = document.createElement('p');
      heading.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;";
      heading.textContent = label;
      section.appendChild(heading);
      section.appendChild(createStepper(args));
      wrapper.appendChild(section);
    });
    return wrapper;
  }
}`,..._.parameters?.docs?.source},description:{story:`Horizontal / Vertical の2方向を並べて比較するビュー。
Storybook の Controls は使用不可（render を直接定義）。`,..._.parameters?.docs?.description}}},v=[`Default`,`Vertical`,`FirstStep`,`LastStep`,`AllComplete`,`DirectionComparison`]}))();export{g as AllComplete,f as Default,_ as DirectionComparison,m as FirstStep,h as LastStep,p as Vertical,v as __namedExportsOrder,d as default};