import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({label:e=`アイテム 1`,checked:t=!1,disabled:n=!1,onChange:r=null}={})=>{let i=document.createElement(`label`);i.className=[`storybook-toggle-switch`,t?`storybook-toggle-switch--on`:``,n?`storybook-toggle-switch--disabled`:``].filter(Boolean).join(` `);let a=document.createElement(`input`);a.type=`checkbox`,a.className=`storybook-toggle-switch__input`,a.checked=t,a.disabled=n,typeof r==`function`&&a.addEventListener(`change`,r);let o=document.createElement(`span`);o.className=`storybook-toggle-switch__track`;let s=document.createElement(`span`);if(s.className=`storybook-toggle-switch__knob`,o.appendChild(s),i.appendChild(a),i.appendChild(o),e){let t=document.createElement(`span`);t.className=`storybook-toggle-switch__label`,t.textContent=e,i.appendChild(t)}return i}})),i,a,o,s,c,l,u,d,f;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **一つの機能を、ON/OFFの状態に即座に切り替えるもの。現状が有効なのか無効なのかが、直感的に理解できる。**

---

## 基本設計

トグルトラック（28px 幅 / border-radius: 10px）＋内部ノブ（10×10px の円）の構成。
ラベルテキストはトグルの右隣に配置する。

| 状態 | トラック背景 | ノブ色 |
|------|------------|--------|
| OFF（enabled） | 白（\`#fff\`）・グレーボーダー（\`#d6d9db\`） | グレー（\`#adb2b8\`） |
| ON（enabled） | ブルー（\`#318bf7\`） | 白（\`#fff\`） |
| OFF（disabled） | 白・グレーボーダー | 薄グレー（\`#d6d9db\`） |
| ON（disabled） | 薄ブルー（\`#98c5fb\`） | 白（\`#fff\`） |

disabled 時のラベルテキストは opacity: 0.5 で表示する。

---

## 使用時に気をつけておくこと

- ON/OFFがひと目で判別できるように、色のコントラストをはっきりさせる。
- 何に対して有効/無効を切り替えるのか、明示するためにラベルを設ける。
  - ラベル文言はかならず**肯定的な表現**にする。
    - 否定表現だと、二重否定となってしまいON/OFF判断に迷う（例：「非表示にする」「非通知にしない」など）
  - 否定寄りの表現にする場合は Checkbox も検討する。
- 操作をしたら即座に反応を返す。過剰なアニメーションはつけない。
`,a={title:`ToggleSwitch`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:i}}},argTypes:{label:{control:`text`,description:`ラベルテキスト（空文字でラベルなし）`,table:{defaultValue:{summary:`アイテム 1`}}},checked:{control:`boolean`,description:`ON/OFF 状態（true = ON）`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`無効状態`,table:{defaultValue:{summary:`false`}}},onChange:{action:`changed`,description:`変更時のコールバック`}},args:{label:`アイテム 1`,checked:!1,disabled:!1}},o={},s={parameters:{docs:{description:{story:`ON 状態（enabled）。ブルー背景・白ノブ（Figma: propValue3=選択済み, disabled=False）。`}}},args:{checked:!0}},c={parameters:{docs:{description:{story:'ラベルなし。`label: ""` を渡すとトグル単体のみ表示される。'}}},args:{label:``,checked:!1}},l={parameters:{docs:{description:{story:"無効・OFF。白トラック・薄グレーノブ（`#d6d9db`）・ラベル opacity 0.5（Figma: 状態=未選択, disabled=True）。"}}},args:{disabled:!0}},u={parameters:{docs:{description:{story:"無効・ON。薄ブルー背景（`#98c5fb`）・白ノブ・ラベル opacity 0.5（Figma: 状態=選択済み, disabled=True）。"}}},args:{checked:!0,disabled:!0}},d={parameters:{docs:{description:{story:`全4状態の比較表示（Figma「基本設計」）。左列: enabled、右列: disabled。行: OFF / ON。`}}},render:()=>{let e=[{label:`OFF`,checked:!1},{label:`ON`,checked:!0}],t=document.createElement(`div`);return t.style.cssText=`display: flex; flex-direction: column; gap: 12px;`,e.forEach(({label:e,checked:r})=>{let i=document.createElement(`div`);i.style.cssText=`display: flex; align-items: center; gap: 32px;`;let a=document.createElement(`span`);a.style.cssText=`font-family: monospace; font-size: 12px; color: #858c94; width: 32px; text-align: right; flex-shrink: 0;`,a.textContent=e,i.appendChild(a),i.appendChild(n({label:`アイテム 1`,checked:r,disabled:!1})),i.appendChild(n({label:`アイテム 1`,checked:r,disabled:!0})),t.appendChild(i)}),t}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source},description:{story:`OFF 状態。白トラック・グレーノブ。デフォルト。`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ON 状態（enabled）。ブルー背景・白ノブ（Figma: propValue3=選択済み, disabled=False）。'
      }
    }
  },
  args: {
    checked: true
  }
}`,...s.parameters?.docs?.source},description:{story:"ON 状態。ブルートラック（\\`#318bf7\\`）・白ノブ。ノブは右側に移動する。",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ラベルなし。\`label: ""\` を渡すとトグル単体のみ表示される。'
      }
    }
  },
  args: {
    label: '',
    checked: false
  }
}`,...c.parameters?.docs?.source},description:{story:`ラベルテキストなし。トグル単体のみ表示。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '無効・OFF。白トラック・薄グレーノブ（\`#d6d9db\`）・ラベル opacity 0.5（Figma: 状態=未選択, disabled=True）。'
      }
    }
  },
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source},description:{story:`無効・OFF 状態。白トラック・薄グレーノブ。ラベルは opacity 0.5。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '無効・ON。薄ブルー背景（\`#98c5fb\`）・白ノブ・ラベル opacity 0.5（Figma: 状態=選択済み, disabled=True）。'
      }
    }
  },
  args: {
    checked: true,
    disabled: true
  }
}`,...u.parameters?.docs?.source},description:{story:"無効・ON 状態。薄ブルートラック（\\`#98c5fb\\`）・白ノブ。\nopacity ではなく専用の色値で表現する（Figma 仕様）。",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全4状態の比較表示（Figma「基本設計」）。左列: enabled、右列: disabled。行: OFF / ON。'
      }
    }
  },
  render: () => {
    const states = [{
      label: 'OFF',
      checked: false
    }, {
      label: 'ON',
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
      stateLabel.style.cssText = 'font-family: monospace; font-size: 12px; color: #858c94; width: 32px; text-align: right; flex-shrink: 0;';
      stateLabel.textContent = label;
      row.appendChild(stateLabel);
      row.appendChild(createToggleSwitch({
        label: 'アイテム 1',
        checked,
        disabled: false
      }));
      row.appendChild(createToggleSwitch({
        label: 'アイテム 1',
        checked,
        disabled: true
      }));
      wrapper.appendChild(row);
    });
    return wrapper;
  }
}`,...d.parameters?.docs?.source},description:{story:`全4状態の比較表示。Figma「基本設計」のパターン一覧に対応。`,...d.parameters?.docs?.description}}},f=[`Default`,`On`,`WithoutLabel`,`DisabledOff`,`DisabledOn`,`AllStates`]}))();export{d as AllStates,o as Default,l as DisabledOff,u as DisabledOn,s as On,c as WithoutLabel,f as __namedExportsOrder,a as default};