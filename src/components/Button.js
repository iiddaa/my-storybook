import './button.css';

/**
 * ボタンを生成する。
 *
 * 「クリック」や「キーボードのエンター操作」によって、
 * ユーザーの意図通りのアクションを起こすコンポーネント。
 *
 * @param {Object}   props
 * @param {string}   [props.label='ボタン']         - ボタンに表示するテキスト
 * @param {string}   [props.variant='Primary']      - ボタン種別。'Primary'|'Secondary'|'Tertiary'|'Ghost'|'Negative'|'Danger'
 * @param {string}   [props.size='M']               - サイズ。'M'|'S'
 * @param {string}   [props.state='Default']        - 状態。'Default'|'Hover'|'Disable'
 * @param {Function} [props.onClick]                - クリック時のコールバック
 * @param {string}   [props.className='']           - 追加クラス名
 * @returns {HTMLButtonElement}
 */
export const createButton = ({
  label = 'ボタン',
  variant = 'Primary',
  size = 'M',
  state = 'Default',
  onClick,
  className = '',
}) => {
  const button = document.createElement('button');

  button.className = [
    'storybook-button',
    `storybook-button--${variant}`,
    `storybook-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  button.dataset.state = state;
  button.disabled = state === 'Disable';
  button.type = 'button';
  button.textContent = label;

  // aria-disabled は disabled と二重に設定することで支援技術への通知を補強する
  button.setAttribute('aria-disabled', state === 'Disable' ? 'true' : 'false');

  if (onClick && state !== 'Disable') {
    button.addEventListener('click', onClick);
  }

  return button;
};
