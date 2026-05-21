import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n=({label:e,value:t,name:n=``,checked:r=!1,disabled:i=!1,hint:a=``,onChange:o})=>{let s=document.createElement(`label`);s.className=[`storybook-radio-item`,i?`storybook-radio-item--disabled`:``].filter(Boolean).join(` `);let c=document.createElement(`input`);c.type=`radio`,c.className=`storybook-radio-input`,c.name=n,c.value=t,c.checked=r,c.disabled=i,o&&c.addEventListener(`change`,o);let l=document.createElement(`span`);l.className=[`storybook-radio-circle`,r?`storybook-radio-circle--checked`:``].filter(Boolean).join(` `);let u=document.createElement(`span`);u.className=`storybook-radio-text`;let d=document.createElement(`span`);if(d.className=`storybook-radio-label`,d.innerText=e,u.appendChild(d),a){let e=document.createElement(`span`);e.className=`storybook-radio-hint`,e.innerText=a,u.appendChild(e)}return s.appendChild(c),s.appendChild(l),s.appendChild(u),s},r=({name:e,options:t=[],value:r=``,onChange:i})=>{let a=document.createElement(`div`);return a.className=`storybook-radio-group`,t.forEach(t=>{let o=n({label:t.label,value:t.value,name:e,checked:t.value===r,disabled:t.disabled??!1,hint:t.hint??``,onChange:i});a.appendChild(o)}),a}})),a,o,s,c,l,u,d,f,p,m,h;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **選択肢から一つを選べるもの。選択肢を格納せずに全て表示するため、選択肢を一覧できる。**

---

## 基本設計

ラジオ丸（16×16px / border-radius: 10px の円形）＋ラベルテキスト（任意でヒントテキスト）の構成。

