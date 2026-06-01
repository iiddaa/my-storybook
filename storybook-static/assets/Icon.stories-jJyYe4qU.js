import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./icons-D6TPqmSF.js";var r=e((()=>{}));function i({label:e,icons:t}){let r=document.createElement(`div`);r.className=`storybook-icon__group`;let i=document.createElement(`p`);i.className=`storybook-icon__group-label`,i.textContent=e,r.appendChild(i);let a=document.createElement(`div`);return a.className=`storybook-icon__grid`,t.forEach(e=>{let t=document.createElement(`div`);t.className=`storybook-icon__item`;let r=document.createElement(`span`);r.className=`storybook-icon__item-icon`,r.setAttribute(`title`,e),r.appendChild(n(e,24)),t.appendChild(r);let i=document.createElement(`span`);i.className=`storybook-icon__item-name`,i.textContent=e.replace(`brand/`,``),t.appendChild(i),a.appendChild(t)}),r.appendChild(a),r}var a,o,s=e((()=>{r(),t(),a=[{label:`矢印`,icons:[`arrow_up`,`arrow_down`,`arrow_left`,`arrow_right`,`arrow_down_circle`,`caret_up`,`caret_down`,`caret_left`,`caret_right`,`caret_up_down`]},{label:`アクション`,icons:[`check_circle`,`alert_circle`,`x_circle`,`sync`,`x`,`search`,`plus`,`minus`,`plus_circle`,`external_link`,`check`,`calendar`,`eye`]},{label:`編集・コンテンツ`,icons:[`pencil`,`pencil_circle`,`photo`,`photo_plus`,`video`,`copy`,`document`,`documents`,`no_result`,`globe`,`link`,`ellipsis`]},{label:`UI・コントロール`,icons:[`magic_wand`,`gear`,`light_bulb`,`clock`,`logout`,`bell`,`question_circle`,`star`,`star_half`,`comment`,`minus_circle`]},{label:`ブランド`,icons:[`brand/google_map`,`brand/facebook`,`brand/instagram`,`brand/yahoo`,`brand/yelp`,`brand/youtube`,`brand/line`,`brand/x`,`brand/tiktok`,`brand/apple`,`brand/store_website`]},{label:`アプリナビゲーション`,icons:[`store_nav`,`analysis_nav`,`gear_nav`]}],o=({className:e=``}={})=>{let t=document.createElement(`div`);t.className=[`storybook-icon`,e].filter(Boolean).join(` `);let n=document.createElement(`div`);n.className=`storybook-icon__head`;let r=document.createElement(`h1`);r.className=`storybook-icon__title`,r.textContent=`Icon`,n.appendChild(r),t.appendChild(n);let o=document.createElement(`div`);o.className=`storybook-icon__body`;let s=document.createElement(`div`);s.className=`storybook-icon__concept`;let c=document.createElement(`div`);c.className=`storybook-icon__concept-label-row`;let l=document.createElement(`p`);l.className=`storybook-icon__concept-label`,l.textContent=`概念`;let u=document.createElement(`p`);u.className=`storybook-icon__concept-tagline`,u.textContent=`どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。`,c.appendChild(l),c.appendChild(u),s.appendChild(c);let d=document.createElement(`p`);d.className=`storybook-icon__concept-body`,d.textContent=`テキストと比べて小さな領域で、かつ直感的に情報を伝達できる、絵や記号。`,s.appendChild(d),o.appendChild(s);let f=document.createElement(`div`);f.className=`storybook-icon__section`;let p=document.createElement(`p`);p.className=`storybook-icon__section-heading`,p.textContent=`基本設計`,f.appendChild(p);let m=document.createElement(`ul`);m.className=`storybook-icon__notes-list`,[`サイズパターンは「16x16」「20x20」「24x24」「32x32」`,`テキストと併用する場合は、そのテキストに近いサイズを選択する`].forEach(e=>{let t=document.createElement(`li`);t.className=`storybook-icon__notes-item`,t.textContent=e,m.appendChild(t)}),f.appendChild(m);let h=document.createElement(`div`);h.className=`storybook-icon__card`,a.forEach(e=>h.appendChild(i(e))),f.appendChild(h),o.appendChild(f);let g=document.createElement(`div`);g.className=`storybook-icon__section`;let _=document.createElement(`p`);_.className=`storybook-icon__section-heading`,_.textContent=`使用時に気をつけておくこと`,g.appendChild(_);let v=document.createElement(`ul`);return v.className=`storybook-icon__notes-list`,g.appendChild(v),o.appendChild(g),t.appendChild(o),t}})),c,l,u,d;e((()=>{s(),c=`
## 概念

テキストと比べて小さな領域で、かつ直感的に情報を伝達できる、絵や記号。

---

## 基本設計

### サイズパターン

| サイズ | 用途 |
|--------|------|
| **16×16** | テキストと併用する小さなアイコン（キャプション・ラベルなど） |
| **20×20** | 標準的な使用（ボタン内アイコン、インラインなど） |
| **24×24** | 大きめの強調表示・ナビゲーション |
| **32×32** | より大きな強調・視認性が求められる場面 |

### アイコングループ

| グループ | 主な用途 |
|----------|----------|
| 矢印 | 方向・順序・展開の表現 |
| アクション | 操作・状態変化（チェック・エラー・検索など） |
| 編集・コンテンツ | 入力・メディア・ファイル操作 |
| UI・コントロール | 設定・通知・評価など補助的なUI要素 |
| ブランド | SNS・外部サービスのロゴアイコン |
| アプリナビゲーション | グローバルナビゲーション専用アイコン |

---

## 使用時に気をつけておくこと
`,l={title:`Icon`,tags:[`autodocs`],render:e=>o(e),parameters:{layout:`padded`,docs:{description:{component:c}}},argTypes:{className:{table:{disable:!0}}},args:{}},u={},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source},description:{story:`全アイコンをグループ別に表示するカタログ。基本設計に対応。`,...u.parameters?.docs?.description}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,l as default};