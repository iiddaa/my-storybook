import './floating-area.css';

/**
 * FloatingArea コンポーネントを生成する。
 *
 * 該当の画面での最終的なアクションが画面に常に表示するもの。
 * ユーザーにとってゴールが明確になり、意図しない離脱や未保存を防げる。
 *
 * @param {Object}      props
 * @param {boolean}     [props.disabled=false]             - ボタンの無効状態
 * @param {string}      [props.primaryLabel='次へ進む']     - プライマリボタンのラベル
 * @param {string}      [props.secondaryLabel='キャンセル'] - セカンダリボタンのラベル
 * @param {Function}    [props.onPrimary=null]             - プライマリボタンのクリックコールバック
 * @param {Function}    [props.onSecondary=null]           - セカンダリボタンのクリックコールバック
 * @param {HTMLElement} [props.extraContent=null]          - ボタングループの左に配置する追加コンテンツ
 * @param {boolean}     [props.fixed=false]               - true で position:fixed ブラウザ下部に固定
 * @returns {HTMLElement}
 */
export const createFloatingArea = ({
  disabled = false,
  primaryLabel = '次へ進む',
  secondaryLabel = 'キャンセル',
  onPrimary = null,
  onSecondary = null,
  extraContent = null,
  fixed = false,
} = {}) => {
  const root = document.createElement('div');
  root.className = [
    'storybook-floating-area',
    disabled ? 'storybook-floating-area--disabled' : '',
    fixed ? 'storybook-floating-area--fixed' : '',
  ].filter(Boolean).join(' ');
  root.setAttribute('role', 'toolbar');
  root.setAttribute('aria-label', 'アクションエリア');

  // 追加コンテンツ（ラジオボタン＋セレクトなど）— ボタングループの左に配置
  if (extraContent instanceof HTMLElement) {
    root.appendChild(extraContent);
  }

  // ボタングループ（セカンダリ＋プライマリ）
  const btnGroup = document.createElement('div');
  btnGroup.className = 'storybook-floating-area__btn-group';

  const secondaryBtn = document.createElement('button');
  secondaryBtn.type = 'button';
  secondaryBtn.className = [
    'storybook-floating-area__btn',
    'storybook-floating-area__btn--secondary',
    disabled ? 'storybook-floating-area__btn--disabled' : '',
  ].filter(Boolean).join(' ');
  secondaryBtn.textContent = secondaryLabel;
  secondaryBtn.disabled = disabled;
  if (!disabled && typeof onSecondary === 'function') {
    secondaryBtn.addEventListener('click', onSecondary);
  }
  btnGroup.appendChild(secondaryBtn);

  const primaryBtn = document.createElement('button');
  primaryBtn.type = 'button';
  primaryBtn.className = [
    'storybook-floating-area__btn',
    'storybook-floating-area__btn--primary',
    disabled ? 'storybook-floating-area__btn--disabled' : '',
  ].filter(Boolean).join(' ');
  primaryBtn.textContent = primaryLabel;
  primaryBtn.disabled = disabled;
  if (!disabled && typeof onPrimary === 'function') {
    primaryBtn.addEventListener('click', onPrimary);
  }
  btnGroup.appendChild(primaryBtn);

  root.appendChild(btnGroup);
  return root;
};
