import { createFloatingArea } from '../src/components/FloatingArea';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Floating Area ページより
// node-id: 240:10730
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **該当の画面での最終的なアクションが画面に常に表示するもの。**
> **それにより、ユーザーにとってゴールが明確になり、意図しない離脱や未保存を防げる。**

---

## 基本設計

| バリエーション | 説明 |
|--------------|------|
| Default | セカンダリボタン＋プライマリボタンのみ |
| Disabled | 全ボタンが無効状態（薄ブルー: \`#98c5fb\`） |
| ラジオボタン＋セレクト | ボタン左に追加コンテンツ（ラジオグループ・セレクトフィールドなど）を配置 |

### ボタン仕様

| ボタン | 状態 | 背景 | テキスト | ボーダー |
|--------|------|------|----------|---------|
| プライマリ | Default | \`#318bf7\` | \`#fff\` | なし |
| プライマリ | Disabled | \`#98c5fb\` | \`#fff\` | なし |
| セカンダリ | Default | \`#fff\` | \`#318bf7\` | \`1px solid #318bf7\` |
| セカンダリ | Disabled | \`#fff\` | \`#98c5fb\` | \`1px solid #98c5fb\` |

### レイアウト

- 背景: 白（\`#fff\`）、上ボーダー: \`1px solid #d6d9db\`
- padding: \`12px 24px\`
- ボタン間 gap: \`12px\`、セクション間 gap: \`24px\`
- 右寄せ（\`justify-content: flex-end\`）
- \`fixed: true\` を渡すと \`position: fixed; bottom: 0\` で画面下部に固定される

---

## 使用時に気をつけておくこと

- 原則、ブラウザの下部に配置。
- 画面をスクロールしても、固定表示される。
- 主操作のボタン（Primary Button）は、プロダクト内で一貫した位置（左右どちらか）に配置する。
`;

// ─────────────────────────────────────────────────────────────
// ストーリー用ヘルパー — ラジオボタン＋セレクトの追加コンテンツ
// ─────────────────────────────────────────────────────────────
const CALENDAR_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="2.5" y="4" width="15" height="13" rx="2" stroke="#222" stroke-width="1.5"/>
  <path d="M2.5 8.5H17.5" stroke="#222" stroke-width="1.5"/>
  <path d="M6.5 2V5.5" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M13.5 2V5.5" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

const CARET_DOWN = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function buildRadioSelectContent() {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'display: flex; align-items: center; gap: 24px;';

  // ── ラジオグループ ──
  const radioGroup = document.createElement('div');
  radioGroup.style.cssText = 'display: flex; align-items: center; gap: 12px;';
  radioGroup.setAttribute('role', 'radiogroup');
  radioGroup.setAttribute('aria-label', '表示オプション');

  [
    { label: 'アイテム 1', checked: false },
    { label: 'アイテム 2', checked: true },
  ].forEach(({ label, checked }) => {
    const item = document.createElement('label');
    item.style.cssText = 'display: flex; align-items: center; gap: 8px; cursor: pointer;';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'floating-area-radio-demo';
    radio.checked = checked;
    radio.style.cssText = [
      'appearance: none',
      '-webkit-appearance: none',
      'width: 16px',
      'height: 16px',
      'border-radius: 50%',
      'border: 1px solid #d6d9db',
      'box-sizing: border-box',
      'flex-shrink: 0',
      checked
        ? 'background-color: #318bf7; border-color: #d6d9db;'
        : 'background-color: #fff;',
    ].join('; ');

    // 選択済みのインナードット
    if (checked) {
      const dot = document.createElement('span');
      dot.style.cssText = [
        'display: block',
        'width: 6px',
        'height: 6px',
        'border-radius: 50%',
        'background-color: #fff',
        'position: absolute',
        'top: 50%',
        'left: 50%',
        'transform: translate(-50%, -50%)',
      ].join('; ');
      radio.style.position = 'relative';
      radio.appendChild(dot);
    }

    const labelText = document.createElement('span');
    labelText.style.cssText =
      "font-family: 'Hiragino Sans', sans-serif; font-weight: 300; font-size: 14px; line-height: 1.5; color: #222; white-space: nowrap;";
    labelText.textContent = label;

    item.appendChild(radio);
    item.appendChild(labelText);
    radioGroup.appendChild(item);
  });

  wrap.appendChild(radioGroup);

  // ── 更新予約エリア ──
  const scheduleArea = document.createElement('div');
  scheduleArea.style.cssText = 'display: flex; align-items: center; gap: 12px;';

  // アイコン＋ラベル
  const titleWrap = document.createElement('div');
  titleWrap.style.cssText = 'display: flex; align-items: center; gap: 4px;';
  const calIcon = document.createElement('span');
  calIcon.style.cssText = 'display: flex; align-items: center; width: 20px; height: 20px;';
  calIcon.innerHTML = CALENDAR_ICON;
  const titleLabel = document.createElement('span');
  titleLabel.style.cssText =
    "font-family: 'Hiragino Sans', sans-serif; font-weight: 300; font-size: 16px; line-height: 1.5; color: #222; white-space: nowrap;";
  titleLabel.textContent = '更新予約';
  titleWrap.appendChild(calIcon);
  titleWrap.appendChild(titleLabel);
  scheduleArea.appendChild(titleWrap);

  // セレクトフィールド共通スタイル生成
  const makeSelect = (options, width) => {
    const fieldWrap = document.createElement('div');
    fieldWrap.style.cssText = `position: relative; width: ${width}px;`;

    const select = document.createElement('select');
    select.style.cssText = [
      '-webkit-appearance: none',
      'appearance: none',
      `width: ${width}px`,
      'height: 36px',
      'padding: 8px 28px 8px 12px',
      "font-family: 'Hiragino Sans', sans-serif",
      'font-weight: 300',
      'font-size: 14px',
      'line-height: 1.5',
      'color: #222',
      'background-color: #fff',
      'border: 1px solid #d6d9db',
      'border-radius: 4px',
      'box-sizing: border-box',
      'cursor: pointer',
    ].join('; ');
    options.forEach(({ value, label, selected }) => {
      const opt = document.createElement('option');
      opt.value = value;
      opt.textContent = label;
      opt.selected = !!selected;
      select.appendChild(opt);
    });

    const caret = document.createElement('span');
    caret.style.cssText =
      'position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; display: flex; align-items: center;';
    caret.innerHTML = CARET_DOWN;

    fieldWrap.appendChild(select);
    fieldWrap.appendChild(caret);
    return fieldWrap;
  };

  scheduleArea.appendChild(
    makeSelect(
      [
        { value: 'today', label: '今日', selected: true },
        { value: 'tomorrow', label: '明日' },
        { value: 'next-week', label: '来週' },
      ],
      127
    )
  );
  scheduleArea.appendChild(
    makeSelect(
      [
        { value: 'now', label: '現在時刻', selected: true },
        { value: '09:00', label: '09:00' },
        { value: '12:00', label: '12:00' },
        { value: '18:00', label: '18:00' },
      ],
      102
    )
  );

  wrap.appendChild(scheduleArea);
  return wrap;
}

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'FloatingArea',
  tags: ['autodocs'],
  render: (args) => createFloatingArea(args),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'ボタンの無効状態',
      table: { defaultValue: { summary: 'false' } },
    },
    primaryLabel: {
      control: 'text',
      description: 'プライマリボタンのラベル',
      table: { defaultValue: { summary: '次へ進む' } },
    },
    secondaryLabel: {
      control: 'text',
      description: 'セカンダリボタンのラベル',
      table: { defaultValue: { summary: 'キャンセル' } },
    },
    fixed: {
      control: 'boolean',
      description:
        'true にすると position:fixed でブラウザ下部に固定される（Storybookではfalseで確認推奨）',
      table: { defaultValue: { summary: 'false' } },
    },
    extraContent: {
      control: false,
      description:
        'ボタングループ左に配置する追加コンテンツ（HTMLElement）。ラジオボタングループ・セレクトフィールドなどを配置できる。',
    },
    onPrimary: {
      action: 'primary-clicked',
      description: 'プライマリボタンのクリックコールバック',
    },
    onSecondary: {
      action: 'secondary-clicked',
      description: 'セカンダリボタンのクリックコールバック',
    },
  },
  args: {
    disabled: false,
    primaryLabel: '次へ進む',
    secondaryLabel: 'キャンセル',
    fixed: false,
  },
};

