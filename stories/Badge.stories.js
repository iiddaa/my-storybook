import { createBadge } from '../src/components/Badge';

// ─────────────────────────────────────────────────────────────
// Docs 用コンポーネント説明
// Figmaデザインシステム "Design-System-2.0--AI-Native-" Badge ページより
// node-id: 238:7195
// ─────────────────────────────────────────────────────────────
const COMPONENT_DESCRIPTION = `
## 概念

どういうものか。何のためにあるのか。根源的で、絶対に外しては成り立たない本質。

> **小さな領域でオブジェクトの状態を目立たせて伝えるためのもの**

---

## 基本設計

| タイプ | 形状 | サイズ | 説明 |
|--------|------|--------|------|
| Dot | 円形ドット | 10×10px | 通知の存在を伝える |
| Count（1桁） | 横長の丸 | 14px高 | 1〜9 の件数 |
| Count（2桁） | 横長の丸 | 14px高 | 10〜99 の件数 |
| Count（3桁以上） | 横長の丸 | 14px高 | 上限（デフォルト99）を超えたら "99+" 表示 |

- 背景色: \`#f78f43\`（orange/500）
- テキスト色: \`#fff\`
- フォント: Hiragino Sans W3 / 10px / line-height 1.5
- border-radius: 7px（Dot・Count 共通）
- Count の padding: \`2px 4px\`

---

## 使用時に気をつけておくこと

- **Dot** は「気づいて欲しい。見にきて欲しい。」ときに使う
- **Count** は「より明確にアクションを促す」ときに使う
  - 画面が Count でいっぱいになると、タスクに追われている感覚になり認知疲労になる。
  - どっち使うか迷う場面では、とりあえず Dot にしておく。
- **Label / Chip / Badge を適切に使い分ける。**

### 配置ルール

| 配置先 | ルール |
|--------|--------|
| ボタンに配置 | 右上寄せで配置する。\`showBorder: true\` で白 0.5px ボーダーを付け、背景との境界を明確にする |
| テキストに配置 | テキストから 8px あける |

---

## Label / Chip / Badge の使い分け

| | Badge | Label | Chip |
|---|---|---|---|
| 目的 | オブジェクトの**通知状態**（未読・更新）を伝える | オブジェクトの**ステータス・カテゴリー**を示す | **キーワード・タグ**を示す |
| 形状 | ドット または 数字の小さな丸 | シンプルなテキストラベル | 枠線付きのタグ |
| 配置場所 | オブジェクトの右上・テキストの隣 | テキスト行内 | リスト・グリッドの中 |
`;

// ─────────────────────────────────────────────────────────────
// Meta
// ─────────────────────────────────────────────────────────────
export default {
  title: 'Badge',
  tags: ['autodocs'],
  render: (args) => createBadge(args),
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
      options: ['dot', 'count'],
      description: 'Dot（通知の存在）か Count（件数）を選択',
      table: { defaultValue: { summary: 'dot' } },
    },
    count: {
      control: 'number',
      description: '表示する数値（type="count" 時に使用）',
      table: { defaultValue: { summary: '0' } },
    },
    max: {
      control: 'number',
      description: '上限値。この値を超えると "${max}+" と表示する',
      table: { defaultValue: { summary: '99' } },
    },
    showBorder: {
      control: 'boolean',
      description:
        'true で白 0.5px ボーダーを付ける（ボタンなどのカラー背景に配置する際に背景との境界を明確にする）',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    type: 'dot',
    count: 0,
    max: 99,
    showBorder: false,
  },
};

// ─────────────────────────────────────────────────────────────
// Dot（通知の存在を伝える）
// ─────────────────────────────────────────────────────────────
/**
 * Dot タイプ。通知の存在だけを伝えたいときに使う。
 * Figma「気づいて欲しい。見にきて欲しい。」ときに使う。
 */
export const Dot = {
  parameters: {
    docs: {
      description: {
        story: 'Dot（10×10px）。通知の存在を伝える。どっち使うか迷ったらまず Dot を選ぶ。',
      },
    },
  },
  args: {
    type: 'dot',
  },
};

// ─────────────────────────────────────────────────────────────
// CountSingle（1桁）
// ─────────────────────────────────────────────────────────────
/** Count（1桁）。1〜9 の件数を表示する。 */
export const CountSingle = {
  parameters: {
    docs: {
      description: {
        story: 'Count（1桁）。Figma「Count（1桁）」に対応。',
      },
    },
  },
  args: {
    type: 'count',
    count: 1,
  },
};

