import './snack-bar.css';
import { buildSvgEl } from './icons/index.js';

// タイプ別アイコン名（ICON_DEFS のキー）
const TYPE_ICON_NAME = {
  progress: 'sync',
  success:  'check_circle',
  error:    'x_circle',
  alert:    'alert_circle',
};

// タイプ別アイコンカラー
const TYPE_ICON_COLOR = {
  progress: '#318bf7',
  success:  '#22ad7f',
  error:    '#eb4d38',
  alert:    '#f78f43',
};

/**
 * SnackBar コンポーネントを生成する。
 *
 * ユーザーの操作に対するフィードバックを、画面下部に一時的に表示するコンポーネント。
 * 操作への反応（成功・失敗・進行中）を短時間だけ伝えることに特化している。
 *
 * @param {Object}   props
 * @param {string}   [props.type='progress']    - タイプ。'progress'|'success'|'error'|'alert'
 * @param {string}   [props.message='']         - 表示するメッセージ本文
 * @param {string}   [props.linkText='']        - リンクテキスト（空の場合は非表示）
 * @param {Function} [props.onClose=null]       - 閉じるボタンのコールバック
 * @param {Function} [props.onLinkClick=null]   - リンククリックのコールバック
 * @returns {HTMLElement}
 */
export const createSnackBar = ({
  type = 'progress',
  message = '',
  linkText = '',
  onClose = null,
  onLinkClick = null,
} = {}) => {
  const root = document.createElement('div');
  root.className = [
    'storybook-snack-bar',
    `storybook-snack-bar--${type}`,
  ].join(' ');
  root.setAttribute('role', 'status');
  root.setAttribute('aria-live', 'polite');

  // 左アイコン
  const iconEl = document.createElement('span');
  iconEl.className = 'storybook-snack-bar__icon';
  const iconName = TYPE_ICON_NAME[type] ?? TYPE_ICON_NAME.progress;
  const iconColor = TYPE_ICON_COLOR[type] ?? TYPE_ICON_COLOR.progress;
  iconEl.appendChild(buildSvgEl(iconName, 16, iconColor));
  root.appendChild(iconEl);

  // テキストエリア
  const body = document.createElement('div');
  body.className = 'storybook-snack-bar__body';

  const msgEl = document.createElement('span');
  msgEl.className = 'storybook-snack-bar__message';
  msgEl.textContent = message;
  body.appendChild(msgEl);

  if (linkText) {
    const link = document.createElement('a');
    link.className = 'storybook-snack-bar__link';
    link.href = '#';
    link.textContent = linkText;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof onLinkClick === 'function') onLinkClick(e);
    });
    body.appendChild(link);
  }

  root.appendChild(body);

  // 閉じるボタン
  const closeBtn = document.createElement('button');
  closeBtn.className = 'storybook-snack-bar__close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', '閉じる');
  closeBtn.appendChild(buildSvgEl('x', 16, '#858c94'));
  closeBtn.addEventListener('click', (e) => {
    if (typeof onClose === 'function') onClose(e);
  });
  root.appendChild(closeBtn);

  return root;
};
