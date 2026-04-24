import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({label:e=`ボタン`,variant:t=`Primary`,size:n=`M`,state:r=`Default`,onClick:i,className:a=``})=>{let o=document.createElement(`button`);return o.className=[`storybook-button`,`storybook-button--${t}`,`storybook-button--${n}`,a].filter(Boolean).join(` `),o.dataset.state=r,o.disabled=r===`Disable`,o.type=`button`,o.textContent=e,o.setAttribute(`aria-disabled`,r===`Disable`?`true`:`false`),i&&r!==`Disable`&&o.addEventListener(`click`,i),o}})),i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a=`
## 概念

「クリック」や「キーボードのエンター操作」によって、ユーザーの意図通りのアクションを起こすもの。

---

## 基本設計

### バリアント（variant）

| variant | 使いどころ |
|---------|-----------|
| **Primary** | 主要アクション |
| **Secondary** | 副次的なアクション。PrimaryだとUI上ノイズとなってしまう場合（ボタンよりも目立たせたいパーツがある、など） |
| **Tertiary** | PrimaryやSecondaryより優先度を下げたい場合。積極的に押させたいわけではないが、遷移できることは示唆したい場合 |
| **Ghost** | UI上、ボタン表現が視覚的ノイズとなってしまう場合 |
| **Negative** | ネガティブな操作。「削除」のような不可逆な変更や、「解除」のような何かができなくなる場合 |
| **Danger** | 主要アクション（破壊的・危険な操作） |

### サイズ（size）

| size | padding | font-weight | 用途 |
|------|---------|-------------|------|
| M | 8px 16px | W6（Bold） | 標準 |
| S | 4px 12px | W3（Regular） | スペースが限られる場面・優先度の低いアクション |

### 状態（state）

| state | 説明 |
|-------|------|
| Default | 通常状態 |
| Hover | ホバー状態（Storybookで強制表示する場合に使用） |
| Disable | 操作不可状態 |

---

## 使用上の注意

- クリックエリアが明確であること。
- テキストやアイコンによって、押すと何が起こるかが予測できること。
- テキストリンクとの使い分けを意識すること。
  - ボタンは「**何かをする**」ためのもの。リンクは「**どこかへいく**」ためのもの。
`,o={title:`Button`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`centered`,docs:{description:{component:a}}},argTypes:{label:{control:`text`,description:`ボタンに表示するテキスト`},variant:{control:{type:`select`},options:[`Primary`,`Secondary`,`Tertiary`,`Ghost`,`Negative`,`Danger`],description:`ボタン種別`,table:{defaultValue:{summary:`Primary`}}},size:{control:{type:`radio`},options:[`M`,`S`],description:`サイズ（M: 8px 16px / S: 4px 12px）`,table:{defaultValue:{summary:`M`}}},state:{control:{type:`radio`},options:[`Default`,`Hover`,`Disable`],description:`表示状態`,table:{defaultValue:{summary:`Default`}}},onClick:{action:`clicked`}},args:{label:`ボタン`,variant:`Primary`,size:`M`,state:`Default`,onClick:i()}},s={},c={args:{variant:`Secondary`}},l={args:{variant:`Tertiary`}},u={args:{variant:`Ghost`}},d={args:{variant:`Negative`}},f={args:{variant:`Danger`}},p={args:{size:`S`}},m={args:{state:`Hover`}},h={args:{state:`Disable`}},g={parameters:{docs:{description:{story:`全6バリアント × 2サイズ × 3状態（Default / Hover / Disable）の比較一覧。Figmaの基本設計テーブルに対応。`}},layout:`padded`},render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;flex-direction:column;gap:0;font-family:"Hiragino Sans",sans-serif;min-width:800px;`;let t=[`Primary`,`Secondary`,`Tertiary`,`Ghost`,`Negative`,`Danger`],r=[`M`,`S`],a=[`Default`,`Hover`,`Disable`],o=document.createElement(`div`);o.style.cssText=`display:grid;grid-template-columns:120px repeat(6,1fr);gap:0;background:#f7f7f8;border-bottom:1px solid #d6d9db;`;let s=document.createElement(`div`);return s.style.cssText=`padding:8px;border-right:1px solid #d6d9db;`,o.appendChild(s),r.forEach(e=>{a.forEach(t=>{let n=document.createElement(`div`);n.style.cssText=`padding:8px;font-size:11px;color:#858c94;text-align:center;border-right:1px solid #d6d9db;`,n.textContent=`${e} / ${t}`,o.appendChild(n)})}),e.appendChild(o),t.forEach(t=>{let o=document.createElement(`div`);o.style.cssText=`display:grid;grid-template-columns:120px repeat(6,1fr);gap:0;border-bottom:1px solid #d6d9db;`;let s=document.createElement(`div`);s.style.cssText=`padding:16px 8px;display:flex;align-items:center;font-size:12px;font-weight:600;color:#222;border-right:1px solid #d6d9db;`,s.textContent=t,o.appendChild(s),r.forEach(e=>{a.forEach(r=>{let a=document.createElement(`div`);a.style.cssText=`padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid #d6d9db;`;let s=n({label:`ボタン`,variant:t,size:e,state:r,onClick:i()});a.appendChild(s),o.appendChild(a)})}),e.appendChild(o)}),e}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`Primary / M / Default — 最もシンプルな使用例。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Secondary'
  }
}`,...c.parameters?.docs?.source},description:{story:`副次的なアクションに使用する。Primary と並べる場面で視覚的な優先度を下げたいとき。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Tertiary'
  }
}`,...l.parameters?.docs?.source},description:{story:`PrimaryやSecondaryより優先度を下げたい場合。積極的に押させたいわけではないが、遷移できることは示唆したい場合。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Ghost'
  }
}`,...u.parameters?.docs?.source},description:{story:`UI上、ボタン表現が視覚的ノイズとなってしまう場合に使用する。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Negative'
  }
}`,...d.parameters?.docs?.source},description:{story:`ネガティブな操作（削除・解除など）に使用する。不可逆な変更や何かができなくなる場合。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'Danger'
  }
}`,...f.parameters?.docs?.source},description:{story:`破壊的・危険な操作の主要アクションに使用する。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S'
  }
}`,...p.parameters?.docs?.source},description:{story:`Sサイズ。スペースが限られる場面や、優先度の低いアクションに使用する。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'Hover'
  }
}`,...m.parameters?.docs?.source},description:{story:`Hover 状態の強制表示。実際の画面ではカーソルを乗せたときに発生する。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'Disable'
  }
}`,...h.parameters?.docs?.source},description:{story:`Disable 状態。操作不可。cursor: not-allowed になり onClick は発火しない。`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全6バリアント × 2サイズ × 3状態（Default / Hover / Disable）の比較一覧。Figmaの基本設計テーブルに対応。'
      }
    },
    layout: 'padded'
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;flex-direction:column;gap:0;font-family:"Hiragino Sans",sans-serif;min-width:800px;';
    const variants = ['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Negative', 'Danger'];
    const sizes = ['M', 'S'];
    const states = ['Default', 'Hover', 'Disable'];

    // ヘッダー行
    const headerRow = document.createElement('div');
    headerRow.style.cssText = 'display:grid;grid-template-columns:120px repeat(6,1fr);gap:0;background:#f7f7f8;border-bottom:1px solid #d6d9db;';
    const emptyCell = document.createElement('div');
    emptyCell.style.cssText = 'padding:8px;border-right:1px solid #d6d9db;';
    headerRow.appendChild(emptyCell);
    sizes.forEach(size => {
      states.forEach(state => {
        const th = document.createElement('div');
        th.style.cssText = 'padding:8px;font-size:11px;color:#858c94;text-align:center;border-right:1px solid #d6d9db;';
        th.textContent = \`\${size} / \${state}\`;
        headerRow.appendChild(th);
      });
    });
    container.appendChild(headerRow);

    // バリアント行
    variants.forEach(variant => {
      const row = document.createElement('div');
      row.style.cssText = 'display:grid;grid-template-columns:120px repeat(6,1fr);gap:0;border-bottom:1px solid #d6d9db;';
      const labelCell = document.createElement('div');
      labelCell.style.cssText = 'padding:16px 8px;display:flex;align-items:center;font-size:12px;font-weight:600;color:#222;border-right:1px solid #d6d9db;';
      labelCell.textContent = variant;
      row.appendChild(labelCell);
      sizes.forEach(size => {
        states.forEach(state => {
          const cell = document.createElement('div');
          cell.style.cssText = 'padding:16px;display:flex;align-items:center;justify-content:center;border-right:1px solid #d6d9db;';
          const btn = createButton({
            label: 'ボタン',
            variant,
            size,
            state,
            onClick: fn()
          });
          cell.appendChild(btn);
          row.appendChild(cell);
        });
      });
      container.appendChild(row);
    });
    return container;
  }
}`,...g.parameters?.docs?.source},description:{story:`全6バリアント × MサイズとSサイズ × 3状態（Default / Hover / Disable）の一覧。
Figmaの「基本設計」テーブルに対応する。`,...g.parameters?.docs?.description}}},_=[`Default`,`Secondary`,`Tertiary`,`Ghost`,`Negative`,`Danger`,`SizeS`,`HoverState`,`DisableState`,`AllVariants`]}))();export{g as AllVariants,f as Danger,s as Default,h as DisableState,u as Ghost,m as HoverState,d as Negative,c as Secondary,p as SizeS,l as Tertiary,_ as __namedExportsOrder,o as default};