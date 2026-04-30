import './search-input.css';

/**
 * SearchInputコンポーネントを生成する。
 *
 * 大量のデータから、条件に一致するものだけを探し出すコンポーネント。
 * Input とは異なり「入力した結果、何が出るか」に価値がある。
 * タイトルラベルは不要。配置場所やアイコンで検索窓だと認知させる。
 *
 * @param {Object}   props
 * @param {string}   [props.placeholder='店舗名、店番、住所で検索'] - プレースホルダー
 * @param {string}   [props.value='']                             - 入力値
 * @param {'default'|'focus'|'active'|'filled'|'disabled'} [props.state='default'] - 表示状態
 * @param {string[]} [props.historyItems]  - 検索履歴（フォーカス時に候補として表示）
 * @param {Function} [props.onSearch]     - 検索実行コールバック（検索ワードを渡す）
 * @param {Function} [props.onHistorySelect] - 履歴クリック時のコールバック
 * @returns {HTMLElement}
 */
export const createSearchInput = ({
  placeholder = '店舗名、店番、住所で検索',
  value = '',
  state = 'default',
  historyItems = ['前回の履歴_1', '前回の履歴_2', '前回の履歴_3'],
  onSearch,
  onHistorySelect,
} = {}) => {
  const isDisabled = state === 'disabled';
  const isFocus    = state === 'focus';
  const isActive   = state === 'active';
  const isFilled   = state === 'filled';

  // --- Root ---
  const root = document.createElement('div');
  root.className = 'storybook-search-input';

  // --- Field row ---
  const field = document.createElement('div');
  field.className = [
    'storybook-search-input__field',
    (isFocus || isActive) ? 'storybook-search-input__field--focused' : '',
    isDisabled            ? 'storybook-search-input__field--disabled' : '',
  ].filter(Boolean).join(' ');

  // Search icon
  const iconWrap = document.createElement('span');
  iconWrap.className = 'storybook-search-input__icon';
  iconWrap.setAttribute('aria-hidden', 'true');
  iconWrap.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         width="16" height="16">
      <circle cx="11" cy="11" r="7"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  `;
  field.appendChild(iconWrap);

  // Input
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'storybook-search-input__input';
  input.placeholder = placeholder;
  input.disabled = isDisabled;
  input.setAttribute('aria-label', placeholder);

  if (isActive) {
    input.value = value || '入力中のテキスト';
  } else if (isFilled) {
    input.value = value || '入力済みのテキスト';
  }

  field.appendChild(input);
  root.appendChild(field);

  // --- Dropdown: フォーカス時（検索履歴） ---
  if (isFocus && historyItems && historyItems.length > 0) {
    const dropdown = document.createElement('div');
    dropdown.className = 'storybook-search-input__dropdown';
    dropdown.setAttribute('role', 'listbox');

    historyItems.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'storybook-search-input__dropdown-item';
      row.setAttribute('role', 'option');
      row.tabIndex = 0;

      const query = document.createElement('span');
      query.className = 'storybook-search-input__dropdown-query';
      query.textContent = item;

      const suffix = document.createElement('span');
      suffix.className = 'storybook-search-input__dropdown-suffix';
      suffix.textContent = 'で検索';

      row.appendChild(query);
      row.appendChild(suffix);

      row.addEventListener('click', () => {
        if (typeof onHistorySelect === 'function') onHistorySelect(item);
      });

      dropdown.appendChild(row);
    });

    root.appendChild(dropdown);
  }

  // --- Dropdown: 入力中（サジェスト「〜で検索」） ---
  if (isActive) {
    const currentValue = input.value;
    const suggest = document.createElement('div');
    suggest.className = 'storybook-search-input__dropdown storybook-search-input__dropdown--suggest';
    suggest.setAttribute('role', 'listbox');

    const row = document.createElement('div');
    row.className = 'storybook-search-input__dropdown-item';
    row.setAttribute('role', 'option');
    row.tabIndex = 0;

    const query = document.createElement('span');
    query.className = 'storybook-search-input__dropdown-query';
    query.textContent = currentValue;

    const suffix = document.createElement('span');
    suffix.className = 'storybook-search-input__dropdown-suffix';
    suffix.textContent = 'で検索';

    row.appendChild(query);
    row.appendChild(suffix);
    row.addEventListener('click', () => {
      if (typeof onSearch === 'function') onSearch(currentValue);
    });

    suggest.appendChild(row);
    root.appendChild(suggest);
  }

  // --- キーボード操作（Enterで検索） ---
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q && typeof onSearch === 'function') onSearch(q);
    }
  });

  return root;
};
