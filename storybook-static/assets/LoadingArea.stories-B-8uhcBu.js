import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({size:e=`M`,height:t=null}={})=>{let n=document.createElement(`div`);n.className=`storybook-loading-area`,n.setAttribute(`role`,`status`),n.setAttribute(`aria-label`,`読み込み中`),t!==null&&(n.style.height=typeof t==`number`?`${t}px`:t);let r=document.createElement(`div`);return r.className=`storybook-loading-area__spinner storybook-loading-area__spinner--${e}`,n.appendChild(r),n}})),i,a,o,s,c,l;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **「システムが作動中であること」「もう少しで結果が出ること」を伝え、待つ間の安心感を持たせるためのもの。**

---

## 基本設計

スピナーは中央に配置し、ローディングエリア全体を占有する。

| サイズ | 直径 | stroke幅 | 使い所 |
|--------|------|---------|--------|
| M      | 48px | 5px     | 標準（デフォルト） |
| S      | 24px | 2.5px   | 狭いエリアや小さいコンポーネント内 |

---

## 使用時に気をつけておくこと

**進捗を測定できないローディング処理に使用する。測定できる場合は ProgressBar を優先する。**

| | LoadingArea | ProgressBar | skeleton |
|--|-------------|-------------|---------|
| **使い所** | 基本 | 待ち時間が長くて推定できる処理 | 待ち時間の体験を特別良くしたい時 |
| **メリット** | サイズ適応・軽い | 待つストレスを軽減できる | 表示内容が事前に想像できる |
| **デメリット** | ストレス軽減が低い | 開発コストが高い | レイアウトごと作成必要で管理コスト高い |
| **利用例** | — | アップロード・ダウンロード | ホーム画面 |
`,a={title:`LoadingArea`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:i}}},argTypes:{size:{control:`select`,options:[`M`,`S`],description:`スピナーのサイズ。M=48px（デフォルト）、S=24px（狭いエリア向け）。`,table:{defaultValue:{summary:`M`}}},height:{control:`text`,description:`ローディングエリアの高さ。数値（px）または文字列（例: "50%"）。省略時は高さを固定しない。`,table:{defaultValue:{summary:`null`}}}}},o={args:{size:`M`,height:200}},s={name:`Small (S)`,args:{size:`S`,height:80}},c={name:`サイズ比較`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-direction: column; gap: 48px;`,[{label:`M サイズ（48px）`,args:{size:`M`,height:200}},{label:`S サイズ（24px）`,args:{size:`S`,height:80}}].forEach(({label:t,args:r})=>{let i=document.createElement(`div`);i.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let a=document.createElement(`p`);a.style.cssText=`font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;`,a.textContent=t,i.appendChild(a),i.appendChild(n(r)),e.appendChild(i)}),e}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    height: 200
  }
}`,...o.parameters?.docs?.source},description:{story:`M サイズ（デフォルト）。標準のローディング表示。`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Small (S)',
  args: {
    size: 'S',
    height: 80
  }
}`,...s.parameters?.docs?.source},description:{story:`S サイズ。狭いエリアや小さいコンポーネント内で使用する。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'サイズ比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 48px;';
    const sizes = [{
      label: 'M サイズ（48px）',
      args: {
        size: 'M',
        height: 200
      }
    }, {
      label: 'S サイズ（24px）',
      args: {
        size: 'S',
        height: 80
      }
    }];
    sizes.forEach(({
      label,
      args
    }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const heading = document.createElement('p');
      heading.style.cssText = 'font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;';
      heading.textContent = label;
      section.appendChild(heading);
      section.appendChild(createLoadingArea(args));
      wrapper.appendChild(section);
    });
    return wrapper;
  }
}`,...c.parameters?.docs?.source},description:{story:`M・S の2サイズを並べて比較するビュー。
Storybook の Controls は使用不可（render を直接定義）。`,...c.parameters?.docs?.description}}},l=[`Default`,`Small`,`SizesComparison`]}))();export{o as Default,c as SizesComparison,s as Small,l as __namedExportsOrder,a as default};