import './checkbox.css';

const CHECK_ICON = `<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M1 3.5L3.8 6.5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/**
 * Checkbox コンポーネントを生成する。
 *
 * 選択肢に対し、ON/OFFを切り替えるもの。
 * 複数の項目に対して、自由な組み合わせでON/OFFが選べる。
 *
 * 状態: unchecked / hover（CSS） / checked / indeterminate
 * 各状態に enabled / disabled のバリアントあり。
 *
 * @param {Object}   props
 * @param {string}   [props.label='アイテム 1']    - ラベルテキスト
 * @param {string}   [props.description='']       - 説明文（空文字の場合は非表示）
 * @param {boolean}  [props.checked=false]        - 選択済み状態
 * @param {boolean}  [props.indeterminate=false]  - 不確定状態（ダッシュ表示）。checked より優先される
 * @param {boolean}  [props.disabled=false]       - 無効状態
 * @param {Function} [props.onChange=null]        - クリック時のコールバック
 * @returns {HTMLElement}
 */
export const createCheckbox = ({
  label = 'アイテム 1',
  description = '',
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange = null,
} = {}) => {
  const root = document.createElement(disabled ? 'div' : 'button');
  root.className = `storybook-checkbox${disabled ? ' storybook-checkbox--disabled' : ''}`;

  if (!disabled) {
    root.type = 'button';
    root.setAttribute('role', 'checkbox');
    root.setAttribute('aria-checked', indeterminate ? 'mixed' : String(checked));
    if (typeof onChange === 'function') {
      root.addEventListener('click', onChange);
    }
  }

  // --- チェックボックス本体 ---
  const boxContainer = document.createElement('span');
  boxContainer.className = 'storybook-checkbox__box-container';

  const box = document.createElement('span');
  const boxModifiers = [];
  if (indeterminate) boxModifiers.push('storybook-checkbox__box--indeterminate');
  else if (checked) boxModifiers.push('storybook-checkbox__box--checked');
  box.className = ['storybook-checkbox__box', ...boxModifiers].join(' ');

  if (indeterminate) {
    const bar = document.createElement('span');
    bar.className = 'storybook-checkbox__indeterminate-bar';
    box.appendChild(bar);
  } else if (checked) {
    box.innerHTML = CHECK_ICON;
  }

  boxContainer.appendChild(box);
  root.appendChild(boxContainer);

  // --- テキスト ---
  const textContainer = document.createElement('span');
  textContainer.className = 'storybook-checkbox__text';

  const labelEl = document.createElement('span');
  labelEl.className = 'storybook-checkbox__label';
  labelEl.textContent = label;
  textContainer.appendChild(labelEl);

  if (description) {
    const descEl = document.createElement('span');
    descEl.className = 'storybook-checkbox__description';
    descEl.textContent = description;
    textContainer.appendChild(descEl);
  }

  root.appendChild(textContainer);

  return root;
};
