import './combo-box.css';

const CARET_DOWN = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const X_ICON = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

/**
 * ComboBox コンポーネントを生成する。
 *
 * 多数の選択肢の中から検索し、一つもしくは複数のアイテムを選べるもの。
 * 選択肢を格納するため、画面の情報量を減らすことができる。
 *
 * @param {Object}   props
 * @param {string[]} [props.options=[]]          - 選択肢リスト
 * @param {string[]} [props.selectedValues=[]]   - 初期選択済みの値
 * @param {string}   [props.placeholder='選択してください'] - プレースホルダー
 * @param {boolean}  [props.multiple=true]       - 複数選択を許可するか
 * @param {boolean}  [props.disabled=false]      - 無効化状態
 * @param {Function} [props.onSelect=null]       - 選択時コールバック (value: string) => void
 * @param {Function} [props.onRemove=null]       - 削除時コールバック (value: string) => void
 * @returns {HTMLElement}
 */
export const createComboBox = ({
  options = [],
  selectedValues = [],
  placeholder = '選択してください',
  multiple = true,
  disabled = false,
  onSelect = null,
  onRemove = null,
} = {}) => {
  let selected = [...selectedValues];
  let isOpen = false;
  let filterText = '';

  const root = document.createElement('div');
  root.className = 'storybook-combo-box';

  const field = document.createElement('div');
  const dropdown = document.createElement('div');
  dropdown.className = 'storybook-combo-box__dropdown';
  dropdown.setAttribute('role', 'listbox');

  root.appendChild(field);
  root.appendChild(dropdown);

  // ── レンダリング ──────────────────────────────────────

  function renderField() {
    field.innerHTML = '';
    const classes = ['storybook-combo-box__field'];
    if (isOpen) classes.push('storybook-combo-box__field--active');
    if (disabled) classes.push('storybook-combo-box__field--disabled');
    field.className = classes.join(' ');

    // 複数選択チップ
    if (multiple) {
      selected.forEach((val) => {
        const chip = document.createElement('span');
        chip.className = `storybook-combo-box__chip${disabled ? ' storybook-combo-box__chip--disabled' : ''}`;

        const text = document.createElement('span');
        text.className = 'storybook-combo-box__chip-text';
        text.textContent = val;
        chip.appendChild(text);

        if (!disabled) {
          const closeBtn = document.createElement('button');
          closeBtn.type = 'button';
          closeBtn.className = 'storybook-combo-box__chip-close';
          closeBtn.setAttribute('aria-label', `${val}を削除`);
          closeBtn.innerHTML = X_ICON;
          closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeValue(val);
          });
          chip.appendChild(closeBtn);
        }

        field.appendChild(chip);
      });
    }

    // テキスト入力
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'storybook-combo-box__input';
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-expanded', String(isOpen));
    input.setAttribute('aria-autocomplete', 'list');
    input.disabled = disabled;

    if (!multiple && selected.length > 0) {
      input.value = selected[0];
    } else {
      input.placeholder = selected.length === 0 ? placeholder : '';
      input.value = filterText;
    }

    input.addEventListener('focus', () => {
      if (disabled) return;
      isOpen = true;
      renderField();
      renderDropdown();
    });

    input.addEventListener('input', (e) => {
      filterText = e.target.value;
      isOpen = true;
      renderDropdown();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        close();
      }
    });

    field.appendChild(input);

    // カレット
    const caret = document.createElement('span');
    caret.className = 'storybook-combo-box__caret';
    caret.innerHTML = CARET_DOWN;
    field.appendChild(caret);

    if (!disabled) {
      field.addEventListener('mousedown', (e) => {
        if (e.target === field || e.target === caret || caret.contains(e.target)) {
          e.preventDefault();
          isOpen = !isOpen;
          if (isOpen) input.focus();
          else input.blur();
          renderField();
          renderDropdown();
        }
      });
    }
  }

  function renderDropdown() {
    dropdown.innerHTML = '';
    dropdown.className = `storybook-combo-box__dropdown${isOpen ? ' storybook-combo-box__dropdown--open' : ''}`;

    const filtered = options.filter((opt) => {
      if (!filterText) return multiple ? !selected.includes(opt) : true;
      return opt.includes(filterText) && (multiple ? !selected.includes(opt) : true);
    });

    if (filtered.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'storybook-combo-box__empty';
      empty.textContent = filterText
        ? '一致する選択肢がありません。'
        : '選択肢がありません。';
      dropdown.appendChild(empty);
      return;
    }

    filtered.forEach((opt) => {
      const item = document.createElement('div');
      item.className = 'storybook-combo-box__option';
      item.setAttribute('role', 'option');
      item.textContent = opt;
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        selectValue(opt);
      });
      dropdown.appendChild(item);
    });
  }

  // ── 操作 ─────────────────────────────────────────────

  function selectValue(val) {
    if (multiple) {
      if (!selected.includes(val)) {
        selected.push(val);
      }
    } else {
      selected = [val];
    }
    filterText = '';
    isOpen = multiple; // 複数選択時はドロップダウンを維持
    onSelect && onSelect(val);
    renderField();
    renderDropdown();
    if (multiple) {
      const input = field.querySelector('input');
      if (input) input.focus();
    } else {
      close();
    }
  }

  function removeValue(val) {
    selected = selected.filter((v) => v !== val);
    onRemove && onRemove(val);
    renderField();
    renderDropdown();
  }

  function close() {
    isOpen = false;
    filterText = '';
    renderField();
    renderDropdown();
  }

  // フォーカスアウト
  document.addEventListener('click', (e) => {
    if (!root.contains(e.target) && isOpen) {
      close();
    }
  });

  // 初期描画
  renderField();
  renderDropdown();

  return root;
};
