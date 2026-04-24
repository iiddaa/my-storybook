import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n=({label:e,value:t,name:n=``,checked:r=!1,disabled:i=!1,hint:a=``,onChange:o})=>{let s=document.createElement(`label`);s.className=[`storybook-radio-item`,i?`storybook-radio-item--disabled`:``].filter(Boolean).join(` `);let c=document.createElement(`input`);c.type=`radio`,c.className=`storybook-radio-input`,c.name=n,c.value=t,c.checked=r,c.disabled=i,o&&c.addEventListener(`change`,o);let l=document.createElement(`span`);l.className=[`storybook-radio-circle`,r?`storybook-radio-circle--checked`:``].filter(Boolean).join(` `);let u=document.createElement(`span`);u.className=`storybook-radio-text`;let d=document.createElement(`span`);if(d.className=`storybook-radio-label`,d.innerText=e,u.appendChild(d),a){let e=document.createElement(`span`);e.className=`storybook-radio-hint`,e.innerText=a,u.appendChild(e)}return s.appendChild(c),s.appendChild(l),s.appendChild(u),s},r=({name:e,options:t=[],value:r=``,onChange:i})=>{let a=document.createElement(`div`);return a.className=`storybook-radio-group`,t.forEach(t=>{let o=n({label:t.label,value:t.value,name:e,checked:t.value===r,disabled:t.disabled??!1,hint:t.hint??``,onChange:i});a.appendChild(o)}),a}})),a,o,s,c,l,u,d,f,p,m,h;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o=`
## 概念

選択肢から**一つを選べる**コンポーネント。
選択肢を格納せずに全て表示するため、選択肢を一覧できる。

---

## 基本構造

| 要素 | 内容 |
|------|------|
| ラジオ丸 | 16×16px の円。未選択：白背景・グレーボーダー / 選択済み：青背景・白ドット |
| ラベル | 何に対しての操作かを明示するテキスト |
| ヒントテキスト | ラベル下に表示する補足テキスト（任意） |

---

## 状態

| 状態 | 説明 |
|------|------|
| default（通常） | 未選択の初期状態 |
| hover（ホバー） | PCのみ。ラジオ丸のボーダーが青くなる |
| focused（フォーカス） | キーボード操作時にアウトラインを表示 |
| disabled（無効） | 操作不可。opacity 50% で表示 |

---

## 使用上の注意

> 参考程度に。厳格なルールというわけではない。

- 「CheckboxとRadioButtonとToggleSwitchの使い分け」を参照して適切に使い分ける
- **何に対しての操作なのか明示するためにラベルを設ける**
- **ラベルも含めてクリック / タップ領域を確保する**
- 操作をしたら即座に反応を返す、過剰なアニメーションはつけない
`,s={title:`RadioButton`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`centered`,docs:{description:{component:o}}},argTypes:{label:{control:`text`,description:`選択肢のラベルテキスト`},value:{control:`text`,description:`この選択肢の値`},name:{control:`text`,description:`ラジオグループ名（同一グループで共通にする）`},checked:{control:`boolean`,description:`選択済み状態`,table:{defaultValue:{summary:!1}}},disabled:{control:`boolean`,description:`無効状態`,table:{defaultValue:{summary:!1}}},hint:{control:`text`,description:`ラベル下に表示するヒントテキスト（任意）`},onChange:{action:`changed`}},args:{label:`アイテム 1`,value:`item1`,name:`example`,checked:!1,disabled:!1,hint:``,onChange:a()}},c={},l={args:{checked:!0}},u={args:{hint:`ヒントテキスト`}},d={args:{disabled:!0}},f={args:{checked:!0,disabled:!0}},p={parameters:{docs:{description:{story:`全4状態（default / hover / focused / disabled）の比較一覧。`}}},render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display:flex;flex-direction:column;gap:24px;padding:24px;`,[{label:`default（通常）`,checked:!1,disabled:!1},{label:`selected（選択済み）`,checked:!0,disabled:!1},{label:`disabled 未選択`,checked:!1,disabled:!0},{label:`disabled 選択済み`,checked:!0,disabled:!0}].forEach(({label:t,checked:r,disabled:i})=>{let o=document.createElement(`div`);o.style.cssText=`display:flex;align-items:center;gap:32px;`;let s=document.createElement(`span`);s.style.cssText=`font-family:sans-serif;font-size:12px;color:#888;width:140px;flex-shrink:0;`,s.innerText=t;let c=n({label:`アイテム 1`,value:t,name:`allstates`,checked:r,disabled:i,hint:r?`ヒントテキスト`:``,onChange:a()});o.appendChild(s),o.appendChild(c),e.appendChild(o)}),e}},m={parameters:{docs:{description:{story:"`createRadioGroup` を使った複数選択肢のグループ。同一の `name` でまとめることで排他選択が機能する。"}}},render:()=>r({name:`role`,options:[{label:`一般ユーザー`,value:`user`},{label:`管理者`,value:`admin`},{label:`オーナー`,value:`owner`,hint:`全ての権限を持ちます`},{label:`閲覧のみ`,value:`viewer`,disabled:!0}],value:`user`,onChange:a()})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`通常の未選択状態。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...l.parameters?.docs?.source},description:{story:`選択済み状態。ラジオ丸が青背景＋白ドットになる。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'ヒントテキスト'
  }
}`,...u.parameters?.docs?.source},description:{story:`ラベル下にヒントテキストを表示する。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source},description:{story:`無効状態。opacity 50% で操作不可になる。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...f.parameters?.docs?.source},description:{story:`無効かつ選択済み。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全4状態（default / hover / focused / disabled）の比較一覧。'
      }
    }
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;flex-direction:column;gap:24px;padding:24px;';
    const rows = [{
      label: 'default（通常）',
      checked: false,
      disabled: false
    }, {
      label: 'selected（選択済み）',
      checked: true,
      disabled: false
    }, {
      label: 'disabled 未選択',
      checked: false,
      disabled: true
    }, {
      label: 'disabled 選択済み',
      checked: true,
      disabled: true
    }];
    rows.forEach(({
      label,
      checked,
      disabled
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:32px;';
      const caption = document.createElement('span');
      caption.style.cssText = 'font-family:sans-serif;font-size:12px;color:#888;width:140px;flex-shrink:0;';
      caption.innerText = label;
      const item = createRadioButton({
        label: 'アイテム 1',
        value: label,
        name: 'allstates',
        checked,
        disabled,
        hint: checked ? 'ヒントテキスト' : '',
        onChange: fn()
      });
      row.appendChild(caption);
      row.appendChild(item);
      container.appendChild(row);
    });
    return container;
  }
}`,...p.parameters?.docs?.source},description:{story:`Figmaの基本設計に沿った全状態の一覧。
左列：未選択 / 右列：選択済み（enabled・disabled）`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`createRadioGroup\` を使った複数選択肢のグループ。同一の \`name\` でまとめることで排他選択が機能する。'
      }
    }
  },
  render: () => createRadioGroup({
    name: 'role',
    options: [{
      label: '一般ユーザー',
      value: 'user'
    }, {
      label: '管理者',
      value: 'admin'
    }, {
      label: 'オーナー',
      value: 'owner',
      hint: '全ての権限を持ちます'
    }, {
      label: '閲覧のみ',
      value: 'viewer',
      disabled: true
    }],
    value: 'user',
    onChange: fn()
  })
}`,...m.parameters?.docs?.source},description:{story:"`createRadioGroup` を使ったグループ例。\n選択肢を縦に並べ、1つが選択済みの状態。",...m.parameters?.docs?.description}}},h=[`Default`,`Checked`,`WithHint`,`Disabled`,`DisabledChecked`,`AllStates`,`Group`]}))();export{p as AllStates,l as Checked,c as Default,d as Disabled,f as DisabledChecked,m as Group,u as WithHint,h as __namedExportsOrder,s as default};