import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n({name:e,swatches:t}){let n=document.createElement(`div`);n.className=`storybook-color-palettes__group`;let r=document.createElement(`span`);r.className=`storybook-color-palettes__group-name`,r.textContent=e,n.appendChild(r);let i=document.createElement(`div`);return i.className=`storybook-color-palettes__swatches`,t.forEach(({step:t,color:n,muted:r})=>{let a=document.createElement(`div`);a.className=`storybook-color-palettes__swatch`;let o=document.createElement(`span`);o.className=[`storybook-color-palettes__swatch-step`,r?`storybook-color-palettes__swatch-step--muted`:``].filter(Boolean).join(` `),o.textContent=t;let s=document.createElement(`span`);s.className=`storybook-color-palettes__swatch-circle`,s.style.backgroundColor=n,s.setAttribute(`role`,`img`),s.setAttribute(`aria-label`,`${e} ${t} — ${n}`),s.setAttribute(`title`,n),a.appendChild(o),a.appendChild(s),i.appendChild(a)}),n.appendChild(i),n}var r,i,a,o=e((()=>{t(),r=[{name:`Gray`,swatches:[{step:`900`,color:`#222222`},{step:`800`,color:`#2a2f35`,muted:!0},{step:`700`,color:`#3a404a`,muted:!0},{step:`600`,color:`#4b5259`},{step:`500`,color:`#5c6670`},{step:`400`,color:`#858c94`},{step:`300`,color:`#adb2b8`},{step:`200`,color:`#dde0e3`},{step:`100`,color:`#eff0f1`},{step:`50`,color:`#f7f7f8`}]},{name:`Blue`,swatches:[{step:`900`,color:`#0a1f40`},{step:`800`,color:`#0d2f61`,muted:!0},{step:`700`,color:`#1247a1`,muted:!0},{step:`600`,color:`#1e74db`},{step:`500`,color:`#318bf7`},{step:`400`,color:`#619ff0`},{step:`300`,color:`#8fbff4`},{step:`200`,color:`#c5dff9`},{step:`100`,color:`#eaf3fe`},{step:`50`,color:`#f5f9ff`}]},{name:`Neutral`,swatches:[{step:`Black`,color:`#222222`},{step:`White`,color:`#ffffff`}]}],i=[{name:`Red`,swatches:[{step:`500`,color:`#eb4d38`},{step:`100`,color:`#fdf2f0`}]},{name:`Green`,swatches:[{step:`500`,color:`#22a76a`},{step:`100`,color:`#e4f5ef`}]},{name:`Orange`,swatches:[{step:`500`,color:`#f78f43`},{step:`100`,color:`#fef4ed`}]},{name:`Yellow`,swatches:[{step:`500`,color:`#f5c842`}]}],a=({className:e=``}={})=>{let t=document.createElement(`div`);t.className=[`storybook-color-palettes`,e].filter(Boolean).join(` `);let a=document.createElement(`div`);a.className=`storybook-color-palettes__head`;let o=document.createElement(`h1`);o.className=`storybook-color-palettes__title`,o.textContent=`Color Palettes`,a.appendChild(o),t.appendChild(a);let s=document.createElement(`div`);s.className=`storybook-color-palettes__body`;let c=document.createElement(`div`);c.className=`storybook-color-palettes__section`;let l=document.createElement(`p`);l.className=`storybook-color-palettes__section-title`,l.textContent=`Color Palettes (Primitives)`,c.appendChild(l);let u=document.createElement(`div`);u.className=`storybook-color-palettes__card`;let d=document.createElement(`div`);d.className=`storybook-color-palettes__scales`,r.forEach(e=>d.appendChild(n(e))),u.appendChild(d);let f=document.createElement(`div`);return f.className=`storybook-color-palettes__accents`,i.forEach(e=>f.appendChild(n(e))),u.appendChild(f),c.appendChild(u),s.appendChild(c),t.appendChild(s),t}})),s,c,l,u;e((()=>{o(),s=`
## 概要

デザインシステムが使用するプリミティブカラーの一覧。
各コンポーネントはこのパレットを基盤とし、**セマンティックトークン**経由で参照する。
直接コードにカラー値をハードコードせず、必ずトークン変数を通じて使用すること。

---

## Color Palettes (Primitives)

### スケールカラー

10段階のグレースケールとブルースケール、およびニュートラル2色を定義する。

| カラー | ステップ | 主な用途の目安 |
|--------|----------|---------------|
| **Gray** | 50〜900 | テキスト・ボーダー・背景の階調に使用 |
| **Blue** | 50〜900 | プライマリアクション・インタラクション・リンク |
| **Neutral** | Black / White | ベースカラー。Black = \`#222222\`、White = \`#ffffff\` |

### アクセントカラー

状態・意味を表す各色は 500（濃色）と 100（淡色）の 2 段階で構成される。
Yellow のみ 500 のみ定義。

| カラー | ステップ | 主な用途の目安 |
|--------|----------|---------------|
| **Red** | 500 / 100 | エラー・危険・削除 |
| **Green** | 500 / 100 | 成功・完了・安全 |
| **Orange** | 500 / 100 | 警告・注意 |
| **Yellow** | 500 | 強調・ハイライト |

---

## 使用上の注意

- このパレットは**プリミティブ（原色）定義**であり、直接コンポーネントに使用しない
- 実装では \`color.brand.primary\` や \`color.status.error\` のようなセマンティックトークンを参照する
- 新しいカラーを追加する前に、既存パレットで代替できないか確認する
- Gray 800・700 および Blue 800・700 のステップは視認性確保のためラベルをミュートカラーで表示している（Figma準拠）
- 極淡色（100・50）のスウォッチには識別用の細いボーダーを付与している
`,c={title:`ColorPalettes`,tags:[`autodocs`],render:e=>a(e),parameters:{layout:`fullscreen`,docs:{description:{component:s}}},argTypes:{className:{control:`text`,description:`追加クラス名`,table:{defaultValue:{summary:``}}}},args:{className:``}},l={},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source},description:{story:`プリミティブカラーパレット全体を表示。
Gray / Blue（各 10 段階）、Neutral（Black / White）、
Red / Green / Orange / Yellow のアクセントカラーを一覧表示する。`,...l.parameters?.docs?.description}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,c as default};