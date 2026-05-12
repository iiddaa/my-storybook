import './tooltip.css';

/**
 * Tooltip コンポーネントを生成する。
 *
 * マウスホバー時にのみ、簡易的な説明を提供するもの。認知負荷を軽減できる。
 *
 * このコンポーネントはツールチップの「箱」を生成するだけで、
 * 表示/非表示の制御と位置指定は呼び出し元が担う。
 *
 * @param {Object} props
 * @param {string} [props.text='テキスト'] - ツールチップに表示するテキスト
 * @param {string} [props.id=null]        - role="tooltip" の参照用ID（aria-describedby と組み合わせて使用）
 * @returns {HTMLElement}
 */
export const createTooltip = ({
  text = 'テキスト',
  id = null,
} = {}) => {
  const el = document.createElement('div');
  el.className = 'storybook-tooltip';
  el.setAttribute('role', 'tooltip');
  if (id) el.id = id;

  const textEl = document.createElement('p');
  textEl.className = 'storybook-tooltip__text';
  textEl.textContent = text;
  el.appendChild(textEl);

  return el;
};
