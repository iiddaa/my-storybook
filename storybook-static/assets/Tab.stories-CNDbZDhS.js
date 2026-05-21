import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({variant:e=`primary`,tabs:t=[],activeIndex:n=0,onChange:r=null}={})=>{let i=n,a=document.createElement(`div`);return a.className=`storybook-tab storybook-tab--${e}`,a.setAttribute(`role`,`tablist`),t.forEach((e,t)=>{let n=document.createElement(`button`);n.type=`button`,n.setAttribute(`role`,`tab`),n.setAttribute(`aria-selected`,String(t===i));let o=[`storybook-tab__item`];if(t===i&&o.push(`storybook-tab__item--selected`),e.disabled&&o.push(`storybook-tab__item--disabled`),n.className=o.join(` `),e.disabled&&(n.disabled=!0,n.setAttribute(`aria-disabled`,`true`)),e.icon){let t=document.createElement(`span`);t.className=`storybook-tab__item-icon`,t.setAttribute(`aria-hidden`,`true`),t.innerHTML=e.icon,n.appendChild(t)}let s=document.createElement(`span`);s.className=`storybook-tab__item-label`,s.textContent=e.label,n.appendChild(s),e.disabled||n.addEventListener(`click`,()=>{if(t===i)return;let e=a.querySelector(`.storybook-tab__item--selected`);e&&(e.classList.remove(`storybook-tab__item--selected`),e.setAttribute(`aria-selected`,`false`)),n.classList.add(`storybook-tab__item--selected`),n.setAttribute(`aria-selected`,`true`),i=t,typeof r==`function`&&r(t)}),a.appendChild(n)}),a}})),i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **一つの機能やテーマの中で、表示する情報をシームレスに切り替え、目的の情報に素早くアクセスするためのもの。**

---

## 基本設計

