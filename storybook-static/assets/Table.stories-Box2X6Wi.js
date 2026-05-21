import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n=`
  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M5 6.5L8 3.5L11 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 9.5L8 12.5L11 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,r=({title:e=``,columns:t=[],rows:r=[],showCheckbox:i=!0,showAction:a=!0,actionLabel:o=`編集`,onAction:s,onSort:c}={})=>{let l=document.createElement(`div`);if(l.className=`storybook-table`,l.setAttribute(`role`,`region`),e){let t=document.createElement(`p`);t.className=`storybook-table__title`,t.textContent=e,l.appendChild(t)}let u=document.createElement(`div`);u.className=`storybook-table__body`,u.setAttribute(`role`,`table`);let d=document.createElement(`div`);if(d.className=`storybook-table__header`,d.setAttribute(`role`,`row`),i){let e=document.createElement(`div`);e.className=`storybook-table__checkbox`;let t=document.createElement(`input`);t.type=`checkbox`,t.setAttribute(`aria-label`,`すべて選択`),e.appendChild(t),d.appendChild(e)}if(t.forEach(e=>{let t=document.createElement(`div`);t.className=[`storybook-table__header-cell`,e.width?``:`storybook-table__header-cell--flex`].filter(Boolean).join(` `),e.width&&(t.style.width=e.width),t.setAttribute(`role`,`columnheader`);let r=document.createElement(`span`);if(r.className=`storybook-table__header-label`,r.textContent=e.label,t.appendChild(r),e.sortable){let r=document.createElement(`button`);r.type=`button`,r.className=`storybook-table__sort-icon`,r.setAttribute(`aria-label`,`${e.label}でソート`),r.innerHTML=n,r.addEventListener(`click`,()=>{typeof c==`function`&&c(e.key)}),t.appendChild(r)}d.appendChild(t)}),a){let e=document.createElement(`div`);e.style.width=`0`,d.appendChild(e)}return u.appendChild(d),r.forEach(e=>{let n=document.createElement(`div`);n.className=`storybook-table__row`,n.setAttribute(`role`,`row`);let r=document.createElement(`div`);if(r.className=`storybook-table__row-cells`,i){let e=document.createElement(`div`);e.className=`storybook-table__checkbox`;let t=document.createElement(`input`);t.type=`checkbox`,t.setAttribute(`aria-label`,`行を選択`),e.appendChild(t),r.appendChild(e)}if(t.forEach(t=>{let n=e[t.key];if(n&&typeof n==`object`&&(`main`in n||`sub`in n)){let e=document.createElement(`div`);if(e.className=`storybook-table__cell-stack`,t.width&&(e.style.width=t.width),t.width||(e.style.flex=`1 0 0`),n.sub){let t=document.createElement(`span`);t.className=`storybook-table__cell-sub`,t.textContent=n.sub,e.appendChild(t)}if(n.main){let t=document.createElement(`span`);t.className=`storybook-table__cell-main`,t.textContent=n.main,e.appendChild(t)}r.appendChild(e)}else{let e=document.createElement(`div`);e.className=[`storybook-table__cell`,t.width?``:`storybook-table__cell--flex`].filter(Boolean).join(` `),t.width&&(e.style.width=t.width),e.textContent=n==null?``:String(n),r.appendChild(e)}}),n.appendChild(r),a){let t=document.createElement(`button`);t.type=`button`,t.className=`storybook-table__action-btn`,t.textContent=o,t.addEventListener(`click`,()=>{typeof s==`function`&&s(e)}),n.appendChild(t)}u.appendChild(n)}),l.appendChild(u),l}})),a,o,s,c,l,u,d,f,p,m;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **表形式で複数の情報を表示するもの。**
> 情報がルールに沿って整理されており、ユーザーは確認、比較、操作しやすくなる。

---

## 基本設計

### 構造

| 要素 | 説明 |
|------|------|
| Table Header | 1行目のヘッダー。背景 \`#f7f7f8\`、テキスト 12px / \`#515a65\`。ソート可能なカラムにはソートアイコンを表示する |
| Table Row | データ行。背景白、ボトムボーダー \`#d6d9db 1px\`。padding \`12px\` |
| Checkbox | 行選択用チェックボックス（左端） |
| Action Button | 操作ボタン（右端）。三次ボタンスタイル（背景 \`#eaf3fe\`、テキスト \`#318bf7\`） |

### 幅サイズ

- 1行目のHeaderにHeaderItemが並ぶ。**ヘッダーアイテムの横幅はBodyItemに合わせる**
- Table1行に、複数のitemを並べることができる
  - 左寄せで、横幅はコンテンツに合わせて数値を指定する。**可変幅（flex）も可能**
  - 各Itemの間は **24px** あける
  - ボタンは **右寄せ**

### カラム定義（\`columns\` prop）

| プロパティ | 型 | 説明 |
|---|---|---|
| \`key\` | string | 行データのキー |
| \`label\` | string | ヘッダーに表示するラベル |
| \`width\` | string | 固定幅（例: \`'60px'\`）。未指定で flex: 1（可変幅） |
| \`sortable\` | boolean | ソートアイコンを表示するか |

### セルデータ（\`rows\` prop）

各行はオブジェクト。セル値は文字列のほか、\`{ main, sub }\` 形式でサブテキスト付きの2行表示も可能。

\`\`\`js
{ main: '店舗名テキスト', sub: '株式会社〇〇' }
\`\`\`

---

## 使用時に気をつけておくこと

- 必要な情報のみを配置する。Itemの並び順や整列ルールを一貫させる。
- 可読性を最優先し、装飾は最小限に抑える。
- どんな値が入るかを事前に想定し、最適な行の高さを指定する。Itemの情報量によって高さは可変せず、**一定の高さに揃える**。
- 操作可能なボタンなどは、常に表示されていることが望ましい。スクロールしないと出てこない、スクロールすると隠れてしまう、などは避ける。
`,s=[{key:`id`,label:`店番`,width:`60px`,sortable:!0},{key:`store`,label:`店舗名`,width:`200px`,sortable:!0},{key:`brand`,label:`ブランド`,width:`200px`},{key:`group`,label:`グループ`,width:`260px`},{key:`updated`,label:`更新日時`,sortable:!0}],c=[{id:`37018`,store:{sub:`株式会社心`,main:`食べ飲み放題 焼肉ダイニング`},brand:`焼肉ダイニング ちからや`,group:`横浜エリア / 焼肉ダイニングちからや DOURAKU`,updated:`2025.09.01 12:41`},{id:`37019`,store:{sub:`株式会社心`,main:`餃子ノ酒場 太陽ホエール 野毛本店`},brand:`餃子ノ酒場 太陽ホエールホエール`,group:`太陽ホエール / クチコミ4.0以上`,updated:`2025.09.01 12:41`},{id:`37020`,store:{sub:`株式会社心`,main:`個室居酒屋 鳥邸 天神駅前店`},brand:`鳥邸`,group:`札幌エリア`,updated:`2025.09.01 12:41`},{id:`37021`,store:{sub:`株式会社心`,main:`食べ飲み放題 焼肉ダイニング`},brand:`焼肉ダイニング ちからや`,group:`横浜エリア / 焼肉ダイニングちからや DOURAKU`,updated:`2025.09.01 12:41`}],l={title:`Table`,tags:[`autodocs`],render:e=>r(e),parameters:{layout:`padded`,docs:{description:{component:o}}},argTypes:{title:{control:`text`,description:`テーブル上部に表示するタイトル`,table:{defaultValue:{summary:``}}},columns:{control:`object`,description:`カラム定義（key / label / width / sortable）`},rows:{control:`object`,description:`行データ。セル値は文字列または { main, sub } 形式`},showCheckbox:{control:`boolean`,description:`チェックボックスを表示するか`,table:{defaultValue:{summary:`true`}}},showAction:{control:`boolean`,description:`行ごとのアクションボタンを表示するか`,table:{defaultValue:{summary:`true`}}},actionLabel:{control:`text`,description:`アクションボタンのラベル`,table:{defaultValue:{summary:`編集`}}},onAction:{action:`action`},onSort:{action:`sort`}},args:{title:`店舗一覧`,columns:s,rows:c,showCheckbox:!0,showAction:!0,actionLabel:`編集`,onAction:a(),onSort:a()}},u={},d={parameters:{docs:{description:{story:"チェックボックスを非表示にしたバリエーション（`showCheckbox: false`）。"}}},args:{showCheckbox:!1}},f={parameters:{docs:{description:{story:"アクションボタンを非表示にしたバリエーション（`showAction: false`）。"}}},args:{showAction:!1}},p={parameters:{docs:{description:{story:"固定幅と可変幅（flex）カラムの混在例。未指定のカラムは `flex: 1` で残り幅を埋める。"}}},args:{title:`シンプルテーブル`,columns:[{key:`id`,label:`ID`,width:`80px`,sortable:!0},{key:`name`,label:`名前`,sortable:!0},{key:`date`,label:`日付`,width:`140px`}],rows:[{id:`001`,name:`サンプル店舗 A`,date:`2025.09.01`},{id:`002`,name:`サンプル店舗 B`,date:`2025.09.02`},{id:`003`,name:`サンプル店舗 C`,date:`2025.09.03`}]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source},description:{story:`Figma「店舗一覧」に対応したサンプルデータを使用した基本テーブル。
チェックボックス・ソートアイコン・「編集」ボタンを含む。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'チェックボックスを非表示にしたバリエーション（\`showCheckbox: false\`）。'
      }
    }
  },
  args: {
    showCheckbox: false
  }
}`,...d.parameters?.docs?.source},description:{story:`チェックボックスを非表示にしたテーブル。一括選択が不要な場面に使用。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'アクションボタンを非表示にしたバリエーション（\`showAction: false\`）。'
      }
    }
  },
  args: {
    showAction: false
  }
}`,...f.parameters?.docs?.source},description:{story:`行ごとのアクションボタンを非表示にしたテーブル。閲覧専用一覧などに使用。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '固定幅と可変幅（flex）カラムの混在例。未指定のカラムは \`flex: 1\` で残り幅を埋める。'
      }
    }
  },
  args: {
    title: 'シンプルテーブル',
    columns: [{
      key: 'id',
      label: 'ID',
      width: '80px',
      sortable: true
    }, {
      key: 'name',
      label: '名前',
      sortable: true
    }, {
      key: 'date',
      label: '日付',
      width: '140px'
    }],
    rows: [{
      id: '001',
      name: 'サンプル店舗 A',
      date: '2025.09.01'
    }, {
      id: '002',
      name: 'サンプル店舗 B',
      date: '2025.09.02'
    }, {
      id: '003',
      name: 'サンプル店舗 C',
      date: '2025.09.03'
    }]
  }
}`,...p.parameters?.docs?.source},description:{story:`カラムを最小限に絞ったシンプルなテーブル。
固定幅・可変幅（flex）カラムの使い方を示す。`,...p.parameters?.docs?.description}}},m=[`Default`,`NoCheckbox`,`NoAction`,`MinimalColumns`]}))();export{u as Default,p as MinimalColumns,f as NoAction,d as NoCheckbox,m as __namedExportsOrder,l as default};