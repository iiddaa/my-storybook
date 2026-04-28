import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n({label:e,icon:t,items:n=[]},a){let o=document.createElement(`div`);o.className=`storybook-global-nav__section`;let s=document.createElement(`div`);s.className=`storybook-global-nav__section-head`;let c=document.createElement(`span`);c.className=`storybook-global-nav__section-icon`,c.innerHTML=i[t]??``;let l=document.createElement(`span`);l.className=`storybook-global-nav__section-label`,l.textContent=e,s.appendChild(c),s.appendChild(l),o.appendChild(s);let u=document.createElement(`div`);return u.className=`storybook-global-nav__section-list`,n.forEach(e=>{u.appendChild(r({...e,active:e.id===a}))}),o.appendChild(u),o}function r({label:e,href:t,onClick:n,badge:r,active:i}){let a=document.createElement(`a`);a.className=`storybook-global-nav__item`+(i?` storybook-global-nav__item--active`:``),a.href=t??`#`,i&&a.setAttribute(`aria-current`,`page`),n&&a.addEventListener(`click`,e=>{e.preventDefault(),n(e)});let o=document.createElement(`span`);if(o.className=`storybook-global-nav__item-label`,o.textContent=e,a.appendChild(o),r){let e=document.createElement(`span`);e.className=`storybook-global-nav__badge`,e.textContent=r,a.appendChild(e)}return a}var i,a,o=e((()=>{t(),i={store:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 9L5 5h10l2 4H3z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
    <rect x="3" y="9" width="14" height="7" rx="0.5" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
    <rect x="8" y="11.5" width="4" height="4.5" stroke="currentColor" stroke-width="1.2"/>
    <rect x="4.5" y="10.5" width="2.5" height="2" stroke="currentColor" stroke-width="1.2"/>
    <rect x="13" y="10.5" width="2.5" height="2" stroke="currentColor" stroke-width="1.2"/>
  </svg>`,analysis:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2.5" y="12" width="3.5" height="5" rx="0.5" fill="currentColor"/>
    <rect x="8.25" y="8" width="3.5" height="9" rx="0.5" fill="currentColor"/>
    <rect x="14" y="4.5" width="3.5" height="12.5" rx="0.5" fill="currentColor"/>
  </svg>`,gear:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.2"/>
    <path d="M16.5 10c0-.3 0-.7-.1-1l1-.8c.2-.2.3-.6.1-.9l-1-1.7c-.2-.3-.5-.4-.8-.3l-1.2.5c-.5-.4-1-.7-1.6-.9L12.7 3.6c-.1-.3-.4-.5-.7-.5H9.9c-.3 0-.6.2-.7.5L9 4.9c-.6.2-1.1.5-1.6.9L6.2 5.3c-.3-.1-.6 0-.8.3l-1 1.7c-.2.3-.1.7.1.9l1 .8c0 .3-.1.7-.1 1s0 .7.1 1l-1 .8c-.2.2-.3.6-.1.9l1 1.7c.2.3.5.4.8.3l1.2-.5c.5.4 1 .7 1.6.9l.2 1.3c.1.3.4.5.7.5h2.1c.3 0 .6-.2.7-.5l.2-1.3c.6-.2 1.1-.5 1.6-.9l1.2.5c.3.1.6 0 .8-.3l1-1.7c.2-.3.1-.7-.1-.9l-1-.8c.1-.3.1-.7.1-1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  </svg>`},a=({logo:e,sections:t=[],options:i=[],activeItemId:a})=>{let o=document.createElement(`nav`);o.className=`storybook-global-nav`,o.setAttribute(`aria-label`,`グローバルナビゲーション`);let s=document.createElement(`div`);s.className=`storybook-global-nav__nav-container`;let c=document.createElement(`div`);if(c.className=`storybook-global-nav__logo-area`,e?.src){let t=document.createElement(`img`);t.className=`storybook-global-nav__logo`,t.src=e.src,t.alt=e.alt??``,c.appendChild(t)}else{let t=document.createElement(`div`);t.className=`storybook-global-nav__logo-fallback`,t.textContent=e?.alt??`カンリー`,c.appendChild(t)}if(s.appendChild(c),t.forEach(e=>{s.appendChild(n(e,a))}),o.appendChild(s),i.length>0){let e=document.createElement(`div`);e.className=`storybook-global-nav__options-container`;let t=document.createElement(`div`);t.className=`storybook-global-nav__options-list`,i.forEach(e=>{t.appendChild(r({...e,active:!1}))}),e.appendChild(t),o.appendChild(e)}return o}})),s,c,l,u,d,f,p,m,h,g,_;e((()=>{o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=`
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
`,l=`https://www.figma.com/api/mcp/asset/ec44eb76-3490-4a31-8912-d5c69e313f6a`,u=[{label:`管理・運用`,icon:`store`,items:[{id:`shop`,label:`店舗`,href:`#`},{id:`media`,label:`画像・動画`,href:`#`},{id:`menu`,label:`メニュー`,href:`#`},{id:`review`,label:`クチコミ`,href:`#`,badge:`99+`},{id:`post`,label:`投稿`,href:`#`,badge:`7`}]},{label:`分析`,icon:`analysis`,items:[{id:`views`,label:`閲覧・反応数`,href:`#`},{id:`review-summary`,label:`クチコミ総評`,href:`#`},{id:`keywords`,label:`検索キーワード`,href:`#`},{id:`ranking`,label:`検索順位`,href:`#`}]},{label:`設定`,icon:`gear`,items:[{id:`group`,label:`グループ`,href:`#`},{id:`user`,label:`ユーザー`,href:`#`}]}],d=[{label:`ヘルプ`,href:`#`},{label:`ログアウト`,href:`#`,onClick:s()}],f={title:`GlobalNavigation`,tags:[`autodocs`],render:e=>a(e),parameters:{layout:`padded`,docs:{description:{component:c}}},argTypes:{logo:{control:`object`,description:`ロゴ設定。src（画像URL）と alt（代替テキスト）を指定する。省略時は alt のテキストをフォールバック表示する。`},sections:{control:`object`,description:`ナビセクション配列。各セクションに label・icon（store / analysis / gear）・items を指定する。`},options:{control:`object`,description:`下部オプション項目（ヘルプ・ログアウトなど）。省略時はオプションエリア自体が非表示になる。`},activeItemId:{control:`text`,description:`現在地を示すアイテムの id。該当アイテムがアクティブ状態（背景色・テキスト色）で表示される。`}},args:{logo:{src:l,alt:`カンリー`},sections:u,options:d,activeItemId:void 0}},p={},m={parameters:{docs:{description:{story:"`activeItemId` にアイテムの id を渡すことで現在地を明示する（Figmaガイドライン）。"}}},args:{activeItemId:`review`}},h={parameters:{docs:{description:{story:`件数通知が必要なアイテムにのみ badge を付与する。Figmaの基本設計では「クチコミ（99+）」「投稿（7）」に表示。`}}},args:{sections:[{label:`管理・運用`,icon:`store`,items:[{id:`shop`,label:`店舗`,href:`#`},{id:`review`,label:`クチコミ`,href:`#`,badge:`99+`},{id:`post`,label:`投稿`,href:`#`,badge:`7`}]}],options:d}},g={parameters:{docs:{description:{story:`logo・options を省略可能。logo 省略時は alt テキストをフォールバック表示する。options 省略時はオプションエリアが非表示になる。`}}},args:{logo:void 0,sections:[{label:`管理・運用`,icon:`store`,items:[{id:`shop`,label:`店舗`,href:`#`},{id:`menu`,label:`メニュー`,href:`#`}]}],options:[]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source},description:{story:`Figmaの基本設計そのままの構成。ロゴ・全セクション・バッジ・オプション付き。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`現在地（アクティブ状態）の表示確認。
activeItemId に対象アイテムの id を渡すと、背景色とテキスト色で現在地を示す。
Figmaガイドライン：「現在地がわかるようにする。」`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`バッジの表示確認。
件数通知が必要な項目（クチコミ・投稿など）に badge を付与する。`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'logo・options を省略可能。logo 省略時は alt テキストをフォールバック表示する。options 省略時はオプションエリアが非表示になる。'
      }
    }
  },
  args: {
    logo: undefined,
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
}`,...g.parameters?.docs?.source},description:{story:`logo・options を省略した最小構成。
セクションのみで成立させる場合の参考。`,...g.parameters?.docs?.description}}},_=[`Default`,`WithActiveItem`,`WithBadge`,`Minimal`]}))();export{p as Default,g as Minimal,m as WithActiveItem,h as WithBadge,_ as __namedExportsOrder,f as default};