Tab には \`primary\`（アンダーライン型）と \`secondary\`（背景塗り型）の2バリアントがある。

### Primary

タブ列の下に \`1px solid #EFF0F1\` のボーダーラインを敷き、各タブアイテムが \`border-bottom: 2px\` で状態を表現するアンダーライン型。

| 状態 | テキスト色 | 背景 | アンダーライン |
|------|----------|------|--------------|
| Default | \`#ADB2B8\` | なし | \`2px solid #EFF0F1\` |
| hover | \`#ADB2B8\` | \`#F7F7F8\`（radius 4px） | \`2px solid #EFF0F1\` |
| selected | \`#318BF7\` | なし | \`2px solid #318BF7\` |
| disabled | \`#ADB2B8\`（opacity 40%） | なし | \`2px solid #EFF0F1\` |

- パディング: \`16px 12px\`
- アイコンとテキストの gap: \`4px\`
- フォント: Hiragino Sans W6 / 14px

### Secondary

各タブアイテムが背景色で状態を表現する背景塗り型。アイコンあり・なしどちらにも対応。

| 状態 | テキスト色 | 背景 |
|------|----------|------|
| Default | \`#ADB2B8\` | なし |
| hover | \`#ADB2B8\` | \`#F7F7F8\` |
| Selected | \`#222222\` | \`#EAF3FE\` |
| Disabled | \`#ADB2B8\`（opacity 40%） | なし |

- パディング: \`12px\`
- border-radius: \`8px\`
- アイコンとテキストの gap: \`8px\`
- フォント: Hiragino Sans W6 / 14px

---

## 使用時に気をつけておくこと

- **デフォルトタブ以外は見られにくい**
  - タブは目的がある人だけが開いて見るため、デフォルトタブ以外は見られる確率が激減する。
  - 見られやすさを優先するならスクロールを採用する。
- **URLへの反映なし**
  - Tab を切り替えても URL に反映されない。必要に応じて、共有機能などを検討する。
  - （例：Notion のビューの共有機能）
`,a=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M11.333 2.333a1.886 1.886 0 0 1 2.667 2.667L5.667 13.333H3v-2.666L11.333 2.333Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,o=[{label:`テキスト`,disabled:!1},{label:`テキスト`,disabled:!1},{label:`テキスト`,disabled:!1}],s=[{label:`テキスト`,icon:a,disabled:!1},{label:`テキスト`,icon:a,disabled:!1},{label:`テキスト`,icon:a,disabled:!1}],c=[{label:`テキスト`,disabled:!1},{label:`テキスト`,disabled:!1},{label:`テキスト（無効）`,disabled:!0}],l={title:`Tab`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:i}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`],description:`アンダーライン型（primary）か背景塗り型（secondary）を選択`,table:{defaultValue:{summary:`primary`}}},tabs:{control:`object`,description:"タブ定義の配列。各要素は `{ label: string, icon?: string (SVG), disabled?: boolean }` の形式。"},activeIndex:{control:{type:`number`,min:0},description:`初期選択するタブのインデックス（0始まり）`,table:{defaultValue:{summary:`0`}}},onChange:{action:`tab-changed`,description:`タブ切り替え時のコールバック。引数は選択されたインデックス（number）。`,table:{category:`Events`}}}},u={args:{variant:`primary`,tabs:o,activeIndex:0}},d={name:`Primary / アイコンあり`,args:{variant:`primary`,tabs:s,activeIndex:0}},f={args:{variant:`secondary`,tabs:o,activeIndex:0}},p={name:`Secondary / アイコンあり`,args:{variant:`secondary`,tabs:s,activeIndex:0}},m={name:`disabled タブあり`,args:{variant:`primary`,tabs:c,activeIndex:0}},h={name:`Secondary / disabled タブあり`,args:{variant:`secondary`,tabs:c,activeIndex:0}},g={name:`バリアント一覧`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-direction: column; gap: 32px;`,[{label:`Primary（テキストのみ）`,variant:`primary`,tabs:o},{label:`Primary（アイコンあり）`,variant:`primary`,tabs:s},{label:`Secondary（テキストのみ）`,variant:`secondary`,tabs:o},{label:`Secondary（アイコンあり）`,variant:`secondary`,tabs:s}].forEach(({label:t,variant:r,tabs:i})=>{let a=document.createElement(`div`);a.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let o=document.createElement(`p`);o.style.cssText=`font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;`,o.textContent=t,a.appendChild(o),a.appendChild(n({variant:r,tabs:i,activeIndex:0})),e.appendChild(a)}),e}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    tabs: DEFAULT_TABS,
    activeIndex: 0
  }
}`,...u.parameters?.docs?.source},description:{story:`Primary（アンダーライン型）デフォルト。最もシンプルな使用例。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Primary / アイコンあり',
  args: {
    variant: 'primary',
    tabs: TABS_WITH_ICON,
    activeIndex: 0
  }
}`,...d.parameters?.docs?.source},description:{story:`Primary にアイコンを付けたパターン。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    tabs: DEFAULT_TABS,
    activeIndex: 0
  }
}`,...f.parameters?.docs?.source},description:{story:"Secondary（背景塗り型）。選択タブが `#EAF3FE` で強調される。",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / アイコンあり',
  args: {
    variant: 'secondary',
    tabs: TABS_WITH_ICON,
    activeIndex: 0
  }
}`,...p.parameters?.docs?.source},description:{story:`Secondary にアイコンを付けたパターン。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'disabled タブあり',
  args: {
    variant: 'primary',
    tabs: TABS_WITH_DISABLED,
    activeIndex: 0
  }
}`,...m.parameters?.docs?.source},description:{story:`disabled 状態のタブを含むパターン。クリックしても選択されない。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / disabled タブあり',
  args: {
    variant: 'secondary',
    tabs: TABS_WITH_DISABLED,
    activeIndex: 0
  }
}`,...h.parameters?.docs?.source},description:{story:`Secondary / disabled タブあり。`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'バリアント一覧',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';
    const sections = [{
      label: 'Primary（テキストのみ）',
      variant: 'primary',
      tabs: DEFAULT_TABS
    }, {
      label: 'Primary（アイコンあり）',
      variant: 'primary',
      tabs: TABS_WITH_ICON
    }, {
      label: 'Secondary（テキストのみ）',
      variant: 'secondary',
      tabs: DEFAULT_TABS
    }, {
      label: 'Secondary（アイコンあり）',
      variant: 'secondary',
      tabs: TABS_WITH_ICON
    }];
    sections.forEach(({
      label,
      variant,
      tabs
    }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const heading = document.createElement('p');
      heading.style.cssText = 'font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;';
      heading.textContent = label;
      section.appendChild(heading);
      section.appendChild(createTab({
        variant,
        tabs,
        activeIndex: 0
      }));
      wrapper.appendChild(section);
    });
    return wrapper;
  }
}`,...g.parameters?.docs?.source},description:{story:`Primary と Secondary を並べて比較するビュー。
Storybook の Controls は使用不可（render を直接定義）。`,...g.parameters?.docs?.description}}},_=[`Default`,`PrimaryWithIcon`,`Secondary`,`SecondaryWithIcon`,`WithDisabled`,`SecondaryWithDisabled`,`AllVariants`]}))();export{g as AllVariants,u as Default,d as PrimaryWithIcon,f as Secondary,h as SecondaryWithDisabled,p as SecondaryWithIcon,m as WithDisabled,_ as __namedExportsOrder,l as default};