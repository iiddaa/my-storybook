import './dropdown-menu.css';

const ICONS = {
  pencil: `<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M11 2l3 3-8 8-3.5.5.5-3.5 8-8z"/>
    <line x1="9.5" y1="3.5" x2="12.5" y2="6.5"/>
  </svg>`,
  sync: `<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M13.5 8A5.5 5.5 0 1 1 12 4.2"/>
    <polyline points="10.5,2 13.5,4.2 10.5,6.5"/>
  </svg>`,
  link: `<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6.5 9.5a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 0 0-5-5L7 4"/>
    <path d="M9.5 6.5a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 0 0 5 5L9 12"/>
  </svg>`,
  caret_right: `<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="6,4 10,8 6,12"/>
  </svg>`,
};

/**
 * DropdownMenuコンポーネントを生成する。
 *
 * 可能な操作や遷移先を一時的に一覧で表示し、クリックで操作の実行または
 * 画面遷移ができるコンポーネント。最大2階層のドリルダウン形式をサポート。
 *
 * @param {Object}   props
 * @param {Array}    [props.items=[]]              - メニューアイテムの配列
 * @param {string}   props.items[].label           - メニュー名
 * @param {string}   [props.items[].icon]          - アイコン種別 ('pencil'|'sync'|'link')
 * @param {Array}    [props.items[].children]      - サブメニューアイテム（最大1階層）
 * @param {number|null} [props.openSubmenuIndex]   - サブメニューを強制表示するインデックス（Storybook確認用）
 * @param {Function} [props.onSelect]              - アイテム選択時のコールバック（ラベルを渡す）
 * @returns {HTMLElement}
 */
export const createDropdownMenu = ({
  items = [],
  openSubmenuIndex = null,
  onSelect,
} = {}) => {
  const menu = document.createElement('div');
  menu.className = 'storybook-dropdown-menu';
  menu.setAttribute('role', 'menu');

  items.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'storybook-dropdown-menu__item';
    if (item.children && item.children.length > 0) {
      row.classList.add('storybook-dropdown-menu__item--has-sub');
    }
    if (openSubmenuIndex === index) {
      row.classList.add('storybook-dropdown-menu__item--open');
    }
    row.setAttribute('role', 'menuitem');
    row.tabIndex = 0;

    // 内部レイアウト
    const inner = document.createElement('div');
    inner.className = 'storybook-dropdown-menu__item-inner';

    // リードアイコン
    if (item.icon && ICONS[item.icon]) {
      const iconEl = document.createElement('span');
      iconEl.className = 'storybook-dropdown-menu__icon';
      iconEl.innerHTML = ICONS[item.icon];
      inner.appendChild(iconEl);
    }

    // ラベル
    const label = document.createElement('span');
    label.className = 'storybook-dropdown-menu__label';
    label.textContent = item.label;
    inner.appendChild(label);

    // サブメニューがある場合：右端に caret_right
    if (item.children && item.children.length > 0) {
      const caretEl = document.createElement('span');
      caretEl.className = 'storybook-dropdown-menu__caret';
      caretEl.innerHTML = ICONS.caret_right;
      inner.appendChild(caretEl);
    }

    row.appendChild(inner);

    // クリックイベント（子メニューのないアイテムのみ）
    if (!item.children || item.children.length === 0) {
      row.addEventListener('click', () => {
        if (typeof onSelect === 'function') onSelect(item.label);
      });
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (typeof onSelect === 'function') onSelect(item.label);
        }
      });
    }

    // サブメニュー
    if (item.children && item.children.length > 0) {
      const sub = document.createElement('div');
      sub.className = 'storybook-dropdown-menu storybook-dropdown-menu--sub';
      sub.setAttribute('role', 'menu');

      item.children.forEach((child) => {
        const childRow = document.createElement('div');
        childRow.className = 'storybook-dropdown-menu__item';
        childRow.setAttribute('role', 'menuitem');
        childRow.tabIndex = 0;

        const childInner = document.createElement('div');
        childInner.className = 'storybook-dropdown-menu__item-inner';

        const childLabel = document.createElement('span');
        childLabel.className = 'storybook-dropdown-menu__label';
        childLabel.textContent = child.label;
        childInner.appendChild(childLabel);

        childRow.appendChild(childInner);
        childRow.addEventListener('click', (e) => {
          e.stopPropagation();
          if (typeof onSelect === 'function') onSelect(child.label);
        });
        sub.appendChild(childRow);
      });

      row.appendChild(sub);
    }

    menu.appendChild(row);
  });

  return menu;
};
