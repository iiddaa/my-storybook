import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./BrandLogo-C-YA3Iw7.js";var r=e((()=>{}));function i({label:e,icon:t,items:n=[]},r){let i=document.createElement(`div`);i.className=`storybook-global-nav__section`;let s=document.createElement(`div`);s.className=`storybook-global-nav__section-head`;let c=document.createElement(`span`);c.className=`storybook-global-nav__section-icon`,c.innerHTML=o[t]??``;let l=document.createElement(`span`);l.className=`storybook-global-nav__section-label`,l.textContent=e,s.appendChild(c),s.appendChild(l),i.appendChild(s);let u=document.createElement(`div`);return u.className=`storybook-global-nav__section-list`,n.forEach(e=>{u.appendChild(a({...e,active:e.id===r}))}),i.appendChild(u),i}function a({label:e,href:t,onClick:n,badge:r,active:i}){let a=document.createElement(`a`);a.className=`storybook-global-nav__item`+(i?` storybook-global-nav__item--active`:``),a.href=t??`#`,i&&a.setAttribute(`aria-current`,`page`),n&&a.addEventListener(`click`,e=>{e.preventDefault(),n(e)});let o=document.createElement(`span`);if(o.className=`storybook-global-nav__item-label`,o.textContent=e,a.appendChild(o),r){let e=document.createElement(`span`);e.className=`storybook-global-nav__badge`,e.textContent=r,a.appendChild(e)}return a}var o,s,c=e((()=>{r(),t(),o={store:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(4,10)">
      <path d="M0 0V10C0 10.55 0.45 11 1 11H6.01V7C6.01 6.45 6.46 6 7.01 6H9.01C9.56 6 10.01 6.45 10.01 7V11H15C15.55 11 16 10.55 16 10V0H0Z" fill="#FBBC04"/>
    </g>
    <g transform="translate(3,3)">
      <path d="M1 0H6V7C6 8.66 4.66 10 3 10C1.34 10 0 8.66 0 7V1C0 0.45 0.45 0 1 0Z" fill="#318BF7"/>
    </g>
    <g transform="translate(9,3)">
      <path d="M0 0H6V7C6 8.66 4.66 10 3 10C1.34 10 0 8.66 0 7V0Z" fill="#318BF7"/>
    </g>
    <g transform="translate(15,3)">
      <path d="M0 0H5C5.55 0 6 0.45 6 1V7C6 8.66 4.66 10 3 10C1.34 10 0 8.66 0 7V0Z" fill="#318BF7"/>
    </g>
  </svg>`,analysis:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(3,11)">
      <path d="M1 0H4C4.55 0 5 0.45 5 1V9.5C5 9.78 4.78 10 4.5 10H0.5C0.22 10 0 9.78 0 9.5V1C0 0.45 0.45 0 1 0Z" fill="#318BF7"/>
    </g>
    <g transform="translate(9.5,7)">
      <path d="M1 0H4C4.55 0 5 0.45 5 1V13.5C5 13.78 4.78 14 4.5 14H0.5C0.22 14 0 13.78 0 13.5V1C0 0.45 0.45 0 1 0Z" fill="#FBBC04"/>
    </g>
    <g transform="translate(16,3)">
      <path d="M1 0H4C4.55 0 5 0.45 5 1V17.5C5 17.78 4.78 18 4.5 18H0.5C0.22 18 0 17.78 0 17.5V1C0 0.45 0.45 0 1 0Z" fill="#EB4D38"/>
    </g>
  </svg>`,gear:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(2,2)">
      <path d="M0.0219292 6.93C0.470734 5.59 1.23266 4.35 2.21376 3.3C2.38076 3.12 2.64169 3.06 2.87132 3.14L5.24059 3.95C5.8877 4.17 6.587 3.85 6.81662 3.24C6.84793 3.18 6.85837 3.11 6.86881 3.06L7.31761 0.7C7.35936 0.47 7.55767 0.28 7.79773 0.23C8.5179 0.08 9.25895 0 10 0C10.741 0 11.4821 0.08 12.1918 0.22C12.4319 0.27 12.6302 0.45 12.672 0.69L13.1208 3.05C13.246 3.69 13.8827 4.12 14.5611 4C14.6342 4 14.6968 3.97 14.749 3.95L17.1182 3.14C17.3583 3.06 17.6192 3.12 17.7758 3.3C18.7673 4.34 19.5188 5.58 19.9676 6.93C20.0511 7.16 19.9676 7.41 19.7798 7.56L17.8697 9.11C17.3479 9.53 17.2852 10.28 17.734 10.77C17.7758 10.82 17.8175 10.86 17.8697 10.9L19.7798 12.45C19.9676 12.61 20.0407 12.85 19.9676 13.08C19.5188 14.42 18.7569 15.66 17.7758 16.71C17.6088 16.89 17.3479 16.95 17.1182 16.87L14.749 16.06C14.1019 15.84 13.4026 16.16 13.1729 16.77C13.1416 16.83 13.1312 16.9 13.1208 16.95L12.672 19.31C12.6302 19.54 12.4319 19.73 12.1918 19.78C11.4821 19.92 10.741 20 10 20C9.25895 20 8.5179 19.92 7.80816 19.78C7.56811 19.73 7.3698 19.55 7.32805 19.31L6.87924 16.95C6.754 16.31 6.11732 15.88 5.43889 16C5.36583 16 5.30321 16.03 5.25102 16.05L2.88175 16.86C2.64169 16.94 2.38076 16.88 2.2242 16.7C1.23266 15.66 0.481171 14.42 0.0323665 13.07C-0.051132 12.84 0.0323663 12.59 0.220238 12.44L2.13027 10.89C2.65213 10.47 2.71476 9.72 2.26595 9.23C2.2242 9.18 2.18245 9.14 2.13027 9.1L0.220238 7.55C0.0323663 7.39 -0.0406947 7.15 0.0323665 6.92L0.0219292 6.93ZM10.0104 13.35C11.9309 13.35 13.4965 11.86 13.4965 10.01C13.4965 8.16 11.9413 6.67 10.0104 6.67C8.07953 6.67 6.52437 8.16 6.52437 10.01C6.52437 11.86 8.07953 13.35 10.0104 13.35Z" fill="#318BF7"/>
    </g>
  </svg>`},s=({sections:e=[],options:t=[],activeItemId:r})=>{let o=document.createElement(`nav`);o.className=`storybook-global-nav`,o.setAttribute(`aria-label`,`グローバルナビゲーション`);let s=document.createElement(`div`);s.className=`storybook-global-nav__nav-container`;let c=document.createElement(`div`);if(c.className=`storybook-global-nav__logo-area`,c.appendChild(n({variant:`store-marketing`})),s.appendChild(c),e.forEach(e=>{s.appendChild(i(e,r))}),o.appendChild(s),t.length>0){let e=document.createElement(`div`);e.className=`storybook-global-nav__options-container`;let n=document.createElement(`div`);n.className=`storybook-global-nav__options-list`,t.forEach(e=>{n.appendChild(a({...e,active:!1}))}),e.appendChild(n),o.appendChild(e)}return o}})),l,u,d,f,p,m,h,g,_,v;e((()=>{c(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **主要機能を切り替えるもの。**

---

## 基本設計

ナビゲーションは3つのエリアで構成される。

| エリア | 役割 |
|---|---|
| ロゴエリア | サービスロゴを表示する |
| ナビセクション群 | 主要機能をグループ単位（セクション）で一覧表示する |
| オプションエリア | ヘルプ・ログアウトなど補助的なアクション |

各セクションは「セクション見出し（アイコン＋ラベル）」と「ナビリスト（インデントされた項目一覧）」で構成される。

バッジは件数通知が必要な項目にのみ付与する（例：クチコミ・投稿）。

---

## 使用時に気をつけておくこと

- いつでもすぐにアクセスできるよう、位置は固定で常に表示する。
- 項目数はできるだけ絞る。あくまで主要機能群。
- 現在地がわかるようにする。（なんのサービスの、どの主要機能を操作しているのか）
`,d=[{label:`管理・運用`,icon:`store`,items:[{id:`shop`,label:`店舗`,href:`#`},{id:`media`,label:`画像・動画`,href:`#`},{id:`menu`,label:`メニュー`,href:`#`},{id:`review`,label:`クチコミ`,href:`#`,badge:`99+`},{id:`post`,label:`投稿`,href:`#`,badge:`7`}]},{label:`分析`,icon:`analysis`,items:[{id:`views`,label:`閲覧・反応数`,href:`#`},{id:`review-summary`,label:`クチコミ総評`,href:`#`},{id:`keywords`,label:`検索キーワード`,href:`#`},{id:`ranking`,label:`検索順位`,href:`#`}]},{label:`設定`,icon:`gear`,items:[{id:`group`,label:`グループ`,href:`#`},{id:`user`,label:`ユーザー`,href:`#`}]}],f=[{label:`ヘルプ`,href:`#`},{label:`ログアウト`,href:`#`,onClick:l()}],p={title:`Layout/GlobalNavigation`,tags:[`autodocs`],render:e=>s(e),parameters:{layout:`padded`,docs:{description:{component:u}}},argTypes:{sections:{control:`object`,description:`ナビセクション配列。各セクションに label・icon（store / analysis / gear）・items を指定する。`},options:{control:`object`,description:`下部オプション項目（ヘルプ・ログアウトなど）。省略時はオプションエリア自体が非表示になる。`},activeItemId:{control:`text`,description:`現在地を示すアイテムの id。該当アイテムがアクティブ状態（背景色・テキスト色）で表示される。`}},args:{sections:d,options:f,activeItemId:void 0}},m={},h={parameters:{docs:{description:{story:"`activeItemId` にアイテムの id を渡すことで現在地を明示する（Figmaガイドライン）。"}}},args:{activeItemId:`review`}},g={parameters:{docs:{description:{story:`件数通知が必要なアイテムにのみ badge を付与する。Figmaの基本設計では「クチコミ（99+）」「投稿（7）」に表示。`}}},args:{sections:[{label:`管理・運用`,icon:`store`,items:[{id:`shop`,label:`店舗`,href:`#`},{id:`review`,label:`クチコミ`,href:`#`,badge:`99+`},{id:`post`,label:`投稿`,href:`#`,badge:`7`}]}],options:f}},_={parameters:{docs:{description:{story:`logo・options を省略可能。logo 省略時は alt テキストをフォールバック表示する。options 省略時はオプションエリアが非表示になる。`}}},args:{sections:[{label:`管理・運用`,icon:`store`,items:[{id:`shop`,label:`店舗`,href:`#`},{id:`menu`,label:`メニュー`,href:`#`}]}],options:[]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source},description:{story:`Figmaの基本設計そのままの構成。ロゴ・全セクション・バッジ・オプション付き。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`activeItemId\` にアイテムの id を渡すことで現在地を明示する（Figmaガイドライン）。'
      }
    }
  },
  args: {
    activeItemId: 'review'
  }
}`,...h.parameters?.docs?.source},description:{story:`現在地（アクティブ状態）の表示確認。
activeItemId に対象アイテムの id を渡すと、背景色とテキスト色で現在地を示す。
Figmaガイドライン：「現在地がわかるようにする。」`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '件数通知が必要なアイテムにのみ badge を付与する。Figmaの基本設計では「クチコミ（99+）」「投稿（7）」に表示。'
      }
    }
  },
  args: {
    sections: [{
      label: '管理・運用',
      icon: 'store',
      items: [{
        id: 'shop',
        label: '店舗',
        href: '#'
      }, {
        id: 'review',
        label: 'クチコミ',
        href: '#',
        badge: '99+'
      }, {
        id: 'post',
        label: '投稿',
        href: '#',
        badge: '7'
      }]
    }],
    options: DEFAULT_OPTIONS
  }
}`,...g.parameters?.docs?.source},description:{story:`バッジの表示確認。
件数通知が必要な項目（クチコミ・投稿など）に badge を付与する。`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'logo・options を省略可能。logo 省略時は alt テキストをフォールバック表示する。options 省略時はオプションエリアが非表示になる。'
      }
    }
  },
  args: {
    sections: [{
      label: '管理・運用',
      icon: 'store',
      items: [{
        id: 'shop',
        label: '店舗',
        href: '#'
      }, {
        id: 'menu',
        label: 'メニュー',
        href: '#'
      }]
    }],
    options: []
  }
}`,..._.parameters?.docs?.source},description:{story:`logo・options を省略した最小構成。
セクションのみで成立させる場合の参考。`,..._.parameters?.docs?.description}}},v=[`Default`,`WithActiveItem`,`WithBadge`,`Minimal`]}))();export{m as Default,_ as Minimal,h as WithActiveItem,g as WithBadge,v as __namedExportsOrder,p as default};