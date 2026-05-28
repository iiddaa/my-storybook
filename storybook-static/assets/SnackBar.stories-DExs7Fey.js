import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n={progress:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13.5 8A5.5 5.5 0 1 1 11.22 3.74" stroke="#318bf7" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M11.5 2V5.5H15" stroke="#318bf7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,success:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" fill="#22ad7f"/>
    <path d="M5 8L7.5 10.5L11.5 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,error:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" fill="#eb4d38"/>
    <path d="M8 5V8.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="8" cy="11" r="0.875" fill="white"/>
  </svg>`,alert:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" fill="#f78f43"/>
    <path d="M8 5V8.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="8" cy="11" r="0.875" fill="white"/>
  </svg>`,close:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4L12 12M12 4L4 12" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`},r=({type:e=`progress`,message:t=``,linkText:r=``,onClose:i=null,onLinkClick:a=null}={})=>{let o=document.createElement(`div`);o.className=[`storybook-snack-bar`,`storybook-snack-bar--${e}`].join(` `),o.setAttribute(`role`,`status`),o.setAttribute(`aria-live`,`polite`);let s=document.createElement(`span`);s.className=`storybook-snack-bar__icon`,s.innerHTML=n[e]??n.progress,o.appendChild(s);let c=document.createElement(`div`);c.className=`storybook-snack-bar__body`;let l=document.createElement(`span`);if(l.className=`storybook-snack-bar__message`,l.textContent=t,c.appendChild(l),r){let e=document.createElement(`a`);e.className=`storybook-snack-bar__link`,e.href=`#`,e.textContent=r,e.addEventListener(`click`,e=>{e.preventDefault(),typeof a==`function`&&a(e)}),c.appendChild(e)}o.appendChild(c);let u=document.createElement(`button`);return u.className=`storybook-snack-bar__close`,u.type=`button`,u.setAttribute(`aria-label`,`閉じる`),u.innerHTML=n.close,u.addEventListener(`click`,e=>{typeof i==`function`&&i(e)}),o.appendChild(u),o}})),a,o,s,c,l,u,d,f,p;e((()=>{i(),a=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ユーザーの操作に対するフィードバックを、一時的に表示するコンポーネント。**

---

## 基本設計

| 要素 | 仕様 |
|------|------|
| 幅 | 720px（最小 360px） |
| 高さ | コンテンツに依存（padding: 12px 16px） |
| 角丸 | 4px |
| 影 | \`0px 2px 5px rgba(0,0,0,0.15)\` |
| レイアウト | アイコン（16px）＋ テキスト（flex:1）＋ 閉じるボタン（16px） |

### タイプ別カラー

| タイプ | 背景色 | アイコン色 |
|--------|--------|-----------|
| Progress | \`#eaf3fe\` | \`#318bf7\`（青） |
| Success | \`#e4f5ef\` | \`#22ad7f\`（緑） |
| Error | \`#fdf2f0\` | \`#eb4d38\`（赤） |
| Alert | \`#fef4ed\` | \`#f78f43\`（橙） |

---

## SnackBar / InformationPanel / Chip（ステータス）の使い分け

| | SnackBar | InformationPanel | Chip（ステータス） |
|---|---|---|---|
| 目的 | **操作への反応**を伝える | **補足情報**を画面内に常駐させる | **状態**をラベルで示す |
| 表示タイミング | 操作直後（一時的） | 常時（または条件付き） | 常時 |
| 表示位置 | 画面下部に浮かせる | コンテンツ内・インライン | テキストやカードの中 |
| 閉じる機能 | あり | なし | なし |

---

## 使用時に気をつけておくこと

- 一時的なフィードバックに使う。恒久的な情報は InformationPanel を使う。
- 複数の SnackBar を同時表示しない。最新のものが上書きするか、キューで管理する。
- 自動消去する場合は十分な表示時間（最低 3 秒以上）を確保する。
- \`linkText\` は「他 XX 件のエラー内容を確認」のような補足ナビゲーションに使用する。
`,o={title:`SnackBar`,tags:[`autodocs`],render:e=>r(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{type:{control:`select`,options:[`progress`,`success`,`error`,`alert`],description:`タイプ（色とアイコンが変化する）`,table:{defaultValue:{summary:`progress`}}},message:{control:`text`,description:`メッセージ本文`,table:{defaultValue:{summary:``}}},linkText:{control:`text`,description:`リンクテキスト（空の場合は非表示）`,table:{defaultValue:{summary:``}}},onClose:{action:`closed`,description:`閉じるボタンのコールバック`},onLinkClick:{action:`link-clicked`,description:`リンククリックのコールバック`}},args:{type:`progress`,message:`処理中です。しばらくお待ちください。`,linkText:``}},s={},c={parameters:{docs:{description:{story:'成功状態（`type="success"`）。グリーン背景・チェックサークルアイコン。'}}},args:{type:`success`,message:`保存しました。`}},l={parameters:{docs:{description:{story:'エラー状態（`type="error"`）。レッド背景・アラートサークルアイコン。'}}},args:{type:`error`,message:`保存に失敗しました。`}},u={parameters:{docs:{description:{story:'警告状態（`type="alert"`）。オレンジ背景・アラートサークルアイコン。'}}},args:{type:`alert`,message:`一部の設定が保存できませんでした。`}},d={parameters:{docs:{description:{story:"`linkText` を指定した例。メッセージの下にリンクが表示される。「他 XX 件のエラー内容を確認」のような補足ナビゲーションに使う。"}}},args:{type:`error`,message:`3 件の行でエラーが発生しました。`,linkText:`他のエラー内容を確認する`}},f={parameters:{docs:{description:{story:`全4タイプの比較表示。Progress / Success / Error / Alert の色・アイコンの違いを確認できる。`}}},render:()=>{let e=[{type:`progress`,message:`処理中です。しばらくお待ちください。`},{type:`success`,message:`保存しました。`},{type:`error`,message:`保存に失敗しました。`},{type:`alert`,message:`一部の設定が保存できませんでした。`}],t=document.createElement(`div`);return t.style.cssText=`display: flex; flex-direction: column; gap: 12px;`,e.forEach(({type:e,message:n})=>{t.appendChild(r({type:e,message:n}))}),t}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`進行中状態。ブルー背景・同期アイコン。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '成功状態（\`type="success"\`）。グリーン背景・チェックサークルアイコン。'
      }
    }
  },
  args: {
    type: 'success',
    message: '保存しました。'
  }
}`,...c.parameters?.docs?.source},description:{story:`成功状態。グリーン背景・チェックサークルアイコン。
操作が正常に完了したことをユーザーに伝える。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'エラー状態（\`type="error"\`）。レッド背景・アラートサークルアイコン。'
      }
    }
  },
  args: {
    type: 'error',
    message: '保存に失敗しました。'
  }
}`,...l.parameters?.docs?.source},description:{story:`エラー状態。レッド背景・アラートサークルアイコン。
操作が失敗したことをユーザーに伝える。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '警告状態（\`type="alert"\`）。オレンジ背景・アラートサークルアイコン。'
      }
    }
  },
  args: {
    type: 'alert',
    message: '一部の設定が保存できませんでした。'
  }
}`,...u.parameters?.docs?.source},description:{story:`警告状態。オレンジ背景・アラートサークルアイコン。
エラーより軽微な注意事項をユーザーに伝える。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`linkText\` を指定した例。メッセージの下にリンクが表示される。「他 XX 件のエラー内容を確認」のような補足ナビゲーションに使う。'
      }
    }
  },
  args: {
    type: 'error',
    message: '3 件の行でエラーが発生しました。',
    linkText: '他のエラー内容を確認する'
  }
}`,...d.parameters?.docs?.source},description:{story:"`linkText` を指定した例。メッセージ下部にリンクが表示される。\n詳細確認や関連ページへの誘導に使用する。",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全4タイプの比較表示。Progress / Success / Error / Alert の色・アイコンの違いを確認できる。'
      }
    }
  },
  render: () => {
    const types = [{
      type: 'progress',
      message: '処理中です。しばらくお待ちください。'
    }, {
      type: 'success',
      message: '保存しました。'
    }, {
      type: 'error',
      message: '保存に失敗しました。'
    }, {
      type: 'alert',
      message: '一部の設定が保存できませんでした。'
    }];
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    types.forEach(({
      type,
      message
    }) => {
      wrapper.appendChild(createSnackBar({
        type,
        message
      }));
    });
    return wrapper;
  }
}`,...f.parameters?.docs?.source},description:{story:`全4タイプの比較表示。Figma「基本設計」のパターン一覧に対応。`,...f.parameters?.docs?.description}}},p=[`Default`,`Success`,`Error`,`Alert`,`WithLinkText`,`AllTypes`]}))();export{u as Alert,f as AllTypes,s as Default,l as Error,c as Success,d as WithLinkText,p as __namedExportsOrder,o as default};