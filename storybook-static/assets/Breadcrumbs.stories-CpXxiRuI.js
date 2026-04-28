import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./Breadcrumbs-CH3i3g_4.js";var r,i,a,o,s,c,l,u;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **階層構造の現在地を示し、上の階層へ簡単に移動できるもの。**

---

## 基本設計

親階層へのリンク（複数可）＋ chevron セパレーター ＋ 現在地テキストで構成する。

| 要素 | 内容 |
|------|------|
| リンク（親階層） | 青色（#318bf7）・下線付き。クリックで上位階層へ移動する |
| セパレーター | 右向き chevron（8×8px）。aria-hidden で読み上げから除外する |
| 現在地テキスト | ダーク（#222）・aria-current="page" を付与する |

---

## 使用上の注意

- 画面名は簡潔に、**長くしすぎないこと**。

---

## 前の画面に戻れる ［Breadcrumbs］ と ［Stepper］ の使い分け

| | Breadcrumbs | Stepper |
|---|---|---|
| **示すもの** | 内部構造を示す（例：一覧＞詳細） | プロセスを完了させるための道筋を示す（例：STEP1→STEP2→STEP3） |
| **主な目的** | 上部の階層に戻るため | プロセスを示して安心させるため |
`,a={title:`Components/Breadcrumbs`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`centered`,docs:{description:{component:i}}},argTypes:{items:{control:`object`,description:`親階層のアイテム配列。各アイテムに label・href・onClick を持つ`},current:{control:`text`,description:`現在地のテキスト（aria-current="page" が付与される）`}},args:{items:[{label:`ホーム`,href:`#`,onClick:r()}],current:`現在地`}},o={},s={parameters:{docs:{description:{story:`親階層が複数ある場合のパターン。階層が深くなりすぎないよう画面名を簡潔にする。`}}},args:{items:[{label:`一覧`,href:`#`,onClick:r()},{label:`カテゴリ`,href:`#`,onClick:r()}],current:`詳細ページ`}},c={parameters:{docs:{description:{story:`トップレベルの画面など、親階層リンクが不要な場合は items を空にする。`}}},args:{items:[],current:`ダッシュボード`}},l={parameters:{docs:{description:{story:`トップレベル・1階層・2階層のパターン比較。`}}},render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display:flex;flex-direction:column;gap:24px;padding:24px;`,[{label:`トップレベル（親なし）`,items:[],current:`ダッシュボード`},{label:`1階層`,items:[{label:`店舗`,href:`#`,onClick:r()}],current:`現在地`},{label:`2階層`,items:[{label:`一覧`,href:`#`,onClick:r()},{label:`カテゴリ`,href:`#`,onClick:r()}],current:`詳細ページ`}].forEach(({label:t,items:r,current:i})=>{let a=document.createElement(`div`);a.style.cssText=`display:flex;align-items:center;gap:32px;`;let o=document.createElement(`span`);o.style.cssText=`font-family:sans-serif;font-size:12px;color:#888;width:160px;flex-shrink:0;`,o.innerText=t;let s=n({items:r,current:i});a.appendChild(o),a.appendChild(s),e.appendChild(a)}),e}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source},description:{story:`Figmaの基本設計どおり、1階層の親リンクと現在地を表示する。`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '親階層が複数ある場合のパターン。階層が深くなりすぎないよう画面名を簡潔にする。'
      }
    }
  },
  args: {
    items: [{
      label: '一覧',
      href: '#',
      onClick: fn()
    }, {
      label: 'カテゴリ',
      href: '#',
      onClick: fn()
    }],
    current: '詳細ページ'
  }
}`,...s.parameters?.docs?.source},description:{story:`親階層が2つ以上ある場合。例：一覧 › カテゴリ › 詳細ページ`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'トップレベルの画面など、親階層リンクが不要な場合は items を空にする。'
      }
    }
  },
  args: {
    items: [],
    current: 'ダッシュボード'
  }
}`,...c.parameters?.docs?.source},description:{story:`親階層がなく、現在地のみ表示するパターン。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'トップレベル・1階層・2階層のパターン比較。'
      }
    }
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;flex-direction:column;gap:24px;padding:24px;';
    const patterns = [{
      label: 'トップレベル（親なし）',
      items: [],
      current: 'ダッシュボード'
    }, {
      label: '1階層',
      items: [{
        label: '店舗',
        href: '#',
        onClick: fn()
      }],
      current: '現在地'
    }, {
      label: '2階層',
      items: [{
        label: '一覧',
        href: '#',
        onClick: fn()
      }, {
        label: 'カテゴリ',
        href: '#',
        onClick: fn()
      }],
      current: '詳細ページ'
    }];
    patterns.forEach(({
      label,
      items,
      current
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:32px;';
      const caption = document.createElement('span');
      caption.style.cssText = 'font-family:sans-serif;font-size:12px;color:#888;width:160px;flex-shrink:0;';
      caption.innerText = label;
      const breadcrumbs = createBreadcrumbs({
        items,
        current
      });
      row.appendChild(caption);
      row.appendChild(breadcrumbs);
      container.appendChild(row);
    });
    return container;
  }
}`,...l.parameters?.docs?.source},description:{story:`階層の深さ違いを縦に並べた比較一覧。
Figmaガイドライン「画面名は簡潔に、長くしすぎないこと」の確認にも使える。`,...l.parameters?.docs?.description}}},u=[`Default`,`MultiLevel`,`TopLevel`,`AllPatterns`]}))();export{l as AllPatterns,o as Default,s as MultiLevel,c as TopLevel,u as __namedExportsOrder,a as default};