import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n={pencil:`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M11 2l3 3-8 8-3.5.5.5-3.5 8-8z"/>
    <line x1="9.5" y1="3.5" x2="12.5" y2="6.5"/>
  </svg>`,sync:`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M13.5 8A5.5 5.5 0 1 1 12 4.2"/>
    <polyline points="10.5,2 13.5,4.2 10.5,6.5"/>
  </svg>`,link:`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6.5 9.5a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 0 0-5-5L7 4"/>
    <path d="M9.5 6.5a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 0 0 5 5L9 12"/>
  </svg>`,caret_right:`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="6,4 10,8 6,12"/>
  </svg>`},r=({items:e=[],openSubmenuIndex:t=null,onSelect:r}={})=>{let i=document.createElement(`div`);return i.className=`storybook-dropdown-menu`,i.setAttribute(`role`,`menu`),e.forEach((e,a)=>{let o=document.createElement(`div`);o.className=`storybook-dropdown-menu__item`,e.children&&e.children.length>0&&o.classList.add(`storybook-dropdown-menu__item--has-sub`),t===a&&o.classList.add(`storybook-dropdown-menu__item--open`),o.setAttribute(`role`,`menuitem`),o.tabIndex=0;let s=document.createElement(`div`);if(s.className=`storybook-dropdown-menu__item-inner`,e.icon&&n[e.icon]){let t=document.createElement(`span`);t.className=`storybook-dropdown-menu__icon`,t.innerHTML=n[e.icon],s.appendChild(t)}let c=document.createElement(`span`);if(c.className=`storybook-dropdown-menu__label`,c.textContent=e.label,s.appendChild(c),e.children&&e.children.length>0){let e=document.createElement(`span`);e.className=`storybook-dropdown-menu__caret`,e.innerHTML=n.caret_right,s.appendChild(e)}if(o.appendChild(s),(!e.children||e.children.length===0)&&(o.addEventListener(`click`,()=>{typeof r==`function`&&r(e.label)}),o.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),typeof r==`function`&&r(e.label))})),e.children&&e.children.length>0){let t=document.createElement(`div`);t.className=`storybook-dropdown-menu storybook-dropdown-menu--sub`,t.setAttribute(`role`,`menu`),e.children.forEach(e=>{let n=document.createElement(`div`);n.className=`storybook-dropdown-menu__item`,n.setAttribute(`role`,`menuitem`),n.tabIndex=0;let i=document.createElement(`div`);i.className=`storybook-dropdown-menu__item-inner`;let a=document.createElement(`span`);a.className=`storybook-dropdown-menu__label`,a.textContent=e.label,i.appendChild(a),n.appendChild(i),n.addEventListener(`click`,t=>{t.stopPropagation(),typeof r==`function`&&r(e.label)}),t.appendChild(n)}),o.appendChild(t)}i.appendChild(o)}),i}})),a,o,s,c,l,u,d,f;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **可能な操作や遷移先を一時的に一覧で表示し、クリックで操作の実行または画面遷移ができるもの。**

---

## 基本設計

- 横幅は自由だが、**最小幅は 160px**。
  - メニュー名に合わせて横幅の調整可能。

### バリエーション

