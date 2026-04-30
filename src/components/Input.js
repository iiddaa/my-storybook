import './input.css';

/**
 * Inputコンポーネントを生成する。
 *
 * ユーザーが「何を入力すべきか」を理解している前提で、
 * その情報をテキストで入力するコンポーネント。
 *
 * @param {Object}   props
 * @param {string}   [props.placeholder='入力してください'] - プレースホルダーテキスト
 * @param {string}   [props.value='']                     - 入力値
 * @param {'default'|'active'|'filled'|'disabled'|'error'} [props.state='default'] - 表示状態
 * @param {string}   [props.errorMessage='形式に不備があります。'] - エラー時のメッセージ
 * @param {Function} [props.onChange]                     - 入力変更コールバック
 * @returns {HTMLElement}
 */
export const createInput = ({
  placeholder = '入力してください',
  value = '',
  state = 'default',
  errorMessage = '形式に不備があります。',
  onChange,
} = {}) => {
  const isDisabled = state === 'disabled';
  const isError    = state === 'error';

  // --- Wrapper ---
  const wrapper = document.createElement('div');
  wrapper.className = 'storybook-input-wrapper';

  // --- Input element ---
  const input = document.createElement('input');
  input.type = 'text';
  input.className = [
    'storybook-input',
    state === 'active'   ? 'storybook-input--active'   : '',
    state === 'filled'   ? 'storybook-input--filled'   : '',
    state === 'disabled' ? 'storybook-input--disabled' : '',
    state === 'error'    ? 'storybook-input--error'    : '',
  ].filter(Boolean).join(' ');

  input.placeholder = placeholder;
  input.disabled    = isDisabled;

  if (state === 'active' || state === 'filled' || state === 'error') {
    input.value = value || (state === 'active' ? '入力中のテキスト' : '入力済みのテキスト');
  }

  input.setAttribute('aria-invalid', isError ? 'true' : 'false');
  if (isError) input.setAttribute('aria-describedby', 'input-error-msg');

  input.addEventListener('input', (e) => {
    if (typeof onChange === 'function') onChange(e.target.value);
  });

  wrapper.appendChild(input);

  // --- Error message ---
  if (isError) {
    const errorRow = document.createElement('div');
    errorRow.className = 'storybook-input-error';
    errorRow.id = 'input-error-msg';
    errorRow.setAttribute('role', 'alert');

    errorRow.innerHTML = `
      <svg class="storybook-input-error__icon" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           width="16" height="16" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="13"/>
        <line x1="12" y1="16" x2="12" y2="16.5"/>
      </svg>
    `;

    const msg = document.createElement('p');
    msg.className = 'storybook-input-error__message';
    msg.textContent = errorMessage;
    errorRow.appendChild(msg);

    wrapper.appendChild(errorRow);
  }

  return wrapper;
};
