import{n as e}from"./chunk-DnJy8xQt.js";var t=e((()=>{})),n,r,i=e((()=>{t(),n=`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
</svg>`,r=({label:e=`ラベル名`,variant:t=`red`,dismissible:r=!1,onDismiss:i=null}={})=>{let a=document.createElement(`div`);a.className=`storybook-chip storybook-chip--${t}`;let o=document.createElement(`span`);if(o.className=`storybook-chip__label`,o.textContent=e,a.appendChild(o),r){let e=document.createElement(`button`);e.type=`button`,e.className=`storybook-chip__close`,e.setAttribute(`aria-label`,`削除`),e.innerHTML=n,typeof i==`function`&&e.addEventListener(`click`,i),a.appendChild(e)}return a}})),a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{i(),a="\n## 概念\n\nどういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。\n\n> **オブジェクトに紐づく属性・状態・情報を直感的に表すもの**\n\n---\n\n## 基本設計\n\nChip は `height: 20px`・`border-radius: 99px`（pill 形状）・`font-size: 12px` の小さな情報タグ。\n\n### カラーパターン\n\n| バリアント | 背景 | ボーダー | 文字色 |\n|-----------|------|---------|-------|\n| `red` | 白 | `#eb4d38` | `#eb4d38` |\n| `green` | 白 | `#22ad7f` | `#22ad7f` |\n| `orange` | 白 | `#f78f43` | `#f78f43` |\n| `gray` | 白 | `#858c94` | `#858c94` |\n| `blue` | 白 | `#318bf7` | `#318bf7` |\n| `blue-filled` | `#eaf3fe` | なし | `#222` |\n| `gray-filled` | `#eff0f1` | なし | `#222` |\n\n### xボタンあり\n\n`dismissible: true` を指定すると、ラベル右に x ボタン（解除ボタン）が表示される。\n`onDismiss` コールバックを渡すことで削除動作を実装できる。\n\n---\n\n## Label / Chip / Badge の使い分け\n\n補助的な情報を小さく表示する3コンポーネントの役割の違い。\n\n| | Label | Chip | Badge |\n|---|---|---|---|\n| **表すもの** | オブジェクトの名称 | オブジェクトに紐づく状況・属性・情報 | 特に目立たせたいオブジェクトの状態 |\n| **例** | ButtonのLabel：「保存」「送信」 / FormのLabel：「氏名」「送信者」 | 状態：「完了」「進行中」「要対応」/ 属性：「必須」/ 情報：「クチコミ4.0以上」「横浜エリア」 | 未読件数 |\n\n---\n\n## 使用時に気をつけておくこと\n\n**タイトルラベル**\n\n- 「Label・Chip・Badgeの使い分け」を参照して適切に使い分ける。\n- プロダクトの中で一貫した命名・色・階層を保ち、ユーザーが直感的に理解できるようにする。\n  - 例：進行中は緑色、エラーは赤色\n- 意味の重複を避ける。\n",o={title:`Chip`,tags:[`autodocs`],render:e=>r(e),parameters:{layout:`padded`,docs:{description:{component:a}}},argTypes:{label:{control:`text`,description:`チップのテキスト`,table:{defaultValue:{summary:`ラベル名`}}},variant:{control:`select`,options:[`red`,`green`,`orange`,`gray`,`blue`,`blue-filled`,`gray-filled`],description:`カラーバリアント（Figma: propValue1 に対応）`,table:{defaultValue:{summary:`red`}}},dismissible:{control:`boolean`,description:`xボタン（解除ボタン）を表示するか`,table:{defaultValue:{summary:`false`}}},onDismiss:{action:`dismissed`,description:`xボタンクリック時のコールバック`}},args:{label:`ラベル名`,variant:`red`,dismissible:!1}},s={},c={parameters:{docs:{description:{story:`グリーンバリアント。進行中・完了などの肯定的な状態に使用（Figma: propValue1=グリーン）。`}}},args:{variant:`green`,label:`進行中`}},l={parameters:{docs:{description:{story:`オレンジバリアント。注意・保留などの状態に使用（Figma: propValue1=オレンジ）。`}}},args:{variant:`orange`,label:`要対応`}},u={parameters:{docs:{description:{story:`グレーバリアント。無効・ドラフトなど中立的な状態に使用（Figma: propValue1=グレー）。`}}},args:{variant:`gray`,label:`ドラフト`}},d={parameters:{docs:{description:{story:`ブルーアウトラインバリアント。カテゴリー・情報タグに使用（Figma: propValue1=ブルー）。`}}},args:{variant:`blue`,label:`カテゴリー`}},f={parameters:{docs:{description:{story:"ブルーベタ塗りバリアント。背景 `#eaf3fe`・テキスト `#222`（Figma: propValue1=ブルー_ベタ）。"}}},args:{variant:`blue-filled`,label:`ラベル名`}},p={parameters:{docs:{description:{story:"グレーベタ塗りバリアント。背景 `#eff0f1`・テキスト `#222`（Figma: propValue1=グレー_ベタ）。"}}},args:{variant:`gray-filled`,label:`ラベル名`}},m={parameters:{docs:{description:{story:"xボタン付き（Figma「基本設計 > xボタンあり」）。`dismissible: true` + `onDismiss` コールバックで削除動作を実装できる。"}}},args:{variant:`blue-filled`,label:`ラベル名`,dismissible:!0}},h={parameters:{docs:{description:{story:`全7カラーバリアントの比較表示（Figma「基本設計 > カラーパターン」）。`}}},render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display: flex; flex-wrap: wrap; gap: 8px; align-items: center;`,[{variant:`red`,label:`レッド`},{variant:`green`,label:`グリーン`},{variant:`orange`,label:`オレンジ`},{variant:`gray`,label:`グレー`},{variant:`blue`,label:`ブルー`},{variant:`blue-filled`,label:`ブルー（ベタ）`},{variant:`gray-filled`,label:`グレー（ベタ）`}].forEach(({variant:t,label:n})=>{e.appendChild(r({label:n,variant:t}))}),e}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`レッド。エラー・警告・要注意などの状態を表す。デフォルトバリアント。`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'グリーンバリアント。進行中・完了などの肯定的な状態に使用（Figma: propValue1=グリーン）。'
      }
    }
  },
  args: {
    variant: 'green',
    label: '進行中'
  }
}`,...c.parameters?.docs?.source},description:{story:`グリーン。進行中・完了など肯定的な状態を表す（例：「進行中」）。`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'オレンジバリアント。注意・保留などの状態に使用（Figma: propValue1=オレンジ）。'
      }
    }
  },
  args: {
    variant: 'orange',
    label: '要対応'
  }
}`,...l.parameters?.docs?.source},description:{story:`オレンジ。注意・保留など中間的な状態を表す（例：「要対応」）。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'グレーバリアント。無効・ドラフトなど中立的な状態に使用（Figma: propValue1=グレー）。'
      }
    }
  },
  args: {
    variant: 'gray',
    label: 'ドラフト'
  }
}`,...u.parameters?.docs?.source},description:{story:`グレー。無効・ドラフトなど中立・非アクティブな状態を表す。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ブルーアウトラインバリアント。カテゴリー・情報タグに使用（Figma: propValue1=ブルー）。'
      }
    }
  },
  args: {
    variant: 'blue',
    label: 'カテゴリー'
  }
}`,...d.parameters?.docs?.source},description:{story:`ブルー（アウトライン）。カテゴリーや情報タグを表す。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ブルーベタ塗りバリアント。背景 \`#eaf3fe\`・テキスト \`#222\`（Figma: propValue1=ブルー_ベタ）。'
      }
    }
  },
  args: {
    variant: 'blue-filled',
    label: 'ラベル名'
  }
}`,...f.parameters?.docs?.source},description:{story:`ブルー（ベタ塗り）。背景色（#eaf3fe）でカテゴリー・タグを強調する場合に使用。
xボタんあり（Figma「基本設計 > xボタンあり」）の既定バリアント。`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'グレーベタ塗りバリアント。背景 \`#eff0f1\`・テキスト \`#222\`（Figma: propValue1=グレー_ベタ）。'
      }
    }
  },
  args: {
    variant: 'gray-filled',
    label: 'ラベル名'
  }
}`,...p.parameters?.docs?.source},description:{story:`グレー（ベタ塗り）。背景色（#eff0f1）で非アクティブなタグを表示する場合に使用。`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'xボタン付き（Figma「基本設計 > xボタンあり」）。\`dismissible: true\` + \`onDismiss\` コールバックで削除動作を実装できる。'
      }
    }
  },
  args: {
    variant: 'blue-filled',
    label: 'ラベル名',
    dismissible: true
  }
}`,...m.parameters?.docs?.source},description:{story:`xボタン（解除ボタン）付き。ユーザーが能動的に解除・削除できるチップ。
Figma「基本設計 > xボタンあり」に対応。`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '全7カラーバリアントの比較表示（Figma「基本設計 > カラーパターン」）。'
      }
    }
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; align-items: center;';
    const variants = [{
      variant: 'red',
      label: 'レッド'
    }, {
      variant: 'green',
      label: 'グリーン'
    }, {
      variant: 'orange',
      label: 'オレンジ'
    }, {
      variant: 'gray',
      label: 'グレー'
    }, {
      variant: 'blue',
      label: 'ブルー'
    }, {
      variant: 'blue-filled',
      label: 'ブルー（ベタ）'
    }, {
      variant: 'gray-filled',
      label: 'グレー（ベタ）'
    }];
    variants.forEach(({
      variant,
      label
    }) => {
      wrapper.appendChild(createChip({
        label,
        variant
      }));
    });
    return wrapper;
  }
}`,...h.parameters?.docs?.source},description:{story:`全7バリアントの比較表示。カラーパターンを一目で確認できる。`,...h.parameters?.docs?.description}}},g=[`Default`,`Green`,`Orange`,`Gray`,`Blue`,`BlueFilled`,`GrayFilled`,`Dismissible`,`AllVariants`]}))();export{h as AllVariants,d as Blue,f as BlueFilled,s as Default,m as Dismissible,u as Gray,p as GrayFilled,c as Green,l as Orange,g as __namedExportsOrder,o as default};