| バリアント | 説明 |
|-----------|------|
| アイコンあり | 各アイテムの左側にアイコンを表示。操作内容をより直感的に伝えられる |
| アイコンなし | アイコンなしのシンプルな構成 |
| マウスホバー | ホバー時にアイテム背景が \`#f7f7f8\` に変化 |
| 2階層ある場合 | 「大分類/小分類」はドリルダウン（階層）形式で表示可能。最大2階層まで。1階層目をマウスオーバーすると2階層目を表示する |

---

## 使用時に気をつけておくこと

- メニュー名が明確で、クリックで何が起こるかイメージできること。
- 一覧表示されることを考慮し、メニュー名はできるだけ短くすること。
- 選択肢の表示順序を定めること。（アクションしてほしい順、よく選ばれる順など）
`,s={title:`DropdownMenu`,tags:[`autodocs`],render:e=>r(e),parameters:{layout:`padded`,docs:{description:{component:o}}},argTypes:{items:{control:`object`,description:"メニューアイテムの配列。各アイテムは `{ label, icon?, children? }` の形式。`icon` は `pencil` / `sync` / `link` を指定可。`children` を持つアイテムはサブメニューを表示する"},openSubmenuIndex:{control:`number`,description:`サブメニューを強制表示するアイテムのインデックス（Storybook確認用）。通常はホバーで表示される`,table:{defaultValue:{summary:`null`}}},onSelect:{action:`select`}},args:{items:[{label:`編集`,icon:`pencil`},{label:`更新`,icon:`sync`},{label:`リンクをコピー`,icon:`link`}],openSubmenuIndex:null,onSelect:a()}},c={},l={parameters:{docs:{description:{story:`アイコンなし。テキストのみで構成するシンプルな形（Figma「アイコンなし」）。`}}},args:{items:[{label:`編集`},{label:`更新`},{label:`リンクをコピー`}]}},u={parameters:{docs:{description:{story:"ホバー時のアイテム背景色（`#f7f7f8`）を確認するストーリー。最初のアイテムをホバー状態で固定表示（Figma「マウスホバー」）。"}}},render:e=>{let t=r(e),n=t.querySelector(`.storybook-dropdown-menu__item`);return n&&n.classList.add(`storybook-dropdown-menu__item--open`),t},args:{items:[{label:`メニュー`},{label:`メニュー`}]}},d={parameters:{layout:`centered`,docs:{description:{story:"2階層ドリルダウン。1階層目をホバーすると右側にサブメニューが展開する（Figma「2階層ある場合」）。`openSubmenuIndex` でサブメニューの強制表示インデックスを変更できる。"}}},args:{items:[{label:`メニュー`},{label:`1階層メニュー`,children:[{label:`2階層メニュー`},{label:`2階層メニュー`},{label:`2階層メニュー`}]},{label:`メニュー`}],openSubmenuIndex:1}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`アイコンあり。各アイテムの左側にアイコンを表示する基本形。
Figmaの「基本設計 / アイコンあり」に相当。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'アイコンなし。テキストのみで構成するシンプルな形（Figma「アイコンなし」）。'
      }
    }
  },
  args: {
    items: [{
      label: '編集'
    }, {
      label: '更新'
    }, {
      label: 'リンクをコピー'
    }]
  }
}`,...l.parameters?.docs?.source},description:{story:`アイコンなしのシンプルな構成。
Figmaの「基本設計 / アイコンなし」に相当。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ホバー時のアイテム背景色（\`#f7f7f8\`）を確認するストーリー。最初のアイテムをホバー状態で固定表示（Figma「マウスホバー」）。'
      }
    }
  },
  render: args => {
    const menu = createDropdownMenu(args);
    const firstItem = menu.querySelector('.storybook-dropdown-menu__item');
    if (firstItem) firstItem.classList.add('storybook-dropdown-menu__item--open');
    return menu;
  },
  args: {
    items: [{
      label: 'メニュー'
    }, {
      label: 'メニュー'
    }]
  }
}`,...u.parameters?.docs?.source},description:{story:`アイテムにカーソルを合わせた状態。
背景色が #f7f7f8 に変化する。
このストーリーでは最初のアイテムをホバー状態で固定表示。
実際のブラウザ操作では :hover で同じスタイルが適用される。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '2階層ドリルダウン。1階層目をホバーすると右側にサブメニューが展開する（Figma「2階層ある場合」）。\`openSubmenuIndex\` でサブメニューの強制表示インデックスを変更できる。'
      }
    }
  },
  args: {
    items: [{
      label: 'メニュー'
    }, {
      label: '1階層メニュー',
      children: [{
        label: '2階層メニュー'
      }, {
        label: '2階層メニュー'
      }, {
        label: '2階層メニュー'
      }]
    }, {
      label: 'メニュー'
    }],
    openSubmenuIndex: 1
  }
}`,...d.parameters?.docs?.source},description:{story:`2階層のドリルダウン形式。
「大分類/小分類」はドリルダウン（階層）形式で表示可能。
最大2階層までとし、1階層目をマウスオーバーすると2階層目を右側に表示する。
このストーリーでは openSubmenuIndex=1 でサブメニューを固定表示。`,...d.parameters?.docs?.description}}},f=[`Default`,`NoIcon`,`Hover`,`Hierarchical`]}))();export{c as Default,d as Hierarchical,u as Hover,l as NoIcon,f as __namedExportsOrder,s as default};