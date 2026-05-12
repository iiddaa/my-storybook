import './chip.css';

const CLOSE_ICON = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
</svg>`;

/**
 * Chip コンポーネントを生成する。
 *
 * オブジェクトに紐づく属性・状態・情報を直感的に表すもの。
 * pill 形状（border-radius: 99px）・height 20px の小さな情報タグ。
 *
 * @param {Object}   props
 * @param {string}   [props.label='ラベル名']      - チップのテキスト
 * @param {string}   [props.variant='red']         - カラーバリアント: 'red'|'green'|'orange'|'gray'|'blue'|'blue-filled'|'gray-filled'
 * @param {boolean}  [props.dismissible=false]     - xボタン（解除ボタン）を表示するか
 * @param {Function} [props.onDismiss=null]        - xボタンクリック時のコールバック
 * @returns {HTMLElement}
 */
export const createChip = ({
  label = 'ラベル名',
  variant = 'red',
  dismissible = false,
  onDismiss = null,
} = {}) => {
  const root = document.createElement('div');
  root.className = `storybook-chip storybook-chip--${variant}`;

  const labelEl = document.createElement('span');
  labelEl.className = 'storybook-chip__label';
  labelEl.textContent = label;
  root.appendChild(labelEl);

  if (dismissible) {
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'storybook-chip__close';
    closeBtn.setAttribute('aria-label', '削除');
    closeBtn.innerHTML = CLOSE_ICON;
    if (typeof onDismiss === 'function') {
      closeBtn.addEventListener('click', onDismiss);
    }
    root.appendChild(closeBtn);
  }

  return root;
};
