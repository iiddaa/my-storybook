import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({state:e=`default`,placeholder:t=`入力してください`,value:n=``,errorMessage:r=`必須項目です。`}={})=>{let i=e===`disabled`,a=e===`error`,o=e===`active`,s=document.createElement(`div`);s.className=`storybook-textarea`;let c=document.createElement(`textarea`);if(c.className=[`storybook-textarea__field`,o?`storybook-textarea__field--active`:``,i?`storybook-textarea__field--disabled`:``,a?`storybook-textarea__field--error`:``].filter(Boolean).join(` `),c.placeholder=t,(e===`filled`||e===`error`||e===`active`)&&(c.value=n),i&&(c.disabled=!0,c.setAttribute(`aria-disabled`,`true`)),a&&(c.setAttribute(`aria-invalid`,`true`),c.setAttribute(`aria-describedby`,`textarea-error-msg`)),s.appendChild(c),a&&r){let e=document.createElement(`p`);e.className=`storybook-textarea__error`,e.id=`textarea-error-msg`,e.setAttribute(`role`,`alert`),e.textContent=r,s.appendChild(e)}return s}})),i,a,o,s,c,l,u,d;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ストレスなく長文を入力するための、十分な広さのあるエリア。**

---

## 基本設計

### 状態一覧

| 状態 | ボーダー | 背景 | テキスト色 | 説明 |
|------|----------|------|-----------|------|
| 未入力 | グレー 1px（\`#d6d9db\`） | 白 | プレースホルダー（\`#858c94\`） | 何も入力されていない初期状態 |
| 入力中 | 青 2px（\`#318bf7\`） | 白 | \`#222\` | フォーカス中・入力中の状態 |
| 入力済み | グレー 1px（\`#d6d9db\`） | 白 | \`#222\` | 入力が完了した状態 |
| Disabled | グレー 1px（\`#d6d9db\`） | グレー（\`#f7f7f8\`） | \`#adb2b8\` | 操作不可状態 |
| Error | 赤 1px（\`#eb4d38\`） | 薄赤（\`#fdf2f0\`） | \`#222\` | バリデーションエラー時。エラーメッセージを下部に表示 |

### サイズ仕様

| 項目 | 仕様 |
|------|------|
| デフォルト高さ | 200px |
| 最小高さ | 1行分（37px）まで縮小可能（必要な場合のみ） |
| 最大高さ | 画面ごとにデザイナーが指定する。超過時はスクロールを表示 |
| padding | 8px 12px |
| border-radius | 4px |
| フォント | Hiragino Sans W3 / 14px / line-height 1.5 |
| リサイズ | ユーザーが縦方向に拡張可能（右下のリサイズハンドル） |

---

## 使用時に気をつけておくこと

- 複数行入力可能なことが直感的に分かるサイズにする。
- 入力内容に応じて高さが拡張される、もしくはユーザーが自身で広げられるようにする。
- 入力されるテキストをあらかじめ想定して、デフォルトの高さを決めること。
- 文字数上限を決めておく。
- 文字数を超えた場合のエラー表現はプロダクト内で統一させておく。
- 何を入力するべきかがわかるラベルもセットで表示する（ラベルは別パーツ）
  - ラベルは項目名として常に表示、プレースホルダーは入力例や補足を示す用途とし、役割を分ける
`,a={title:`TextArea`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:i}}},argTypes:{state:{control:`select`,options:[`default`,`active`,`filled`,`disabled`,`error`],description:`表示状態（Figma の5状態に対応）`,table:{defaultValue:{summary:`default`}}},placeholder:{control:`text`,description:`プレースホルダーテキスト`,table:{defaultValue:{summary:`入力してください`}}},value:{control:`text`,description:`入力済みテキスト（filled / active / error 時に使用）`,table:{defaultValue:{summary:``}}},errorMessage:{control:`text`,description:`エラーメッセージ（error 状態のときのみ表示）`,table:{defaultValue:{summary:`必須項目です。`}}}},args:{state:`default`,placeholder:`入力してください`,value:``,errorMessage:`必須項目です。`}},o={},s={parameters:{docs:{description:{story:"入力中（フォーカス）状態。ボーダーが青 2px（`#318bf7`）に変化する（Figma「入力中」）。"}}},args:{state:`active`,value:`入力してください`}},c={parameters:{docs:{description:{story:"入力済み状態。テキストが `#222` で表示される（Figma「入力済み」）。"}}},args:{state:`filled`,value:`入力済みのテキストが表示されます。複数行にわたる長文も問題なく表示されます。`}},l={parameters:{docs:{description:{story:"Disabled 状態。背景 `#f7f7f8`、文字色 `#adb2b8`、リサイズ不可（Figma「Disabled」）。"}}},args:{state:`disabled`}},u={parameters:{docs:{description:{story:"Error 状態。赤ボーダー（`#eb4d38`）＋薄赤背景（`#fdf2f0`）＋エラーメッセージを表示（Figma「Error」）。"}}},args:{state:`error`,value:``,errorMessage:`必須項目です。`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source},description:{story:"未入力状態。プレースホルダー（`#858c94`）を表示。ボーダーはグレー 1px。",...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '入力中（フォーカス）状態。ボーダーが青 2px（\`#318bf7\`）に変化する（Figma「入力中」）。'
      }
    }
  },
  args: {
    state: 'active',
    value: '入力してください'
  }
}`,...s.parameters?.docs?.source},description:{story:"入力中（フォーカス）状態。ボーダーが青 2px（`#318bf7`）になる。\nフォーカス時の視覚的フィードバック。",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '入力済み状態。テキストが \`#222\` で表示される（Figma「入力済み」）。'
      }
    }
  },
  args: {
    state: 'filled',
    value: '入力済みのテキストが表示されます。複数行にわたる長文も問題なく表示されます。'
  }
}`,...c.parameters?.docs?.source},description:{story:"入力済み状態。テキスト色 `#222`、ボーダーはグレー 1px に戻る。",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled 状態。背景 \`#f7f7f8\`、文字色 \`#adb2b8\`、リサイズ不可（Figma「Disabled」）。'
      }
    }
  },
  args: {
    state: 'disabled'
  }
}`,...l.parameters?.docs?.source},description:{story:"操作不可状態。背景グレー（`#f7f7f8`）、テキスト・プレースホルダー色が `#adb2b8` に変化。",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Error 状態。赤ボーダー（\`#eb4d38\`）＋薄赤背景（\`#fdf2f0\`）＋エラーメッセージを表示（Figma「Error」）。'
      }
    }
  },
  args: {
    state: 'error',
    value: '',
    errorMessage: '必須項目です。'
  }
}`,...u.parameters?.docs?.source},description:{story:"エラー状態。ボーダーが赤（`#eb4d38`）、背景が薄赤（`#fdf2f0`）になり、\nエリア下部にエラーメッセージを表示する。",...u.parameters?.docs?.description}}},d=[`Default`,`Active`,`Filled`,`Disabled`,`Error`]}))();export{s as Active,o as Default,l as Disabled,u as Error,c as Filled,d as __namedExportsOrder,a as default};