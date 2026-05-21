import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{}));function n(e,t){return new Date(e,t,0).getDate()}function r(e,t){return new Date(e,t-1,1).getDay()}var i,a,o,s,c,l=e((()=>{t(),i=[`日`,`月`,`火`,`水`,`木`,`金`,`土`],a=[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],o=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,s=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,c=({type:e=`date`,year:t=new Date().getFullYear(),month:c=new Date().getMonth()+1,selectedDate:l=null,selectedMonth:u=null,onSelect:d=null}={})=>{let f=t,p=c,m=l?{...l}:null,h=u?{...u}:null,g=document.createElement(`div`);g.className=`storybook-date-picker`;function _(e,t,n){let r=document.createElement(`div`);r.className=`storybook-date-picker__header`;let i=document.createElement(`button`);i.type=`button`,i.className=`storybook-date-picker__nav-btn`,i.innerHTML=o,i.setAttribute(`aria-label`,`前へ`),i.addEventListener(`click`,t);let a=document.createElement(`span`);a.className=`storybook-date-picker__label`,a.textContent=e;let c=document.createElement(`button`);return c.type=`button`,c.className=`storybook-date-picker__nav-btn`,c.innerHTML=s,c.setAttribute(`aria-label`,`次へ`),c.addEventListener(`click`,n),r.appendChild(i),r.appendChild(a),r.appendChild(c),r}function v(e){e.appendChild(_(`${f}年${p}月`,()=>{p===1?(f--,p=12):p--,b()},()=>{p===12?(f++,p=1):p++,b()}));let t=document.createElement(`div`);t.className=`storybook-date-picker__week`,i.forEach(e=>{let n=document.createElement(`span`);n.className=`storybook-date-picker__weekday`,n.textContent=e,t.appendChild(n)}),e.appendChild(t);let a=document.createElement(`div`);a.className=`storybook-date-picker__dates`,a.setAttribute(`role`,`grid`),a.setAttribute(`aria-label`,`${f}年${p}月`);let o=r(f,p);for(let e=0;e<o;e++){let e=document.createElement(`span`);e.className=`storybook-date-picker__item storybook-date-picker__item--empty`,e.setAttribute(`aria-hidden`,`true`),a.appendChild(e)}let s=n(f,p);for(let e=1;e<=s;e++){let t=document.createElement(`button`);t.type=`button`,t.className=`storybook-date-picker__item`,t.textContent=String(e),t.setAttribute(`role`,`gridcell`),t.setAttribute(`aria-label`,`${f}年${p}月${e}日`),m&&m.year===f&&m.month===p&&m.day===e&&(t.classList.add(`storybook-date-picker__item--selected`),t.setAttribute(`aria-selected`,`true`)),t.addEventListener(`click`,()=>{m={year:f,month:p,day:e},typeof d==`function`&&d({...m}),b()}),a.appendChild(t)}e.appendChild(a)}function y(e){e.appendChild(_(`${f}年`,()=>{f--,b()},()=>{f++,b()}));let t=document.createElement(`div`);t.className=`storybook-date-picker__months`,t.setAttribute(`role`,`grid`),t.setAttribute(`aria-label`,`${f}年`),a.forEach((e,n)=>{let r=n+1,i=document.createElement(`button`);i.type=`button`,i.className=`storybook-date-picker__item storybook-date-picker__item--month-cell`,i.textContent=e,i.setAttribute(`role`,`gridcell`),i.setAttribute(`aria-label`,`${f}年${r}月`),h&&h.year===f&&h.month===r&&(i.classList.add(`storybook-date-picker__item--selected`),i.setAttribute(`aria-selected`,`true`)),i.addEventListener(`click`,()=>{h={year:f,month:r},typeof d==`function`&&d({...h}),b()}),t.appendChild(i)}),e.appendChild(t)}function b(){g.innerHTML=``;let t=document.createElement(`div`);t.className=`storybook-date-picker__calendar`,e===`date`?v(t):y(t),g.appendChild(t)}return b(),g}})),u,d,f,p,m,h,g,_;e((()=>{l(),u=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **正確な日付情報をカレンダーから直観的に入力できるもの。有り得ない日付入力を防ぐ役割も担う。**

---

## 基本設計

DatePicker には \`date\`（日付選択）と \`month\`（月選択）の2タイプがある。

### 共通仕様

- カレンダー幅: 固定 **192px**
- ヘッダー: \`← YYYY年M月（またはYYYY年） →\` の space-between レイアウト
- アイテムの border-radius: **99px**（円形またはピル型）

### type=date（日付選択）

| 要素 | サイズ | 詳細 |
|------|--------|------|
| 日付アイテム | 24×24px | 7列×n行のグリッド、gap 4px |
| 曜日ヘッダー | 24px幅 × 7列 | 日〜土、font-size 12px、color \`#858C94\` |

### type=month（月選択）

| 要素 | サイズ | 詳細 |
|------|--------|------|
| 月アイテム | 45×24px | 4列×3行のグリッド、gap 4px |

### アイテムの状態

| 状態 | テキスト色 | 背景色 |
|------|----------|--------|
| 未選択（Default） | \`#222222\` | なし |
| hover | \`#222222\` | \`#F5F9FF\` |
| 選択済み（Selected） | \`#FFFFFF\` | \`#318BF7\` |
| disabled | \`#ADB2B8\` | なし |

---

## 使用時に気をつけておくこと

**Date Picker、手動入力、Drumroll の特性を把握し、適切に使い分ける。**

| シーン | Date Picker | 手動入力 | Drumroll |
|--------|------------|---------|---------|
| 現時点から近い日付指定（投稿予定日） | 💯 分かりやすい ※今日の日付と無効日が視覚的に表現されていると良い | 🔺 | 💯 シンプルな操作かつ直感的に選択しやすい |
| 数年前の日付指定（生年月日などの絶対的な日付） | 🔺 テキスト入力ができるならOK | ⭕️ | 💯 直感的に選択しやすい |
| 年だけ・月だけ・日だけの日付指定 | 🔺 専用カレンダーを別途作成すればOK | ⭕️ | ⭕️ |
| 期間の指定 | 💯 一気に選択できる | ⭕️ | ⭕️ |
| 時間の指定 | 🔺 専用カレンダーを別途作成すればOK | ⭕️ | ⭕️ |
`,d={title:`DatePicker`,tags:[`autodocs`],render:e=>c(e),parameters:{layout:`padded`,docs:{description:{component:u}}},argTypes:{type:{control:`select`,options:[`date`,`month`],description:`日付選択（date）か月選択（month）かを指定する`,table:{defaultValue:{summary:`date`}}},year:{control:{type:`number`,min:1900,max:2100},description:`表示する年`},month:{control:{type:`number`,min:1,max:12},description:`表示する月（1〜12）。type="date" のみ有効。`},selectedDate:{control:`object`,description:'選択済み日付。`{ year: number, month: number, day: number }` の形式。type="date" のみ有効。',table:{defaultValue:{summary:`null`}}},selectedMonth:{control:`object`,description:'選択済み月。`{ year: number, month: number }` の形式。type="month" のみ有効。',table:{defaultValue:{summary:`null`}}},onSelect:{action:`date-selected`,description:'日付または月を選択したときのコールバック。type="date" なら `{ year, month, day }`、type="month" なら `{ year, month }` を受け取る。',table:{category:`Events`}}}},f={args:{type:`date`,year:2025,month:9,selectedDate:null}},p={name:`Date / 選択済み`,args:{type:`date`,year:2025,month:9,selectedDate:{year:2025,month:9,day:15}}},m={name:`Month type`,args:{type:`month`,year:2025,selectedMonth:null}},h={name:`Month / 選択済み`,args:{type:`month`,year:2025,selectedMonth:{year:2025,month:9}}},g={name:`タイプ比較`,render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; gap: 48px; align-items: flex-start; flex-wrap: wrap;`,[{label:`type=date（日付選択）`,args:{type:`date`,year:2025,month:9,selectedDate:{year:2025,month:9,day:15}}},{label:`type=month（月選択）`,args:{type:`month`,year:2025,selectedMonth:{year:2025,month:9}}}].forEach(({label:t,args:n})=>{let r=document.createElement(`div`);r.style.cssText=`display: flex; flex-direction: column; gap: 8px;`;let i=document.createElement(`p`);i.style.cssText=`font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;`,i.textContent=t,r.appendChild(i),r.appendChild(c(n)),e.appendChild(r)}),e}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'date',
    year: 2025,
    month: 9,
    selectedDate: null
  }
}`,...f.parameters?.docs?.source},description:{story:`type=date のデフォルト表示。未選択状態。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Date / 選択済み',
  args: {
    type: 'date',
    year: 2025,
    month: 9,
    selectedDate: {
      year: 2025,
      month: 9,
      day: 15
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`type=date / 日付が選択済みの状態。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Month type',
  args: {
    type: 'month',
    year: 2025,
    selectedMonth: null
  }
}`,...m.parameters?.docs?.source},description:{story:`type=month のデフォルト表示。12ヶ月を4列×3行で表示する。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Month / 選択済み',
  args: {
    type: 'month',
    year: 2025,
    selectedMonth: {
      year: 2025,
      month: 9
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`type=month / 月が選択済みの状態。`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'タイプ比較',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; gap: 48px; align-items: flex-start; flex-wrap: wrap;';
    const sections = [{
      label: 'type=date（日付選択）',
      args: {
        type: 'date',
        year: 2025,
        month: 9,
        selectedDate: {
          year: 2025,
          month: 9,
          day: 15
        }
      }
    }, {
      label: 'type=month（月選択）',
      args: {
        type: 'month',
        year: 2025,
        selectedMonth: {
          year: 2025,
          month: 9
        }
      }
    }];
    sections.forEach(({
      label,
      args
    }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';
      const heading = document.createElement('p');
      heading.style.cssText = 'font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;';
      heading.textContent = label;
      section.appendChild(heading);
      section.appendChild(createDatePicker(args));
      wrapper.appendChild(section);
    });
    return wrapper;
  }
}`,...g.parameters?.docs?.source},description:{story:`Date と Month の2タイプを並べて比較するビュー。
Storybook の Controls は使用不可（render を直接定義）。`,...g.parameters?.docs?.description}}},_=[`Default`,`DateSelected`,`MonthType`,`MonthSelected`,`AllTypes`]}))();export{g as AllTypes,p as DateSelected,f as Default,h as MonthSelected,m as MonthType,_ as __namedExportsOrder,d as default};