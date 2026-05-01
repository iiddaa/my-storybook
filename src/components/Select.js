import './select.css';

const CARET_DOWN_SVG = `
  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const CHIP_CLOSE_SVG = `
  <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true">
    <line x1="2" y1="2" x2="10" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="10" y1="2" x2="2" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`;

/**
 * Selectコンポーネントを生成する。
 *
 * 選択肢から一つもしくは複数のアイテムを選べるコンポーネント。
 * 選択肢を格納するため画面の情報量を減らすことができる。
 * 選択後は選択した項目のみ表示され、一目で認識できる。
 *
 * @param {Object}   props
 * @param {'default'|'open'|'filled-single'|'filled-multiple'|'disabled'} [props.state='default']
 *   表示状態
 *   - default        : 未選択
 *   - open           : 選択中（ドロップダウン表示）
 *   - filled-single  : 選択済み（単数）
 *   - filled-multiple: 選択済み（複数）
 *   - disabled       : 操作不可
 * @param {string}   [props.placeholder='選択してください'] - プレースホルダーテキスト
 * @param {string}   [props.selectedValue='選択した項目名'] - 選択済み（単数）の表示値
 * @param {string[]} [props.selectedValues]                - 選択済み（複数）のチップ値
 * @param {string[]} [props.options]                       - ドロップダウンの選択肢（open 時に表示）
 * @param {Function} [props.onSelect]                      - 選択肢クリック時のコールバック
 * @param {Function} [props.onRemoveChip]                  - チップ削除時のコールバック
 * @returns {HTMLElement}
 */
export const createSelect = ({
  state = 'default',
  placeholder = '選択してください',
  selectedValue = '選択した項目名',
  selectedValues = ['選択した項目名', '選択した項目名'],
  options = ['選択肢_1', '選択肢_2', '選択肢_3'],
  onSelect,
  onRemoveChip,
} = {}) => {
  const isDisabled = state === 'disabled';
  const isOpen     = state === 'open';

  // --- Root ---
  const root = document.createElement('div');
  root.className = 'storybook-select';

  // --- Field ---
  const field = document.createElement('div');
  field.className = [
    'storybook-select__field',
    isOpen               ? 'storybook-select__field--open'     : '',
    isDisabled           ? 'storybook-select__field--disabled' : '',
    state === 'filled-multiple' ? 'storybook-select__field--multiple' : '',
  ].filter(Boolean).join(' ');

  if (!isDisabled) {
    field.setAttribute('role', 'combobox');
    field.setAttribute('aria-expanded', String(isOpen));
    field.tabIndex = 0;
  } else {
    field.setAttribute('aria-disabled', 'true');
  }

  // --- Field 左側コンテンツ ---
  if (state === 'filled-multiple') {
    // チップ群
    const chipsWrap = document.createElement('div');
    chipsWrap.className = 'storybook-select__chips';

    selectedValues.forEach((val) => {
      const chip = document.createElement('span');
      chip.className = 'storybook-select__chip';

      const chipText = document.createElement('span');
      chipText.className = 'storybook-select__chip-text';
      chipText.textContent = val;

      const chipClose = document.createElement('button');
      chipClose.type = 'button';
      chipClose.className = 'storybook-select__chip-close';
      chipClose.setAttribute('aria-label', `${val}を削除`);
      chipClose.innerHTML = CHIP_CLOSE_SVG;
      chipClose.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof onRemoveChip === 'function') onRemoveChip(val);
      });

      chip.appendChild(chipText);
      chip.appendChild(chipClose);
      chipsWrap.appendChild(chip);
    });

    field.appendChild(chipsWrap);
  } else if (state === 'filled-single') {
    // 選択済みテキスト（単数）
    const textEl = document.createElement('span');
    textEl.className = 'storybook-select__value';
    textEl.textContent = selectedValue;
    field.appendChild(textEl);
  } else {
    // プレースホルダー
    const textEl = document.createElement('span');
    textEl.className = 'storybook-select__placeholder';
    textEl.textContent = placeholder;
    field.appendChild(textEl);
  }

  // --- Caret icon ---
  const caretEl = document.createElement('span');
  caretEl.className = 'storybook-select__caret';
  caretEl.innerHTML = CARET_DOWN_SVG;
  field.appendChild(caretEl);

  root.appendChild(field);

  // --- Dropdown (open 状態のみ表示) ---
  if (isOpen && options.length > 0) {
    const dropdown = document.createElement('div');
    dropdown.className = 'storybook-select__dropdown';
    dropdown.setAttribute('role', 'listbox');

    options.forEach((opt) => {
      const item = document.createElement('div');
      item.className = 'storybook-select__option';
      item.setAttribute('role', 'option');
      item.tabIndex = 0;
      item.textContent = opt;

      item.addEventListener('click', () => {
        if (typeof onSelect === 'function') onSelect(opt);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (typeof onSelect === 'function') onSelect(opt);
        }
      });

      dropdown.appendChild(item);
    });

    root.appendChild(dropdown);
  }

  return root;
};
