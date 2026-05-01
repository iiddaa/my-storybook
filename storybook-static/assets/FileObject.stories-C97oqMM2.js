import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({fileName:e=`FileName.csv`,fileSize:t=``,onRemove:n}={})=>{let r=document.createElement(`div`);r.className=`storybook-file-object`;let i=document.createElement(`div`);i.className=`storybook-file-object__icon`,i.setAttribute(`aria-hidden`,`true`),i.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         width="24" height="24" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="8" y1="13" x2="16" y2="13"/>
      <line x1="8" y1="17" x2="14" y2="17"/>
    </svg>
  `;let a=document.createElement(`div`);a.className=`storybook-file-object__info`;let o=document.createElement(`p`);if(o.className=`storybook-file-object__name`,o.textContent=e,o.title=e,a.appendChild(o),t){let e=document.createElement(`p`);e.className=`storybook-file-object__size`,e.textContent=t,a.appendChild(e)}let s=document.createElement(`button`);return s.type=`button`,s.className=`storybook-file-object__remove`,s.setAttribute(`aria-label`,`ファイルを削除`),s.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         width="16" height="16" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,s.addEventListener(`click`,()=>{typeof n==`function`&&n(e)}),r.appendChild(i),r.appendChild(a),r.appendChild(s),r}})),i,a,o,s,c,l,u;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **アップロードしたファイルを確認・削除できるもの。**

---

## 基本設計

- 横幅は自由だが、**最小幅は 240px**。

| 要素 | 内容 |
|------|------|
| ドキュメントアイコン | 32px、左端に配置 |
| ファイル名 | W6 / 14px / \`#222\`。長い場合は末尾「...」で省略 |
| ファイルサイズ | W3 / 12px / \`#858c94\`（ミュートカラー） |
| × ボタン | 削除アクション、右端に配置 |

---

## 使用時に気をつけておくこと

- 同一画面上では、File Object のサイズは統一させる。
  - FileName が長い場合は改行せずに、末尾「...」で省略する。
`,o={title:`FileObject`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{fileName:{control:`text`,description:`ファイル名`,table:{defaultValue:{summary:`FileName.csv`}}},fileSize:{control:`text`,description:`ファイルサイズ文字列（例: 88KB）。省略時は非表示`,table:{defaultValue:{summary:``}}},onRemove:{action:`remove`}},args:{fileName:`FileName.csv`,fileSize:`88KB`,onRemove:i()}},s={},c={parameters:{docs:{description:{story:`FileName が長い場合は改行せず末尾「...」で省略する（Figma 使用時の注意）。`}}},args:{fileName:`very-long-filename-that-should-be-truncated-with-ellipsis-2024.csv`,fileSize:`1.2MB`}},l={parameters:{docs:{description:{story:`fileSize を省略するとサイズ行が非表示になる。`}}},args:{fileName:`FileName.csv`,fileSize:``}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`Figmaの基本設計に沿った標準形。ファイル名・サイズ・削除ボタン付き。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'FileName が長い場合は改行せず末尾「...」で省略する（Figma 使用時の注意）。'
      }
    }
  },
  args: {
    fileName: 'very-long-filename-that-should-be-truncated-with-ellipsis-2024.csv',
    fileSize: '1.2MB'
  }
}`,...c.parameters?.docs?.source},description:{story:`ファイル名が長い場合の表示確認。
改行せずに末尾「...」で省略される（Figmaガイドライン）。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'fileSize を省略するとサイズ行が非表示になる。'
      }
    }
  },
  args: {
    fileName: 'FileName.csv',
    fileSize: ''
  }
}`,...l.parameters?.docs?.source},description:{story:`ファイルサイズを省略した構成。fileSize を空にするとサイズ行が非表示になる。`,...l.parameters?.docs?.description}}},u=[`Default`,`LongFileName`,`NoSize`]}))();export{s as Default,c as LongFileName,l as NoSize,u as __namedExportsOrder,o as default};