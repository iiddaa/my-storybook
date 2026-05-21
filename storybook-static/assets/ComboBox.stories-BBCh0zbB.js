import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i,a=e((()=>{t(),n=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,r=`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,i=({options:e=[],selectedValues:t=[],placeholder:i=`選択してください`,multiple:a=!0,disabled:o=!1,onSelect:s=null,onRemove:c=null}={})=>{let l=[...t],u=!1,d=``,f=document.createElement(`div`);f.className=`storybook-combo-box`;let p=document.createElement(`div`),m=document.createElement(`div`);m.className=`storybook-combo-box__dropdown`,m.setAttribute(`role`,`listbox`),f.appendChild(p),f.appendChild(m);function h(){p.innerHTML=``;let e=[`storybook-combo-box__field`];u&&e.push(`storybook-combo-box__field--active`),o&&e.push(`storybook-combo-box__field--disabled`),p.className=e.join(` `),a&&l.forEach(e=>{let t=document.createElement(`span`);t.className=`storybook-combo-box__chip${o?` storybook-combo-box__chip--disabled`:``}`;let n=document.createElement(`span`);if(n.className=`storybook-combo-box__chip-text`,n.textContent=e,t.appendChild(n),!o){let n=document.createElement(`button`);n.type=`button`,n.className=`storybook-combo-box__chip-close`,n.setAttribute(`aria-label`,`${e}を削除`),n.innerHTML=r,n.addEventListener(`click`,t=>{t.stopPropagation(),v(e)}),t.appendChild(n)}p.appendChild(t)});let t=document.createElement(`input`);t.type=`text`,t.className=`storybook-combo-box__input`,t.setAttribute(`role`,`combobox`),t.setAttribute(`aria-expanded`,String(u)),t.setAttribute(`aria-autocomplete`,`list`),t.disabled=o,!a&&l.length>0?t.value=l[0]:(t.placeholder=l.length===0?i:``,t.value=d),t.addEventListener(`focus`,()=>{o||(u=!0,h(),g())}),t.addEventListener(`input`,e=>{d=e.target.value,u=!0,g()}),t.addEventListener(`keydown`,e=>{e.key===`Escape`&&y()}),p.appendChild(t);let s=document.createElement(`span`);s.className=`storybook-combo-box__caret`,s.innerHTML=n,p.appendChild(s),o||p.addEventListener(`mousedown`,e=>{(e.target===p||e.target===s||s.contains(e.target))&&(e.preventDefault(),u=!u,u?t.focus():t.blur(),h(),g())})}function g(){m.innerHTML=``,m.className=`storybook-combo-box__dropdown${u?` storybook-combo-box__dropdown--open`:``}`;let t=e.filter(e=>d?e.includes(d)&&(a?!l.includes(e):!0):a?!l.includes(e):!0);if(t.length===0){let e=document.createElement(`div`);e.className=`storybook-combo-box__empty`,e.textContent=d?`一致する選択肢がありません。`:`選択肢がありません。`,m.appendChild(e);return}t.forEach(e=>{let t=document.createElement(`div`);t.className=`storybook-combo-box__option`,t.setAttribute(`role`,`option`),t.textContent=e,t.addEventListener(`mousedown`,t=>{t.preventDefault(),_(e)}),m.appendChild(t)})}function _(e){if(a?l.includes(e)||l.push(e):l=[e],d=``,u=a,s&&s(e),h(),g(),a){let e=p.querySelector(`input`);e&&e.focus()}else y()}function v(e){l=l.filter(t=>t!==e),c&&c(e),h(),g()}function y(){u=!1,d=``,h(),g()}return document.addEventListener(`click`,e=>{!f.contains(e.target)&&u&&y()}),h(),g(),f}})),o,s,c,l,u,d,f,p,m,h,g;e((()=>{a(),o=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **多数の選択肢の中から検索し、一つもしくは複数のアイテムを選べるもの。選択肢を格納するため、画面の情報量を減らすことができる。また、選択後は選択した項目のみ表示され、一目で認識できる。**

---

## 基本設計

### 状態バリエーション

| 状態 | 説明 |
|------|------|
| デフォルト | 未選択。プレースホルダーを表示。 |
| 選択中（フォーカス） | フィールドがアクティブ。ボーダー \`#318BF7\`（2px）に変化。ドロップダウンが開く。 |
| 入力時 | テキスト入力で選択肢をリアルタイムフィルタリング。 |
| 選択済み（単数） | 選択した項目名をフィールドに表示。 |
| 選択済み（複数） | 選択済みアイテムをラベル（ピル型チップ）としてフィールド内に並べる。各チップに削除ボタン（×）。 |
| 候補なし | 入力に一致する選択肢がない場合に「一致する選択肢がありません。」を表示。 |
| Disabled（デフォルト） | 背景 \`#F7F7F8\`。テキスト・アイコンを \`#ADB2B8\` でグレーアウト。 |
| Disabled（選択済み） | 無効化状態で選択済みチップを表示。チップ背景 \`#EFF0F1\`、テキスト \`#ADB2B8\`。 |

### フィールド仕様

| 要素 | 仕様 |
|------|------|
| ボーダー（デフォルト） | \`1px solid #D6D9DB\` |
| ボーダー（アクティブ） | \`2px solid #318BF7\` |
| パディング | \`8px 12px\` |
| border-radius | \`4px\` |
| 最小幅 | 160px |

### 選択済みラベル（チップ）

| 要素 | 仕様 |
|------|------|
| 背景色 | \`#EAF3FE\` |
| テキスト | 12px Regular、\`#222222\` |
| 高さ | 20px |
| padding | \`2px 8px\` |
| border-radius | 99px（ピル型） |
| 削除アイコン | 12×12px、クリックでチップ削除 |

### ドロップダウン

- box-shadow: \`0px 2px 10px 0px rgba(0,0,0,0.15)\`
- ホバー色: \`#EAF3FE\`
- 候補なし文言: 「一致する選択肢がありません。」（文字色 \`#858C94\`）

---

## 使用時に気をつけておくこと

- 選択肢が多い場合は検索可能な ComboBox を使用し、不要な場合は Select を使う。
- 選択肢を隠す Checkbox・RadioButton との使い分けを確認してから使用すること。
`,s=[`炭酸飲料業者`,`研磨剤製造業者`,`農産物卸売業者`,`水産業者`,`サンプル_1業者`,`サンプル_2業者`,`サンプル_3業者`,`サンプル_4業者`,`サンプル_5業者`],c={title:`ComboBox`,tags:[`autodocs`],render:e=>i(e),parameters:{layout:`padded`,docs:{description:{component:o}}},argTypes:{options:{control:`object`,description:`選択肢の配列`},selectedValues:{control:`object`,description:`初期選択済みの値の配列`,table:{defaultValue:{summary:`[]`}}},placeholder:{control:`text`,description:`プレースホルダーテキスト`,table:{defaultValue:{summary:`選択してください`}}},multiple:{control:`boolean`,description:`複数選択を許可するか`,table:{defaultValue:{summary:`true`}}},disabled:{control:`boolean`,description:`無効化状態`,table:{defaultValue:{summary:`false`}}},onSelect:{action:`selected`,description:`選択時コールバック (value: string)`,table:{category:`Events`}},onRemove:{action:`removed`,description:`チップ削除時コールバック (value: string)`,table:{category:`Events`}}},args:{options:s,selectedValues:[],placeholder:`選択してください`,multiple:!0,disabled:!1}},l={},u={name:`選択済み（単数）`,args:{multiple:!1,selectedValues:[`炭酸飲料業者`]}},d={name:`選択済み（複数）`,args:{selectedValues:[`炭酸飲料業者`,`研磨剤製造業者`,`農産物卸売業者`]}},f={name:`選択済み（多い場合）`,args:{selectedValues:[`炭酸飲料業者`,`研磨剤製造業者`,`農産物卸売業者`,`水産業者`,`サンプル_1業者`]}},p={name:`Disabled（デフォルト）`,args:{disabled:!0}},m={name:`Disabled（選択済み）`,args:{disabled:!0,selectedValues:[`炭酸飲料業者`,`研磨剤製造業者`]}},h={name:`状態比較`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-direction: column; gap: 32px; max-width: 400px;`,[{label:`デフォルト`,args:{options:s,selectedValues:[],multiple:!0}},{label:`選択済み（単数）`,args:{options:s,selectedValues:[`炭酸飲料業者`],multiple:!1}},{label:`選択済み（複数）`,args:{options:s,selectedValues:[`炭酸飲料業者`,`研磨剤製造業者`,`農産物卸売業者`],multiple:!0}},{label:`Disabled（デフォルト）`,args:{options:s,selectedValues:[],disabled:!0}},{label:`Disabled（選択済み）`,args:{options:s,selectedValues:[`炭酸飲料業者`,`研磨剤製造業者`],disabled:!0}}].forEach(({label:t,args:n})=>{let r=document.createElement(`div`);r.style.cssText=`display: flex; flex-direction: column; gap: 6px;`;let a=document.createElement(`p`);a.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;`,a.textContent=t,r.appendChild(a),r.appendChild(i(n)),e.appendChild(r)}),e}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source},description:{story:`デフォルト。未選択状態。クリックでドロップダウンが開く。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '選択済み（単数）',
  args: {
    multiple: false,
    selectedValues: ['炭酸飲料業者']
  }
}`,...u.parameters?.docs?.source},description:{story:`選択済み（単数）。1件選択された状態。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '選択済み（複数）',
  args: {
    selectedValues: ['炭酸飲料業者', '研磨剤製造業者', '農産物卸売業者']
  }
}`,...d.parameters?.docs?.source},description:{story:`選択済み（複数）。複数件が選択されチップとして表示された状態（Figma 使用例）。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '選択済み（多い場合）',
  args: {
    selectedValues: ['炭酸飲料業者', '研磨剤製造業者', '農産物卸売業者', '水産業者', 'サンプル_1業者']
  }
}`,...f.parameters?.docs?.source},description:{story:`選択済み（多い場合）。選択件数が多くチップが折り返される状態。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Disabled（デフォルト）',
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:`Disabled（デフォルト）。操作不可・未選択の状態。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Disabled（選択済み）',
  args: {
    disabled: true,
    selectedValues: ['炭酸飲料業者', '研磨剤製造業者']
  }
}`,...m.parameters?.docs?.source},description:{story:`Disabled（選択済み）。操作不可・選択済みチップが表示された状態。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '状態比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 32px; max-width: 400px;';
    const states = [{
      label: 'デフォルト',
      args: {
        options: INDUSTRY_OPTIONS,
        selectedValues: [],
        multiple: true
      }
    }, {
      label: '選択済み（単数）',
      args: {
        options: INDUSTRY_OPTIONS,
        selectedValues: ['炭酸飲料業者'],
        multiple: false
      }
    }, {
      label: '選択済み（複数）',
      args: {
        options: INDUSTRY_OPTIONS,
        selectedValues: ['炭酸飲料業者', '研磨剤製造業者', '農産物卸売業者'],
        multiple: true
      }
    }, {
      label: 'Disabled（デフォルト）',
      args: {
        options: INDUSTRY_OPTIONS,
        selectedValues: [],
        disabled: true
      }
    }, {
      label: 'Disabled（選択済み）',
      args: {
        options: INDUSTRY_OPTIONS,
        selectedValues: ['炭酸飲料業者', '研磨剤製造業者'],
        disabled: true
      }
    }];
    states.forEach(({
      label,
      args
    }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';
      const heading = document.createElement('p');
      heading.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65; margin: 0;";
      heading.textContent = label;
      section.appendChild(heading);
      section.appendChild(createComboBox(args));
      wrapper.appendChild(section);
    });
    return wrapper;
  }
}`,...h.parameters?.docs?.source},description:{story:`全状態を縦並びで比較するビュー。
Storybook の Controls は使用不可（render を直接定義）。`,...h.parameters?.docs?.description}}},g=[`Default`,`SelectedSingle`,`SelectedMultiple`,`SelectedMany`,`DisabledDefault`,`DisabledSelected`,`AllStates`]}))();export{h as AllStates,l as Default,p as DisabledDefault,m as DisabledSelected,f as SelectedMany,d as SelectedMultiple,u as SelectedSingle,g as __namedExportsOrder,c as default};