import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({value:e=0,label:t=``,description:n=``}={})=>{let r=Math.min(100,Math.max(0,e)),i=document.createElement(`div`);if(i.className=`storybook-progress-bar`,i.setAttribute(`role`,`progressbar`),i.setAttribute(`aria-valuenow`,String(r)),i.setAttribute(`aria-valuemin`,`0`),i.setAttribute(`aria-valuemax`,`100`),t&&i.setAttribute(`aria-label`,t.replace(/\n/g,` `)),t||n){let e=document.createElement(`div`);if(e.className=`storybook-progress-bar__text`,t){let n=document.createElement(`p`);n.className=`storybook-progress-bar__label`,n.textContent=t,e.appendChild(n)}if(n){let t=document.createElement(`p`);t.className=`storybook-progress-bar__description`,t.textContent=n,e.appendChild(t)}i.appendChild(e)}let a=document.createElement(`div`);a.className=`storybook-progress-bar__track`;let o=document.createElement(`div`);return o.className=`storybook-progress-bar__fill`,o.style.width=`${r}%`,a.appendChild(o),i.appendChild(a),i}})),i,a,o,s,c,l,u,d,f,p;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ユーザー操作へのフィードバックに、ある一定以上の時間がかかる場合、全体の処理時間を可視化するために使用する。**

---

## 基本設計

| 要素 | 仕様 |
|------|------|
| トラック（背景） | 高さ 8px、background \`#EFF0F1\`、border-radius 99px |
| フィル（進捗） | 高さ 8px、background \`#318BF7\`（Blue 500）、border-radius 99px |
| 幅 | 親要素に追従（100%） |

### 進捗バリエーション（Figma インジケーター コンポーネントセットより）

| 状態 | フィル幅 |
|------|---------|
| 0%   | 0 |
| 25%  | 25% |
| 50%  | 50% |
| 75%  | 75% |
| 100% | 100% |

### 使用例（Figma「店舗情報の照合ローディング」）

テキストエリア（中央揃え）+ インジケーターの縦並びレイアウト。

\`\`\`
Apple Businessアカウントの
情報を確認中です           ← 14px Bold（label）

店舗情報を照合しています。  ← 14px Regular（description）

[████████░░░░░░░░░░░]       ← インジケーター（25%）
\`\`\`

---

## 使用時に気をつけておくこと

- 進捗を測定・推定できる処理に使用する。
  - 測定・推定できないときは LoadingArea を優先する。
`,a={title:`ProgressBar`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:i}}},argTypes:{value:{control:{type:`range`,min:0,max:100,step:1},description:`進捗率（0〜100）`,table:{defaultValue:{summary:`0`}}},label:{control:`text`,description:`バー上部のタイトルテキスト（改行 \\n 可）`,table:{defaultValue:{summary:`''`}}},description:{control:`text`,description:`タイトル下の説明テキスト`,table:{defaultValue:{summary:`''`}}}}},o={args:{value:0}},s={name:`25%`,args:{value:25}},c={name:`50%`,args:{value:50}},l={name:`75%`,args:{value:75}},u={name:`100%（完了）`,args:{value:100}},d={name:`テキストあり（使用例）`,args:{value:25,label:`Apple Businessアカウントの
情報を確認中です`,description:`店舗情報を照合しています。しばらくお待ちください。`}},f={name:`バリエーション比較`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-direction: column; gap: 24px;`,[0,25,50,75,100].forEach(t=>{let r=document.createElement(`div`);r.style.cssText=`display: flex; flex-direction: column; gap: 6px;`;let i=document.createElement(`p`);i.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;`,i.textContent=`${t}%`,r.appendChild(i),r.appendChild(n({value:t})),e.appendChild(r)}),e}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...o.parameters?.docs?.source},description:{story:`0%（初期状態）。フィルなし。`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '25%',
  args: {
    value: 25
  }
}`,...s.parameters?.docs?.source},description:{story:`25%。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '50%',
  args: {
    value: 50
  }
}`,...c.parameters?.docs?.source},description:{story:`50%。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '75%',
  args: {
    value: 75
  }
}`,...l.parameters?.docs?.source},description:{story:`75%。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '100%（完了）',
  args: {
    value: 100
  }
}`,...u.parameters?.docs?.source},description:{story:`100%（完了状態）。フィルが全幅。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'テキストあり（使用例）',
  args: {
    value: 25,
    label: 'Apple Businessアカウントの\\n情報を確認中です',
    description: '店舗情報を照合しています。しばらくお待ちください。'
  }
}`,...d.parameters?.docs?.source},description:{story:`Figma「店舗情報の照合ローディング」に対応する使用例。
label（Bold）と description（Regular）を中央揃えで表示し、その下にインジケーターを配置。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'バリエーション比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 24px;';
    const steps = [0, 25, 50, 75, 100];
    steps.forEach(v => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';
      const label = document.createElement('p');
      label.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;";
      label.textContent = \`\${v}%\`;
      section.appendChild(label);
      section.appendChild(createProgressBar({
        value: v
      }));
      wrapper.appendChild(section);
    });
    return wrapper;
  }
}`,...f.parameters?.docs?.source},description:{story:`Figma「インジケーター」コンポーネントセットの5バリエーションを縦並びで比較表示。
Storybook の Controls は使用不可（render を直接定義）。`,...f.parameters?.docs?.description}}},p=[`Default`,`Progress25`,`Progress50`,`Progress75`,`Complete`,`WithText`,`AllValues`]}))();export{f as AllValues,u as Complete,o as Default,s as Progress25,c as Progress50,l as Progress75,d as WithText,p as __namedExportsOrder,a as default};