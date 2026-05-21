import './loading-area.css';

/**
 * LoadingArea コンポーネントを生成する。
 *
 * システムが作動中であること・もう少しで結果が出ることを伝え、
 * 待つ間の安心感を持たせる。
 *
 * @param {Object}          props
 * @param {string}          [props.size='M']    - 'M'（48px）| 'S'（24px）
 * @param {number|string|null} [props.height=null] - ローディングエリアの高さ（例: 200 または '50%'）
 * @returns {HTMLElement}
 */
export const createLoadingArea = ({ size = 'M', height = null } = {}) => {
  const root = document.createElement('div');
  root.className = 'storybook-loading-area';
  root.setAttribute('role', 'status');
  root.setAttribute('aria-label', '読み込み中');

  if (height !== null) {
    root.style.height = typeof height === 'number' ? `${height}px` : height;
  }

  const spinner = document.createElement('div');
  spinner.className = `storybook-loading-area__spinner storybook-loading-area__spinner--${size}`;

  root.appendChild(spinner);
  return root;
};
