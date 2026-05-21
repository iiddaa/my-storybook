import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r=e((()=>{t(),n=({placement:e=`top`,title:t=``,description:n=``,buttonLabel:r=`OK`,image:i=null,imageHeight:a=null,onClose:o=null}={})=>{let s=document.createElement(`div`);s.className=`storybook-coach-mark storybook-coach-mark--${e}`,s.setAttribute(`role`,`dialog`),s.setAttribute(`aria-modal`,`false`);let c=document.createElement(`div`);c.className=`storybook-coach-mark__tail`,c.setAttribute(`aria-hidden`,`true`);let l=document.createElement(`div`);if(l.className=`storybook-coach-mark__card`,i){let e=document.createElement(`img`);e.className=`storybook-coach-mark__image`,e.src=i,e.alt=``,e.setAttribute(`aria-hidden`,`true`),a!==null&&(e.style.height=typeof a==`number`?`${a}px`:a),l.appendChild(e)}if(t){let e=document.createElement(`p`);e.className=`storybook-coach-mark__title`,e.textContent=t,l.appendChild(e)}if(n){let e=document.createElement(`p`);e.className=`storybook-coach-mark__description`,e.textContent=n,l.appendChild(e)}let u=document.createElement(`div`);u.className=`storybook-coach-mark__actions`;let d=document.createElement(`button`);return d.type=`button`,d.className=`storybook-coach-mark__button`,d.textContent=r,d.addEventListener(`click`,()=>{typeof o==`function`&&o()}),u.appendChild(d),l.appendChild(u),e===`bottom`||e===`right`?(s.appendChild(c),s.appendChild(l)):(s.appendChild(l),s.appendChild(c)),s}})),i,a,o,s,c,l,u,d,f,p;e((()=>{r(),i=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **新機能リリース時や、初めて機能を使うときに、それが画面のどこで操作できるかを示すもの。**

---

## 基本設計

- 横幅の最小値は **320px**、最大値は **480px**
- オブジェクトに対して上下左右のどれかで中央合わせ配置。**4px 離す**

### 配置バリエーション

| \`placement\` | 説明 | 矢印の向き |
|--------------|------|----------|
| \`top\` | ターゲットの上に表示 | ▼（下向き） |
| \`bottom\` | ターゲットの下に表示 | ▲（上向き） |
| \`left\` | ターゲットの左に表示 | ▶（右向き） |
| \`right\` | ターゲットの右に表示 | ◀（左向き） |

### カード構造

\`\`\`
[ 画像（省略可） ]
[ タイトル       Head/L/Bold 16px ]
[ 説明文         Body/M/Regular 14px ]
[              [ OK ボタン（右寄せ）] ]
\`\`\`

- カードの \`padding: 16px\`・\`gap: 12px\`・\`border-radius: 8px\`
- 画像の高さは任意（\`imageHeight\` prop で指定）。省略時は画像の自然な高さを使用する。
- シャドウ: \`drop-shadow(0px 2px 10px rgba(0,0,0,0.15))\`（矢印にも適用）
- ボタン: \`padding: 8px 16px\`・\`border-radius: 4px\`・背景 \`#318BF7\`・文字 \`#FFFFFF\`

---

## 使用時に気をつけておくこと

- **必要最小限の情報に絞る。**
- **学習段階に応じて、必要なタイミングでのみ表示する。**
- **同時に2つ以上の CoachMark を表示しない。**
  - CoachMark を閉じたら、別のが表示されるのはOK。連続表示は **3件まで**を推奨とする。
- **Tooltip / CoachMark / Popover を適切に使い分ける。**
`,a={title:`CoachMark`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`centered`,docs:{description:{component:i}}},argTypes:{placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`],description:`吹き出しの配置方向。ターゲットオブジェクトに対して上下左右を指定する。`,table:{defaultValue:{summary:`top`}}},title:{control:`text`,description:`タイトルテキスト`,table:{defaultValue:{summary:`新機能が利用できるようになりました`}}},description:{control:`text`,description:`説明文テキスト。改行は \\n で表現する。`,table:{defaultValue:{summary:`さっそく確認してみましょう。`}}},buttonLabel:{control:`text`,description:`ボタンのラベルテキスト`,table:{defaultValue:{summary:`OK`}}},image:{control:`text`,description:`画像URL（省略可）。指定するとカード上部に表示される。`,table:{defaultValue:{summary:`null`}}},imageHeight:{control:`text`,description:`画像の高さ（省略時は画像の自然な高さ）。数値（px）または文字列（"50%"）で指定する。`,table:{defaultValue:{summary:`null`}}},onClose:{action:`closed`,description:`ボタンクリック時のコールバック`,table:{category:`Events`}}}},o={args:{placement:`top`,title:`新機能が利用できるようになりました`,description:`さっそく確認してみましょう。`,buttonLabel:`OK`,image:null}},s={name:`bottom（下配置）`,args:{placement:`bottom`,title:`新機能が利用できるようになりました`,description:`さっそく確認してみましょう。`,buttonLabel:`OK`,image:null}},c={name:`left（左配置）`,args:{placement:`left`,title:`新機能が利用できるようになりました`,description:`さっそく確認してみましょう。`,buttonLabel:`OK`,image:null}},l={name:`right（右配置）`,args:{placement:`right`,title:`新機能が利用できるようになりました`,description:`さっそく確認してみましょう。`,buttonLabel:`OK`,image:null}},u={name:`画像あり`,args:{placement:`top`,title:`新機能「メニュー」が利用できるようになりました`,description:`全店舗メニューの一括管理・編集が可能です。
さっそく試してみましょう。`,buttonLabel:`OK`,image:`https://placehold.co/320x160/f7f7f8/858c94?text=Image`,imageHeight:null}},d={name:`説明文が長い場合`,args:{placement:`top`,title:`新機能「メニュー」が利用できるようになりました`,description:`全店舗メニューの一括管理・編集が可能です。
さっそく試してみましょう。
使い方を確認する場合は、ヘルプページをご参照ください。`,buttonLabel:`OK`,image:null}},f={name:`配置バリエーション一覧`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: grid; grid-template-columns: 1fr 1fr; gap: 48px; padding: 24px;`,[{placement:`top`,label:`top（上配置）`},{placement:`bottom`,label:`bottom（下配置）`},{placement:`left`,label:`left（左配置）`},{placement:`right`,label:`right（右配置）`}].forEach(({placement:t,label:r})=>{let i=document.createElement(`div`);i.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let a=document.createElement(`p`);a.style.cssText=`font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;`,a.textContent=r,i.appendChild(a),i.appendChild(n({placement:t,title:`新機能が利用できるようになりました`,description:`さっそく確認してみましょう。`,buttonLabel:`OK`})),e.appendChild(i)}),e}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'top',
    title: '新機能が利用できるようになりました',
    description: 'さっそく確認してみましょう。',
    buttonLabel: 'OK',
    image: null
  }
}`,...o.parameters?.docs?.source},description:{story:`top（上配置）: 最もシンプルな使用例。矢印が下向きに表示される。`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'bottom（下配置）',
  args: {
    placement: 'bottom',
    title: '新機能が利用できるようになりました',
    description: 'さっそく確認してみましょう。',
    buttonLabel: 'OK',
    image: null
  }
}`,...s.parameters?.docs?.source},description:{story:`bottom（下配置）: 矢印が上向きに表示される。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'left（左配置）',
  args: {
    placement: 'left',
    title: '新機能が利用できるようになりました',
    description: 'さっそく確認してみましょう。',
    buttonLabel: 'OK',
    image: null
  }
}`,...c.parameters?.docs?.source},description:{story:`left（左配置）: 矢印が右向きに表示される。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'right（右配置）',
  args: {
    placement: 'right',
    title: '新機能が利用できるようになりました',
    description: 'さっそく確認してみましょう。',
    buttonLabel: 'OK',
    image: null
  }
}`,...l.parameters?.docs?.source},description:{story:`right（右配置）: 矢印が左向きに表示される。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '画像あり',
  args: {
    placement: 'top',
    title: '新機能「メニュー」が利用できるようになりました',
    description: '全店舗メニューの一括管理・編集が可能です。\\nさっそく試してみましょう。',
    buttonLabel: 'OK',
    image: 'https://placehold.co/320x160/f7f7f8/858c94?text=Image',
    imageHeight: null
  }
}`,...u.parameters?.docs?.source},description:{story:`画像あり: カード上部に画像エリアが表示される。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '説明文が長い場合',
  args: {
    placement: 'top',
    title: '新機能「メニュー」が利用できるようになりました',
    description: '全店舗メニューの一括管理・編集が可能です。\\nさっそく試してみましょう。\\n使い方を確認する場合は、ヘルプページをご参照ください。',
    buttonLabel: 'OK',
    image: null
  }
}`,...d.parameters?.docs?.source},description:{story:`長文の説明文: 文字量が増えた場合のレイアウト確認。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '配置バリエーション一覧',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 48px; padding: 24px;';
    const placements = [{
      placement: 'top',
      label: 'top（上配置）'
    }, {
      placement: 'bottom',
      label: 'bottom（下配置）'
    }, {
      placement: 'left',
      label: 'left（左配置）'
    }, {
      placement: 'right',
      label: 'right（右配置）'
    }];
    placements.forEach(({
      placement,
      label
    }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const heading = document.createElement('p');
      heading.style.cssText = 'font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;';
      heading.textContent = label;
      section.appendChild(heading);
      section.appendChild(createCoachMark({
        placement,
        title: '新機能が利用できるようになりました',
        description: 'さっそく確認してみましょう。',
        buttonLabel: 'OK'
      }));
      wrapper.appendChild(section);
    });
    return wrapper;
  }
}`,...f.parameters?.docs?.source},description:{story:`4配置の比較ビュー。
Storybook の Controls は使用不可（render を直接定義）。`,...f.parameters?.docs?.description}}},p=[`Default`,`PlacementBottom`,`PlacementLeft`,`PlacementRight`,`WithImage`,`LongDescription`,`AllPlacements`]}))();export{f as AllPlacements,o as Default,d as LongDescription,s as PlacementBottom,c as PlacementLeft,l as PlacementRight,u as WithImage,p as __namedExportsOrder,a as default};