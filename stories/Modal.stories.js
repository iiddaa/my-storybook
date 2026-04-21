import { fn } from 'storybook/test';
import { createModal } from '../src/components/Modal';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0" Modal ページより
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概要

背後の操作を不可能にして、**特定のモードに集中させる**UIコンポーネント。

このコンポーネントは「土台」として機能する。コンテンツは \`children\` に委ねるため、
Confirm・Task いずれの用途にも対応できる。

---

## 役割

用途によって推奨される実装方法やサイズ、Modal On Modal の許容ルールが異なる。

### Confirm（確認）タイプ
- 削除・離脱・通知許可など、**意思決定を求める**とき
- セッション切れ・法や金銭に関わる注意など、操作を中断しつつ重要な情報を提示するとき
- 実装：可能であれば OS・ブラウザ標準を使う。Danger ボタンや補足情報が必要な場合にこのコンポーネントで実装する

### Task タイプ
- 新規作成・編集など、**一時的で完了が明確なタスク**をしてもらうとき
  - ※ 一時的でなく完了も明確でない場合は画面遷移（例：数日かかるメール配信）
  - ※ タスク指向型のグローバルナビゲーションを採用している場合も画面遷移
- 実装：オリジナルで実装する
- サイズ：Basic（M）を基本とし、情報量が多い・ステップがある場合は Full Screen（L）を使う

---

## 基本構造

| エリア | 内容 |
|--------|------|
| ヘッダー | タイトル + 閉じるボタン |
| コンテンツ | \`children\` で任意の要素を挿入するスロット |
| フッター | サブテキスト（任意）・キャンセルボタン・確定ボタン |

---

## 使用上の注意

### Modal On Modal のルール
Modalを重ねすぎると、ユーザーが階層構造を理解できなくなる。
重ね方は最大3層まで、かつ以下の順序のみ許容：

\`\`\`
Taskタイプ（Full Screen：L）
  └─ Taskタイプ（Basic：M）
       └─ Confirmタイプ（S）
\`\`\`

**同種の Modal を重ねることは許容しない。**

### 配置ルール
フッターの主操作ボタン（確定）は、プロダクト内で**一貫した位置**（左右どちらか）に配置する。

### Drawer との使い分け
- Drawer：背景を見ながら並行作業できる。情報量：中
- Modal：背景を操作不可にして集中させる。情報量：中〜多
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Modal',
  tags: ['autodocs'],
  render: (args) => createModal(args),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['S', 'M', 'L'],
      description: 'パネルの幅サイズ（S: 500px / M: 700px / L: 900px）',
      table: { defaultValue: { summary: 'M' } },
    },
    title: {
      control: 'text',
      description: 'ヘッダーに表示するタイトル',
    },
    subText: {
      control: 'text',
      description: 'フッター左側に表示するサブテキスト（任意）',
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
    children: { table: { disable: true } },
    onClose: { action: 'closed' },
    onCancel: { action: 'cancelled' },
    onConfirm: { action: 'confirmed' },
  },
  args: {
    title: 'タイトル',
    size: 'M',
    children: '説明文がここに入ります。',
    subText: 'サブテキスト（2行まで）',
    cancelLabel: 'キャンセル',
    confirmLabel: '決定',
    onClose: fn(),
    onCancel: fn(),
    onConfirm: fn(),
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/** 標準的な使用例。サイズ・ラベルなどは Controls パネルから変更できる。 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Sizes（バリエーション一覧）
// ─────────────────────────────────────────────────────────────
/**
 * S / M / L 3サイズの比較。
 *
 * - **S（500px）**：Confirm タイプ。削除確認など短いメッセージ向け
 * - **M（700px）**：Task タイプ Basic。新規作成・編集フォームの基本サイズ
 * - **L（900px）**：Task タイプ Full Screen。情報量が多い・ステップがある場合
 */
export const Sizes = {
  parameters: {
    docs: {
      description: {
        story:
          'S / M / L それぞれのパネルをインラインで表示。オーバーレイは除いている。',
      },
    },
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'display:flex;flex-direction:column;gap:32px;padding:32px;background:#f0f0f2;min-height:100vh;';

    const sizes = [
      { size: 'S', label: 'S（500px）', note: 'Confirmタイプ向け' },
      { size: 'M', label: 'M（700px）', note: 'Taskタイプ Basic' },
      { size: 'L', label: 'L（900px）', note: 'Taskタイプ Full Screen' },
    ];

    sizes.forEach(({ size, label, note }) => {
      const caption = document.createElement('p');
      caption.style.cssText =
        'margin:0 0 8px;font-family:sans-serif;font-size:12px;color:#666;';
      caption.innerText = `${label} — ${note}`;

      const overlay = createModal({
        ...args,
        title: `タイトル`,
        size,
      });
      // オーバーレイではなくパネルだけ取り出してインライン表示
      const panel = overlay.firstElementChild;

      const block = document.createElement('div');
      block.appendChild(caption);
      block.appendChild(panel);
      wrapper.appendChild(block);
    });

    return wrapper;
  },
};

// ─────────────────────────────────────────────────────────────
// NoSubText
// ─────────────────────────────────────────────────────────────
/** フッターのサブテキストなし。確認ダイアログなどシンプルな用途向け。 */
export const NoSubText = {
  args: {
    subText: '',
    title: '削除の確認',
    children: 'このアイテムを削除します。この操作は取り消せません。',
    cancelLabel: 'キャンセル',
    confirmLabel: '削除する',
    size: 'S',
  },
};