| 状態 | 見た目 |
|------|--------|
| unchecked（enabled） | 白背景・グレーボーダー（\`#d6d9db\`） |
| hover（enabled） | 白背景・ブルーボーダー（\`#318bf7\`） |
| checked（enabled） | ブルー背景（\`#318bf7\`）・中央に白ドット（6×6px） |
| unchecked（disabled） | グレー背景（\`#d6d9db\`）・グレーボーダー |
| checked（disabled） | 薄ブルー背景（\`#98c5fb\`）・グレーボーダー・白ドット |

---

## 使用時に気をつけておくこと

- Checkbox・RadioButton・ToggleSwitchの使い分けを意識して、適切に使い分ける。
- 選択状態がひと目で分かるよう、視認性を重視する。
- 何に対しての操作なのか明示するためにラベルを設ける。
- ラベルも含めてクリック/タップ領域を確保する。
- 操作をしたら即座に反応を返す。過剰なアニメーションはつけない。
`,s={title:`RadioButton`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:o}}},argTypes:{label:{control:`text`,description:`選択肢のラベルテキスト`,table:{defaultValue:{summary:`アイテム 1`}}},value:{control:`text`,description:`この選択肢の値`},name:{control:`text`,description:`ラジオグループ名（同一グループで共通にする）`},checked:{control:`boolean`,description:`選択済み状態`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`無効状態`,table:{defaultValue:{summary:`false`}}},hint:{control:`text`,description:`ラベル下に表示するヒントテキスト（空文字の場合は非表示）`,table:{defaultValue:{summary:``}}},onChange:{action:`changed`}},args:{label:`アイテム 1`,value:`item1`,name:`example`,checked:!1,disabled:!1,hint:``,onChange:a()}},c={},l={parameters:{docs:{description:{story:`選択済み状態（enabled）。ブルー背景・白ドット（Figma: 状態=選択済み, disabled=False）。`}}},args:{checked:!0}},u={parameters:{docs:{description:{story:"ヒントテキスト付き。ラベル下に 12px・`#5c6670` で補足テキストを表示（Figma: propValue4=true）。"}}},args:{hint:`ヒントテキスト`}},d={parameters:{docs:{description:{story:"無効・未選択。グレー背景（`#d6d9db`）・テキスト `#adb2b8`（Figma: 状態=未選択, disabled=True）。"}}},args:{disabled:!0}},f={parameters:{docs:{description:{story:"無効・選択済み。薄ブルー背景（`#98c5fb`）・グレーボーダー・白ドット（Figma: 状態=選択済み, disabled=True）。"}}},args:{checked:!0,disabled:!0}},p={parameters:{docs:{description:{story:`全状態の比較表示（Figma「基本設計」）。左列: enabled、右列: disabled。行: unchecked / checked。`}}},render:()=>{let e=[{label:`unchecked`,checked:!1},{label:`checked`,checked:!0}],t=document.createElement(`div`);return t.style.cssText=`display: flex; flex-direction: column; gap: 12px;`,e.forEach(({label:e,checked:r})=>{let i=document.createElement(`div`);i.style.cssText=`display: flex; align-items: center; gap: 32px;`;let o=document.createElement(`span`);o.style.cssText=`font-family: monospace; font-size: 12px; color: #858c94; width: 90px; text-align: right; flex-shrink: 0;`,o.textContent=e,i.appendChild(o),i.appendChild(n({label:`アイテム 1`,value:e,name:`all`,checked:r,disabled:!1,onChange:a()})),i.appendChild(n({label:`アイテム 1`,value:e+`-d`,name:`all`,checked:r,disabled:!0,onChange:a()})),t.appendChild(i)}),t}},m={parameters:{docs:{description:{story:"`createRadioGroup` を使った複数選択肢のグループ。同一の `name` でまとめることで排他選択が機能する。"}}},render:()=>r({name:`role`,options:[{label:`一般ユーザー`,value:`user`},{label:`管理者`,value:`admin`},{label:`オーナー`,value:`owner`,hint:`全ての権限を持ちます`},{label:`閲覧のみ`,value:`viewer`,disabled:!0}],value:`user`,onChange:a()})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`未選択・有効状態。デフォルト。グレーボーダーの空のラジオ丸。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '選択済み状態（enabled）。ブルー背景・白ドット（Figma: 状態=選択済み, disabled=False）。'
      }
    }
  },
  args: {
    checked: true
  }
}`,...l.parameters?.docs?.source},description:{story:"選択済み。ブルー背景（\\`#318bf7\\`）＋中央に白ドット（6×6px）が表示される。",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ヒントテキスト付き。ラベル下に 12px・\`#5c6670\` で補足テキストを表示（Figma: propValue4=true）。'
      }
    }
  },
  args: {
    hint: 'ヒントテキスト'
  }
}`,...u.parameters?.docs?.source},description:{story:"ラベル下にヒントテキスト（12px / \\`#5c6670\\`）を表示する。",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '無効・未選択。グレー背景（\`#d6d9db\`）・テキスト \`#adb2b8\`（Figma: 状態=未選択, disabled=True）。'
      }
    }
  },
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source},description:{story:"無効・未選択状態。グレー背景（\\`#d6d9db\\`）でインタラクション不可。テキストも薄くなる（\\`#adb2b8\\`）。",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '無効・選択済み。薄ブルー背景（\`#98c5fb\`）・グレーボーダー・白ドット（Figma: 状態=選択済み, disabled=True）。'
      }
    }
  },
  args: {
    checked: true,
    disabled: true
  }
}`,...f.parameters?.docs?.source},description:{story:"無効・選択済み状態。薄ブルー背景（\\`#98c5fb\\`）でインタラクション不可。",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全状態の比較表示（Figma「基本設計」）。左列: enabled、右列: disabled。行: unchecked / checked。'
      }
    }
  },
  render: () => {
    const states = [{
      label: 'unchecked',
      checked: false
    }, {
      label: 'checked',
      checked: true
    }];
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    states.forEach(({
      label,
      checked
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 32px;';
      const stateLabel = document.createElement('span');
      stateLabel.style.cssText = 'font-family: monospace; font-size: 12px; color: #858c94; width: 90px; text-align: right; flex-shrink: 0;';
      stateLabel.textContent = label;
      row.appendChild(stateLabel);
      row.appendChild(createRadioButton({
        label: 'アイテム 1',
        value: label,
        name: 'all',
        checked,
        disabled: false,
        onChange: fn()
      }));
      row.appendChild(createRadioButton({
        label: 'アイテム 1',
        value: label + '-d',
        name: 'all',
        checked,
        disabled: true,
        onChange: fn()
      }));
      wrapper.appendChild(row);
    });
    return wrapper;
  }
}`,...p.parameters?.docs?.source},description:{story:`全状態の比較表示。Figma「基本設計」のカラーパターン一覧に対応。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"`createRadioGroup` を使ったグループ例。\n同一の `name` を持つ選択肢を縦に並べ、排他選択が機能する状態。",...m.parameters?.docs?.description}}},h=[`Default`,`Checked`,`WithHint`,`DisabledUnchecked`,`DisabledChecked`,`AllStates`,`Group`]}))();export{p as AllStates,l as Checked,c as Default,f as DisabledChecked,d as DisabledUnchecked,m as Group,u as WithHint,h as __namedExportsOrder,s as default};