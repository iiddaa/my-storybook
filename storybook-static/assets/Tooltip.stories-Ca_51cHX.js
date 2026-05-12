import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({text:e=`テキスト`,id:t=null}={})=>{let n=document.createElement(`div`);n.className=`storybook-tooltip`,n.setAttribute(`role`,`tooltip`),t&&(n.id=t);let r=document.createElement(`p`);return r.className=`storybook-tooltip__text`,r.textContent=e,n.appendChild(r),n}})),i,a,o,s,c,l,u,d;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **マウスホバー時にのみ、簡易的な説明を提供するもの。認知負荷を軽減できる。**

---

## 基本設計

- 横幅の最大値は **320px**
- 縦幅の最大値は **10行分（196px）**

| 要素 | 仕様 |
|------|------|
| 背景 | \`#fff\` |
| ボーダー | \`1px solid #d6d9db\` |
| 影 | \`0px 2px 5px rgba(0,0,0,0.15)\` |
| padding | \`8px\` |
| border-radius | \`4px\` |
| テキスト | Hiragino Sans W3 / 12px / \`#222\` / line-height 1.5 |

---

## 使用時に気をつけておくこと

- 必要なときにだけ補足情報を示す
- 内容はなるべく短く明確にする
- 表示タイミング（トリガー）はプロダクト内で統一する
- アクセシビリティを考慮して、読み上げ可能にしておく

---

## 配置ルール

オブジェクトから **4px** あけて配置する。
位置は対象オブジェクトに対して、**上か下の中央揃え**。ただし、理由がある場合は例外も認める。

### 実装例

\`\`\`js
// 対象要素にツールチップIDを紐づける（アクセシビリティ）
trigger.setAttribute('aria-describedby', 'my-tooltip');
const tooltip = createTooltip({ text: '補足説明', id: 'my-tooltip' });

// position: absolute で配置（上に4px離す）
tooltip.style.cssText = 'position: absolute; bottom: calc(100% + 4px); left: 50%; transform: translateX(-50%);';

// マウスホバーで表示/非表示
tooltip.style.display = 'none';
trigger.addEventListener('mouseenter', () => tooltip.style.display = 'block');
trigger.addEventListener('mouseleave', () => tooltip.style.display = 'none');
\`\`\`

### 配置例

| 例 | 説明 |
|----|------|
| ラベルテキストのマウスホバー | 省略されたテキストの上にフル文字列を表示 |
| アイコンのマウスホバー | アイコンの上または下に機能説明を表示 |
| 補足ヘルプアイコンのマウスホバー | \`?\` アイコンの横に入力ガイドを表示 |
`,a={title:`Tooltip`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:i}}},argTypes:{text:{control:`text`,description:`ツールチップに表示するテキスト`,table:{defaultValue:{summary:`テキスト`}}},id:{control:`text`,description:`role="tooltip" の参照用ID。トリガー要素の aria-describedby に指定して読み上げ対応する`,table:{defaultValue:{summary:`null`}}}},args:{text:`テキスト`,id:``}},o={},s={parameters:{docs:{description:{story:`テキストが長い場合。max-width 320px で折り返す。Figma「テキストが長い場合」バリエーション。`}}},args:{text:`テキストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合`}},c={parameters:{docs:{description:{story:`Figma「基本設計」の2パターン（デフォルト / テキストが長い場合）を縦並びで比較。`}}},render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-direction: column; gap: 16px;`,[{label:`デフォルト`,text:`テキスト`},{label:`テキストが長い場合`,text:`テキストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合`}].forEach(({label:t,text:r})=>{let i=document.createElement(`div`);i.style.cssText=`display: flex; flex-direction: column; gap: 6px;`;let a=document.createElement(`span`);a.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;`,a.textContent=t,i.appendChild(a),i.appendChild(n({text:r})),e.appendChild(i)}),e}},l={parameters:{docs:{description:{story:"ホバーで表示/非表示するデモ。`position: absolute` ＋ `bottom: calc(100% + 4px)` で上に配置している（Figma 配置ルール：4px 離す）。"}}},render:()=>{let e=document.createElement(`div`);e.style.cssText=`display: inline-flex; flex-direction: column; align-items: flex-start; gap: 40px; padding: 60px 24px 24px;`;let t=document.createElement(`div`);t.style.cssText=`display: flex; flex-direction: column; gap: 6px;`;let r=document.createElement(`span`);r.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;`,r.textContent=`上に配置（基本）`;let i=document.createElement(`div`);i.style.cssText=`position: relative; display: inline-block;`;let a=n({text:`補足説明テキスト`,id:`demo-tooltip-top`});a.style.cssText=`position: absolute; bottom: calc(100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; display: none;`;let o=document.createElement(`button`);o.type=`button`,o.style.cssText=[`font-family: 'Hiragino Sans', sans-serif`,`font-weight: 300`,`font-size: 14px`,`line-height: 1.5`,`color: #222`,`background-color: #fff`,`border: 1px solid #d6d9db`,`border-radius: 4px`,`padding: 8px 16px`,`cursor: pointer`].join(`; `),o.textContent=`ここにホバー`,o.setAttribute(`aria-describedby`,`demo-tooltip-top`),o.addEventListener(`mouseenter`,()=>{a.style.display=`block`}),o.addEventListener(`mouseleave`,()=>{a.style.display=`none`}),i.appendChild(a),i.appendChild(o),t.appendChild(r),t.appendChild(i),e.appendChild(t);let s=document.createElement(`div`);s.style.cssText=`display: flex; flex-direction: column; gap: 6px;`;let c=document.createElement(`span`);c.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;`,c.textContent=`下に配置`;let l=document.createElement(`div`);l.style.cssText=`position: relative; display: inline-block;`;let u=n({text:`補足説明テキスト`,id:`demo-tooltip-bottom`});u.style.cssText=`position: absolute; top: calc(100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; display: none;`;let d=document.createElement(`button`);return d.type=`button`,d.style.cssText=o.style.cssText,d.textContent=`ここにホバー`,d.setAttribute(`aria-describedby`,`demo-tooltip-bottom`),d.addEventListener(`mouseenter`,()=>{u.style.display=`block`}),d.addEventListener(`mouseleave`,()=>{u.style.display=`none`}),l.appendChild(d),l.appendChild(u),s.appendChild(c),s.appendChild(l),e.appendChild(s),e}},u={parameters:{docs:{description:{story:`Figma「配置ルール」の配置例3種（ラベルテキストのホバー / アイコンのホバー / 補足ヘルプアイコンのホバー）。各トリガーにマウスオーバーすると確認できる。`}}},render:()=>{let e=(e,t,n=`top`)=>{let r=document.createElement(`div`);return r.style.cssText=`position: relative; display: inline-flex;`,n===`top`?t.style.cssText=`position: absolute; bottom: calc(100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; display: none; z-index: 10;`:t.style.cssText=`position: absolute; top: calc(100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; display: none; z-index: 10;`,e.addEventListener(`mouseenter`,()=>{t.style.display=`block`}),e.addEventListener(`mouseleave`,()=>{t.style.display=`none`}),r.appendChild(t),r.appendChild(e),r},t=document.createElement(`div`);t.style.cssText=`display: flex; flex-direction: column; gap: 40px; padding: 20px;`;let r=document.createElement(`div`);r.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let i=document.createElement(`span`);i.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65;`,i.textContent=`例：ラベルテキストのマウスホバー`;let a=document.createElement(`span`);a.style.cssText=[`font-family: 'Hiragino Sans', sans-serif`,`font-weight: 300`,`font-size: 14px`,`line-height: 1.5`,`color: #222`,`max-width: 120px`,`overflow: hidden`,`text-overflow: ellipsis`,`white-space: nowrap`,`cursor: default`,`display: block`].join(`; `),a.textContent=`【もんじゃ焼】オリジナル京風塩もんじゃ`;let o=e(a,n({text:`【もんじゃ焼】オリジナル京風塩もんじゃ`,id:`tt-label`}),`top`);r.appendChild(i),r.appendChild(o),t.appendChild(r);let s=document.createElement(`div`);s.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let c=document.createElement(`span`);c.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65;`,c.textContent=`例：アイコンのマウスホバー`;let l=document.createElement(`button`);l.type=`button`,l.style.cssText=`display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; padding: 0; background: none; border: none; cursor: pointer;`,l.innerHTML=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="2.5" stroke="#858c94" stroke-width="1.5"/>
      <path d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.22 3.22L4.28 4.28M11.72 11.72L12.78 12.78M3.22 12.78L4.28 11.72M11.72 4.28L12.78 3.22" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,l.setAttribute(`aria-label`,`設定`);let u=e(l,n({text:`設定`,id:`tt-icon`}),`top`);s.appendChild(c),s.appendChild(u),t.appendChild(s);let d=document.createElement(`div`);d.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let f=document.createElement(`span`);f.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65;`,f.textContent=`例：補足ヘルプアイコンのマウスホバー`;let p=document.createElement(`div`);p.style.cssText=`display: flex; align-items: center; gap: 4px;`;let m=document.createElement(`span`);m.style.cssText=`font-family: 'Hiragino Sans', sans-serif; font-size: 14px; font-weight: 600; color: #222;`,m.textContent=`店舗名`;let h=document.createElement(`button`);h.type=`button`,h.style.cssText=`display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; padding: 0; background: none; border: none; cursor: pointer;`,h.innerHTML=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="#858c94" stroke-width="1.5"/>
      <path d="M6.5 6.5C6.5 5.67 7.17 5 8 5C8.83 5 9.5 5.67 9.5 6.5C9.5 7.33 8.83 8 8 8V9" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="8" cy="11" r="0.75" fill="#858c94"/>
    </svg>`,h.setAttribute(`aria-label`,`ヘルプ`);let g=e(h,n({text:`店舗の名前を入力してください`,id:`tt-help`}),`top`);return p.appendChild(m),p.appendChild(g),d.appendChild(f),d.appendChild(p),t.appendChild(d),t}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source},description:{story:`デフォルト。短いテキストのツールチップ。Figma「基本設計 / デフォルト」に対応。`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'テキストが長い場合。max-width 320px で折り返す。Figma「テキストが長い場合」バリエーション。'
      }
    }
  },
  args: {
    text: 'テキストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合'
  }
}`,...s.parameters?.docs?.source},description:{story:`テキストが長い場合。最大幅 320px に達すると折り返す。
Figma「基本設計 / テキストが長い場合」に対応。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma「基本設計」の2パターン（デフォルト / テキストが長い場合）を縦並びで比較。'
      }
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';
    const variants = [{
      label: 'デフォルト',
      text: 'テキスト'
    }, {
      label: 'テキストが長い場合',
      text: 'テキストが長い場合テキストが長い場合テキストが長い場合テキストが長い場合'
    }];
    variants.forEach(({
      label,
      text
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';
      const labelEl = document.createElement('span');
      labelEl.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;";
      labelEl.textContent = label;
      row.appendChild(labelEl);
      row.appendChild(createTooltip({
        text
      }));
      wrapper.appendChild(row);
    });
    return wrapper;
  }
}`,...c.parameters?.docs?.source},description:{story:`Figma「基本設計」のデフォルトとテキストが長い場合を並べて比較。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ホバーで表示/非表示するデモ。\`position: absolute\` ＋ \`bottom: calc(100% + 4px)\` で上に配置している（Figma 配置ルール：4px 離す）。'
      }
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: inline-flex; flex-direction: column; align-items: flex-start; gap: 40px; padding: 60px 24px 24px;';

    // ── 上配置の例 ──
    const topExample = document.createElement('div');
    topExample.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';
    const topLabel = document.createElement('span');
    topLabel.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;";
    topLabel.textContent = '上に配置（基本）';
    const topContainer = document.createElement('div');
    topContainer.style.cssText = 'position: relative; display: inline-block;';
    const topTooltip = createTooltip({
      text: '補足説明テキスト',
      id: 'demo-tooltip-top'
    });
    topTooltip.style.cssText = 'position: absolute; bottom: calc(100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; display: none;';
    const topBtn = document.createElement('button');
    topBtn.type = 'button';
    topBtn.style.cssText = ["font-family: 'Hiragino Sans', sans-serif", 'font-weight: 300', 'font-size: 14px', 'line-height: 1.5', 'color: #222', 'background-color: #fff', 'border: 1px solid #d6d9db', 'border-radius: 4px', 'padding: 8px 16px', 'cursor: pointer'].join('; ');
    topBtn.textContent = 'ここにホバー';
    topBtn.setAttribute('aria-describedby', 'demo-tooltip-top');
    topBtn.addEventListener('mouseenter', () => {
      topTooltip.style.display = 'block';
    });
    topBtn.addEventListener('mouseleave', () => {
      topTooltip.style.display = 'none';
    });
    topContainer.appendChild(topTooltip);
    topContainer.appendChild(topBtn);
    topExample.appendChild(topLabel);
    topExample.appendChild(topContainer);
    wrapper.appendChild(topExample);

    // ── 下配置の例 ──
    const bottomExample = document.createElement('div');
    bottomExample.style.cssText = 'display: flex; flex-direction: column; gap: 6px;';
    const bottomLabel = document.createElement('span');
    bottomLabel.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;";
    bottomLabel.textContent = '下に配置';
    const bottomContainer = document.createElement('div');
    bottomContainer.style.cssText = 'position: relative; display: inline-block;';
    const bottomTooltip = createTooltip({
      text: '補足説明テキスト',
      id: 'demo-tooltip-bottom'
    });
    bottomTooltip.style.cssText = 'position: absolute; top: calc(100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; display: none;';
    const bottomBtn = document.createElement('button');
    bottomBtn.type = 'button';
    bottomBtn.style.cssText = topBtn.style.cssText;
    bottomBtn.textContent = 'ここにホバー';
    bottomBtn.setAttribute('aria-describedby', 'demo-tooltip-bottom');
    bottomBtn.addEventListener('mouseenter', () => {
      bottomTooltip.style.display = 'block';
    });
    bottomBtn.addEventListener('mouseleave', () => {
      bottomTooltip.style.display = 'none';
    });
    bottomContainer.appendChild(bottomBtn);
    bottomContainer.appendChild(bottomTooltip);
    bottomExample.appendChild(bottomLabel);
    bottomExample.appendChild(bottomContainer);
    wrapper.appendChild(bottomExample);
    return wrapper;
  }
}`,...l.parameters?.docs?.source},description:{story:`マウスホバーで表示/非表示する実際の動作デモ。
ツールチップはトリガー要素の上（4px 離れた位置）に表示される。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma「配置ルール」の配置例3種（ラベルテキストのホバー / アイコンのホバー / 補足ヘルプアイコンのホバー）。各トリガーにマウスオーバーすると確認できる。'
      }
    }
  },
  render: () => {
    const HELP_ICON = \`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="#858c94" stroke-width="1.5"/>
      <path d="M6.5 6.5C6.5 5.67 7.17 5 8 5C8.83 5 9.5 5.67 9.5 6.5C9.5 7.33 8.83 8 8 8V9" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="8" cy="11" r="0.75" fill="#858c94"/>
    </svg>\`;
    const SETTINGS_ICON = \`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="2.5" stroke="#858c94" stroke-width="1.5"/>
      <path d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.22 3.22L4.28 4.28M11.72 11.72L12.78 12.78M3.22 12.78L4.28 11.72M11.72 4.28L12.78 3.22" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
    </svg>\`;
    const makeHoverTooltip = (trigger, tooltip, position = 'top') => {
      const container = document.createElement('div');
      container.style.cssText = 'position: relative; display: inline-flex;';
      if (position === 'top') {
        tooltip.style.cssText = 'position: absolute; bottom: calc(100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; display: none; z-index: 10;';
      } else {
        tooltip.style.cssText = 'position: absolute; top: calc(100% + 4px); left: 50%; transform: translateX(-50%); white-space: nowrap; display: none; z-index: 10;';
      }
      trigger.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
      });
      trigger.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
      container.appendChild(tooltip);
      container.appendChild(trigger);
      return container;
    };
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 40px; padding: 20px;';

    // ── 例1: ラベルテキストのマウスホバー ──
    const ex1 = document.createElement('div');
    ex1.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    const ex1Label = document.createElement('span');
    ex1Label.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65;";
    ex1Label.textContent = '例：ラベルテキストのマウスホバー';
    const truncatedText = document.createElement('span');
    truncatedText.style.cssText = ["font-family: 'Hiragino Sans', sans-serif", 'font-weight: 300', 'font-size: 14px', 'line-height: 1.5', 'color: #222', 'max-width: 120px', 'overflow: hidden', 'text-overflow: ellipsis', 'white-space: nowrap', 'cursor: default', 'display: block'].join('; ');
    truncatedText.textContent = '【もんじゃ焼】オリジナル京風塩もんじゃ';
    const ex1Container = makeHoverTooltip(truncatedText, createTooltip({
      text: '【もんじゃ焼】オリジナル京風塩もんじゃ',
      id: 'tt-label'
    }), 'top');
    ex1.appendChild(ex1Label);
    ex1.appendChild(ex1Container);
    wrapper.appendChild(ex1);

    // ── 例2: アイコンのマウスホバー ──
    const ex2 = document.createElement('div');
    ex2.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    const ex2Label = document.createElement('span');
    ex2Label.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65;";
    ex2Label.textContent = '例：アイコンのマウスホバー';
    const iconBtn = document.createElement('button');
    iconBtn.type = 'button';
    iconBtn.style.cssText = 'display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; padding: 0; background: none; border: none; cursor: pointer;';
    iconBtn.innerHTML = SETTINGS_ICON;
    iconBtn.setAttribute('aria-label', '設定');
    const ex2Container = makeHoverTooltip(iconBtn, createTooltip({
      text: '設定',
      id: 'tt-icon'
    }), 'top');
    ex2.appendChild(ex2Label);
    ex2.appendChild(ex2Container);
    wrapper.appendChild(ex2);

    // ── 例3: 補足ヘルプアイコンのマウスホバー ──
    const ex3 = document.createElement('div');
    ex3.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
    const ex3Label = document.createElement('span');
    ex3Label.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #515a65;";
    ex3Label.textContent = '例：補足ヘルプアイコンのマウスホバー';
    const fieldRow = document.createElement('div');
    fieldRow.style.cssText = 'display: flex; align-items: center; gap: 4px;';
    const fieldLabel = document.createElement('span');
    fieldLabel.style.cssText = "font-family: 'Hiragino Sans', sans-serif; font-size: 14px; font-weight: 600; color: #222;";
    fieldLabel.textContent = '店舗名';
    const helpIcon = document.createElement('button');
    helpIcon.type = 'button';
    helpIcon.style.cssText = 'display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; padding: 0; background: none; border: none; cursor: pointer;';
    helpIcon.innerHTML = HELP_ICON;
    helpIcon.setAttribute('aria-label', 'ヘルプ');
    const helpContainer = makeHoverTooltip(helpIcon, createTooltip({
      text: '店舗の名前を入力してください',
      id: 'tt-help'
    }), 'top');
    fieldRow.appendChild(fieldLabel);
    fieldRow.appendChild(helpContainer);
    ex3.appendChild(ex3Label);
    ex3.appendChild(fieldRow);
    wrapper.appendChild(ex3);
    return wrapper;
  }
}`,...u.parameters?.docs?.source},description:{story:`Figma「配置ルール」に示された3種類の配置例。
ラベルテキスト / アイコン / 補足ヘルプアイコンへのホバー。`,...u.parameters?.docs?.description}}},d=[`Default`,`LongText`,`AllVariants`,`WithHoverDemo`,`PlacementExamples`]}))();export{c as AllVariants,o as Default,s as LongText,u as PlacementExamples,l as WithHoverDemo,d as __namedExportsOrder,a as default};