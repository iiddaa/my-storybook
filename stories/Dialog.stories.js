import { fn } from 'storybook/test';
import { createDialog } from '../src/components/Dialog';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0" Dialog ページより
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

ユーザーの操作を中断させて、**その場で簡潔な意思決定を行う**コンポーネント。

> 参考程度に。厳格なルールというわけではない。

---

## 基本構造

| エリア | 内容 |
|--------|------|
| タイトル | 意思決定の内容を端的に示す見出し |
| 説明文 | タイトルを補足する短い説明（省略可） |
| 補足エリア | グレー背景の追加情報枠（省略可） |
| フッター | キャンセル・確定ボタン（右寄せ） |

幅は **500px 固定**。閉じるボタン（×）は持たない。
ユーザーは必ずいずれかのボタンを選択することになる。

---

## Modal との違い

- Dialog：幅固定（500px）・×ボタンなし・簡潔な意思決定に特化
- Modal：幅を S / M / L から選択・×ボタンあり・コンテンツスロットで自由に構成

---

## 使用上の注意

### タイトルラベル

- ユーザーが素早く意思決定できるよう、**説明は簡潔にする**
  - ユーザーはこの意思決定を行わないと、他の操作ができない
- **最終確認・削除・離脱・通知の許可**など、意思決定を求めるときに使う
  - 特にセッション切れや、法や金銭に関わる注意など、非常に重要な情報を提示するとき
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Components/Dialog',
  tags: ['autodocs'],
  render: (args) => createDialog(args),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '見出し',
    },
    description: {
      control: 'text',
      description: '説明文（省略可）',
    },
    supplement: {
      control: 'text',
      description: '補足エリアのテキスト（省略可）。グレー背景で表示される',
    },
    cancelLabel: {
      control: 'text',
      description: 'キャンセルボタンのラベル',
      table: { defaultValue: { summary: 'キャンセル' } },
    },
    confirmLabel: {
      control: 'text',
      description: '確定ボタンのラベル',
      table: { defaultValue: { summary: '決定' } },
    },
    onCancel: { action: 'cancelled' },
    onConfirm: { action: 'confirmed' },
  },
  args: {
    title: 'タイトル',
    description: '説明文',
    supplement: '補足エリア',
    cancelLabel: 'キャンセル',
    confirmLabel: '決定',
    onCancel: fn(),
    onConfirm: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/** Figmaの基本設計に沿った標準形。補足エリアあり。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// NoSupplement（補足エリアなし）
// ─────────────────────────────────────────────────────────────
/** 補足エリアを省略したシンプルな構成。短いメッセージの確認ダイアログ向け。 */
export const NoSupplement = {
  args: {
    supplement: '',
  },
};

// ─────────────────────────────────────────────────────────────
// DeleteConfirm（削除確認）
// ─────────────────────────────────────────────────────────────
/** 削除確認のユースケース例。 */
export const DeleteConfirm = {
  parameters: {
    docs: {
      description: {
        story: '削除操作の最終確認に使う典型的な例。',
      },
    },
  },
  args: {
    title: 'このアイテムを削除しますか？',
    description: '削除すると元に戻せません。',
    supplement: '削除対象：レポート「2024年Q4 売上サマリー」',
    cancelLabel: 'キャンセル',
    confirmLabel: '削除する',
  },
};

// ─────────────────────────────────────────────────────────────
// SessionExpired（セッション切れ）
// ─────────────────────────────────────────────────────────────
/** セッション切れなど、緊急性の高い通知に使う例。 */
export const SessionExpired = {
  parameters: {
    docs: {
      description: {
        story:
          'セッション切れや法・金銭に関わる重要な情報提示のユースケース例。キャンセル不要のため1ボタン構成にしている。',
      },
    },
  },
  args: {
    title: 'セッションの有効期限が切れました',
    description: 'セキュリティのため、自動的にログアウトされました。再度ログインしてください。',
    supplement: '',
    cancelLabel: '',
    confirmLabel: 'ログイン画面へ',
  },
  render: (args) => {
    // キャンセルボタンなし（confirmのみ）
    const dialog = createDialog(args);
    const footer = dialog.querySelector('.storybook-dialog-footer');
    const cancelBtn = footer.querySelector('.storybook-dialog-btn--cancel');
    if (cancelBtn) cancelBtn.remove();
    return dialog;
  },
};
