import{n as e}from"./chunk-BneVvdWh.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({title:e=`タイトル`,description:t=``,supplement:n,cancelLabel:r=`キャンセル`,confirmLabel:i=`決定`,onCancel:a,onConfirm:o})=>{let s=document.createElement(`div`);s.className=`storybook-dialog`;let c=document.createElement(`div`);c.className=`storybook-dialog-body`;let l=document.createElement(`p`);if(l.className=`storybook-dialog-title`,l.innerText=e,c.appendChild(l),t){let e=document.createElement(`p`);e.className=`storybook-dialog-description`,e.innerText=t,c.appendChild(e)}if(n!=null&&n!==``){let e=document.createElement(`div`);e.className=`storybook-dialog-supplement`,typeof n==`string`?e.innerText=n:n instanceof Node&&e.appendChild(n),c.appendChild(e)}let u=document.createElement(`div`);u.className=`storybook-dialog-footer`;let d=document.createElement(`button`);d.type=`button`,d.className=`storybook-dialog-btn storybook-dialog-btn--cancel`,d.innerText=r,d.addEventListener(`click`,a);let f=document.createElement(`button`);return f.type=`button`,f.className=`storybook-dialog-btn storybook-dialog-btn--confirm`,f.innerText=i,f.addEventListener(`click`,o),u.appendChild(d),u.appendChild(f),s.appendChild(c),s.appendChild(u),s}})),i,a,o,s,c,l,u,d;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a=`
## 概念

ユーザーの操作を中断させて、**その場で簡潔な意思決定を行う**コンポーネント。

> 参考程度に。厳格なルールというわけではない。

---

## 基本構造

| エリア | 内容 |
|--------|------|
| タイトル | 意思決定の内容を端的に示す見出し |
| 説明文 | タイトルを補足する短い説明（省略可） |
| 補足エリア | グレー背景の追加情報枠（省略可） |
| フッター | キャンセル・確定ボタン（右寄せ） |

幅は **500px 固定**。閉じるボタン（×）は持たない。
ユーザーは必ずいずれかのボタンを選択することになる。

---

## Modal との違い

- Dialog：幅固定（500px）・×ボタンなし・簡潔な意思決定に特化
- Modal：幅を S / M / L から選択・×ボタンあり・コンテンツスロットで自由に構成

---

## 使用上の注意

### タイトルラベル

- ユーザーが素早く意思決定できるよう、**説明は簡潔にする**
  - ユーザーはこの意思決定を行わないと、他の操作ができない
- **最終確認・削除・離脱・通知の許可**など、意思決定を求めるときに使う
  - 特にセッション切れや、法や金銭に関わる注意など、非常に重要な情報を提示するとき
`,o={title:`Dialog`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`centered`,docs:{description:{component:a}}},argTypes:{title:{control:`text`,description:`見出し`},description:{control:`text`,description:`説明文（省略可）`},supplement:{control:`text`,description:`補足エリアのテキスト（省略可）。グレー背景で表示される`},cancelLabel:{control:`text`,description:`キャンセルボタンのラベル`,table:{defaultValue:{summary:`キャンセル`}}},confirmLabel:{control:`text`,description:`確定ボタンのラベル`,table:{defaultValue:{summary:`決定`}}},onCancel:{action:`cancelled`},onConfirm:{action:`confirmed`}},args:{title:`タイトル`,description:`説明文`,supplement:`補足エリア`,cancelLabel:`キャンセル`,confirmLabel:`決定`,onCancel:i(),onConfirm:i()}},s={},c={args:{supplement:``}},l={parameters:{docs:{description:{story:`削除操作の最終確認に使う典型的な例。`}}},args:{title:`このアイテムを削除しますか？`,description:`削除すると元に戻せません。`,supplement:`削除対象：レポート「2024年Q4 売上サマリー」`,cancelLabel:`キャンセル`,confirmLabel:`削除する`}},u={parameters:{docs:{description:{story:`セッション切れや法・金銭に関わる重要な情報提示のユースケース例。キャンセル不要のため1ボタン構成にしている。`}}},args:{title:`セッションの有効期限が切れました`,description:`セキュリティのため、自動的にログアウトされました。再度ログインしてください。`,supplement:``,cancelLabel:``,confirmLabel:`ログイン画面へ`},render:e=>{let t=n(e),r=t.querySelector(`.storybook-dialog-footer`).querySelector(`.storybook-dialog-btn--cancel`);return r&&r.remove(),t}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`Figmaの基本設計に沿った標準形。補足エリアあり。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    supplement: ''
  }
}`,...c.parameters?.docs?.source},description:{story:`補足エリアを省略したシンプルな構成。短いメッセージの確認ダイアログ向け。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '削除操作の最終確認に使う典型的な例。'
      }
    }
  },
  args: {
    title: 'このアイテムを削除しますか？',
    description: '削除すると元に戻せません。',
    supplement: '削除対象：レポート「2024年Q4 売上サマリー」',
    cancelLabel: 'キャンセル',
    confirmLabel: '削除する'
  }
}`,...l.parameters?.docs?.source},description:{story:`削除確認のユースケース例。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'セッション切れや法・金銭に関わる重要な情報提示のユースケース例。キャンセル不要のため1ボタン構成にしている。'
      }
    }
  },
  args: {
    title: 'セッションの有効期限が切れました',
    description: 'セキュリティのため、自動的にログアウトされました。再度ログインしてください。',
    supplement: '',
    cancelLabel: '',
    confirmLabel: 'ログイン画面へ'
  },
  render: args => {
    // キャンセルボタンなし（confirmのみ）
    const dialog = createDialog(args);
    const footer = dialog.querySelector('.storybook-dialog-footer');
    const cancelBtn = footer.querySelector('.storybook-dialog-btn--cancel');
    if (cancelBtn) cancelBtn.remove();
    return dialog;
  }
}`,...u.parameters?.docs?.source},description:{story:`セッション切れなど、緊急性の高い通知に使う例。`,...u.parameters?.docs?.description}}},d=[`Default`,`NoSupplement`,`DeleteConfirm`,`SessionExpired`]}))();export{s as Default,l as DeleteConfirm,c as NoSupplement,u as SessionExpired,d as __namedExportsOrder,o as default};