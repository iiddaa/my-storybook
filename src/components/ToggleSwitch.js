import './toggle-switch.css';

/**
 * ToggleSwitch コンポーネントを生成する。
 *
 * 一つの機能を、ON/OFFの状態に即座に切り替えるもの。
 * 現状が有効なのか無効なのかが、直感的に理解できる。
 *
 * 状態: OFF / ON × enabled / disabled（合計4状態）
 * ON disabled のトラックは薄ブルー（#98c5fb）、disabled ラベルは opacity 0.5。
 *
 * @param {Object}   props
 * @param {string}   [props.label='アイテム 1']  - ラベルテキスト（空文字でラベルなし）
 * @param {boolean}  [props.checked=false]      - ON/OFF 状態（true = ON）
 * @param {boolean}  [props.disabled=false]     - 無効状態
 * @param {Function} [props.onChange=null]      - 変更時のコールバック
 * @returns {HTMLElement}
 */
export const createToggleSwitch = ({
  label = 'アイテム 1',
  checked = false,
  disabled = false,
  onChange = null,
} = {}) => {
  const root = document.createElement('label');
  root.className = [
    'storybook-toggle-switch',
    checked   ? 'storybook-toggle-switch--on'       : '',
    disabled  ? 'storybook-toggle-switch--disabled' : '',
  ].filter(Boolean).join(' ');

  // ネイティブ input（アクセシビリティ・キーボード操作用）
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'storybook-toggle-switch__input';
  input.checked = checked;
  input.disabled = disabled;
  if (typeof onChange === 'function') {
    input.addEventListener('change', onChange);
  }

  // トグルトラック
  const track = document.createElement('span');
  track.className = 'storybook-toggle-switch__track';

  // ノブ
  const knob = document.createElement('span');
  knob.className = 'storybook-toggle-switch__knob';
  track.appendChild(knob);

  root.appendChild(input);
  root.appendChild(track);

  // ラベル
  if (label) {
    const labelEl = document.createElement('span');
    labelEl.className = 'storybook-toggle-switch__label';
    labelEl.textContent = label;
    root.appendChild(labelEl);
  }

  return root;
};
