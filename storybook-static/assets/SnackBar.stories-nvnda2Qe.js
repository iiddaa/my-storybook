import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./icons-D6TPqmSF.js";var r=e((()=>{})),i,a,o,s=e((()=>{r(),t(),i={progress:`sync`,success:`check_circle`,error:`x_circle`,alert:`alert_circle`},a={progress:`#318bf7`,success:`#22ad7f`,error:`#eb4d38`,alert:`#f78f43`},o=({type:e=`progress`,message:t=``,linkText:r=``,onClose:o=null,onLinkClick:s=null}={})=>{let c=document.createElement(`div`);c.className=[`storybook-snack-bar`,`storybook-snack-bar--${e}`].join(` `),c.setAttribute(`role`,`status`),c.setAttribute(`aria-live`,`polite`);let l=document.createElement(`span`);l.className=`storybook-snack-bar__icon`;let u=i[e]??i.progress,d=a[e]??a.progress;l.appendChild(n(u,16,d)),c.appendChild(l);let f=document.createElement(`div`);f.className=`storybook-snack-bar__body`;let p=document.createElement(`span`);if(p.className=`storybook-snack-bar__message`,p.textContent=t,f.appendChild(p),r){let e=document.createElement(`a`);e.className=`storybook-snack-bar__link`,e.href=`#`,e.textContent=r,e.addEventListener(`click`,e=>{e.preventDefault(),typeof s==`function`&&s(e)}),f.appendChild(e)}c.appendChild(f);let m=document.createElement(`button`);return m.className=`storybook-snack-bar__close`,m.type=`button`,m.setAttribute(`aria-label`,`閉じる`),m.appendChild(n(`x`,16,`#858c94`)),m.addEventListener(`click`,e=>{typeof o==`function`&&o(e)}),c.appendChild(m),c}})),c,l,u,d,f,p,m,h,g,_;e((()=>{s(),c=`
## 概念

ユーザーが行った操作のフィードバックを即時に通知するもの。
画面遷移や、元に戻すアクションなどを含めることも可能。

---

## 基本設計

