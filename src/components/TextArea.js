import './textarea.css';

/**
 * TextArea コンポーネントを生成する。
 *
 * ストレスなく長文を入力するための、十分な広さのあるエリア。
 * 5つの表示状態（未入力・入力中・入力済み・Disabled・Error）をサポートする。
 *
 * @param {Object}  props
 * @param {'default'|'active'|'filled'|'disabled'|'error'} [props.state='default']
 *   表示状態
 *   - default  : 未入力（プレースホルダー表示）
 *   - active   : 入力中（青ボーダー 2px）
 *   - filled   : 入力済み（テキスト表示）
 *   - disabled : 操作不可（背景グレー）
 *   - error    : エラー（赤ボーダー・薄赤背景・エラーメッセージ）
 * @param {string}  [props.placeholder='入力してください'] - プレースホルダーテキスト
 * @param {string}  [props.value='']                       - 入力済みテキスト（filled/error 時に使用）
 * @param {string}  [props.errorMessage='必須項目です。']  - エラーメッセージ（error 時に表示）
 * @returns {HTMLElement}
 */
export const createTextArea = ({
  state = 'default',
  placeholder = '入力してください',
  value = '',
  errorMessage = '必須項目です。',
} = {}) => {
  const isDisabled = state === 'disabled';
  const isError    = state === 'error';
  const isActive   = state === 'active';

  const root = document.createElement('div');
  root.className = 'storybook-textarea';

  // --- textarea 本体 ---
  const textarea = document.createElement('textarea');
  textarea.className = [
    'storybook-textarea__field',
    isActive   ? 'storybook-textarea__field--active'   : '',
    isDisabled ? 'storybook-textarea__field--disabled' : '',
    isError    ? 'storybook-textarea__field--error'    : '',
  ].filter(Boolean).join(' ');

  textarea.placeholder = placeholder;

  if (state === 'filled' || state === 'error' || state === 'active') {
    textarea.value = value;
  }

  if (isDisabled) {
    textarea.disabled = true;
    textarea.setAttribute('aria-disabled', 'true');
  }

  if (isError) {
    textarea.setAttribute('aria-invalid', 'true');
    textarea.setAttribute('aria-describedby', 'textarea-error-msg');
  }

  root.appendChild(textarea);

  // --- エラーメッセージ ---
  if (isError && errorMessage) {
    const errEl = document.createElement('p');
    errEl.className = 'storybook-textarea__error';
    errEl.id = 'textarea-error-msg';
    errEl.setAttribute('role', 'alert');
    errEl.textContent = errorMessage;
    root.appendChild(errEl);
  }

  return root;
};
