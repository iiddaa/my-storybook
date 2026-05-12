import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n=`<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M1 3.5L3.8 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,r=({label:e=`アイテム 1`,description:t=``,checked:r=!1,indeterminate:i=!1,disabled:a=!1,onChange:o=null}={})=>{let s=document.createElement(a?`div`:`button`);s.className=`storybook-checkbox${a?` storybook-checkbox--disabled`:``}`,a||(s.type=`button`,s.setAttribute(`role`,`checkbox`),s.setAttribute(`aria-checked`,i?`mixed`:String(r)),typeof o==`function`&&s.addEventListener(`click`,o));let c=document.createElement(`span`);c.className=`storybook-checkbox__box-container`;let l=document.createElement(`span`),u=[];if(i?u.push(`storybook-checkbox__box--indeterminate`):r&&u.push(`storybook-checkbox__box--checked`),l.className=[`storybook-checkbox__box`,...u].join(` `),i){let e=document.createElement(`span`);e.className=`storybook-checkbox__indeterminate-bar`,l.appendChild(e)}else r&&(l.innerHTML=n);c.appendChild(l),s.appendChild(c);let d=document.createElement(`span`);d.className=`storybook-checkbox__text`;let f=document.createElement(`span`);if(f.className=`storybook-checkbox__label`,f.textContent=e,d.appendChild(f),t){let e=document.createElement(`span`);e.className=`storybook-checkbox__description`,e.textContent=t,d.appendChild(e)}return s.appendChild(d),s}})),a,o,s,c,l,u,d,f,p,m,h;e((()=>{i(),a=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **選択肢に対し、ON/OFFを切り替えるもの。複数の項目に対して、自由な組み合わせでON/OFFが選べる。**

---

## 基本設計

チェックボックス本体（16×16px / border-radius: 4px）＋ラベルテキスト（任意で説明文）の構成。

| 状態 | 見た目 |
|------|--------|
| unchecked（enabled） | 白背景・グレーボーダー（\`#d6d9db\`） |
| hover（enabled） | 白背景・ブルーボーダー（\`#318bf7\`） |
| checked（enabled） | ブルー背景（\`#318bf7\`）・白チェックマーク |
| indeterminate（enabled） | ブルー背景（\`#318bf7\`）・白ダッシュ |
| unchecked（disabled） | グレー背景（\`#d6d9db\`）・グレーボーダー |
| checked（disabled） | 薄ブルー背景（\`#98c5fb\`）・グレーボーダー・白チェックマーク |
| indeterminate（disabled） | 薄ブルー背景（\`#98c5fb\`）・グレーボーダー・白ダッシュ |

---

## 使用時に気をつけておくこと

- 「Checkbox・RadioButton・ToggleSwitchの使い分け」を意識して、適切に使い分ける。
- 選択状態がひと目で分かるよう、視認性を重視する。
- 何に対しての操作なのか明示するためにラベルを設ける。
- ラベルも含めてクリック/タップ領域を確保する。
- 操作をしたら即座に反応を返す。過剰なアニメーションはつけない。

---

## 選択パーツの使い分け

**選択パーツには、選択肢が最初から表示されているタイプ or 選択肢が隠れているタイプがある。**

### 選択肢が最初から表示されているタイプ ［Checkbox］［RadioButton］［ToggleSwitch］

選択肢が **5つ未満** であればこちらを使う。

| | Checkbox | RadioButton | ToggleSwitch |
|---|---|---|---|
| **単一選択・複数選択** | どちらも可能 | 一つしか選択できない（排他的選択） | 単一の項目に対してON/OFFできる |
| **状態の反映タイミング** | 決定や保存などのアクションを完了したあと | 決定や保存などのアクションを完了したあと | 操作した時点で即時反映される |

### 選択肢が隠れているタイプ ［Select］［Combobox］

選択肢が **5つ以上** であればこちらを使う。領域の制約がある場合にもこちらを使う。

| | Select | Combobox |
|---|---|---|
| **選択肢の絞り込み** | ❌ | ⭕️ |
| **単一選択・複数選択** | どちらも可能 | どちらも可能 |
| **使い分け** | 選択肢が少ない場合 | 選択肢が多い場合 |

**ただし以下のような例外もある。**
- 不動産サービスなどの場合は都道府県選択を強調させるため、選択肢が多くともCheckbox・Radio Buttonを利用。
- 画面の一貫性を揃えるため、選択肢が少なくともCheckbox・Radio Buttonを利用。
`,o={title:`Checkbox`,tags:[`autodocs`],render:e=>r(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{label:{control:`text`,description:`ラベルテキスト`,table:{defaultValue:{summary:`アイテム 1`}}},description:{control:`text`,description:`説明文（空文字の場合は非表示）`,table:{defaultValue:{summary:``}}},checked:{control:`boolean`,description:`選択済み状態`,table:{defaultValue:{summary:`false`}}},indeterminate:{control:`boolean`,description:`不確定状態（ダッシュ表示）。checked より優先される`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`無効状態`,table:{defaultValue:{summary:`false`}}},onChange:{action:`changed`,description:`クリック時のコールバック`}},args:{label:`アイテム 1`,description:``,checked:!1,indeterminate:!1,disabled:!1}},s={},c={parameters:{docs:{description:{story:`選択済み状態（enabled）。ブルー背景・白チェックマーク（Figma: 状態=選択済み, disabled=False）。`}}},args:{checked:!0}},l={parameters:{docs:{description:{story:`不確定状態（indeterminate）。ブルー背景・白ダッシュ。複数項目の一部選択などで使用（Figma 基本設計）。`}}},args:{indeterminate:!0}},u={parameters:{docs:{description:{story:"説明文付き。ラベル下に 12px・`#5c6670` で説明文を表示（Figma: propValue3=true）。"}}},args:{label:`アイテム 1`,description:`説明文`}},d={parameters:{docs:{description:{story:"無効・未選択。グレー背景（`#d6d9db`）・テキスト `#adb2b8`（Figma: 状態=未選択, disabled=True）。"}}},args:{disabled:!0}},f={parameters:{docs:{description:{story:"無効・選択済み。薄ブルー背景（`#98c5fb`）・グレーボーダー（Figma: 状態=選択済み, disabled=True）。"}}},args:{checked:!0,disabled:!0}},p={parameters:{docs:{description:{story:"無効・不確定状態。薄ブルー背景（`#98c5fb`）・白ダッシュ（Figma 基本設計）。"}}},args:{indeterminate:!0,disabled:!0}},m={parameters:{docs:{description:{story:`全状態の比較表示（Figma「基本設計」）。左列: enabled、右列: disabled。行: unchecked / checked / indeterminate。`}}},render:()=>{let e=[{label:`unchecked`,checked:!1,indeterminate:!1},{label:`checked`,checked:!0,indeterminate:!1},{label:`indeterminate`,checked:!1,indeterminate:!0}],t=document.createElement(`div`);return t.style.cssText=`display: flex; flex-direction: column; gap: 12px;`,e.forEach(({label:e,checked:n,indeterminate:i})=>{let a=document.createElement(`div`);a.style.cssText=`display: flex; align-items: center; gap: 32px;`;let o=document.createElement(`span`);o.style.cssText=`font-family: monospace; font-size: 12px; color: #858c94; width: 110px; text-align: right; flex-shrink: 0;`,o.textContent=e,a.appendChild(o),a.appendChild(r({label:`アイテム 1`,checked:n,indeterminate:i,disabled:!1})),a.appendChild(r({label:`アイテム 1`,checked:n,indeterminate:i,disabled:!0})),t.appendChild(a)}),t}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`未選択・有効状態。デフォルト。グレーボーダーの空のチェックボックス。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '選択済み状態（enabled）。ブルー背景・白チェックマーク（Figma: 状態=選択済み, disabled=False）。'
      }
    }
  },
  args: {
    checked: true
  }
}`,...c.parameters?.docs?.source},description:{story:"選択済み。ブルー背景（\\`#318bf7\\`）に白チェックマークが表示される。",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '不確定状態（indeterminate）。ブルー背景・白ダッシュ。複数項目の一部選択などで使用（Figma 基本設計）。'
      }
    }
  },
  args: {
    indeterminate: true
  }
}`,...l.parameters?.docs?.source},description:{story:`不確定状態。複数項目のうち一部だけ選択されている場合などに使用。
ブルー背景に白いダッシュ（－）が表示される。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '説明文付き。ラベル下に 12px・\`#5c6670\` で説明文を表示（Figma: propValue3=true）。'
      }
    }
  },
  args: {
    label: 'アイテム 1',
    description: '説明文'
  }
}`,...u.parameters?.docs?.source},description:{story:"説明文付き。ラベル直下に補足テキスト（12px / \\`#5c6670\\`）を表示。",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"無効・未選択状態。グレー背景（\\`#d6d9db\\`）でインタラクション不可。テキストも薄くなる。",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '無効・選択済み。薄ブルー背景（\`#98c5fb\`）・グレーボーダー（Figma: 状態=選択済み, disabled=True）。'
      }
    }
  },
  args: {
    checked: true,
    disabled: true
  }
}`,...f.parameters?.docs?.source},description:{story:"無効・選択済み状態。薄いブルー背景（\\`#98c5fb\\`）でインタラクション不可。",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '無効・不確定状態。薄ブルー背景（\`#98c5fb\`）・白ダッシュ（Figma 基本設計）。'
      }
    }
  },
  args: {
    indeterminate: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:"無効・不確定状態。薄いブルー背景（\\`#98c5fb\\`）でインタラクション不可。",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全状態の比較表示（Figma「基本設計」）。左列: enabled、右列: disabled。行: unchecked / checked / indeterminate。'
      }
    }
  },
  render: () => {
    const states = [{
      label: 'unchecked',
      checked: false,
      indeterminate: false
    }, {
      label: 'checked',
      checked: true,
      indeterminate: false
    }, {
      label: 'indeterminate',
      checked: false,
      indeterminate: true
    }];
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    states.forEach(({
      label,
      checked,
      indeterminate
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 32px;';
      const stateLabel = document.createElement('span');
      stateLabel.style.cssText = 'font-family: monospace; font-size: 12px; color: #858c94; width: 110px; text-align: right; flex-shrink: 0;';
      stateLabel.textContent = label;
      row.appendChild(stateLabel);
      row.appendChild(createCheckbox({
        label: 'アイテム 1',
        checked,
        indeterminate,
        disabled: false
      }));
      row.appendChild(createCheckbox({
        label: 'アイテム 1',
        checked,
        indeterminate,
        disabled: true
      }));
      wrapper.appendChild(row);
    });
    return wrapper;
  }
}`,...m.parameters?.docs?.source},description:{story:`全状態の比較表示。Figma「基本設計」のカラーパターン一覧に対応。`,...m.parameters?.docs?.description}}},h=[`Default`,`Checked`,`Indeterminate`,`WithDescription`,`DisabledUnchecked`,`DisabledChecked`,`DisabledIndeterminate`,`AllStates`]}))();export{m as AllStates,c as Checked,s as Default,f as DisabledChecked,p as DisabledIndeterminate,d as DisabledUnchecked,l as Indeterminate,u as WithDescription,h as __namedExportsOrder,o as default};