// ─────────────────────────────────────────────────────────────
// Default
// ─────────────────────────────────────────────────────────────
/**
 * デフォルト。セカンダリ＋プライマリボタンのみの基本構成。
 * Figma「基本設計 / Default」に対応。
 */
export const Default = {};

// ─────────────────────────────────────────────────────────────
// Disabled
// ─────────────────────────────────────────────────────────────
/**
 * Disabled 状態。全ボタンが無効化され、薄ブルー（#98c5fb）になる。
 * Figma「基本設計 / Disabled」に対応。
 */
export const Disabled = {
  parameters: {
    docs: {
      description: {
        story:
          '`disabled: true` で全ボタンが無効化。プライマリ bg `#98c5fb`、セカンダリ border/text `#98c5fb`。Figma「Disabled」バリエーション。',
      },
    },
  },
  args: {
    disabled: true,
  },
};

// ─────────────────────────────────────────────────────────────
// WithRadioAndSelect（ラジオボタン＋セレクト）
// ─────────────────────────────────────────────────────────────
/**
 * `extraContent` にラジオボタングループ＋更新予約セレクトを配置した例。
 * Figma「基本設計 / ラジオボタン＋セレクト」に対応。
 */
export const WithRadioAndSelect = {
  parameters: {
    docs: {
      description: {
        story:
          '`extraContent` を使ってボタン左に任意のコンテンツを配置できる。ここではラジオグループ＋更新予約セレクトを配置した例（Figma「ラジオボタン＋セレクト」バリエーション）。',
      },
    },
  },
  render: (args) =>
    createFloatingArea({
      ...args,
      extraContent: buildRadioSelectContent(),
    }),
};

// ─────────────────────────────────────────────────────────────
// AllVariants（全バリエーション比較）
// ─────────────────────────────────────────────────────────────
/** Figma「基本設計」の全3バリエーションを縦並びで比較表示。 */
export const AllVariants = {
  parameters: {
    docs: {
      description: {
        story:
          'Figma「基本設計」の3バリエーション（Default / Disabled / ラジオボタン＋セレクト）を縦並びで比較。',
      },
    },
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';

    const variants = [
      {
        label: 'Default',
        component: createFloatingArea({}),
      },
      {
        label: 'Disabled',
        component: createFloatingArea({ disabled: true }),
      },
      {
        label: 'ラジオボタン＋セレクト',
        component: createFloatingArea({ extraContent: buildRadioSelectContent() }),
      },
    ];

    variants.forEach(({ label, component }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; flex-direction: column; gap: 8px;';

      const labelEl = document.createElement('span');
      labelEl.style.cssText =
        "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94;";
      labelEl.textContent = label;

      row.appendChild(labelEl);
      row.appendChild(component);
      wrapper.appendChild(row);
    });

    return wrapper;
  },
};
