import { fn } from 'storybook/test';
import { createInformationPanel } from '../src/components/InformationPanel';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" InformationPanel ページより
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
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
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'InformationPanel',
  tags: ['autodocs'],
  render: (args) => createInformationPanel(args),
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
      control: { type: 'select' },
      options: ['Progress', 'Success', 'Error', 'Warning', 'Notice'],
      description: '情報の種類。背景色とアイコンが切り替わる',
      table: { defaultValue: { summary: 'Progress' } },
    },
    message: {
      control: 'text',
      description: '表示するメッセージ本文',
    },
    textLinkLabel: {
      control: 'text',
      description: 'テキストリンクのラベル（空の場合はリンクを非表示）',
      table: { defaultValue: { summary: '' } },
    },
    onTextLinkClick: { action: 'textLinkClicked' },
  },
  args: {
    type: 'Progress',
    message: 'Googleで審査中です。公開には数日かかる場合があります。',
    textLinkLabel: '',
    onTextLinkClick: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/** Progress / テキストリンクなし — 最もシンプルな使用例。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// タイプ別
// ─────────────────────────────────────────────────────────────
/** 処理が進行中の状態。審査・送信など完了待ちの場面で使用する。 */
export const Progress = {
  args: {
    type: 'Progress',
    message: 'Googleで審査中です。公開には数日かかる場合があります。',
  },
};

/** 処理が正常に完了した状態。 */
export const Success = {
  args: {
    type: 'Success',
    message: '申請が完了しました。',
  },
};

/** エラーが発生した状態。原因と次の操作を簡潔に伝える。 */
export const Error = {
  args: {
    type: 'Error',
    message: '通信エラーが発生しました。時間をおいて再申請してください。',
  },
};

/** 注意を促す通知。ユーザーに確認や対応を促したい場合。 */
export const Warning = {
  args: {
    type: 'Warning',
    message: '掲載終了まで残り3日です。',
  },
};

/** 一般的な通知・お知らせ。状態変化や期限に関する情報など。 */
export const Notice = {
  args: {
    type: 'Notice',
    message: '掲載期間が終了しました。',
  },
};

// ─────────────────────────────────────────────────────────────
// テキストリンクあり
// ─────────────────────────────────────────────────────────────
/** Progress + テキストリンク — 関連ページへの誘導が必要な場合。 */
export const ProgressWithLink = {
  args: {
    type: 'Progress',
    message: 'Googleで審査中です。公開には数日かかる場合があります。',
    textLinkLabel: '履歴を見る',
  },
};

/** Success + テキストリンク */
export const SuccessWithLink = {
  args: {
    type: 'Success',
    message: '申請が完了しました。',
    textLinkLabel: '履歴を見る',
  },
};

/** Error + テキストリンク — エラー詳細やヘルプへの誘導。 */
export const ErrorWithLink = {
  args: {
    type: 'Error',
    message: '通信エラーが発生しました。時間をおいて再申請してください。',
    textLinkLabel: 'n件のエラー内容を確認する',
  },
};

/** Warning + テキストリンク */
export const WarningWithLink = {
  args: {
    type: 'Warning',
    message: '掲載終了まで残り3日です。',
    textLinkLabel: '履歴を見る',
  },
};

/** Notice + テキストリンク */
export const NoticeWithLink = {
  args: {
    type: 'Notice',
    message: '掲載期間が終了しました。',
    textLinkLabel: '閉じる',
  },
};

// ─────────────────────────────────────────────────────────────
// AllTypes（全タイプ一覧）
// ─────────────────────────────────────────────────────────────
/**
 * 全5タイプ × テキストリンクあり・なしの一覧。
 * Figmaの「基本設計」に対応。
 */
export const AllTypes = {
  parameters: {
    docs: {
      description: {
        story: '全5タイプ × テキストリンクあり・なしの比較一覧。Figmaの基本設計に対応。',
      },
    },
    layout: 'padded',
  },
  render: () => {
    const container = document.createElement('div');
    container.style.cssText =
      'display:flex;flex-direction:column;gap:0;font-family:"Hiragino Sans",sans-serif;max-width:720px;';

    const types = [
      {
        type: 'Progress',
        message: 'Googleで審査中です。公開には数日かかる場合があります。',
        linkLabel: '履歴を見る',
      },
      { type: 'Success', message: '申請が完了しました。', linkLabel: '履歴を見る' },
      {
        type: 'Error',
        message: '通信エラーが発生しました。時間をおいて再申請してください。',
        linkLabel: 'n件のエラー内容を確認する',
      },
      { type: 'Warning', message: '掲載終了まで残り3日です。', linkLabel: '履歴を見る' },
      { type: 'Notice', message: '掲載期間が終了しました。', linkLabel: '閉じる' },
    ];

    // セクションラベル
    const makeLabel = (text) => {
      const p = document.createElement('p');
      p.style.cssText =
        'font-size:11px;color:#858c94;margin:16px 0 8px;font-family:"Hiragino Sans",sans-serif;font-weight:300;';
      p.textContent = text;
      return p;
    };

    container.appendChild(makeLabel('テキストリンクなし'));
    types.forEach(({ type, message }) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'margin-bottom:4px;';
      wrap.appendChild(createInformationPanel({ type, message }));
      container.appendChild(wrap);
    });

    container.appendChild(makeLabel('テキストリンクあり'));
    types.forEach(({ type, message, linkLabel }) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'margin-bottom:4px;';
      wrap.appendChild(
        createInformationPanel({
          type,
          message,
          textLinkLabel: linkLabel,
          onTextLinkClick: fn(),
        })
      );
      container.appendChild(wrap);
    });

    return container;
  },
};
