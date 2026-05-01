import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({placeholder:e=`入力してください`,value:t=``,state:n=`default`,errorMessage:r=`形式に不備があります。`,onChange:i}={})=>{let a=n===`disabled`,o=n===`error`,s=document.createElement(`div`);s.className=`storybook-input-wrapper`;let c=document.createElement(`input`);if(c.type=`text`,c.className=[`storybook-input`,n===`active`?`storybook-input--active`:``,n===`filled`?`storybook-input--filled`:``,n===`disabled`?`storybook-input--disabled`:``,n===`error`?`storybook-input--error`:``].filter(Boolean).join(` `),c.placeholder=e,c.disabled=a,(n===`active`||n===`filled`||n===`error`)&&(c.value=t||(n===`active`?`入力中のテキスト`:`入力済みのテキスト`)),c.setAttribute(`aria-invalid`,o?`true`:`false`),o&&c.setAttribute(`aria-describedby`,`input-error-msg`),c.addEventListener(`input`,e=>{typeof i==`function`&&i(e.target.value)}),s.appendChild(c),o){let e=document.createElement(`div`);e.className=`storybook-input-error`,e.id=`input-error-msg`,e.setAttribute(`role`,`alert`),e.innerHTML=`
      <svg class="storybook-input-error__icon" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           width="16" height="16" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="13"/>
        <line x1="12" y1="16" x2="12" y2="16.5"/>
      </svg>
    `;let t=document.createElement(`p`);t.className=`storybook-input-error__message`,t.textContent=r,e.appendChild(t),s.appendChild(e)}return s}})),i,a,o,s,c,l,u,d,f;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ユーザーが「何を入力すべきか」を理解している前提で、その情報をテキストで入力するもの。**

---

## 基本設計

- 横幅は自由。（固定値でも、画面幅に合わせるでもOK。）

| 状態 | 背景色 | ボーダー |
|------|--------|----------|
| 未入力 | 白（\`#fff\`） | グレー 1px（\`#d6d9db\`） |
| 入力中 | 白（\`#fff\`） | 青 2px（\`#318bf7\`） |
| 入力済み | 白（\`#fff\`） | グレー 1px（\`#d6d9db\`） |
| Disabled | グレー（\`#f7f7f8\`） | グレー 1px（\`#d6d9db\`） |
| Error | 赤み（\`#fdf2f0\`） | 赤 2px（\`#eb4d38\`）＋エラーメッセージ |

---

## 使用時に気をつけておくこと

- 短い文章を入力する場合に用いる。
  - 長い文章を入力させたい場合は TextArea を用いる。
    - 項目を分割して Input を用いるのもあり。
    - 例：住所を分ける → 郵便番号、都道府県、市区町村番地、マンション名。
- 何を入力するべきかを理解しておく必要があるため、FormLabel もセットで表示する。
  - ラベルは項目名として常に表示する。
  - プレースホルダーは入力例や補足を示す。
- 最低限 3 タイプ用意する。
  - a. 入力前
  - b. 入力後
  - c. エラー
- 文字数上限を一応決めておく。
  - 文字数を超えた場合のエラー表現はプロダクト内で統一させておくこと。
`,o={title:`Input`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{placeholder:{control:`text`,description:`プレースホルダーテキスト（入力例や補足を示す）`,table:{defaultValue:{summary:`入力してください`}}},value:{control:`text`,description:`入力値。state が active / filled / error のとき表示される`,table:{defaultValue:{summary:``}}},state:{control:`select`,options:[`default`,`active`,`filled`,`disabled`,`error`],description:`表示状態（Figma の5状態に対応）`,table:{defaultValue:{summary:`default`}}},errorMessage:{control:`text`,description:`エラー時に表示するメッセージ（state が error のときのみ表示）`,table:{defaultValue:{summary:`形式に不備があります。`}}},onChange:{action:`change`}},args:{placeholder:`入力してください`,value:``,state:`default`,errorMessage:`形式に不備があります。`,onChange:i()}},s={},c={parameters:{docs:{description:{story:"入力中（フォーカス）状態。ボーダーが青 2px（`#318bf7`）になる。"}}},args:{state:`active`,value:`入力中のテキスト`}},l={parameters:{docs:{description:{story:`入力済み状態。フォーカスが外れた後の見た目。`}}},args:{state:`filled`,value:`入力済みのテキスト`}},u={parameters:{docs:{description:{story:"Disabled 状態。背景がグレー（`#f7f7f8`）、テキスト・プレースホルダーが薄くなる。"}}},args:{state:`disabled`}},d={parameters:{docs:{description:{story:"エラー状態。背景が `#fdf2f0`、ボーダーが赤 2px（`#eb4d38`）。アラートアイコン付きのエラーメッセージが下部に表示される。"}}},args:{state:`error`,value:`入力済みのテキスト`,errorMessage:`形式に不備があります。`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`未入力状態。プレースホルダーのみ表示。ボーダーはグレー 1px。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '入力中（フォーカス）状態。ボーダーが青 2px（\\\`#318bf7\\\`）になる。'
      }
    }
  },
  args: {
    state: 'active',
    value: '入力中のテキスト'
  }
}`,...c.parameters?.docs?.source},description:{story:`入力中状態。フォーカス時のスタイル（青いボーダー 2px）。
実際のブラウザ操作では :focus-visible でも同じスタイルが適用される。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '入力済み状態。フォーカスが外れた後の見た目。'
      }
    }
  },
  args: {
    state: 'filled',
    value: '入力済みのテキスト'
  }
}`,...l.parameters?.docs?.source},description:{story:`入力済み状態。ボーダーはグレー 1px（未入力と同じ見た目）。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled 状態。背景がグレー（\\\`#f7f7f8\\\`）、テキスト・プレースホルダーが薄くなる。'
      }
    }
  },
  args: {
    state: 'disabled'
  }
}`,...u.parameters?.docs?.source},description:{story:`操作不可状態。グレー背景、テキスト色も薄く表示。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'エラー状態。背景が \\\`#fdf2f0\\\`、ボーダーが赤 2px（\\\`#eb4d38\\\`）。アラートアイコン付きのエラーメッセージが下部に表示される。'
      }
    }
  },
  args: {
    state: 'error',
    value: '入力済みのテキスト',
    errorMessage: '形式に不備があります。'
  }
}`,...d.parameters?.docs?.source},description:{story:`エラー状態。赤みがかった背景と赤いボーダー 2px。
アラートアイコン付きのエラーメッセージが下部に表示される。`,...d.parameters?.docs?.description}}},f=[`Default`,`Active`,`Filled`,`Disabled`,`Error`]}))();export{c as Active,s as Default,u as Disabled,d as Error,l as Filled,f as __namedExportsOrder,o as default};