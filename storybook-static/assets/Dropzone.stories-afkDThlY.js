import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({hint:e=`25MB以下 / 最大n件まで / CSVのみ`,isDragOver:t=!1,onSelectFile:n,onDrop:r}={})=>{let i=document.createElement(`div`);i.className=`storybook-dropzone`+(t?` storybook-dropzone--drag-over`:``),i.setAttribute(`role`,`region`),i.setAttribute(`aria-label`,`ファイルアップロードエリア`);let a=document.createElement(`div`);a.className=`storybook-dropzone__text`;let o=document.createElement(`p`);o.className=`storybook-dropzone__title`,o.textContent=`ここにファイルをドラッグ&ドロップ`,a.appendChild(o);let s=document.createElement(`p`);s.className=`storybook-dropzone__separator`,s.textContent=`または`,a.appendChild(s),i.appendChild(a);let c=document.createElement(`div`);c.className=`storybook-dropzone__actions`;let l=document.createElement(`button`);if(l.type=`button`,l.className=`storybook-dropzone__btn`,l.textContent=`ファイルを選択`,l.addEventListener(`click`,()=>{typeof n==`function`&&n()}),c.appendChild(l),e){let t=document.createElement(`p`);t.className=`storybook-dropzone__hint`,t.textContent=e,c.appendChild(t)}return i.appendChild(c),i.addEventListener(`dragover`,e=>{e.preventDefault(),i.classList.add(`storybook-dropzone--drag-over`)}),i.addEventListener(`dragleave`,e=>{i.contains(e.relatedTarget)||i.classList.remove(`storybook-dropzone--drag-over`)}),i.addEventListener(`drop`,e=>{e.preventDefault(),i.classList.remove(`storybook-dropzone--drag-over`),typeof r==`function`&&r(e.dataTransfer.files)}),i}})),i,a,o,s,c,l;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **アップロードできることを直感的に伝え、かつドラッグ&ドロップで手軽にファイルをアップロードできるもの。**

---

## 基本設計

- 横幅は自由だが、**最小幅は 512px**。
- クリック可能なのは**ボタン領域のみ**。ドロップゾーン全体はクリックに反応しない。

| 状態 | 背景色 | ボーダー |
|------|--------|----------|
| デフォルト | グレー（\`#f7f7f8\`） | グレー点線（\`#d6d9db\`） |
| ドラッグ時 | 水色（\`#eaf3fe\`） | 青い点線（\`#318bf7\`） |

---

## 使用時に気をつけておくこと

- ファイルのアップロードは、基本的にはユーザーにとって便利な Dropzone を使う。
  - ただし、以下のパターンの場合は Dropzone ではなく、他のパターンを利用する。
    - i. 領域が狭いとき
    - ii. 全体のバランスを見て、情報量を調整したいとき
    - iii. 他コンテンツとの一貫性を保ちたいとき
- ドラッグ&ドロップエリアのみの使用（ボタン無し）は不可。
`,o={title:`Dropzone`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{hint:{control:`text`,description:`ファイル制約テキスト（サイズ・件数・ファイル形式など）`,table:{defaultValue:{summary:`25MB以下 / 最大n件まで / CSVのみ`}}},isDragOver:{control:`boolean`,description:`ドラッグオーバー状態（Storybook確認用）。実際の操作ではドラッグイベントで自動的に切り替わる`,table:{defaultValue:{summary:`false`}}},onSelectFile:{action:`selectFile`},onDrop:{action:`drop`}},args:{hint:`25MB以下 / 最大n件まで / CSVのみ`,isDragOver:!1,onSelectFile:i(),onDrop:i()}},s={},c={parameters:{docs:{description:{story:`ファイルをドラッグしてエリアに乗せた状態。背景・ボーダーがアクセントカラーに変化する（Figma「ファイルをドラッグ時」）。`}}},args:{isDragOver:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`デフォルト状態。グレー背景・グレー点線ボーダー。クリック可能なのはボタン領域のみ。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ファイルをドラッグしてエリアに乗せた状態。背景・ボーダーがアクセントカラーに変化する（Figma「ファイルをドラッグ時」）。'
      }
    }
  },
  args: {
    isDragOver: true
  }
}`,...c.parameters?.docs?.source},description:{story:`ファイルをドラッグしてエリアにカーソルを合わせた状態。
背景が水色（#eaf3fe）、ボーダーが青（#318bf7）になる。
Figmaの基本設計「ファイルをドラッグ時」に相当。`,...c.parameters?.docs?.description}}},l=[`Default`,`DragOver`]}))();export{s as Default,c as DragOver,l as __namedExportsOrder,o as default};