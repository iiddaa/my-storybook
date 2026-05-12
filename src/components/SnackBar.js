import './snack-bar.css';

const ICONS = {
  progress: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13.5 8A5.5 5.5 0 1 1 11.22 3.74" stroke="#318bf7" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M11.5 2V5.5H15" stroke="#318bf7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  success: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" fill="#22ad7f"/>
    <path d="M5 8L7.5 10.5L11.5 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  error: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" fill="#eb4d38"/>
    <path d="M8 5V8.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="8" cy="11" r="0.875" fill="white"/>
  </svg>`,
  alert: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" fill="#f78f43"/>
    <path d="M8 5V8.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="8" cy="11" r="0.875" fill="white"/>
  </svg>`,
  close: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 4L12 12M12 4L4 12" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
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
  iconEl.innerHTML = ICONS[type] ?? ICONS.progress;
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
  closeBtn.innerHTML = ICONS.close;
  closeBtn.addEventListener('click', (e) => {
    if (typeof onClose === 'function') onClose(e);
  });
  root.appendChild(closeBtn);

  return root;
};
