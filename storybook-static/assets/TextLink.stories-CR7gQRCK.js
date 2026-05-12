import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({text:e=`テキスト`,href:t=`#`,target:n=`_self`,onClick:r=null}={})=>{let i=document.createElement(`a`);return i.className=`storybook-text-link`,i.href=t,i.target=n,i.textContent=e,n===`_blank`&&i.setAttribute(`rel`,`noopener noreferrer`),typeof r==`function`&&i.addEventListener(`click`,e=>{e.preventDefault(),r(e)}),i}})),i,a,o,s,c,l;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **システムを操作せず、画面を遷移したり関連情報を表示したりするためのテキスト要素。**

---

## 基本設計

| 要素 | 仕様 |
|------|------|
| 色 | \`#318bf7\`（--text/link） |
| テキスト装飾 | 下線あり（underline / solid） |
| フォント | Hiragino Sans W3 / 14px / line-height 1.5 |

---

## 使用時に気をつけておくこと

- ユーザーを別の場所に移動させたり、情報を表示するために使う。
  - リンクは「どこかへいく」ためのもの。ボタンは「何かをする」ためのもの。
- 通常のテキスト表現とは差分を設けて、クリックできることを明確に伝える。
  - アクセシビリティを考慮した差分をつける。（下線、アイコン配置など）
`,a={title:`TextLink`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:i}}},argTypes:{text:{control:`text`,description:`リンクのテキスト`,table:{defaultValue:{summary:`テキスト`}}},href:{control:`text`,description:`リンク先 URL`,table:{defaultValue:{summary:`#`}}},target:{control:`select`,options:[`_self`,`_blank`],description:`リンクターゲット（_blank 時は rel="noopener noreferrer" を自動付与）`,table:{defaultValue:{summary:`_self`}}},onClick:{action:`clicked`,description:`クリック時のコールバック（設定時は href 遷移を preventDefault）`}},args:{text:`テキスト`,href:`#`,target:`_self`}},o={},s={parameters:{docs:{description:{story:'`target="_blank"` を使った外部リンク。セキュリティのため `rel="noopener noreferrer"` が自動付与される。'}}},args:{text:`外部サイトを開く`,href:`https://example.com`,target:`_blank`}},c={parameters:{docs:{description:{story:`テキスト中へのインライン埋め込み例。通常テキストとのコントラストでクリック可能であることを伝える（Figma 使用時の注意より）。`}}},render:()=>{let e=document.createElement(`p`);e.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 14px; line-height: 1.5; color: #222;`,e.textContent=`詳細については、`,e.appendChild(n({text:`こちらのページ`,href:`#`}));let t=document.createTextNode(`をご確認ください。`);return e.appendChild(t),e}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source},description:{story:`基本のテキストリンク。
Figma「基本設計」に示されたブルー（#318bf7）＋下線のスタイル。`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`target="_blank"\` を使った外部リンク。セキュリティのため \`rel="noopener noreferrer"\` が自動付与される。'
      }
    }
  },
  args: {
    text: '外部サイトを開く',
    href: 'https://example.com',
    target: '_blank'
  }
}`,...s.parameters?.docs?.source},description:{story:'外部サイトへのリンク。\n`target="_blank"` 指定時は `rel="noopener noreferrer"` を自動付与する。',...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'テキスト中へのインライン埋め込み例。通常テキストとのコントラストでクリック可能であることを伝える（Figma 使用時の注意より）。'
      }
    }
  },
  render: () => {
    const wrapper = document.createElement('p');
    wrapper.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 14px; line-height: 1.5; color: #222;";
    wrapper.textContent = '詳細については、';
    wrapper.appendChild(createTextLink({
      text: 'こちらのページ',
      href: '#'
    }));
    const after = document.createTextNode('をご確認ください。');
    wrapper.appendChild(after);
    return wrapper;
  }
}`,...c.parameters?.docs?.source},description:{story:`テキスト中にリンクを埋め込んだ例。
通常テキストとの色・下線の差分によりクリック可能であることが伝わる。`,...c.parameters?.docs?.description}}},l=[`Default`,`ExternalLink`,`Inline`]}))();export{o as Default,s as ExternalLink,c as Inline,l as __namedExportsOrder,a as default};