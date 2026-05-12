import { createSnackBar } from '../src/components/SnackBar';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" SnackBar ページより
// node-id: 252:12648
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **ユーザーの操作に対するフィードバックを、一時的に表示するコンポーネント。**

---

## 基本設計

| 要素 | 仕様 |
|------|------|
| 幅 | 720px（最小 360px） |
| 高さ | コンテンツに依存（padding: 12px 16px） |
| 角丸 | 4px |
| 影 | \`0px 2px 5px rgba(0,0,0,0.15)\` |
| レイアウト | アイコン（16px）＋ テキスト（flex:1）＋ 閉じるボタン（16px） |

### タイプ別カラー

| タイプ | 背景色 | アイコン色 |
|--------|--------|-----------|
| Progress | \`#eaf3fe\` | \`#318bf7\`（青） |
| Success | \`#e4f5ef\` | \`#22ad7f\`（緑） |
| Error | \`#fdf2f0\` | \`#eb4d38\`（赤） |
| Alert | \`#fef4ed\` | \`#f78f43\`（橙） |

---

## SnackBar / InformationPanel / Chip（ステータス）の使い分け

| | SnackBar | InformationPanel | Chip（ステータス） |
|---|---|---|---|
| 目的 | **操作への反応**を伝える | **補足情報**を画面内に常駐させる | **状態**をラベルで示す |
| 表示タイミング | 操作直後（一時的） | 常時（または条件付き） | 常時 |
| 表示位置 | 画面下部に浮かせる | コンテンツ内・インライン | テキストやカードの中 |
| 閉じる機能 | あり | なし | なし |

---

## 使用時に気をつけておくこと

- 一時的なフィードバックに使う。恒久的な情報は InformationPanel を使う。
- 複数の SnackBar を同時表示しない。最新のものが上書きするか、キューで管理する。
- 自動消去する場合は十分な表示時間（最低 3 秒以上）を確保する。
- \`linkText\` は「他 XX 件のエラー内容を確認」のような補足ナビゲーションに使用する。
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'SnackBar',
  tags: ['autodocs'],
  render: (args) => createSnackBar(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['progress', 'success', 'error', 'alert'],
      description: 'タイプ（色とアイコンが変化する）',
      table: { defaultValue: { summary: 'progress' } },
    },
    message: {
      control: 'text',
      description: 'メッセージ本文',
      table: { defaultValue: { summary: '' } },
    },
    linkText: {
      control: 'text',
      description: 'リンクテキスト（空の場合は非表示）',
      table: { defaultValue: { summary: '' } },
    },
    onClose: {
      action: 'closed',
      description: '閉じるボタンのコールバック',
    },
    onLinkClick: {
      action: 'link-clicked',
      description: 'リンククリックのコールバック',
    },
  },
  args: {
    type: 'progress',
    message: '処理中です。しばらくお待ちください。',
    linkText: '',
  },
};

// ─────────────────────────────────────────────────────────────
// Default（Progress）
// ─────────────────────────────────────────────────────────────
/** 進行中状態。ブルー背景・同期アイコン。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Success
// ─────────────────────────────────────────────────────────────
/**
 * 成功状態。グリーン背景・チェックサークルアイコン。
 * 操作が正常に完了したことをユーザーに伝える。
 */
export const Success = {
  parameters: {
    docs: {
      description: {
        story: '成功状態（`type="success"`）。グリーン背景・チェックサークルアイコン。',
      },
    },
  },
  args: {
    type: 'success',
    message: '保存しました。',
  },
};

// ─────────────────────────────────────────────────────────────
// Error
// ─────────────────────────────────────────────────────────────
/**
 * エラー状態。レッド背景・アラートサークルアイコン。
 * 操作が失敗したことをユーザーに伝える。
 */
export const Error = {
  parameters: {
    docs: {
      description: {
        story: 'エラー状態（`type="error"`）。レッド背景・アラートサークルアイコン。',
      },
    },
  },
  args: {
    type: 'error',
    message: '保存に失敗しました。',
  },
};

// ─────────────────────────────────────────────────────────────
// Alert
// ─────────────────────────────────────────────────────────────
/**
 * 警告状態。オレンジ背景・アラートサークルアイコン。
 * エラーより軽微な注意事項をユーザーに伝える。
 */
export const Alert = {
  parameters: {
    docs: {
      description: {
        story: '警告状態（`type="alert"`）。オレンジ背景・アラートサークルアイコン。',
      },
    },
  },
  args: {
    type: 'alert',
    message: '一部の設定が保存できませんでした。',
  },
};

// ─────────────────────────────────────────────────────────────
// WithLinkText（リンクあり）
// ─────────────────────────────────────────────────────────────
/**
 * `linkText` を指定した例。メッセージ下部にリンクが表示される。
 * 詳細確認や関連ページへの誘導に使用する。
 */
export const WithLinkText = {
  parameters: {
    docs: {
      description: {
        story:
          '`linkText` を指定した例。メッセージの下にリンクが表示される。「他 XX 件のエラー内容を確認」のような補足ナビゲーションに使う。',
      },
    },
  },
  args: {
    type: 'error',
    message: '3 件の行でエラーが発生しました。',
    linkText: '他のエラー内容を確認する',
  },
};

// ─────────────────────────────────────────────────────────────
// AllTypes（全タイプ一覧）
// ─────────────────────────────────────────────────────────────
/** 全4タイプの比較表示。Figma「基本設計」のパターン一覧に対応。 */
export const AllTypes = {
  parameters: {
    docs: {
      description: {
        story: '全4タイプの比較表示。Progress / Success / Error / Alert の色・アイコンの違いを確認できる。',
      },
    },
  },
  render: () => {
    const types = [
      { type: 'progress', message: '処理中です。しばらくお待ちください。' },
      { type: 'success',  message: '保存しました。' },
      { type: 'error',    message: '保存に失敗しました。' },
      { type: 'alert',    message: '一部の設定が保存できませんでした。' },
    ];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';

    types.forEach(({ type, message }) => {
      wrapper.appendChild(createSnackBar({ type, message }));
    });

    return wrapper;
  },
};