| 要素 | 仕様 |
|------|------|
| 最小幅 | 360px |
| 推奨最大幅 | 720px（視認性を考慮） |
| 角丸 | 4px |
| 影 | \`0px 2px 5px rgba(0,0,0,0.15)\` |
| レイアウト | アイコン（16px）＋ テキスト（flex:1）＋ 閉じるボタン（16px） |

### タイプ別カラー

| タイプ | 背景色 | 枠線色 | アイコン |
|--------|--------|--------|---------|
| Progress | \`#eaf3fe\` | \`#318bf7\` | sync（青） |
| Success | \`#e4f5ef\` | \`#22ad7f\` | check_circle（緑） |
| Error | \`#fdf2f0\` | \`#eb4d38\` | alert_circle（赤） |
| Alert | \`#fef4ed\` | \`#f78f43\` | alert_circle（橙） |

---

## 使用時に気をつけておくこと

- アクション後の処理の成功/失敗のフィードバックで使う。
- 基本的に Success は自動で消えるが、Error は自動で消えない。ユーザーが × アイコンを押して消す。
  - Success であっても、長文であったり、アクションが含まれる場合は、自動で消えなくてもよい。
- 項目単位のインプットエラーなどは、インラインエラーを優先する。
- 全体に影響する重大な処理の失敗は、SnackBar ではなくエラーページを検討する。

---

## ステータスを伝える［Snack bar］［Information Panel］［Status Chip］の使い分け

|  | Snackbar | Information Panel | Chip（ステータス） |
|---|---|---|---|
| 概要 | 直前に行った操作の結果を一時的に表示する | オブジェクトの情報（ステータスも含む）を詳細に表示する | オブジェクトのステータスを簡易的に表示する |
| 対象 | 直前に行った操作 | 画面に表示されているオブジェクト | 画面に表示されている、または隣接するオブジェクト |
| 伝えるもの | 操作結果 | オブジェクトの情報（ステータスも含む） | オブジェクトのステータス |
| 他画面に遷移後の表示 | 消えている | 永続的に表示 | 永続的に表示 |
| 情報量 | 少ない | 多い | 少ない |
| ネクストアクションへの導線 | 🔺 消えても困らないものに限る | ⭕️ | ❌ |
`,l={title:`SnackBar`,tags:[`autodocs`],render:e=>o(e),parameters:{layout:`padded`,docs:{description:{component:c}}},argTypes:{type:{control:`select`,options:[`progress`,`success`,`error`,`alert`],description:`タイプ（色・枠線・アイコンが変化する）`,table:{defaultValue:{summary:`progress`}}},message:{control:`text`,description:`メッセージ本文`,table:{defaultValue:{summary:``}}},linkText:{control:`text`,description:`リンクテキスト（空の場合は非表示）。例：「他XX件のエラー内容を確認」`,table:{defaultValue:{summary:``}}},onClose:{action:`closed`,description:`閉じるボタンのコールバック`},onLinkClick:{action:`link-clicked`,description:`リンククリックのコールバック`}},args:{type:`progress`,message:`トーストメッセージ`,linkText:``}},u={},d={parameters:{docs:{description:{story:'成功状態（`type="success"`）。グリーン背景・緑枠線・check_circle アイコン。基本的に自動で消えるが、長文やアクションを含む場合は自動消去しなくてもよい。'}}},args:{type:`success`,message:`保存しました。`}},f={parameters:{docs:{description:{story:'エラー状態（`type="error"`）。レッド背景・赤枠線・alert_circle アイコン。Error は自動で消えない。ユーザーが × アイコンを押して消す。'}}},args:{type:`error`,message:`保存に失敗しました。`}},p={parameters:{docs:{description:{story:'警告状態（`type="alert"`）。オレンジ背景・橙枠線・alert_circle アイコン。'}}},args:{type:`alert`,message:`一部の設定が保存できませんでした。`}},m={parameters:{docs:{description:{story:"`linkText` を指定した例。メッセージの下にリンクが表示される。Figma の文言例：「他XX件のエラー内容を確認」。消えても困らない導線に限ること。"}}},args:{type:`error`,message:`3 件の行でエラーが発生しました。`,linkText:`他のエラー内容を確認する`}},h={parameters:{docs:{description:{story:`全4タイプの比較表示（リンクなし）。Progress / Success / Error / Alert の色・枠線・アイコンの違いを確認できる。`}}},render:()=>{let e=[{type:`progress`,message:`トーストメッセージ`},{type:`success`,message:`トーストメッセージ`},{type:`error`,message:`トーストメッセージ`},{type:`alert`,message:`トーストメッセージ`}],t=document.createElement(`div`);return t.style.cssText=`display: flex; flex-direction: column; gap: 12px;`,e.forEach(({type:e,message:n})=>{t.appendChild(o({type:e,message:n}))}),t}},g={parameters:{docs:{description:{story:"全4タイプの比較表示（`linkText` あり）。Figma の textLink=true バリエーションに対応。"}}},render:()=>{let e=[{type:`progress`,message:`トーストメッセージ`},{type:`success`,message:`トーストメッセージ`},{type:`error`,message:`トーストメッセージ`},{type:`alert`,message:`トーストメッセージ`}],t=document.createElement(`div`);return t.style.cssText=`display: flex; flex-direction: column; gap: 12px;`,e.forEach(({type:e,message:n})=>{t.appendChild(o({type:e,message:n,linkText:`他XX件のエラー内容を確認`}))}),t}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source},description:{story:`進行中状態。ブルー背景・青枠線・sync アイコン。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '成功状態（\`type="success"\`）。グリーン背景・緑枠線・check_circle アイコン。基本的に自動で消えるが、長文やアクションを含む場合は自動消去しなくてもよい。'
      }
    }
  },
  args: {
    type: 'success',
    message: '保存しました。'
  }
}`,...d.parameters?.docs?.source},description:{story:`成功状態。グリーン背景・緑枠線・check_circle アイコン。
基本的に自動で消えるが、長文やアクションを含む場合は自動消去しなくてもよい。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'エラー状態（\`type="error"\`）。レッド背景・赤枠線・alert_circle アイコン。Error は自動で消えない。ユーザーが × アイコンを押して消す。'
      }
    }
  },
  args: {
    type: 'error',
    message: '保存に失敗しました。'
  }
}`,...f.parameters?.docs?.source},description:{story:`エラー状態。レッド背景・赤枠線・alert_circle アイコン。
Error は自動で消えない。ユーザーが × アイコンを押して消す。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '警告状態（\`type="alert"\`）。オレンジ背景・橙枠線・alert_circle アイコン。'
      }
    }
  },
  args: {
    type: 'alert',
    message: '一部の設定が保存できませんでした。'
  }
}`,...p.parameters?.docs?.source},description:{story:`警告状態。オレンジ背景・橙枠線・alert_circle アイコン。
エラーより軽微な注意事項をユーザーに伝える。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`linkText\` を指定した例。メッセージの下にリンクが表示される。Figma の文言例：「他XX件のエラー内容を確認」。消えても困らない導線に限ること。'
      }
    }
  },
  args: {
    type: 'error',
    message: '3 件の行でエラーが発生しました。',
    linkText: '他のエラー内容を確認する'
  }
}`,...m.parameters?.docs?.source},description:{story:`\`linkText\` を指定した例。メッセージ下部にリンクが表示される。
Figma の文言例：「他XX件のエラー内容を確認」。
消えても困らない導線に限る（SnackBar は一時表示のため）。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全4タイプの比較表示（リンクなし）。Progress / Success / Error / Alert の色・枠線・アイコンの違いを確認できる。'
      }
    }
  },
  render: () => {
    const types = [{
      type: 'progress',
      message: 'トーストメッセージ'
    }, {
      type: 'success',
      message: 'トーストメッセージ'
    }, {
      type: 'error',
      message: 'トーストメッセージ'
    }, {
      type: 'alert',
      message: 'トーストメッセージ'
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
}`,...h.parameters?.docs?.source},description:{story:`全4タイプの比較表示（リンクなし）。Figma「基本設計」のパターン一覧に対応。`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全4タイプの比較表示（\`linkText\` あり）。Figma の textLink=true バリエーションに対応。'
      }
    }
  },
  render: () => {
    const types = [{
      type: 'progress',
      message: 'トーストメッセージ'
    }, {
      type: 'success',
      message: 'トーストメッセージ'
    }, {
      type: 'error',
      message: 'トーストメッセージ'
    }, {
      type: 'alert',
      message: 'トーストメッセージ'
    }];
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    types.forEach(({
      type,
      message
    }) => {
      wrapper.appendChild(createSnackBar({
        type,
        message,
        linkText: '他XX件のエラー内容を確認'
      }));
    });
    return wrapper;
  }
}`,...g.parameters?.docs?.source},description:{story:`全4タイプの比較表示（リンクあり）。Figma の textLink=true バリエーション一覧に対応。`,...g.parameters?.docs?.description}}},_=[`Default`,`Success`,`Error`,`Alert`,`WithLinkText`,`AllTypes`,`AllTypesWithLink`]}))();export{p as Alert,h as AllTypes,g as AllTypesWithLink,u as Default,f as Error,d as Success,m as WithLinkText,_ as __namedExportsOrder,l as default};