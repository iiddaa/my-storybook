import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n={Progress:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15 9A6 6 0 1 1 12.24 4.08" stroke="#318bf7" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12.5 2.5V6.5H16.5" stroke="#318bf7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,Success:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="7.5" fill="#22a76a"/>
    <path d="M5.5 9L8 11.5L13 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,Error:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="7.5" fill="#eb4d38"/>
    <path d="M9 5.5V9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="9" cy="12.5" r="0.875" fill="white"/>
  </svg>`,Warning:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="7.5" fill="#f78f43"/>
    <path d="M9 5.5V9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="9" cy="12.5" r="0.875" fill="white"/>
  </svg>`,Notice:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2.25" y="3.75" width="13.5" height="11.5" rx="1.5" stroke="#858c94" stroke-width="1.5"/>
    <path d="M2.25 7.75H15.75" stroke="#858c94" stroke-width="1.5"/>
    <path d="M6 2.25V5.25" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 2.25V5.25" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`},r=({type:e=`Progress`,message:t=``,textLinkLabel:r=``,onTextLinkClick:i,className:a=``})=>{let o=document.createElement(`div`);o.className=[`storybook-information-panel`,`storybook-information-panel--${e}`,a].filter(Boolean).join(` `),o.setAttribute(`role`,`status`),o.setAttribute(`aria-live`,`polite`);let s=document.createElement(`span`);s.className=`storybook-information-panel__icon`,s.innerHTML=n[e]??n.Progress,o.appendChild(s);let c=document.createElement(`div`);c.className=`storybook-information-panel__body`;let l=document.createElement(`p`);if(l.className=`storybook-information-panel__message`,l.textContent=t,c.appendChild(l),r){let e=document.createElement(`a`);e.className=`storybook-information-panel__link`,e.href=`#`,e.textContent=r,i?e.addEventListener(`click`,e=>{e.preventDefault(),i(e)}):e.addEventListener(`click`,e=>e.preventDefault()),c.appendChild(e)}return o.appendChild(c),o}})),a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o=`
## 概念

ユーザーの操作を中断させずに、情報を強調してユーザーに伝えるもの。

---

## 基本設計

### タイプ（type）

| type | 背景色 | アイコン | 使いどころ |
|------|--------|----------|------------|
| **Progress** | blue/100（#eaf3fe） | Sync（青）| 処理が進行中であることを伝える |
| **Success** | green/100（#e4f5ef） | Check circle（緑）| 処理が正常に完了したことを伝える |
| **Error** | red/100（#fdf2f0） | ExclamationCircle（赤）| エラーが発生したことを伝える |
| **Warning** | orange/100（#fef4ed） | ExclamationCircle（オレンジ）| 注意を促す情報を伝える |
| **Notice** | gray/100（#eff0f1） | Calendar（グレー）| 一般的な通知・お知らせを伝える |

### テキストリンク（textLinkLabel）

メッセージに加えて、補足のリンクテキストを表示できる。
詳細ページや関連する操作への誘導に使用する。空の場合はリンクを非表示にする。

---

## 使用時に気をつけておくこと

- パターンを用意して、表示情報の種類に応じて使い分ける
- 情報過多にならないよう、表示個数をとどめる
- 文はできるだけ短くする。必要な場合には、リンクテキストも入れる
- ページ上部 or 対象のコンテンツ近くに配置する
`,s={title:`Components/InformationPanel`,tags:[`autodocs`],render:e=>r(e),parameters:{layout:`padded`,docs:{description:{component:o}}},argTypes:{type:{control:{type:`select`},options:[`Progress`,`Success`,`Error`,`Warning`,`Notice`],description:`情報の種類。背景色とアイコンが切り替わる`,table:{defaultValue:{summary:`Progress`}}},message:{control:`text`,description:`表示するメッセージ本文`},textLinkLabel:{control:`text`,description:`テキストリンクのラベル（空の場合はリンクを非表示）`,table:{defaultValue:{summary:``}}},onTextLinkClick:{action:`textLinkClicked`}},args:{type:`Progress`,message:`Googleで審査中です。公開には数日かかる場合があります。`,textLinkLabel:``,onTextLinkClick:a()}},c={},l={args:{type:`Progress`,message:`Googleで審査中です。公開には数日かかる場合があります。`}},u={args:{type:`Success`,message:`申請が完了しました。`}},d={args:{type:`Error`,message:`通信エラーが発生しました。時間をおいて再申請してください。`}},f={args:{type:`Warning`,message:`掲載終了まで残り3日です。`}},p={args:{type:`Notice`,message:`掲載期間が終了しました。`}},m={args:{type:`Progress`,message:`Googleで審査中です。公開には数日かかる場合があります。`,textLinkLabel:`履歴を見る`}},h={args:{type:`Success`,message:`申請が完了しました。`,textLinkLabel:`履歴を見る`}},g={args:{type:`Error`,message:`通信エラーが発生しました。時間をおいて再申請してください。`,textLinkLabel:`n件のエラー内容を確認する`}},_={args:{type:`Warning`,message:`掲載終了まで残り3日です。`,textLinkLabel:`履歴を見る`}},v={args:{type:`Notice`,message:`掲載期間が終了しました。`,textLinkLabel:`閉じる`}},y={parameters:{docs:{description:{story:`全5タイプ × テキストリンクあり・なしの比較一覧。Figmaの基本設計に対応。`}},layout:`padded`},render:()=>{let e=document.createElement(`div`);e.style.cssText=`display:flex;flex-direction:column;gap:0;font-family:"Hiragino Sans",sans-serif;max-width:720px;`;let t=[{type:`Progress`,message:`Googleで審査中です。公開には数日かかる場合があります。`,linkLabel:`履歴を見る`},{type:`Success`,message:`申請が完了しました。`,linkLabel:`履歴を見る`},{type:`Error`,message:`通信エラーが発生しました。時間をおいて再申請してください。`,linkLabel:`n件のエラー内容を確認する`},{type:`Warning`,message:`掲載終了まで残り3日です。`,linkLabel:`履歴を見る`},{type:`Notice`,message:`掲載期間が終了しました。`,linkLabel:`閉じる`}],n=e=>{let t=document.createElement(`p`);return t.style.cssText=`font-size:11px;color:#858c94;margin:16px 0 8px;font-family:"Hiragino Sans",sans-serif;font-weight:300;`,t.textContent=e,t};return e.appendChild(n(`テキストリンクなし`)),t.forEach(({type:t,message:n})=>{let i=document.createElement(`div`);i.style.cssText=`margin-bottom:4px;`,i.appendChild(r({type:t,message:n})),e.appendChild(i)}),e.appendChild(n(`テキストリンクあり`)),t.forEach(({type:t,message:n,linkLabel:i})=>{let o=document.createElement(`div`);o.style.cssText=`margin-bottom:4px;`,o.appendChild(r({type:t,message:n,textLinkLabel:i,onTextLinkClick:a()})),e.appendChild(o)}),e}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`Progress / テキストリンクなし — 最もシンプルな使用例。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Progress',
    message: 'Googleで審査中です。公開には数日かかる場合があります。'
  }
}`,...l.parameters?.docs?.source},description:{story:`処理が進行中の状態。審査・送信など完了待ちの場面で使用する。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Success',
    message: '申請が完了しました。'
  }
}`,...u.parameters?.docs?.source},description:{story:`処理が正常に完了した状態。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Error',
    message: '通信エラーが発生しました。時間をおいて再申請してください。'
  }
}`,...d.parameters?.docs?.source},description:{story:`エラーが発生した状態。原因と次の操作を簡潔に伝える。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Warning',
    message: '掲載終了まで残り3日です。'
  }
}`,...f.parameters?.docs?.source},description:{story:`注意を促す通知。ユーザーに確認や対応を促したい場合。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Notice',
    message: '掲載期間が終了しました。'
  }
}`,...p.parameters?.docs?.source},description:{story:`一般的な通知・お知らせ。状態変化や期限に関する情報など。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Progress',
    message: 'Googleで審査中です。公開には数日かかる場合があります。',
    textLinkLabel: '履歴を見る'
  }
}`,...m.parameters?.docs?.source},description:{story:`Progress + テキストリンク — 関連ページへの誘導が必要な場合。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Success',
    message: '申請が完了しました。',
    textLinkLabel: '履歴を見る'
  }
}`,...h.parameters?.docs?.source},description:{story:`Success + テキストリンク`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Error',
    message: '通信エラーが発生しました。時間をおいて再申請してください。',
    textLinkLabel: 'n件のエラー内容を確認する'
  }
}`,...g.parameters?.docs?.source},description:{story:`Error + テキストリンク — エラー詳細やヘルプへの誘導。`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Warning',
    message: '掲載終了まで残り3日です。',
    textLinkLabel: '履歴を見る'
  }
}`,..._.parameters?.docs?.source},description:{story:`Warning + テキストリンク`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Notice',
    message: '掲載期間が終了しました。',
    textLinkLabel: '閉じる'
  }
}`,...v.parameters?.docs?.source},description:{story:`Notice + テキストリンク`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全5タイプ × テキストリンクあり・なしの比較一覧。Figmaの基本設計に対応。'
      }
    },
    layout: 'padded'
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;flex-direction:column;gap:0;font-family:"Hiragino Sans",sans-serif;max-width:720px;';
    const types = [{
      type: 'Progress',
      message: 'Googleで審査中です。公開には数日かかる場合があります。',
      linkLabel: '履歴を見る'
    }, {
      type: 'Success',
      message: '申請が完了しました。',
      linkLabel: '履歴を見る'
    }, {
      type: 'Error',
      message: '通信エラーが発生しました。時間をおいて再申請してください。',
      linkLabel: 'n件のエラー内容を確認する'
    }, {
      type: 'Warning',
      message: '掲載終了まで残り3日です。',
      linkLabel: '履歴を見る'
    }, {
      type: 'Notice',
      message: '掲載期間が終了しました。',
      linkLabel: '閉じる'
    }];

    // セクションラベル
    const makeLabel = text => {
      const p = document.createElement('p');
      p.style.cssText = 'font-size:11px;color:#858c94;margin:16px 0 8px;font-family:"Hiragino Sans",sans-serif;font-weight:300;';
      p.textContent = text;
      return p;
    };
    container.appendChild(makeLabel('テキストリンクなし'));
    types.forEach(({
      type,
      message
    }) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'margin-bottom:4px;';
      wrap.appendChild(createInformationPanel({
        type,
        message
      }));
      container.appendChild(wrap);
    });
    container.appendChild(makeLabel('テキストリンクあり'));
    types.forEach(({
      type,
      message,
      linkLabel
    }) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'margin-bottom:4px;';
      wrap.appendChild(createInformationPanel({
        type,
        message,
        textLinkLabel: linkLabel,
        onTextLinkClick: fn()
      }));
      container.appendChild(wrap);
    });
    return container;
  }
}`,...y.parameters?.docs?.source},description:{story:`全5タイプ × テキストリンクあり・なしの一覧。
Figmaの「基本設計」に対応。`,...y.parameters?.docs?.description}}},b=[`Default`,`Progress`,`Success`,`Error`,`Warning`,`Notice`,`ProgressWithLink`,`SuccessWithLink`,`ErrorWithLink`,`WarningWithLink`,`NoticeWithLink`,`AllTypes`]}))();export{y as AllTypes,c as Default,d as Error,g as ErrorWithLink,p as Notice,v as NoticeWithLink,l as Progress,m as ProgressWithLink,u as Success,h as SuccessWithLink,f as Warning,_ as WarningWithLink,b as __namedExportsOrder,s as default};