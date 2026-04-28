import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./Breadcrumbs-CH3i3g_4.js";var r=e((()=>{})),i,a=e((()=>{r(),t(),i=({title:e,description:t,breadcrumbs:r})=>{let i=document.createElement(`div`);if(i.className=`storybook-page-title`,i.setAttribute(`aria-label`,`ページタイトル`),r){let e=n({items:r.items??[],current:r.current??``});i.appendChild(e)}let a=document.createElement(`h1`);if(a.className=`storybook-page-title__title`,a.textContent=e,i.appendChild(a),t){let e=document.createElement(`p`);e.className=`storybook-page-title__description`,e.textContent=t,i.appendChild(e)}return i}})),o,s,c,l,u,d,f,p;e((()=>{a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **「現在表示しているものが何か」を把握しやすくするもの。**

---

## 基本設計

\`Breadcrumbs（任意）\` ＋ \`タイトル（必須）\` ＋ \`説明文（任意）\` で構成する。

| バリアント | 要素 |
|---|---|
| フル | Breadcrumbs ＋ タイトル ＋ 説明文 |
| タイトルのみ | タイトルのみ（最も基本的な形） |

---

## 使用時に気をつけておくこと

- 下層ページに進んだら、タイトル上部にBreadcrumbsを配置する。
- 必要な場合にのみ、説明文を付与する。基本はいらない。
`,c={title:`Layout/PageTitle`,tags:[`autodocs`],render:e=>i(e),parameters:{layout:`padded`,docs:{description:{component:s}}},argTypes:{title:{control:`text`,description:`ページタイトル（必須）`},description:{control:`text`,description:`説明文（任意）。必要な場合にのみ付与する。基本はいらない。`},breadcrumbs:{control:`object`,description:`Breadcrumbs設定（任意）。下層ページへ進んだ場合に設定する。items: 親階層の配列、current: 現在地テキスト`}},args:{title:`Page Title（例：P-Action株式会社）`,description:void 0,breadcrumbs:void 0}},l={},u={parameters:{docs:{description:{story:`下層ページに進んだら、タイトル上部にBreadcrumbsを配置する（Figmaガイドライン）。`}}},args:{breadcrumbs:{items:[{label:`店舗`,href:`#`,onClick:o()}],current:`現在地`}}},d={parameters:{docs:{description:{story:`説明文は必要な場合にのみ付与する（Figmaガイドライン）。基本は description なしが推奨。`}}},args:{breadcrumbs:{items:[{label:`店舗`,href:`#`,onClick:o()}],current:`現在地`},description:`説明文（例：以下のステップに沿って、設定してください。XXXXをしてください。）`}},f={parameters:{docs:{description:{story:`タイトルのみ・Breadcrumbs付き・フルの3パターン比較。`}}},render:()=>{let e=document.createElement(`div`);return e.style.cssText=`display:flex;flex-direction:column;gap:40px;padding:24px;`,[{label:`タイトルのみ`,args:{title:`Page Title（例：P-Action株式会社）`}},{label:`Breadcrumbs ＋ タイトル`,args:{title:`Page Title（例：P-Action株式会社）`,breadcrumbs:{items:[{label:`店舗`,href:`#`,onClick:o()}],current:`現在地`}}},{label:`Breadcrumbs ＋ タイトル ＋ 説明文`,args:{title:`Page Title（例：P-Action株式会社）`,breadcrumbs:{items:[{label:`店舗`,href:`#`,onClick:o()}],current:`現在地`},description:`説明文（例：以下のステップに沿って、設定してください。XXXXをしてください。）`}}].forEach(({label:t,args:n})=>{let r=document.createElement(`div`);r.style.cssText=`display:flex;flex-direction:column;gap:8px;`;let a=document.createElement(`span`);a.style.cssText=`font-family:sans-serif;font-size:12px;color:#888;`,a.textContent=t,r.appendChild(a),r.appendChild(i(n)),e.appendChild(r)}),e}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source},description:{story:`Figmaの基本設計「タイトルのみ」パターン。最も基本的な形。`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '下層ページに進んだら、タイトル上部にBreadcrumbsを配置する（Figmaガイドライン）。'
      }
    }
  },
  args: {
    breadcrumbs: {
      items: [{
        label: '店舗',
        href: '#',
        onClick: fn()
      }],
      current: '現在地'
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`下層ページへ進んだ際のパターン。タイトル上部にBreadcrumbsを配置する。`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '説明文は必要な場合にのみ付与する（Figmaガイドライン）。基本は description なしが推奨。'
      }
    }
  },
  args: {
    breadcrumbs: {
      items: [{
        label: '店舗',
        href: '#',
        onClick: fn()
      }],
      current: '現在地'
    },
    description: '説明文（例：以下のステップに沿って、設定してください。XXXXをしてください。）'
  }
}`,...d.parameters?.docs?.source},description:{story:`Figmaの基本設計「Breadcrumbs＋タイトル＋説明文」フルパターン。`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'タイトルのみ・Breadcrumbs付き・フルの3パターン比較。'
      }
    }
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = 'display:flex;flex-direction:column;gap:40px;padding:24px;';
    const patterns = [{
      label: 'タイトルのみ',
      args: {
        title: 'Page Title（例：P-Action株式会社）'
      }
    }, {
      label: 'Breadcrumbs ＋ タイトル',
      args: {
        title: 'Page Title（例：P-Action株式会社）',
        breadcrumbs: {
          items: [{
            label: '店舗',
            href: '#',
            onClick: fn()
          }],
          current: '現在地'
        }
      }
    }, {
      label: 'Breadcrumbs ＋ タイトル ＋ 説明文',
      args: {
        title: 'Page Title（例：P-Action株式会社）',
        breadcrumbs: {
          items: [{
            label: '店舗',
            href: '#',
            onClick: fn()
          }],
          current: '現在地'
        },
        description: '説明文（例：以下のステップに沿って、設定してください。XXXXをしてください。）'
      }
    }];
    patterns.forEach(({
      label,
      args
    }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
      const caption = document.createElement('span');
      caption.style.cssText = 'font-family:sans-serif;font-size:12px;color:#888;';
      caption.textContent = label;
      row.appendChild(caption);
      row.appendChild(createPageTitle(args));
      container.appendChild(row);
    });
    return container;
  }
}`,...f.parameters?.docs?.source},description:{story:`Figmaの基本設計に沿った全バリアントの比較一覧。`,...f.parameters?.docs?.description}}},p=[`Default`,`WithBreadcrumbs`,`Full`,`AllPatterns`]}))();export{f as AllPatterns,l as Default,d as Full,u as WithBreadcrumbs,p as __namedExportsOrder,c as default};