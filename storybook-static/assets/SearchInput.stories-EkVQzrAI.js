import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({placeholder:e=`店舗名、店番、住所で検索`,value:t=``,state:n=`default`,historyItems:r=[`前回の履歴_1`,`前回の履歴_2`,`前回の履歴_3`],onSearch:i,onHistorySelect:a}={})=>{let o=n===`disabled`,s=n===`focus`,c=n===`active`,l=n===`filled`,u=document.createElement(`div`);u.className=`storybook-search-input`;let d=document.createElement(`div`);d.className=[`storybook-search-input__field`,s||c?`storybook-search-input__field--focused`:``,o?`storybook-search-input__field--disabled`:``].filter(Boolean).join(` `);let f=document.createElement(`span`);f.className=`storybook-search-input__icon`,f.setAttribute(`aria-hidden`,`true`),f.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         width="16" height="16">
      <circle cx="11" cy="11" r="7"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  `,d.appendChild(f);let p=document.createElement(`input`);if(p.type=`text`,p.className=`storybook-search-input__input`,p.placeholder=e,p.disabled=o,p.setAttribute(`aria-label`,e),c?p.value=t||`入力中のテキスト`:l&&(p.value=t||`入力済みのテキスト`),d.appendChild(p),u.appendChild(d),s&&r&&r.length>0){let e=document.createElement(`div`);e.className=`storybook-search-input__dropdown`,e.setAttribute(`role`,`listbox`),r.forEach(t=>{let n=document.createElement(`div`);n.className=`storybook-search-input__dropdown-item`,n.setAttribute(`role`,`option`),n.tabIndex=0;let r=document.createElement(`span`);r.className=`storybook-search-input__dropdown-query`,r.textContent=t;let i=document.createElement(`span`);i.className=`storybook-search-input__dropdown-suffix`,i.textContent=`で検索`,n.appendChild(r),n.appendChild(i),n.addEventListener(`click`,()=>{typeof a==`function`&&a(t)}),e.appendChild(n)}),u.appendChild(e)}if(c){let e=p.value,t=document.createElement(`div`);t.className=`storybook-search-input__dropdown storybook-search-input__dropdown--suggest`,t.setAttribute(`role`,`listbox`);let n=document.createElement(`div`);n.className=`storybook-search-input__dropdown-item`,n.setAttribute(`role`,`option`),n.tabIndex=0;let r=document.createElement(`span`);r.className=`storybook-search-input__dropdown-query`,r.textContent=e;let a=document.createElement(`span`);a.className=`storybook-search-input__dropdown-suffix`,a.textContent=`で検索`,n.appendChild(r),n.appendChild(a),n.addEventListener(`click`,()=>{typeof i==`function`&&i(e)}),t.appendChild(n),u.appendChild(t)}return p.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let e=p.value.trim();e&&typeof i==`function`&&i(e)}}),u}})),i,a,o,s,c,l,u,d,f,p;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **大量のデータから、条件に一致するものだけを探し出すもの。**

---

## 基本設計

- 横幅は自由。（固定値でも、画面幅に合わせるでもOK。）

| 状態 | ボーダー | 説明 |
|------|----------|------|
| 未入力 | グレー 1px（\`#d6d9db\`） | プレースホルダー表示 |
| フォーカス時 | 青 2px（\`#318bf7\`） | 前回の検索履歴がドロップダウンで最大 n 件表示。履歴候補クリックで検索実行。履歴がなければ候補は非表示 |
| 入力中 | 青 2px（\`#318bf7\`） | 入力テキストの下部に「〜で検索」クリッカブルエリアが表示。クリックまたは Enter で検索実行。テキストが空の状態で Enter を押すと未入力状態に戻る |
| 入力済み | グレー 1px（\`#d6d9db\`） | 検索実行後の状態 |
| Disabled | グレー 1px（\`#d6d9db\`） | 操作不可、グレー背景 |

---

## 詳細な仕様

**入力文章が長い場合**
- 改行はしない。末尾を表示する。
- 横スクロールで全文を参照できる。

---

## 使用時に気をつけておくこと

- Input は「情報を登録する」ためのものだが、Search Input は「今ある情報の中から見つけ出す」ためのもの。
  - 「何を入力するか」よりも「入力した結果、何が出るか」に価値がある。
- タイトルラベルは不要。配置する場所やアイコンで、検索窓だと認知させることは可能。
`,o={title:`SearchInput`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{placeholder:{control:`text`,description:`プレースホルダーテキスト`,table:{defaultValue:{summary:`店舗名、店番、住所で検索`}}},value:{control:`text`,description:`入力値（state が active / filled のときに使用）`,table:{defaultValue:{summary:``}}},state:{control:`select`,options:[`default`,`focus`,`active`,`filled`,`disabled`],description:`表示状態（Figma の5状態に対応）`,table:{defaultValue:{summary:`default`}}},historyItems:{control:`object`,description:`検索履歴リスト（state が focus のときにドロップダウン表示）`},onSearch:{action:`search`},onHistorySelect:{action:`historySelect`}},args:{placeholder:`店舗名、店番、住所で検索`,value:``,state:`default`,historyItems:[`前回の履歴_1`,`前回の履歴_2`,`前回の履歴_3`],onSearch:i(),onHistorySelect:i()}},s={},c={parameters:{docs:{description:{story:`フォーカス時。前回の検索履歴をドロップダウンで表示。候補クリックで検索実行（Figma 基本設計より）。`}}},args:{state:`focus`,historyItems:[`前回の履歴_1`,`前回の履歴_2`,`前回の履歴_3`]}},l={parameters:{docs:{description:{story:`入力中。下部の「〜で検索」エリアをクリック or Enter で検索実行（Figma 基本設計より）。`}}},args:{state:`active`,value:`入力中のテキスト`}},u={parameters:{docs:{description:{story:`入力済み状態（検索実行後）。フォーカスが外れ、ボーダーがグレーに戻る。`}}},args:{state:`filled`,value:`入力済みのテキスト`}},d={parameters:{docs:{description:{story:"Disabled 状態。操作不可。背景グレー（`#f7f7f8`）、アイコン・テキスト色が薄くなる。"}}},args:{state:`disabled`}},f={parameters:{docs:{description:{story:`入力文章が長い場合。改行せず末尾を表示する（Figma「詳細な仕様」より）。`}}},args:{state:`active`,value:`ストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`未入力状態。プレースホルダーのみ表示。ボーダーはグレー 1px。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'フォーカス時。前回の検索履歴をドロップダウンで表示。候補クリックで検索実行（Figma 基本設計より）。'
      }
    }
  },
  args: {
    state: 'focus',
    historyItems: ['前回の履歴_1', '前回の履歴_2', '前回の履歴_3']
  }
}`,...c.parameters?.docs?.source},description:{story:`未入力のSearch Inputにフォーカスを当てた状態。
前回の検索履歴が候補としてドロップダウン表示される。
履歴候補をクリックで検索実行。履歴がなければ候補は非表示。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '入力中。下部の「〜で検索」エリアをクリック or Enter で検索実行（Figma 基本設計より）。'
      }
    }
  },
  args: {
    state: 'active',
    value: '入力中のテキスト'
  }
}`,...l.parameters?.docs?.source},description:{story:`入力中状態。入力テキストの下部に「〜で検索」のクリッカブルエリアが表示。
クリックまたは Enter で検索実行。テキストが空の状態で Enter を押すと未入力状態に戻る。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '入力済み状態（検索実行後）。フォーカスが外れ、ボーダーがグレーに戻る。'
      }
    }
  },
  args: {
    state: 'filled',
    value: '入力済みのテキスト'
  }
}`,...u.parameters?.docs?.source},description:{story:`検索実行後の入力済み状態。ボーダーはグレー 1px（未入力と同じ見た目）。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled 状態。操作不可。背景グレー（\\\`#f7f7f8\\\`）、アイコン・テキスト色が薄くなる。'
      }
    }
  },
  args: {
    state: 'disabled'
  }
}`,...d.parameters?.docs?.source},description:{story:`操作不可状態。背景がグレー、テキスト・アイコン色が薄くなる。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '入力文章が長い場合。改行せず末尾を表示する（Figma「詳細な仕様」より）。'
      }
    }
  },
  args: {
    state: 'active',
    value: 'ストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合'
  }
}`,...f.parameters?.docs?.source},description:{story:`入力文章が長い場合の表示確認。
改行せず末尾を表示、横スクロールで全文参照可能（Figma 詳細な仕様より）。`,...f.parameters?.docs?.description}}},p=[`Default`,`Focus`,`Active`,`Filled`,`Disabled`,`LongText`]}))();export{l as Active,s as Default,d as Disabled,u as Filled,c as Focus,f as LongText,p as __namedExportsOrder,o as default};