// ─────────────────────────────────────────────────────────────
// CountDouble（2桁）
// ─────────────────────────────────────────────────────────────
/** Count（2桁）。10〜99 の件数を表示する。 */
export const CountDouble = {
  parameters: {
    docs: {
      description: {
        story: 'Count（2桁）。Figma「Count（2桁）」に対応。',
      },
    },
  },
  args: {
    type: 'count',
    count: 10,
  },
};

// ─────────────────────────────────────────────────────────────
// CountOver（3桁以上 → "99+"）
// ─────────────────────────────────────────────────────────────
/**
 * Count（3桁以上）。`count > max` のとき "${max}+" と表示する。
 * デフォルト max=99 のため 100 以上は "99+" になる。
 */
export const CountOver = {
  parameters: {
    docs: {
      description: {
        story:
          'Count（3桁以上）。`count > max` のとき "${max}+" と表示。Figma「Count（3桁以上）」に対応。',
      },
    },
  },
  args: {
    type: 'count',
    count: 100,
    max: 99,
  },
};

// ─────────────────────────────────────────────────────────────
// AllVariants（全バリエーション比較）
// ─────────────────────────────────────────────────────────────
/** Figma「基本設計」の全パターンを縦並びで比較表示。 */
export const AllVariants = {
  parameters: {
    docs: {
      description: {
        story: 'Figma「基本設計」の全パターン（Dot / Count 1桁 / Count 2桁 / Count 3桁以上）比較。',
      },
    },
  },
  render: () => {
    const variants = [
      { label: 'Dot', badge: createBadge({ type: 'dot' }) },
      { label: 'Count（1桁）',   badge: createBadge({ type: 'count', count: 1 }) },
      { label: 'Count（2桁）',   badge: createBadge({ type: 'count', count: 10 }) },
      { label: 'Count（3桁以上）', badge: createBadge({ type: 'count', count: 100 }) },
    ];

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; gap: 16px;';

    variants.forEach(({ label, badge }) => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 16px;';

      const labelEl = document.createElement('span');
      labelEl.style.cssText =
        "font-family: 'Hiragino Sans', sans-serif; font-size: 12px; color: #858c94; width: 120px; text-align: right; flex-shrink: 0;";
      labelEl.textContent = label;

      row.appendChild(labelEl);
      row.appendChild(badge);
      wrapper.appendChild(row);
    });

    return wrapper;
  },
};

// ─────────────────────────────────────────────────────────────
// OnButton（ボタンに配置）
// ─────────────────────────────────────────────────────────────
/**
 * ボタン右上に配置した例。Figma「ボタンに配置 / 右上寄せで配置する」に対応。
 * `showBorder: true` で白ボーダーを付け、ボタン背景との境界を明確にする。
 */
export const OnButton = {
  parameters: {
    docs: {
      description: {
        story:
          'ボタン右上への配置例（`showBorder: true`）。件数 1・98・99+ の3パターンを表示。Figma「ボタンに配置」に対応。',
      },
    },
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; align-items: flex-start; gap: 40px; padding: 8px;';

    [1, 98, 100].forEach((count) => {
      const container = document.createElement('div');
      container.style.cssText = 'position: relative; display: inline-block;';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.style.cssText = [
        "font-family: 'Hiragino Sans', sans-serif",
        'font-weight: 600',
        'font-size: 14px',
        'line-height: 1.5',
        'color: #318bf7',
        'background-color: #fff',
        'border: 1px solid #318bf7',
        'border-radius: 4px',
        'padding: 8px 16px',
        'cursor: pointer',
        'white-space: nowrap',
      ].join('; ');
      btn.textContent = 'ボタン';

      const badge = createBadge({ type: 'count', count, showBorder: true });
      badge.style.cssText = 'position: absolute; top: -4px; right: -4px;';

      container.appendChild(btn);
      container.appendChild(badge);
      wrapper.appendChild(container);
    });

    return wrapper;
  },
};

// ─────────────────────────────────────────────────────────────
// OnText（テキストに配置）
// ─────────────────────────────────────────────────────────────
/**
 * テキストの隣に配置した例。Figma「テキストに配置 / 8pxあける」に対応。
 */
export const OnText = {
  parameters: {
    docs: {
      description: {
        story:
          'テキストの隣への配置例。Figma の仕様通り、テキストと Badge の間に 8px のギャップを設ける。',
      },
    },
  },
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: inline-flex; align-items: center; gap: 8px;';

    const text = document.createElement('span');
    text.style.cssText =
      "font-family: 'Hiragino Sans', sans-serif; font-weight: 300; font-size: 14px; line-height: 1.5; color: #222;";
    text.textContent = 'クチコミ';

    wrapper.appendChild(text);
    wrapper.appendChild(createBadge({ type: 'count', count: 100 }));
    return wrapper;
  },
};
