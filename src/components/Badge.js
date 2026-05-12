import './badge.css';

/**
 * Badge コンポーネントを生成する。
 *
 * 小さな領域でオブジェクトの状態を目立たせて伝えるためのもの。
 * Dot（存在を通知）と Count（件数を通知）の2種類がある。
 *
 * @param {Object}  props
 * @param {string}  [props.type='dot']        - 'dot'（ドット）| 'count'（カウント）
 * @param {number}  [props.count=0]           - 表示する数値（type='count' 時に使用）
 * @param {number}  [props.max=99]            - 上限値。超えると "${max}+" と表示する
 * @param {boolean} [props.showBorder=false]  - 白 0.5px ボーダーを付ける（ボタン配置時など）
 * @returns {HTMLElement}
 */
export const createBadge = ({
  type = 'dot',
  count = 0,
  max = 99,
  showBorder = false,
} = {}) => {
  const el = document.createElement('span');
  el.className = [
    'storybook-badge',
    `storybook-badge--${type}`,
    showBorder ? 'storybook-badge--border' : '',
  ].filter(Boolean).join(' ');

  if (type === 'count') {
    el.textContent = count > max ? `${max}+` : String(count);
    el.setAttribute('aria-label', `${count > max ? `${max}件以上` : `${count}件`}の通知`);
  } else {
    el.setAttribute('aria-label', '通知あり');
  }

  return el;
};
