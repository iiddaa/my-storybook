import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./BrandLogo-C-YA3Iw7.js";var r,i,a,o,s;e((()=>{t(),r=`
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **プロダクトのアイデンティティを示す象徴。**

---

## 基本設計

ロゴは「ワードマーク（上段）」と「タグライン（下段）」の2パーツで構成される。

| variant | 説明 |
|---|---|
| \`store-marketing\` | カンリー 店舗集客ロゴ |
| \`benefits\` | カンリー 福利厚生ロゴ |

サイズは 136×61px 固定（Figma準拠）。

---

## 使用時に気をつけておくこと

- 原則として画面の左上（グローバルナビゲーションの最上部）に固定する。
- 縦横比を変えたり、指定外の色に変更したりしてはいけない。
`,i={title:`DesignTokens/BrandLogo`,tags:[`autodocs`],render:e=>n(e),parameters:{layout:`padded`,docs:{description:{component:r}}},argTypes:{variant:{control:{type:`select`},options:[`store-marketing`,`benefits`],description:"ロゴ種別。`store-marketing`（店舗集客）または `benefits`（福利厚生）を指定する。"}},args:{variant:`store-marketing`}},a={parameters:{docs:{description:{story:`店舗集客プロダクト向けブランドロゴ。GlobalNavigation のロゴエリアで使用される。`}}},args:{variant:`store-marketing`}},o={parameters:{docs:{description:{story:`福利厚生プロダクト向けブランドロゴ。`}}},args:{variant:`benefits`}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '店舗集客プロダクト向けブランドロゴ。GlobalNavigation のロゴエリアで使用される。'
      }
    }
  },
  args: {
    variant: 'store-marketing'
  }
}`,...a.parameters?.docs?.source},description:{story:`カンリー 店舗集客ロゴ。グローバルナビゲーションのロゴエリアで使用する。`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '福利厚生プロダクト向けブランドロゴ。'
      }
    }
  },
  args: {
    variant: 'benefits'
  }
}`,...o.parameters?.docs?.source},description:{story:`カンリー 福利厚生ロゴ。`,...o.parameters?.docs?.description}}},s=[`StoreMarketing`,`Benefits`]}))();export{o as Benefits,a as StoreMarketing,s as __namedExportsOrder,i as default};