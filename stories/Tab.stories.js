import { createTab } from '../src/components/Tab';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Tab ページより
// node-id: 224:3824
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **一つの機能やテーマの中で、表示する情報をシームレスに切り替え、目的の情報に素早くアクセスするためのもの。**

---

## 基本設計

Tab には \`primary\`（アンダーライン型）と \`secondary\`（背景塗り型）の2バリアントがある。

### Primary

タブ列の下に \`1px solid #EFF0F1\` のボーダーラインを敷き、各タブアイテムが \`border-bottom: 2px\` で状態を表現するアンダーライン型。

| 状態 | テキスト色 | 背景 | アンダーライン |
|------|----------|------|--------------|
| Default | \`#ADB2B8\` | なし | \`2px solid #EFF0F1\` |
| hover | \`#ADB2B8\` | \`#F7F7F8\`（radius 4px） | \`2px solid #EFF0F1\` |
| selected | \`#318BF7\` | なし | \`2px solid #318BF7\` |
| disabled | \`#ADB2B8\`（opacity 40%） | なし | \`2px solid #EFF0F1\` |

- パディング: \`16px 12px\`
- アイコンとテキストの gap: \`4px\`
- フォント: Hiragino Sans W6 / 14px

### Secondary

各タブアイテムが背景色で状態を表現する背景塗り型。アイコンあり・なしどちらにも対応。

| 状態 | テキスト色 | 背景 |
|------|----------|------|
| Default | \`#ADB2B8\` | なし |
| hover | \`#ADB2B8\` | \`#F7F7F8\` |
| Selected | \`#222222\` | \`#EAF3FE\` |
| Disabled | \`#ADB2B8\`（opacity 40%） | なし |

- パディング: \`12px\`
- border-radius: \`8px\`
- アイコンとテキストの gap: \`8px\`
- フォント: Hiragino Sans W6 / 14px

---

## 使用時に気をつけておくこと

- **デフォルトタブ以外は見られにくい**
  - タブは目的がある人だけが開いて見るため、デフォルトタブ以外は見られる確率が激減する。
  - 見られやすさを優先するならスクロールを採用する。
- **URLへの反映なし**
  - Tab を切り替えても URL に反映されない。必要に応じて、共有機能などを検討する。
  - （例：Notion のビューの共有機能）
`;

// ─────────────────────────────────────────────────────────────
// アイコン（pencil）
// ─────────────────────────────────────────────────────────────
const PENCIL_ICON = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M11.333 2.333a1.886 1.886 0 0 1 2.667 2.667L5.667 13.333H3v-2.666L11.333 2.333Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// ─────────────────────────────────────────────────────────────
// デフォルトタブデータ
// ─────────────────────────────────────────────────────────────
const DEFAULT_TABS = [
  { label: 'テキスト', disabled: false },
  { label: 'テキスト', disabled: false },
  { label: 'テキスト', disabled: false },
];

const TABS_WITH_ICON = [
  { label: 'テキスト', icon: PENCIL_ICON, disabled: false },
  { label: 'テキスト', icon: PENCIL_ICON, disabled: false },
  { label: 'テキスト', icon: PENCIL_ICON, disabled: false },
];

const TABS_WITH_DISABLED = [
  { label: 'テキスト', disabled: false },
  { label: 'テキスト', disabled: false },
  { label: 'テキスト（無効）', disabled: true },
];

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Tab',
  tags: ['autodocs'],
  render: (args) => createTab(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'アンダーライン型（primary）か背景塗り型（secondary）を選択',
      table: { defaultValue: { summary: 'primary' } },
    },
    tabs: {
      control: 'object',
      description:
        'タブ定義の配列。各要素は `{ label: string, icon?: string (SVG), disabled?: boolean }` の形式。',
    },
    activeIndex: {
      control: { type: 'number', min: 0 },
      description: '初期選択するタブのインデックス（0始まり）',
      table: { defaultValue: { summary: '0' } },
    },
    onChange: {
      action: 'tab-changed',
      description: 'タブ切り替え時のコールバック。引数は選択されたインデックス（number）。',
      table: { category: 'Events' },
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Stories
// ─────────────────────────────────────────────────────────────

/** Primary（アンダーライン型）デフォルト。最もシンプルな使用例。 */
export const Default = {
  args: {
    variant: 'primary',
    tabs: DEFAULT_TABS,
    activeIndex: 0,
  },
};

/** Primary にアイコンを付けたパターン。 */
export const PrimaryWithIcon = {
  name: 'Primary / アイコンあり',
  args: {
    variant: 'primary',
    tabs: TABS_WITH_ICON,
    activeIndex: 0,
  },
};

/** Secondary（背景塗り型）。選択タブが `#EAF3FE` で強調される。 */
export const Secondary = {
  args: {
    variant: 'secondary',
    tabs: DEFAULT_TABS,
    activeIndex: 0,
  },
};

/** Secondary にアイコンを付けたパターン。 */
export const SecondaryWithIcon = {
  name: 'Secondary / アイコンあり',
  args: {
    variant: 'secondary',
    tabs: TABS_WITH_ICON,
    activeIndex: 0,
  },
};

/** disabled 状態のタブを含むパターン。クリックしても選択されない。 */
export const WithDisabled = {
  name: 'disabled タブあり',
  args: {
    variant: 'primary',
    tabs: TABS_WITH_DISABLED,
    activeIndex: 0,
  },
};

/** Secondary / disabled タブあり。 */
export const SecondaryWithDisabled = {
  name: 'Secondary / disabled タブあり',
  args: {
    variant: 'secondary',
    tabs: TABS_WITH_DISABLED,
    activeIndex: 0,
  },
};

/**
 * Primary と Secondary を並べて比較するビュー。
 * Storybook の Controls は使用不可（render を直接定義）。
 */
export const AllVariants = {
  name: 'バリアント一覧',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';

    const sections = [
      { label: 'Primary（テキストのみ）', variant: 'primary', tabs: DEFAULT_TABS },
      { label: 'Primary（アイコンあり）', variant: 'primary', tabs: TABS_WITH_ICON },
      { label: 'Secondary（テキストのみ）', variant: 'secondary', tabs: DEFAULT_TABS },
      { label: 'Secondary（アイコンあり）', variant: 'secondary', tabs: TABS_WITH_ICON },
    ];

    sections.forEach(({ label, variant, tabs }) => {
      const section = document.createElement('div');
      section.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';

      const heading = document.createElement('p');
      heading.style.cssText =
        'font-family: Hiragino Sans, sans-serif; font-size: 12px; color: #515a65; margin: 0;';
      heading.textContent = label;

      section.appendChild(heading);
      section.appendChild(createTab({ variant, tabs, activeIndex: 0 }));
      wrapper.appendChild(section);
    });

    return wrapper;
  },
};
