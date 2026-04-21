import './radio-button.css';

/**
 * ラジオボタン単体アイテムを生成する。
 *
 * 選択肢から一つを選べるコンポーネント。
 * 選択肢を格納せずに全て表示するため、選択肢を一覧できる。
 *
 * Figmaガイドライン:
 * - ラベルも含めてクリック/タップ領域を確保する
 * - 操作をしたら即座に反応を返す、過剰なアニメーションはつけない
 *
 * @param {Object}   props
 * @param {string}   props.label              - 選択肢のラベルテキスト
 * @param {string}   props.value              - この選択肢の値
 * @param {string}   [props.name='']          - ラジオグループ名（同一グループで共通にする）
 * @param {boolean}  [props.checked=false]    - 選択済み状態
 * @param {boolean}  [props.disabled=false]   - 無効状態
 * @param {string}   [props.hint='']          - ラベル下に表示するヒントテキスト（任意）
 * @param {Function} [props.onChange]         - 選択変更時のコールバック
 * @returns {HTMLElement}
 */
export const createRadioButton = ({
  label,
  value,
  name = '',
  checked = false,
  disabled = false,
  hint = '',
  onChange,
}) => {
  const itemLabel = document.createElement('label');
  itemLabel.className = [
    'storybook-radio-item',
    disabled ? 'storybook-radio-item--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  // ネイティブ input（アクセシビリティ・キーボード操作用）
  const input = document.createElement('input');
  input.type = 'radio';
  input.className = 'storybook-radio-input';
  input.name = name;
  input.value = value;
  input.checked = checked;
  input.disabled = disabled;
  if (onChange) {
    input.addEventListener('change', onChange);
  }

  // カスタムラジオ丸
  const circle = document.createElement('span');
  circle.className = [
    'storybook-radio-circle',
    checked ? 'storybook-radio-circle--checked' : '',
  ]
    .filter(Boolean)
    .join(' ');

  // テキストエリア
  const textWrap = document.createElement('span');
  textWrap.className = 'storybook-radio-text';

  const labelEl = document.createElement('span');
  labelEl.className = 'storybook-radio-label';
  labelEl.innerText = label;
  textWrap.appendChild(labelEl);

  if (hint) {
    const hintEl = document.createElement('span');
    hintEl.className = 'storybook-radio-hint';
    hintEl.innerText = hint;
    textWrap.appendChild(hintEl);
  }

  itemLabel.appendChild(input);
  itemLabel.appendChild(circle);
  itemLabel.appendChild(textWrap);

  return itemLabel;
};

/**
 * ラジオボタングループを生成する。
 *
 * `options` の各アイテムに対して createRadioButton を呼び出し、
 * 縦並びのグループとしてまとめる。
 *
 * @param {Object}   props
 * @param {string}   props.name              - グループ名（全アイテムで共通）
 * @param {Array}    props.options           - 選択肢の配列
 * @param {string}   props.options[].label  - 選択肢のラベル
 * @param {string}   props.options[].value  - 選択肢の値
 * @param {string}   [props.options[].hint] - ヒントテキスト（任意）
 * @param {boolean}  [props.options[].disabled] - 個別無効（任意）
 * @param {string}   [props.value='']       - 現在選択中の値
 * @param {Function} [props.onChange]       - 選択変更時のコールバック
 * @returns {HTMLElement}
 */
export const createRadioGroup = ({
  name,
  options = [],
  value: selectedValue = '',
  onChange,
}) => {
  const group = document.createElement('div');
  group.className = 'storybook-radio-group';

  options.forEach((opt) => {
    const item = createRadioButton({
      label: opt.label,
      value: opt.value,
      name,
      checked: opt.value === selectedValue,
      disabled: opt.disabled ?? false,
      hint: opt.hint ?? '',
      onChange,
    });
    group.appendChild(item);
  });

  return group;
};
