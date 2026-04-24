import './information-panel.css';

// アイコンSVG（インライン埋め込みで期限切れなし）
const ICONS = {
  Progress: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15 9A6 6 0 1 1 12.24 4.08" stroke="#318bf7" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12.5 2.5V6.5H16.5" stroke="#318bf7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  Success: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="7.5" fill="#22a76a"/>
    <path d="M5.5 9L8 11.5L13 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  Error: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="7.5" fill="#eb4d38"/>
    <path d="M9 5.5V9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="9" cy="12.5" r="0.875" fill="white"/>
  </svg>`,
  Warning: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="7.5" fill="#f78f43"/>
    <path d="M9 5.5V9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="9" cy="12.5" r="0.875" fill="white"/>
  </svg>`,
  Notice: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2.25" y="3.75" width="13.5" height="11.5" rx="1.5" stroke="#858c94" stroke-width="1.5"/>
    <path d="M2.25 7.75H15.75" stroke="#858c94" stroke-width="1.5"/>
    <path d="M6 2.25V5.25" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 2.25V5.25" stroke="#858c94" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
};

/**
 * 情報パネルを生成する。
 *
 * ユーザーの操作を中断させずに、情報を強調してユーザーに伝えるコンポーネント。
 *
 * @param {Object}   props
 * @param {string}   [props.type='Progress']      - タイプ。'Progress'|'Success'|'Error'|'Warning'|'Notice'
 * @param {string}   [props.message='']           - 表示するメッセージ本文
 * @param {string}   [props.textLinkLabel='']     - テキストリンクのラベル（空の場合は非表示）
 * @param {Function} [props.onTextLinkClick]      - テキストリンクのクリックコールバック
 * @param {string}   [props.className='']         - 追加クラス名
 * @returns {HTMLElement}
 */
export const createInformationPanel = ({
  type = 'Progress',
  message = '',
  textLinkLabel = '',
  onTextLinkClick,
  className = '',
}) => {
  const panel = document.createElement('div');
  panel.className = [
    'storybook-information-panel',
    `storybook-information-panel--${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  panel.setAttribute('role', 'status');
  panel.setAttribute('aria-live', 'polite');

  // Icon
  const iconWrapper = document.createElement('span');
  iconWrapper.className = 'storybook-information-panel__icon';
  iconWrapper.innerHTML = ICONS[type] ?? ICONS.Progress;
  panel.appendChild(iconWrapper);

  // Body
  const body = document.createElement('div');
  body.className = 'storybook-information-panel__body';

  const msg = document.createElement('p');
  msg.className = 'storybook-information-panel__message';
  msg.textContent = message;
  body.appendChild(msg);

  if (textLinkLabel) {
    const link = document.createElement('a');
    link.className = 'storybook-information-panel__link';
    link.href = '#';
    link.textContent = textLinkLabel;
    if (onTextLinkClick) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        onTextLinkClick(e);
      });
    } else {
      link.addEventListener('click', (e) => e.preventDefault());
    }
    body.appendChild(link);
  }

  panel.appendChild(body);
  return panel;
};
